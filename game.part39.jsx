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

/* ---------- SLOTS ----------
   An enclosure is a grid of BOX_SIZE places, and an animal occupies one of
   them. Before this the grid simply drew the array in order, which looks the
   same until you try to move something: there was no destination to move it
   to, only a position in a list that redrew itself. */

const slotOf = (a) => (typeof a.slot === "number" ? a.slot : 0);
const inBoxAt = (box, b, s) => (box || []).find((a) => boxOf(a) === b && slotOf(a) === s);

// The first free place in an enclosure, or -1 when it is full.
const freeSlot = (box, b) => {
  const taken = new Set((box || []).filter((a) => boxOf(a) === b).map(slotOf));
  for (let i = 0; i < BOX_SIZE; i++) if (!taken.has(i)) return i;
  return -1;
};

// Where a newly arriving animal goes: its habitat enclosure if there is room,
// otherwise the first enclosure with any.
const placeSlotFor = (sp, box) => {
  const b = placeFor(sp, box);
  const s = freeSlot(box, b);
  if (s >= 0) return { box: b, slot: s };
  for (let i = 0; i < boxCount(box) + 1; i++) {
    const f = freeSlot(box, i);
    if (f >= 0) return { box: i, slot: f };
  }
  return { box: b, slot: 0 };
};

/* Move one animal to a place, swapping with whatever is already there.

   Swap rather than refuse: the alternative is telling someone a place is
   occupied and making them empty it first, which is the behaviour the real
   games deliberately avoided. */
const moveToSlot = (box, uid, destBox, destSlot) => {
  const moving = (box || []).find((a) => a.uid === uid);
  if (!moving) return box;
  const fromBox = boxOf(moving), fromSlot = slotOf(moving);
  if (fromBox === destBox && fromSlot === destSlot) return box;
  const sitting = inBoxAt(box, destBox, destSlot);
  return box.map((a) => {
    if (a.uid === uid) return { ...a, box: destBox, slot: destSlot };
    if (sitting && a.uid === sitting.uid) return { ...a, box: fromBox, slot: fromSlot };
    return a;
  });
};

// Re-slot everything after a habitat sort, so the grid is packed rather than
// keeping whatever positions the animals held in their old enclosures.
const packSlots = (box) => {
  const next = {};
  return (box || []).map((a) => {
    const b = boxOf(a);
    const s = next[b] || 0;
    next[b] = s + 1;
    return { ...a, slot: s };
  });
};
