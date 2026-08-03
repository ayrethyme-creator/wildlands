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
// The nine habitats, then the two the field guide already keeps apart. A
// fossil and a mythic are not habitats in the way the others are, but the guide
// files them separately and the sanctuary should agree with the guide - it is
// the same collection looked at from two directions.
// Every type in the chart, then the two the field guide keeps apart. Bug,
// Canopy, Night and Ice are real types with real species and had no enclosure,
// so all four fell through to the default: about four hundred animals were
// filed in the Wildwood because there was nowhere else for them to go.
const BOX_TYPES = ["Predator", "Aerial", "Aquatic", "Burrow", "Venom", "Armor", "Swift", "Wild", "Ember",
                   "Bug", "Canopy", "Night", "Ice", "Fossil", "Mythic", "Vigil"];
const BOX_NAMES = ["Hunters' Ridge", "The Aviary", "The Waters", "The Warren", "The Vivarium",
                   "The Bulwark", "Running Grounds", "The Wildwood", "The Ashlands",
                   "The Hive", "The Canopy", "The Night House", "The Cold Store",
                   "Deep Time", "The Rift", "The Vigil"];


/* ---------- WHICH ENCLOSURE ----------
   An enclosure used to be a number, with one per type and everything past the
   ninth dumped into unsorted annexes. That works until a type has more than
   thirty animals in it, which happens quickly, and then the organisation the
   names promise quietly stops being true.

   An enclosure is now a type and a page within that type: "Predator:0",
   "Predator:1", and so on. A type grows as many pages as it needs and they stay
   with their type, so the Aviary never overflows into an unlabelled annex — it
   becomes The Aviary II. */

// What the nine numeric enclosures meant before enclosures had names. Frozen:
// this is a record of an old save format, not a list that should follow the
// current one.
const LEGACY_BOX_TYPES = ["Predator", "Aerial", "Aquatic", "Burrow", "Venom", "Armor", "Swift", "Wild", "Ember"];

const boxKey = (a) => {
  if (!a) return BOX_TYPES[0] + ":0";
  const b = a.box;
  if (typeof b === "string" && b.indexOf(":") > 0) return b;
  // Numeric enclosures from before this change. Nought to eight were the nine
  // habitat enclosures; anything higher was an annex, and its animals go back
  // to the type they should have been in all along.
  //
  // Indexed against LEGACY_BOX_TYPES rather than BOX_TYPES, which has grown
  // since. Reading the live list would silently reinterpret old annex numbers
  // as whatever enclosure now sits at that index - an animal parked in Annex 1
  // would reappear in The Hive - and it would break again every time a type is
  // added. The old numbering is history and has to be read as history.
  if (typeof b === "number" && b >= 0 && b < LEGACY_BOX_TYPES.length) return LEGACY_BOX_TYPES[b] + ":0";
  return typeKeyFor(a.sp) + ":0";
};
const boxType = (k) => String(k).split(":")[0];
const boxPage = (k) => parseInt(String(k).split(":")[1], 10) || 0;
const mkBoxKey = (type, page) => type + ":" + page;

const typeKeyFor = (sp) => {
  const d = DEX[sp];
  if (!d || !d.t) return "Wild";
  // Checked by membership rather than by position. Both FD and MY happen to put
  // their marker first, but relying on that would make the sanctuary quietly
  // wrong the day one entry is written the other way round.
  if (d.t.includes("Fossil")) return "Fossil";
  if (d.t.includes("Mythic")) return "Mythic";
  // Checked after Fossil and Mythic so the sanctuary breaks a tie the same way
  // the guide does. No species is currently both, but the order should not be
  // the thing that has to stay true.
  if (d.mem) return "Vigil";
  const t = d.t[0] || "Wild";
  return BOX_TYPES.indexOf(t) >= 0 ? t : "Wild";
};

const boxNameFor = (k) => {
  const i = BOX_TYPES.indexOf(boxType(k));
  const base = i >= 0 ? BOX_NAMES[i] : boxType(k);
  const p = boxPage(k);
  return p === 0 ? base : `${base} ${ROMAN[p] || p + 1}`;
};
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

const boxOf = (a) => boxKey(a);
const inBox = (box, k) => (box || []).filter((a) => boxKey(a) === k);

/* Every enclosure that exists, in order: each type, then its pages.

   A type always shows at least one page, and always one spare page beyond its
   last occupied one, so there is somewhere to put an animal without first
   making room. That is the whole reason the annexes existed, and now the spare
   page belongs to the type instead of being a dumping ground. */
const boxList = (box) => {
  const maxPage = {};
  (box || []).forEach((a) => {
    const k = boxKey(a), t = boxType(k), p = boxPage(k);
    if (maxPage[t] === undefined || p > maxPage[t]) maxPage[t] = p;
  });
  const out = [];
  BOX_TYPES.forEach((t) => {
    const last = maxPage[t] === undefined ? -1 : maxPage[t];
    const lastFull = last >= 0 && inBox(box, mkBoxKey(t, last)).length >= BOX_SIZE;
    const pages = Math.max(1, last + 1 + (lastFull ? 1 : 0));
    for (let p = 0; p < pages; p++) out.push(mkBoxKey(t, p));
  });
  // A type the list does not know about should still be reachable rather than
  // silently swallowing its animals.
  (box || []).forEach((a) => {
    const k = boxKey(a);
    if (!out.includes(k)) out.push(k);
  });
  return out;
};

const boxCount = (box) => boxList(box).length;

// The page of an animal's own type with room in it, adding a page if every
// existing one is full. An animal always goes home.
const homeBoxFor = (sp, box) => {
  const t = typeKeyFor(sp);
  for (let p = 0; p < 256; p++) {
    if (inBox(box, mkBoxKey(t, p)).length < BOX_SIZE) return mkBoxKey(t, p);
  }
  return mkBoxKey(t, 0);
};
const placeFor = (sp, box) => homeBoxFor(sp, box);

const firstOpenBox = (box) => {
  const list = boxList(box);
  for (const k of list) if (inBox(box, k).length < BOX_SIZE) return k;
  return list[0];
};

// Reassign everything to its own type, filling each page before starting the
// next. Nothing lands outside its habitat any more, so there is no spilling
// into a neighbour's enclosure to explain.
const sortByHabitat = (box) => {
  const counts = {};
  return (box || []).map((a) => {
    const t = typeKeyFor(a.sp);
    let p = 0;
    while ((counts[mkBoxKey(t, p)] || 0) >= BOX_SIZE) p++;
    const k = mkBoxKey(t, p);
    counts[k] = (counts[k] || 0) + 1;
    return { ...a, box: k };
  });
};

const boxNameAt = boxNameFor;

console.log("[part39] sanctuary:", BOX_SIZE, "per enclosure |", BOX_TYPES.length, "habitats, each growing pages as it fills");

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
