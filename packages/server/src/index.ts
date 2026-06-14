import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { generateBuildPlan, validateSpec, VERSION, type FurnitureSpec } from '@4kgraphics/engine';
import { HeadlessRenderer, type RenderRequest } from './renderer.js';
import { ArStore, ModelStore, validateScene, type ArMeta } from './store.js';

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

// Persist models and AR files under DATA_DIR (default ./.data) so pulled
// designs and their AR files survive restarts. Point DATA_DIR at a durable
// volume in production.
const dataDir = path.resolve(process.env.DATA_DIR ?? '.data');
const store = new ModelStore(path.join(dataDir, 'models'));
const arStore = new ArStore(path.join(dataDir, 'ar'));
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

/** Lists stored models (metadata only), newest first. */
app.get('/v1/models', (_req, res) => {
  res.json({ models: store.list().map((m) => store.summary(m)) });
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
 * Builds (or reuses) per-configuration AR files for a stored model (`modelId`),
 * a pushed scene, or a parametric spec, and returns stable, CORS-accessible
 * URLs the storefront's <model-viewer> can load. GLB feeds WebXR / Scene
 * Viewer; USDZ feeds iOS Quick Look; the poster is a render. Files persist on
 * disk, so the URLs survive restarts.
 */
app.post('/v1/ar', async (req, res) => {
  const body = (req.body ?? {}) as { modelId?: string; scene?: unknown; spec?: unknown; textureSize?: number };
  // AR-appropriate default: 1024 keeps files a few MB; ask for more per product.
  const textureSize = Number(body.textureSize ?? 1024);
  let meta: Omit<ArMeta, 'hash' | 'textureSize' | 'createdAt'>;
  let payload: RenderRequest;
  // Resolve the design from a stored model, a pushed scene, or a spec.
  try {
    if (body.modelId) {
      const model = store.get(body.modelId);
      if (!model) {
        res.status(404).json({ error: 'No such model' });
        return;
      }
      meta = model.scene ? { kind: 'scene', scene: model.scene } : { kind: 'spec', spec: model.spec };
      payload = model.scene ? { scene: model.scene, textureSize } : { spec: model.spec, textureSize };
    } else if (body.scene !== undefined) {
      const scene = validateScene(body.scene);
      meta = { kind: 'scene', scene };
      payload = { scene, textureSize };
    } else if (body.spec !== undefined) {
      validateSpec(body.spec as FurnitureSpec);
      meta = { kind: 'spec', spec: body.spec as FurnitureSpec };
      payload = { spec: body.spec, textureSize };
    } else {
      res.status(422).json({ error: 'Body must include a "modelId", "scene", or "spec"' });
      return;
    }
  } catch (error) {
    res.status(422).json({ error: error instanceof Error ? error.message : String(error) });
    return;
  }
  try {
    const hash = arStore.hash({ scene: meta.scene, spec: meta.spec }, textureSize);
    if (!arStore.has(hash)) {
      const { glb, usdz } = await renderer.exportAR(payload);
      arStore.save({ hash, ...meta, textureSize, createdAt: new Date().toISOString() }, glb, usdz);
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

/** Serves a stored AR file from disk (rendering the poster on first request). */
app.get('/v1/ar/:file', async (req, res) => {
  const match = /^([0-9a-f]+)\.(glb|usdz|png)$/.exec(req.params.file);
  if (!match) {
    res.status(404).json({ error: 'Not found' });
    return;
  }
  const hash = match[1];
  const ext = match[2] as 'glb' | 'usdz' | 'png';
  const meta = arStore.meta(hash);
  if (!meta) {
    res.status(404).json({ error: 'No such AR model — POST /v1/ar to build it' });
    return;
  }
  let body: Buffer | null;
  try {
    if (ext === 'png') {
      // Poster: render once on demand (the AR essentials are built up front).
      body = arStore.read(hash, 'png');
      if (!body) {
        // A lightweight placeholder shown before the AR model loads — keep it small.
        body = await renderer.render({
          scene: meta.scene,
          spec: meta.spec,
          lighting: 'studio',
          background: 'studio',
          width: 1200,
          height: 900,
          supersample: 1,
        });
        arStore.savePoster(hash, body);
      }
    } else {
      body = arStore.read(hash, ext);
    }
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
    return;
  }
  if (!body) {
    res.status(404).json({ error: 'Not found' });
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
  console.log(`  POST /v1/ar        → per-config GLB + USDZ + poster URLs (spec / scene / modelId)`);
  console.log(`  POST /v1/buildplan → cut list, hardware, and assembly steps`);
  console.log(`  data dir: ${dataDir}`);
  if (corsOrigins.length) console.log(`  CORS: ${allowAllOrigins ? 'any origin' : corsOrigins.join(', ')}`);
});

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, () => {
    void renderer.close().finally(() => {
      server.close(() => process.exit(0));
    });
  });
}
