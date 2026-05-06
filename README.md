# Hemisphere

Private engineering lab for interfaces, automation, and media systems.

## Stack

- Astro
- React
- Tailwind CSS
- GitHub Actions
- GitHub Pages
- Codex

## Routes

- `/`
- `/projects/`
- `/systems/`
- `/notes/`
- `/notes/{slug}/`
- `/archive/`
- `/contact/`

## Notes

Notes are Markdown files in `src/content/notes/`.

Use this frontmatter when drafting in Obsidian:

```md
---
title: "Note title"
date: "2026-05-06"
type: "decision-log"
tags: ["Hemisphere", "Astro", "GitHub"]
excerpt: "One short summary shown on the notes index and homepage."
draft: false
---
```

Set `draft: true` to keep a note out of the published site.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The site is configured for GitHub Pages at:

```text
https://kentas-tri.github.io/hemisphere/
```
