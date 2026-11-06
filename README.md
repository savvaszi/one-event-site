# One Event — Oxredesign

Award-grade redesign of [one-event.gr](https://one-event.gr/) — "Noir Aegean" direction.
Built with **Astro** (static output), **GSAP ScrollTrigger**, **Lenis** smooth scroll, self-hosted Fraunces + Archivo.

## Pages

- `/` Home — Ken Burns hero, pinned manifesto, count-up stats, horizontal destinations gallery, references marquee
- `/the-agency` — founding story, values, key team
- `/destinations` + 6 destination pages (Athens, Crete, Cyprus, Mykonos, Peloponnese, Santorini)
- `/references` — case list + photo grid
- `/get-in-touch` · `/privacy-policy`

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deployment (Dokploy)

The Dokploy app (`one-event-site-vamxqi` in project `OneEventSite`, panel: dok.tetrajobs.online)
uses the **static** build type with publish directory `dist`. It does **not** run npm install/build
on the server — the built `dist/` folder ships in the repo and is copied into an nginx image.

**Deploy a change:**

```bash
npm run build
git add -A && git commit -m "content: ..." && git push origin main
```

Auto-deploy triggers on push to `main`. Verify at https://one.savvaszinonos.work

> Do not delete `dist/` from the repo. If `dist/` is missing, deploys fail with
> `"/dist": not found`.

## Notes

- Images are hotlinked from the original WordPress site (`one-event.gr/wp-content/...`)
- Content data lives in `src/data/site.js`
- `prefers-reduced-motion` disables all GSAP/Lenis/marquee motion

## Translation drafts for content changes

English is the source language at `/`. Greek and Spanish use `/el/` and
`/es/`. Open a pull request for new or changed English content before
publishing. GitHub Actions compares the two site builds and adds a
**Translation drafts** check. Download its review document from the check's
summary for the affected page URLs, English text, Greek and Spanish drafts,
and any missing language pages. The check reads the generated HTML. Text
created only in browser scripts needs a separate review.

Review names, figures, links and wording, then add the approved copy to the
matching language files in the same pull request. Most pages use
`src/data/localized*.js` and `src/pages/[locale]/[...path].astro`. Blog posts
keep their language versions in `src/data/blog-*.ts`. For a new page, add
both localized routes and update the public sitemap when publishing.
Direct pushes to `main` skip the pull request check.

The workflow uses the [Argos model packages](https://github.com/argosopentech/argospm-index)
for English to Greek and Spanish. Both models run on the GitHub runner and
need no translation service credentials. The Greek package derives from
[Jörg Tiedemann and Santhosh Thottingal's OPUS-MT model](https://aclanthology.org/2020.eamt-1.61/)
under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The Spanish
package is distributed under [Argos's MIT/CC0 terms](https://github.com/argosopentech/argos-translate/issues/533).
