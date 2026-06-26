// Programmatic builders for the harder abstract-reasoning SVGs (Raven-style
// matrices and multi-attribute sequences). Building the markup from data keeps
// the geometry correct and makes the items easy to audit.

const SVG_OPEN = (w: number, h: number, label: string) =>
  `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">`;

/* ---------- shaded 2x2 cells (for XOR / AND / movement matrices) ---------- */

function quadXY(x: number, y: number, h: number, q: string): [number, number] {
  switch (q) {
    case "TL":
      return [x, y];
    case "TR":
      return [x + h, y];
    case "BL":
      return [x, y + h];
    default:
      return [x + h, y + h]; // BR
  }
}

function shadedCell(
  x: number,
  y: number,
  s: number,
  quads: readonly string[] | "Q"
): string {
  const h = s / 2;
  const border = `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.6"/>`;
  if (quads === "Q") {
    return (
      border +
      `<text x="${x + h}" y="${y + h + 8}" text-anchor="middle" font-size="24" fill="currentColor">?</text>`
    );
  }
  const shades = quads
    .map((q) => {
      const [qx, qy] = quadXY(x, y, h, q);
      return `<rect x="${qx}" y="${qy}" width="${h}" height="${h}" fill="currentColor" fill-opacity="0.85"/>`;
    })
    .join("");
  const cross =
    `<line x1="${x + h}" y1="${y}" x2="${x + h}" y2="${y + s}" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.45"/>` +
    `<line x1="${x}" y1="${y + h}" x2="${x + s}" y2="${y + h}" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.45"/>`;
  return border + shades + cross;
}

/** 3x3 matrix of shaded cells (bottom-right is "Q") plus four option tiles A–D. */
export function shadingMatrixSvg(
  grid: (readonly string[] | "Q")[][],
  options: readonly string[][]
): string {
  const S = 40,
    P = 50,
    mx = 30,
    my = 8;
  let body = "";
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      body += shadedCell(mx + c * P, my + r * P, S, grid[r][c]);
  const sepY = my + 3 * P + 2;
  body += `<line x1="5" y1="${sepY}" x2="200" y2="${sepY}" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/>`;
  const oy = sepY + 18;
  for (let i = 0; i < 4; i++) {
    const x = 5 + i * P;
    body += shadedCell(x, oy, S, options[i]);
    body += `<text x="${x + S / 2}" y="${oy + S + 14}" text-anchor="middle" font-size="13" fill="currentColor">${String.fromCharCode(
      65 + i
    )}</text>`;
  }
  const h = oy + S + 22;
  return (
    SVG_OPEN(
      205,
      h,
      "A three by three matrix of shaded squares with one cell missing, and four option tiles labelled A to D"
    ) +
    body +
    "</svg>"
  );
}

/* ---------- rotating / filling triangle sequence ---------- */

interface Tri {
  rot: number;
  filled: boolean;
}

function triangle(cx: number, cy: number, t: Tri): string {
  const pts = `${cx},${cy - 15} ${cx - 14},${cy + 11} ${cx + 14},${cy + 11}`;
  const fill = t.filled ? `fill="currentColor"` : `fill="none"`;
  return `<polygon points="${pts}" ${fill} stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" transform="rotate(${t.rot} ${cx} ${cy})"/>`;
}

/** A 4-frame sequence (last = "Q") plus four option tiles A–D. */
export function triangleSeqSvg(
  frames: (Tri | "Q")[],
  options: Tri[]
): string {
  const box = 50,
    P = 60;
  let body = "";
  for (let i = 0; i < frames.length; i++) {
    const x = 5 + i * P,
      y = 8;
    body += `<rect x="${x}" y="${y}" width="${box}" height="${box}" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5"/>`;
    const f = frames[i];
    if (f === "Q")
      body += `<text x="${x + box / 2}" y="${y + box / 2 + 9}" text-anchor="middle" font-size="26" fill="currentColor">?</text>`;
    else body += triangle(x + box / 2, y + box / 2, f);
  }
  const oy = 92;
  for (let i = 0; i < options.length; i++) {
    const x = 5 + i * P,
      y = oy;
    body += `<rect x="${x}" y="${y}" width="${box}" height="${box}" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5"/>`;
    body += triangle(x + box / 2, y + box / 2, options[i]);
    body += `<text x="${x + box / 2}" y="${y + box + 14}" text-anchor="middle" font-size="13" fill="currentColor">${String.fromCharCode(
      65 + i
    )}</text>`;
  }
  const w = 5 + Math.max(frames.length, options.length) * P;
  return (
    SVG_OPEN(w, 170, "A sequence of triangles that rotate and change fill, then four option tiles A to D") +
    body +
    "</svg>"
  );
}

/* ---------- polygons with dots (odd-one-out by sides vs dots) ---------- */

