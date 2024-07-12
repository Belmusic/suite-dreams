import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import fs from 'fs';
import path from 'path';

const httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
  cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
};

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  server: {
    https: httpsOptions,
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'https://serpapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true,
      },
    },
  },
});
