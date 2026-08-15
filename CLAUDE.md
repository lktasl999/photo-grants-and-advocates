# Working notes for this repo

## The newsletter

"Great Awakening — Grants, Prizes & Champions". Twice weekly, **Monday and
Thursday**. Build with `npm run build`; see README.md for how the generator
works and which file to edit.

Everything is ranked against one project: a documentary photobook on American
belief systems, New Age culture, and the line between staged and real imagery.
Unpublished, expected 2027 from Loose Joints. That contract matters when ranking
— awards that pay out in a *publishing contract* may conflict with it, while
unrestricted or production money does not.

## Standing editorial rules

These are owner instructions, not suggestions. They override any default habit.

1. **Eligibility.** The owner is male. Never list an award, grant or competition
   restricted to women or non-binary applicants only — the Inge Morath Award,
   the FotoEvidence W Award, the PhMuseum Women Photographers Grant, Firecracker,
   the Sonntag Grant. General or open eligibility is fine. `build.mjs` warns if
   one reappears, but the check is a backstop, not the rule.
2. **Resurface, don't discard.** This is a reminder feed, not a discovery feed.
   Every open call still live and every champion still relevant is repeated *in
   full* in every issue, badged "Standing"; first appearances are badged "New".
   The owner may not act on something for months, so keeping it in view matters
   more than novelty. Something leaves the list only when its deadline has
   passed or its fit no longer holds — set `retired: true` for that.
3. **Scope of Open Calls.** Not limited to photobook prizes. Include anything
   the project, or single images from it, could be submitted to: single-image
   and portfolio competitions, documentary grants and fellowships, editorial and
   magazine awards. Apply the same fit ranking and Best Fit framing across all
   of it.

## Owner preferences

- **Timezone: US Eastern.** Schedule anything against Eastern local time.
  Note that Eastern is UTC−5 in winter (EST) and UTC−4 in summer (EDT). Systems
  that take cron in UTC do not follow that shift, so a fixed UTC expression
  drifts by an hour across the DST boundary — if the fire time needs to stay put
  in local terms, it has to be updated twice a year.
- **Delivery: post the finished PDF as a file in the session.** No email, no
  SMTP, no mail service of any kind.
- **No recurring schedule is currently set up.** As of issue 01 the owner asked
  to leave the cadence manual for now. Confirm before creating one.

## Standing research sources

Check these every run, on top of targeted searches.

- **Picter** — `picter.com` / `site.picter.com`. The submission platform behind a
  large share of European calls (Revela'T, InCadaqués, Hasselblad, W. Eugene
  Smith, Ian Parry, PhotoVogue, Fotofestiwal, Centre for British Photography).
  Its call pages are the single most productive discovery source found so far;
  issue 03 pulled the Leica Society and PhotoVogue grants from it. The domain is
  egress-blocked, so reach it through WebSearch rather than WebFetch.
- **Revela'T** — `revela-t.cat`. Barcelona analogue photography festival. Two
  separate strands, and the difference matters: the **exhibition open call is
  restricted to analogue/chemical work**, while the **portfolio review accepts
  chemical and digital**. Confirm which applies before ranking either. Also
  egress-blocked; use WebSearch.

Owner-suggested sources get added here so they are not re-explored from scratch.

## Non-negotiable before finishing a run

Render the PDF's pages to images and *actually look at them*. Confirm sections
do not bleed into each other and there are no visual glitches. `npm run build`
writes them to `out/preview/`. A run is not complete without this.

## Environment

Do **not** run `playwright install`. The bundled Chromium revision usually does
not match what is on the image and downloads are blocked; `build.mjs` already
falls back to the preinstalled browser under `PLAYWRIGHT_BROWSERS_PATH`.

Several photography sites are blocked by the network egress policy —
aperture.org, phmuseum.com, lensculture.com, blind-magazine.com among them.
WebSearch reaches them fine and its summaries are detailed; WebFetch does not.
When a date or fee comes from a secondary source, set `confirmed: false` on the
entry so it prints a "confirm on the official page" note rather than implying a
precision we do not have.
