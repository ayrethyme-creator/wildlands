// ---------- CHAPTER V — Part 6: THE FOSSIL RIFT ----------
// Post-champion collection content. Purely additive; old saves stay valid.

Object.assign(TYPE_COLORS, { Fossil: "#8a6f52", Mythic: "#a34ac9" });
Object.assign(CHART, { Fossil: {}, Mythic: {} });

const B = (h, a, d, s) => ({ h, a, d, s });
const MV = {
  pred: ["pounce", "crunch", "maul"], aer: ["gust", "divebomb", "stormdive"],
  aqua: ["splash", "torrent", "tidalcrash"], bur: ["tunnel", "dig", "quake"],
  ven: ["venombite", "stingshot", "neurotoxin"], arm: ["shellbash", "ironhide", "siegehorn"],
  swi: ["quickdash", "blitz", "lightstep"], wild: ["tackle", "bodyslam", "gigaslam"],
  emb: ["flareup", "emberwing", "magmaburst"], ice: ["icestep", "frostfang", "blizzard"],
  night: ["duskfeint", "nightambush", "moonstrike"], can: ["treeleap", "vineswing", "canopycrash"],
  bug: ["buzzrush", "swarmsting", "hivecall"],
};

// --- fossil sprite generators (head-bust style, 64x64) ---
const teethRow = (y, x0 = 23, n = 5, w = 3.8, c = "#f5efdf") => (
  <path d={Array.from({ length: n }, (_, i) => `M${x0 + i * w},${y} l${w / 2},4.5 l${w / 2},-4.5`).join(" ")} fill={c} />
);
const theroA = (o) => (er) => {
  const H = o.hide || "#7a6a4a";
  const spine = sh(H, -0.26), belly = sh(H, 0.36), limb = sh(H, -0.12);
  const mark = o.markC || sh(H, -0.5);
  const g1 = gid("tc", H), g2 = gid("tl", H);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={spine} /><stop offset=".55" stopColor={H} />
        <stop offset="1" stopColor={belly} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.18)} /><stop offset="1" stopColor={sh(H, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="57.4" rx="20" ry="2.4" fill="#000" opacity=".16" />

    {/* bipedal, balanced horizontally: heavy tail behind, head forward */}
    <path d="M20,32 Q11,31 4,26" stroke={limb} strokeWidth="5.6" fill="none" strokeLinecap="round" />
    <path d="M11,29.6 Q7,28 3.6,25.6" stroke={sh(H, -0.28)} strokeWidth="3.2" fill="none"
      strokeLinecap="round" />
    {o.sail && (
      <path d="M18,28 Q26,14 36,16 Q30,20 24,30 Z" fill={o.sailC || sh(H, -0.2)} opacity=".9" />
    )}

    {/* far leg */}
    <g stroke={`url(#${g2})`} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"
      opacity=".7">
      <polyline points="28,38 24.6,45 29,49.4 29,53.6" />
    </g>

    <path d="M40,26 Q46,29 45.8,34.6 Q45.6,40.4 41,43.4 Q32,46.6 24,43.6
             Q17.6,40.8 17.6,34 Q17.6,28 24,25.6 Q32,22.6 40,26 Z" fill={`url(#${g1})`} />
    {o.stripes && (
      <g stroke={mark} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity=".85">
        <path d="M23,26.6 Q24,33 23,42 M29.4,24.6 Q30.4,32.4 29.4,44
                 M35.8,25.2 Q36.8,32.6 35.8,43.4" />
      </g>
    )}

    {/* powerful near leg with a bird-like backward ankle */}
    <g stroke={`url(#${g2})`} strokeWidth="4.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="33,38.6 29,46.6 34.6,50.6 34.6,55" />
    </g>
    <path d="M31.6,55 L40,55 Q41.2,56.6 39.6,57.2 L31,57.2 Q29.6,56.2 31.6,55 Z"
      fill={sh(H, -0.32)} />
    {/* small forearm */}
    <g stroke={`url(#${g2})`} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="41.6,31.6 45.6,34.6 44,37.6" />
    </g>

    {/* neck and a long deep jaw */}
    <path d="M40.6,27.6 Q44.6,22 49.6,19.4 L53.4,23 Q48.6,25.6 45.6,31 Z" fill={`url(#${g1})`} />
    {o.plume && (
      <path d="M42,25.6 Q46,19.6 51,16.6 Q52,18 52,19.4 Q47.4,22 44.4,27.6 Z"
        fill={o.plumeC || sh(H, -0.3)} />
    )}
    <path d="M49.4,19 Q55,15.6 60,17.6 Q63,19.4 62.4,22.6 Q61.6,25.4 57.6,25.8
             Q52.4,26.2 50,23.6 Q48.4,21.4 49.4,19 Z" fill={H} />
    {/* jaw line and teeth */}
    <path d="M52,24.4 Q57,26.4 62,24.2 Q60.6,27.4 56.6,27.6 Q52.8,27.2 52,24.4 Z"
      fill={o.jaw || sh(H, 0.3)} />
    <g fill="#f4ecd8">
      <path d="M54,25.4 L55,25.4 L54.5,27 Z" /><path d="M56.4,25.8 L57.4,25.8 L56.9,27.4 Z" />
      <path d="M58.8,25.6 L59.8,25.6 L59.3,27.1 Z" />
    </g>
    {o.brow && (
      <path d="M52.6,18.6 Q56,17 59,18.4 Q56,18.6 52.6,18.6 Z" fill={sh(H, -0.45)} />
    )}
    {o.crest && (
      <path d="M51,17.6 Q54,11.6 58.6,13.4 Q55.4,15 53.4,18.4 Z"
        fill={o.crestC || o.hornC || sh(H, -0.3)} />
    )}
    {o.crest2 && (
      <path d="M55,16.6 Q57.4,10.6 61,12.6 Q58.4,14.2 57,17.4 Z"
        fill={o.crestC || sh(H, -0.36)} />
    )}
    {o.hornC && !o.crest && (
      <g stroke={o.hornC} strokeWidth="1.6" strokeLinecap="round">
        <path d="M55.6,17.4 L54.6,13" /><path d="M59,18 L60,13.6" />
      </g>
    )}
    <Eye x={54.4} y={21} r={1.8 * er} iris={o.iris || "#c9a43a"} />
  </g>
  );
};
const sauroA = (o) => (er) => (
  <g>
    {o.fins && <g fill={o.finC || o.hide}><path d="M10,50 Q4,42 14,40 L22,46 Z" /><path d="M54,50 Q60,42 50,40 L42,46 Z" /></g>}
    <path d="M25,58 L27,26 Q28,13 38,13 Q47,13 47,20 Q47,27 39,27 L37,31 L37,58 Z" fill={o.hide} />
    <ellipse cx="40" cy="20" rx="8" ry="7" fill={o.hide} />
    {o.ridges && <g fill={o.markC || "#5c7a4a"}>{[0, 1, 2, 3].map((i) => <circle key={i} cx={29 + i * 0.6} cy={52 - i * 8} r="1.7" />)}</g>}
    {o.belly && <path d="M28,58 L29,34 L35,34 L35,58 Z" fill={o.belly} />}
    <circle cx="45" cy="21" r="1" fill="#2a2018" />
    <Eye x={38} y={19} r={2.2 * er} iris={o.iris || "#7a9a4a"} />
  </g>
);
const ceratoA = (o) => (er) => (
  <g>
    <ellipse cx="32" cy="25" rx="17" ry="14" fill={o.frill} />
    <ellipse cx="32" cy="26" rx="13" ry="11" fill={o.frillIn || o.hide} />
    {o.frillSpikes && <g fill={o.frill}>{[-13, -7, 0, 7, 13].map((dx, i) => <path key={i} d={`M${29 + dx},${14 + Math.abs(dx) * 0.3} l3,-7 l3,7.5 Z`} />)}</g>}
    {o.crestBack && <path d="M34,20 Q54,4 57,13 Q50,20 40,26 Z" fill={o.crestC || o.frill} />}
    <ellipse cx="32" cy="38" rx="12.5" ry="11" fill={o.hide} />
    {o.hornsLong && <g fill="#e8dcc3"><path d="M25,31 L18,13 L29,28 Z" /><path d="M39,31 L46,13 L35,28 Z" /></g>}
    {o.noseHorn && <path d="M29,41 L32,30 L35,41 Z" fill="#e8dcc3" />}
    {o.dome && <ellipse cx="32" cy="27" rx="9" ry="7" fill={o.domeC || "#c9b98a"} />}
    <path d="M27,45 Q32,51 37,45 L36,49 Q32,52 28,49 Z" fill={o.beakC || "#c9a86a"} />
    <Eye x={26} y={37} r={2.4 * er} iris={o.iris || "#b06a3a"} />
    <Eye x={38} y={37} r={2.4 * er} iris={o.iris || "#b06a3a"} />
  </g>
);
const armorA = (o) => (er) => (
  <g>
    {o.plates && <g fill={o.plateC || "#c05a3a"}>{[[13, 24], [23, 15], [37, 13], [47, 22]].map(([x, y], i) => <path key={i} d={`M${x},${y + 10} L${x + 5},${y} L${x + 10},${y + 10} Z`} />)}</g>}
    {o.spikes && <g fill="#e8dcc3"><path d="M15,29 L5,21 L17,25 Z" /><path d="M49,29 L59,21 L47,25 Z" /></g>}
    <ellipse cx="32" cy="38" rx="16" ry="13" fill={o.hide} />
    {o.scutes && <g fill={o.scuteC || "#7a6a4a"}><circle cx="24" cy="30" r="2.2" /><circle cx="32" cy="27" r="2.2" /><circle cx="40" cy="30" r="2.2" /><circle cx="20" cy="37" r="1.8" /><circle cx="44" cy="37" r="1.8" /></g>}
    {o.tusks && <g fill="#f5efdf"><path d="M24,46 L21,55 L27,48 Z" /><path d="M40,46 L43,55 L37,48 Z" /></g>}
    <ellipse cx="32" cy="46" rx="8" ry="5.5" fill={o.beakC || "#c9b98a"} />
    <circle cx="29" cy="45" r="1" fill="#2a2018" /><circle cx="35" cy="45" r="1" fill="#2a2018" />
    <Eye x={25} y={35} r={2.4 * er} iris={o.iris || "#8a9a4a"} />
    <Eye x={39} y={35} r={2.4 * er} iris={o.iris || "#8a9a4a"} />
  </g>
);
const pteroA = (o) => (er) => (
  <g>
    <path d="M4,32 L22,27 L20,39 Z" fill={o.wingC || o.hide} />
    <path d="M60,32 L42,27 L44,39 Z" fill={o.wingC || o.hide} />
    {o.crestBack && <path d="M34,26 Q52,8 56,15 Q49,22 39,29 Z" fill={o.crestC || "#c0392b"} />}
    {o.crest && <path d="M27,24 Q32,7 39,25 Z" fill={o.crestC || "#c0392b"} />}
    {o.plume && <path d="M24,22 Q28,12 31,20 Q32,11 34,20 Q37,12 40,22 Z" fill={o.plumeC || "#8a6f52"} />}
    <ellipse cx="32" cy="33" rx="11.5" ry="10" fill={o.hide} />
    <path d="M27,39 L32,58 L37,39 Z" fill={o.beakC || "#d9b06a"} />
    {o.teeth && teethRow(41.5, 27, 3, 3.4)}
    <Eye x={26} y={31} r={2.5 * er} iris={o.iris || "#d9a43a"} />
    <Eye x={38} y={31} r={2.5 * er} iris={o.iris || "#d9a43a"} />
  </g>
);
const marineA = (o) => (er) => (
  <g>
    <path d="M8,42 Q2,33 12,31 L21,38 Z" fill={o.finC || o.hide} />
    <path d="M56,42 Q62,33 52,31 L43,38 Z" fill={o.finC || o.hide} />
    {o.tents && <g stroke={o.hide} strokeWidth="4" strokeLinecap="round" fill="none"><path d="M22,46 Q18,56 12,55" /><path d="M32,48 Q32,58 28,60" /><path d="M42,46 Q46,56 52,55" /></g>}
    <ellipse cx="32" cy="34" rx="15" ry="12" fill={o.hide} />
    {o.belly && <ellipse cx="32" cy="40" rx="10" ry="6" fill={o.belly} />}
    {o.bigEye ? <g><Eye x={24} y={33} r={4.2 * er} iris={o.iris || "#7ab4d9"} /><Eye x={40} y={33} r={4.2 * er} iris={o.iris || "#7ab4d9"} /></g>
      : <g><Eye x={24} y={32} r={2.6 * er} iris={o.iris || "#7ab4d9"} /><Eye x={40} y={32} r={2.6 * er} iris={o.iris || "#7ab4d9"} /></g>}
    <path d="M21,42 Q32,49 43,42 L43,46 Q32,53 21,46 Z" fill={o.jaw || "#48657a"} />
    {o.teeth && teethRow(42.4, 22, 6, 3.6)}
  </g>
);

