# Local Development

[← Documentation index](README.md) · [Source code guide](../src/README.md)

This guide covers the tools and commands needed to run the static site locally.

## Requirements

- **Node.js 24** is recommended; the repository's `.nvmrc` specifies major version 24.
- The currently locked Astro 7.4.7 package requires **Node.js 22.23.4 or newer**.
- **npm 11** is recommended; use a compatible npm version if you already have one installed.

## Setup

```bash
git clone https://github.com/anirudh-bompada/personal-site.git
cd personal-site
npm ci
npm run dev
```

Astro normally reports `http://localhost:4321` as the development URL. Use the URL printed by the terminal if that port is unavailable.

## Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install exactly the dependencies recorded in `package-lock.json` |
| `npm run dev` | Start the local development server |
| `npm run check` | Check Astro and TypeScript diagnostics |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview a previously generated production build |

Run `npm run check` and `npm run build` before proposing changes. Pull requests run the same validations automatically.

## How the source is organized

The application uses [Astro](https://astro.build/) for static-site generation, TypeScript-aware components, and plain CSS. There is no client-side JavaScript UI framework.

See **[src/README.md](../src/README.md)** for the shared layout, components, pages, styles, and instructions for adding content.

## Build configuration

`astro.config.mjs` defaults to the production site URL. `DEPLOY_SITE` and `DEPLOY_BASE` can configure an alternative build target; see [Hosting and domain setup](deployment.md) before changing them.

The `dist/` and `.astro/` directories are generated build artifacts and are intentionally excluded from version control.
