// ---------- Part 39: THE SANCTUARY ----------
// Storage was a flat list of chips tucked under the Team menu. This turns it
// into a proper facility: numbered enclosures of 30, a grid you can browse, a
// detail panel, deposits, transfers between enclosures, and release.
//
// The save format is unchanged in shape — S.box is still one flat array — so
// every existing save keeps working. Each stored animal simply gains an
// optional .box index saying which enclosure it lives in. Anything saved before
// this update has no .box, reads as 0, and lands in the first enclosure.

const BOX_SIZE = 30;

// Enclosures are named for habitats rather than numbered, which suits a
// sanctuary better than "BOX 1". They cycle if a player ever fills all twelve.
const BOX_NAMES = ["Meadow", "Woodland", "Wetland", "Highland", "Coast", "Drylands",
                   "Tundra", "Canopy", "Reef", "Cavern", "Delta", "Reserve"];

const boxNameAt = (i) => {
  const base = BOX_NAMES[i % BOX_NAMES.length];
  const lap = Math.floor(i / BOX_NAMES.length);
  return lap ? `${base} ${lap + 1}` : base;
};

// which enclosure an animal is in; older saves have no .box at all
const boxOf = (a) => (a && a.box) || 0;

// everything living in one enclosure, in stored order
const inBox = (box, i) => (box || []).filter((a) => boxOf(a) === i);

// how many enclosures to show: always at least 8, and always one spare beyond
// the furthest one in use, so there is somewhere to move an animal to
const boxCount = (box) => {
  let hi = 0;
  (box || []).forEach((a) => { if (boxOf(a) > hi) hi = boxOf(a); });
  return Math.max(8, hi + 2);
};

// first enclosure with room, so a caught animal never lands somewhere full
const firstOpenBox = (box) => {
  for (let i = 0; i < 256; i++) if (inBox(box, i).length < BOX_SIZE) return i;
  return 0;
};

console.log("[part39] sanctuary:", BOX_SIZE, "per enclosure |", BOX_NAMES.length, "named enclosures");
