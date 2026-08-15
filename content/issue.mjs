/**
 * THE CONTENT FILE.
 *
 * This is the only file you normally edit between runs. Update `issue`,
 * `openCalls` and `champions`, then run `npm run build`.
 *
 * Standing rules
 * --------------
 * 1. ELIGIBILITY. Do not list anything restricted to women or non-binary
 *    applicants only (Inge Morath Award, FotoEvidence W Award, PhMuseum Women
 *    Photographers Grant, Firecracker, Sonntag Grant). General or open
 *    eligibility is fine. The build warns if one slips back in.
 * 2. RESURFACE, DON'T DISCARD. This is a reminder feed. Anything still relevant
 *    stays in the list every issue and is badged "Standing"; first appearances
 *    are badged "New". Set `retired: true` to drop something for good — a
 *    passed deadline, or a fit that no longer holds.
 * 3. SCOPE. Open Calls is not limited to photobook prizes. Any grant,
 *    fellowship or competition the project — or single images from it — could
 *    be submitted to belongs here: portfolio and single-image competitions,
 *    documentary grants and fellowships, editorial awards.
 *
 * Field notes
 * -----------
 * openCalls[].tier      'best' | 'open' | 'soon' | 'notyet'
 * openCalls[].deadline  ISO 'YYYY-MM-DD' when known; the 60-day flag is
 *                       computed from it. null when it is only an expectation —
 *                       put the prose in `deadlineNote`.
 * openCalls[].confirmed false -> prints a "confirm on the official page" note.
 * champions[].changed   Prints a "What changed" line. Use when a standing
 *                       name's fit has shifted.
 */

export const issue = {
  number: 3,
  date: '2026-08-20',
  dayLabel: 'Thursday 20 August 2026',
  kicker: '',
  project:
    'A documentary photobook on American belief systems, New Age culture, and the line between staged and real imagery. Unpublished; expected 2027 from Loose Joints.',
};

/* ------------------------------------------------------------------ *
 * PART 1 — OPEN CALLS
 * ------------------------------------------------------------------ */

export const openCallsIntro =
  'Every grant, fellowship, prize and competition the project could be submitted to — book awards, documentary grants, portfolio and single-image competitions alike. Ranked against one project, not in the abstract: first, whether unpublished work, dummies or work-in-progress are accepted; second, whether the selector has a record with religion, belief, mysticism or American vernacular culture; third, whether it is built for documentary or long-form work. Anything closing within 60 days is flagged whatever its rank. Nothing drops off this list because it appeared last time — everything still live is still here.';

