import tempfile
import unittest
from pathlib import Path

from translation_drafts import collect_changes, render_report


class TranslationDraftsTest(unittest.TestCase):
    def test_detects_copy_across_pages_and_flags_missing_locales(self):
        with tempfile.TemporaryDirectory() as directory:
            before, after = (Path(directory) / name for name in ("before", "after"))
            self.page(before, "", "en", '<p>Plan an event in Athens.</p>')
            self.page(before, "destinations/", "en", "<h1>Explore Greece</h1>")
            self.page(after, "", "en", '<p>Plan an event in <strong>Thessaloniki</strong>.</p>')
            self.page(after, "destinations/", "en", "<h1>Explore Greece</h1>")
            self.page(after, "projects/example/", "en", '<h1>Conference in Athens</h1><img alt="A plenary in Athens"><script>secretText</script>')
            self.page(after, "el/projects/example/", "el", "<h1>Συνέδριο στην Αθήνα</h1>")
            self.page(after, "assets/widget/", "en", "<script>Widget configuration</script>", main=False)

            changes = collect_changes(before, after)

        self.assertEqual(changes.missing["/projects/example/"], ("es",))
        self.assertEqual(changes.missing["/"], ("el", "es"))
        self.assertNotIn("/assets/widget/", changes.missing)
        self.assertEqual(set(changes.entries), {
            ("Content", "Plan an event in Thessaloniki."),
            ("Content", "Conference in Athens"),
            ("Image description", "A plenary in Athens"),
            ("Page title", "One Event"),
        })
        self.assertEqual(changes.entries[("Content", "Plan an event in Thessaloniki.")], ["/"])

    def test_reports_shared_changes_once_and_skips_code_and_formatting(self):
        with tempfile.TemporaryDirectory() as directory:
            before, after = (Path(directory) / name for name in ("before", "after"))
            for route in ("", "get-in-touch/"):
                self.page(before, route, "en", "<p>A good place</p>", header="Home")
                self.page(after, route, "en", "<p>A <b>good</b> place</p><style>.demo {}</style>", header="Start here")

            changes = collect_changes(before, after)

        self.assertEqual(changes.entries, {("Shared text", "Start here"): ["/", "/get-in-touch/"]})
        report = render_report(changes, {"el": ["Ξεκινήστε εδώ"], "es": ["Empiece aquí"]})
        self.assertIn("Ξεκινήστε εδώ", report)
        self.assertIn("Empiece aquí", report)
        self.assertIn("/get-in-touch/", report)

    def test_flags_removed_pages_and_ignores_purely_localized_edits(self):
        with tempfile.TemporaryDirectory() as directory:
            before, after = (Path(directory) / name for name in ("before", "after"))
            self.page(before, "", "en", "<h1>One Event</h1>")
            self.page(after, "", "en", "<h1>One Event</h1>")
            self.page(before, "old/", "en", "<h1>Old offer</h1>")
            self.page(before, "el/", "el", "<h1>Παλιά μετάφραση</h1>")
            self.page(after, "el/", "el", "<h1>Νέα μετάφραση</h1>")

            changes = collect_changes(before, after)

        self.assertEqual(changes.entries, {})
        self.assertEqual(changes.removed, ("/old/",))

    def test_reports_numbers_links_and_lightbox_captions_for_review(self):
        with tempfile.TemporaryDirectory() as directory:
            before, after = (Path(directory) / name for name in ("before", "after"))
            self.page(before, "", "en", '<p>1,500</p><a href="/old/#venue">Venues</a>')
            self.page(after, "", "en", '<p>1,600</p><a href="/new/#venue">Venues</a><button data-caption="Conference hall">Photo</button>')

            changes = collect_changes(before, after)

        self.assertIn(("Content", "1,600"), changes.entries)
        self.assertIn(("Link target", "/new/#venue"), changes.entries)
        self.assertIn(("Gallery caption", "Conference hall"), changes.entries)
        self.assertNotIn(("Content", "Venues"), changes.entries)
        report = render_report(changes, {"el": ["Αίθουσα συνεδρίων", "Φωτογραφία"], "es": ["Sala de conferencias", "Foto"]})
        self.assertIn("Check the figure or link in both language versions", report)

    def test_keeps_card_fields_separate_and_detects_replacements_with_repeated_copy(self):
        with tempfile.TemporaryDirectory() as directory:
            before, after = (Path(directory) / name for name in ("before", "after"))
            self.page(before, "", "en", '<p>Events in Athens</p><p>See our venues</p>')
            self.page(after, "", "en", '<p>See our venues</p><p>See our venues</p><a href="/events/"><span>Athens</span><span>Plan an event</span></a><span><span>120</span>+</span>')

            changes = collect_changes(before, after)

        self.assertIn(("Content", "See our venues"), changes.entries)
        self.assertIn(("Content", "Athens"), changes.entries)
        self.assertIn(("Content", "Plan an event"), changes.entries)
        self.assertIn(("Content", "120+"), changes.entries)
        self.assertEqual(changes.removed_copy, {("Content", "Events in Athens"): ["/"]})

    def page(self, root, path, language, body, header="Home", main=True):
        file = root / path / "index.html"
        file.parent.mkdir(parents=True, exist_ok=True)
        content = f"<main>{body}</main>" if main else body
        file.write_text(
            f'<html lang="{language}"><head><title>One Event</title></head>'
            f'<body><header><a href="/">{header}</a></header>{content}</body></html>',
            encoding="utf-8",
        )


if __name__ == "__main__":
    unittest.main()
