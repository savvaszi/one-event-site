"""Compare two Astro builds and produce a translation review document."""

import argparse
from collections import Counter
from dataclasses import dataclass
from html import escape
from html.parser import HTMLParser
from pathlib import Path

LOCALES = {"el": "Greek", "es": "Spanish"}
BLOCKS = set("""
    address article aside blockquote button caption dd details dialog div dl dt
    fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header label legend
    li main nav ol option p section summary table td th tr ul
""".split())
INLINE_CONTEXTS = {"p", "label", "summary", "caption", "figcaption", "button", "h1", "h2", "h3", "h4", "h5", "h6"}
IGNORED = {"script", "style", "svg", "template"}
COPY_ATTRIBUTES = {
    "alt": "Image description",
    "aria-label": "Accessible label",
    "data-caption": "Gallery caption",
    "placeholder": "Field placeholder",
    "title": "Tooltip",
}
Copy = tuple[str, str]


class PageCopy(HTMLParser):
    def __init__(self, file: Path):
        super().__init__()
        self.language = None
        self.has_main = False
        self.entries: Counter[Copy] = Counter()
        self.area = None
        self.in_main = False
        self.inline_depth = 0
        self.span_depth = 0
        self.ignored: list[str] = []
        self.text: list[str] = []
        self.feed(file.read_text(encoding="utf-8"))
        self.close()
        self.flush()

    def add(self, field, text):
        text = " ".join(text.split())
        if any(character.isalnum() for character in text):
            self.entries[(field, text)] += 1

    def flush(self):
        if self.area and self.text:
            field = self.area
            if field == "Shared text" and self.in_main:
                field = "Content"
            self.add(field, "".join(self.text))
        self.text.clear()

    def separates_text(self, tag):
        return tag in BLOCKS or (tag in {"a", "span"} and not (self.inline_depth or self.span_depth))

    def handle_starttag(self, tag, attributes):
        if tag in IGNORED:
            self.ignored.append(tag)
        if self.ignored:
            return

        attrs = dict(attributes)
        if tag == "html":
            self.language = attrs.get("lang")
        elif tag == "title":
            self.area = "Page title"
        elif tag == "meta":
            if attrs.get("name") == "description" or attrs.get("property") == "og:description":
                self.add("Page description", attrs.get("content") or "")
            if attrs.get("property") == "og:title":
                self.add("Page title", attrs.get("content") or "")
        elif tag == "body":
            self.area = "Shared text"

        if self.separates_text(tag) or tag == "hr":
            self.flush()
        elif tag == "br":
            self.text.append(" ")
        if tag in INLINE_CONTEXTS:
            self.inline_depth += 1
        if tag == "span":
            self.span_depth += 1
        if tag == "main":
            self.has_main = self.in_main = True
        if self.area == "Shared text":
            if tag == "a" and attrs.get("href"):
                self.add("Link target" if self.in_main else "Shared link target", attrs["href"])
            for attribute, field in COPY_ATTRIBUTES.items():
                if attrs.get(attribute):
                    self.add(field, attrs[attribute])

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        self.handle_endtag(tag)

    def handle_endtag(self, tag):
        if self.ignored:
            if tag == self.ignored[-1]:
                self.ignored.pop()
            return
        if tag in INLINE_CONTEXTS and self.inline_depth:
            self.inline_depth -= 1
        if tag == "span" and self.span_depth:
            self.span_depth -= 1
        if self.separates_text(tag) or tag in {"title", "body"}:
            self.flush()
        if tag == "main":
            self.in_main = False
        if tag in {"title", "body"}:
            self.area = None

    def handle_data(self, data):
        if self.area and not self.ignored:
            self.text.append(data)


@dataclass
class Changes:
    entries: dict[Copy, list[str]]
    missing: dict[str, tuple[str, ...]]
    removed: tuple[str, ...]
    removed_copy: dict[Copy, list[str]]


def read_pages(directory: Path) -> dict[str, PageCopy]:
    if not (directory / "index.html").is_file():
        raise ValueError(f"Build output is missing a homepage in {directory}")

    pages = {}
    for file in sorted(directory.rglob("*.html")):
        path = file.relative_to(directory)
        if path.name == "index.html":
            route = "/" + "/".join(path.parent.parts)
            if route != "/":
                route += "/"
        else:
            route = "/" + path.as_posix()
        page = PageCopy(file)
        if page.has_main:
            pages[route] = page
    if "/" not in pages or pages["/"].language != "en":
        raise ValueError(f"Expected an English site homepage in {directory}")
    return pages


