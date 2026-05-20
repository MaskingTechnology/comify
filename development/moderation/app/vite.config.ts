
import jitar, { JitarConfig } from '@jitar/plugin-vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const JITAR_URL = 'http://localhost:3000';
const JITAR_SEGMENTS: string[] = [];
const JITAR_MIDDLEWARES: string[] = [];

const jitarConfig: JitarConfig = {
  projectRoot: '../../../',
  sourceRoot: '../../',
  jitarUrl: JITAR_URL,
  segments: JITAR_SEGMENTS,
  middleware: JITAR_MIDDLEWARES
};

export default defineConfig({
  root: './app',
  publicDir: 'public',
  build: {
    outDir: '../../../artifacts/build/moderation/app',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  plugins: [
    react(),
    tsconfigPaths(),
    jitar(jitarConfig)
  ]
});