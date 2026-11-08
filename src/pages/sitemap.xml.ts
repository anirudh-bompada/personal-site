import type { APIRoute } from 'astro';

// Curated public pages. Add a route here when new content is ready for indexing.
// Excludes the unfinished Blog placeholder.
const indexablePaths = [
  '',
  'about/',
  'career/',
  'projects/',
  'projects/llm-benchmark/',
  'contact/',
  'privacy/',
];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Astro site URL is required to generate the sitemap.');
  }

  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const entries = indexablePaths
    .map((path) => {
      const url = new URL(`${base}${path}`, site).href;
      return `  <url>\n    <loc>${url}</loc>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
