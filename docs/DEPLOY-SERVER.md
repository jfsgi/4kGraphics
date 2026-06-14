# Deploying the render service

The render service (`packages/server`) is **not** a Vercel app — it runs a
long-lived Express server and launches headless Chromium (Puppeteer) for every
render / AR / poster. The Vercel project `4k-graphics-server` is the **front-end
tool** (`apps/demo`), a static site. The service needs a **container host**.

The repo's root `Dockerfile` builds and runs it on any of them. Recommended:
**Railway** (least friction for a Dockerized Puppeteer service); Render and
Fly.io work the same way.

## Railway

1. railway.app → **New Project → Deploy from GitHub repo** → pick `4kGraphics`.
   Railway auto-detects the root `Dockerfile`.
2. **Variables** (Service → Variables):
   - `CORS_ORIGINS` = your front-end origins, comma-separated — e.g.
     `https://4k-graphics-server.vercel.app,https://<your-atelier3d>.vercel.app`
   - `DATA_DIR` = `/data`
   - `PUBLIC_BASE_URL` = the service's public URL (set after the first deploy,
     so AR file links are absolute).
   - (PORT is injected by Railway automatically — the server reads it.)
3. **Volume** (so the catalog + AR files persist): Service → add a **Volume**
   mounted at **`/data`**.
4. Deploy. Railway gives you a URL like `https://4k-render-production.up.railway.app`.
   Check `GET /healthz` returns `{ ok: true }`.

## Render

New → **Web Service** → connect the repo → Environment **Docker** → root
`Dockerfile`. Add the same env vars, attach a **Disk** at `/data`. Render injects
`PORT`.

## Fly.io

`fly launch` (it'll use the `Dockerfile`) → `fly volumes create data` →
mount at `/data` in `fly.toml` → set the same env vars with `fly secrets set` →
`fly deploy`.

## Then point the front ends at it

Once you have the service URL (e.g. `https://4k-render.up.railway.app`):

1. In the **`4k-graphics-server`** Vercel project → Settings → Environment
   Variables → add `VITE_RENDER_ENDPOINT` = the service URL (no trailing slash) →
   **Redeploy** (Vite inlines it at build).
2. Do the same in the **Atelier3D** Vercel project so its "Send to 4K" reaches
   the same backend.
3. Make sure the service's `CORS_ORIGINS` lists both Vercel origins.

Now the deployed tool's **4K Catalog** panel lists products, and Atelier3D's
"Send to 4K" imports into the catalog.

> Resources: 4K renders are memory-heavy (Chromium + a 4K canvas). Give the
> service ≥ 1–2 GB RAM. AR exports and the 1024px catalog renders are lighter.
