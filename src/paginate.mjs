/**
 * Runs inside the browser via page.evaluate, so it must be self-contained:
 * no imports, no closure over Node scope.
 *
 * Flows the staged blocks in #source into fixed-height .page elements in #doc.
 * A page break can only ever happen between blocks, so a section can never
 * bleed into another one: each section always starts a fresh page, and a
 * continuation page repeats the running header for the section it belongs to.
 */
export function paginateInBrowser({ headerLeft, footerLeft }) {
  const source = document.getElementById('source');
  const doc = document.getElementById('doc');
  const blocks = Array.from(source.querySelectorAll('[data-block]'));
  doc.innerHTML = '';

  let pageIndex = 0;
  const warnings = [];
  const pageMap = [];

  function makePage(sectionName) {
    pageIndex += 1;
    const page = document.createElement('div');
    page.className = 'page' + (pageIndex === 1 ? ' page--first' : '');
    const header =
      pageIndex > 1
        ? '<div class="page-header">' +
          '<div class="ph-left">' + headerLeft + '</div>' +
          '<div class="ph-right">' + sectionName + '</div>' +
          '</div>'
        : '';
    page.innerHTML =
      header +
      '<div class="page-body"></div>' +
      '<div class="page-footer">' +
      '<div>' + footerLeft + '</div>' +
      '<div class="pf-num">' + pageIndex + '</div>' +
      '</div>';
    doc.appendChild(page);
    pageMap.push({ page: pageIndex, section: sectionName });
    return page.querySelector('.page-body');
  }

  function overflows(body) {
    return body.scrollHeight > body.clientHeight + 0.5;
  }

  // Group the staged blocks into runs of consecutive same-section blocks.
  const sections = [];
  for (const b of blocks) {
    const name = b.getAttribute('data-section');
    if (!sections.length || sections[sections.length - 1].name !== name) {
      sections.push({ name: name, items: [] });
    }
    sections[sections.length - 1].items.push(b);
  }

  for (const sec of sections) {
    let body = makePage(sec.name);
    for (const src of sec.items) {
      const node = src.cloneNode(true);
      body.appendChild(node);
      if (!overflows(body)) continue;

      // Doesn't fit. Take it back off, and drag any "keep with next" run
      // (group labels, section heads) onto the next page with it.
      body.removeChild(node);
      const pulled = [];
      while (
        body.lastElementChild &&
        body.lastElementChild.getAttribute('data-keep-next') === '1'
      ) {
        pulled.unshift(body.removeChild(body.lastElementChild));
      }
      // A block marked keep-prev must not open a page on its own — drag the
      // preceding block across with it, so a short sign-off never strands
      // itself on an otherwise empty final page.
      if (
        !pulled.length &&
        node.getAttribute('data-keep-prev') === '1' &&
        body.lastElementChild &&
        body.children.length > 1
      ) {
        pulled.unshift(body.removeChild(body.lastElementChild));
      }
      body = makePage(sec.name);
      for (const p of pulled) body.appendChild(p);
      body.appendChild(node);

      if (overflows(body)) {
        warnings.push(
          'Block is taller than a single page and was clipped: ' +
            (node.textContent || '').trim().slice(0, 70)
        );
      }
    }
  }

  return { pages: pageIndex, warnings: warnings, pageMap: pageMap };
}
