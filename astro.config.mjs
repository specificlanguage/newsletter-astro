import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import {inspectUrls} from "@jsdevtools/rehype-url-inspector";

// https://astro.build/config
export default defineConfig({
  site: 'https://civwiki.news',
  integrations: [svelte(), mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [
      [
        inspectUrls, {
        selectors: ["a[href]"],
        inspectEach(url) {
          url.node.properties.target = "_blank";
        }
      }
      ]
    ],
  },
});