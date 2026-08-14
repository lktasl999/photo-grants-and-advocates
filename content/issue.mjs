/**
 * THE CONTENT FILE.
 *
 * This is the only file you normally edit between runs. Update `issue`,
 * `openCalls` and `champions`, then run `npm run build`.
 *
 * Field notes
 * -----------
 * openCalls[].tier      'best' | 'open' | 'soon' | 'notyet'
 *                       'best'  -> Best Fit block at the top of the section
 *                       'open'  -> open right now
 *                       'soon'  -> not open yet, next cycle expected
 *                       'notyet'-> real prize, project not eligible this cycle
 * openCalls[].deadline  ISO date 'YYYY-MM-DD' when known. The build computes
 *                       the 60-day flag from this automatically. Use null when
 *                       the date is only an expectation and put the prose in
 *                       `deadlineNote`.
 * openCalls[].carry     true -> renders a "CARRIED OVER" marker. Use for things
 *                       worth keeping front of mind across issues.
 * openCalls[].confirmed false -> renders a small "verify" mark. Use when the
 *                       date/fee came from a secondary source.
 *
 * champions[].returning true -> allowed to repeat a name already in
 *                       archive.json. Requires `changed` explaining what is new.
 */

export const issue = {
  number: 1,
  date: '2026-08-14',
  dayLabel: 'Friday 14 August 2026',
  kicker: 'Test run',
  project:
    'A documentary photobook on American belief systems, New Age culture, and the line between staged and real imagery. Unpublished; expected 2027 from Loose Joints.',
};

/* ------------------------------------------------------------------ *
 * PART 1 — OPEN CALLS
 * ------------------------------------------------------------------ */

export const openCallsIntro =
  'Ranked against one project, not in the abstract. The ordering weights three things in order: whether unpublished work, dummies or work-in-progress are accepted; whether the selector has a record with religion, belief, mysticism or American vernacular culture; and whether the prize is built for documentary or long-form photobooks rather than single images. Anything closing within 60 days is flagged whatever its rank.';

