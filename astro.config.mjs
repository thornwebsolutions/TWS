// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thornwebsolutions.com',
  trailingSlash: 'ignore',
  build: {
    // Match the legacy Vercel `cleanUrls` behaviour: /blog/post instead of /blog/post/index.html
    format: 'file',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/december-sale'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
