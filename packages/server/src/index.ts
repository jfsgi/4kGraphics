import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { generateBuildPlan, validateSpec, VERSION, type FurnitureSpec } from '@4kgraphics/engine';
import { HeadlessRenderer, type RenderRequest } from './renderer.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT ?? 8787);
const harnessDir = path.resolve(here, '../harness-dist');

const app = express();
app.use(express.json({ limit: '4mb' }));

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

app.use('/harness', express.static(harnessDir));

const renderer = new HeadlessRenderer(`http://127.0.0.1:${port}/harness/`);

/**
 * Renders a furniture image. Accepts a parametric spec or a model URL plus
 * material / lighting / camera configuration; responds with a PNG
 * (3840×2160 by default).
 */
app.post('/v1/render', async (req, res) => {
  const request = req.body as RenderRequest;
  try {
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
  console.log(`  POST /v1/render    → 4K PNG of a furniture spec or model URL`);
  console.log(`  POST /v1/buildplan → cut list, hardware, and assembly steps`);
});

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, () => {
    void renderer.close().finally(() => {
      server.close(() => process.exit(0));
    });
  });
}
