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
