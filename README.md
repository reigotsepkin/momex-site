# momex.io

Static site built with Astro. Two content sections:

- **Learn** — plain-language explainers (RLUSD, XRPL, non-custodial wallets)
- **Build log** — notes from building Momex in public

## Run locally

```
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Build for deploy

```
npm run build
```

Outputs static files to `dist/` — deploy that folder to Vercel, Netlify, Cloudflare Pages, or any static host.

## Adding a post

Create a new `.md` file in `src/content/learn/` or `src/content/build-log/`:

```md
---
title: "Your title"
excerpt: "One sentence for the card preview."
date: 2026-07-15
---

Your content in markdown here.
```

The file name becomes the URL slug — `src/content/learn/my-post.md` → `/learn/my-post`.

## Design tokens

All colors, fonts, and spacing live in `src/styles/global.css` as CSS custom properties. The palette matches the Momex app and logo (near-black background, teal-green accent, geometric mark).
