import { defineConfig } from 'astro/config';
import siteChatIndex from './scripts/site-chat-index.mjs';

export default defineConfig({
  site: 'https://one-event.gr',
  compressHTML: true,
  integrations: [siteChatIndex()],
  vite: {
    server: { proxy: {
      '/api/inquiry-assistant': 'http://127.0.0.1:4322',
      '/api/site-chat': 'http://127.0.0.1:4322',
    } },
  },
});
