# Maintenance, Content, and Privacy

[← Documentation index](README.md) · [Workflow details](../.github/WORKFLOWS.md)

This guide collects periodic checks and rules for publishing public website content.

## Dependency and repository maintenance

- Dependabot checks **npm dependencies** and **GitHub Actions** weekly and proposes changes through pull requests.
- Review each update before merging. Dependabot proposals do not automatically install changes into `main`.
- Pull requests run the read-only **Validate website** workflow: `npm ci`, `npm run check`, and `npm run build`.
- The `main` ruleset requires pull requests and the successful `build` check, and blocks force-pushes and branch deletion.
- Workflow actions use pinned commit revisions and job-specific GitHub token permissions; only deployment needs Pages write and ID-token permissions.
- If a dependency is flagged, assess the advisory, run `npm audit` locally or in a trusted CI environment, update the lockfile through npm, and confirm the site builds.
- Inspect HTTPS and domain ownership settings periodically because they are managed outside the source code.

For the precise workflow behavior, see [GitHub Actions and automation](../.github/WORKFLOWS.md).

## Publishing and content privacy

The **Career** page discusses data engineering without naming employers, schools, dates of employment, or private contact information. The **LLM Benchmark Lab** explains the methodology without publishing identifying hardware details or individual performance results.

The only published contact address is `contact@anirudhbompada.com`, forwarded through Porkbun to a private inbox. The website has no public contact form or personal inbox address.

> [!NOTE]
> Replying from a private forwarding inbox can expose the sending address unless separate domain-based outbound email is configured.

Keep unpublished project specifics and new articles private until they have been reviewed for public release. Do not commit passwords, account tokens, environment files, credentials, or personal contact details.

## Search engine discovery

- `src/pages/sitemap.xml.ts` generates the sitemap from a curated set of public pages: Home, About, Career, Projects, LLM Benchmark Lab, Contact, and Privacy.
- `src/pages/robots.txt.ts` allows crawling and points to the sitemap.
- The unpublished Blog placeholder has `noindex, follow`, is excluded from the sitemap, and is not linked in the primary navigation. Do **not** block it in `robots.txt`: crawlers must be able to read its `noindex` directive.
- The shared Astro layout emits page titles, descriptions, canonical URLs, and Open Graph metadata.
- When a page is ready for public indexing, add its route to `indexablePaths` in `src/pages/sitemap.xml.ts`. If Blog is published, remove its `noindex` setting.
- After deployment, verify `/robots.txt` and `/sitemap.xml`. Google Search Console can use a Domain property; add only the TXT record provided by Google and preserve existing DNS records.

## Privacy-conscious analytics

Umami Cloud runs from `src/layouts/BaseLayout.astro` for the production domain only. It is configured without analytics cookies, excludes URL query parameters and fragments, and honors browser **Do Not Track** when supported. Blocking analytics does not prevent the website from functioning.

The public [Privacy page](https://anirudhbompada.com/privacy) explains the site's analytics practices; it is linked in the global footer. The Umami website ID in the markup is public, but no Umami API keys belong in this repository.

## Periodic checklist

- Review Dependabot PRs, build failures, and security alerts.
- Confirm the custom domain and HTTPS still work.
- Check public page content and links, including the Privacy page, for accuracy.
- Update the sitemap and indexing settings when new public pages are added.

Keep the root [README](../README.md) focused on the portfolio, and this guide focused on operational maintenance.
