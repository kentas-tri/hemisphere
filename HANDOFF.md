# Hemisphere New Site Handoff

## Goal

Refresh the old rossolabel.com / Hemisphere web presence and redesign Hemisphere as a personal Creative Engineering / Media Systems Lab.

The new site should not feel like a music label front page. Music, video, and old projects should remain available, but they should live quietly in the archive layer.

## Repositories

New site:

- GitHub: https://github.com/kentas-tri/hemisphere
- CORESERVER clone: `/home/kentas/Hemisphere`
- Origin: `git@github.com:kentas-tri/hemisphere.git`
- Branch: `main`

Old site preservation:

- The old `hemisphere` repository was renamed to `At-the-Beginning`.
- Old site root on CORESERVER: `/home/kentas/domains/rossolabel.com/public_html`
- The old site has already been preserved in Git. Do not use it as the new-site working tree.

## Deploy Keys

New site deploy key:

- Private key: `/home/kentas/.ssh/hemisphere_new_github`
- Public key: `/home/kentas/.ssh/hemisphere_new_github.pub`
- `/home/kentas/Hemisphere` has `core.sshCommand` configured to use this key.

Old preservation repo key:

- `/home/kentas/.ssh/hemisphere_github`

Keep these keys separate.

## Stack

- Astro
- React
- Tailwind CSS
- GitHub Actions
- GitHub Pages
- Codex

AWS is a future idea only. Do not include it in the current stack display.

CORESERVER currently does not have `node` or `npm`, so local build verification on the server has not been possible. Build and deployment are handled by GitHub Actions.

## Public URL

GitHub Pages target:

```text
https://kentas-tri.github.io/hemisphere/
```

GitHub Pages must be configured as:

```text
Settings -> Pages -> Source: GitHub Actions
```

The repository may need to be public for GitHub Pages depending on the GitHub plan.

## Implemented Files

The Astro site has been initialized in `/home/kentas/Hemisphere`.

Important files:

- `src/components/LabHome.tsx`
- `src/components/PageShell.astro`
- `src/data/site.ts`
- `src/content.config.ts`
- `src/content/notes/`
- `public/images/brand/`
- `src/pages/index.astro`
- `src/pages/notes/[slug].astro`
- `src/pages/projects.astro`
- `src/pages/systems.astro`
- `src/pages/notes.astro`
- `src/pages/archive.astro`
- `src/pages/contact.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `public/favicon.svg`
- `astro.config.mjs`
- `tailwind.config.mjs`
- `.github/workflows/deploy.yml`
- `README.md`

## Homepage Structure

1. HeroConsole
   - Hemisphere
   - Private engineering lab for interfaces, automation, and media systems.
   - Building small systems for media, automation, archives, and human interfaces.
   - CTA: View Projects / Read Notes / Contact

2. CommandPalette
   - `/projects`
   - `/systems`
   - `/notes`
   - `/archive`
   - `/contact`

3. CurrentBuilds
   - GitHub-based website renewal
   - AI-assisted documentation workflow
   - Media archive modernization
   - Automation experiments

4. SystemStack
   - Astro
   - React
   - Tailwind CSS
   - GitHub Actions
   - GitHub Pages
   - Codex

5. NotesFeed
   - Placeholder for technical notes, design thinking, and build logs.

6. ArchivePreview
   - ROSSOLABEL is presented only as the legacy archive layer.
   - Archive links are limited to the preserved top page and WordPress archive.

7. Footer
   - GitHub / X / YouTube / Mail

## Added Routes

The CommandPalette now links to real Astro routes with GitHub Pages-safe base paths:

- `/projects/`
- `/systems/`
- `/notes/`
- `/notes/{slug}/`
- `/archive/`
- `/contact/`

Shared homepage and page data lives in `src/data/site.ts`.

## Design Direction

- Black background
- Graphite / off-white / muted accents
- Partial monospace usage
- Thin rules
- Terminal / dashboard / IDE tone
- Subtle animation
- Mobile first
- Preserve accessibility
- Reference modern engineering UI such as Vercel, Linear, Raycast, and Cursor, but do not copy their text or design directly.

Avoid turning the design into a generic hacker UI. Keep it dense, calm, readable, and system-like.

## Social Links

Footer links:

- GitHub: https://github.com/kentas-tri
- X: https://x.com/GuitarsKs
- YouTube: https://www.youtube.com/@ksguitars1520
- Mail: `webmaster@rossolabel.com`

## Recent Commits

- `4d7dcef` Update social links
- `660811a` Align GitHub Pages base path
- `2267e0a` Create Hemisphere lab homepage

## Latest Local Changes

- Added shared route/content data in `src/data/site.ts`.
- Added reusable lower-page shell in `src/components/PageShell.astro`.
- Added first-pass lower pages for projects, systems, notes, archive, and contact.
- Updated homepage navigation from section anchors to real routes.
- Refined archive direction: Hemisphere remains the current Creative Engineering Lab, while ROSSOLABEL is linked only through the legacy top page and WordPress archive.
- Added lightweight abstract image assets under `public/images/brand/` for the hero decorative layer and ArchivePreview cards.
- Converted notes to Markdown content collection under `src/content/notes/` for Obsidian-authored article updates.

## Notes Workflow

Create or edit notes as Markdown files in `src/content/notes/`.

Required frontmatter:

```md
---
title: Note title
date: 2026-05-06
tag: note
excerpt: One short summary shown on the notes index and homepage.
draft: false
---
```

Use `draft: true` for Obsidian drafts that should not be published.

## Known Notes

GitHub Actions deploy previously failed with 404 because GitHub Pages had not yet been enabled.

Fix:

```text
Settings -> Pages -> Source: GitHub Actions
```

Then rerun the workflow.

The Node.js 20 deprecation warning in Actions was not the deployment failure cause.
