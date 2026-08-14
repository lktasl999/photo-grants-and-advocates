# Great Awakening — Grants, Prizes & Champions

A twice-weekly (Monday and Thursday) PDF newsletter tracking photography grants,
dummy-book awards and photobook prizes, plus a running list of people who could
champion the book at release.

Everything is ranked against one specific project: a documentary photobook on
American belief systems, New Age culture, and the line between staged and real
imagery — unpublished, expected 2027 from Loose Joints.

## Running it

```bash
npm install
npm run build
```

That writes:

| Path | What it is |
| --- | --- |
| `out/great-awakening-issue-NN-YYYY-MM-DD.pdf` | the deliverable |
| `out/preview/page-NN.png` | one image per **PDF** page, for the visual check |
| `out/issue.html` | the intermediate HTML, handy when debugging layout |
| `content/archive.json` | cumulative record of what has been sent |

`npm run build -- --no-write` builds without touching the archive.

## The one file you edit

`content/issue.mjs`. Bump `issue.number` and `issue.date`, refresh `openCalls`
and `champions`, run the build. Field semantics are documented at the top of
that file; the important ones:

- **`deadline`** — an ISO date. The 60-day closing flag is computed from it
  against `issue.date`, so it is never hand-maintained. Leave it `null` when the
  date is only an expectation and put the prose in `deadlineNote`.
- **`tier`** — `best` / `open` / `soon` / `notyet`. Drives the grouping and the
  ranking order. Ranks are numbered continuously down the whole list.
- **`carry`** — marks an entry "Carried over", for things worth keeping in front
  of you across issues rather than dropping once they have been mentioned.
- **`confirmed: false`** — prints a "confirm on the official page" note. Use it
  whenever a date or fee came from a secondary source rather than the organiser.

## Not repeating champions

`content/archive.json` records which issue every champion was sent in. On each
build a name already sent in an *earlier* issue is dropped, and the build prints
what it held back. To send someone again, set `returning: true` **and** a
`changed` note explaining what is new about their fit — the note is printed in
the issue. Names recorded against the issue number currently being built are not
treated as prior sends, so rebuilding an issue is idempotent.

Open calls are deliberately *not* de-duplicated: a live deadline should keep
showing up until it passes.

## How it is built

Styled HTML → headless Chromium → PDF, via Playwright.

Rather than letting the print engine break pages wherever it likes, the build
paginates explicitly (`src/paginate.mjs`, which runs inside the browser). Blocks
are measured and flowed into fixed-height `.page` elements, so:

- a page break can only ever land *between* blocks, never through one;
- every section starts on a fresh page and can run as many pages as it needs;
- each page carries its own running header naming the section it belongs to;
- headings and group labels are `keep-with-next`, so they can never be orphaned
  at the foot of a page.

`src/rasterize.mjs` then renders the **finished PDF** back to one PNG per page
using pdf.js, so the visual check inspects the artefact that actually ships
rather than the HTML it came from.

### Design

Two typefaces: Playfair Display (bold serif) for titles, Inter for body and
meta. Both are inlined as base64 in `src/fonts.mjs`, so the PDF does not depend
on anything being installed on the machine.

One muted accent, `#9B6A3C`. It is restricted to non-text elements (hairline
rules, the closing-soon pill background) and to short `nowrap` inline runs that
share a line with ink-coloured text — the rank numerals and the section
numerals. No line of text is ever wholly accent-coloured, and no accent run can
begin a wrapped line.

## Before shipping a run

Look at `out/preview/*.png`. Confirm sections do not bleed into one another and
there are no visual glitches. The build prints the section-to-page map and warns
if the PDF page count disagrees with the layout, but neither replaces looking.

## Environment note

Playwright's bundled Chromium revision often does not match the one present on a
sandboxed image, and re-downloading is usually blocked. `build.mjs` falls back to
the newest `chromium-*` under `PLAYWRIGHT_BROWSERS_PATH` (default
`/opt/pw-browsers`) automatically — do not run `playwright install`.
