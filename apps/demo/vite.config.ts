import { execSync } from 'node:child_process';
import { defineConfig } from 'vite';

// Build identifier shown in the demo header. On Vercel the commit SHA comes
// from the environment; locally we ask git; otherwise it's a dev build.
function buildId(): string {
  const sha =
    process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ??
    (() => {
      try {
        return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
          .toString()
          .trim();
      } catch {
        return 'dev';
      }
    })();
  const date = new Date().toISOString().slice(0, 10);
  return `${sha} · ${date}`;
}

export default defineConfig({
  base: './',
  define: {
    __BUILD_ID__: JSON.stringify(buildId()),
  },
  server: {
    port: 5173,
    // Proxy catalog/render calls to the local render service so the demo can
    // reach the 4K catalog without CORS in dev. Override the target with
    // VITE_PROXY_TARGET; in production set VITE_RENDER_ENDPOINT to the service.
    proxy: {
      '/v1': { target: process.env.VITE_PROXY_TARGET ?? 'http://localhost:8787', changeOrigin: true },
    },
  },
});
