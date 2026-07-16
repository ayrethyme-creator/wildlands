// ---------- CHAPTER VI — Part 9: THE MENAGERIE (sea, sky, small) ----------

// --- birds ---
const parrA = (o) => (er) => (
  <g>
    {o.crest && <g fill={o.crestC || o.body}><path d="M26,18 Q28,2 33,16 Z" /><path d="M32,16 Q36,1 40,15 Z" /><path d="M38,17 Q44,4 45,20 Z" /></g>}
    {o.longTail && <path d="M28,48 Q26,62 30,64 L36,64 Q40,62 36,48 Z" fill={o.tailC || o.body} />}
    <path d="M8,34 L22,28 L20,44 Z" fill={o.wingC || o.body} />
    <path d="M56,34 L42,28 L44,44 Z" fill={o.wingC || o.body} />
    <circle cx="32" cy="34" r="14" fill={o.body} />
    <path d="M18,34 A14,14 0 0 1 46,34 Z" fill={o.head || o.body} />
    {o.cheek && <g fill={o.cheekC || "#e8853a"}><circle cx="24" cy="38" r="3.4" /><circle cx="40" cy="38" r="3.4" /></g>}
    {o.face && <ellipse cx="32" cy="36" rx="9" ry="8" fill={o.face} />}
    {o.stripes && <g stroke={o.markC || "#26292e"} strokeWidth="1" fill="none"><path d="M24,26 L40,26 M23,29 L41,29 M23,32 L41,32" /></g>}
    <path d="M28,38 Q32,36 36,38 Q37,46 32,50 Q27,46 28,38 Z" fill={o.beakC || "#3c3630"} />
    <path d="M29,42 Q32,45 35,42" stroke={o.beakLow || "#26221c"} strokeWidth="1.2" fill="none" />
    <Eye x={25} y={32} r={2.4 * er} iris={o.iris || "#e8c547"} />
    <Eye x={39} y={32} r={2.4 * er} iris={o.iris || "#e8c547"} />
  </g>
);
const rapA = (o) => (er) => (
  <g>
    {o.tufts && <g fill={o.body}><path d="M20,18 L16,6 L27,16 Z" /><path d="M44,18 L48,6 L37,16 Z" /></g>}
    <path d="M6,32 L22,26 L19,42 Z" fill={o.wingC || o.body} />
    <path d="M58,32 L42,26 L45,42 Z" fill={o.wingC || o.body} />
    {o.disc ? <circle cx="32" cy="34" r="16" fill={o.body} /> : <circle cx="32" cy="34" r="14" fill={o.body} />}
    {o.disc && <g fill={o.discC || "#e8dcc3"}><circle cx="24" cy="33" r="8" /><circle cx="40" cy="33" r="8" /></g>}
    <path d="M18,32 A14,14 0 0 1 46,32 Z" fill={o.head || o.body} />
    {o.hood && <path d="M18,30 Q32,16 46,30 L44,36 Q32,26 20,36 Z" fill={o.hood} />}
    {o.brow && <path d="M21,28 Q32,23 43,28 L43,31 Q32,26 21,31 Z" fill={o.browC || "#c9b08a"} />}
    {o.ruff && <path d="M18,40 Q32,50 46,40 Q42,50 32,52 Q22,50 18,40 Z" fill={o.ruffC || "#e8dcc3"} />}
    {o.wattle && <ellipse cx="32" cy="44" rx="5" ry="4" fill={o.wattleC || "#c94a3a"} />}
    {o.plumes && <g stroke={o.plumeC || "#26221c"} strokeWidth="1.6" fill="none" strokeLinecap="round"><path d="M28,20 L22,8" /><path d="M36,20 L42,8" /></g>}
    <path d="M28,36 Q32,34 36,36 Q36,42 32,46 Q28,42 28,36 Z" fill={o.beakC || "#e8b03a"} />
    <path d="M32,40 Q34,44 31,47" stroke="#3c3226" strokeWidth="1.2" fill="none" />
    <Eye x={o.disc ? 24 : 25} y={o.disc ? 33 : 31} r={(o.disc ? 3.4 : 2.6) * er} iris={o.iris || "#e8a53a"} />
    <Eye x={o.disc ? 40 : 39} y={o.disc ? 33 : 31} r={(o.disc ? 3.4 : 2.6) * er} iris={o.iris || "#e8a53a"} />
  </g>
);
const birdA = (o) => (er) => (
  <g>
    {o.fan && <g fill={o.fanC || "#3a7ad9"}>{[-24, -12, 0, 12, 24].map((dx, i) => <g key={i}><path d={`M32,32 L${32 + dx},${10 + Math.abs(dx) * 0.3} L${34 + dx},${12 + Math.abs(dx) * 0.3} Z`} /><circle cx={32 + dx} cy={12 + Math.abs(dx) * 0.3} r="3" fill={o.eyeSpot || "#e8c547"} /></g>)}</g>}
    {o.plume && <g fill={o.plumeC || "#e8c547"}><path d="M26,18 Q28,4 32,16 Z" /><path d="M32,16 Q36,2 39,16 Z" /></g>}
    {o.longTail && <path d="M28,46 Q24,62 32,64 Q40,62 36,46 Z" fill={o.tailC || o.body} />}
    <path d="M8,34 L22,28 L20,44 Z" fill={o.wingC || o.body} />
    <path d="M56,34 L42,28 L44,44 Z" fill={o.wingC || o.body} />
    {o.neck && <path d="M28,30 Q26,14 32,10 Q38,14 36,30 Z" fill={o.neckC || o.body} />}
    <circle cx="32" cy="34" r="13" fill={o.body} />
    <path d="M19,34 A13,13 0 0 1 45,34 Z" fill={o.head || o.body} />
    {o.bib && <path d="M22,42 Q32,52 42,42 Q40,52 32,54 Q24,52 22,42 Z" fill={o.bib} />}
    {o.mask && <path d="M20,30 Q32,24 44,30 L44,35 Q32,29 20,35 Z" fill={o.mask} />}
    {o.pouch && <path d="M28,44 Q32,58 40,54 Q38,44 34,42 Z" fill={o.pouchC || "#e8b03a"} />}
    {o.bill === "big" && <path d="M30,36 Q56,32 58,40 Q40,52 29,44 Z" fill={o.beakC || "#e8a53a"} />}
    {o.bill === "long" && <path d="M30,38 L32,62 L35,38 Z" fill={o.beakC || "#3c3630"} />}
    {o.bill === "spoon" && <g fill={o.beakC || "#3c3630"}><path d="M30,38 L31,54 L34,54 L34,38 Z" /><ellipse cx="32" cy="57" rx="5" ry="4" /></g>}
    {o.bill === "shoe" && <path d="M25,38 Q32,36 39,38 Q41,52 32,56 Q23,52 25,38 Z" fill={o.beakC || "#c9b08a"} />}
    {o.bill === "hook" && <path d="M28,38 Q32,36 36,38 Q37,46 32,50 Q27,46 28,38 Z" fill={o.beakC || "#e8a53a"} />}
    {(!o.bill || o.bill === "cone") && <path d="M28,38 L32,50 L36,38 Z" fill={o.beakC || "#e8a53a"} />}
    <Eye x={25} y={31} r={2.5 * er} iris={o.iris || "#3c3226"} />
    <Eye x={39} y={31} r={2.5 * er} iris={o.iris || "#3c3226"} />
  </g>
);
// --- insects ---
const insA = (o) => (er) => (
  <g>
    <g stroke={o.antC || o.body} strokeWidth="1.4" fill="none" strokeLinecap="round">
      {o.clubAnt ? <g><path d="M27,20 Q22,10 18,8" /><path d="M37,20 Q42,10 46,8" /><circle cx="17" cy="7" r="2.4" fill={o.antC || o.body} /><circle cx="47" cy="7" r="2.4" fill={o.antC || o.body} /></g>
        : <g><path d="M27,20 Q22,10 16,6" /><path d="M37,20 Q42,10 48,6" /></g>}
    </g>
    <g stroke={o.legC || o.body} strokeWidth="1.8" fill="none" strokeLinecap="round">
      <path d="M22,32 Q10,30 6,22" /><path d="M22,40 Q8,42 4,50" /><path d="M42,32 Q54,30 58,22" /><path d="M42,40 Q56,42 60,50" />
    </g>
    {o.raptorial && <g stroke={o.armC || o.body} strokeWidth="3" fill="none" strokeLinecap="round"><path d="M24,34 Q14,36 12,26 L16,22" /><path d="M40,34 Q50,36 52,26 L48,22" /></g>}
    {o.wings && <g fill={o.wingC || "#c9d4a8"} opacity=".75"><ellipse cx="20" cy="42" rx="9" ry="16" transform="rotate(-18 20 42)" /><ellipse cx="44" cy="42" rx="9" ry="16" transform="rotate(18 44 42)" /></g>}
    {o.longWings && <g fill={o.wingC || "#8fd9e8"} opacity=".6"><ellipse cx="14" cy="30" rx="14" ry="5" transform="rotate(-12 14 30)" /><ellipse cx="50" cy="30" rx="14" ry="5" transform="rotate(12 50 30)" /><ellipse cx="16" cy="40" rx="12" ry="4" transform="rotate(8 16 40)" /><ellipse cx="48" cy="40" rx="12" ry="4" transform="rotate(-8 48 40)" /></g>}
    <ellipse cx="32" cy="26" rx="8" ry="7" fill={o.head || o.body} />
    <ellipse cx="32" cy="42" rx="11" ry="16" fill={o.body} />
    {o.bands && <g stroke={o.markC || "#26221c"} strokeWidth="3" fill="none"><path d="M22,38 Q32,41 42,38" /><path d="M22,46 Q32,49 42,46" /><path d="M24,54 Q32,56 40,54" /></g>}
    {o.spots && <g fill={o.markC || "#26221c"}><circle cx="27" cy="38" r="2.2" /><circle cx="37" cy="38" r="2.2" /><circle cx="32" cy="48" r="2.2" /><circle cx="27" cy="54" r="1.8" /><circle cx="37" cy="54" r="1.8" /></g>}
    {o.horn && <path d="M30,20 Q32,4 38,10 Q34,14 34,20 Z" fill={o.hornC || o.body} />}
    {o.mandibles && <g fill={o.hornC || o.body}><path d="M26,22 Q18,12 22,6 Q26,14 30,20 Z" /><path d="M38,22 Q46,12 42,6 Q38,14 34,20 Z" /></g>}
    {o.glow && <ellipse cx="32" cy="56" rx="6" ry="4" fill={o.glowC || "#c9e84a"} opacity=".9" />}
    <Eye x={28} y={25} r={2.4 * er} iris={o.iris || "#26221c"} />
    <Eye x={36} y={25} r={2.4 * er} iris={o.iris || "#26221c"} />
  </g>
);
const flutA = (o) => (er) => (
  <g>
    <g fill={o.wingC} opacity={o.trans ? 0.55 : 1}>
      <path d="M30,32 Q6,10 4,28 Q2,44 28,40 Z" />
      <path d="M34,32 Q58,10 60,28 Q62,44 36,40 Z" />
      <path d="M30,40 Q10,46 12,58 Q22,62 30,46 Z" />
      <path d="M34,40 Q54,46 52,58 Q42,62 34,46 Z" />
    </g>
    {o.veins && <g stroke={o.veinC || "#26221c"} strokeWidth="1.2" fill="none"><path d="M28,34 Q16,26 8,26 M28,38 Q14,40 6,34 M30,44 Q20,50 14,56" /><path d="M36,34 Q48,26 56,26 M36,38 Q50,40 58,34 M34,44 Q44,50 50,56" /></g>}
    {o.eyeSpots && <g><circle cx="16" cy="28" r="4.5" fill={o.spotC || "#3a5cd9"} /><circle cx="16" cy="28" r="2" fill="#f2ede0" /><circle cx="48" cy="28" r="4.5" fill={o.spotC || "#3a5cd9"} /><circle cx="48" cy="28" r="2" fill="#f2ede0" /></g>}
    {o.tails && <g fill={o.wingC}><path d="M22,54 Q16,64 20,62 Q24,58 26,50 Z" /><path d="M42,54 Q48,64 44,62 Q40,58 38,50 Z" /></g>}
    <g stroke={o.antC || "#3c3226"} strokeWidth="1.2" fill="none" strokeLinecap="round">
      {o.feathery ? <g><path d="M30,22 Q24,12 18,10 M26,17 L22,14 M28,20 L23,18" /><path d="M34,22 Q40,12 46,10 M38,17 L42,14 M36,20 L41,18" /></g>
        : <g><path d="M30,22 Q26,10 20,7" /><path d="M34,22 Q38,10 44,7" /></g>}
    </g>
    <ellipse cx="32" cy="38" rx="4" ry="14" fill={o.body || "#3c3226"} />
    <circle cx="32" cy="24" r="4.5" fill={o.body || "#3c3226"} />
    <Eye x={29.5} y={23} r={1.8 * er} iris={o.iris || "#26221c"} />
    <Eye x={34.5} y={23} r={1.8 * er} iris={o.iris || "#26221c"} />
  </g>
);
// --- reptiles & amphibians ---
const lizA = (o) => (er) => (
  <g>
    {o.frill && <ellipse cx="32" cy="34" rx="24" ry="20" fill={o.frillC || o.hide} />}
    {o.sail && <path d="M12,34 Q20,12 32,10 Q44,12 52,34 Z" fill={o.sailC || o.hide} opacity=".9" />}
    {o.crest && <path d="M22,22 L25,10 L28,20 L32,8 L36,20 L39,10 L42,22 Z" fill={o.crestC || o.hide} />}
    <ellipse cx="32" cy="36" rx="16" ry="13" fill={o.hide} />
    {o.spikes && <g fill={o.spikeC || o.hide}>{[-14, -7, 0, 7, 14].map((dx, i) => <path key={i} d={`M${30 + dx},26 l2,-8 l3,8 Z`} />)}</g>}
    {o.bands && <g stroke={o.markC || "#3c3226"} strokeWidth="2.4" fill="none"><path d="M20,32 Q32,36 44,32" /><path d="M22,40 Q32,44 42,40" /></g>}
    {o.spots && <g fill={o.markC || "#e8c547"}><circle cx="24" cy="32" r="2" /><circle cx="40" cy="32" r="2" /><circle cx="32" cy="40" r="2" /></g>}
    {o.dewlap && <path d="M32,46 Q26,56 32,58 Q38,56 32,46 Z" fill={o.dewC || "#c94a3a"} />}
    <path d="M22,42 Q32,50 42,42 L42,46 Q32,53 22,46 Z" fill={o.jaw || o.hide} />
    {o.teeth && teethRow(42.5, 24, 5, 3.4)}
    <Eye x={24} y={33} r={2.4 * er} iris={o.iris || "#e8c547"} />
    <Eye x={40} y={33} r={2.4 * er} iris={o.iris || "#e8c547"} />
  </g>
);
const snakeA = (o) => (er) => (
  <g>
    <path d="M10,60 Q4,50 12,44 Q22,36 32,42 Q44,50 54,42" stroke={o.hide} strokeWidth="8" fill="none" strokeLinecap="round" />
    {o.hood && <path d="M14,30 Q32,6 50,30 Q50,44 32,46 Q14,44 14,30 Z" fill={o.hoodC || o.hide} />}
    {o.hoodMark && <g fill={o.markC || "#3c3226"}><circle cx="26" cy="24" r="3.4" /><circle cx="38" cy="24" r="3.4" /><path d="M26,28 Q32,34 38,28" stroke={o.markC || "#3c3226"} strokeWidth="2" fill="none" /></g>}
    <ellipse cx="32" cy="32" rx="12" ry="10" fill={o.hide} />
    {o.diamond && <g fill={o.markC || "#4c3826"}><path d="M22,34 L26,30 L30,34 L26,38 Z" /><path d="M34,34 L38,30 L42,34 L38,38 Z" /></g>}
    {o.bands && <g stroke={o.markC || "#e8c547"} strokeWidth="2.4" fill="none"><path d="M22,36 Q32,41 42,36" /><path d="M24,29 Q32,33 40,29" /></g>}
    {o.pits && <g fill="#26221c"><circle cx="26" cy="38" r="1.2" /><circle cx="38" cy="38" r="1.2" /></g>}
    <path d="M29,40 L32,45 L35,40 Z" fill={o.snout || o.hide} />
    <path d="M32,45 L32,52 M32,49 L28,53 M32,49 L36,53" stroke={o.tongueC || "#c0392b"} strokeWidth="1.3" fill="none" strokeLinecap="round" />
    {o.rattle && <g fill={o.rattleC || "#c9b08a"}><path d="M54,42 l6,-3 l0,6 Z" /><path d="M58,40 l5,-2 l0,5 Z" /></g>}
    <Eye x={26} y={31} r={2.4 * er} iris={o.iris || "#e8c547"} />
    <Eye x={38} y={31} r={2.4 * er} iris={o.iris || "#e8c547"} />
  </g>
);
const frogA = (o) => (er) => (
  <g>
    <g stroke={o.legC || o.skin} strokeWidth="4" fill="none" strokeLinecap="round">
      <path d="M20,44 Q8,48 6,58" /><path d="M44,44 Q56,48 58,58" />
    </g>
    {o.toes && <g fill={o.toeC || "#e8c547"}><circle cx="6" cy="59" r="3" /><circle cx="58" cy="59" r="3" /></g>}
    <ellipse cx="32" cy="42" rx="17" ry="14" fill={o.skin} />
    {o.belly && <ellipse cx="32" cy="48" rx="10" ry="6" fill={o.belly} />}
    {o.spots && <g fill={o.markC || "#26221c"}><circle cx="22" cy="40" r="3" /><circle cx="42" cy="40" r="3" /><circle cx="32" cy="48" r="2.6" /><circle cx="27" cy="50" r="2" /></g>}
    {o.stripes && <g fill={o.markC || "#e8c547"}><path d="M20,36 Q32,32 44,36 L44,40 Q32,36 20,40 Z" /><path d="M22,46 Q32,50 42,46 L42,50 Q32,54 22,50 Z" /></g>}
    {o.gills && <g stroke={o.gillC || "#e8a5b5"} strokeWidth="2" fill="none" strokeLinecap="round"><path d="M16,32 Q8,26 4,28 M16,36 Q6,34 2,38" /><path d="M48,32 Q56,26 60,28 M48,36 Q58,34 62,38" /></g>}
    <path d="M22,48 Q32,54 42,48" stroke={o.mouth || "#3c3226"} strokeWidth="1.4" fill="none" strokeLinecap="round" />
    <circle cx="24" cy="30" r="6" fill={o.skin} /><circle cx="40" cy="30" r="6" fill={o.skin} />
    <Eye x={24} y={30} r={3.4 * er} iris={o.iris || "#e8c547"} />
    <Eye x={40} y={30} r={3.4 * er} iris={o.iris || "#e8c547"} />
  </g>
);

