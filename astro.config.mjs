import { defineConfig } from 'astro/config';

const deploymentSite = process.env.DEPLOY_SITE ?? 'https://anirudhbompada.com';
const deploymentBase = process.env.DEPLOY_BASE;

export default defineConfig({
  site: deploymentSite,
  base: deploymentBase,
  output: 'static',
});
