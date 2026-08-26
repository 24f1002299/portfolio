// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://24f1002299.github.io',
  base: '/portfolio',
  output: 'static',
  compressHTML: true,
});
