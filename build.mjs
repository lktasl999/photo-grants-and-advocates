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
 * This is a reminder feed, not a discovery feed. Anything still relevant is
 * resurfaced every issue; nothing is suppressed for having appeared before.
 * Each entry is stamped `isNew` on its first appearance so genuinely new finds
 * still stand out, and `retired: true` is the only way something leaves.
 */
function markAppearances(list, archive, kind) {
  const seen = archive[kind] || {};
  const live = list.filter((x) => !x.retired);
  const retired = list.filter((x) => x.retired).map((x) => x.name);
  for (const x of live) {
    const prior = seen[x.name];
    x.isNew = !prior || prior.firstIssue === issue.number;
    x.sinceIssue = prior ? prior.firstIssue : issue.number;
  }
  return { live, retired };
}

/** The owner is male; awards restricted to women or non-binary applicants only
 *  are out of scope. Catches anything reintroduced by a later content edit. */
const RESTRICTED = /\b(women|woman|female|non-?binary|FLINTA)\b/i;
const RESTRICTION_OK = /\bopen to (all|any)\b|\ball genders\b|\bno .{0,20}restriction\b/i;

function checkEligibility(list) {
  return list
    .filter((c) => RESTRICTED.test(c.eligibility || '') && !RESTRICTION_OK.test(c.eligibility || ''))
    .map((c) => c.name);
}

async function main() {
  const archive = loadArchive();
  const { live: champs, retired: retiredChamps } = markAppearances(champions, archive, 'champions');
  const { live: calls, retired: retiredCalls } = markAppearances(openCalls, archive, 'openCalls');

  const flagged = checkEligibility(calls);
  if (flagged.length) {
    log('\n! Check eligibility — these mention a gender restriction and may be out of scope:');
    for (const f of flagged) log('  · ' + f);
  }

  const stale = calls.filter((c) => c.deadline && daysBetween(issue.date, c.deadline) < 0);
  if (stale.length) {
    log('\n! Deadline already passed — update or retire these:');
    for (const c of stale) log(`  · ${c.name} (${formatDate(c.deadline)})`);
  }

  if (retiredChamps.length || retiredCalls.length) {
    log('\nRetired this issue: ' + [...retiredCalls, ...retiredChamps].join(', '));
  }

  const closing = calls
    .filter((c) => c.deadline && daysBetween(issue.date, c.deadline) >= 0 && daysBetween(issue.date, c.deadline) <= 60)
    .map((c) => `${c.name} — ${formatDate(c.deadline)} (${daysBetween(issue.date, c.deadline)} days)`);

  log(`\nIssue ${issue.number} · ${issue.dayLabel}`);
  log(`  open calls: ${calls.length} (${calls.filter((c) => c.isNew).length} new)   champions: ${champs.length} (${champs.filter((c) => c.isNew).length} new)`);
  if (closing.length) {
    log('  flagged, closing within 60 days:');
    for (const c of closing) log('    ⚑ ' + c);
  }

  const html = renderHtml({
    issue,
    openCalls: calls,
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
    for (const c of calls) {
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
