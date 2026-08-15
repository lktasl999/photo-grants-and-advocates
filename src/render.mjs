import { styles } from './styles.mjs';

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** Whole days from `fromIso` to `toIso`, using UTC so it never drifts. */
export function daysBetween(fromIso, toIso) {
  const a = Date.UTC(...fromIso.split('-').map(Number).map((n, i) => (i === 1 ? n - 1 : n)));
  const b = Date.UTC(...toIso.split('-').map(Number).map((n, i) => (i === 1 ? n - 1 : n)));
  return Math.round((b - a) / 86400000);
}

/** Cadence is Monday and Thursday, so the next issue follows from this one's
 *  date rather than being hardcoded into the sign-off. */
function nextIssueDay(iso) {
  const dow = new Date(iso + 'T00:00:00Z').getUTCDay(); // 0 Sun … 6 Sat
  return dow >= 1 && dow < 4 ? 'Thursday' : 'Monday';
}

const TIERS = [
  {
    key: 'best',
    label: 'Best fit',
    note: 'The strongest matches for an unpublished documentary photobook on American belief. Each takes work in progress, and none of them puts a claim on the book.',
  },
  {
    key: 'open',
    label: 'Open now, or opening within weeks',
    note: 'Accepting entries as this issue goes out, or due to open before the next few issues are through.',
  },
  {
    key: 'soon',
    label: 'Opening soon',
    note: 'Not open yet. Dates given are the expected cycle, anchored to the previous round. Grants, fellowships, book and dummy awards, and image competitions together — diary the ones worth preparing for.',
  },
  {
    key: 'notyet',
    label: 'Not eligible this cycle — calendar it',
    note: 'Real targets for this project, but not on this round. Listed so the timing decision gets made deliberately rather than by default.',
  },
];

/** Accent is reserved for the urgent deadline flag alone; the standing/new
 *  markers use ink and grey so the accent stays sparing. */
function statusBadge(item) {
  return item.isNew
    ? '<span class="badge badge--new">New</span>'
    : `<span class="badge badge--standing">Standing${
        item.sinceIssue ? ` · since ${String(item.sinceIssue).padStart(2, '0')}` : ''
      }</span>`;
}

function badges(call, todayIso) {
  const out = [];
  if (call.deadline) {
    const days = daysBetween(todayIso, call.deadline);
    if (days >= 0 && days <= 60) {
      out.push(
        `<span class="badge badge--flag">Closes in ${days} day${days === 1 ? '' : 's'}</span>`
      );
    }
  } else if (call.flagLabel) {
    // Imminent, but the organiser has not published an exact date yet.
    out.push(`<span class="badge badge--flag">${esc(call.flagLabel)}</span>`);
  }
  out.push(statusBadge(call));
  if (call.tier === 'notyet') out.push('<span class="badge badge--notyet">Not eligible yet</span>');
  return `<div class="badges">${out.join('')}</div>`;
}

function deadlineValue(call) {
  if (call.deadline) {
    return `<span class="strong">${esc(formatDate(call.deadline))}</span>`;
  }
  return '<span class="strong">Not yet announced</span>';
}

function callBlock(call, rank, todayIso) {
  const verify = call.confirmed === false
    ? '<div class="meta-note">Date and fee taken from a secondary source — confirm on the official page before applying.</div>'
    : '';

  return `
<div class="entry">
  <div class="entry-top">
    <h3><span class="rank">${String(rank).padStart(2, '0')}</span>${esc(call.name)}</h3>
    ${badges(call, todayIso)}
  </div>
  <p class="org">${esc([call.org, call.edition].filter(Boolean).join(' · '))}</p>
  <div class="meta">
    <div class="meta-block">
      <div class="meta-label">Deadline</div>
      <div class="meta-value">${deadlineValue(call)}</div>
    </div>
    <div class="meta-block">
      <div class="meta-label">Fee</div>
      <div class="meta-value">${esc(call.fee)}</div>
    </div>
    ${call.deadlineNote
      ? `<div class="meta-block full"><div class="meta-note">${esc(call.deadlineNote)}</div></div>`
      : ''}
    <div class="meta-block full">
      <div class="meta-label">Eligibility</div>
      <div class="meta-value">${esc(call.eligibility)}</div>
    </div>
    <div class="meta-block full">
      <div class="meta-label">Why it ranks here</div>
      <p class="why">${esc(call.why)}</p>
    </div>
  </div>
  ${verify}
  <div class="link">${esc(call.link)}</div>
</div>`;
}

