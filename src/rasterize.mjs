import { readFileSync, copyFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { createServer } from 'node:http';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const VIEWER = `<!doctype html>
<html><head><meta charset="utf-8">
<style>body{margin:0;background:#8a8a8a} canvas{display:block;margin:0 0 8px}</style>
</head><body>
<script type="module">
import * as pdfjsLib from './pdf.min.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.min.mjs';
window.renderPdf = async (b64, scale) => {
  const raw = atob(b64);
  const bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
  for (let n = 1; n <= pdf.numPages; n++) {
    const page = await pdf.getPage(n);
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    canvas.id = 'p' + n;
    document.body.appendChild(canvas);
    await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
  }
  return pdf.numPages;
};
window.__ready = true;
</script></body></html>`;

const MIME = { '.html': 'text/html', '.mjs': 'text/javascript', '.js': 'text/javascript' };

/**
 * Rasterise the actual PDF (not the source HTML) to one PNG per page, so the
 * visual check looks at the delivered artefact rather than at what we hoped it
 * would be.
 *
 * pdf.js is an ES module and Chromium refuses module imports over file://, so
 * the temp directory is served over loopback HTTP for the duration.
 */
export async function rasterizePdf(browser, pdfPath, outDir, scale = 1.5) {
  const work = join(ROOT, '.raster-tmp');
  rmSync(work, { recursive: true, force: true });
  mkdirSync(work, { recursive: true });
  for (const f of ['pdf.min.mjs', 'pdf.worker.min.mjs']) {
    copyFileSync(join(ROOT, 'node_modules/pdfjs-dist/build', f), join(work, f));
  }
  writeFileSync(join(work, 'viewer.html'), VIEWER);

  const server = createServer((req, res) => {
    const name = (req.url || '/').split('?')[0].replace(/^\/+/, '') || 'viewer.html';
    if (name.includes('..')) { res.writeHead(400).end(); return; }
    try {
      const body = readFileSync(join(work, name));
      res.writeHead(200, { 'Content-Type': MIME[extname(name)] || 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end();
    }
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const { port } = server.address();

  mkdirSync(outDir, { recursive: true });
  const page = await browser.newPage();
  const files = [];
  try {
    await page.goto(`http://127.0.0.1:${port}/viewer.html`);
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 20000 });

    const b64 = readFileSync(pdfPath).toString('base64');
    const count = await page.evaluate(([data, s]) => window.renderPdf(data, s), [b64, scale]);

    for (let n = 1; n <= count; n++) {
      const out = join(outDir, `page-${String(n).padStart(2, '0')}.png`);
      await page.locator('#p' + n).screenshot({ path: out });
      files.push(out);
    }
  } finally {
    await page.close();
    await new Promise((r) => server.close(r));
    rmSync(work, { recursive: true, force: true });
  }
  return files;
}