Object.assign(ART, {
  // Triassic
  coelophysis: theroA({ hide: "#8fae5c", jaw: "#6b8a44", stripes: true }),
  eoraptor: theroA({ hide: "#c9a05c", jaw: "#a3824a" }),
  herrerasaurus: theroA({ hide: "#a3684a", jaw: "#7a4c38", stripes: true }),
  plateosaurus: sauroA({ hide: "#9aa85c", belly: "#c9cf9a" }),
  postosuchus: theroA({ hide: "#6b7a5c", jaw: "#4c5844", brow: true, hornC: "#5c6b4c" }),
  desmatosuchus: armorA({ hide: "#8a7a5c", spikes: true, scutes: true }),
  shonisaurus: marineA({ hide: "#5a768a", belly: "#a3b8c4" }),
  tanystropheus: sauroA({ hide: "#7a9a8a", belly: "#c4d4c4", fins: true }),
  lystrosaurus: armorA({ hide: "#b59a6b", tusks: true, beakC: "#d9c49a" }),
  cynognathus: canArt({ fur: "#8a6844", inner: "#5c4030", muzzle: "#c9ae85", iris: "#c98a3a" }),
  placerias: armorA({ hide: "#9a8468", tusks: true, scutes: true }),
  proganochelys: armorA({ hide: "#6b8a5c", spikes: true, beakC: "#c9b98a", scutes: true, scuteC: "#4c6844" }),
  // Jurassic
  allosaurus: theroA({ hide: "#b5744a", jaw: "#8a5438", brow: true, hornC: "#c0392b" }),
  ceratosaurus: theroA({ hide: "#8a5c6b", jaw: "#6b4452", crest: true, crestC: "#c95c4a" }),
  dilophosaurus: theroA({ hide: "#6b9a6b", jaw: "#4c7a52", crest2: true, crestC: "#d9a43a" }),
  cryolophosaurus: theroA({ hide: "#8fa8c4", jaw: "#6b84a3", crest: true, crestC: "#d9884a", iris: "#6fb3d9" }),
  compsognathus: theroA({ hide: "#a8c46b", jaw: "#84a34c" }),
  archaeopteryx: pteroA({ hide: "#5c7ab5", plume: true, plumeC: "#c95c3a", wingC: "#48639a", beakC: "#d9b06a", teeth: true }),
  pterodactylus: pteroA({ hide: "#c9ae7d", wingC: "#a88f5c", beakC: "#d9c48a" }),
  rhamphorhynchus: pteroA({ hide: "#8a7a9c", wingC: "#6b5c84", teeth: true }),
  stegosaurus: armorA({ hide: "#7a9a5c", plates: true, plateC: "#c05a3a" }),
  kentrosaurus: armorA({ hide: "#8a845c", plates: true, plateC: "#a34a3a", spikes: true }),
  brachiosaurus: sauroA({ hide: "#8a9a6b", belly: "#c4cf9a" }),
  diplodocus: sauroA({ hide: "#9a8a6b", belly: "#cfc49a", ridges: true }),
  apatosaurus: sauroA({ hide: "#7a7a68", belly: "#b5b59a" }),
  brontosaurus: sauroA({ hide: "#6b7a8a", belly: "#a8b5c4" }),
  camarasaurus: sauroA({ hide: "#b5a05c", belly: "#dfd0a3" }),
  mamenchisaurus: sauroA({ hide: "#a3745c", belly: "#d4b59a", ridges: true, markC: "#7a4c3a" }),
  plesiosaurus: sauroA({ hide: "#5c8aa3", belly: "#a8ccd9", fins: true }),
  liopleurodon: marineA({ hide: "#48657a", belly: "#8fa8b5", teeth: true }),
  ophthalmosaurus: marineA({ hide: "#6b8aa8", belly: "#b5ccd9", bigEye: true }),
  // Cretaceous
  tyrannosaurus: theroA({ hide: "#7a5c44", jaw: "#5c4030", brow: true, hornC: "#5c4a38", stripes: true, markC: "#4c3826" }),
  giganotosaurus: theroA({ hide: "#8a6b52", jaw: "#68503c", brow: true }),
  spinosaurus: theroA({ hide: "#6b8a7a", jaw: "#4c6b5c", sail: true, sailC: "#c9704a" }),
  carnotaurus: theroA({ hide: "#a34a3a", jaw: "#7a3428", brow: true, hornC: "#5c3026" }),
  velociraptor: theroA({ hide: "#c98a4a", jaw: "#a36838", plume: true, plumeC: "#7a5230", stripes: true }),
  deinonychus: theroA({ hide: "#8a744a", jaw: "#685438", plume: true, plumeC: "#c0392b" }),
  therizinosaurus: sauroA({ hide: "#a8a05c", belly: "#d9d0a3", ridges: true, markC: "#7a744a" }),
  gallimimus: theroA({ hide: "#c9b98a", jaw: "#a89868" }),
  oviraptor: theroA({ hide: "#5c8a8a", jaw: "#44686b", crest: true, crestC: "#d94a3a" }),
  triceratops: ceratoA({ hide: "#8a7a5c", frill: "#a88f5c", hornsLong: true, noseHorn: true }),
  styracosaurus: ceratoA({ hide: "#9a6b4a", frill: "#c98a4a", frillSpikes: true, noseHorn: true }),
  protoceratops: ceratoA({ hide: "#c9ae7d", frill: "#a8905c" }),
  pachycephalosaurus: ceratoA({ hide: "#8a6b5c", frill: "#8a6b5c", frillIn: "#8a6b5c", dome: true, domeC: "#d9c9a3" }),
  ankylosaurus: armorA({ hide: "#6b6b52", scutes: true, scuteC: "#8a8a68", spikes: true }),
  parasaurolophus: ceratoA({ hide: "#7a9a6b", frill: "#7a9a6b", frillIn: "#7a9a6b", crestBack: true, crestC: "#c95c3a" }),
  iguanodon: armorA({ hide: "#9aa86b", scutes: true, scuteC: "#7a884c", beakC: "#c9b98a" }),
  quetzalcoatlus: pteroA({ hide: "#c9a05c", wingC: "#a3824a", crestBack: true, crestC: "#a34a3a" }),
  pteranodon: pteroA({ hide: "#8a745c", wingC: "#68563c", crestBack: true, crestC: "#8a745c" }),
  mosasaurus: marineA({ hide: "#3c5468", belly: "#8fa3b5", teeth: true }),
});

