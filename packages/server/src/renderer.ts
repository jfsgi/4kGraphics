import puppeteer, { type Browser } from 'puppeteer';

export interface RenderRequest {
  spec?: unknown;
  /** A pushed Atelier3D scene (evaluated Part/Primitive IR). */
  scene?: unknown;
  modelUrl?: string;
  material?: string;
  materials?: Record<string, string>;
  panelMaterial?: string;
  stain?: string;
  lighting?: string;
  background?: string;
  camera?: { azimuthDeg?: number; elevationDeg?: number; distanceFactor?: number };
  width?: number;
  height?: number;
  supersample?: number;
  textureSize?: number;
  transparent?: boolean;
  ssao?: boolean;
  photoFinish?: boolean;
}

/**
 * Drives the browser-side render harness in headless Chromium. The browser
 * is launched once and reused; each render runs in a fresh page so requests
 * cannot leak state into each other.
 */
export class HeadlessRenderer {
  private browserPromise: Promise<Browser> | null = null;

  constructor(private harnessUrl: string) {}

  private getBrowser(): Promise<Browser> {
    this.browserPromise ??= puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-dev-shm-usage',
        // Software WebGL so the service works on GPU-less servers.
        '--enable-unsafe-swiftshader',
      ],
    });
    return this.browserPromise;
  }

  async render(request: RenderRequest): Promise<Buffer> {
    const browser = await this.getBrowser();
    const page = await browser.newPage();
    try {
      page.setDefaultTimeout(300_000);
      await page.goto(this.harnessUrl, { waitUntil: 'load' });
      await page.waitForFunction('window.__ready === true');
      // Runs in the browser context, where __render is installed by the harness.
      const dataUrl = await page.evaluate(
        (config) =>
          (globalThis as unknown as { __render: (c: unknown) => Promise<string> }).__render(config),
        request as never,
      );
      const base64 = String(dataUrl).split(',')[1];
      if (!base64) throw new Error('Harness returned an empty image');
      return Buffer.from(base64, 'base64');
    } finally {
      await page.close();
    }
  }

  async close(): Promise<void> {
    if (this.browserPromise) {
      const browser = await this.browserPromise;
      await browser.close();
      this.browserPromise = null;
    }
  }
}
