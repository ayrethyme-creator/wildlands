// ---------- Part 56: THE PEOPLE ----------
// The trainers and townspeople were emoji, and unlike the trees that is not
// only a consistency problem. There are 27 distinct person emoji in the game
// and the differences between them are deliberate: skin tones across the whole
// range, elders and young people, farmers and scientists and teachers and
// pilots. That is a cast, chosen on purpose.
//
// So this does not replace them with one generic figure. It reads each emoji
// and keeps what it was saying - tone, age, hair, trade - then draws it in the
// ranger's own construction from part46: pale outline, soft halo underneath,
// simple shapes. The people you meet should look like they come from the same
// world as the person you play.
//
// It also fixes the thing emoji were always going to do here: a person emoji
// renders as a different human being on every operating system.

const NPC_SKIN = { "🏻": "#f4d9c0", "🏼": "#e8c39a", "🏽": "#c98f5f", "🏾": "#9c6438", "🏿": "#6f4a2e" };
const NPC_SKIN_DEFAULT = "#d9a877";

const NPC_OUTLINE = "#f6f2e8";
const NPC_DARK = "#2a2620";

// What each role wears. The trade is the loudest thing on the sprite, the way
// the ranger's hat is on hers, because at tile size that is the only part a
// player can actually read.
const NPC_ROLE = {
  farmer:    { coat: "#8a6f42", hat: "#d9b866", hatKind: "straw" },
  scientist: { coat: "#eae6dc", hat: null,      hatKind: null, goggles: true },
  teacher:   { coat: "#6b4a7a", hat: null,      hatKind: null, book: true },
  pilot:     { coat: "#3a4a6b", hat: "#2a3450", hatKind: "cap" },
  guard:     { coat: "#a02a2a", hat: "#2a2620", hatKind: "bearskin" },
  walker:    { coat: "#4a8a6b", hat: null,      hatKind: null },
  climber:   { coat: "#c96f2e", hat: "#e8c547", hatKind: "helmet" },
  night:     { coat: "#3a2a44", hat: null,      hatKind: null, cape: true },
  plain:     { coat: "#4a6b8a", hat: null,      hatKind: null },
};

const NPC_HAIR = {
  red:   "#a8442a", white: "#e4e0d6", curly: "#3a2a1e",
  grey:  "#b8b2a6", dark:  "#3a2a1e", fair: "#b08a4a",
};

/* Read an emoji into the person it was describing.

   Done by inspecting the code points rather than by matching whole strings,
   because these are sequences: a base figure, an optional skin tone, and an
   optional zero-width-joined role or hair marker. Matching the assembled
   string would need all 27 spelled out and would miss the 28th. */
const readPerson = (em) => {
  if (!em) return null;
  const cps = [...em];
  const has = (ch) => cps.includes(ch);
  let base = null;
  for (const c of cps) {
    if ("🧓🧔👩👨🧑💂🏃🧍🧒👵👴🧕👳🧗🧛".includes(c)) { base = c; break; }
  }
  if (!base) return null;

  const tone = cps.find((c) => NPC_SKIN[c]);
  const skin = tone ? NPC_SKIN[tone] : NPC_SKIN_DEFAULT;

  const role =
    has("🌾") ? "farmer" :
    has("🔬") ? "scientist" :
    has("🏫") ? "teacher" :
    has("✈") || has("✈️") ? "pilot" :
    base === "💂" ? "guard" :
    base === "🧗" ? "climber" :
    base === "🧛" ? "night" :
    base === "🏃" ? "walker" : "plain";

  const hair =
    has("🦰") ? "red" :
    has("🦳") ? "white" :
    has("🦱") ? "curly" :
    base === "🧓" || base === "👵" || base === "👴" ? "grey" :
    base === "👩" ? "dark" : "dark";

  return {
    skin, role, hair,
    long: base === "👩" || base === "👵",   // longer hair
    beard: base === "🧔" || base === "👴",
    elder: base === "🧓" || base === "👵" || base === "👴",
    running: base === "🏃" || base === "🧗",
    child: base === "🧒",
    // A covering replaces the hair rather than sitting on it, so the shape
    // reads correctly instead of a scarf perched on a fringe.
    covered: base === "🧕" ? "scarf" : base === "👳" ? "turban" : null,
  };
};

