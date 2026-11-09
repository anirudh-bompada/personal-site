# Source Code Guide

[← Documentation index](../docs/README.md) · [Local development](../docs/development.md)

The website is built with **Astro components, TypeScript-aware frontmatter, and plain CSS**. Astro generates static HTML for GitHub Pages; there is no client-side UI framework or application server.

## Where code lives

| Folder | What it contains |
| --- | --- |
| [`components/`](components/) | Shared `Header.astro` navigation/wordmark and `Footer.astro` links |
| [`layouts/`](layouts/) | `BaseLayout.astro`, the shared document structure and metadata |
| [`pages/`](pages/) | File-based website routes and generated SEO endpoints |
| [`styles/`](styles/) | `global.css`, the site's design tokens and responsive styling |

Public static assets, such as the favicon, are stored in [`../public/`](../public/), not under `src/`.

## Components and layout

- **`components/Header.astro`** defines the primary navigation (Home, About, Career, and Projects), the wordmark, and the active-page state.
- **`components/Footer.astro`** links to Career, Projects, Contact, and Privacy.
- **`layouts/BaseLayout.astro`** imports both shared components and `styles/global.css`. It provides the page shell, skip link, document title, description, canonical URL, sitemap link, favicon, Open Graph metadata, optional `noindex` tag, and the production-domain Umami script.

Page-specific content is inserted into `BaseLayout` through its Astro `<slot />`.

## Routes and page responsibilities

| Source file | Public content |
| --- | --- |
| `pages/index.astro` | Homepage and featured experiment |
| `pages/about.astro` | Background and working approach |
| `pages/career.astro` | Professional data-engineering focus |
| `pages/projects.astro` | Project overview and project statuses |
| `pages/projects/llm-benchmark.astro` | Independent LLM benchmarking methodology |
| `pages/blog.astro` | Unpublished placeholder; uses `noindex` |
| `pages/contact.astro` | Public domain-based contact email |
| `pages/privacy.astro` | Cookie-free analytics/privacy disclosure |
| `pages/robots.txt.ts` | Build-time `/robots.txt` endpoint |
| `pages/sitemap.xml.ts` | Curated `/sitemap.xml` endpoint |

The Blog placeholder is intentionally excluded from the primary navigation and sitemap until content is ready.

## Styles and navigation

`styles/global.css` defines the color palette, typography, layouts, buttons, cards, navigation, responsive breakpoints, and reduced-motion behavior. The Contact and Privacy pages also have their own scoped styles.

Internal links account for Astro's configured base path (`import.meta.env.BASE_URL`). If the publishing base path changes, test the navigation, assets, and canonical URLs.

## Adding or changing pages

1. Add or update the appropriate `.astro` page and use `BaseLayout` for consistent layout and metadata.
2. If the page is ready for indexing, add its route to `indexablePaths` in `pages/sitemap.xml.ts`; remove `noindex` if applicable.
3. Update shared navigation or footer links only if the route should be discoverable there.
4. Run `npm run check` and `npm run build`; PR validation will run these too.
5. Review new content for personal details or sensitive project information before publishing.

**Documentation placement:** Do not put a `README.md` inside `src/pages/`: Astro treats Markdown files there as pages and can generate an unintended public route. Document the routes here, or put expanded explanations in `docs/` instead.

For publishing and operations, use the [documentation index](../docs/README.md).
