import jitar, { JitarConfig } from '@jitar/plugin-vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const JITAR_URL = 'http://localhost:3000';
const JITAR_SEGMENTS: string[] = [];
const JITAR_MIDDLEWARES: string[] = [
  //'./integrations/runtime/requesterMiddleware'
];

const jitarConfig: JitarConfig = {
  sourceDir: '../../../src',
  targetDir: '../../../dist',
  jitarDir: 'domain',
  jitarUrl: JITAR_URL,
  segments: JITAR_SEGMENTS,
  middleware: JITAR_MIDDLEWARES
};

// const pwaConfig: Partial<VitePWAOptions> = {
//   strategies: 'generateSW',
//   manifest: false,
//   workbox: {
//     navigateFallbackDenylist: [/^\/rpc/],
//     additionalManifestEntries: [
//       { url: '/manifest.webmanifest', revision: null }
//     ],
//     globPatterns: ['index.html', 'registerSW.js', 'assets/*', 'webui/**/*.{js,css,html,png,svg}']
//   }
// };

// const addManifestLink = {
//   name: 'add-manifest-link',
//   transformIndexHtml(html)
//   {
//     return html.replace(
//       '</head>',
//       '<link rel="manifest" href="/manifest.webmanifest"></head>'
//     );
//   }
// };

export default defineConfig({
  root: './src/apps/webui',
  publicDir: 'public',
  build: {
    outDir: '../../../dist',
    assetsDir: 'webui',
    emptyOutDir: false
  },
  plugins: [
    react(),
    // VitePWA(pwaConfig),
    // addManifestLink,
    tsconfigPaths(),
    jitar(jitarConfig)
  ]
});