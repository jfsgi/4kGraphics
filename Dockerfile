# Render service (packages/server): Express + headless Chromium (Puppeteer).
# Build context = repo ROOT. Deploy on any container host — Railway, Render,
# Fly.io, a VM. See docs/DEPLOY-SERVER.md.

FROM node:20-bookworm-slim

# Chromium runtime libraries (the service renders headless with SwiftShader).
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates fonts-liberation libasound2 libatk-bridge2.0-0 libatk1.0-0 \
      libcairo2 libcups2 libdbus-1-3 libdrm2 libexpat1 libfontconfig1 libgbm1 \
      libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libx11-6 libxcb1 \
      libxcomposite1 libxdamage1 libxext6 libxfixes3 libxkbcommon0 libxrandr2 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install workspace deps first (better layer caching). Puppeteer downloads its
# matched Chromium during this step — do NOT set PUPPETEER_SKIP_DOWNLOAD here.
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
VOLUME ["/data"]
EXPOSE 8787

CMD ["node", "packages/server/dist/index.js"]
