import jitar from '@jitar/plugin-vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({
    publicDir: 'src/webui/public',
    build: {
        assetsDir: 'webui'
    },
    plugins: [
        react(),
        jitar('src', 'domain', 'http://localhost:3000', [], ['./integrations/jitar/requesterMiddleware'])
    ]
});
