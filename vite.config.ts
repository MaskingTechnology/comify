import jitar from '@jitar/plugin-vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const JITAR_URL = 'http://localhost:3000';
const JITAR_SEGMENTS = [];
const JITAR_MIDDLEWARES = ['./integrations/jitar/requesterMiddleware'];

export default defineConfig({
  publicDir: 'src/webui/public',
  build: {
    assetsDir: 'webui'
  },
  server: {
    proxy: {
      '/assets': JITAR_URL
    }
  },
  plugins: [
    react(),
    jitar('src', 'domain', JITAR_URL, JITAR_SEGMENTS, JITAR_MIDDLEWARES)
  ]
});