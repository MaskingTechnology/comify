import jitar, { JitarConfig } from '@jitar/plugin-vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

const JITAR_URL = 'http://localhost:3000';
const JITAR_SEGMENTS = [];
const JITAR_MIDDLEWARES = ['./integrations/runtime/requesterMiddleware'];

const jitarConfig: JitarConfig = {
  sourceDir: 'src',
  targetDir: 'dist',
  jitarDir: 'domain',
  jitarUrl: JITAR_URL,
  segments: JITAR_SEGMENTS,
  middleware: JITAR_MIDDLEWARES
};

export default defineConfig({
  publicDir: 'src/webui/public',
  build: {
    assetsDir: 'webui',
    emptyOutDir: false
  },
  plugins: [
    react(),
    VitePWA({
      strategies: 'generateSW',
      manifest: false,
      workbox: {
        globPatterns: ['/', 'index.html', 'assets/*', 'webui/**/*.{js,css,html,png,svg}']
      },
    }),
    {
      name: 'add-manifest-link',
      transformIndexHtml(html)
      {
        return html.replace(
          '</head>',
          '<link rel="manifest" href="/manifest.webmanifest"></head>'
        );
      }
    },
    tsconfigPaths(),
    jitar(jitarConfig)
  ]
});