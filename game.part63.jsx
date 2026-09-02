// ---------- PART 63: MORE ACHIEVEMENTS ----------
// part60 shipped 19 achievements when the Field Guide was smaller and the
// Archive and Aquarium didn't exist yet. This adds 24 more - species-count
// milestones rescaled for a 1000-entry guide, plus achievements for content
// those 19 never touched: the Wardens, the Fossil and Mythic type lines, the
// written exams, the Archive's now-much-deeper quiz pools, Hearthside's
// breeds, and the Aquarium.
//
// Every "_all" achievement here follows the same convention friends_all
// already set: it checks dex value 2 (caught/befriended) across a fixed set
// of species keys, computed once below rather than re-filtered on every
// check. Wardens are caught the ordinary way (wild encounter, not a shrine
// puzzle), unlike qilin/thunderbird/phoenix, so dex is the right thing to
// check for them too.

const FOSSIL_KEYS = Object.keys(DEX).filter((k) => DEX[k].t.includes("Fossil"));
const MYTHIC_KEYS = Object.keys(DEX).filter((k) => DEX[k].t.includes("Mythic"));
const WARDEN_KEYS = Object.keys(DEX).filter((k) => DEX[k].warden);
const BREED_KEYS = Object.keys(DEX).filter((k) => DEX[k].breed);
const MEMORIAL_KEYS = Object.keys(DEX).filter((k) => DEX[k].mem);
const AQUARIUM_KEYS = (typeof AQUA_FRESH !== "undefined" && typeof AQUA_SALT !== "undefined")
  ? AQUA_FRESH.concat(AQUA_SALT) : [];
const ALL_TYPES = ["Predator", "Aerial", "Aquatic", "Burrow", "Venom", "Armor", "Swift", "Wild",
  "Ember", "Bug", "Canopy", "Night", "Ice", "Fossil", "Mythic"];
const ELITE_KEYS = ["summit:7,9", "summit:7,7", "summit:7,5", "summit:7,3"];

const caught = (st, k) => (st.dex || {})[k] === 2;
const allCaught = (st, keys) => keys.length > 0 && keys.every((k) => caught(st, k));