export const openCalls = [
  /* ---------------------------- BEST FIT ---------------------------- */
  {
    tier: 'best',
    name: 'W. Eugene Smith Grant in Humanistic Photography',
    edition: '2026 cycle',
    org: 'W. Eugene Smith Memorial Fund',
    deadline: '2026-10-12',
    deadlineNote: 'Deadline is 11.59pm EST on Monday 12 October 2026.',
    fee: 'Verify on the call page',
    eligibility:
      'Open internationally. Submit a biography, project description, detailed proposal and up to 40 images. $67,500 awarded in total: a $30,000 main grant plus two $10,000 finalist grants. The Howard Chapnick Grant runs on the same deadline.',
    link: 'https://www.smithfund.org/eugene-smith-grant',
    why: 'The strongest fit currently open, and new to this list. It funds unfinished work outright — a proposal plus up to 40 images is exactly a book in progress — and the remit is the long-form humanistic photo essay rooted in documentary, which is criterion three almost verbatim. The fund names cultural issues alongside social and political ones, so American belief is squarely inside its brief rather than an awkward fit. At $30,000 with no publication claim attached, it also stacks cleanly with the Loose Joints contract.',
    confirmed: true,
  },
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
    why: 'Still the cleanest hit on the top criterion, and now the most urgent thing on the list. The fellowship funds work in progress and asks for no published outcome, so a book a year from release is an asset rather than a disqualifier. Unrestricted money with no publisher attached, so it cannot collide with the Loose Joints contract. Photography has been a named category for decades with a long line of American documentary fellows.',
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

  /* --------------------------- OPEN NOW ----------------------------- */
  {
    tier: 'open',
    name: 'The Alexia Grants',
    edition: 'Professional Grant and themed strands',
    org: 'The Alexia Foundation, Syracuse University',
    deadline: null,
    flagLabel: 'Opens mid-September',
    deadlineNote:
      'The application window runs roughly mid-September to early October, with judging in early November and winners announced mid-November — so this opens within weeks of this issue and closes inside the 60-day horizon. Exact dates are not yet posted; set a reminder for the first week of September.',
    fee: 'Verify on the call page',
    eligibility:
      'Photographers and visual journalists of any nationality may apply. The main Professional Grant carries $20,000 to produce the proposed project plus Sony camera and lens. Additional themed strands and an Emerging Photographer Grant run alongside it. Applications require a synopsis, proposal and CV.',
    link: 'https://www.alexiafoundation.org/',
    why: 'The only entry on this list whose selectors have named faith as a subject they are looking for, which is criterion two met head-on rather than inferred. It is also a production grant for a proposed project, so unfinished work is the expectation, and $20,000 with no publication claim sits cleanly beside the Loose Joints contract. The one caveat is framing: Alexia funds visual journalism that "inspires change", so the application has to lead with what the work reveals about American belief rather than with the book as an object. Reporting on the grant\'s exact structure varies between secondary sources — check the figures on the site before building a budget around them.',
    confirmed: false,
  },
  {
    tier: 'open',
    name: 'LSI Photography Grant',
    edition: '8th annual, 2026',
    org: 'Leica Society International',
    deadline: '2026-09-04',
    deadlineNote:
      'Closes 4 September 2026 OR when 200 applications are received, whichever comes first — so the real deadline may arrive early. Opened 24 July 2026. Applications run through Picter.',
    fee: 'Verify on the call page',
    eligibility:
      'Open internationally. $7,500 to the recipient plus a Leica camera and lens. Submission capped at 200 applications in total.',
    link: 'https://site.picter.com/2026-lsi-grant',
    why: 'Found via Picter, and the most time-sensitive thing on this list: the 200-application cap means it can close weeks before the stated date, so treat it as due now rather than in September. The Leica Society funds project work rather than single frames and has no publication claim, so it sits cleanly alongside the book. Ranked below Alexia because there is no thematic affinity with belief — this is a general documentary grant that happens to be open, cheap to enter and quick to close.',
    confirmed: false,
  },
  {
    tier: 'open',
    name: 'Sony World Photography Awards 2027',
    edition: '20th edition — Series and Single Image competitions',
    org: 'World Photography Organisation',
    deadline: '2027-01-12',
    deadlineNote:
      'Series competition closes 12 January 2027, 1pm GMT. Single Image closes 5 January 2027. Entries have been open since 1 June 2026.',
    fee: 'Free',
    eligibility:
      'Open to all entrants over 18, worldwide. Series (formerly Professional) takes a cohesive series of 5 to 10 images per category; categories include Documentary Projects, Portraiture and Creative Practice. Single Image (formerly Open) takes individual frames.',
    link: 'https://www.worldphoto.org/sony-world-photography-awards',
    why: 'Free, open now, and the first entry here that suits individual frames as well as the whole. A 5–10 image cut is a different edit from a book sequence and worth making anyway — it forces the strongest pictures to stand alone. Ranked below the grants because it pays in profile rather than production money and the jury is broad rather than specialist, but there is no cost to entering and Documentary Projects is the right category. Creative Practice is the home for anything openly constructed.',
    confirmed: true,
  },

  {
    tier: 'open',
    name: 'PhotoVogue Global Open Call 2026',
    edition: 'Brave New Visions: Creativity as Rebellion',
    org: 'PhotoVogue, Condé Nast',
    deadline: '2026-09-11',
    deadlineNote: 'Closes 11 September 2026, 11.59pm CEST. Open since 14 May 2026.',
    fee: 'Verify on the call page',
    eligibility:
      'Open internationally. Three artists share $12,000 in grants, with selected work shown through the PhotoVogue platform and festival.',
    link: 'https://site.picter.com/photovogue-brave-new-visions-global-open-call-2026',
    why: 'A themed call, and the theme is the question of whether making pictures can itself be an act of refusal — which a project on American belief can answer honestly without contorting itself. Ranked at the foot of the open group because PhotoVogue\'s centre of gravity is image-making and identity rather than long-form documentary, and because a themed brief means writing to someone else\'s prompt. Cheap profile with a large audience if the framing works; skip it if the statement has to be bent to fit.',
    confirmed: false,
  },

  /* -------------------------- OPENING SOON -------------------------- */
  {
    tier: 'soon',
    name: 'CatchLight Global Fellowship',
    edition: '2027 cycle',
    org: 'CatchLight',
    deadline: null,
    deadlineNote:
      'Expected to open around November 2026 and close mid-December. The 2026 round closed 15 December 2025.',
    fee: 'Verify on the call page',
    eligibility:
      'Visual storytellers worldwide. Three fellowships of $30,000 each, for work that functions as a tool for information, connection and transformation in a community.',
    link: 'https://www.catchlight.io/how-to-apply-global-fellowship',
    why: 'Serious money for work in progress, with no publication claim — the same clean profile as the Guggenheim and Alicia Patterson. The framing is community-facing, so the application would need to lead on the communities photographed rather than on the book as an art object. That is a positioning problem, not an eligibility one.',
    confirmed: false,
  },
  {
    tier: 'soon',
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
    why: 'The rare book award that pays out in production money rather than a publishing contract, which makes it one of the few that can co-fund a Loose Joints title instead of trying to replace it. Explicitly scoped to the development and publication of a photobook, so an unpublished manuscript is exactly what it is looking for. Dropped out of Best Fit this issue only because the W. Eugene Smith grant is open now and this is not.',
    confirmed: true,
  },
  {
    tier: 'soon',
    name: 'Magnum Foundation Counter Histories',
    edition: '2027 cycle',
    org: 'Magnum Foundation',
    deadline: null,
    deadlineNote: 'Cycles have typically opened in the first quarter. Confirm on the programme page.',
    fee: 'None',
    eligibility:
      'International. Up to twelve grants of up to $10,000, plus additional completion funds, for projects that creatively reframe the past to engage with questions of the present and future.',
    link: 'https://www.magnumfoundation.org/counter-histories',
    why: 'The brief — reframing the past to ask something about the present — is a good description of a project on American belief, where nineteenth-century spiritualism and present-day New Age practice are continuous rather than separate stories. Magnum Foundation also explicitly supports experimental documentary approaches, which matters for work that plays the staged against the real rather than pretending the distinction is settled.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'World Press Photo Contest 2027',
    edition: '',
    org: 'World Press Photo Foundation',
    deadline: null,
    deadlineNote:
      'Expected to close mid-January 2027. The 2026 contest closed 17 January, 13.00 CET.',
    fee: 'Free',
    eligibility:
      'Professional photojournalists worldwide. Three formats: Singles, Stories, and Long-Term Projects. Long-Term Projects requires 24–30 single frames on one theme, drawn from at least three different years, with a minimum of six frames shot in the most recent year.',
    link: 'https://www.worldpressphoto.org/contest/entry-rules',
    why: 'Read the entry rules before you invest any time in this one. Long-Term Projects is the right shape and free to enter, but World Press Photo runs a strict code of ethics against staging and a verification process that requests camera-original files from finalists. A project whose subject is the line between staged and real is fine here only if the pictures themselves are found rather than directed — any constructed frame is a disqualification, not a talking point. If the work is straight documentary, enter; if any of it is made rather than observed, this is the wrong door and Sony\'s Creative Practice category is the right one.',
    confirmed: true,
  },
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
    why: 'The largest dummy award in the field and the purest hit on criteria one and three. The value here is not really the prize: a shortlisting puts the physical dummy in front of the photobook world a full year before the Loose Joints release. Note the winner\'s prize is publication — see the conflict note at the end of this section.',
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
    name: "Revela'T Portfolio Review 2027",
    edition: '',
    org: "Revela'T International Festival of Analogue Photography, Vilassar de Dalt, Barcelona",
    deadline: null,
    deadlineNote:
      'Expected around July 2027. The 2026 round closed 30 July 2026 — three weeks before this issue. Applications run through Picter.',
    fee: '€25 per project (€15 for Friends of Revela\'T), then a further €100 if selected',
    eligibility:
      'Photographers of any nationality or residence, working in chemical or digital photography — unlike the exhibition call below, this strand is not restricted to analogue. An application is 10 to 15 images, a project statement and author information. Eighteen participants are selected. One reviewed project is produced and exhibited at the following year\'s festival with installation and an artist\'s fee covered.',
    link: 'https://revela-t.cat/en/',
    why: 'Filed here as a champion-building exercise more than a prize. Eighteen places, eleven expert reviewers, twenty minutes one-to-one with each — three hours of concentrated contact with European curators and editors, which is Part 2 of this newsletter compressed into an afternoon. For a Loose Joints title with European distribution that reach is worth more than the exhibition. Note the fee structure is two-stage: €25 to apply, €100 more if you get in.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: "Revela'T Open Call to Exhibit 2027",
    edition: '',
    org: "Revela'T International Festival of Analogue Photography, Barcelona",
    deadline: null,
    deadlineNote:
      'Expected to open in the autumn. The 2026 edition closed 16 November 2025. The 2026 festival itself runs 1–18 October 2026. Applications run through Picter.',
    fee: 'Verify on the call page',
    eligibility:
      'Amateur, emerging and professional photographers of any nationality. Restricted to projects made in analogue or chemical photography — this is a hard gate, not a preference. Three projects are selected for exhibition; first prize carries up to €1,000 towards production and transport, plus artist fees.',
    link: 'https://revela-t.cat/en/open-call-exhibit/',
    why: 'Worth a decision rather than an application. Everything else about this fits — a festival that takes process seriously, in a register where the physical print matters — but the analogue restriction decides it outright. If the work is shot on film, this is a strong and unusually winnable call. If it is digital, the exhibition strand is closed to you and the portfolio review above is the way in instead. Answer that question once and it settles both entries.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'InCadaqués Photo Festival Open Call',
    edition: '2027 edition',
    org: 'InCadaqués Photo Festival, Cadaqués, Spain',
    deadline: null,
    deadlineNote:
      'The 2027 call is expected around mid-year; the 2026 deadline is not published in the sources reachable here, and the 2026 festival runs 8–25 October. Applications run through Picter.',
    fee: 'Verify on the call page',
    eligibility:
      'Open to all photographers with no imposed theme. A project of 10 to 15 images. Twenty photographers are selected to exhibit, sharing over €20,000 in combined cash prizes and exhibition support.',
    link: 'https://www.incadaques.com/',
    why: 'No theme imposed and twenty places, which makes it one of the more open exhibition routes in Europe, with real money attached. Ranked in the lower half because it is an exhibition call rather than a book or production grant, so it does nothing directly for the manuscript — but a Spanish festival showing in October, the same month Revela\'T runs, makes a single European trip do double work.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'Photolucida Critical Mass 2027',
    edition: '',
    org: 'Photolucida, Portland',
    deadline: null,
    deadlineNote:
      'Expected to close early July 2027. The 2026 round closed 7 July 2026 — missed by five weeks.',
    fee: 'Verify on the call page',
    eligibility:
      'Open to photographers at all levels worldwide. A portfolio of 10 images, reviewed by a pre-screening panel and then by up to 200 international photography professionals for the Top 200 and Top 50.',
    link: 'https://www.photolucida.org/critical-mass/',
    why: 'The most efficient introduction machine in American photography: one 10-image portfolio is seen by up to 200 curators, editors and publishers, which is Part 2 of this newsletter happening automatically. Book and exhibition awards sit on top of that, but the reviewer exposure is the real prize. Missed this year — put it in the diary now for early summer 2027, which lands just as the Loose Joints book is coming into view.',
    confirmed: true,
  },
  {
    tier: 'soon',
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
  {
    tier: 'soon',
    name: 'Getty Images Editorial Photography Grant',
    edition: '',
    org: 'Getty Images',
    deadline: null,
    deadlineNote: 'Cycle dates not confirmed. Check the grants site before planning around it.',
    fee: 'None',
    eligibility:
      'Awards from $5,000 to $15,000 for editorial photographers. Winners are invited to license work through the Getty Images catalogue — read that term against your own licensing plans and the Loose Joints agreement.',
    link: 'https://grants.gettyimages.com/en/grants/editorial-photography-grant',
    why: 'Production money for documentary work in progress, which is the right category. Ranked here rather than higher because the licensing invitation attached to the award is a real consideration for a project whose pictures are promised to a book, and because Getty\'s editorial remit skews to news rather than long-form cultural work.',
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
    name: 'PhMuseum 2027 Photography Grant',
    edition: '15th edition',
    org: 'PhMuseum, Bologna',
    deadline: null,
    deadlineNote: 'Expected to close around February 2027. The 2026 edition closed 19 February.',
    fee: 'Around €25–30, tiered by entry date',
    eligibility:
      'Open worldwide to ongoing and unpublished projects, all genders. €10,000 in cash prizes.',
    link: 'https://phmuseum.com/grants',
    why: 'Appetite for long-form documentary and no eligibility restriction. Modest money, but the shortlist gets real circulation in Europe. Note that PhMuseum\'s separate Women Photographers Grant is out of scope for you and has been removed from this list.',
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
    name: 'LensCulture Photobook Prize',
    edition: '2027 edition',
    org: 'LensCulture and Nazraeli Press',
    deadline: null,
    deadlineNote:
      'The inaugural 2026 edition closed 12 August 2026. Watch for the 2027 call.',
    fee: 'Verify on the call page',
    eligibility:
      'An unpublished project. No dummy required: 20–30 images, a project statement and a short biography. The winning project is designed, printed and distributed by Nazraeli Press.',
    link: 'https://www.lensculture.com/photo-competitions/photobook',
    why: 'The entry requirement is unusually light — no dummy, just a sequence and a statement — which makes it the cheapest test of whether the edit reads to strangers. Prize is publication, so the conflict note applies.',
    confirmed: true,
  },
  {
    tier: 'soon',
    name: 'FotoEvidence Book Award',
    edition: '2027 cycle',
    org: 'FotoEvidence, Montpellier',
    deadline: null,
    deadlineNote: 'Cycles have typically opened in the winter. Confirm on the award page.',
    fee: 'Verify on the call page',
    eligibility:
      'Documentary photographers worldwide. The Book Award recognises work addressing a violation of human rights, a significant injustice or an assault on human dignity; the winner is published by FotoEvidence.',
    link: 'https://fotoevidence.com/book-award',
    why: 'Listed for completeness and ranked low honestly: the remit is human-rights violation and injustice, and a project about American belief is not that unless the work turns on coercion or harm within these communities. If it does, this rises sharply. Their companion W Award is restricted to women photographers and is therefore out of scope.',
    confirmed: false,
  },
  {
    tier: 'soon',
    name: 'The Aftermath Project',
    edition: '2027 cycle',
    org: 'The Aftermath Project',
    deadline: null,
    deadlineNote:
      'The 2026 cycle had not been confirmed at the time of writing. Their newsletter is the reliable announcement route.',
    fee: 'Verify on the call page',
    eligibility:
      'International. One grant of $25,000 with four finalist grants of $5,000, for work on the aftermath of conflict. A special strand, 1492/1619 American Aftermaths, has addressed American historical reckoning.',
    link: 'https://theaftermathproject.org/',
    why: 'Ranked low on the core remit — the foundation funds post-conflict recovery, and American New Age culture is not a war\'s aftermath. The exception is the 1492/1619 American Aftermaths strand, which is explicitly about the long consequences of American history; if that strand runs again and the work engages settler religion, revivalism or dispossession, the fit changes completely. Worth watching for that reason alone.',
    confirmed: false,
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
  title: 'Two things to settle before entering anything',
  body:
    'First, the publisher clause. Several dummy awards pay out in a publishing contract — Chose Commune at Athens, MAS at Cologne, Breadfield at Landskrona, Nazraeli at LensCulture. With a 2027 Loose Joints book contracted, those may be unenterable or need the publisher\'s sign-off depending on your option and exclusivity terms. Read that clause once and most of this list resolves itself. The awards that carry cleanly alongside a signed publisher are the ones giving unrestricted or production money: W. Eugene Smith, the Guggenheim, Alicia Patterson, CatchLight, Hasselblad, the Images Vevey co-publishing tier, and the LUMA Rencontres production budget. Second, the staging question. Competitions rooted in photojournalism — World Press Photo above all — forbid directed or constructed pictures and will ask for camera originals. A project about the line between staged and real needs you to know which side each individual frame sits on before you submit it anywhere, because the answer decides which of these doors is open. Checked and ruled out this issue: the Ian Parry Photojournalism Grant, open only to photographers aged 24 or under or in full-time study; the FotoEvidence W Award and the PhMuseum Women Photographers Grant, both restricted by gender. They are named here so they do not get suggested back.',
};

/* ------------------------------------------------------------------ *
 * PART 2 — CHAMPIONS
 * ------------------------------------------------------------------ */

export const championsIntro =
  'People who could credibly carry this book at release. A standing list: everyone still relevant is repeated every issue, because these are relationships to build slowly rather than leads to action once. New names each issue are badged as such. Contact routes are public and professional — institutional pages, departmental listings, public bylines.';

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
    name: 'T. M. Luhrmann',
    role: 'Professor of Anthropology',
    institution: 'Stanford University',
    why: 'New this issue, and close to the centre of the project. When God Talks Back (Knopf, 2012) is an ethnography of American evangelicals learning to hear God speak — her argument is that belief is not a proposition people accept but a skill they practise until the invisible becomes real to the senses. That is the same problem a photograph of a believer poses: whether what the camera records is performance, training or experience, and whether the distinction survives contact with the person. She writes for general readers and is widely reviewed, which makes her unusually useful at release.',
    contact: 'Department of Anthropology, stanford.edu',
    changed: null,
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
    name: 'Kathryn Lofton',
    role: 'Professor of Religious Studies, American Studies and History',
    institution: 'Yale University',
    why: 'New this issue. Oprah: The Gospel of an Icon (2011) and Consuming Religion (2017) argue that American spirituality is inseparable from American consumer culture — that the retreat, the crystal, the self-help paperback and the wellness brand are religious objects, not degraded versions of them. For a project photographing New Age culture, that is the argument that keeps the pictures from reading as satire. She is also a fluent public writer with reach well beyond religious studies.',
    contact: 'Department of Religious Studies, yale.edu',
  },
  {
    group: 'Scholars — American religion, visual & material culture',
    name: 'Jeffrey J. Kripal',
    role: 'Professor of Religion',
    institution: 'Rice University',
    why: 'New this issue. Authors of the Impossible and Mutants and Mystics take the American paranormal seriously as a subject — visionaries, contactees, psychical research — without either debunking or endorsing, which is the same tightrope this book walks. He runs one of the few academic programmes willing to host that conversation openly, and he is unusually willing to write for non-academic outlets. Useful precisely where the material gets least respectable.',
    contact: 'Department of Religion, rice.edu',
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
    name: 'Emma Bowkett',
    role: 'Director of Photography, FT Weekend Magazine',
    institution: 'Financial Times, London',
    why: 'New this issue, and the most useful commissioning editor on the list. FT Weekend runs long documentary photo essays at length and in a register that treats belief and subculture seriously rather than as curiosity. She also sits on photobook and grant juries across Europe — including the awards in Part 1 — so she is simultaneously a route to publication, a potential judge and a champion. For a Loose Joints title with European distribution, a magazine extract timed to release is one of the highest-value things to line up.',
    contact: 'FT Weekend Magazine, ft.com',
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
