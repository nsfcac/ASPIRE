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

1. **Program framework** — national drivers → the AI ∩ HPC core → three thrusts → outcomes (home)
2. **Ten-week program at a glance** — research phases + cohort activity tracks with Table 1 codes (program)
3. **Research phases across the ten weeks** — all nine projects as phase bars (projects)
4. **How REU students reach and use REPACSS** — access path, partitions, monitoring plane (environment)
5. **Mentor–project map** — bipartite mentor ↔ project links (mentors)
6. **Recruitment and selection pipeline** — six-stage funnel with per-stage detail (recruitment)
7. **Weight of each review criterion** — rubric weights (recruitment)
8. **Evaluation logic model and assessment schedule** — inputs → outcomes, plus the survey timeline (evaluation)

Data colors come from a colorblind-safe categorical palette (three all-pairs-validated hues) plus a
single-hue ordinal ramp for phase progression; every colored mark is also directly labeled.

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
