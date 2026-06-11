import { defineConfig } from 'vite';

// Builds the browser-side render harness that the headless Chromium loads.
export default defineConfig({
  root: 'harness',
  base: './',
  build: {
    outDir: '../harness-dist',
    emptyOutDir: true,
  },
});
