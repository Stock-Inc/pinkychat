/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    global: 'globalThis'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: "./src/test/setup.ts",
  }
});
