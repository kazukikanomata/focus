import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
    host: 'localhost',
    port: 5173,
  },
  plugins: [
    // Laravelと連携するためのプラグイン
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/pages/TopPage.jsx',
        'resources/js/pages/TasksIndexPage.tsx',
        'resources/js/pages/TaskShowPage.jsx',
        'resources/js/pages/TaskCreatePage.jsx',
      ],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
});
