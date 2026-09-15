# Anirudh Bompada — Personal Site

[![Deploy to GitHub Pages](https://github.com/anirudh-bompada/personal-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/anirudh-bompada/personal-site/actions/workflows/deploy.yml)

Source code for my personal portfolio: a focused home for my data-engineering
work, cloud-platform experience, technical projects, and local-AI experiments.

## Live site

- **Production domain:** [anirudhbompada.com](https://anirudhbompada.com/) — DNS and HTTPS cutover in progress
- **Former preview:** `anirudh-bompada.github.io/personal-site` (may redirect to the production domain after the Pages domain setting is saved)

## What is included

The initial release contains five statically generated pages:

- **Home** — overview of my technical focus and selected work
- **About** — background, working style, and areas of interest
- **Projects** — current engineering projects and experiments
- **Blog** — publication-ready landing page for future technical notes
- **Contact** — link to my public GitHub profile

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
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── projects.astro   # File-based website routes
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

`astro.config.mjs` supports both the former GitHub Pages project URL and the
custom domain:

| Target | `DEPLOY_SITE` | `DEPLOY_BASE` |
| --- | --- | --- |
| GitHub Pages preview | `https://anirudh-bompada.github.io` | `/personal-site` |
| Custom domain | `https://anirudhbompada.com` | Unset |

The workflow uses the custom-domain defaults, so navigation, styles, metadata,
and static assets are built for the domain root. For a temporary local build of
the old project URL, set both preview environment variables shown above.

## Custom-domain transition

The domain is verified in the GitHub account with a DNS TXT record. Keep that
record in place. The cutover is separate from the initial Pages deployment:

1. Test a local production build with `DEPLOY_SITE` and `DEPLOY_BASE` unset to
   confirm the domain-root URLs, navigation, and assets.
2. Configure `anirudhbompada.com` under this repository's GitHub Pages
   **Custom domain** setting, before pointing the domain's DNS to GitHub.
3. Remove the preview-only `DEPLOY_SITE` and `DEPLOY_BASE` values from the
   workflow and redeploy the already-tested domain-root build.
4. Replace the Porkbun parking records with the GitHub Pages apex records and
   point `www` directly to `anirudh-bompada.github.io`. Keep email-forwarding,
   the verification TXT record, and DNSSEC unchanged.
5. Verify DNS, HTTPS, apex and `www` routing, all routes and assets; enable
   **Enforce HTTPS** once GitHub makes it available.

GitHub Pages uses a custom GitHub Actions publishing workflow for this project.
The custom domain is set in Pages settings: a `public/CNAME` file is not
required for this publishing mode and would be ignored by GitHub Pages.

During DNS propagation, some networks may still resolve the old parking records.

## Content status

The site structure and first-release content are complete. Project details and
blog articles will continue to grow as the underlying work is documented for
public release.

## License

No open-source license has been selected for this personal portfolio repository.
