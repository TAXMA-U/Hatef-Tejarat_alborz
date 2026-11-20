import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Hatef-Tejarat_alborz/',
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@layouts': '/src/components/layout',
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
