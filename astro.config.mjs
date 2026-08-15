// @ts-check
import { defineConfig } from 'astro/config';

// Deployed at https://nsfcac.github.io/ASPIRE/
// Override with SITE / BASE_PATH env vars when publishing elsewhere
// (e.g. a custom domain: SITE=https://aspire.cs.ttu.edu BASE_PATH=/).
export default defineConfig({
  site: process.env.SITE ?? 'https://nsfcac.github.io',
  base: process.env.BASE_PATH ?? '/ASPIRE',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
