// ---------- Part 45: GRASS THAT IS DRAWN, NOT TYPED ----------
// Tall grass was the character "ᵛᵛ" printed in the middle of a coloured square.
// Short grass was a square with nothing in it. That is most of every screen, so
// it is the single biggest thing separating this from a drawn world.
//
// The rule I got wrong last time: do not decorate the cell, replace what is
// inside it. These tiles are CSS background images, so they fill the cell
// edge to edge with no margin and no centring. Adjacent grass tiles run
// together into one continuous field exactly the way they should, and there is
// nothing to outline where one cell ends and the next begins.

// A handful of variants, chosen by position, so a meadow does not read as one
// stamp repeated three hundred times. Kept to four per type: enough to break
// the pattern, few enough that the browser only ever decodes four images.
const GRASS_VARIANTS = 4;

// Gradient ids have to be unique per colour, or two different grass palettes on
// one page would share a definition and one would render with the other's bed.
const hashStr = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return h;
};

const grassSvg = (base, blade, tall, v) => {
  // Blade positions per variant. Some run off the tile edge on purpose - a
  // blade clipped by the cell boundary is what stops the eye finding the grid.
  const sets = [
    [[2, 16, 1], [5, 16, -1], [8, 16, 1], [11, 16, 0], [14, 16, -1], [0, 16, 1]],
    [[1, 16, 0], [4, 16, 1], [7, 16, -1], [10, 16, 1], [13, 16, 0], [15, 16, -1]],
    [[3, 16, -1], [6, 16, 1], [9, 16, 0], [12, 16, -1], [15, 16, 1], [0, 16, 0]],
    [[0, 16, 1], [3, 16, 0], [6, 16, -1], [9, 16, 1], [12, 16, 0], [15, 16, -1]],
  ];
  const shade = sh(base, -0.16);

  if (tall) {
    // Tall grass has to be unmistakable - it is where encounters happen, so it
    // is a gameplay signal before it is decoration. Dense clumps rising most of
    // the cell height, a darker bed beneath, and a lighter tip on each blade.
    const tip = sh(base, 0.3);
    const blades = sets[v % sets.length].map(([x, , lean], i) => {
      const h = 10 + (i % 3) * 2;                 // 10-14 of 16, so it reads tall
      const tx = x + lean * 2.6;
      return `<path d="M${x} 16 Q${x + lean * 0.8} ${16 - h * 0.55} ${tx} ${16 - h}"` +
             ` stroke="${blade}" stroke-width="2" fill="none" stroke-linecap="round"/>` +
             `<path d="M${x + lean * 0.4} ${16 - h * 0.5} Q${x + lean * 1.4} ${16 - h * 0.8} ${tx} ${16 - h}"` +
             ` stroke="${tip}" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".75"/>`;
    }).join("");
    // FLAT base, deliberately. Any vertical gradient inside a cell means the
    // bottom of one tile is a different value from the top of the tile below
    // it, so every horizontal cell boundary becomes a visible seam - which is
    // the grid reappearing, in gentler form, for the third time. The blades
    // carry all the depth instead: a dark stroke with a lighter tip drawn over
    // it, which reads as grass catching the light without touching the
    // background at all.
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">` +
           `<rect width="16" height="16" fill="${base}"/>${blades}</svg>`;
  }

  // Short grass is a texture, not a feature: a faint mottle and a few small
  // tufts, enough that a field is not one flat fill but never enough to
  // compete with the tall grass beside it.
  const tufts = sets[v % sets.length].slice(0, 4).map(([x, , lean]) =>
    `<path d="M${x} 14 q${lean * 0.8} -2 ${lean * 1.6} -3.2"` +
    ` stroke="${blade}" stroke-width="1.1" fill="none" stroke-linecap="round" opacity=".8"/>`).join("");
  const gid3 = "gs" + Math.abs(hashStr(base + "s")) % 100000;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">` +
         `<defs><radialGradient id="${gid3}" cx="0.35" cy="0.62" r="0.75">` +
         `<stop offset="0" stop-color="${shade}" stop-opacity=".2"/>` +
         `<stop offset="1" stop-color="${shade}" stop-opacity="0"/></radialGradient></defs>` +
         `<rect width="16" height="16" fill="${base}"/>` +
         `<rect width="16" height="16" fill="url(%23${gid3})"/>` +
         `${tufts}</svg>`;
};

// Cache by colour and variant, so the same four images are reused everywhere
// rather than rebuilt for all 280 tiles on a map.
const GRASS_CACHE = {};
const grassBg = (base, blade, tall, v) => {
  const key = `${base}|${blade}|${tall ? 1 : 0}|${v}`;
  if (!GRASS_CACHE[key]) {
    GRASS_CACHE[key] = `url("data:image/svg+xml,${encodeURIComponent(grassSvg(base, blade, tall, v))}")`;
  }
  return GRASS_CACHE[key];
};

// Deterministic variant per tile, so grass does not shimmer when the screen
// redraws and a given patch always looks the same.
const grassVariant = (x, y) => {
  let h = (x * 73856093) ^ (y * 19349663);
  h = (h ^ (h >>> 13)) >>> 0;
  return h % GRASS_VARIANTS;
};

// The public helper: hand it a tile character and its position, get back a
// background, or null if this tile is not grass and should render as before.
const GRASS_TILE = (ch, x, y, bg) => {
  if (ch !== "G" && ch !== "g") return null;
  const tall = ch === "G";
  const blade = sh(bg, tall ? -0.46 : -0.22);
  return grassBg(bg, blade, tall, grassVariant(x, y));
};

console.log("[part45] grass drawn as tiles |", GRASS_VARIANTS, "variants");