// Ordinary townspeople should not all own the same shirt. A trade is worth
// showing in one colour so it can be recognised, but "plain" is not a trade -
// it just means the emoji did not say - and twenty identical blue figures read
// as one person copied out rather than as a town.
const NPC_PLAIN_COATS = ["#4a6b8a", "#7a4a6b", "#4a7a5c", "#8a6a3a", "#5c5a8a", "#8a4a4a", "#3f6f74", "#6b6b4a"];
const npcCoat = (p, key) => {
  if (p.role !== "plain" && p.role !== "walker") return null;
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (Math.imul(h, 31) + key.charCodeAt(i)) >>> 0;
  return NPC_PLAIN_COATS[h % NPC_PLAIN_COATS.length];
};

const npcSvg = (p, bg, key) => {
  const R0 = NPC_ROLE[p.role] || NPC_ROLE.plain;
  const varied = npcCoat(p, key || "");
  const R = varied ? { ...R0, coat: varied } : R0;
  const hair = NPC_HAIR[p.hair] || NPC_HAIR.dark;
  const O = NPC_OUTLINE;
  const lean = p.running ? 2 : 0;

  const hat =
    R.hatKind === "helmet"
      ? `<path d="M10,8.2 Q10,2.4 16,2.4 Q22,2.4 22,8.2 Z" fill="${R.hat}" stroke="${O}" stroke-width="1" stroke-linejoin="round"/>` +
        `<path d="M9,8.2 L23,8.2" stroke="${O}" stroke-width="1"/>`
      : R.hatKind === "straw"
      ? `<path d="M8,7.4 Q16,1.4 24,7.4 Q16,5 8,7.4 Z" fill="${R.hat}" stroke="${O}" stroke-width="1" stroke-linejoin="round"/>` +
        `<path d="M6,7.4 L26,7.4 Q26,9.6 16,9.6 Q6,9.6 6,7.4 Z" fill="${R.hat}" stroke="${O}" stroke-width="1" stroke-linejoin="round"/>`
      : R.hatKind === "cap"
      ? `<path d="M10,7.6 Q16,2.2 22,7.6 Z" fill="${R.hat}" stroke="${O}" stroke-width="1" stroke-linejoin="round"/>` +
        `<path d="M9.4,7.6 L23.6,7.6 Q23.6,9.2 16,9.2 Q9.4,9.2 9.4,7.6 Z" fill="${R.hat}" stroke="${O}" stroke-width="1"/>`
      : R.hatKind === "bearskin"
      ? `<path d="M10.4,8 Q10.4,-0.6 16,-0.6 Q21.6,-0.6 21.6,8 Z" fill="${R.hat}" stroke="${O}" stroke-width="1" stroke-linejoin="round"/>`
      : "";

  // Hair is drawn before the hat so a hat covers it, and long hair falls
  // outside the hat line so it still reads under one.
  // A headscarf or turban is the head covering, drawn instead of hair.
  const covering =
    p.covered === "scarf"
      ? `<path d="M9.4,9.4 Q9.4,1.6 16,1.6 Q22.6,1.6 22.6,9.4 Q22.6,14.6 19.6,16.4 L12.4,16.4 Q9.4,14.6 9.4,9.4 Z" fill="${sh(R.coat, 0.18)}" stroke="${O}" stroke-width=".9" stroke-linejoin="round"/>` +
        `<circle cx="16" cy="10.4" r="4.6" fill="${p.skin}"/>`
      : p.covered === "turban"
      ? `<path d="M9.6,8.6 Q9.6,1.4 16,1.4 Q22.4,1.4 22.4,8.6 Q16,6.4 9.6,8.6 Z" fill="#d9c48a" stroke="${O}" stroke-width=".9" stroke-linejoin="round"/>`
      : "";

  const hairShape = p.covered ? "" :
    (p.long
      ? `<path d="M9.6,8 Q9.6,1.8 16,1.8 Q22.4,1.8 22.4,8 L22.4,15 Q20,12.6 20,8.6 L12,8.6 Q12,12.6 9.6,15 Z" fill="${hair}"/>`
      : `<path d="M10.4,7.8 Q16,1.6 21.6,7.8 Q16,5.8 10.4,7.8 Z" fill="${hair}"/>`) +
    (p.beard ? `<path d="M11.6,11.4 Q16,17.6 20.4,11.4 Q16,13.4 11.6,11.4 Z" fill="${hair}"/>` : "");

  const body = '';
  const scale = p.child ? 0.76 : 1;
  const open = p.child
    ? `<g transform="translate(${16 * (1 - scale)}, ${30 * (1 - scale)}) scale(${scale})">`
    : "<g>";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">` +
    `<rect width="32" height="32" fill="${bg}"/>` + open +
    `<ellipse cx="16" cy="27.4" rx="9" ry="3.2" fill="#000" opacity=".28"/>` +
    // legs and boots
    `<path d="M${11 + lean},26 L11,20 L21,20 L${21 + lean},26 Z" fill="#3a3f48" stroke="${O}" stroke-width="1" stroke-linejoin="round"/>` +
    `<rect x="${10.5 + lean}" y="25" width="4.5" height="2.6" rx="1" fill="${NPC_DARK}" stroke="${O}" stroke-width=".8"/>` +
    `<rect x="${17 - lean}" y="25" width="4.5" height="2.6" rx="1" fill="${NPC_DARK}" stroke="${O}" stroke-width=".8"/>` +
    // body
    `<path d="M10,20 Q10,12 16,12 Q22,12 22,20 Z" fill="${R.coat}" stroke="${O}" stroke-width="1" stroke-linejoin="round"/>` +
    `<circle cx="${10.4 - lean}" cy="17" r="2" fill="${p.skin}" stroke="${O}" stroke-width=".8"/>` +
    `<circle cx="${21.6 + lean}" cy="17" r="2" fill="${p.skin}" stroke="${O}" stroke-width=".8"/>` +
    (R.book ? `<rect x="18.4" y="15" width="5.4" height="4" rx="0.8" fill="#d9c48a" stroke="${O}" stroke-width=".7"/>` : "") +
    // head
    `<circle cx="16" cy="9" r="5.6" fill="${p.skin}" stroke="${O}" stroke-width="1"/>` +
    hairShape + covering + hat +
    (R.goggles
      ? `<rect x="10.6" y="8.4" width="10.8" height="3" rx="1.5" fill="#8ac0d8" stroke="${O}" stroke-width=".7" opacity=".95"/>`
      : `<circle cx="13.8" cy="10.4" r="1.15" fill="${NPC_DARK}"/><circle cx="18.2" cy="10.4" r="1.15" fill="${NPC_DARK}"/>`) +
    (p.elder ? `<path d="M12.4,12.8 Q16,14.6 19.6,12.8" stroke="${NPC_DARK}" stroke-width=".7" fill="none" opacity=".5"/>` : "") +
    (R.cape ? `<path d="M9.6,20 Q7,13 11,11.6 L21,11.6 Q25,13 22.4,20 Z" fill="#5a2a3a" opacity=".85"/>` : "") +
    "</g></svg>";
};

const NPC_CACHE = {};
/* The public helper, shaped like GRASS_TILE and TILE_ART: an emoji and the tile
   colour in, a background image out, or null when the emoji is not a person and
   should keep rendering as itself. */
const PERSON_TILE = (em, bg) => {
  const key = `${em}|${bg}`;
  if (key in NPC_CACHE) return NPC_CACHE[key];
  const p = readPerson(em);
  NPC_CACHE[key] = p
    ? `url("data:image/svg+xml,${encodeURIComponent(npcSvg(p, bg, em))}")`
    : null;
  return NPC_CACHE[key];
};

console.log(`[part56] people drawn | ${Object.keys(NPC_ROLE).length} trades, ${Object.keys(NPC_SKIN).length} skin tones read from the emoji`);
