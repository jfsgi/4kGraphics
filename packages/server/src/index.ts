import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { generateBuildPlan, validateSpec, VERSION, type FurnitureSpec } from '@4kgraphics/engine';
import { HeadlessRenderer, type RenderRequest } from './renderer.js';
import { ArStore, ModelStore, validateScene } from './store.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT ?? 8787);
const harnessDir = path.resolve(here, '../harness-dist');

const app = express();

// CORS: lets a browser app (e.g. Atelier3D) call the API cross-origin.
// CORS_ORIGINS is a comma-separated allowlist of origins; '*' allows any.
// Unset → no CORS headers (same-origin or server-to-server only).
const corsOrigins = (process.env.CORS_ORIGINS ?? '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);
const allowAllOrigins = corsOrigins.includes('*');
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && (allowAllOrigins || corsOrigins.includes(origin))) {
    res.setHeader('Access-Control-Allow-Origin', allowAllOrigins ? '*' : origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Expose-Headers', 'X-Render-Ms, X-Engine-Version');
    res.setHeader('Access-Control-Max-Age', '86400');
  }
  if (req.method === 'OPTIONS') {
    res.sendStatus(204); // preflight; browser enforces via the headers above
    return;
  }
  next();
});

// Scenes carry full geometry, so allow a generous body.
app.use(express.json({ limit: '32mb' }));

const store = new ModelStore();
const arStore = new ArStore();
// Respect X-Forwarded-* so derived absolute URLs are correct behind a proxy.
app.set('trust proxy', true);

app.get('/healthz', (_req, res) => {
  res.json({ ok: true, service: '4kgraphics-render', version: VERSION });
});