function champBlock(c) {
  return `
<div class="champ">
  <div class="entry-top">
    <h3>${esc(c.name)}</h3>
    <div class="badges">${statusBadge(c)}</div>
  </div>
  <p class="role">${esc(c.role)}${c.role ? ' — ' : ''}<span class="inst">${esc(c.institution)}</span></p>
  ${c.changed
    ? `<div class="meta-note" style="margin-top:2.2mm">What changed: ${esc(c.changed)}</div>`
    : ''}
  <p class="why">${esc(c.why)}</p>
  ${c.contact
    ? `<div class="contact"><span class="clabel">Contact</span>${esc(c.contact)}</div>`
    : ''}
</div>`;
}

/**
 * Marks a block for the paginator. The attributes go on the block's own root
 * element rather than a wrapper, so `.entry:last-child` and friends still see
 * the page body as their parent and the hairline rules resolve correctly.
 */
function block(section, html, opts = {}) {
  const attrs =
    ` data-block data-section="${esc(section)}"` +
    (opts.keepWithNext ? ' data-keep-next="1"' : '') +
    (opts.keepWithPrev ? ' data-keep-prev="1"' : '');
  const out = html.replace(/^\s*<div/, `<div${attrs}`);
  if (out === html) throw new Error('block() expected the HTML to start with a <div>');
  return out;
}

export function renderHtml({ issue, openCalls, openCallsIntro, openCallsNote, champions, championsIntro, fontFaces }) {
  const today = issue.date;
  const S1 = 'Open Calls';
  const S2 = 'Champions';
  const blocks = [];

  /* ---- Masthead + section one ---- */
  blocks.push(
    block(
      S1,
      `<div class="masthead">
        <div class="eyebrow">Issue ${String(issue.number).padStart(2, '0')} · ${esc(issue.dayLabel)}${issue.kicker ? ` · ${esc(issue.kicker)}` : ''}</div>
        <h1>Great&nbsp;Awakening</h1>
        <p class="sub">Grants, Prizes &amp; Champions</p>
        <div class="rule-accent"></div>
        <p class="project">${esc(issue.project)}</p>
      </div>`,
      { keepWithNext: true }
    )
  );

  blocks.push(
    block(
      S1,
      `<div class="section-head">
        <h2><span class="num">01</span>Open Calls</h2>
        <p class="standfirst">${esc(openCallsIntro)}</p>
        <div class="rule-accent"></div>
      </div>`,
      { keepWithNext: true }
    )
  );

  let rank = 0;
  for (const tier of TIERS) {
    const items = openCalls.filter((c) => c.tier === tier.key);
    if (!items.length) continue;
    blocks.push(
      block(
        S1,
        `<div class="group-label">
          <div class="gl-title">${esc(tier.label)}</div>
          <div class="gl-note">${esc(tier.note)}</div>
        </div>`,
        { keepWithNext: true }
      )
    );
    for (const c of items) {
      rank += 1;
      blocks.push(block(S1, callBlock(c, rank, today)));
    }
  }

  if (openCallsNote) {
    blocks.push(
      block(
        S1,
        `<div class="callout">
          <h4>${esc(openCallsNote.title)}</h4>
          <p>${esc(openCallsNote.body)}</p>
        </div>`
      )
    );
  }

  /* ---- Section two ---- */
  blocks.push(
    block(
      S2,
      `<div class="section-head">
        <h2><span class="num">02</span>Champions</h2>
        <p class="standfirst">${esc(championsIntro)}</p>
        <div class="rule-accent"></div>
      </div>`,
      { keepWithNext: true }
    )
  );

  let lastGroup = null;
  for (const c of champions) {
    if (c.group !== lastGroup) {
      lastGroup = c.group;
      blocks.push(
        block(
          S2,
          `<div class="group-label"><div class="gl-title">${esc(c.group)}</div></div>`,
          { keepWithNext: true }
        )
      );
    }
    blocks.push(block(S2, champBlock(c)));
  }

  blocks.push(
    block(
      S2,
      `<div class="signoff">Next issue ${nextIssueDay(issue.date)}. This is a reminder feed, not a discovery feed: every open call still live and every champion still worth approaching is repeated in full each issue, badged Standing, so nothing important quietly falls off the desk while you are not acting on it. Genuinely new finds are badged New. Anything only leaves the list when its deadline has passed or its fit no longer holds.</div>`,
      { keepWithPrev: true }
    )
  );

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Great Awakening — Issue ${issue.number}</title>
<style>${styles(fontFaces)}</style>
</head>
<body>
<div id="doc"></div>
<div id="source">${blocks.join('\n')}</div>
</body>
</html>`;
}
