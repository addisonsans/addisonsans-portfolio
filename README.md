# addisonsans.com

Personal site for Addison Sans — data scientist & ML engineer (production
LLM/OCR pipelines), with research history out of CU Boulder's PACLAB.

Built with [Astro](https://astro.build) and deployed on
[Vercel](https://vercel.com). Plain markdown for all content.

## Run it locally

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:4321`. Edits are hot-reloaded.

## Add a project

Drop a markdown file into `src/content/projects/`. Frontmatter schema (see
`src/content/config.ts` for the source of truth):

```markdown
---
title: My Project
summary: One-sentence description shown in the list.
year: 2026
role: Lead developer            # optional
stack: ["Python", "SQLite"]     # optional
tags: ["applied-llm"]           # optional
repo: https://github.com/...    # optional
demo: https://...               # optional
featured: true                  # show on the home page
order: 1                        # for tie-breaking within a year
---

Long-form write-up goes here, in plain markdown / MDX.
```

`research/` and `writing/` have similar schemas — peek at the existing
files for examples.

## Build for production

```bash
npm run build
npm run preview
```

The build output lands in `dist/`.

## Deploy

1. Push this repo to GitHub.
2. Import it on Vercel — auto-detects Astro, zero config needed.
3. You get a free `*.vercel.app` URL immediately.

### Custom domain (`addisonsans.com`)

1. Register the domain. Cheapest with no markup: [Cloudflare
   Registrar](https://www.cloudflare.com/products/registrar/).
2. In Vercel → Project → Settings → Domains, add `addisonsans.com` and
   `www.addisonsans.com`.
3. Vercel shows you the DNS records to add (typically an A record and a
   CNAME). Add them at your registrar. Propagation is usually minutes.
4. Set the environment variable `SITE_URL=https://addisonsans.com` on
   Vercel so canonical URLs, OpenGraph, sitemap, and RSS use the right
   host. (Defaults to that anyway, but explicit is good.)

### `addisonsans.com` not available?

Solid alternates if it's taken:

- `addisonsans.me` — personal-site convention.
- `addison-sans.com` — hyphenated.
- `addisonsans.xyz` — cheap, fine for personal sites.

## Editing checklist

When you're ready to publish, walk this:

- [ ] `src/pages/about.astro` — read every paragraph; tweak voice/tone.
- [ ] `src/pages/work.astro` — fix dates, add/remove roles.
- [ ] `src/pages/contact.astro` — replace placeholder GitHub URL with your
      real GitHub profile.
- [ ] `src/components/Footer.astro` — same — fix the GitHub URL.
- [ ] Every file in `src/content/projects/` — Claude wrote placeholder
      copy based on folder names; read each one, fix any wrong claims.
- [ ] `src/content/research/paclab.md` — confirm dates, role, lab name,
      collaborators; add publications.
- [ ] `src/content/writing/hello.md` — delete or replace with real writing.
- [ ] Drop a `public/og.png` (1200x630) for nicer link previews.
- [ ] Replace `public/favicon.svg` with something more you (optional).

## Project structure

```
src/
  components/       Nav, Footer
  layouts/          BaseLayout.astro (the shell every page renders into)
  pages/            Routes: index, about, work, contact, projects/*, research/*, writing/*
  content/
    config.ts       Typed schemas for projects/research/writing
    projects/       *.md per project
    research/       *.md per research project
    writing/        *.md per essay
  styles/global.css
public/             Static assets served from /
astro.config.mjs    Site URL, integrations
```
