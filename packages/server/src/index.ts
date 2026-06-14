import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { generateBuildPlan, validateSpec, VERSION, type FurnitureSpec } from '@4kgraphics/engine';
import { HeadlessRenderer, type RenderRequest } from './renderer.js';
import { ModelStore, validateScene } from './store.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT ?? 8787);
const harnessDir = path.resolve(here, '../harness-dist');

const app = express();
// Scenes carry full geometry, so allow a generous body.
app.use(express.json({ limit: '32mb' }));

const store = new ModelStore();

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

const server = app.listen(port, () => {
  console.log(`4kgraphics render service listening on http://127.0.0.1:${port}`);
  console.log(`  POST /v1/render    → 4K PNG of a scene, spec, modelId, or model URL`);
  console.log(`  POST /v1/models    → store a pushed scene/spec, returns an id`);
  console.log(`  POST /v1/buildplan → cut list, hardware, and assembly steps`);
});

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, () => {
    void renderer.close().finally(() => {
      server.close(() => process.exit(0));
    });
  });
}
