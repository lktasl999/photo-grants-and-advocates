#!/usr/bin/env node
/**
 * Great Awakening — Grants, Prizes & Champions
 *
 *   node build.mjs            build the issue in content/issue.mjs
 *   node build.mjs --no-write skip updating content/archive.json
 *
 * Edit content/issue.mjs, run this, look at out/preview/*.png, ship the PDF.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

import { renderHtml, daysBetween, formatDate } from './src/render.mjs';
import { paginateInBrowser } from './src/paginate.mjs';
import { fontFaceCss } from './src/fonts.mjs';
import { rasterizePdf } from './src/rasterize.mjs';
import {
  issue, openCalls, openCallsIntro, openCallsNote, champions, championsIntro,
} from './content/issue.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'out');
const ARCHIVE = join(ROOT, 'content', 'archive.json');
const writeArchive = !process.argv.includes('--no-write');

const log = (...a) => console.log(...a);

/**
 * Use whatever Chromium the machine already has. Sandboxed CI images ship a
 * browser under PLAYWRIGHT_BROWSERS_PATH whose revision often does not match
 * the npm package's expectation, and re-downloading is blocked; falling back
 * to an explicit executablePath keeps the build working either way.
 */
async function launchChromium() {
  try {
    return await chromium.launch();
  } catch (err) {
    const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
    const candidates = existsSync(base)
      ? readdirSync(base)
          .filter((d) => /^chromium-\d+$/.test(d))
          .sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
          .map((d) => join(base, d, 'chrome-linux', 'chrome'))
          .filter((p) => existsSync(p))
      : [];
    if (!candidates.length) throw err;
    log(`  chromium: falling back to ${candidates[0]}`);
    return await chromium.launch({ executablePath: candidates[0] });
  }
}

function loadArchive() {
  if (!existsSync(ARCHIVE)) return { issues: [], champions: {}, openCalls: {} };
  return JSON.parse(readFileSync(ARCHIVE, 'utf8'));
}

/**
 * "Don't repeat a name already sent in a prior issue unless something new has
 * changed about their fit." Rebuilding the same issue number is idempotent —
 * names recorded against this very issue are not treated as prior sends.
 */
function filterChampions(list, archive) {
  const kept = [];
  const dropped = [];
  for (const c of list) {
    const prior = archive.champions[c.name];
    const sentBefore = prior && prior.lastIssue < issue.number;
    if (sentBefore && !c.returning) {
      dropped.push(`${c.name} (last sent in issue ${prior.lastIssue})`);
      continue;
    }
    if (sentBefore && c.returning && !c.changed) {
      dropped.push(`${c.name} (marked returning but no "changed" note given)`);
      continue;
    }
    kept.push(c);
  }
  return { kept, dropped };
}

async function main() {
  const archive = loadArchive();
  const { kept: champs, dropped } = filterChampions(champions, archive);

  if (dropped.length) {
    log('\nChampions held back (already sent, nothing new):');
    for (const d of dropped) log('  · ' + d);
  }
  if (!champs.length) {
    log('\nEvery champion in this issue has already been sent. Add new names to content/issue.mjs.');
  }

  const closing = openCalls
    .filter((c) => c.deadline && daysBetween(issue.date, c.deadline) >= 0 && daysBetween(issue.date, c.deadline) <= 60)
    .map((c) => `${c.name} — ${formatDate(c.deadline)} (${daysBetween(issue.date, c.deadline)} days)`);

  log(`\nIssue ${issue.number} · ${issue.dayLabel}`);
  log(`  open calls: ${openCalls.length}   champions: ${champs.length}`);
  if (closing.length) {
    log('  flagged, closing within 60 days:');
    for (const c of closing) log('    ⚑ ' + c);
  }

  const html = renderHtml({
    issue,
    openCalls,
    openCallsIntro,
    openCallsNote,
    champions: champs,
    championsIntro,
    fontFaces: fontFaceCss(),
  });

  mkdirSync(OUT, { recursive: true });
  const htmlPath = join(OUT, 'issue.html');
  writeFileSync(htmlPath, html);

  const browser = await launchChromium();
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);

  const result = await page.evaluate(paginateInBrowser, {
    headerLeft: 'Great Awakening · Issue ' + String(issue.number).padStart(2, '0'),
    footerLeft: 'Grants, Prizes &amp; Champions · ' + issue.dayLabel,
  });

  log(`\n  paginated to ${result.pages} pages`);
  const bySection = {};
  for (const p of result.pageMap) (bySection[p.section] ||= []).push(p.page);
  for (const [name, pages] of Object.entries(bySection)) {
    log(`    ${name}: page${pages.length > 1 ? 's' : ''} ${pages.join(', ')}`);
  }
  for (const w of result.warnings) log('    ! ' + w);

  const pdfName = `great-awakening-issue-${String(issue.number).padStart(2, '0')}-${issue.date}.pdf`;
  const pdfPath = join(OUT, pdfName);
  await page.pdf({
    path: pdfPath,
    printBackground: true,
    preferCSSPageSize: true,
  });
  await page.close();

  const previewDir = join(OUT, 'preview');
  rmSync(previewDir, { recursive: true, force: true });
  const shots = await rasterizePdf(browser, pdfPath, previewDir);
  await browser.close();

  log(`\n  PDF      ${pdfPath}`);
  log(`  previews ${shots.length} page image(s) in ${previewDir}`);

  if (shots.length !== result.pages) {
    log(`  ! PDF has ${shots.length} pages but the layout produced ${result.pages} — check for a stray blank page.`);
  }

  if (writeArchive) {
    archive.champions ||= {};
    for (const c of champs) {
      const prior = archive.champions[c.name];
      archive.champions[c.name] = {
        firstIssue: prior ? prior.firstIssue : issue.number,
        lastIssue: issue.number,
        institution: c.institution,
      };
    }
    archive.openCalls ||= {};
    for (const c of openCalls) {
      const prior = archive.openCalls[c.name];
      archive.openCalls[c.name] = {
        firstIssue: prior ? prior.firstIssue : issue.number,
        lastIssue: issue.number,
        deadline: c.deadline || null,
        tier: c.tier,
      };
    }
    archive.issues = (archive.issues || []).filter((i) => i.number !== issue.number);
    archive.issues.push({
      number: issue.number,
      date: issue.date,
      pages: result.pages,
      file: pdfName,
      champions: champs.map((c) => c.name),
    });
    archive.issues.sort((a, b) => a.number - b.number);
    writeFileSync(ARCHIVE, JSON.stringify(archive, null, 2) + '\n');
    log(`  archive  updated (${Object.keys(archive.champions).length} champions on record)`);
  }

  log('\nNow look at the page images before sending. Nothing ships unseen.\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