ACHIEVEMENTS.push(
  { id: "guide_100", icon: "🔭", tier: "bronze", name: "Careful Watcher", desc: "See 100 species.",
    check: (st) => Object.values(st.dex || {}).filter((v) => v >= 1).length >= 100 },
  { id: "guide_500", icon: "📔", tier: "silver", name: "Deep in the Field", desc: "See 500 species.",
    check: (st) => Object.values(st.dex || {}).filter((v) => v >= 1).length >= 500 },
  { id: "guide_1000", icon: "🌌", tier: "gold", name: "Nothing Left Unseen", desc: "See every species in the guide.",
    check: (st) => Object.values(st.dex || {}).filter((v) => v >= 1).length >= Object.keys(DEX).length },
  { id: "friends_100", icon: "🧺", tier: "bronze", name: "Growing Menagerie II", desc: "Befriend 100 species.",
    check: (st) => Object.values(st.dex || {}).filter((v) => v === 2).length >= 100 },
  { id: "friends_750", icon: "🏕️", tier: "gold", name: "Almost Everyone", desc: "Befriend 750 species.",
    check: (st) => Object.values(st.dex || {}).filter((v) => v === 2).length >= 750 },
  { id: "type_complete", icon: "⚖️", tier: "gold", name: "One of Each", desc: "Befriend at least one species of every type.",
    check: (st) => ALL_TYPES.every((ty) => Object.keys(st.dex || {}).some((sp) => caught(st, sp) && DEX[sp] && DEX[sp].t.includes(ty))) },
  { id: "elite_four", icon: "⚔️", tier: "silver", name: "The Elite Four", desc: "Defeat all four members of the Elite Four.",
    check: (st) => ELITE_KEYS.every((k) => (st.trainersBeaten || {})[k]) },
  { id: "warden_1", icon: "🕯️", tier: "bronze", name: "First Warden", desc: "Befriend your first Warden.",
    check: (st) => WARDEN_KEYS.some((k) => caught(st, k)) },
  { id: "warden_all", icon: "🛡️", tier: "gold", name: "Circle of Wardens", desc: "Befriend all thirteen Wardens.",
    check: (st) => allCaught(st, WARDEN_KEYS) },
  { id: "fossil_1", icon: "🦴", tier: "bronze", name: "Dust Off", desc: "Befriend your first fossil species.",
    check: (st) => FOSSIL_KEYS.some((k) => caught(st, k)) },
  { id: "fossil_all", icon: "🦕", tier: "gold", name: "Paleontologist", desc: "Befriend every fossil species in the Rift.",
    check: (st) => allCaught(st, FOSSIL_KEYS) },
  { id: "myth_1", icon: "🌫️", tier: "bronze", name: "Into Myth", desc: "Befriend your first mythic species.",
    check: (st) => MYTHIC_KEYS.some((k) => caught(st, k)) },
  { id: "myth_all", icon: "🐉", tier: "gold", name: "Bestiary Complete", desc: "Befriend every mythic species across the Rifts.",
    check: (st) => allCaught(st, MYTHIC_KEYS) },
  { id: "pets_10", icon: "🐕", tier: "bronze", name: "Good Company", desc: "Befriend 10 domestic or pet species.",
    check: (st) => Object.keys(st.dex || {}).filter((k) => caught(st, k) && DEX[k] && DEX[k].dom).length >= 10 },
  { id: "breeds_all", icon: "🏡", tier: "gold", name: "Full House", desc: "Befriend every breed and domestic form at Hearthside.",
    check: (st) => allCaught(st, BREED_KEYS) },
  { id: "aquarium_all", icon: "🐠", tier: "silver", name: "Full Tank", desc: "Befriend every fish in the Aquarium.",
    check: (st) => allCaught(st, AQUARIUM_KEYS) },
  { id: "rich_ii", icon: "🏦", tier: "gold", name: "Small Fortune", desc: "Carry ₡10,000 in trade shells at once.",
    check: (st) => (st.items?.coins || 0) >= 10000 },
  { id: "quiz_perfect_all", icon: "🧠", tier: "gold", name: "Perfect Scholar", desc: "Post a perfect run at all three Archive tiers.",
    check: (st) => ["notes", "trials", "masters"].every((t) => (st.quizPerfect || {})[t]) },
  { id: "quiz_dedicated", icon: "✏️", tier: "silver", name: "Dedicated Student", desc: "Pass 25 Archive assessments in total.",
    check: (st) => Object.values(st.quizWins || {}).reduce((a, b) => a + b, 0) >= 25 },
  { id: "quiz_century", icon: "💯", tier: "gold", name: "Century Club", desc: "Pass 100 Archive assessments in total.",
    check: (st) => Object.values(st.quizWins || {}).reduce((a, b) => a + b, 0) >= 100 },
  { id: "exams_all", icon: "🖋️", tier: "silver", name: "Master Scholar", desc: "Pass every gym's written field exam.",
    check: (st) => Object.values(st.quiz || {}).filter(Boolean).length >= GYM_COUNT },
  { id: "memorial_1", icon: "🕊️", tier: "bronze", name: "In Memoriam", desc: "Befriend your first memorial species.",
    check: (st) => MEMORIAL_KEYS.some((k) => caught(st, k)) },
  { id: "memorial_all", icon: "🪦", tier: "gold", name: "Keeper of Ghosts", desc: "Befriend every memorial species.",
    check: (st) => allCaught(st, MEMORIAL_KEYS) },
  { id: "veteran", icon: "⭐", tier: "silver", name: "Veteran Companion", desc: "Raise a companion to level 50.",
    check: (st) => (st.party || []).some((a) => (a.lvl || 0) >= 50) },
);

console.log(`[part63] achievements now: ${ACHIEVEMENTS.length} | fossil=${FOSSIL_KEYS.length} mythic=${MYTHIC_KEYS.length} warden=${WARDEN_KEYS.length} breed=${BREED_KEYS.length} memorial=${MEMORIAL_KEYS.length} aquarium=${AQUARIUM_KEYS.length}`);
