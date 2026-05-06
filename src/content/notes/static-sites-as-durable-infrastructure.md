---
title: "Static sites as durable infrastructure"
date: "2026-05-02"
type: "decision-log"
tags: ["Hemisphere", "Astro", "GitHub Pages"]
excerpt: "Static publishing keeps the public layer simple while leaving room for heavier systems behind the scenes."
draft: false
---

## Context

The new Hemisphere site needs to be simple to deploy and maintain.

## Decision

Use a static-first publishing stack.

## Reasoning

Static publishing keeps the public layer simple while leaving room for heavier systems behind the scenes.

## Implementation

Astro builds the site, GitHub Actions runs the build, and GitHub Pages serves the result.

## Result

The site can stay light at the public edge while documentation, archives, and automation workflows evolve around it.

## Next

Keep the public surface static unless a future system clearly needs more.