/** Build plan generation is pure logic — no browser involved. */
app.post('/v1/buildplan', (req, res) => {
  try {
    const spec = req.body?.spec as FurnitureSpec | undefined;
    if (!spec || typeof spec !== 'object' || !('kind' in spec)) {
      res.status(400).json({ error: 'Body must be { "spec": { "kind": "table" | "bookshelf" | "cabinet", ... } }' });
      return;
    }
    validateSpec(spec);
    res.json(generateBuildPlan(spec));
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * Creates a model from a pushed scene (Atelier3D's evaluated Part/Primitive IR)
 * or a parametric spec, and returns its id. Render it later with
 * `{ "modelId": id }`. Storage is in-memory (per process).
 */
app.post('/v1/models', (req, res) => {
  try {
    const { name, scene, spec, defaults } = (req.body ?? {}) as {
      name?: string;
      scene?: unknown;
      spec?: unknown;
      defaults?: Record<string, unknown>;
    };
    if (spec !== undefined) validateSpec(spec as FurnitureSpec);
    const model = store.create({ name, scene, spec, defaults });
    res.status(201).json(store.summary(model));
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

/** Metadata for a stored model. */
app.get('/v1/models/:id', (req, res) => {
  const model = store.get(req.params.id);
  if (!model) {
    res.status(404).json({ error: 'No such model' });
    return;
  }
  res.json(store.summary(model));
});

app.use('/harness', express.static(harnessDir));

const renderer = new HeadlessRenderer(`http://127.0.0.1:${port}/harness/`);

/**
 * Renders a furniture image. Accepts a pushed scene, a parametric spec, a
 * stored model (`modelId`), or a model URL — plus material / lighting / camera
 * configuration; responds with a PNG (3840×2160 by default).
 */
app.post('/v1/render', async (req, res) => {
  try {
    let request = { ...(req.body ?? {}) } as RenderRequest & { modelId?: string };
    if (request.modelId) {
      const model = store.get(request.modelId);
      if (!model) {
        res.status(404).json({ error: 'No such model' });
        return;
      }
      // The stored model is the geometry; the request's own fields (material,
      // camera, size…) override the model's saved render defaults.
      request = { ...(model.defaults ?? {}), ...request };
      if (model.scene) request.scene = model.scene;
      if (model.spec) request.spec = model.spec;
      delete request.modelId;
    }
    if (request.scene) validateScene(request.scene);
    if (request.spec) validateSpec(request.spec as FurnitureSpec);
    const started = Date.now();
    const png = await renderer.render(request);
    res
      .type('image/png')
      .setHeader('X-Render-Ms', String(Date.now() - started))
      .setHeader('X-Engine-Version', VERSION)
      .send(png);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

const AR_CONTENT_TYPE: Record<string, string> = {
  glb: 'model/gltf-binary',
  usdz: 'model/vnd.usdz+zip',
  png: 'image/png',
};

/** Absolute base URL for building file links (honours a proxy / explicit env). */
function baseUrl(req: express.Request): string {
  return (process.env.PUBLIC_BASE_URL ?? `${req.protocol}://${req.get('host')}`).replace(/\/$/, '');
}

/**
 * Builds (or reuses) per-configuration AR files for a spec and returns stable,
 * CORS-accessible URLs the storefront's <model-viewer> can load. GLB feeds
 * WebXR / Scene Viewer; USDZ feeds iOS Quick Look; the poster is a render.
 */
app.post('/v1/ar', async (req, res) => {
  try {
    const spec = req.body?.spec as FurnitureSpec | undefined;
    // AR-appropriate default: 1024 keeps files a few MB; the storefront can ask
    // for more detail (e.g. 2048) per product.
    const textureSize = Number(req.body?.textureSize ?? 1024);
    if (!spec || typeof spec !== 'object' || !('kind' in spec)) {
      res.status(422).json({ error: 'Body must be { "spec": { "kind": ..., ... }, "textureSize"? }' });
      return;
    }
    try {
      validateSpec(spec);
    } catch (error) {
      res.status(422).json({ error: error instanceof Error ? error.message : String(error) });
      return;
    }
    const hash = arStore.hash(spec, textureSize);
    if (!arStore.get(hash)) {
      const { glb, usdz } = await renderer.exportAR({ spec, textureSize });
      arStore.set({ hash, spec, textureSize, glb, usdz, createdAt: new Date().toISOString() });
    }
    const base = baseUrl(req);
    res.json({
      configHash: hash,
      glbUrl: `${base}/v1/ar/${hash}.glb`,
      usdzUrl: `${base}/v1/ar/${hash}.usdz`,
      posterUrl: `${base}/v1/ar/${hash}.png`,
    });
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

/** Serves a cached AR file (or renders the poster on first request). */
app.get('/v1/ar/:file', async (req, res) => {
  const match = /^([0-9a-f]+)\.(glb|usdz|png)$/.exec(req.params.file);
  if (!match) {
    res.status(404).json({ error: 'Not found' });
    return;
  }
  const [, hash, ext] = match;
  const artifacts = arStore.get(hash);
  if (!artifacts) {
    res.status(404).json({ error: 'No such AR model — POST /v1/ar to build it' });
    return;
  }
  let body: Buffer;
  try {
    if (ext === 'glb') body = artifacts.glb;
    else if (ext === 'usdz') body = artifacts.usdz;
    else {
      // Poster: render once on demand (the AR essentials are built up front).
      artifacts.poster ??= await renderer.render({ spec: artifacts.spec, lighting: 'studio', background: 'studio' });
      body = artifacts.poster;
    }
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
    return;
  }
  res
    .type(AR_CONTENT_TYPE[ext])
    .setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    .setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
    .setHeader('X-Engine-Version', VERSION)
    .send(body);
});

const server = app.listen(port, () => {
  console.log(`4kgraphics render service listening on http://127.0.0.1:${port}`);
  console.log(`  POST /v1/render    → 4K PNG of a scene, spec, modelId, or model URL`);
  console.log(`  POST /v1/models    → store a pushed scene/spec, returns an id`);
  console.log(`  POST /v1/ar        → per-config GLB + USDZ + poster URLs for AR`);
  console.log(`  POST /v1/buildplan → cut list, hardware, and assembly steps`);
  if (corsOrigins.length) console.log(`  CORS: ${allowAllOrigins ? 'any origin' : corsOrigins.join(', ')}`);
});

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, () => {
    void renderer.close().finally(() => {
      server.close(() => process.exit(0));
    });
  });
}