Object.assign(ART, {
  // sharks
  greatwhite: sharkA({ hide: "#8a949a", belly: "#f2ede0", teeth: true, tallFin: true }),
  whaleshark: sharkA({ hide: "#3c5468", belly: "#c4d0d9", spots: true, markC: "#e8e4d8" }),
  hammerhead: sharkA({ hide: "#7a8a94", belly: "#e8e4d8", hammer: true }),
  tigershark: sharkA({ hide: "#5c6b74", belly: "#e8e4d8", stripes: true, markC: "#3c4c54", teeth: true }),
  bullshark: sharkA({ hide: "#8a8f94", belly: "#e8e4d8", teeth: true }),
  makoshark: sharkA({ hide: "#3a5cd9", belly: "#f2ede0", tallFin: true, teeth: true }),
  thresher: sharkA({ hide: "#4c5c6b", belly: "#d9d4c4", finC: "#3c4c5c" }),
  baskingshark: sharkA({ hide: "#5c5c54", belly: "#a8a89a" }),
  nurseshark: sharkA({ hide: "#8a7a5c", belly: "#c9bda3" }),
  reefshark: sharkA({ hide: "#6b7a84", belly: "#e8e4d8", tallFin: true }),
  goblinshark: sharkA({ hide: "#d9a5a5", belly: "#e8c9c4", teeth: true }),
  frilledshark: sharkA({ hide: "#5c4c44", belly: "#8a7a6b", teeth: true }),
  wobbegong: sharkA({ hide: "#a8906b", belly: "#c9bda3", spots: true, markC: "#5c4c3c" }),
  greenlandshark: sharkA({ hide: "#4c5450", belly: "#7a827c", teeth: true }),
  zebrashark: sharkA({ hide: "#d9c48a", belly: "#e8dcc3", spots: true, markC: "#5c4436" }),
  epaulette: sharkA({ hide: "#c9b085", belly: "#e8dcc3", spots: true, markC: "#3c3226" }),
  // rays
  mantaray: rayA({ hide: "#3c4c5c", horns: true, spots: true, markC: "#f2ede0" }),
  stingray: rayA({ hide: "#a89078", barb: true, iris: "#3c3226" }),
  eagleray: rayA({ hide: "#3c4438", spots: true, markC: "#e8e4d8", barb: true }),
  sawfish: rayA({ hide: "#8a8578", tailC: "#8a8578" }),
  electricray: rayA({ hide: "#5c6b7a", spots: true, markC: "#8fd9e8" }),
  // bony fish
  clownfish: fishA({ body: "#e8853a", stripes: true, markC: "#f8f4ea", finC: "#26221c" }),
  mandarinfish: fishA({ body: "#3a7ad9", bands: true, markC: "#e8853a", finC: "#3ad9a4" }),
  lionfish: fishA({ body: "#c9704a", stripes: true, markC: "#f2ede0", sail: true, finC: "#8a4a3a" }),
  pufferfish: fishA({ body: "#c9b085", puff: true, spots: true, markC: "#3c3226", bigEye: true }),
  boxfish: fishA({ body: "#e8c547", spots: true, markC: "#26292e", bigEye: true }),
  parrotfish: fishA({ body: "#3ad9a4", beak: true, beakC: "#8fd9e8", finC: "#3a7ad9", bands: true, markC: "#c95c9a" }),
  wrasse: fishA({ body: "#3a9ad9", bands: true, markC: "#e8c547", finC: "#2a7ab5" }),
  triggerfish: fishA({ body: "#3c4c5c", spots: true, markC: "#e8c547", sail: true }),
  angelfish: fishA({ body: "#e8c547", sail: true, bands: true, markC: "#26292e", finC: "#e8853a" }),
  butterflyfish: fishA({ body: "#e8d44a", bands: true, markC: "#26292e", finC: "#e8a53a" }),
  moray: fishA({ body: "#5c6b44", spots: true, markC: "#e8c547", teeth: true, finC: "#4c5838" }),
  swordfish: fishA({ body: "#3c5468", bill: true, sail: true, finC: "#2a4458" }),
  marlin: fishA({ body: "#3a5cd9", bill: true, sail: true, finC: "#2a44a8", bands: true, markC: "#8fd9e8" }),
  anglerfish: fishA({ body: "#3c3630", lure: true, lureC: "#8fd9e8", teeth: true, bigEye: true, finC: "#26221c" }),
  barracuda: fishA({ body: "#a8b0b5", teeth: true, finC: "#8a9299", bands: true, markC: "#5c6870" }),
  grouper: fishA({ body: "#8a6b4a", spots: true, markC: "#e8dcc3", bigEye: true }),
  oarfish: fishA({ body: "#c9c4b5", sail: true, finC: "#c94a3a", spots: true, markC: "#8a8578" }),
  sunfishmola: fishA({ body: "#a8a89a", sail: true, finC: "#8a8a7c", bigEye: true }),
  flyingfish: fishA({ body: "#5c8aa3", sail: true, finC: "#8fd9e8" }),
  mandarin_dragonet: fishA({ body: "#e8853a", bands: true, markC: "#3a7ad9", finC: "#3ad9a4" }),
  coelacanth: fishA({ body: "#4c5c7a", spots: true, markC: "#c9d4e8", finC: "#3c4c68", bigEye: true }),
  axolotl: frogA({ skin: "#e8c9d4", gills: true, gillC: "#e8859a", iris: "#26221c", toes: true, toeC: "#e8c9d4" }),
  // seahorses
  seahorse: shorseA({ body: "#e8a53a", rings: true, markC: "#c9853a", crown: true }),
  leafyseadragon: shorseA({ body: "#c9a03a", leafy: true, leafC: "#8fb35c", iris: "#3ad9a4" }),
  weedyseadragon: shorseA({ body: "#c9503a", leafy: true, leafC: "#8a4a3a", rings: true, markC: "#e8c547" }),
  pipefish: shorseA({ body: "#8fb35c", rings: true, markC: "#5c7a3c" }),
  // jellies
  moonjelly: jellyA({ bell: "#a8d4e8", tentC: "#8fc4d9", frill: true }),
  boxjelly: jellyA({ bell: "#c9e8d4", cube: true, tentC: "#8fd9b5" }),
  lionsmane: jellyA({ bell: "#c9704a", tentC: "#e8853a", thick: true, frill: true, frillC: "#e8a53a" }),
  // cephalopods
  octopus: cephA({ hide: "#c9704a", warts: true, bigEye: true, markC: "#8a4a3a" }),
  mimicoctopus: cephA({ hide: "#c9b085", warts: true, bands: true, markC: "#5c4436", bigEye: true }),
  cuttlefish: cephA({ hide: "#8a7a9c", fins: true, finC: "#a894b5", bigEye: true, iris: "#3ad9a4" }),
  giantsquid: cephA({ hide: "#c9505c", squid: true, fins: true, finC: "#a33c48", bigEye: true }),
  nautilus: cephA({ hide: "#e8c9a5", shell: true, shellC: "#f2ede0", bandC: "#c9704a" }),
  // crustaceans
  coconutcrab: crabA({ shell: "#8a4a3a", bigClaw: true, clawC: "#a35c44", iris: "#26221c" }),
  fiddlercrab: crabA({ shell: "#5c6b7a", bigClaw: true, clawC: "#e8853a" }),
  hermitcrab: crabA({ shell: "#c9704a", clawC: "#e8955c", bands: true, markC: "#e8dcc3" }),
  spidercrab: crabA({ shell: "#a8906b", clawC: "#8a7458" }),
  lobster: crabA({ shell: "#3a5cd9", lobster: true, bigClaw: true, clawC: "#2a44a8", bands: true }),
  mantisshrimp: crabA({ shell: "#3ad9a4", lobster: true, clawC: "#c95c9a", bands: true, markC: "#e8c547", iris: "#e8c547" }),
  // parrots
  scarletmacaw: parrA({ body: "#d94a3a", wingC: "#3a5cd9", head: "#d94a3a", face: "#f2ede0", longTail: true, tailC: "#c93a2a", beakC: "#e8e4d8" }),
  hyacinthmacaw: parrA({ body: "#3a5cd9", wingC: "#2a44a8", longTail: true, tailC: "#2a44a8", cheek: true, cheekC: "#e8c547", beakC: "#26221c" }),
  bluegoldmacaw: parrA({ body: "#3a7ad9", wingC: "#2a5ca8", head: "#8fd9b5", face: "#f2ede0", longTail: true, tailC: "#e8c547", beakC: "#26221c" }),
  militarymacaw: parrA({ body: "#4c9a3c", wingC: "#3a7a2c", head: "#4c9a3c", face: "#e8c9c4", longTail: true, tailC: "#c94a3a", beakC: "#3c3630" }),
  africangrey: parrA({ body: "#a8a8a0", wingC: "#8a8a82", face: "#f2ede0", longTail: true, tailC: "#c94a3a", beakC: "#26221c", iris: "#e8d44a" }),
  cockatoo: parrA({ body: "#f5f2e8", wingC: "#e8e4d8", crest: true, crestC: "#e8c547", beakC: "#3c3630", iris: "#3c3226" }),
  blackcockatoo: parrA({ body: "#3c3630", wingC: "#26221c", crest: true, crestC: "#3c3630", cheek: true, cheekC: "#c94a3a", beakC: "#8a8578" }),
  cockatiel: parrA({ body: "#c9b894", wingC: "#a89878", head: "#e8c547", crest: true, crestC: "#e8c547", cheek: true, cheekC: "#e8853a", beakC: "#8a8578" }),
  budgie: parrA({ body: "#8fd94a", wingC: "#6bb53a", head: "#e8d44a", stripes: true, markC: "#26292e", beakC: "#c9bda3" }),
  lorikeet: parrA({ body: "#3a7ad9", wingC: "#4c9a3c", head: "#3a5cd9", cheek: true, cheekC: "#e8853a", beakC: "#e8853a" }),
  kea: parrA({ body: "#5c7a4c", wingC: "#e8853a", head: "#4c6b3c", beakC: "#3c3630", iris: "#3c3226" }),
  kakapo: parrA({ body: "#8fb35c", wingC: "#6b8a44", face: "#c9c48a", beakC: "#c9bda3", iris: "#3c3226" }),
  eclectus: parrA({ body: "#c94a3a", wingC: "#3a5cd9", head: "#c94a3a", beakC: "#26221c" }),
  conure: parrA({ body: "#e8a53a", wingC: "#4c9a3c", head: "#e8853a", longTail: true, tailC: "#3a7ad9", beakC: "#3c3630" }),
  rosella: parrA({ body: "#c94a3a", wingC: "#3a5cd9", head: "#c94a3a", cheek: true, cheekC: "#f2ede0", beakC: "#c9bda3" }),
  quakerparrot: parrA({ body: "#8fb35c", wingC: "#6b8a44", face: "#c9c4b5", beakC: "#e8b03a" }),
  // raptors
  baldeagle: rapA({ body: "#5c4030", wingC: "#3c2a1e", head: "#f5f2e8", beakC: "#e8c547", iris: "#e8c547", brow: true, browC: "#f5f2e8" }),
  goldeneagle: rapA({ body: "#6b5240", wingC: "#4c3a2a", head: "#c9a03a", beakC: "#3c3630", brow: true, browC: "#8a6f42" }),
  harpyeagle: rapA({ body: "#5c5c54", wingC: "#3c3c38", head: "#a8a89a", tufts: true, ruff: true, ruffC: "#c4c0b0", beakC: "#26221c", iris: "#3c3226" }),
  philippineeagle: rapA({ body: "#8a6f52", wingC: "#5c4436", head: "#e8dcc3", plumes: true, plumeC: "#c9b08a", beakC: "#3c5468", iris: "#8fb3d9" }),
  stellerseagle: rapA({ body: "#26221c", wingC: "#16140f", head: "#f5f2e8", beakC: "#e8a53a", iris: "#e8c547" }),
  peregrine: rapA({ body: "#5c6b7a", wingC: "#3c4c5c", head: "#3c4c5c", hood: "#26292e", beakC: "#e8c547", iris: "#3c3226" }),
  osprey: rapA({ body: "#5c4c3c", wingC: "#3c3226", head: "#f2ede0", hood: "#5c4c3c", beakC: "#26221c", iris: "#e8c547" }),
  redtailhawk: rapA({ body: "#8a6142", wingC: "#5c4030", head: "#a3785c", beakC: "#e8c547", iris: "#8a5c2a" }),
  harrier: rapA({ body: "#a8a8a0", wingC: "#8a8a82", head: "#c4c0b0", disc: true, discC: "#e8e4d8", beakC: "#e8c547" }),
  snowyowl: rapA({ body: "#f5f2e8", wingC: "#e8e4d8", disc: true, discC: "#f8f4ea", beakC: "#3c3630", iris: "#e8c547" }),
  barnowl: rapA({ body: "#c9b894", wingC: "#a89878", disc: true, discC: "#f5f2e8", beakC: "#c9bda3", iris: "#26221c" }),
  greathornedowl: rapA({ body: "#8a7458", wingC: "#5c4c3c", tufts: true, disc: true, discC: "#c9a878", beakC: "#3c3630", iris: "#e8a53a" }),
  condor: rapA({ body: "#26221c", wingC: "#16140f", head: "#e8b5a5", ruff: true, ruffC: "#f5f2e8", beakC: "#c9bda3", wattle: true, wattleC: "#c94a3a" }),
  secretarybird: rapA({ body: "#a8a8a0", wingC: "#26221c", head: "#e8dcc3", plumes: true, plumeC: "#26221c", beakC: "#e8a53a", iris: "#c9853a" }),
  caracara: rapA({ body: "#3c3630", wingC: "#26221c", head: "#e8dcc3", beakC: "#8fb3d9", wattle: true, wattleC: "#e8853a" }),
  goshawk: rapA({ body: "#5c6b74", wingC: "#3c4c54", head: "#4c5c68", brow: true, browC: "#f2ede0", beakC: "#3c3630", iris: "#c94a3a" }),
  // other birds
  toucan: birdA({ body: "#26221c", wingC: "#16140f", bib: "#e8d44a", bill: "big", beakC: "#e8853a", iris: "#8fd9e8" }),
  kingfisher: birdA({ body: "#3a7ad9", wingC: "#2a5ca8", head: "#3a5cd9", bib: "#e8853a", bill: "long", beakC: "#26221c" }),
  peacock: birdA({ body: "#3a5cd9", wingC: "#2a7a8a", head: "#3a5cd9", fan: true, fanC: "#3a8a6b", eyeSpot: "#e8c547", plume: true, plumeC: "#3a5cd9", beakC: "#c9bda3" }),
  quetzal: birdA({ body: "#3ad9a4", wingC: "#2ab585", bib: "#c94a3a", plume: true, plumeC: "#3ad9a4", longTail: true, tailC: "#3ad9a4", beakC: "#e8c547" }),
  birdofparadise: birdA({ body: "#e8853a", wingC: "#c9622a", head: "#e8d44a", bib: "#3a8a4c", longTail: true, tailC: "#f2ede0", beakC: "#8fd9e8" }),
  lyrebird: birdA({ body: "#8a7458", wingC: "#5c4c3c", longTail: true, tailC: "#c9b894", beakC: "#3c3630" }),
  hummingbird: birdA({ body: "#3ad9a4", wingC: "#2ab585", head: "#c94a3a", bill: "long", beakC: "#26221c" }),
  crane: birdA({ body: "#e8e4d8", wingC: "#c4c0b0", head: "#f5f2e8", neck: true, neckC: "#e8e4d8", mask: "#c94a3a", bill: "long", beakC: "#c9bda3" }),
  heron: birdA({ body: "#8a9aa8", wingC: "#6b7a88", head: "#c9d4dc", neck: true, neckC: "#8a9aa8", plumes: true, bill: "long", beakC: "#e8c547" }),
  stork: birdA({ body: "#f2ede0", wingC: "#26221c", neck: true, neckC: "#f2ede0", bill: "long", beakC: "#c94a3a" }),
  shoebill: birdA({ body: "#8a9099", wingC: "#6b7078", head: "#9aa0a8", bill: "shoe", beakC: "#c9b08a", iris: "#e8e4d8" }),
  pelican: birdA({ body: "#e8e4d8", wingC: "#c4c0b0", pouch: true, pouchC: "#e8b03a", bill: "long", beakC: "#e8c547" }),
  spoonbill: birdA({ body: "#e8a5b5", wingC: "#d9859a", bill: "spoon", beakC: "#8a8578" }),
  ibis: birdA({ body: "#c94a3a", wingC: "#a33428", neck: true, neckC: "#c94a3a", bill: "long", beakC: "#8a3428" }),
  albatross: birdA({ body: "#f2ede0", wingC: "#5c6b74", bill: "hook", beakC: "#e8c9a5" }),
  puffin: birdA({ body: "#26221c", wingC: "#16140f", head: "#f5f2e8", bib: "#f5f2e8", bill: "big", beakC: "#e8853a", iris: "#3c3226" }),
  frigatebird: birdA({ body: "#26221c", wingC: "#16140f", pouch: true, pouchC: "#c94a3a", bill: "hook", beakC: "#5c5448" }),
  bluefootedbooby: birdA({ body: "#c9b894", wingC: "#8a7458", head: "#e8dcc3", bill: "long", beakC: "#8fb3d9", iris: "#e8d44a" }),
  ostrich: birdA({ body: "#3c3630", wingC: "#f5f2e8", head: "#e8b5a5", neck: true, neckC: "#e8b5a5", beakC: "#e8b03a", iris: "#3c3226" }),
  emu: birdA({ body: "#6b5c4c", wingC: "#5c4c3c", head: "#3c4c5c", neck: true, neckC: "#5c6b7a", beakC: "#3c3630" }),
  cassowary: birdA({ body: "#26221c", wingC: "#16140f", head: "#3a5cd9", neck: true, neckC: "#3a5cd9", plume: true, plumeC: "#8a6f42", bib: "#c94a3a", beakC: "#5c5448" }),
  kiwi: birdA({ body: "#8a7458", wingC: "#6b5844", bill: "long", beakC: "#c9b08a", iris: "#26221c" }),
  roadrunner: birdA({ body: "#a8987a", wingC: "#8a7458", head: "#8a7458", plume: true, plumeC: "#5c4c3c", longTail: true, tailC: "#8a7458", beakC: "#3c3630" }),
  hoatzin: birdA({ body: "#8a6f52", wingC: "#5c4436", head: "#3a7ad9", plume: true, plumeC: "#c9853a", bib: "#c9853a", beakC: "#3c3630", iris: "#c94a3a" }),
  kookaburra: birdA({ body: "#c9b894", wingC: "#3a5cd9", head: "#e8dcc3", mask: "#5c4c3c", bill: "long", beakC: "#3c3630" }),
  potoo: birdA({ body: "#8a7a68", wingC: "#6b5c4c", mask: "#5c4c3c", beakC: "#5c4c3c", iris: "#e8c547" }),
  mandarinduck: birdA({ body: "#e8853a", wingC: "#3a5cd9", head: "#3a8a6b", plume: true, plumeC: "#c94a3a", bib: "#f2ede0", beakC: "#c94a3a" }),
  swan: birdA({ body: "#f8f4ea", wingC: "#e8e4d8", neck: true, neckC: "#f8f4ea", beakC: "#e8853a", mask: "#26221c" }),
  loon: birdA({ body: "#26221c", wingC: "#3c3630", bib: "#f5f2e8", neck: true, neckC: "#26221c", bill: "long", beakC: "#26221c", iris: "#c94a3a" }),
  emperorpenguin: birdA({ body: "#3c4c54", wingC: "#26343c", head: "#26221c", bib: "#e8d44a", bill: "long", beakC: "#e8853a" }),
  woodpecker: birdA({ body: "#26221c", wingC: "#f5f2e8", head: "#c94a3a", plume: true, plumeC: "#c94a3a", bill: "long", beakC: "#5c5448" }),
  raven: birdA({ body: "#26292e", wingC: "#16181c", head: "#26292e", bill: "hook", beakC: "#16140f", iris: "#3c3226" }),
  // insects & pollinators
  honeybee: insA({ body: "#e8c547", head: "#3c3630", bands: true, markC: "#3c3630", wings: true, wingC: "#e8e4d8", clubAnt: true, antC: "#3c3630" }),
  bumblebee: insA({ body: "#26221c", head: "#26221c", bands: true, markC: "#e8c547", wings: true, wingC: "#e8e4d8", antC: "#26221c" }),
  orchidbee: insA({ body: "#3ad9a4", head: "#2ab585", wings: true, wingC: "#c9e8dc", antC: "#26221c" }),
  masonbee: insA({ body: "#3c5468", head: "#26343c", wings: true, wingC: "#d9d4c4", antC: "#26221c" }),
  hoverfly: insA({ body: "#e8c547", head: "#3c3630", bands: true, markC: "#26221c", wings: true, wingC: "#e8e4d8", clubAnt: true }),
  monarch: flutA({ wingC: "#e8853a", veins: true, veinC: "#26221c", body: "#26221c", antC: "#26221c" }),
  bluemorpho: flutA({ wingC: "#3a5cd9", veins: true, veinC: "#2a3c8a", body: "#26221c", antC: "#26221c" }),
  swallowtail: flutA({ wingC: "#e8d44a", veins: true, veinC: "#26221c", tails: true, body: "#26221c" }),
  glasswing: flutA({ wingC: "#c9d4dc", trans: true, veins: true, veinC: "#8a6f52", body: "#5c4436" }),
  birdwing: flutA({ wingC: "#3ad9a4", veins: true, veinC: "#26221c", body: "#e8c547", eyeSpots: true, spotC: "#e8853a" }),
  lunamoth: flutA({ wingC: "#c9e88a", veins: true, veinC: "#8fb35c", tails: true, feathery: true, body: "#f2ede0", eyeSpots: true, spotC: "#e8c547" }),
  atlasmoth: flutA({ wingC: "#a3562a", veins: true, veinC: "#5c3020", feathery: true, body: "#8a4a2a", eyeSpots: true, spotC: "#e8dcc3" }),
  hawkmoth: flutA({ wingC: "#8a7a5c", veins: true, veinC: "#5c4c3c", feathery: true, body: "#c9b08a" }),
  dragonfly: insA({ body: "#3ad9a4", head: "#2ab585", longWings: true, wingC: "#c9e8dc", iris: "#3a5cd9" }),
  damselfly: insA({ body: "#3a7ad9", head: "#2a5ca8", longWings: true, wingC: "#d4e8f2" }),
  mantis: insA({ body: "#8fb35c", head: "#a3c46b", raptorial: true, armC: "#8fb35c", wings: true, wingC: "#c9e8a8", iris: "#e8c547" }),
  orchidmantis: insA({ body: "#f2ede0", head: "#f8f4ea", raptorial: true, armC: "#e8c9d4", wings: true, wingC: "#f8f4ea", iris: "#e8a5b5" }),
  stickinsect: insA({ body: "#8a7a5c", head: "#8a7a5c", legC: "#8a7a5c", antC: "#8a7a5c" }),
  leafinsect: insA({ body: "#8fb35c", head: "#7aa34c", wings: true, wingC: "#a3c46b", legC: "#8fb35c" }),
  ladybug: insA({ body: "#c94a3a", head: "#26221c", spots: true, markC: "#26221c", wings: true, wingC: "#e8e4d8", clubAnt: true }),
  firefly: insA({ body: "#3c3630", head: "#c94a3a", glow: true, glowC: "#c9e84a", wings: true, wingC: "#c9c4b5" }),
  herculesbeetle: insA({ body: "#c9b085", head: "#3c3630", horn: true, hornC: "#3c3630", wings: true, wingC: "#8a7458" }),
  stagbeetle: insA({ body: "#5c3c2a", head: "#3c2a1e", mandibles: true, hornC: "#3c2a1e", wings: true, wingC: "#4c3226" }),
  goliathbeetle: insA({ body: "#f2ede0", head: "#3c3630", bands: true, markC: "#3c3630", wings: true, wingC: "#8a7458" }),
  jewelbeetle: insA({ body: "#3ad9a4", head: "#2ab585", spots: true, markC: "#e8c547", wings: true, wingC: "#3a7ad9" }),
  cicada: insA({ body: "#5c6b44", head: "#4c5838", longWings: true, wingC: "#d9dcc4", iris: "#c94a3a" }),
  leafcutterant: insA({ body: "#a3562a", head: "#8a4a2a", legC: "#8a4a2a", mandibles: true, hornC: "#8a4a2a" }),
  honeypotant: insA({ body: "#e8c547", head: "#a3562a", legC: "#a3562a" }),
  jumpingspider: bugM({ body: "#3c3630", legC: "#26221c", iris: "#3ad9a4" }),
  peacockspider: bugM({ body: "#c94a3a", legC: "#3c3630", iris: "#3a5cd9" }),
  // reptiles
  gharial: marineA({ hide: "#5c7a5c", teeth: true, jaw: "#4c6b4c", belly: "#c9c4a8", finC: "#4c6b4c" }),
  komododragon: lizA({ hide: "#6b6358", spikes: true, spikeC: "#5c5448", teeth: true, jaw: "#5c5448", iris: "#c9a43a" }),
  greeniguana: lizA({ hide: "#4c9a3c", crest: true, crestC: "#3a7a2c", dewlap: true, dewC: "#8fb35c", iris: "#e8c547" }),
  marineiguana: lizA({ hide: "#3c3630", crest: true, crestC: "#26221c", spikes: true, iris: "#c94a3a" }),
  frilledlizard: lizA({ hide: "#c9853a", frill: true, frillC: "#e8a53a", iris: "#3c3226" }),
  thornydevil: lizA({ hide: "#c9853a", spikes: true, spikeC: "#8a5230", bands: true, markC: "#5c3020", iris: "#3c3226" }),
  basilisk: lizA({ hide: "#3a8a6b", crest: true, crestC: "#2a6b52", iris: "#e8c547" }),
  gilamonster: lizA({ hide: "#26221c", spots: true, markC: "#e8853a", iris: "#3c3226" }),
  tegu: lizA({ hide: "#3c3630", bands: true, markC: "#e8dcc3", iris: "#c9a43a" }),
  skink: lizA({ hide: "#5c6b74", bands: true, markC: "#3a5cd9", iris: "#3c3226" }),
  hornedlizard: lizA({ hide: "#c9a878", spikes: true, spikeC: "#8a6f52", spots: true, markC: "#5c4436" }),
  tuatara: lizA({ hide: "#6b7a5c", spikes: true, spikeC: "#8a9a6b", iris: "#c9a43a" }),
  alligator: marineA({ hide: "#3c4438", teeth: true, jaw: "#2e342a", belly: "#c9c4a8" }),
  caiman: marineA({ hide: "#4c5c44", teeth: true, jaw: "#3a4634", belly: "#c9bda3" }),
  greenanaconda: snakeA({ hide: "#4c5c3c", diamond: true, markC: "#26292e", iris: "#e8c547" }),
  boaconstrictor: snakeA({ hide: "#c9a878", diamond: true, markC: "#8a5230", iris: "#c9853a" }),
  kingcobra: snakeA({ hide: "#8a6f42", hood: true, hoodC: "#a3855c", hoodMark: true, markC: "#3c3226", iris: "#26221c" }),
  blackmamba: snakeA({ hide: "#5c5c54", hood: true, hoodC: "#4c4c44", iris: "#26221c" }),
  gaboonviper: snakeA({ hide: "#c9b085", diamond: true, markC: "#5c4436", pits: true, iris: "#c9a43a" }),
  rattlesnake: snakeA({ hide: "#c9a878", diamond: true, markC: "#5c4436", rattle: true, pits: true, iris: "#e8c547" }),
  taipan: snakeA({ hide: "#a3703c", bands: true, markC: "#c9955c", iris: "#26221c" }),
  bushmaster: snakeA({ hide: "#c99a5c", diamond: true, markC: "#5c3826", pits: true, iris: "#c9a43a" }),
  seasnake: snakeA({ hide: "#3c5468", bands: true, markC: "#e8dcc3", iris: "#e8c547" }),
  greenseaturtle: armorA({ hide: "#4c7a5c", scutes: true, scuteC: "#3a5c44", beakC: "#c9b98a", iris: "#3c3226" }),
  leatherback: armorA({ hide: "#3c3644", scutes: true, scuteC: "#5c5468", beakC: "#8a8494", iris: "#3c3226" }),
  hawksbill: armorA({ hide: "#8a6f42", scutes: true, scuteC: "#c9a05c", beakC: "#e8c98a", iris: "#3c3226" }),
  // amphibians
  glassfrog: frogA({ skin: "#8fd9a4", belly: "#c9e8d4", iris: "#e8c547", toes: true, toeC: "#8fd9a4" }),
  tomatofrog: frogA({ skin: "#d94a3a", belly: "#e8853a", iris: "#26221c", toes: true, toeC: "#d94a3a" }),
  goliathfrog: frogA({ skin: "#6b7a5c", belly: "#c9c4a8", spots: true, markC: "#4c5838", iris: "#c9a43a", toes: true, toeC: "#6b7a5c" }),
  redeyedtreefrog: frogA({ skin: "#8fd94a", belly: "#f2ede0", iris: "#c94a3a", toes: true, toeC: "#e8853a", stripes: true, markC: "#3a5cd9" }),
  firesalamander: frogA({ skin: "#26221c", spots: true, markC: "#e8c547", iris: "#26221c", toes: true, toeC: "#26221c" }),
  newt: frogA({ skin: "#5c6b44", belly: "#e8853a", spots: true, markC: "#26221c", iris: "#e8c547", toes: true, toeC: "#5c6b44" }),
  hellbender: frogA({ skin: "#6b5c4c", belly: "#a8988a", spots: true, markC: "#4c4038", iris: "#26221c", toes: true, toeC: "#6b5c4c" }),
  olm: frogA({ skin: "#e8d4c4", gills: true, gillC: "#e8859a", iris: "#e8d4c4", toes: true, toeC: "#e8d4c4" }),
});

