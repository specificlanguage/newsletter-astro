import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://newsletter-astro.pages.dev',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: "server",
  adapter: cloudflare()
});