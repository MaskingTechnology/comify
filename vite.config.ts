import jitar from '@jitar/plugin-vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const JITAR_URL = 'http://localhost:3000';
const JITAR_SEGMENTS = [];
const JITAR_MIDDLEWARES = ['./integrations/runtime/requesterMiddleware'];

export default defineConfig({
  publicDir: 'src/webui/public',
  build: {
    assetsDir: 'webui',
    emptyOutDir: false
  },
  server: {
    proxy: {
      '/assets': JITAR_URL
    }
  },
  plugins: [
    react(),
    tsconfigPaths(),
    jitar({
      sourceDir: 'src',
      targetDir: 'dist',
      jitarDir: 'domain',
      jitarUrl: 'http://localhost:3000',
      segments: JITAR_SEGMENTS,
      middleware: JITAR_MIDDLEWARES
    })
  ]
});