export const openCalls = [
  /* ---------------------------- BEST FIT ---------------------------- */
  {
    tier: 'best',
    name: 'Guggenheim Fellowship',
    edition: '2027 United States & Canada Competition',
    org: 'John Simon Guggenheim Memorial Foundation',
    deadline: '2026-09-15',
    deadlineNote: 'Work samples due 29 September 2026. Late applications are not accepted.',
    fee: 'None',
    eligibility:
      'Citizens and permanent residents of the US and Canada. Photography is a standing category. Aimed at applicants with a substantial record of prior achievement; there is no requirement that the proposed work be finished or published.',
    link: 'https://www.gf.org/program/how-to-apply',
    why: 'The cleanest hit on the top criterion. The fellowship funds work in progress and asks for no published outcome, so a book still a year from release is an asset rather than a disqualifier. The money is unrestricted and carries no publisher attached to it, which means it cannot collide with the Loose Joints contract the way a dummy prize might. Photography has been a named category for decades with a long line of American documentary fellows.',
    confirmed: true,
  },
  {
    tier: 'best',
    name: 'Alicia Patterson Fellowship',
    edition: '2027 cycle',
    org: 'Alicia Patterson Foundation, administered by the Fund for Investigative Journalism',
    deadline: '2026-10-01',
    deadlineNote: 'Applications submitted through the FIJ portal since the December merger.',
    fee: 'None',
    eligibility:
      'US-based print and online journalists, photojournalists explicitly included. Photographers submit one set of 8 to 12 samples, published or unpublished. Two applicants may collaborate on one proposal. Six-month fellowship pays $20,000; twelve-month pays $40,000.',
    link: 'https://aliciapatterson.org/apply/',
    why: 'Takes unpublished photographs on its face and funds the fieldwork rather than the artefact, which is the right shape for a book still being made. American belief systems sit squarely inside "subjects of public interest", and the fellowship rewards depth over output. Like the Guggenheim it makes no claim on publication rights, so it stacks with an existing book deal instead of competing with it.',
    confirmed: true,
  },
  {
    tier: 'best',
    name: 'Hasselblad Foundation Photo Book Grants',
    edition: '2027 round',
    org: 'Hasselblad Foundation, Gothenburg',
    deadline: null,
    deadlineNote:
      'Next round opens early 2027. The 2026 round closed 1 April 2026 with decisions in June.',
    fee: 'None',
    eligibility:
      'Open internationally to professionals working with photography — photographers, artists, curators, researchers and writers. Applications from individuals or groups. Two grants of SEK 100,000 each.',
    link: 'https://www.hasselbladfoundation.org/en/stipend/photo-book-fellowships/',
    why: 'The rare book award that pays out in production money rather than a publishing contract, which makes it one of the few that can co-fund a Loose Joints title instead of trying to replace it. Explicitly scoped to the development and publication of a photobook, so an unpublished manuscript is exactly what it is looking for. The international opening from 2025 removed the Nordic restriction that used to rule this out.',
    confirmed: true,
  },

  /* --------------------------- OPEN NOW ----------------------------- */
  {
    tier: 'open',
    name: 'PhMuseum 2026 Women Photographers Grant',
    edition: '',
    org: 'PhMuseum, Bologna',
    deadline: '2026-10-10',
    deadlineNote: 'Reduced entry fee until 19 September 2026.',
    fee: '€25 until 19 September, €30 until 10 October',
    eligibility:
      'Women and non-binary photographers worldwide. Ongoing and unpublished projects accepted. €10,000 in cash prizes assigned by an independent jury.',
    link: 'https://phmuseum.com/grants/2026-women-photographers-grant',
    why: 'Accepts work-in-progress series, and PhMuseum juries reliably pick long-form documentary over single-image work. Confirm the eligibility definition applies to you before paying the fee — this is the only entry here with an identity-based restriction.',
    confirmed: false,
  },
  {
    tier: 'open',
    name: 'Review Santa Fe',
    edition: '25th edition, 24–26 October 2026',
    org: 'CENTER, Santa Fe',
    deadline: null,
    deadlineNote:
      'The festival runs 24–26 October 2026. The next grants and awards cycle, including the Project Development Grant, is expected to close around 28 February 2027, matching the 2026 cycle.',
    fee: 'Verify on the call page',
    eligibility:
      'The Project Development Grant funds a fine-art, reportage or documentary work-in-progress. Review Santa Fe itself is a juried portfolio review.',
    link: 'https://centersantafe.org/callsforentry',
    why: 'The Project Development Grant is written for exactly this stage of a project. The more valuable half is the review itself: three days in front of US editors, curators and publishers is champion-building as much as it is grant-seeking, and it feeds Part 2 of this newsletter directly.',
    confirmed: false,
  },

  /* ------------------- BOOK & DUMMY AWARDS, NEXT CYCLE --------------- */
  {
    tier: 'soon',
    name: 'Dummy Award 2027',
    edition: 'formerly the Kassel Dummy Award',
    org: 'The PhotoBookMuseum, Cologne',
    deadline: null,
    deadlineNote:
      'Expected to open late 2026 and close late January 2027. The 2026 round closed 31 January online, with physical dummies due in Cologne mid-February.',
    fee: 'Verify on the call page',
    eligibility:
      'Any photographer, artist or designer worldwide. Unpublished photobook projects submitted as a physical dummy. Around 50 books are shortlisted and exhibited at international photography events; one project is published by MAS.',
    link: 'https://dummyaward.org/',
    why: 'The largest dummy award in the field and the purest hit on criteria one and three. The value here is not really the prize: a shortlisting puts the physical dummy in front of the photobook world a full year before the Loose Joints release, which is the best possible warm-up for the book. Note the winner\'s prize is publication — see the conflict note at the end of this section.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'LUMA Rencontres Dummy Book Award 2027',
    edition: '',
    org: 'Les Rencontres d\'Arles and LUMA Foundation',
    deadline: null,
    deadlineNote: 'Expected around May 2027. The 2026 round closed 13 May.',
    fee: 'Verify on the call page',
    eligibility:
      'Open to any photographer or artist using photography submitting a previously unpublished dummy book. Special attention is paid to experimental and innovative forms of publishing. €25,000 production budget.',
    link: 'https://www.rencontres-arles.com/',
    why: 'The €25,000 is a production budget rather than a contract, and the jury explicitly rewards formal invention — directly relevant to a book whose subject is the seam between the staged and the real, where the sequencing and the object are doing argumentative work. Arles is also the single best European stage for a documentary photobook.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'Images Vevey Book Award 2027/28',
    edition: '7th edition',
    org: 'Festival Images Vevey, Switzerland',
    deadline: null,
    deadlineNote:
      'Biennial. Expected to open January 2027. The 6th edition closed 25 February 2025.',
    fee: 'None',
    eligibility:
      'Professional artists and photographers, and those in training, worldwide. No age limit, no regional restriction. Must be currently working on a book project. Award ranges from CHF 10,000 for co-publishing to CHF 20,000 where Images Vevey is the exclusive publisher.',
    link: 'https://www.images.ch/en/grand-prix/',
    why: 'A grant to make an unpublished book, judged on how well the publication format answers the photographic content — which is the question this project has to solve anyway. The CHF 10,000 co-publishing tier is the one that can sit alongside a signed publisher; the CHF 20,000 exclusive tier cannot.',
    confirmed: true,
  },
  {
    tier: 'soon',
    name: 'Aperture Portfolio Prize 2027',
    edition: '',
    org: 'Aperture, New York',
    deadline: '2027-01-11',
    deadlineNote: 'Call expected to open November 2026, following the 2026 pattern.',
    fee: 'Free to enter; entrants must be current Aperture print subscribers',
    eligibility: 'Worldwide. Unpublished and ongoing bodies of work.',
    link: 'https://aperture.org/calls-for-entry/portfolio-prize/',
    why: 'Free, open to work in progress, and the institution on the other end is the one most worth knowing before a documentary photobook comes out. Aperture publishes, reviews and exhibits in this exact register; an entry is cheap and the relationship compounds. Budget for the subscription requirement now so it is not a blocker in January.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'APhF Dummy Award feat. Chose Commune',
    edition: 'Athens Photo Festival 2027',
    org: 'Athens Photo Festival',
    deadline: null,
    deadlineNote:
      'Expected late April 2027. The 2026 round closed 28 April online with physical copies postmarked by 30 April.',
    fee: 'Verify on the call page',
    eligibility:
      'Juried competition open to unpublished photobook dummies worldwide. The winner receives a publishing contract with Chose Commune.',
    link: 'https://photofestival.gr/dummy-award/',
    why: 'Straightforward on criteria one and three, and Chose Commune has real taste in this register. The prize is a contract, so the conflict note applies — worth entering for the shortlist exposure if your contract permits it.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'Landskrona Foto & Breadfield Dummy Award 2027',
    edition: '',
    org: 'Landskrona Foto and Breadfield Press, Sweden',
    deadline: null,
    deadlineNote: 'Expected around April 2027. The 2026 round closed 30 April.',
    fee: 'Verify on the call page',
    eligibility:
      'Unpublished book projects. The winner is published by Breadfield Press and Landskrona Foto.',
    link: 'https://www.landskronafoto.org/',
    why: 'A smaller field than Cologne or Arles, which makes the odds better, and Breadfield makes serious documentary books. Prize is publication, so the conflict note applies.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'Encontros da Imagem Photobook Award 2027',
    edition: 'includes a Best Dummy category',
    org: 'Encontros da Imagem, Braga, Portugal',
    deadline: null,
    deadlineNote:
      'Expected around May 2027. The 2026 round closed 25 May with physical books due 15 July.',
    fee: 'Verify on the call page',
    eligibility:
      'International. Separate categories for published photobooks and for dummies, so an unpublished project enters the dummy strand.',
    link: 'https://encontrosdaimagem.com/',
    why: 'Useful second-tier dummy award with a festival attached. Lower prestige than Cologne or Arles, but it runs a published-book category too — which means the same project can come back here after the Loose Joints release.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'PhMuseum 2027 Photography Grant',
    edition: '15th edition',
    org: 'PhMuseum, Bologna',
    deadline: null,
    deadlineNote: 'Expected to close around February 2027. The 2026 edition closed 19 February.',
    fee: 'Around €25–30, tiered by entry date',
    eligibility: 'Open worldwide to ongoing and unpublished projects. €10,000 in cash prizes.',
    link: 'https://phmuseum.com/grants',
    why: 'The unrestricted sibling of the Women Photographers Grant above, with the same appetite for long-form documentary and no identity restriction. Modest money, but the shortlist gets real circulation in Europe.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'LensCulture Photobook Prize',
    edition: '2027 edition',
    org: 'LensCulture and Nazraeli Press',
    deadline: null,
    deadlineNote:
      'The inaugural 2026 edition closed 12 August 2026 — two days before this issue. Watch for the 2027 call.',
    fee: 'Verify on the call page',
    eligibility:
      'An unpublished project. No dummy required: 20–30 images, a project statement and a short biography. The winning project is designed, printed and distributed by Nazraeli Press.',
    link: 'https://www.lensculture.com/photo-competitions/photobook',
    why: 'Listed because the entry requirement is unusually light — no dummy, just a sequence and a statement — which makes it the cheapest test of whether the edit reads to strangers. Missed by two days this year; diary the 2027 call. Prize is publication, so the conflict note applies.',
    confirmed: true,
  },

  /* ----------------- NOT ELIGIBLE THIS CYCLE ------------------------ */
  {
    tier: 'notyet',
    name: 'Paris Photo–Aperture PhotoBook Awards',
    edition: '2026 edition',
    org: 'Paris Photo and Aperture',
    deadline: '2026-09-04',
    deadlineNote:
      'Flagged because it closes inside 60 days, but the project is not eligible this cycle — entries must be finished, publicly available books.',
    fee: 'Tiered, with an early-bird rate that has already passed. Verify on the call page',
    eligibility:
      'Three categories: First PhotoBook, PhotoBook of the Year, Photography Catalog of the Year. Books must have been produced and published inside the edition\'s stated twelve-month window. First PhotoBook carries $10,000.',
    link: 'https://aperture.org/calls-for-entry/photobook-awards/',
    why: 'Here as a calendar item, not an application. This is the prize that matters most for a documentary photobook, and First PhotoBook is a one-shot category — there is exactly one debut to spend. Fix the Loose Joints publication date against the eligibility window now, because a release that slips across the cut-off decides which edition you enter and you do not get to choose twice.',
    confirmed: true,
  },
];

