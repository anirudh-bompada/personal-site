# Hosting, Domain, and HTTPS

[← Documentation index](README.md) · [GitHub Actions workflows](../.github/WORKFLOWS.md)

The site is a static Astro build hosted on **GitHub Pages** at [anirudhbompada.com](https://anirudhbompada.com/). Publishing is driven by GitHub Actions; no separate hosting service or application server is involved.

## How deployment is configured

1. In the repository's **Settings → Pages**, the publishing source is **GitHub Actions**.
2. The custom domain is configured as `anirudhbompada.com`.
3. GitHub account-level domain verification uses a DNS TXT record. Keep that verification record.
4. **Enforce HTTPS** is enabled. GitHub Pages manages the site's TLS certificate and redirects HTTP requests to HTTPS.

On each push to `main`, the [deployment workflow](../.github/WORKFLOWS.md) builds the site and publishes its `dist/` output to the `github-pages` environment. The workflow may also be started manually from the **Actions** tab.

## DNS (Porkbun)

The current DNS arrangement is:

| Record | Purpose |
| --- | --- |
| Apex `ALIAS` for `anirudhbompada.com` → `anirudh-bompada.github.io` | Serve the root domain |
| `www` `CNAME` → `anirudh-bompada.github.io` | Redirect the `www` hostname to the apex site |
| GitHub domain-verification TXT record | Prove domain ownership |
| MX/SPF and other email-forwarding records | Keep the public contact mailbox receiving email |
| DNSSEC | Preserve DNS security configuration |

The site currently redirects `www.anirudhbompada.com` to the apex domain. No wildcard DNS record is used.

> [!IMPORTANT]
> Do not delete the GitHub verification TXT record, email-forwarding records, or DNSSEC configuration when changing web hosting. Coordinate DNS and GitHub Pages changes to avoid accidentally pointing a domain at an unclaimed Pages site.

Because this repository uses **GitHub Actions publishing**, the custom domain is managed in Pages settings. A `public/CNAME` file is not needed for this publishing mode.

## Build URLs

`astro.config.mjs` defines the site and optional base path with environment variables:

| Target | `DEPLOY_SITE` | `DEPLOY_BASE` |
| --- | --- | --- |
| Production custom domain (default) | `https://anirudhbompada.com` | Unset |
| Alternative GitHub Pages project URL | `https://anirudh-bompada.github.io` | `/personal-site` |

The deployed workflow uses the production defaults. The alternative setting is for a potential future move away from the custom domain; it is **not** a second live preview site while the custom domain is configured.

Navigation, assets, and metadata are built for the configured site and base path.

## Verify a deployment

After GitHub Actions reports a successful deployment:

- Visit [the live website](https://anirudhbompada.com/).
- Confirm HTTPS, navigation, and styles.
- Check [robots.txt](https://anirudhbompada.com/robots.txt) and [sitemap.xml](https://anirudhbompada.com/sitemap.xml) if publishing routes or changing SEO settings.
- Review the corresponding deployment run under the repository's **Actions** tab if something appears outdated.

For workflow triggers, permissions, and troubleshooting, read **[.github/WORKFLOWS.md](../.github/WORKFLOWS.md)**. For SEO and regular checks, see **[maintenance.md](maintenance.md)**.