def english_pages(pages):
    return {
        route: page for route, page in pages.items()
        if route.split("/")[1] not in LOCALES
    }


def collect_changes(before: Path, after: Path) -> Changes:
    old = english_pages(read_pages(before))
    candidate = read_pages(after)
    current = english_pages(candidate)
    inherited = {
        entry for page in old.values() for entry in page.entries
        if entry[0] in {"Shared text", "Shared link target", "Accessible label", "Tooltip"}
    }
    entries = {}
    missing = {}
    removed_copy = {}
    for route in sorted(current):
        page = current[route]
        absent = tuple(
            locale for locale in LOCALES
            if candidate.get(f"/{locale}{route}") is None
            or candidate[f"/{locale}{route}"].language != locale
        )
        if absent:
            missing[route] = absent
        if route in old:
            previous = old[route].entries
            added = page.entries - previous
            for entry in previous - page.entries:
                removed_copy.setdefault(entry, []).append(route)
        else:
            added = [entry for entry in page.entries if entry not in inherited]
        for entry in added:
            entries.setdefault(entry, []).append(route)

    return Changes(entries, missing, tuple(sorted(old.keys() - current.keys())), removed_copy)


def should_translate(entry: Copy) -> bool:
    field, text = entry
    return field not in {"Link target", "Shared link target"} and any(character.isalpha() for character in text)


def render_report(changes: Changes, translations: dict[str, list[str]]) -> str:
    lines = [
        "# Greek and Spanish translation drafts",
        "",
        "Review the wording, names, figures and links. Add approved copy to the matching language files in this pull request.",
        "",
    ]
    if changes.missing:
        lines.extend(["## Missing localized pages", ""])
        for route, locales in changes.missing.items():
            lines.append(f"- <code>{escape(route)}</code> · {', '.join(LOCALES[locale] for locale in locales)}")
        lines.append("")
    if changes.removed:
        lines.extend(["## Removed English pages", ""])
        lines.extend(f"- <code>{escape(route)}</code> · Check the matching localized routes and sitemap." for route in changes.removed)
        lines.append("")
    if not changes.entries:
        lines.extend(["No new or changed English copy to translate.", ""])
    else:
        lines.extend(["## New or changed copy", ""])
        draft_index = 0
        for index, (entry, routes) in enumerate(changes.entries.items(), start=1):
            field, original = entry
            locations = ", ".join(f"<code>{escape(route)}</code>" for route in routes)
            lines.append(f"{index}. **{field}** · {locations}")
            if should_translate(entry):
                lines.append(f"   - **English:** {escape(original)}")
                for locale, language in LOCALES.items():
                    lines.append(f"   - **{language}:** {escape(translations[locale][draft_index])}")
                draft_index += 1
            else:
                lines.append(f"   - Check the figure or link in both language versions. <code>{escape(original)}</code>")
            lines.append("")
    if changes.removed_copy:
        lines.extend(["## Previous English copy to check in the translations", ""])
        for (field, text), routes in changes.removed_copy.items():
            locations = ", ".join(f"<code>{escape(route)}</code>" for route in routes)
            lines.append(f"- **{field}** · {locations} · {escape(text)}")

    return "\n".join(lines) + "\n"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--before", required=True, type=Path, help="Build output for the base revision.")
    parser.add_argument("--after", required=True, type=Path, help="Build output for the proposed revision.")
    parser.add_argument("--output", required=True, type=Path, help="Markdown review document.")
    parser.add_argument("--model-cache", required=True, type=Path, help="Directory for downloaded model files.")
    args = parser.parse_args()

    changes = collect_changes(args.before, args.after)
    translations = {}
    originals = [entry[1] for entry in changes.entries if should_translate(entry)]
    if originals:
        from translation_engine import translate
        translations = {
            locale: translate(originals, locale, args.model_cache)
            for locale in LOCALES
        }

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(render_report(changes, translations), encoding="utf-8")
    print(f"{len(changes.entries)} review entries, {len(changes.missing)} pages with missing languages, "
          f"{len(changes.removed)} removed English pages.")


if __name__ == "__main__":
    main()
