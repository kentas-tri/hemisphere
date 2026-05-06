import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://kentas-tri.github.io',
  base: '/Hemisphere',
  integrations: [react()],
  output: 'static'
});
