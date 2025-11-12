
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://affilirator.github.io/blog-69143f18-triggers-workflow/',
  integrations: [tailwind()],
  build: {
    format: 'directory'
  }
});