const FD = (n, art, t2, b, m, c, org) => ({ n, art, t: ["Fossil", t2], b, m, l: [], c, org });
Object.assign(DEX, {
  coelophysis: FD("Coelophysis", "coelophysis", "Swift", B(48, 54, 40, 68), MV.swi, 0.4, "Triassic"),
  eoraptor: FD("Eoraptor", "eoraptor", "Swift", B(44, 50, 38, 64), MV.swi, 0.45, "Triassic"),
  herrerasaurus: FD("Herrerasaurus", "herrerasaurus", "Predator", B(56, 62, 46, 52), MV.pred, 0.35, "Triassic"),
  plateosaurus: FD("Plateosaurus", "plateosaurus", "Wild", B(68, 54, 56, 30), MV.wild, 0.4, "Triassic"),
  postosuchus: FD("Postosuchus", "postosuchus", "Predator", B(62, 66, 54, 38), MV.pred, 0.3, "Triassic"),
  desmatosuchus: FD("Desmatosuchus", "desmatosuchus", "Armor", B(60, 46, 72, 22), MV.arm, 0.35, "Triassic"),
  shonisaurus: FD("Shonisaurus", "shonisaurus", "Aquatic", B(72, 58, 58, 40), MV.aqua, 0.3, "Triassic"),
  tanystropheus: FD("Tanystropheus", "tanystropheus", "Aquatic", B(58, 52, 46, 44), ["splash", "torrent", "quickdash"], 0.35, "Triassic"),
  lystrosaurus: FD("Lystrosaurus", "lystrosaurus", "Burrow", B(58, 44, 58, 30), MV.bur, 0.5, "Triassic"),
  cynognathus: FD("Cynognathus", "cynognathus", "Predator", B(56, 60, 48, 46), MV.pred, 0.4, "Triassic"),
  placerias: FD("Placerias", "placerias", "Armor", B(64, 48, 64, 24), MV.arm, 0.4, "Triassic"),
  proganochelys: FD("Proganochelys", "proganochelys", "Armor", B(58, 42, 76, 18), ["shellbash", "harden", "siegehorn"], 0.4, "Triassic"),
  allosaurus: FD("Allosaurus", "allosaurus", "Predator", B(68, 74, 54, 50), ["takedown", "crunch", "apexfang"], 0.25, "Jurassic"),
  ceratosaurus: FD("Ceratosaurus", "ceratosaurus", "Predator", B(62, 68, 52, 48), MV.pred, 0.3, "Jurassic"),
  dilophosaurus: FD("Dilophosaurus", "dilophosaurus", "Venom", B(56, 62, 46, 56), MV.ven, 0.3, "Jurassic"),
  cryolophosaurus: FD("Cryolophosaurus", "cryolophosaurus", "Ice", B(60, 64, 50, 50), MV.ice, 0.25, "Jurassic"),
  compsognathus: FD("Compsognathus", "compsognathus", "Swift", B(40, 46, 34, 72), ["quickdash", "firststrike", "blitz"], 0.5, "Jurassic"),
  archaeopteryx: FD("Archaeopteryx", "archaeopteryx", "Aerial", B(48, 54, 40, 64), MV.aer, 0.4, "Jurassic"),
  pterodactylus: FD("Pterodactylus", "pterodactylus", "Aerial", B(48, 54, 40, 62), MV.aer, 0.4, "Jurassic"),
  rhamphorhynchus: FD("Rhamphorhynchus", "rhamphorhynchus", "Aerial", B(46, 56, 38, 64), MV.aer, 0.4, "Jurassic"),
  stegosaurus: FD("Stegosaurus", "stegosaurus", "Armor", B(70, 54, 74, 20), ["ironhide", "harden", "siegehorn"], 0.3, "Jurassic"),
  kentrosaurus: FD("Kentrosaurus", "kentrosaurus", "Armor", B(62, 56, 68, 24), MV.arm, 0.3, "Jurassic"),
  brachiosaurus: FD("Brachiosaurus", "brachiosaurus", "Wild", B(84, 62, 66, 22), MV.wild, 0.25, "Jurassic"),
  diplodocus: FD("Diplodocus", "diplodocus", "Wild", B(80, 58, 60, 28), MV.wild, 0.3, "Jurassic"),
  apatosaurus: FD("Apatosaurus", "apatosaurus", "Wild", B(78, 60, 64, 24), MV.wild, 0.3, "Jurassic"),
  brontosaurus: FD("Brontosaurus", "brontosaurus", "Wild", B(78, 58, 62, 26), MV.wild, 0.3, "Jurassic"),
  camarasaurus: FD("Camarasaurus", "camarasaurus", "Wild", B(72, 56, 60, 28), MV.wild, 0.35, "Jurassic"),
  mamenchisaurus: FD("Mamenchisaurus", "mamenchisaurus", "Wild", B(76, 54, 58, 26), MV.wild, 0.3, "Jurassic"),
  plesiosaurus: FD("Plesiosaurus", "plesiosaurus", "Aquatic", B(66, 58, 56, 44), MV.aqua, 0.3, "Jurassic"),
  liopleurodon: FD("Liopleurodon", "liopleurodon", "Aquatic", B(74, 76, 60, 42), ["crunch", "torrent", "tidalcrash"], 0.2, "Jurassic"),
  ophthalmosaurus: FD("Ophthalmosaurus", "ophthalmosaurus", "Aquatic", B(58, 54, 48, 62), ["bubblejet", "torrent", "blitz"], 0.35, "Jurassic"),
  tyrannosaurus: FD("Tyrannosaurus Rex", "tyrannosaurus", "Predator", B(82, 86, 64, 44), ["crunch", "maul", "intimidate", "apexfang"], 0.1, "Cretaceous"),
  giganotosaurus: FD("Giganotosaurus", "giganotosaurus", "Predator", B(80, 84, 60, 46), ["takedown", "maul", "apexfang"], 0.12, "Cretaceous"),
  spinosaurus: FD("Spinosaurus", "spinosaurus", "Aquatic", B(78, 80, 58, 48), ["maul", "torrent", "tidalcrash"], 0.15, "Cretaceous"),
  carnotaurus: FD("Carnotaurus", "carnotaurus", "Predator", B(66, 74, 52, 62), ["takedown", "crunch", "blitz"], 0.2, "Cretaceous"),
  velociraptor: FD("Velociraptor", "velociraptor", "Swift", B(52, 66, 42, 76), ["pounce", "firststrike", "blitz", "lightstep"], 0.3, "Cretaceous"),
  deinonychus: FD("Deinonychus", "deinonychus", "Swift", B(58, 70, 46, 70), ["pounce", "crunch", "blitz"], 0.25, "Cretaceous"),
  therizinosaurus: FD("Therizinosaurus", "therizinosaurus", "Canopy", B(72, 70, 58, 34), ["vineswing", "canopycrash", "harden"], 0.2, "Cretaceous"),
  gallimimus: FD("Gallimimus", "gallimimus", "Swift", B(54, 52, 44, 80), MV.swi, 0.35, "Cretaceous"),
  oviraptor: FD("Oviraptor", "oviraptor", "Swift", B(50, 56, 44, 64), ["quickdash", "peck", "blitz"], 0.35, "Cretaceous"),
  triceratops: FD("Triceratops", "triceratops", "Armor", B(74, 66, 76, 28), ["siegehorn", "ironhide", "harden"], 0.2, "Cretaceous"),
  styracosaurus: FD("Styracosaurus", "styracosaurus", "Armor", B(68, 64, 68, 32), MV.arm, 0.25, "Cretaceous"),
  protoceratops: FD("Protoceratops", "protoceratops", "Burrow", B(56, 50, 60, 30), MV.bur, 0.45, "Cretaceous"),
  pachycephalosaurus: FD("Pachycephalosaurus", "pachycephalosaurus", "Armor", B(62, 66, 62, 44), ["shellbash", "bodyslam", "siegehorn"], 0.3, "Cretaceous"),
  ankylosaurus: FD("Ankylosaurus", "ankylosaurus", "Armor", B(72, 56, 82, 16), ["ironhide", "harden", "siegehorn"], 0.2, "Cretaceous"),
  parasaurolophus: FD("Parasaurolophus", "parasaurolophus", "Wild", B(66, 56, 54, 46), ["bodyslam", "lullaby", "gigaslam"], 0.35, "Cretaceous"),
  iguanodon: FD("Iguanodon", "iguanodon", "Wild", B(68, 60, 58, 40), MV.wild, 0.35, "Cretaceous"),
  quetzalcoatlus: FD("Quetzalcoatlus", "quetzalcoatlus", "Aerial", B(70, 72, 52, 66), ["divebomb", "stormdive", "hurricane"], 0.15, "Cretaceous"),
  pteranodon: FD("Pteranodon", "pteranodon", "Aerial", B(58, 62, 46, 68), MV.aer, 0.25, "Cretaceous"),
  mosasaurus: FD("Mosasaurus", "mosasaurus", "Aquatic", B(80, 82, 62, 44), ["crunch", "torrent", "tidalcrash"], 0.12, "Cretaceous"),
});

