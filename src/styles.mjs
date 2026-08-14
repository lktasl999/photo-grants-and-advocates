/**
 * Design system for the newsletter.
 *
 * Two typefaces only: Playfair Display (bold serif) for titles, Inter (sans)
 * for body and meta.
 *
 * One muted accent, #9B6A3C. It is deliberately restricted to non-text
 * elements (rules, the flag pill background) and to short inline runs that
 * share a line with ink-coloured text and are set `nowrap`. No line of text is
 * ever wholly accent-coloured, and no accent run can ever begin a wrapped line.
 */

export const PAGE = {
  widthMm: 210,
  heightMm: 296.8, // a hair under A4 so Chromium never rounds into a blank page
  marginMm: 18,
};

export function styles(fontFaces) {
  return `
${fontFaces}

*, *::before, *::after { box-sizing: border-box; }

:root {
  --accent: #9B6A3C;
  --ink: #1A1917;
  --ink-soft: #45423C;
  --grey: #6E6A62;
  --grey-light: #918C82;
  --rule: #E2DDD4;
  --rule-soft: #EFEBE4;
  --serif: 'Playfair Display', Georgia, serif;
  --sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

@page { size: A4; margin: 0; }

html, body {
  margin: 0;
  padding: 0;
  background: #FFFFFF;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

body {
  font-family: var(--sans);
  color: var(--ink);
  font-size: 8.4pt;
  line-height: 1.55;
  text-rendering: geometricPrecision;
}

/* ------------------------------------------------------------------ *
 * Page shell
 * ------------------------------------------------------------------ */

.page {
  position: relative;
  width: ${PAGE.widthMm}mm;
  height: ${PAGE.heightMm}mm;
  overflow: hidden;
  background: #FFFFFF;
  break-after: page;
  page-break-after: always;
}
.page:last-child { break-after: auto; page-break-after: auto; }

.page-header {
  position: absolute;
  top: 13mm;
  left: ${PAGE.marginMm}mm;
  right: ${PAGE.marginMm}mm;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 2.4mm;
  border-bottom: 0.3pt solid var(--rule);
}
.page-header .ph-left {
  font-size: 6.9pt;
  font-weight: 500;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--grey-light);
}
.page-header .ph-right {
  font-size: 6.9pt;
  font-weight: 600;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--ink-soft);
  white-space: nowrap;
}

.page-body {
  position: absolute;
  top: 22.5mm;
  bottom: 17mm; /* keeps clear of the footer, which sits at 10mm */
  left: ${PAGE.marginMm}mm;
  right: ${PAGE.marginMm}mm;
  overflow: hidden;
}
.page--first .page-body { top: 20mm; }

.page-footer {
  position: absolute;
  bottom: 10mm;
  left: ${PAGE.marginMm}mm;
  right: ${PAGE.marginMm}mm;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 6.8pt;
  color: var(--grey-light);
  letter-spacing: 0.04em;
}
.page-footer .pf-num { font-variant-numeric: tabular-nums; }

/* ------------------------------------------------------------------ *
 * Masthead
 * ------------------------------------------------------------------ */

.masthead { margin-bottom: 9mm; }
.masthead .eyebrow {
  font-size: 6.9pt;
  font-weight: 600;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  color: var(--grey-light);
  margin-bottom: 5mm;
}
.masthead h1 {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 37pt;
  line-height: 0.98;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin: 0;
}
.masthead .sub {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 15.5pt;
  line-height: 1.2;
  color: var(--ink-soft);
  margin: 2.2mm 0 0;
}
.masthead .rule-accent {
  width: 26mm;
  height: 1.4pt;
  background: var(--accent);
  margin: 6.5mm 0 5mm;
}
.masthead .project {
  font-size: 8.3pt;
  line-height: 1.6;
  color: var(--grey);
  max-width: 128mm;
  margin: 0;
}

/* ------------------------------------------------------------------ *
 * Section head
 * ------------------------------------------------------------------ */

.section-head { margin: 0 0 6.5mm; }
.section-head h2 {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 21pt;
  line-height: 1.1;
  letter-spacing: -0.008em;
  color: var(--ink);
  margin: 0;
}
/* short, nowrap, shares its line with ink text — never a full accent line */
.section-head h2 .num {
  color: var(--accent);
  font-weight: 700;
  white-space: nowrap;
  margin-right: 3.2mm;
}
.section-head .standfirst {
  font-size: 8.3pt;
  line-height: 1.62;
  color: var(--grey);
  max-width: 140mm;
  margin: 4mm 0 0;
}
.section-head .rule-accent {
  width: 18mm;
  height: 1.2pt;
  background: var(--accent);
  margin: 5.5mm 0 0;
}

/* ------------------------------------------------------------------ *
 * Group label
 * ------------------------------------------------------------------ */

.group-label {
  margin: 1.5mm 0 4.4mm;
  padding-top: 2.5mm;
  border-top: 0.3pt solid var(--rule);
}
.group-label .gl-title {
  font-size: 7.4pt;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink);
}
.group-label .gl-note {
  font-size: 7.6pt;
  color: var(--grey-light);
  margin-top: 1.6mm;
  max-width: 132mm;
  line-height: 1.5;
}

/* ------------------------------------------------------------------ *
 * Entries
 * ------------------------------------------------------------------ */

.entry {
  padding-bottom: 4.6mm;
  margin-bottom: 4.6mm;
  border-bottom: 0.3pt solid var(--rule-soft);
}
.entry:last-child { border-bottom: none; }

.entry-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6mm;
}
.entry h3 {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 12.6pt;
  line-height: 1.22;
  color: var(--ink);
  margin: 0;
  flex: 1;
}
/* accent numeral: short, nowrap, on the same line as the ink title */
.entry h3 .rank {
  color: var(--accent);
  font-size: 9.4pt;
  white-space: nowrap;
  margin-right: 2.8mm;
  vertical-align: 0.6mm;
}
.entry .org {
  font-size: 7.7pt;
  color: var(--grey);
  margin: 1.4mm 0 0;
  line-height: 1.4;
}

.badges { display: flex; gap: 2mm; flex-shrink: 0; padding-top: 0.8mm; }
.badge {
  font-size: 6.3pt;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 1.1mm 2.2mm;
  border-radius: 0.8mm;
}
.badge--flag { background: var(--accent); color: #FFFFFF; }
.badge--new { background: var(--ink); color: #FFFFFF; }
.badge--standing { background: #F1EEE8; color: var(--grey); }
.badge--notyet { background: #EDEAE4; color: var(--grey); }

.champ .entry-top { gap: 5mm; }
.champ .entry-top h3 { flex: 1; }

.meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4mm 8mm;
  margin: 3.4mm 0 0;
}
.meta-block { min-width: 0; }
.meta-block.full { grid-column: 1 / -1; }
.meta-label {
  font-size: 6.3pt;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--grey-light);
  margin-bottom: 0.9mm;
}
.meta-value {
  font-size: 8.1pt;
  line-height: 1.45;
  color: var(--ink-soft);
}
.meta-value .strong { font-weight: 600; color: var(--ink); }
.meta-note {
  font-size: 7.5pt;
  color: var(--grey-light);
  line-height: 1.45;
  margin-top: 1mm;
}

.why {
  font-size: 8.3pt;
  line-height: 1.52;
  color: var(--ink-soft);
  margin: 0;
}

.link {
  font-size: 7.3pt;
  color: var(--grey);
  margin-top: 2.6mm;
  word-break: break-word;
}

/* ------------------------------------------------------------------ *
 * Callout
 * ------------------------------------------------------------------ */

.callout {
  background: #FAF7F2;
  border-left: 1.4pt solid var(--accent);
  padding: 5mm 6mm;
  margin: 1mm 0 4mm;
}
.callout h4 {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 10.4pt;
  color: var(--ink);
  margin: 0 0 2.5mm;
  line-height: 1.25;
}
.callout p {
  font-size: 8pt;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0;
}

/* ------------------------------------------------------------------ *
 * Champions
 * ------------------------------------------------------------------ */

.champ {
  padding-bottom: 4.4mm;
  margin-bottom: 4.4mm;
  border-bottom: 0.3pt solid var(--rule-soft);
}
.champ:last-child { border-bottom: none; }
.champ h3 {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 11.6pt;
  line-height: 1.25;
  color: var(--ink);
  margin: 0;
}
.champ .role {
  font-size: 7.8pt;
  color: var(--grey);
  margin: 1.6mm 0 0;
  line-height: 1.45;
}
.champ .inst {
  font-size: 7.8pt;
  color: var(--ink-soft);
  font-weight: 500;
}
.champ .why { margin-top: 2.8mm; }
.champ .contact {
  font-size: 7.3pt;
  color: var(--grey);
  margin-top: 2.4mm;
}
.champ .contact .clabel {
  font-weight: 600;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  font-size: 6.3pt;
  color: var(--grey-light);
  margin-right: 1.8mm;
  white-space: nowrap;
}

/* ------------------------------------------------------------------ *
 * Sign-off
 * ------------------------------------------------------------------ */

.signoff {
  margin-top: 2mm;
  padding-top: 4mm;
  border-top: 0.3pt solid var(--rule);
  font-size: 7.4pt;
  line-height: 1.6;
  color: var(--grey-light);
  max-width: 140mm;
}

/* staging area, never printed */
#source { display: none; }
`;
}
