import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const indexFile = new URL('../.astro/site-chat.json', import.meta.url);
const excluded = new Set(['script', 'style', 'form', 'button', 'svg', 'template', 'noscript', 'details']);
const blocks = new Set(['p', 'li', 'dt', 'dd', 'address', 'figcaption', 'blockquote']);

function find(node, tagName) {
  if (node.tagName === tagName) return node;
  for (const child of node.childNodes ?? []) {
    const match = find(child, tagName);
    if (match) return match;
  }
}

function ignored(node) {
  return excluded.has(node.tagName) || node.attrs?.some(({ name, value }) =>
    name === 'hidden' || (name === 'aria-hidden' && value === 'true'));
}

function visibleText(node) {
  if (ignored(node)) return '';
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes ?? []).map(visibleText).join(node.tagName === 'a' ? '' : ' ');
}

const normalize = (text) => text.replace(/\s+/g, ' ').trim();

function passages(html, path) {
  const document = parse(html);
  const locale = find(document, 'html')?.attrs.find(({ name }) => name === 'lang')?.value;
  const main = find(document, 'main');
  const title = normalize(visibleText(find(document, 'title') ?? {}));
  if (!main || !title || !['en', 'el', 'es'].includes(locale)) return [];
  const entries = [];
  const sentences = new Intl.Segmenter(locale, { granularity: 'sentence' });
  let heading = title;

  function add(text, context = heading) {
    if (text.length < 12) return;
    if (text.length <= 700) {
      entries.push({ locale, path, title, heading: context, text });
      return;
    }
    for (const { segment } of sentences.segment(text)) {
      if (segment.trim().length <= 700) add(segment.trim(), context);
    }
  }

  function visit(node) {
    if (ignored(node)) return;
    const tag = node.tagName;
    if (/^h[1-6]$/.test(tag ?? '')) {
      heading = normalize(visibleText(node));
      add(heading);
      return;
    }
    const href = node.attrs?.find(({ name }) => name === 'href')?.value;
    if (tag === 'a' && /^(mailto|tel):/.test(href ?? '')) {
      const labels = { en: ['Email address', 'Phone number'], el: ['Email ηλεκτρονικό ταχυδρομείο', 'Τηλέφωνο'], es: ['Correo electrónico', 'Teléfono'] }[locale];
      add(normalize(visibleText(node)), `${heading} · ${labels[href.startsWith('mailto:') ? 0 : 1]}`);
      return;
    }
    if (blocks.has(tag)) {
      add(normalize(visibleText(node)));
      return;
    }
    for (const child of node.childNodes ?? []) visit(child);
  }

  visit(main);
  return entries;
}

export default function siteChatIndex() {
  return {
    name: 'site-chat-index',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = await readdir(root, { recursive: true, withFileTypes: true });
        const pages = files.filter((file) => file.isFile() && file.name === 'index.html')
          .map((file) => join(file.parentPath, file.name)).sort();
        const entries = (await Promise.all(pages.map(async (file) => {
          const route = relative(root, file).split(sep).slice(0, -1).join('/');
          return passages(await readFile(file, 'utf8'), route ? `/${route}/` : '/');
        }))).flat();
        await mkdir(new URL('.', indexFile), { recursive: true });
        await writeFile(indexFile, JSON.stringify(entries));
        logger.info(`Indexed ${entries.length} passages from ${pages.length} published pages`);
      },
    },
  };
}