// --- fossil zone ---
Object.assign(PALS, {
  fossil: { ground: "#d9c9a3", grass: "#c4a874", grass2: "#d0b585", tree: { bg: "#8a6f52", em: "🦴" }, mount: { bg: "#a08a68", em: "🏜️" }, water: "#4a9ac9", flower: "⛏️" },
});
Object.assign(ARENA, { fossil: "linear-gradient(#d9c9a3,#a08a68)" });

const ROWS_DIG = [
  "^^^^^^^^^^^^^^^^",
  "^..GGG....GGG..^",
  "^..GGG....GGG..^",
  "^.......!......^",
  "^GGGG......GGGG^",
  "^GGGG......GGGG^",
  "^..............^",
  "^..GGG....GGG..^",
  "^..GGG....GGG..^",
  "^^^^^^^s^^^^^^^^",
];
Object.assign(MAPS, {
  digsite: {
    name: "Fossil Rift Camp", zone: "fossil", music: "town",
    rows: [
      "^^^^^^^n^^^^^^^^",
      "^..............^",
      "^...!......!...^",
      "^..CC......MM..^",
      "^..............^",
      "^......!.......^",
      "e..............e",
      "^..............^",
      "^......*.......^",
      "^...!..........^",
      "^..............^",
      "^^^^^^^s^^^^^^^^",
    ],
    exits: {
      "0,6": { map: "route4", x: 14, y: 7 },
      "7,11": { map: "dig1", x: 7, y: 8 },
      "15,6": { map: "dig2", x: 7, y: 8 },
      "7,0": { map: "dig3", x: 7, y: 8 },
    },
  },
  dig1: {
    name: "Triassic Beds", zone: "fossil", music: "cave", rows: ROWS_DIG,
    exits: { "7,9": { map: "digsite", x: 7, y: 10 } },
    pool: [["coelophysis", 12], ["eoraptor", 12], ["lystrosaurus", 12], ["cynognathus", 10], ["plateosaurus", 10], ["placerias", 9], ["herrerasaurus", 8], ["desmatosuchus", 8], ["tanystropheus", 8], ["proganochelys", 7], ["postosuchus", 6], ["shonisaurus", 5]],
    lvl: [50, 53],
  },
  dig2: {
    name: "Jurassic Beds", zone: "fossil", music: "cave", rows: ROWS_DIG,
    exits: { "7,9": { map: "digsite", x: 14, y: 6 } },
    pool: [["compsognathus", 11], ["pterodactylus", 9], ["rhamphorhynchus", 9], ["camarasaurus", 8], ["archaeopteryx", 8], ["kentrosaurus", 7], ["diplodocus", 6], ["apatosaurus", 6], ["brontosaurus", 6], ["mamenchisaurus", 6], ["ceratosaurus", 6], ["dilophosaurus", 6], ["stegosaurus", 6], ["ophthalmosaurus", 6], ["plesiosaurus", 6], ["allosaurus", 5], ["cryolophosaurus", 4], ["brachiosaurus", 4], ["liopleurodon", 3]],
    lvl: [52, 55],
  },
  dig3: {
    name: "Cretaceous Beds", zone: "fossil", music: "cave", rows: ROWS_DIG,
    exits: { "7,9": { map: "digsite", x: 7, y: 1 } },
    pool: [["protoceratops", 10], ["gallimimus", 9], ["oviraptor", 9], ["parasaurolophus", 8], ["iguanodon", 8], ["velociraptor", 7], ["pachycephalosaurus", 7], ["styracosaurus", 6], ["deinonychus", 6], ["pteranodon", 6], ["carnotaurus", 5], ["therizinosaurus", 5], ["triceratops", 5], ["ankylosaurus", 4], ["spinosaurus", 3], ["quetzalcoatlus", 3], ["giganotosaurus", 2], ["mosasaurus", 2], ["tyrannosaurus", 2]],
    lvl: [54, 58],
  },
});
Object.assign(SIGNS, {
  "digsite:4,2": "🪧 'FOSSIL RIFT CAMP — where deep time leaks through. South: Triassic (252–201 Mya, the dawn). East: Jurassic (201–145 Mya, the giants). North: Cretaceous (145–66 Mya, the last act).'",
  "digsite:11,2": "🪧 'Not everything in the beds is a dinosaur! Pterosaurs ruled the air, marine reptiles the seas, and proto-mammals like Cynognathus were already watching from the ferns.'",
  "digsite:7,5": "🪧 'Dig etiquette: befriend, don't break. Every fossil friend you make walks out of extinction with you.'",
  "digsite:4,9": "🪧 'Camp rumor: the biggest hunters — Rex, Giganotosaurus, Mosasaurus — surface only rarely. Bring plenty of Trail Treats.'",
  "dig1:8,3": "🪧 'TRIASSIC: after the Great Dying, life rebuilt itself strange. Croc-cousins like Postosuchus ruled before dinosaurs did.'",
  "dig2:8,3": "🪧 'JURASSIC: sauropod necks like Mamenchisaurus's stretched 9 meters. Listen — you can almost hear the ferns being mowed.'",
  "dig3:8,3": "🪧 'CRETACEOUS: Quetzalcoatlus stood as tall as a giraffe and flew. Then the sky fell, 66 million years ago — but not today.'",
});
