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
