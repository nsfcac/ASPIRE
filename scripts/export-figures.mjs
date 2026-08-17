/**
 * Export each site figure as a standalone SVG and a cropped, vector PDF for the
 * proposal — the figure only, with no caption and no page furniture.
 *
 * Usage: npm run export:figures  (writes to figures/)
 *
 * The figures are inline SVG inside the built pages, so this reads them back out
 * of dist/, resolves the CSS custom properties they reference to literal values
 * (light palette), and prints each one through headless Chrome at its exact
 * viewBox size, so the PDF page is the figure's bounding box.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'figures');
const tmpDir = resolve(root, 'node_modules/.cache/figure-export');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

/** page: path under dist/; cls: the class on the figure's <svg> root. */
const FIGURES = [
  { slug: 'program-framework', page: 'index.html', cls: 'framework-fig' },
  { slug: 'ten-week-program', page: 'program/index.html', cls: 'timeline-fig' },
  { slug: 'project-phases', page: 'projects/index.html', cls: 'phasemap-fig' },
  { slug: 'repacss-access', page: 'environment/index.html', cls: 'repacss-fig' },
  { slug: 'mentor-project-map', page: 'mentors/index.html', cls: 'mentormap-fig' },
  { slug: 'recruitment-funnel', page: 'recruitment/index.html', cls: 'funnel-fig' },
  { slug: 'rubric-weights', page: 'recruitment/index.html', cls: 'rubric-fig' },
  { slug: 'evaluation-logic-model', page: 'evaluation/index.html', cls: 'eval-fig' },
];

/**
 * The site's font stacks start with ui-sans-serif / ui-monospace, which on macOS
 * resolve to the SF variable fonts. Chrome cannot embed those as TrueType and
 * falls back to Type 3 glyph procedures, which NSF's PDF checks flag. Concrete
 * faces embed as CID TrueType subsets and look near-identical in print.
 */
const EXPORT_FONTS = {
  '--font-sans': "'Helvetica Neue', Helvetica, Arial, sans-serif",
  '--font-mono': 'Menlo, Courier, monospace',
  '--font-serif': "Georgia, 'Times New Roman', serif",
};

/** Light-palette tokens, read from the :root block so the two never drift. */
function readTokens() {
  const css = readFileSync(resolve(root, 'src/styles/global.css'), 'utf8');
  const block = css.slice(css.indexOf(':root {'), css.indexOf('\n}'));
  const tokens = new Map();
  for (const [, name, value] of block.matchAll(/(--[\w-]+):\s*([^;]+);/g)) {
    tokens.set(name, value.trim());
  }
  for (const [name, value] of Object.entries(EXPORT_FONTS)) tokens.set(name, value);
  return tokens;
}

/** Replace every var(--x) with its literal value; tokens may nest. */
function resolveVars(svg, tokens) {
  let out = svg;
  for (let pass = 0; pass < 5 && out.includes('var(--'); pass++) {
    out = out.replace(/var\((--[\w-]+)\)/g, (whole, name) => tokens.get(name) ?? whole);
  }
  return out;
}

/** The class also appears in the page's stylesheet, so match the tag itself. */
function extractSvg(html, cls) {
  const open = new RegExp(`<svg[^>]*class="[^"]*\\b${cls}\\b[^"]*"[^>]*>`).exec(html);
  if (!open) throw new Error(`no <svg> with class ${cls}`);

  let depth = 0;
  const tag = /<svg\b|<\/svg>/g;
  tag.lastIndex = open.index;
  for (let m; (m = tag.exec(html)); ) {
    depth += m[0] === '</svg>' ? -1 : 1;
    if (depth === 0) return html.slice(open.index, m.index + '</svg>'.length);
  }
  throw new Error(`unterminated <svg> for ${cls}`);
}

const tokens = readTokens();
mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

for (const fig of FIGURES) {
  const html = readFileSync(resolve(root, 'dist', fig.page), 'utf8');

  let svg = extractSvg(html, fig.cls);
  svg = svg.replace(/\s+data-astro-cid-[\w-]+(="[^"]*")?/g, '');
  svg = resolveVars(svg, tokens);

  const [, w, h] = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).map(Number);

  // Standalone SVG: explicit size, namespace, and the base font the text
  // elements inherit from <body> on the site — without it they fall back to the
  // renderer's default serif.
  const sans = tokens.get('--font-sans').replace(/"/g, "'");
  const standalone = svg.replace(
    '<svg ',
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" font-family="${sans}" `
  );
  writeFileSync(resolve(outDir, `${fig.slug}.svg`), `${standalone}\n`);

  // Print at exactly the viewBox box, so the PDF has no margin around the art.
  const page = resolve(tmpDir, `${fig.slug}.html`);
  writeFileSync(
    page,
    `<!doctype html><meta charset="utf-8">
<style>
  @page { size: ${w / 96}in ${h / 96}in; margin: 0; }
  html, body { margin: 0; padding: 0; background: #ffffff; }
  svg { display: block; width: ${w}px; height: ${h}px; }
</style>
${standalone}
`
  );

  // Chrome writes the PDF and then sometimes fails to exit, so cap each run and
  // judge success by the artifact rather than by the exit code.
  const pdf = resolve(outDir, `${fig.slug}.pdf`);
  rmSync(pdf, { force: true });
  try {
    execFileSync(
      CHROME,
      [
        '--headless',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        '--no-pdf-header-footer',
        `--user-data-dir=${resolve(tmpDir, `profile-${fig.slug}`)}`,
        '--virtual-time-budget=4000',
        `--print-to-pdf=${pdf}`,
        `file://${page}`,
      ],
      { stdio: 'ignore', timeout: 45_000, killSignal: 'SIGKILL' }
    );
  } catch (err) {
    if (!existsSync(pdf)) throw err;
  }
  if (!statSync(pdf).size) throw new Error(`empty PDF for ${fig.slug}`);

  console.log(`${fig.slug}  ${w}x${h}px  ->  figures/${fig.slug}.pdf, .svg`);
}

rmSync(tmpDir, { recursive: true, force: true });
console.log(`\n${FIGURES.length} figures written to figures/`);
