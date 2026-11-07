import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://one-event.gr',
  compressHTML: true,
  vite: {
    server: { proxy: { '/api/inquiry-assistant': 'http://127.0.0.1:4322' } },
  },
});