Object.assign(DEX, {
  // sharks
  greatwhite: A("Great White Shark", "greatwhite", ["Aquatic", "Predator"], B(74, 84, 58, 56), ["apexfang", "crunch", "tidalcrash"], 0.1),
  whaleshark: A("Whale Shark", "whaleshark", ["Aquatic", "Wild"], B(88, 58, 70, 28), MV.aqua, 0.14),
  hammerhead: A("Hammerhead Shark", "hammerhead", ["Aquatic", "Predator"], B(64, 70, 52, 60), MV.pred, 0.2),
  tigershark: A("Tiger Shark", "tigershark", ["Aquatic", "Predator"], B(70, 76, 56, 52), MV.pred, 0.16),
  bullshark: A("Bull Shark", "bullshark", ["Aquatic", "Predator"], B(68, 74, 56, 50), MV.pred, 0.18),
  makoshark: A("Shortfin Mako", "makoshark", ["Aquatic", "Swift"], B(60, 72, 48, 80), MV.swi, 0.16),
  thresher: A("Thresher Shark", "thresher", ["Aquatic", "Swift"], B(60, 66, 48, 68), MV.swi, 0.22),
  baskingshark: A("Basking Shark", "baskingshark", ["Aquatic", "Wild"], B(80, 52, 64, 30), MV.aqua, 0.18),
  nurseshark: A("Nurse Shark", "nurseshark", ["Aquatic", "Wild"], B(62, 56, 56, 32), MV.aqua, 0.3),
  reefshark: A("Reef Shark", "reefshark", ["Aquatic", "Swift"], B(54, 62, 44, 64), MV.aqua, 0.3),
  goblinshark: A("Goblin Shark", "goblinshark", ["Night", "Aquatic"], B(58, 68, 46, 40), MV.night, 0.18),
  frilledshark: A("Frilled Shark", "frilledshark", ["Night", "Aquatic"], B(56, 64, 44, 42), MV.night, 0.18),
  wobbegong: A("Wobbegong", "wobbegong", ["Aquatic", "Armor"], B(58, 58, 60, 26), MV.aqua, 0.3),
  greenlandshark: A("Greenland Shark", "greenlandshark", ["Ice", "Night"], B(78, 66, 62, 18), MV.ice, 0.16),
  zebrashark: A("Zebra Shark", "zebrashark", ["Aquatic", "Swift"], B(54, 56, 48, 52), MV.aqua, 0.3),
  epaulette: A("Epaulette Shark", "epaulette", ["Aquatic", "Burrow"], B(46, 50, 44, 48), MV.aqua, 0.34),
  // rays
  mantaray: A("Manta Ray", "mantaray", ["Aquatic", "Aerial"], B(72, 58, 56, 62), MV.aqua, 0.18),
  stingray: A("Stingray", "stingray", ["Aquatic", "Venom"], B(52, 56, 48, 44), MV.ven, 0.3),
  eagleray: A("Spotted Eagle Ray", "eagleray", ["Aquatic", "Aerial"], B(56, 58, 48, 62), MV.aqua, 0.26),
  sawfish: A("Sawfish", "sawfish", ["Aquatic", "Armor"], B(66, 64, 58, 38), MV.arm, 0.2),
  electricray: A("Electric Ray", "electricray", ["Aquatic", "Venom"], B(50, 58, 46, 40), MV.ven, 0.28),
  // fish
  clownfish: A("Clownfish", "clownfish", ["Aquatic", "Swift"], B(30, 34, 34, 56), MV.aqua, 0.46),
  mandarinfish: A("Mandarinfish", "mandarinfish", ["Aquatic", "Swift"], B(28, 36, 32, 58), MV.aqua, 0.44),
  lionfish: A("Lionfish", "lionfish", ["Venom", "Aquatic"], B(42, 58, 40, 40), MV.ven, 0.32),
  pufferfish: A("Pufferfish", "pufferfish", ["Venom", "Armor"], B(44, 44, 58, 26), MV.ven, 0.34),
  boxfish: A("Boxfish", "boxfish", ["Armor", "Venom"], B(40, 38, 60, 24), MV.arm, 0.36),
  parrotfish: A("Parrotfish", "parrotfish", ["Aquatic", "Armor"], B(46, 46, 48, 44), MV.aqua, 0.38),
  wrasse: A("Cleaner Wrasse", "wrasse", ["Aquatic", "Swift"], B(28, 32, 30, 62), MV.aqua, 0.46),
  triggerfish: A("Triggerfish", "triggerfish", ["Aquatic", "Armor"], B(42, 48, 46, 44), MV.aqua, 0.4),
  angelfish: A("Emperor Angelfish", "angelfish", ["Aquatic", "Swift"], B(36, 40, 38, 54), MV.aqua, 0.42),
  butterflyfish: A("Butterflyfish", "butterflyfish", ["Aquatic", "Swift"], B(30, 34, 32, 58), MV.aqua, 0.46),
  moray: A("Moray Eel", "moray", ["Aquatic", "Predator"], B(52, 62, 44, 40), MV.pred, 0.3),
  swordfish: A("Swordfish", "swordfish", ["Aquatic", "Swift"], B(56, 68, 44, 76), MV.swi, 0.2),
  marlin: A("Blue Marlin", "marlin", ["Aquatic", "Swift"], B(60, 70, 46, 78), MV.swi, 0.18),
  anglerfish: A("Anglerfish", "anglerfish", ["Night", "Aquatic"], B(48, 60, 42, 24), MV.night, 0.26),
  barracuda: A("Barracuda", "barracuda", ["Aquatic", "Swift"], B(48, 64, 38, 70), MV.swi, 0.28),
  grouper: A("Goliath Grouper", "grouper", ["Aquatic", "Wild"], B(70, 60, 58, 28), MV.aqua, 0.24),
  oarfish: A("Oarfish", "oarfish", ["Night", "Aquatic"], B(58, 48, 44, 46), MV.night, 0.2),
  sunfishmola: A("Ocean Sunfish", "sunfishmola", ["Aquatic", "Armor"], B(72, 44, 62, 18), MV.aqua, 0.24),
  flyingfish: A("Flying Fish", "flyingfish", ["Aquatic", "Aerial"], B(32, 38, 30, 72), MV.aer, 0.42),
  mandarin_dragonet: A("Dragonet", "mandarin_dragonet", ["Aquatic", "Swift"], B(28, 34, 30, 60), MV.aqua, 0.44),
  coelacanth: A("Coelacanth", "coelacanth", ["Aquatic", "Night"], B(58, 52, 52, 28), MV.aqua, 0.16),
  axolotl: A("Axolotl", "axolotl", ["Aquatic", "Wild"], B(42, 40, 40, 34), MV.aqua, 0.32),
  // seahorses
  seahorse: A("Seahorse", "seahorse", ["Aquatic", "Armor"], B(28, 30, 44, 22), MV.aqua, 0.44),
  leafyseadragon: A("Leafy Seadragon", "leafyseadragon", ["Aquatic", "Canopy"], B(34, 36, 46, 26), MV.can, 0.3),
  weedyseadragon: A("Weedy Seadragon", "weedyseadragon", ["Aquatic", "Canopy"], B(34, 36, 44, 30), MV.can, 0.32),
  pipefish: A("Pipefish", "pipefish", ["Aquatic", "Swift"], B(26, 30, 34, 46), MV.aqua, 0.46),
  // jellies
  moonjelly: A("Moon Jelly", "moonjelly", ["Venom", "Aquatic"], B(38, 40, 30, 30), MV.ven, 0.4),
  boxjelly: A("Box Jelly", "boxjelly", ["Venom", "Aquatic"], B(36, 62, 26, 42), MV.ven, 0.26),
  lionsmane: A("Lion's Mane Jelly", "lionsmane", ["Venom", "Ice"], B(56, 58, 34, 26), MV.ven, 0.26),
  // cephalopods
  octopus: A("Giant Pacific Octopus", "octopus", ["Aquatic", "Night"], B(54, 60, 44, 50), MV.aqua, 0.26),
  mimicoctopus: A("Mimic Octopus", "mimicoctopus", ["Night", "Aquatic"], B(44, 52, 40, 58), MV.night, 0.28),
  cuttlefish: A("Cuttlefish", "cuttlefish", ["Night", "Aquatic"], B(42, 50, 40, 52), MV.night, 0.32),
  giantsquid: A("Giant Squid", "giantsquid", ["Night", "Aquatic"], B(70, 72, 48, 46), MV.night, 0.14),
  nautilus: A("Nautilus", "nautilus", ["Armor", "Aquatic"], B(46, 40, 62, 24), MV.arm, 0.3),
  // crustaceans
  coconutcrab: A("Coconut Crab", "coconutcrab", ["Armor", "Predator"], B(54, 62, 64, 26), MV.arm, 0.26),
  fiddlercrab: A("Fiddler Crab", "fiddlercrab", ["Armor", "Burrow"], B(30, 38, 48, 34), MV.arm, 0.46),
  hermitcrab: A("Hermit Crab", "hermitcrab", ["Armor", "Aquatic"], B(34, 36, 58, 24), MV.arm, 0.44),
  spidercrab: A("Japanese Spider Crab", "spidercrab", ["Armor", "Aquatic"], B(58, 52, 62, 30), MV.arm, 0.26),
  lobster: A("Lobster", "lobster", ["Armor", "Aquatic"], B(48, 54, 60, 28), MV.arm, 0.34),
  mantisshrimp: A("Mantis Shrimp", "mantisshrimp", ["Armor", "Swift"], B(40, 70, 48, 58), ["shellbash", "firststrike", "siegehorn"], 0.28),
  // parrots
  scarletmacaw: A("Scarlet Macaw", "scarletmacaw", ["Aerial", "Canopy"], B(48, 52, 40, 62), MV.aer, 0.28),
  hyacinthmacaw: A("Hyacinth Macaw", "hyacinthmacaw", ["Aerial", "Canopy"], B(52, 56, 44, 58), MV.aer, 0.22),
  bluegoldmacaw: A("Blue-and-Gold Macaw", "bluegoldmacaw", ["Aerial", "Canopy"], B(48, 52, 40, 62), MV.aer, 0.28),
  militarymacaw: A("Military Macaw", "militarymacaw", ["Aerial", "Canopy"], B(46, 52, 40, 60), MV.aer, 0.28),
  africangrey: A("African Grey", "africangrey", ["Aerial", "Canopy"], B(44, 48, 40, 58), MV.aer, 0.28),
  cockatoo: A("Sulphur-crested Cockatoo", "cockatoo", ["Aerial", "Canopy"], B(46, 50, 40, 60), MV.aer, 0.3),
  blackcockatoo: A("Black Cockatoo", "blackcockatoo", ["Aerial", "Night"], B(48, 52, 42, 56), MV.aer, 0.28),
  cockatiel: A("Cockatiel", "cockatiel", ["Aerial", "Swift"], B(32, 38, 30, 64), MV.aer, 0.44),
  budgie: A("Budgerigar", "budgie", ["Aerial", "Swift"], B(28, 34, 26, 68), MV.aer, 0.46),
  lorikeet: A("Rainbow Lorikeet", "lorikeet", ["Aerial", "Canopy"], B(34, 40, 32, 64), MV.aer, 0.4),
  kea: A("Kea", "kea", ["Aerial", "Ice"], B(48, 54, 42, 58), MV.aer, 0.28),
  kakapo: A("Kākāpō", "kakapo", ["Night", "Canopy"], B(54, 46, 50, 22), MV.night, 0.2),
  eclectus: A("Eclectus Parrot", "eclectus", ["Aerial", "Canopy"], B(42, 46, 38, 58), MV.aer, 0.32),
  conure: A("Sun Conure", "conure", ["Aerial", "Swift"], B(34, 40, 30, 64), MV.aer, 0.42),
  rosella: A("Crimson Rosella", "rosella", ["Aerial", "Swift"], B(34, 40, 32, 62), MV.aer, 0.42),
  quakerparrot: A("Quaker Parrot", "quakerparrot", ["Aerial", "Swift"], B(32, 38, 30, 62), MV.aer, 0.44),
  // raptors
  baldeagle: A("Bald Eagle", "baldeagle", ["Aerial", "Predator"], B(58, 70, 46, 66), MV.aer, 0.2),
  goldeneagle: A("Golden Eagle", "goldeneagle", ["Aerial", "Predator"], B(58, 72, 46, 68), MV.aer, 0.18),
  harpyeagle: A("Harpy Eagle", "harpyeagle", ["Aerial", "Canopy"], B(62, 76, 50, 60), ["divebomb", "apexfang", "stormdive"], 0.16),
  philippineeagle: A("Philippine Eagle", "philippineeagle", ["Aerial", "Canopy"], B(60, 74, 48, 62), MV.aer, 0.14),
  stellerseagle: A("Steller's Sea Eagle", "stellerseagle", ["Aerial", "Ice"], B(62, 72, 48, 62), MV.ice, 0.16),
  peregrine: A("Peregrine Falcon", "peregrine", ["Aerial", "Swift"], B(44, 66, 36, 92), ["divebomb", "firststrike", "stormdive"], 0.2),
  osprey: A("Osprey", "osprey", ["Aerial", "Aquatic"], B(50, 60, 42, 66), MV.aer, 0.28),
  redtailhawk: A("Red-tailed Hawk", "redtailhawk", ["Aerial", "Predator"], B(48, 58, 40, 68), MV.aer, 0.3),
  harrier: A("Northern Harrier", "harrier", ["Aerial", "Swift"], B(44, 54, 38, 70), MV.aer, 0.32),
  snowyowl: A("Snowy Owl", "snowyowl", ["Ice", "Night"], B(50, 58, 42, 60), MV.ice, 0.26),
  barnowl: A("Barn Owl", "barnowl", ["Night", "Aerial"], B(44, 54, 38, 64), MV.night, 0.32),
  greathornedowl: A("Great Horned Owl", "greathornedowl", ["Night", "Predator"], B(52, 62, 44, 58), MV.night, 0.26),
  condor: A("Andean Condor", "condor", ["Aerial", "Ice"], B(64, 62, 50, 58), MV.aer, 0.18),
  secretarybird: A("Secretary Bird", "secretarybird", ["Aerial", "Venom"], B(54, 62, 44, 66), ["harmonystomp", "peck", "stormdive"], 0.24),
  caracara: A("Crested Caracara", "caracara", ["Aerial", "Wild"], B(46, 54, 40, 60), MV.aer, 0.32),
  goshawk: A("Goshawk", "goshawk", ["Aerial", "Canopy"], B(48, 60, 40, 72), MV.aer, 0.28),
  // other birds
  toucan: A("Toco Toucan", "toucan", ["Canopy", "Aerial"], B(44, 48, 40, 56), MV.can, 0.34),
  kingfisher: A("Kingfisher", "kingfisher", ["Aquatic", "Aerial"], B(32, 44, 30, 70), MV.aer, 0.4),
  peacock: A("Indian Peafowl", "peacock", ["Aerial", "Wild"], B(50, 48, 44, 52), ["preen", "gust", "hurricane"], 0.3),
  quetzal: A("Resplendent Quetzal", "quetzal", ["Canopy", "Aerial"], B(40, 46, 36, 62), MV.can, 0.26),
  birdofparadise: A("Bird-of-Paradise", "birdofparadise", ["Canopy", "Aerial"], B(38, 44, 34, 64), MV.can, 0.28),
  lyrebird: A("Superb Lyrebird", "lyrebird", ["Canopy", "Swift"], B(42, 46, 38, 60), MV.can, 0.3),
  hummingbird: A("Hummingbird", "hummingbird", ["Aerial", "Swift"], B(22, 34, 22, 88), ["quickdash", "peck", "lightstep"], 0.44),
  crane: A("Red-crowned Crane", "crane", ["Aerial", "Wild"], B(52, 48, 44, 58), MV.aer, 0.28),
  heron: A("Grey Heron", "heron", ["Aquatic", "Aerial"], B(46, 50, 38, 56), MV.aqua, 0.34),
  stork: A("White Stork", "stork", ["Aerial", "Wild"], B(48, 48, 40, 56), MV.aer, 0.34),
  shoebill: A("Shoebill", "shoebill", ["Aquatic", "Predator"], B(58, 62, 50, 34), MV.pred, 0.2),
  pelican: A("Pelican", "pelican", ["Aquatic", "Aerial"], B(54, 48, 44, 50), MV.aqua, 0.32),
  spoonbill: A("Roseate Spoonbill", "spoonbill", ["Aquatic", "Aerial"], B(44, 44, 38, 54), MV.aqua, 0.36),
  ibis: A("Scarlet Ibis", "ibis", ["Aquatic", "Aerial"], B(42, 44, 36, 56), MV.aer, 0.36),
  albatross: A("Wandering Albatross", "albatross", ["Aerial", "Aquatic"], B(56, 52, 44, 70), ["gust", "hurricane", "preen"], 0.24),
  puffin: A("Atlantic Puffin", "puffin", ["Aquatic", "Ice"], B(38, 42, 38, 54), MV.aqua, 0.4),
  frigatebird: A("Frigatebird", "frigatebird", ["Aerial", "Swift"], B(44, 50, 36, 72), MV.aer, 0.3),
  bluefootedbooby: A("Blue-footed Booby", "bluefootedbooby", ["Aquatic", "Aerial"], B(40, 46, 36, 58), MV.aqua, 0.38),
  ostrich: A("Ostrich", "ostrich", ["Swift", "Wild"], B(66, 62, 48, 76), ["harmonystomp", "quickdash", "gigaslam"], 0.24),
  emu: A("Emu", "emu", ["Swift", "Wild"], B(58, 54, 44, 70), MV.swi, 0.28),
  cassowary: A("Cassowary", "cassowary", ["Armor", "Predator"], B(62, 68, 56, 56), MV.arm, 0.22),
  kiwi: A("Kiwi", "kiwi", ["Night", "Burrow"], B(40, 40, 40, 40), MV.night, 0.34),
  roadrunner: A("Roadrunner", "roadrunner", ["Swift", "Venom"], B(36, 46, 32, 78), MV.swi, 0.38),
  hoatzin: A("Hoatzin", "hoatzin", ["Canopy", "Wild"], B(44, 40, 42, 40), MV.can, 0.34),
  kookaburra: A("Kookaburra", "kookaburra", ["Aerial", "Predator"], B(40, 50, 36, 58), MV.aer, 0.36),
  potoo: A("Great Potoo", "potoo", ["Night", "Canopy"], B(38, 44, 36, 52), MV.night, 0.34),
  mandarinduck: A("Mandarin Duck", "mandarinduck", ["Aquatic", "Aerial"], B(36, 40, 34, 56), MV.aqua, 0.4),
  swan: A("Mute Swan", "swan", ["Aquatic", "Aerial"], B(54, 50, 46, 46), MV.aqua, 0.32),
  loon: A("Common Loon", "loon", ["Aquatic", "Night"], B(46, 48, 40, 52), MV.aqua, 0.34),
  emperorpenguin: A("Emperor Penguin", "emperorpenguin", ["Ice", "Aquatic"], B(58, 50, 54, 40), MV.ice, 0.28),
  woodpecker: A("Pileated Woodpecker", "woodpecker", ["Canopy", "Bug"], B(36, 48, 34, 58), MV.bug, 0.38),
  raven: A("Common Raven", "raven", ["Night", "Aerial"], B(44, 52, 38, 62), MV.night, 0.32),
  // pollinators & insects
  honeybee: A("Honeybee", "honeybee", ["Bug", "Aerial"], B(24, 38, 24, 62), ["stingshot", "pollenburst", "hivecall"], 0.5),
  bumblebee: A("Bumblebee", "bumblebee", ["Bug", "Aerial"], B(28, 40, 28, 56), MV.bug, 0.48),
  orchidbee: A("Orchid Bee", "orchidbee", ["Bug", "Canopy"], B(24, 38, 24, 64), ["pollenburst", "buzzrush", "swarmsting"], 0.48),
  masonbee: A("Mason Bee", "masonbee", ["Bug", "Armor"], B(26, 36, 32, 52), MV.bug, 0.5),
  hoverfly: A("Hoverfly", "hoverfly", ["Bug", "Aerial"], B(22, 32, 22, 68), MV.bug, 0.52),
  monarch: A("Monarch Butterfly", "monarch", ["Bug", "Aerial"], B(26, 32, 26, 60), ["pollenburst", "gust", "hivecall"], 0.48),
  bluemorpho: A("Blue Morpho", "bluemorpho", ["Bug", "Canopy"], B(26, 34, 26, 62), MV.bug, 0.46),
  swallowtail: A("Swallowtail", "swallowtail", ["Bug", "Aerial"], B(26, 32, 26, 62), MV.bug, 0.48),
  glasswing: A("Glasswing Butterfly", "glasswing", ["Bug", "Night"], B(22, 30, 24, 66), MV.bug, 0.46),
  birdwing: A("Birdwing Butterfly", "birdwing", ["Bug", "Canopy"], B(30, 38, 28, 60), MV.bug, 0.4),
  lunamoth: A("Luna Moth", "lunamoth", ["Bug", "Night"], B(28, 34, 26, 58), MV.night, 0.44),
  atlasmoth: A("Atlas Moth", "atlasmoth", ["Bug", "Night"], B(34, 40, 30, 52), MV.bug, 0.4),
  hawkmoth: A("Hawk Moth", "hawkmoth", ["Bug", "Aerial"], B(28, 40, 26, 70), MV.bug, 0.44),
  dragonfly: A("Dragonfly", "dragonfly", ["Bug", "Aerial"], B(26, 44, 24, 78), ["buzzrush", "quickfocus", "swarmsting"], 0.44),
  damselfly: A("Damselfly", "damselfly", ["Bug", "Aquatic"], B(22, 38, 22, 74), MV.bug, 0.48),
  mantis: A("Praying Mantis", "mantis", ["Bug", "Predator"], B(32, 54, 30, 56), ["quickfocus", "firststrike", "swarmsting"], 0.4),
  orchidmantis: A("Orchid Mantis", "orchidmantis", ["Bug", "Canopy"], B(30, 52, 30, 54), MV.bug, 0.38),
  stickinsect: A("Stick Insect", "stickinsect", ["Bug", "Canopy"], B(28, 34, 40, 34), ["leafshroud", "treeleap", "silksnare"], 0.48),
  leafinsect: A("Leaf Insect", "leafinsect", ["Bug", "Canopy"], B(28, 34, 42, 32), MV.can, 0.48),
  ladybug: A("Ladybug", "ladybug", ["Bug", "Armor"], B(24, 32, 40, 44), MV.bug, 0.52),
  firefly: A("Firefly", "firefly", ["Bug", "Night"], B(22, 32, 22, 62), MV.night, 0.5),
  herculesbeetle: A("Hercules Beetle", "herculesbeetle", ["Bug", "Armor"], B(42, 58, 58, 30), ["siegehorn", "shellbash", "swarmsting"], 0.32),
  stagbeetle: A("Stag Beetle", "stagbeetle", ["Bug", "Armor"], B(38, 56, 54, 32), MV.bug, 0.34),
  goliathbeetle: A("Goliath Beetle", "goliathbeetle", ["Bug", "Armor"], B(44, 54, 56, 28), MV.arm, 0.32),
  jewelbeetle: A("Jewel Beetle", "jewelbeetle", ["Bug", "Armor"], B(30, 40, 48, 40), MV.bug, 0.44),
  cicada: A("Cicada", "cicada", ["Bug", "Canopy"], B(28, 34, 30, 52), ["hivecall", "buzzrush", "lullaby"], 0.5),
  leafcutterant: A("Leafcutter Ant", "leafcutterant", ["Bug", "Canopy"], B(26, 40, 32, 50), MV.bug, 0.52),
  honeypotant: A("Honeypot Ant", "honeypotant", ["Bug", "Burrow"], B(30, 32, 36, 40), MV.bug, 0.52),
  jumpingspider: A("Jumping Spider", "jumpingspider", ["Bug", "Swift"], B(24, 40, 24, 68), ["silksnare", "pounce", "swarmsting"], 0.48),
  peacockspider: A("Peacock Spider", "peacockspider", ["Bug", "Swift"], B(20, 36, 20, 74), MV.bug, 0.48),
  // reptiles
  gharial: A("Gharial", "gharial", ["Aquatic", "Predator"], B(64, 66, 54, 42), MV.aqua, 0.22),
  komododragon: A("Komodo Dragon", "komododragon", ["Venom", "Predator"], B(66, 72, 58, 36), ["venombite", "crunch", "neurotoxin"], 0.2),
  greeniguana: A("Green Iguana", "greeniguana", ["Canopy", "Armor"], B(46, 44, 48, 38), MV.can, 0.38),
  marineiguana: A("Marine Iguana", "marineiguana", ["Aquatic", "Armor"], B(48, 44, 50, 34), MV.aqua, 0.34),
  frilledlizard: A("Frilled Lizard", "frilledlizard", ["Armor", "Swift"], B(40, 46, 46, 52), ["intimidate", "quickdash", "shellbash"], 0.38),
  thornydevil: A("Thorny Devil", "thornydevil", ["Armor", "Burrow"], B(38, 36, 60, 26), MV.arm, 0.4),
  basilisk: A("Basilisk Lizard", "basilisk", ["Swift", "Aquatic"], B(36, 44, 34, 70), MV.swi, 0.4),
  gilamonster: A("Gila Monster", "gilamonster", ["Venom", "Armor"], B(46, 50, 54, 22), MV.ven, 0.34),
  tegu: A("Tegu", "tegu", ["Predator", "Burrow"], B(50, 52, 48, 40), MV.pred, 0.34),
  skink: A("Blue-tongued Skink", "skink", ["Burrow", "Armor"], B(42, 40, 46, 34), MV.bur, 0.42),
  hornedlizard: A("Horned Lizard", "hornedlizard", ["Armor", "Burrow"], B(36, 38, 54, 30), MV.arm, 0.42),
  tuatara: A("Tuatara", "tuatara", ["Armor", "Night"], B(46, 44, 52, 28), MV.night, 0.3),
  alligator: A("American Alligator", "alligator", ["Aquatic", "Armor"], B(68, 68, 62, 32), MV.arm, 0.22),
  caiman: A("Black Caiman", "caiman", ["Aquatic", "Predator"], B(66, 70, 58, 36), MV.pred, 0.22),
  greenanaconda: A("Green Anaconda", "greenanaconda", ["Aquatic", "Predator"], B(72, 70, 58, 26), ["crunch", "torrent", "maul"], 0.2),
  boaconstrictor: A("Boa Constrictor", "boaconstrictor", ["Predator", "Canopy"], B(58, 60, 50, 32), MV.pred, 0.3),
  kingcobra: A("King Cobra", "kingcobra", ["Venom", "Predator"], B(56, 70, 46, 54), ["neurotoxin", "venombite", "intimidate"], 0.22),
  blackmamba: A("Black Mamba", "blackmamba", ["Venom", "Swift"], B(48, 72, 38, 78), ["neurotoxin", "firststrike", "venombite"], 0.2),
  gaboonviper: A("Gaboon Viper", "gaboonviper", ["Venom", "Armor"], B(54, 74, 50, 22), MV.ven, 0.24),
  rattlesnake: A("Rattlesnake", "rattlesnake", ["Venom", "Burrow"], B(46, 62, 42, 46), MV.ven, 0.32),
  taipan: A("Inland Taipan", "taipan", ["Venom", "Swift"], B(44, 76, 36, 68), MV.ven, 0.2),
  bushmaster: A("Bushmaster", "bushmaster", ["Venom", "Night"], B(54, 68, 46, 40), MV.ven, 0.24),
  seasnake: A("Sea Snake", "seasnake", ["Venom", "Aquatic"], B(42, 64, 38, 56), MV.ven, 0.3),
  greenseaturtle: A("Green Sea Turtle", "greenseaturtle", ["Aquatic", "Armor"], B(60, 44, 68, 26), MV.arm, 0.3),
  leatherback: A("Leatherback Turtle", "leatherback", ["Aquatic", "Armor"], B(72, 50, 70, 30), MV.aqua, 0.22),
  hawksbill: A("Hawksbill Turtle", "hawksbill", ["Aquatic", "Armor"], B(56, 44, 64, 28), MV.arm, 0.28),
  // amphibians
  glassfrog: A("Glass Frog", "glassfrog", ["Canopy", "Venom"], B(26, 34, 26, 54), MV.can, 0.46),
  tomatofrog: A("Tomato Frog", "tomatofrog", ["Venom", "Burrow"], B(34, 38, 40, 28), MV.ven, 0.44),
  goliathfrog: A("Goliath Frog", "goliathfrog", ["Aquatic", "Wild"], B(52, 50, 44, 40), MV.aqua, 0.3),
  redeyedtreefrog: A("Red-eyed Tree Frog", "redeyedtreefrog", ["Canopy", "Swift"], B(28, 36, 28, 60), MV.can, 0.46),
  firesalamander: A("Fire Salamander", "firesalamander", ["Venom", "Ember"], B(38, 46, 40, 32), MV.ven, 0.38),
  newt: A("Great Crested Newt", "newt", ["Aquatic", "Venom"], B(30, 36, 32, 40), MV.aqua, 0.44),
  hellbender: A("Hellbender", "hellbender", ["Aquatic", "Night"], B(46, 44, 46, 26), MV.aqua, 0.32),
  olm: A("Olm", "olm", ["Aquatic", "Night"], B(38, 36, 40, 28), MV.night, 0.3),
});
