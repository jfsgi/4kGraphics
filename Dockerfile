# Render service (packages/server): Express + headless Chromium (Puppeteer).
# Uses the official Puppeteer image so Chromium + every system library it needs
# are pre-installed and version-matched (no apt step that can break). Build
# context = repo ROOT. See docs/DEPLOY-SERVER.md.

FROM ghcr.io/puppeteer/puppeteer:23.11.1

# Run as root so the mounted /data volume and the build are writable; Chromium
# launches with --no-sandbox (set in renderer.ts), which is required as root.
USER root
WORKDIR /app

# Chromium is already in the image — don't let npm re-download it. Point
# Puppeteer at the image's pre-installed browser cache.
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_CACHE_DIR=/home/pptruser/.cache/puppeteer

# Install workspace deps first (better layer caching).
COPY package.json package-lock.json ./
COPY packages/engine/package.json packages/engine/package.json
COPY packages/server/package.json packages/server/package.json
COPY apps/demo/package.json apps/demo/package.json
RUN npm ci

# Build the engine, then the server (+ its browser render harness).
COPY . .
RUN npm run build -w packages/engine && npm run build -w packages/server

ENV NODE_ENV=production
# The host usually injects PORT; 8787 is the fallback. DATA_DIR holds the
# catalog + AR files — mount a volume there to persist them.
ENV PORT=8787
ENV DATA_DIR=/data
EXPOSE 8787

CMD ["node", "packages/server/dist/index.js"]
