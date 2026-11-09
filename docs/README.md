# Personal Site — Documentation

[← Project overview](../README.md) · [Live website](https://anirudhbompada.com/)

This is the documentation hub for the personal portfolio. The root README introduces the site; the guides below explain how the code is organized, developed, deployed, and maintained.

## At a glance

| Area | Summary |
| --- | --- |
| **Website** | [anirudhbompada.com](https://anirudhbompada.com/) |
| **Stack** | Astro, TypeScript-aware components, plain CSS |
| **Hosting** | GitHub Pages with a custom domain and HTTPS |
| **Automation** | GitHub Actions validation and deployment; weekly Dependabot checks |
| **Analytics** | Production-domain Umami, configured without analytics cookies |

The site is statically generated, responsive, keyboard accessible, and does not depend on a client-side JavaScript UI framework.

## Choose a guide

| Guide | What you'll find |
| --- | --- |
| **[Local development](development.md)** | Node.js requirements, local setup, npm commands, and build configuration |
| **[Hosting, domain, and HTTPS](deployment.md)** | GitHub Pages, Porkbun DNS, certificates, deployment URLs, and verification |
| **[GitHub Actions and automation](../.github/WORKFLOWS.md)** | PR checks, deploy workflow, required status checks, Dependabot, and troubleshooting |
| **[Source code](../src/README.md)** | Components, layouts, pages, styles, routing, and how to change site content |
| **[Maintenance, content, and privacy](maintenance.md)** | Update checks, security practices, search indexing, analytics, and content guidelines |

## Website content

| Page | Purpose |
| --- | --- |
| **Home** | Technical focus and featured experiment |
| **About** | Approach to solving and documenting problems |
| **Career** | Public professional data-engineering overview |
| **Projects** | Current projects and their development status |
| **LLM Benchmark Lab** | Independent benchmark methodology |
| **Blog** | Unpublished placeholder; not linked in primary navigation or sitemap |
| **Contact** | Public domain-based email contact |
| **Privacy** | Cookie-free analytics disclosure |

Primary navigation links to Home, About, Career, and Projects; Contact and Privacy appear in the footer. The Blog placeholder is excluded from search indexing until articles are published.

## Repository map

```text
personal-site/
├── README.md                 # Public overview
├── docs/
│   ├── README.md            # This documentation index
│   ├── development.md       # Local setup and development
│   ├── deployment.md        # Hosting, domain, and HTTPS
│   ├── maintenance.md       # Content, privacy, SEO, security
│   └── assets/              # README artwork
├── .github/
│   ├── WORKFLOWS.md         # Actions and Dependabot explanation
│   ├── workflows/           # Validation and deployment definitions
│   └── dependabot.yml
├── src/
│   ├── README.md            # Source architecture and route guide
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/                  # Static assets, including favicon
├── astro.config.mjs
├── package.json
└── package-lock.json
```

The implementation details are intentionally kept near the appropriate subject. Start with the relevant guide rather than reading one large reference file.

## License

This personal portfolio currently has no open-source license. See the [repository overview](../README.md) for its license statement.
