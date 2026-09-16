# Anirudh Bompada — Personal Site

[![Deploy to GitHub Pages](https://github.com/anirudh-bompada/personal-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/anirudh-bompada/personal-site/actions/workflows/deploy.yml)

Source code for my personal portfolio: a focused home for my data-engineering
work, cloud-platform experience, technical projects, and local-AI experiments.

## Live site

- **Production domain:** [anirudhbompada.com](https://anirudhbompada.com/)
- **Source repository:** [anirudh-bompada/personal-site](https://github.com/anirudh-bompada/personal-site)

GitHub Pages serves the site over HTTPS, redirects HTTP to HTTPS, and redirects
`www.anirudhbompada.com` to the apex domain.

## What is included

The site contains seven statically generated pages:

- **Home** — overview of my technical focus and one featured, active experiment
- **About** — how I approach technical problems and document tradeoffs
- **Career** — professional data-engineering focus without employers or private details
- **Projects** — an active benchmark and a clearly labeled design exploration
- **LLM Benchmark Lab** — independent testing methodology under Projects
- **Blog** — reserved landing page for future technical notes; not in the main navigation yet
- **Contact** — privacy-first page with no personal contact or profile details; not in the main navigation yet

The primary navigation links to Home, About, Career, and Projects. The Blog
and Contact URLs remain available; they can return to navigation when there is
an article to read or a public contact method I choose to provide.

The interface is responsive, keyboard accessible, and designed without a
client-side JavaScript framework.

## Technology

- [Astro](https://astro.build/) for static-site generation
- TypeScript-aware Astro components
- Plain CSS with responsive layouts and reduced-motion support
- GitHub Actions for automated builds
- GitHub Pages for hosting

## Repository structure

```text
personal-site/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Build and GitHub Pages deployment
├── public/
│   └── favicon.svg          # Static public assets
├── src/
│   ├── components/
│   │   ├── Footer.astro     # Shared site footer
│   │   └── Header.astro     # Shared navigation and wordmark
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, metadata, header, and footer
│   ├── pages/
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── career.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── projects/
│   │       └── llm-benchmark.astro # Detailed personal benchmark route
│   └── styles/
│       └── global.css       # Design tokens and responsive site styles
├── .gitignore
├── .nvmrc                   # Recommended Node.js major version
├── astro.config.mjs         # Astro and deployment-path configuration
├── package-lock.json        # Reproducible npm dependency versions
├── package.json             # Project metadata and npm commands
└── tsconfig.json            # Astro TypeScript configuration
```

## Local development

### Prerequisites

- Node.js 24 is recommended; Astro requires Node.js 22.12 or newer
- npm 11 or a compatible npm version

### Setup

```bash
git clone https://github.com/anirudh-bompada/personal-site.git
cd personal-site
npm ci
npm run dev
```

Astro will display the local development URL in the terminal, normally
`http://localhost:4321`.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact dependency versions in `package-lock.json` |
| `npm run dev` | Start the local Astro development server |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview the most recent production build locally |

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`. The workflow:

1. Checks out the repository.
2. Installs dependencies and runs the Astro production build.
3. Uploads the generated `dist/` directory as a GitHub Pages artifact.
4. Deploys the artifact to the `github-pages` environment.

The workflow also supports manual runs from the repository's **Actions** tab.

### Deployment paths

`astro.config.mjs` defaults to the production domain. Environment variables
can also configure a project-URL build if the custom domain is ever removed:

| Target | `DEPLOY_SITE` | `DEPLOY_BASE` |
| --- | --- | --- |
| Production custom domain (default) | `https://anirudhbompada.com` | Unset |
| Alternative project URL | `https://anirudh-bompada.github.io` | `/personal-site` |

The workflow uses the production defaults, so navigation, styles, metadata, and
static assets are built for the domain root. The alternative build is not a
separately hosted preview while the custom domain is active.

## Custom domain and HTTPS

The custom domain is configured in this repository's **Settings → Pages** and
verified in the GitHub account by a DNS TXT record. Keep that record in place.
Porkbun DNS uses:

- An apex `ALIAS` for `anirudhbompada.com` pointing to
  `anirudh-bompada.github.io`.
- A dedicated `www` `CNAME` pointing to `anirudh-bompada.github.io`.
- No wildcard record; email-forwarding MX/SPF records and DNSSEC remain intact.

**Enforce HTTPS** is enabled in the repository's Pages settings. GitHub Pages
manages the TLS certificate and redirects HTTP visitors to the secure site.

GitHub Pages uses a custom GitHub Actions publishing workflow for this project.
The custom domain is set in Pages settings: a `public/CNAME` file is not
required for this publishing mode and would be ignored by GitHub Pages.

If hosting changes later, update the Pages custom-domain setting and DNS in a
coordinated cutover; avoid pointing DNS at an unclaimed Pages domain.

## Content status

The career page describes data-engineering experience without naming employers,
schools, employment dates, or private contact details. The LLM benchmark page
explains the testing method without identifying hardware or publishing individual
performance results. The website does not link directly to a personal profile or
publish an email address or phone number.
Project details and blog articles will grow as the underlying work is reviewed
for public release.

## License

No open-source license has been selected for this personal portfolio repository.