function polygonPoints(cx: number, cy: number, r: number, sides: number): string {
  const pts: string[] = [];
  for (let i = 0; i < sides; i++) {
    const a = (-90 + (360 / sides) * i) * (Math.PI / 180);
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

/** Four numbered figures, each a polygon above a row of dots. */
export function polygonDotsSvg(
  figures: { sides: number; dots: number }[]
): string {
  const box = 58,
    P = 65;
  let body = "";
  for (let i = 0; i < figures.length; i++) {
    const x = 5 + i * P,
      y = 6,
      cx = x + box / 2;
    body += `<rect x="${x}" y="${y}" width="${box}" height="${box}" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5"/>`;
    body += `<polygon points="${polygonPoints(cx, y + 24, 15, figures[i].sides)}" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>`;
    const n = figures[i].dots;
    const start = cx - ((n - 1) * 7) / 2;
    for (let d = 0; d < n; d++)
      body += `<circle cx="${(start + d * 7).toFixed(1)}" cy="${y + 50}" r="2.5" fill="currentColor"/>`;
    body += `<text x="${cx}" y="${y + box + 16}" text-anchor="middle" font-size="13" fill="currentColor">${i + 1}</text>`;
  }
  const w = 5 + figures.length * P;
  return (
    SVG_OPEN(w, 90, "Four numbered figures, each a polygon with a number of dots") +
    body +
    "</svg>"
  );
}

/* ---------- composite-figure sequences (multiple simultaneous rules) ---------- */

export interface Fig {
  /** Outer polygon sides; >= 20 renders a circle. */
  sides: number;
  /** Whole-figure rotation in degrees. */
  rot?: number;
  /** Shaded outer shape. */
  fill?: boolean;
  /** Internal pointer angle (deg clockwise from top); omit for no pointer. */
  hand?: number;
  /** Number of dots in a ring around the centre. */
  dots?: number;
}

function rotatedShape(cx: number, cy: number, r: number, f: Fig): string {
  const fillAttr = f.fill
    ? `fill="currentColor" fill-opacity="0.22"`
    : `fill="none"`;
  if (f.sides >= 20)
    return `<circle cx="${cx}" cy="${cy}" r="${r}" ${fillAttr} stroke="currentColor" stroke-width="2"/>`;
  const rot = f.rot ?? 0;
  const pts: string[] = [];
  for (let i = 0; i < f.sides; i++) {
    const a = ((-90 + rot + (360 / f.sides) * i) * Math.PI) / 180;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(" ")}" ${fillAttr} stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>`;
}

function figure(cx: number, cy: number, r: number, f: Fig): string {
  let s = rotatedShape(cx, cy, r, f);
  if (f.hand !== undefined) {
    const a = ((-90 + f.hand) * Math.PI) / 180;
    s +=
      `<line x1="${cx}" y1="${cy}" x2="${(cx + r * 0.78 * Math.cos(a)).toFixed(1)}" y2="${(cy + r * 0.78 * Math.sin(a)).toFixed(1)}" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>` +
      `<circle cx="${cx}" cy="${cy}" r="2" fill="currentColor"/>`;
  }
  const n = f.dots ?? 0;
  for (let i = 0; i < n; i++) {
    const a = ((-90 + (360 / n) * i) * Math.PI) / 180;
    s += `<circle cx="${(cx + r * 0.5 * Math.cos(a)).toFixed(1)}" cy="${(cy + r * 0.5 * Math.sin(a)).toFixed(1)}" r="2.4" fill="currentColor"/>`;
  }
  return s;
}

/** A 4-frame composite-figure sequence (last = "Q") plus four option tiles A–D. */
export function shapeSeqSvg(frames: (Fig | "Q")[], options: Fig[]): string {
  const box = 60,
    P = 70,
    R = 22;
  let body = "";
  for (let i = 0; i < frames.length; i++) {
    const x = 5 + i * P,
      y = 6,
      cx = x + box / 2,
      cy = y + box / 2;
    body += `<rect x="${x}" y="${y}" width="${box}" height="${box}" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5"/>`;
    const f = frames[i];
    if (f === "Q")
      body += `<text x="${cx}" y="${cy + 10}" text-anchor="middle" font-size="30" fill="currentColor">?</text>`;
    else body += figure(cx, cy, R, f);
  }
  const oy = 96;
  for (let i = 0; i < options.length; i++) {
    const x = 5 + i * P,
      y = oy,
      cx = x + box / 2,
      cy = y + box / 2;
    body += `<rect x="${x}" y="${y}" width="${box}" height="${box}" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5"/>`;
    body += figure(cx, cy, R, options[i]);
    body += `<text x="${cx}" y="${y + box + 14}" text-anchor="middle" font-size="13" fill="currentColor">${String.fromCharCode(
      65 + i
    )}</text>`;
  }
  const w = 5 + Math.max(frames.length, options.length) * P;
  return (
    SVG_OPEN(
      w,
      178,
      "A sequence of composite figures that change by several rules, then four option tiles A to D"
    ) +
    body +
    "</svg>"
  );
}
