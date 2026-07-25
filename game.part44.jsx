// ---------- Part 44: GROUND THAT LOOKS LIKE GROUND ----------
// Every tile was a flat square of colour with an emoji in the middle, which is
// why the world read as a spreadsheet while the animals standing on it were
// shaded drawings. Two changes, both pure rendering — no map data moves.
//
// 1. TEXTURE. Each terrain gets a gradient and a faint grain instead of one
//    flat fill, so a field of grass stops being one enormous rectangle of the
//    same pixel.
//
// 2. EDGES. This is the one that matters. A tile looks at its four neighbours
//    and rounds the corners where it meets something different. A pond stops
//    being a rectangle of blue squares and becomes a pond; a wood gets a
//    ragged outline instead of a brick wall of trees. It is the same trick
//    every tile-based game uses, and it is what stops a grid looking like a
//    grid.

// Which tiles count as the same material. Anything walkable and open is
// "ground", so a path meeting a floor does not draw a seam between them.
const TILE_FAMILY = (ch) => {
  if (ch === "W") return "water";
  if (ch === "^") return "rock";
  if (ch === "T") return "wood";
  if (ch === "G" || ch === "g") return "grass";
  if (ch === "H" || ch === "P" || ch === "C" || ch === "Y" || ch === "M") return "built";
  if (ch === "D" || ch === "L" || ch === "t") return "stone";
  return "ground";
};

// Per-family surface treatment. Kept subtle on purpose: the sprites are the
// thing you should be looking at, and a busy floor fights them.
const TILE_SURFACE = (fam, bg) => {
  switch (fam) {
    case "water":
      return {
        backgroundImage:
          `linear-gradient(180deg, ${sh(bg, 0.16)} 0%, ${bg} 45%, ${sh(bg, -0.14)} 100%),` +
          `repeating-linear-gradient(115deg, rgba(255,255,255,.07) 0 3px, rgba(255,255,255,0) 3px 9px)`,
      };
    case "rock":
      return {
        backgroundImage:
          `linear-gradient(160deg, ${sh(bg, 0.2)} 0%, ${bg} 52%, ${sh(bg, -0.22)} 100%),` +
          `repeating-linear-gradient(58deg, rgba(0,0,0,.07) 0 2px, rgba(0,0,0,0) 2px 7px)`,
      };
    case "wood":
      return {
        backgroundImage:
          `radial-gradient(circle at 38% 30%, ${sh(bg, 0.18)} 0%, ${bg} 58%, ${sh(bg, -0.2)} 100%)`,
      };
    case "grass":
      return {
        backgroundImage:
          `linear-gradient(180deg, ${sh(bg, 0.1)} 0%, ${bg} 60%, ${sh(bg, -0.12)} 100%),` +
          `repeating-linear-gradient(88deg, rgba(0,0,0,.05) 0 1px, rgba(0,0,0,0) 1px 5px)`,
      };
    case "built":
      return {
        backgroundImage:
          `linear-gradient(180deg, ${sh(bg, 0.14)} 0%, ${bg} 55%, ${sh(bg, -0.16)} 100%),` +
          `repeating-linear-gradient(0deg, rgba(0,0,0,.06) 0 5px, rgba(0,0,0,0) 5px 10px)`,
      };
    case "stone":
      return {
        backgroundImage:
          `linear-gradient(150deg, ${sh(bg, 0.16)} 0%, ${bg} 60%, ${sh(bg, -0.18)} 100%)`,
      };
    default:
      return {
        backgroundImage:
          `linear-gradient(180deg, ${sh(bg, 0.08)} 0%, ${bg} 62%, ${sh(bg, -0.1)} 100%),` +
          `repeating-linear-gradient(135deg, rgba(0,0,0,.035) 0 2px, rgba(0,0,0,0) 2px 8px)`,
      };
  }
};

// Round a corner only where BOTH tiles beside it are a different material. That
// is the whole autotiling rule: a lone tree becomes a blob, a solid wood keeps
// square interiors and only its outline curves.
const TILE_CORNERS = (rows, x, y, fam, r) => {
  // Off-map counts as the same material, so the outer border of a map keeps
  // square corners instead of having its edge carved away.
  const at = (cx, cy) => {
    const row = rows[cy];
    if (!row || cx < 0 || cx >= row.length) return fam;
    return TILE_FAMILY(row[cx]);
  };
  const up = at(x, y - 1), dn = at(x, y + 1), lf = at(x - 1, y), rt = at(x + 1, y);
  const d = (a, b) => (a !== fam && b !== fam);
  return [
    d(up, lf) ? r : 0,   // top-left
    d(up, rt) ? r : 0,   // top-right
    d(dn, rt) ? r : 0,   // bottom-right
    d(dn, lf) ? r : 0,   // bottom-left
  ].map((v) => `${v}px`).join(" ");
};

// A soft shadow along the sides where this tile meets something else, so
// terrain reads as having a little depth rather than being painted on.
const TILE_EDGE_SHADOW = (rows, x, y, fam) => {
  const at = (cx, cy) => {
    const row = rows[cy];
    if (!row || cx < 0 || cx >= row.length) return null;
    return TILE_FAMILY(row[cx]);
  };
  const parts = [];
  if (at(x, y - 1) !== fam && at(x, y - 1) !== null) parts.push("inset 0 2px 3px -1px rgba(0,0,0,.22)");
  if (at(x, y + 1) !== fam && at(x, y + 1) !== null) parts.push("inset 0 -2px 3px -1px rgba(0,0,0,.16)");
  if (at(x - 1, y) !== fam && at(x - 1, y) !== null) parts.push("inset 2px 0 3px -1px rgba(0,0,0,.14)");
  if (at(x + 1, y) !== fam && at(x + 1, y) !== null) parts.push("inset -2px 0 3px -1px rgba(0,0,0,.14)");
  return parts.join(", ");
};

console.log("[part44] textured tiles + edge rounding ready |", 
  ["ground","grass","water","rock","wood","built","stone"].length, "surfaces");