export const openCallsNote = {
  title: 'One conflict to check before entering anything',
  body:
    'Several of the strongest dummy awards pay out in a publishing contract — Chose Commune at Athens, MAS at Cologne, Breadfield at Landskrona, Nazraeli at LensCulture. With a 2027 Loose Joints book already contracted, those prizes may be unenterable, or may need the publisher\'s sign-off, depending on the option and exclusivity clauses in your agreement. Read that clause once and the whole list resolves itself. The awards that carry cleanly alongside a signed publisher are the ones giving unrestricted or production money: the Guggenheim, Alicia Patterson, the Hasselblad book grants, the Images Vevey co-publishing tier, and the LUMA Rencontres production budget. Where a shortlisting rather than a win is the real prize, entering may still be worth it — but ask Loose Joints first, not after.',
};

/* ------------------------------------------------------------------ *
 * PART 2 — CHAMPIONS
 * ------------------------------------------------------------------ */

export const championsIntro =
  'People who could credibly carry this book at release. A running list: names sent in a previous issue are not repeated unless something about their fit has changed. Contact routes given here are public and professional — institutional pages, departmental listings, public bylines.';

export const champions = [
  /* ---------------- Scholars of American religion & visual culture --- */
  {
    group: 'Scholars — American religion, visual & material culture',
    name: 'Peter Manseau',
    role: 'Lilly Endowment Curator of American Religious History',
    institution: 'Smithsonian National Museum of American History',
    why: 'The single closest match on the list. His book The Apparitionists (2017) is a full-length account of William Mumler, the Civil War spirit photographer who sold Mary Todd Lincoln a portrait of her husband\'s ghost — and it deliberately refuses to either endorse or debunk him. That is the exact fault line this project works: an image that is staged and sincere at once. He is also a curator, not only a writer, having built Religion in Early America at NMAH, so he can vouch for the book institutionally as well as in print.',
    contact: 'Staff page, americanhistory.si.edu',
  },
  {
    group: 'Scholars — American religion, visual & material culture',
    name: 'Rachel McBride Lindsey',
    role: 'Professor of American religious history and culture, Department of Theological Studies',
    institution: 'Saint Louis University',
    why: 'A Communion of Shadows: Religion and Photography in Nineteenth-Century America (UNC Press, 2017) puts vernacular photography at the centre of American religious life — studio portraits tucked into Bibles, postmortem portraits with hair attached, spirit photographs, Holy Land stereographs. She reads ordinary photographs as devotional objects, which is the interpretive move this book needs someone respected to make in public. The book was built as a multimedia collaboration with MAVCOR at Yale, so she is already fluent in publishing images alongside argument.',
    contact: 'Faculty page, slu.edu',
  },
  {
    group: 'Scholars — American religion, visual & material culture',
    name: 'David Morgan',
    role: 'Professor of Religious Studies, with an appointment in Art, Art History and Visual Studies',
    institution: 'Duke University',
    why: 'The field\'s anchor. The Sacred Gaze (2005) supplied the working vocabulary for how religious images do their work on viewers, and he co-edited The Visual Culture of American Religions (2001) with Sally Promey. A blurb or an essay from him places the book inside a scholarly conversation rather than leaving it as a picture book about odd Americans — which is the difference between a review cycle and a reading list.',
    contact: 'Faculty page, religiousstudies.duke.edu',
  },
  {
    group: 'Scholars — American religion, visual & material culture',
    name: 'Sally M. Promey',
    role: 'Professor of Religion and Visual Culture; Professor of American Studies; Deputy Director, Institute of Sacred Music',
    institution: 'Yale University',
    why: 'Directs MAVCOR, the Center for the Study of Material and Visual Cultures of Religion, which is the institutional home for exactly this material and publishes a journal that takes photographic essays seriously. Co-editor with Morgan of The Visual Culture of American Religions. MAVCOR is a plausible venue for a project feature timed to the release, which makes her useful twice over — as an endorser and as a publishing route.',
    contact: 'MAVCOR, mavcor.yale.edu',
  },
  {
    group: 'Scholars — American religion, visual & material culture',
    name: 'Courtney Bender',
    role: 'Professor of Religion',
    institution: 'Columbia University',
    why: 'The New Metaphysicals: Spirituality and the American Religious Imagination (Chicago, 2010) is the standing ethnography of American New Age practice — and it is notable for treating its subjects without condescension, which is the tonal problem any photographer working this material has to solve. If the book is going to be read as serious rather than arch, she is one of the few people whose endorsement settles the question.',
    contact: 'Department of Religion, columbia.edu',
  },
  {
    group: 'Scholars — American religion, visual & material culture',
    name: 'Leigh Eric Schmidt',
    role: 'Edward C. Mallinckrodt University Professor',
    institution: 'Washington University in St. Louis',
    why: 'Restless Souls: The Making of American Spirituality traces the long American line from Transcendentalism to the spiritual-but-not-religious present — the deep history underneath contemporary New Age culture. He also writes as an essayist and reviewer for general readers, so he is one of the few scholars here who might actually review the book somewhere outside the academy.',
    contact: 'Faculty page, religiousstudies.wustl.edu',
  },
  {
    group: 'Scholars — American religion, visual & material culture',
    name: 'D. W. Pasulka',
    role: 'Professor of Religious Studies',
    institution: 'University of North Carolina Wilmington',
    why: 'American Cosmic: UFOs, Religion, Technology (Oxford, 2019) argues that media and images are replacing religious institutions as the authority that tells believers what is real — which is a one-sentence description of the problem this book is photographing. She reaches well past the academy, and her audience overlaps almost exactly with the readership a book on American belief wants to find.',
    contact: 'Faculty page, uncw.edu',
  },

  /* ------------------------------ Curators --------------------------- */
  {
    group: 'Curators',
    name: 'Clément Chéroux',
    role: 'Joel and Anne Ehrenkranz Chief Curator of Photography',
    institution: 'The Museum of Modern Art, New York',
    why: 'Curated The Perfect Medium: Photography and the Occult (2004), still the canonical exhibition on photography as an instrument of belief, and won the Grand Prix de l\'Imaginaire for the book. He has since run photography at the Centre Pompidou and SFMOMA before MoMA, so he is both the most senior name on this list and the one with the most specific prior commitment to this subject. A long shot for a first approach, but the alignment is unusually exact and worth a considered letter rather than a mailing.',
    contact: 'Department of Photography, moma.org',
  },
  {
    group: 'Curators',
    name: 'Valérie Rousseau',
    role: 'Curatorial Chair for Exhibitions and Senior Curator of Self-Taught Art and Art Brut',
    institution: 'American Folk Art Museum, New York',
    why: 'Has curated art brut photography exhibitions (2019 and 2021) and most recently Self-Made: A Century of Inventing Artists. Her subject is visionary and vernacular American making — the homemade cosmology, the private system worked out in a garage — which is the same cultural material this project photographs from the outside. The Folk Art Museum is also a realistic exhibition partner at a scale where a first approach can actually land.',
    contact: 'folkartmuseum.org',
  },
  {
    group: 'Curators',
    name: 'Gregory J. Harris',
    role: 'Donald and Marilyn Keough Family Curator of Photography',
    institution: 'High Museum of Art, Atlanta',
    why: 'Co-curated A Long Arc: Photography and the American South since 1845 with Sarah Kennel at VMFA — a survey that toured nationally with an Aperture catalogue. It is the recent benchmark for handling long-form American documentary as both an exhibition and a book, and the South is where a lot of American vernacular religion actually lives. He has demonstrated he can move a project from photographs to institution to publication, which is the arc this book needs.',
    contact: 'high.org',
  },

  /* -------------------- Photobook critics & editors ------------------ */
  {
    group: 'Photobook critics & editors',
    name: 'David Levi Strauss',
    role: 'Critic and essayist; directed the graduate programme in Art Writing at the School of Visual Arts, 2007–21',
    institution: 'Independent, New York',
    why: 'Wrote Photography and Belief (David Zwirner Books, 2020), which sets out to explain why we believe photographs at all in an age when we know better — the precise theoretical question this project raises with pictures instead of argument. He holds ICP\'s Infinity Award for Writing and has been publishing on photography and politics since Between the Eyes. The most natural author for a catalogue essay or a long review.',
    contact: 'Published via David Zwirner Books and The Brooklyn Rail',
  },
  {
    group: 'Photobook critics & editors',
    name: 'Lesley A. Martin',
    role: 'Executive Director',
    institution: 'Printed Matter, Inc., New York',
    why: 'Founded and published The PhotoBook Review for ten years, co-founded the Paris Photo–Aperture PhotoBook Awards, and edited more than 150 books across two decades at Aperture. There is not a more load-bearing person in American photobook publishing. Now at Printed Matter, which adds a distribution and event route on top of the editorial judgement.',
    contact: 'printedmatter.org',
  },
  {
    group: 'Photobook critics & editors',
    name: 'Brendan Embser',
    role: 'Senior editor, Aperture magazine',
    institution: 'Aperture, New York',
    why: 'Edited Aperture monographs for Deana Lawson, Philip Montgomery, Louis Carlos Bernal, Ming Smith and Wendy Red Star — a list that shows a consistent appetite for American documentary with a metaphysical or communal charge to it. Formerly director of exhibitions at the Walther Collection, and a contributor to The PhotoBook Review. The realistic first point of contact at Aperture.',
    contact: 'Editorial contact via aperture.org',
  },
  {
    group: 'Photobook critics & editors',
    name: "Sean O'Hagan",
    role: 'Photography critic',
    institution: 'The Guardian and The Observer',
    why: 'The only dedicated photography critic among the Guardian\'s regular art writers, and the most consistent reviewer of photobooks in the mainstream UK press. For a Loose Joints title — a British publisher with a European distribution footprint — he is the single highest-leverage review in the anglophone press, and he has a long record of taking American documentary projects seriously rather than exotically.',
    contact: 'Public byline, theguardian.com',
  },
];
