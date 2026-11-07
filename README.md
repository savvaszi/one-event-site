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

### Greek and English inquiry assistant

The assistant drafts event fields for the existing contact form. The visitor reviews the form and sends the email from their own email app. The Spanish contact page uses the manual form.

For local development, use Node.js 22 or later. Configure `OPENAI_API_KEY` in the server environment or the ignored `.env.local` file. Run `npm run inquiry:serve` in one terminal and `npm run dev` in another. Astro proxies the assistant request on port 4321 to the Node service on port 4322. `npm run test:inquiry` uses mocked Responses API calls and needs no key.

In production, the Dockerfile builds the static Astro site and starts the Node endpoint alongside nginx. nginx serves the pages and forwards the exact `/api/inquiry-assistant` path to Node on loopback. Set `OPENAI_API_KEY` in OpenShip's project environment. The image allows requests from `https://one-event.gr` and the alternate site hostname. Override `INQUIRY_ALLOWED_ORIGINS` with a comma-separated list when running under another hostname.

The service limits requests to 30 model calls per minute per instance. Apply per-client rate limits at the production proxy. The model receives the assistant text and selected reply language. Name and email fields on the manual form stay outside the model request. Avoid logging request bodies in the proxy or service.

## Deployment (OpenShip)

The English, Greek and Spanish site chat uses the same project secret. Each build indexes the main content of the published pages and stores the index outside the public site. For local testing, run a build before starting the inquiry service to generate that index. Run `node --test scripts/test_site_chat.mjs` to test the chat with mocked model calls.

The `OneEventSite` project serves `one-event.gr` on port 80. Use the repository Dockerfile as the build type and `node server/production.mjs` as the start command if OpenShip asks for one. The Docker build generates its own `dist/`. Push approved changes to `main` and verify the contact pages and assistant endpoint on the live domain.

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
