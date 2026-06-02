// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nicolemosquera.github.io/Manual/',
  base: '/Manual/',
  vite: {
    plugins: [tailwindcss()]
  }
});