import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://newsletter-astro.pages.dev',
  output: "server",
  integrations: [svelte(), mdx(), sitemap(), tailwind()],
  adapter: cloudflare()
});