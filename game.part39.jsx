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

// There is one enclosure per type, so the names mean something: an animal's
// habitat is decided by what it actually is, not by the order you caught it in.
// Overflow past the nine goes to numbered annexes.
const BOX_TYPES = ["Predator", "Aerial", "Aquatic", "Burrow", "Venom", "Armor", "Swift", "Wild", "Ember"];
const BOX_NAMES = ["Hunters' Ridge", "The Aviary", "The Waters", "The Warren", "The Vivarium",
                   "The Bulwark", "Running Grounds", "The Wildwood", "The Ashlands"];

const boxNameAt = (i) => (i < BOX_NAMES.length ? BOX_NAMES[i] : `Annex ${i - BOX_NAMES.length + 1}`);

// the enclosure an animal belongs in by its primary type; Wild takes anything
// that does not match, and a full enclosure spills into the next with room
const homeBoxFor = (sp) => {
  const t = (DEX[sp] && DEX[sp].t && DEX[sp].t[0]) || "Wild";
  const i = BOX_TYPES.indexOf(t);
  return i >= 0 ? i : BOX_TYPES.indexOf("Wild");
};
const placeFor = (sp, box) => {
  const want = homeBoxFor(sp);
  return inBox(box, want).length < BOX_SIZE ? want : firstOpenBox(box);
};

// reassign everything to its habitat, spilling into the next enclosure with
// room when one fills. Used by the Sort button.
const sortByHabitat = (box) => {
  const counts = {};
  return (box || []).map((a) => {
    let want = homeBoxFor(a.sp);
    while ((counts[want] || 0) >= BOX_SIZE) want++;
    counts[want] = (counts[want] || 0) + 1;
    return { ...a, box: want };
  });
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
  return Math.max(BOX_NAMES.length, hi + 2);
};

// first enclosure with room, so a caught animal never lands somewhere full
const firstOpenBox = (box) => {
  for (let i = 0; i < 256; i++) if (inBox(box, i).length < BOX_SIZE) return i;
  return 0;
};

console.log("[part39] sanctuary:", BOX_SIZE, "per enclosure |", BOX_NAMES.length, "habitat enclosures, one per type");
