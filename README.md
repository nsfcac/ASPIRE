# ASPIRE — NSF REU Site website

Static website for the NSF REU Site proposal **ASPIRE: Advancing Scientific Discovery through
High-Performance Computing and AI Research** (Texas Tech University). The site is a navigational
companion to the proposal: it restates each proposal section as a browsable page and adds eight
figures that make the program structure legible at a glance.

Built with [Astro](https://astro.build), no runtime dependencies, deployed to GitHub Pages.

## Pages

| Page | Proposal section | Contents |
|---|---|---|
| `/` | (a) Overview | Objectives, intellectual focus, thrusts, organizational structure, institutional commitment |
| `/projects` | (b) Nature of Student Activities | All nine projects, grouped into three thrusts, plus a project index |
| `/projects/<slug>` | (b) | Per-project objective, significance, benefits to students, phase-by-phase research plan |
| `/program` | (a), (e) | Ten-week schedule, the full Table 1 timetable, student and mentor professional development, expectations of behavior |
| `/environment` | (c) | REPACSS, host institution, laboratories, dissemination venues, post-program mentoring |
| `/mentors` | (c) | The five research mentors, expertise, and mentoring records |
| `/recruitment` | (d) | Eligibility, application materials, selection rubric, advertising plan |
| `/contact` | — | The planned ASPIRE@ttu.edu shared mailbox and how to apply through ETAP |
| `/cohort` | — | The 2027, 2028, and 2029 cohorts; placeholder slots until participants are named (`src/data/cohorts.ts`) |
| `/evaluation` | (f) | Formative/summative evaluation, instruments, assessment schedule, CRA CERP — **hidden**: still built and reachable by URL, but left out of the nav (`hidden: true` in `src/data/site.ts`) |
| `/impacts` | (g) | Broader impacts of the REU Site |

## Figures

All figures are hand-authored inline SVG (`src/components/figures/`) — no chart library, no external
assets, theme-aware, and driven by the same data files that generate the page text, so a change to
the data updates both.

- **Program framework** — national drivers → the AI ∩ HPC core → three thrusts → outcomes (home)
- **Ten-week program at a glance** — research phases + cohort activity tracks with Table 1 codes (program)
- **Research phases across the ten weeks** — all nine projects as phase bars (projects)
- **How REU students reach and use REPACSS** — access path, partitions, monitoring plane (environment)
- **Mentor–project map** — bipartite mentor ↔ project links (mentors)
- **Recruitment and selection funnel** — six-stage funnel with per-stage detail (recruitment)
- **Weight of each review criterion** — rubric weights (recruitment)
- **Evaluation logic model and assessment schedule** — inputs → outcomes, plus the survey timeline (evaluation)

Data colors come from a colorblind-safe categorical palette (three all-pairs-validated hues) plus a
single-hue ordinal ramp for phase progression; every colored mark is also directly labeled.

Two figures have print-only variants, rendered by unlisted pages under `/print/` and exported in
place of (or alongside) the web ones:

`src/components/figures/EvaluationFigurePrint.astro`, rendered by `/print/evaluation`, is the
evaluation figure typed for paper. At `\linewidth` in a 6.5in text block a 960px canvas scales by
0.65, so printed pt = px × 0.4875 and the website figure's 11.5px body text lands at ~5.6pt. The
print variant keeps the same 960×480 canvas but moves the instruments block into the caption,
shortens the card labels to one line each, and spends the recovered height on type: 16px body
(~7.8pt), 17.5px headings (~8.5pt). Its layout is computed from the content — card height, schedule
rows and legend position all derive from wrapped line counts — so editing an item cannot overflow a
card. `evaluation-logic-model.pdf` is exported from this variant; the website keeps the denser
original, so a wording change has to be made in both files.

A print-only variant of the framework figure lives in
`src/components/figures/FrameworkFigureCompact.astro`, rendered by the unlisted page
`/print/framework`. It carries the same content in a canvas ~30% shorter (960×520 vs 960×736) by
flattening the Venn circles into ellipses. The website keeps the original.

### Interaction

Figures, tables and cards carry a thin enhancement layer, all of it optional:

- **Reveal on scroll** — figures, tables and cards rise into place as they enter the viewport;
  cards in the same row arrive a beat apart, offset by their position in the grid.
- **Card hover** — every card and stat tile strengthens its border and picks up a shadow; the cards
  that are links (the project cards) also lift, and a cohort portrait zooms slightly inside its frame.
- **Highlight on hover** — hovering one part of a figure dims the rest: a thrust card, a project
  row, a funnel stage, a week column in the ten-week grid, a logic-model stage, a REPACSS box, a
  mentor or a project in the mentor–project map.
- **Links inside figures** — the project lines in the framework figure, the rows of the phase map,
  and both ends of the mentor–project map open the page they name.
- **Tooltips** — the timetable codes (A5.1 …), phase bars, and rubric rows spell themselves out.
- **Scroll shading** — a wide table or figure shades the edge that still has content off-screen.
- **Row hover** on every table.

Two rules keep this from leaking into the proposal or excluding readers. Nothing a figure looks
like at rest may live in CSS, because the export below drops the stylesheet; and everything is
either gated on `html.js` or switched off under `prefers-reduced-motion: reduce`, so a reader
without JavaScript, or one who asks for less motion, still gets the full static page.

One consequence worth knowing when editing a figure: `.card`, `.stat` and `.person` are site
component classes that the reveal keys off, so a figure's SVG must not reuse those names for its
own parts.

### Exporting figures for the proposal

```bash
npm run export:figures    # writes figures/<slug>.pdf and .svg (gitignored)
```

Each figure is exported on its own, with no caption and no page furniture. The PDF page is the
figure's bounding box, so `\includegraphics` needs no cropping — scale with `width=\linewidth`.
Text stays live text (searchable, and embedded as CID TrueType subsets rather than the Type 3
fonts NSF's PDF checks flag), which is why the export substitutes Helvetica Neue for the site's
`ui-sans-serif` stack. Requires Google Chrome; rerun after changing a figure or its data.

## Content source

Page text is stored as structured data, not scattered through templates:

- `src/data/projects.ts` — the nine projects, their phases, skills, deliverables, and the three thrusts
- `src/data/team.ts` — mentors, the Table 1 timetable, and the selection rubric
- `src/data/site.ts` — site title, navigation, and framing notes

Edit these files to update both the prose and the figures.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/ASPIRE/
npm run build    # static output in dist/
npm run preview
```

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
Enable it once under **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site is configured for `https://nsfcac.github.io/ASPIRE/`. To publish elsewhere, set the
environment variables at build time:

```bash
SITE=https://aspire.example.edu BASE_PATH=/ npm run build
```

## Notes

- Recruitment pages describe the intended application process; ETAP links and program dates will
  be added once the award and dates are known.
