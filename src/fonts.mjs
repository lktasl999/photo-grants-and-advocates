import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const FACES = [
  ['Playfair Display', 400, '@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff2'],
  ['Playfair Display', 700, '@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff2'],
  ['Playfair Display', 900, '@fontsource/playfair-display/files/playfair-display-latin-900-normal.woff2'],
  ['Inter', 400, '@fontsource/inter/files/inter-latin-400-normal.woff2'],
  ['Inter', 500, '@fontsource/inter/files/inter-latin-500-normal.woff2'],
  ['Inter', 600, '@fontsource/inter/files/inter-latin-600-normal.woff2'],
];

/** Inline every face as a data URI so the HTML is self-contained and the PDF
 *  never depends on a font being installed in the container. */
export function fontFaceCss() {
  return FACES.map(([family, weight, rel]) => {
    const b64 = readFileSync(join(ROOT, 'node_modules', rel)).toString('base64');
    return `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};font-display:block;src:url(data:font/woff2;base64,${b64}) format('woff2');}`;
  }).join('\n');
}
