import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import rehypeExternalLinks from "rehype-external-links";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://civwiki.news',
  integrations: [svelte(), mdx(), sitemap(), tailwindcss()],
  adapter: cloudflare(),
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["nofollow"],
          target: ["_blank"]
        }
      ]
    ],
  },
});