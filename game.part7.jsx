// ---------- CHAPTER V — Part 7: THE MYTH RIFTS ----------
// 100 legends from cultures around the world. Additive; old saves stay valid.

// --- myth sprite generators ---
const beastM = (base, o = {}) => (er) => (
  <g>
    {o.aura && <circle cx="32" cy="34" r="24" fill="none" stroke={o.aura} strokeWidth="2.5" opacity=".55" strokeDasharray="5 4" />}
    {o.wings && <g fill={o.wingC || "#e8dcc3"}><path d="M12,36 Q0,22 16,20 L24,30 Z" /><path d="M52,36 Q64,22 48,20 L40,30 Z" /></g>}
    {o.tails && <g stroke={o.tailC || "#e8dcc3"} strokeWidth="3.5" strokeLinecap="round" fill="none"><path d="M10,52 Q4,42 10,34" /><path d="M16,55 Q10,47 14,38" /><path d="M50,53 Q60,43 54,34" /></g>}
    {base(er)}
    {o.horn && <path d="M29,16 L32,2 L35,16 Z" fill={o.hornC || "#e8c547"} />}
    {o.horns && <g fill={o.hornC || "#e8dcc3"}><path d="M20,18 L14,4 L26,14 Z" /><path d="M44,18 L50,4 L38,14 Z" /></g>}
    {o.antlers && <g stroke={o.hornC || "#c9a86a"} strokeWidth="2.5" fill="none" strokeLinecap="round"><path d="M22,16 L18,5 M18,10 L13,7" /><path d="M42,16 L46,5 M46,10 L51,7" /></g>}
    {o.flame && <g fill={o.flameC || "#e8853a"} opacity=".9"><path d="M20,14 Q22,5 26,12 Q27,7 30,12 Z" /><path d="M34,12 Q37,6 39,12 Q42,6 44,14 Z" /></g>}
  </g>
);
const dragonW = (o) => (er) => (
  <g>
    {o.wings !== false && <g fill={o.wingC || o.hide}><path d="M10,34 Q0,18 18,18 L24,28 Z" /><path d="M54,34 Q64,18 46,18 L40,28 Z" /></g>}
    <g fill={o.hornC || "#e8dcc3"}><path d="M22,20 L16,4 L28,16 Z" /><path d="M42,20 L48,4 L36,16 Z" /></g>
    <ellipse cx="32" cy="34" rx="15" ry="13" fill={o.hide} />
    {o.spikes && <path d="M22,23 L26,16 L29,22 L32,15 L35,22 L38,16 L42,23 Z" fill={o.spikeC || "#5c4a6b"} />}
    <path d="M24,42 Q32,48 40,42 L40,47 Q32,52 24,47 Z" fill={o.snout || "#c9b98a"} />
    {teethRow(42.6, 25, 4, 3.6)}
    <circle cx="28" cy="41" r="1.2" fill="#2a2018" /><circle cx="36" cy="41" r="1.2" fill="#2a2018" />
    {o.multi && <g><ellipse cx="12" cy="22" rx="7" ry="6" fill={o.hide} /><ellipse cx="52" cy="22" rx="7" ry="6" fill={o.hide} /><Eye x={11} y={21} r={1.8} iris={o.iris} /><Eye x={53} y={21} r={1.8} iris={o.iris} /></g>}
    <Eye x={25} y={33} r={2.7 * er} iris={o.iris || "#d94a3a"} />
    <Eye x={39} y={33} r={2.7 * er} iris={o.iris || "#d94a3a"} />
  </g>
);
const dragonE = (o) => (er) => (
  <g>
    <g stroke={o.hornC || "#d9c9a3"} strokeWidth="2.5" fill="none" strokeLinecap="round"><path d="M23,16 L19,5 M19,9 L14,7" /><path d="M41,16 L45,5 M45,9 L50,7" /></g>
    <path d="M18,26 Q32,14 46,26 L46,31 Q32,21 18,31 Z" fill={o.maneC || "#e8c547"} />
    <ellipse cx="32" cy="35" rx="14" ry="12" fill={o.hide} />
    <ellipse cx="32" cy="43" rx="8.5" ry="5.5" fill={o.snout || "#c9d9c4"} />
    <circle cx="29" cy="42" r="1.1" fill="#2a2018" /><circle cx="35" cy="42" r="1.1" fill="#2a2018" />
    <g stroke={o.maneC || "#e8c547"} strokeWidth="1.4" fill="none" strokeLinecap="round"><path d="M24,44 Q14,44 10,50" /><path d="M40,44 Q50,44 54,50" /></g>
    <Eye x={25} y={33} r={2.6 * er} iris={o.iris || "#d9a43a"} />
    <Eye x={39} y={33} r={2.6 * er} iris={o.iris || "#d9a43a"} />
  </g>
);
const birdM = (o) => (er) => (
  <g>
    {o.halo && <circle cx="32" cy="13" r="7.5" fill="none" stroke="#e8c547" strokeWidth="2.5" opacity=".85" />}
    {o.flame && <g fill={o.flameC || "#e8853a"}><path d="M22,16 Q24,4 28,13 Q30,6 33,13 Q36,5 39,13 Q41,6 43,16 Z" /></g>}
    {o.plume && <g fill={o.plumeC || "#c0392b"}><path d="M26,17 Q28,6 31,15 Z" /><path d="M31,15 Q33,4 36,14 Z" /><path d="M36,15 Q39,7 40,17 Z" /></g>}
    {o.batWings ? <g fill={o.wingC || "#3c3244"}><path d="M6,30 L22,26 L18,40 L12,34 Z" /><path d="M58,30 L42,26 L46,40 L52,34 Z" /></g>
      : <g fill={o.wingC || o.body}><path d="M8,32 L22,27 L20,40 Z" /><path d="M56,32 L42,27 L44,40 Z" /></g>}
    <circle cx="32" cy="33" r="14" fill={o.body} />
    <path d="M18,33 A14,14 0 0 1 46,33 Z" fill={o.head || o.body} />
    {o.mask && <path d="M20,30 Q32,22 44,30 L44,36 Q32,29 20,36 Z" fill={o.mask} />}
    <path d="M27,37 L32,48 L37,37 Z" fill={o.beakC || "#e8a53a"} />
    <Eye x={25} y={31} r={2.7 * er} iris={o.iris || "#d9a43a"} />
    <Eye x={39} y={31} r={2.7 * er} iris={o.iris || "#d9a43a"} />
  </g>
);
const serpentM = (o) => (er) => (
  <g>
    <path d="M14,58 Q6,50 14,44 Q22,38 32,44 Q42,50 50,44" stroke={o.hide} strokeWidth="7" fill="none" strokeLinecap="round" />
    {o.hood && <path d="M16,30 Q32,8 48,30 Q48,44 32,46 Q16,44 16,30 Z" fill={o.hoodC || o.hide} />}
    {o.feathers && <g fill={o.featherC || "#2e8b57"}><path d="M18,22 Q20,10 26,18 Z" /><path d="M26,17 Q30,6 34,16 Z" /><path d="M38,17 Q44,9 46,22 Z" /></g>}
    {o.horns && <g fill={o.hornC || "#e8dcc3"}><path d="M24,20 L19,8 L29,17 Z" /><path d="M40,20 L45,8 L35,17 Z" /></g>}
    <ellipse cx="32" cy="32" rx="12" ry="11" fill={o.hide} />
    {o.crown && <path d="M25,20 L27,14 L30,19 L32,13 L34,19 L37,14 L39,20 Z" fill="#e8c547" />}
    {o.bands && <g stroke={o.bandC || "#e8c547"} strokeWidth="2.4" fill="none"><path d="M21,36 Q32,42 43,36" /><path d="M23,30 Q32,35 41,30" /></g>}
    <path d="M29,40 L32,46 L35,40 Z" fill={o.snout || "#c9704a"} />
    <path d="M32,46 L32,52 M32,49 L29,52 M32,49 L35,52" stroke="#c0392b" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    <Eye x={26} y={31} r={2.6 * er} iris={o.iris || "#c9d94a"} />
    <Eye x={38} y={31} r={2.6 * er} iris={o.iris || "#c9d94a"} />
  </g>
);
const hoofM = (o) => (er) => (
  <g>
    {o.wings && <g fill={o.wingC || "#f2ede0"}><path d="M8,34 Q-2,18 16,18 L24,28 Z" /><path d="M56,34 Q66,18 48,18 L40,28 Z" /></g>}
    {o.horn && <path d="M29,17 L32,2 L35,17 Z" fill={o.hornC || "#e8c547"} />}
    {o.antlers && <g stroke={o.hornC || "#c9a86a"} strokeWidth="2.4" fill="none" strokeLinecap="round"><path d="M23,16 L19,5 M19,10 L14,7" /><path d="M41,16 L45,5 M45,10 L50,7" /></g>}
    <path d="M20,22 L16,8 L27,18 Z" fill={o.coat} /><path d="M44,22 L48,8 L37,18 Z" fill={o.coat} />
    <path d="M26,16 Q32,10 38,16 L40,30 L24,30 Z" fill={o.maneC || "#8a7a5c"} />
    <path d="M24,26 Q32,18 40,26 L42,42 Q40,50 32,52 Q24,50 22,42 Z" fill={o.coat} />
    {o.kelp && <g stroke="#3c7a5c" strokeWidth="2" fill="none" strokeLinecap="round"><path d="M22,26 Q18,32 22,38" /><path d="M42,26 Q46,32 42,38" /></g>}
    <ellipse cx="32" cy="47" rx="7" ry="5" fill={o.muzzle || "#d9cfc0"} />
    <circle cx="29" cy="47" r="1.1" fill="#2a2018" /><circle cx="35" cy="47" r="1.1" fill="#2a2018" />
    <Eye x={26} y={35} r={2.5 * er} iris={o.iris || "#6b4c9a"} />
    <Eye x={38} y={35} r={2.5 * er} iris={o.iris || "#6b4c9a"} />
  </g>
);
const giantM = (o) => (er) => (
  <g>
    {o.horns && <g fill={o.hornC || "#e8dcc3"}><path d="M18,22 L10,8 L26,16 Z" /><path d="M46,22 L54,8 L38,16 Z" /></g>}
    {o.leaves && <g fill="#4c7a3c"><path d="M20,16 Q24,6 30,14 Z" /><path d="M34,14 Q40,5 44,16 Z" /><circle cx="25" cy="18" r="2.4" /><circle cx="40" cy="17" r="2.4" /></g>}
    <ellipse cx="32" cy="36" rx="16" ry="15" fill={o.fur} />
    {o.shag && <g stroke={o.shagC || o.fur} strokeWidth="3" strokeLinecap="round"><path d="M18,46 L15,53 M25,49 L23,57 M32,50 L32,58 M39,49 L41,57 M46,46 L49,53" /></g>}
    {o.trunk ? <path d="M28,40 Q32,44 32,52 Q32,58 28,58 Q26,52 28,46 Z" fill={o.fur} /> : <ellipse cx="32" cy="44" rx="8.5" ry="6" fill={o.skin || "#c9a88a"} />}
    {o.tusks && <g fill="#f5efdf"><path d="M23,44 L19,54 L26,47 Z" /><path d="M41,44 L45,54 L38,47 Z" /></g>}
    {o.cyclops ? <Eye x={32} y={32} r={4.6 * er} iris={o.iris || "#d9a43a"} />
      : <g><Eye x={25} y={32} r={2.6 * er} iris={o.iris || "#d9a43a"} /><Eye x={39} y={32} r={2.6 * er} iris={o.iris || "#d9a43a"} /></g>}
    {!o.trunk && <path d="M29,43 L35,43 L32,46 Z" fill="#6b4436" />}
  </g>
);
const bugM = (o) => (er) => (
  <g>
    {o.moth ? (
      <g>
        <g fill={o.wingC || "#8a7a9c"}><path d="M4,28 Q2,10 24,20 L26,34 L8,40 Z" /><path d="M60,28 Q62,10 40,20 L38,34 L56,40 Z" /></g>
        <g stroke="#4c4438" strokeWidth="1.6" fill="none" strokeLinecap="round"><path d="M27,18 Q24,10 19,8" /><path d="M37,18 Q40,10 45,8" /></g>
        <ellipse cx="32" cy="34" rx="9" ry="12" fill={o.body} />
        <Eye x={28} y={28} r={3 * er} iris={o.iris || "#d94a3a"} />
        <Eye x={36} y={28} r={3 * er} iris={o.iris || "#d94a3a"} />
      </g>
    ) : (
      <g>
        <g stroke={o.legC || o.body} strokeWidth="2.4" fill="none" strokeLinecap="round">
          <path d="M20,30 Q8,24 4,14" /><path d="M20,36 Q6,34 2,26" /><path d="M20,42 Q8,46 6,56" /><path d="M22,46 Q14,54 14,60" />
          <path d="M44,30 Q56,24 60,14" /><path d="M44,36 Q58,34 62,26" /><path d="M44,42 Q56,46 58,56" /><path d="M42,46 Q50,54 50,60" />
        </g>
        <ellipse cx="32" cy="38" rx="13" ry="12" fill={o.body} />
        <g fill="#1e1611"><circle cx="27" cy="42" r="1.6" /><circle cx="37" cy="42" r="1.6" /><circle cx="24" cy="38" r="1.2" /><circle cx="40" cy="38" r="1.2" /></g>
        <Eye x={27} y={33} r={2.6 * er} iris={o.iris || "#d9a43a"} />
        <Eye x={37} y={33} r={2.6 * er} iris={o.iris || "#d9a43a"} />
      </g>
    )}
  </g>
);
const multiM = (o) => (er) => (
  <g>
    <path d="M14,30 Q14,52 32,54 Q50,52 50,30" stroke={o.hide} strokeWidth="8" fill="none" strokeLinecap="round" />
    {[[13, 24, 0.8], [51, 24, 0.8], [32, 30, 1.1]].map(([cx, cy, s], i) => (
      <g key={i}>
        <ellipse cx={cx} cy={cy} rx={10 * s} ry={9 * s} fill={o.hide} />
        {o.serpent
          ? <path d={`M${cx - 3 * s},${cy + 6 * s} L${cx},${cy + 10 * s} L${cx + 3 * s},${cy + 6 * s} Z`} fill={o.snout || "#c9704a"} />
          : <ellipse cx={cx} cy={cy + 5 * s} rx={5 * s} ry={3.6 * s} fill={o.snout || "#c9b98a"} />}
        <Eye x={cx - 4 * s} y={cy - 2 * s} r={2 * s * er} iris={o.iris || "#d94a3a"} />
        <Eye x={cx + 4 * s} y={cy - 2 * s} r={2 * s * er} iris={o.iris || "#d94a3a"} />
      </g>
    ))}
  </g>
);

Object.assign(ART, {
  // Olympus Rift — Greek & Roman
  pegasus: hoofM({ coat: "#f2ede0", wings: true, maneC: "#c9d4e8" }),
  cerberus: multiM({ hide: "#3c3244", snout: "#6b5868" }),
  hydra: multiM({ hide: "#4c7a5c", serpent: true }),
  chimera: beastM(felArt({ fur: "#c98a3a", ruff: true, ruffC: "#8a5c2a" }), { flame: true, horns: true }),
  griffin: birdM({ body: "#c9a05c", head: "#f2ede0", plume: true, plumeC: "#8a6f52" }),
  minotaur: giantM({ fur: "#6b4c38", horns: true, shag: true }),
  nemeanlion: beastM(felArt({ fur: "#d9a43a", ruff: true, ruffC: "#b5822a" }), { aura: "#e8c547" }),
  goldenhind: hoofM({ coat: "#e8c547", antlers: true, hornC: "#b5822a", maneC: "#d9b03a" }),
  stymphbird: birdM({ body: "#8a93a3", beakC: "#c9c9d4", wingC: "#6b7484" }),
  cetus: marineA({ hide: "#3c5468", teeth: true, belly: "#8fa8b5" }),
  ladon: dragonW({ hide: "#4c7a4c", iris: "#e8c547", spikes: true }),
  harpy: birdM({ body: "#8a6b7a", head: "#c9a88a", plume: true }),
  hippocampus: hoofM({ coat: "#5c8aa3", kelp: true, maneC: "#3c7a8a", muzzle: "#a8ccd9" }),
  cyclops: giantM({ fur: "#b5906b", cyclops: true, skin: "#c9a88a" }),
  colchisdrake: dragonW({ hide: "#6b5c9a", spikes: true }),
  teumessian: canArt({ fur: "#c9703a", muzzle: "#e8d0b5", iris: "#3a7ad9" }),
  // Aurora Rift — Norse, Celtic & Slavic
  fenrir: beastM(canArt({ fur: "#5c6068", inner: "#3c4048", muzzle: "#8a8f9a" }), { aura: "#8fb3d9" }),
  jormungandr: serpentM({ hide: "#3c6b5c", bands: true, bandC: "#8fd9b5", horns: true }),
  sleipnir: hoofM({ coat: "#8a93a3", maneC: "#4c5460" }),
  nidhogg: dragonW({ hide: "#3c3244", spikes: true, iris: "#c94a3a" }),
  ratatoskr: canArt({ fur: "#a3583c", earRound: true, muzzle: "#d9b59a" }),
  kraken: marineA({ hide: "#6b4c8a", tents: true, bigEye: true, belly: "#a88fc4" }),
  lindworm: dragonW({ hide: "#7a884c", wings: false, spikes: true }),
  kelpie: hoofM({ coat: "#3c5c54", kelp: true, maneC: "#2a443c", iris: "#8fd9c4" }),
  cusith: canArt({ fur: "#3c7a3c", inner: "#2a5c2a", muzzle: "#8ab585" }),
  caitsith: felArt({ fur: "#26292e", muzzle: "#e8e0d0", iris: "#3ad9a4", earTall: true }),
  puca: hoofM({ coat: "#2e2921", maneC: "#0f0d0a", iris: "#e8c547" }),
  questingbeast: dragonE({ hide: "#6b8a5c", maneC: "#c9704a" }),
  wyvern: dragonW({ hide: "#8a4a3c", spikes: true }),
  firebird: birdM({ body: "#e8853a", flame: true, wingC: "#d95c2a", iris: "#e8c547" }),
  zmey: dragonW({ hide: "#5c8a3a", multi: true, spikes: true }),
  alkonost: birdM({ body: "#c9a0b5", halo: true, plume: true, plumeC: "#8a5c7a" }),
  leshy: giantM({ fur: "#5c6b44", leaves: true, shag: true, skin: "#8a9a6b" }),
  // Hearth Rift — Egyptian, Middle Eastern & African
  sphinx: felArt({ fur: "#d9b06a", ruff: true, ruffC: "#e8c547", iris: "#3a7ad9" }),
  bennu: birdM({ body: "#c95c3a", halo: true, plume: true, plumeC: "#e8c547" }),
  ammit: marineA({ hide: "#6b8a5c", teeth: true, jaw: "#4c6b44", belly: "#c9a88a" }),
  serpopard: beastM(felArt({ fur: "#c9a05c", spots: true, earTall: true }), {}),
  apep: serpentM({ hide: "#3c3244", bands: true, bandC: "#c94a3a" }),
  sha: canArt({ fur: "#8a745c", inner: "#5c4c3c", muzzle: "#b5a08a" }),
  roc: birdM({ body: "#8a6f52", wingC: "#68533c", beakC: "#d9b06a" }),
  simurgh: birdM({ body: "#c95c7a", plume: true, plumeC: "#e8a53a", wingC: "#a34a6b" }),
  manticore: beastM(felArt({ fur: "#a34a3a", ruff: true, ruffC: "#7a3428" }), { horns: true }),
  lamassu: beastM(giantM({ fur: "#c9a86a", horns: true, skin: "#d9c49a" }), { wings: true, wingC: "#e8dcc3" }),
  mushussu: dragonE({ hide: "#c95c3a", maneC: "#e8c547", hornC: "#e8dcc3" }),
  ziz: birdM({ body: "#5c8aa3", wingC: "#3c6b84", plume: true, plumeC: "#e8c547" }),
  behemoth: giantM({ fur: "#8a7a5c", tusks: true, horns: true, shag: true }),
  leviathan: marineA({ hide: "#2a4458", teeth: true, belly: "#6b8aa3", finC: "#1e3444" }),
  grootslang: serpentM({ hide: "#4c5c44", horns: true, bands: true, bandC: "#8a9a6b" }),
  impundulu: birdM({ body: "#26292e", wingC: "#0f0d0a", iris: "#e8e34a", beakC: "#c94a3a" }),
  anansi: bugM({ body: "#3c3244", legC: "#26222e", iris: "#e8c547" }),
  // Celestial Rift — Chinese, Japanese & Korean
  qinglong: dragonE({ hide: "#3a7ad9", maneC: "#8fd9e8", snout: "#a8d4e8" }),
  fenghuang: birdM({ body: "#d94a6b", flame: true, flameC: "#e8a53a", plume: true, plumeC: "#3ad9a4", wingC: "#a33a5c" }),
  baihu: felArt({ fur: "#f2ede0", stripes: true, markC: "#26292e", iris: "#8fd9e8" }),
  xuanwu: armorA({ hide: "#3c4c5c", scutes: true, scuteC: "#26343c", spikes: true, beakC: "#8a9aa8" }),
  pixiu: beastM(felArt({ fur: "#c9a86a", ruff: true, ruffC: "#e8c547" }), { wings: true, horns: true }),
  nian: giantM({ fur: "#c94a3a", horns: true, shag: true, skin: "#e8853a" }),
  bixi: armorA({ hide: "#6b8a5c", scutes: true, beakC: "#c9b98a" }),
  taotie: giantM({ fur: "#5c4c6b", horns: true, tusks: true }),
  kitsune: beastM(canArt({ fur: "#f2ede0", inner: "#e8a5a5", muzzle: "#fff8ec", iris: "#d9a43a" }), { tails: true, tailC: "#f2ede0", aura: "#e8c547" }),
  tanuki: canArt({ fur: "#8a745c", earRound: true, mask: "#4c4038", muzzle: "#c9b59a" }),
  kappa: ceratoA({ hide: "#5c8a5c", frill: "#4c7a4c", frillIn: "#5c8a5c", dome: true, domeC: "#8fd9e8", beakC: "#e8c547" }),
  tengu: birdM({ body: "#c94a3a", mask: "#a33428", plume: true, plumeC: "#26292e", beakC: "#8a3428" }),
  baku: giantM({ fur: "#5c5c6b", trunk: true, shag: true }),
  komainu: felArt({ fur: "#c9a86a", ruff: true, ruffC: "#8a6f42", iris: "#c94a3a" }),
  orochi: multiM({ hide: "#6b3a8a", serpent: true, iris: "#c94a3a" }),
  nekomata: beastM(felArt({ fur: "#3c3244", earTall: true, iris: "#e8e34a", muzzle: "#8a7a9c" }), { tails: true, tailC: "#3c3244" }),
  haetae: felArt({ fur: "#5c8aa3", ruff: true, ruffC: "#3c6b84", iris: "#e8c547" }),
  // Monsoon Rift — South & Southeast Asia, Oceania
  garuda: birdM({ body: "#e8a53a", mask: "#c94a3a", plume: true, plumeC: "#e8c547", wingC: "#c9853a" }),
  naga: serpentM({ hide: "#3c7a5c", hood: true, hoodC: "#2a5c44", crown: true, bands: true }),
  makara: marineA({ hide: "#5c7a8a", teeth: true, belly: "#a8c4d4" }),
  airavata: giantM({ fur: "#e8e4dc", trunk: true, tusks: true }),
  yali: beastM(felArt({ fur: "#c98a3a", ruff: true }), { horns: true }),
  navagunjara: beastM(hoofM({ coat: "#c9a05c", maneC: "#8a6f42" }), { wings: true, antlers: true }),
  bakunawa: serpentM({ hide: "#26445c", horns: true, bands: true, bandC: "#8fd9e8", iris: "#8fd9e8" }),
  tikbalang: hoofM({ coat: "#3c3428", maneC: "#1e1a12", iris: "#c94a3a" }),
  sigbin: canArt({ fur: "#4c4038", earRound: true, muzzle: "#8a7a68", iris: "#c94a3a" }),
  sarimanok: birdM({ body: "#d94a6b", plume: true, plumeC: "#3ad9a4", wingC: "#e8a53a", beakC: "#e8c547" }),
  barong: felArt({ fur: "#e8c547", ruff: true, ruffC: "#c94a3a", iris: "#c94a3a" }),
  phayanaga: serpentM({ hide: "#3c6b3c", hood: true, crown: true }),
  taniwha: marineA({ hide: "#3c5c54", teeth: true, belly: "#8ab5a8", finC: "#2a4440" }),
  moo: dragonE({ hide: "#4c7a5c", maneC: "#8fd9b5", snout: "#a8d4b5" }),
  bunyip: giantM({ fur: "#4c5c54", shag: true, tusks: true, skin: "#6b7a70" }),
  rainbowserpent: serpentM({ hide: "#c95c3a", bands: true, bandC: "#3ad9a4", feathers: true, featherC: "#e8c547", iris: "#3a7ad9" }),
  adaro: marineA({ hide: "#5a768a", belly: "#a3b8c4", finC: "#48657a", teeth: true }),
  // Twilight Rift — the Americas & world folklore
  quetzalcoatl: serpentM({ hide: "#2e8b57", feathers: true, featherC: "#3ad9a4", bands: true, bandC: "#e8c547", iris: "#e8c547" }),
  ahuizotl: beastM(canArt({ fur: "#3c5c54", earRound: true, muzzle: "#6b8a80" }), {}),
  camazotz: beastM(ART.bat, { aura: "#c94a3a" }),
  cipactli: marineA({ hide: "#4c5c44", teeth: true, jaw: "#34402e" }),
  amaru: dragonE({ hide: "#8a4a6b", maneC: "#e8a53a" }),
  alicanto: birdM({ body: "#e8c547", flame: true, flameC: "#e8853a", wingC: "#c9a02a" }),
  cadejo: canArt({ fur: "#f2ede0", inner: "#c9c4b5", muzzle: "#fff", iris: "#c94a3a" }),
  mishipeshu: beastM(felArt({ fur: "#3c6b7a", iris: "#e8c547" }), { horns: true, hornC: "#c9d4d9" }),
  hornedserpent: serpentM({ hide: "#5c3c6b", horns: true, bands: true, bandC: "#e8c547" }),
  piasa: birdM({ body: "#5c8a3c", mask: "#c94a3a", plume: true, plumeC: "#e8c547", batWings: true, wingC: "#3c5c28" }),
  jackalope: beastM(ART.rabbit, { antlers: true }),
  chupacabra: canArt({ fur: "#4c5c44", inner: "#2e3c2a", muzzle: "#7a8a70", iris: "#c94a3a", crest: "#2e3c2a" }),
  sasquatch: giantM({ fur: "#5c4838", shag: true, skin: "#8a6f52" }),
  mothman: bugM({ moth: true, body: "#3c3244", wingC: "#4c4458", iris: "#c94a3a" }),
  unicorn: hoofM({ coat: "#f8f4ea", horn: true, maneC: "#d4c9e8", iris: "#8a6fc4" }),
  cockatrice: birdM({ body: "#8a9a4c", plume: true, plumeC: "#c94a3a", wingC: "#6b7a3c", beakC: "#d9a43a" }),
});

const MY = (n, art, t2, b, m, c, org) => ({ n, art, t: ["Mythic", t2], b, m, l: [], c, org });
Object.assign(DEX, {
  pegasus: MY("Pegasus", "pegasus", "Aerial", B(62, 58, 50, 72), MV.aer, 0.25, "Greek"),
  cerberus: MY("Cerberus", "cerberus", "Night", B(72, 74, 58, 52), MV.night, 0.15, "Greek"),
  hydra: MY("Hydra", "hydra", "Venom", B(74, 70, 60, 44), MV.ven, 0.15, "Greek"),
  chimera: MY("Chimera", "chimera", "Ember", B(68, 74, 54, 56), MV.emb, 0.15, "Greek"),
  griffin: MY("Griffin", "griffin", "Aerial", B(66, 70, 56, 64), MV.aer, 0.2, "Greek"),
  minotaur: MY("Minotaur", "minotaur", "Armor", B(72, 76, 62, 40), MV.arm, 0.2, "Greek"),
  nemeanlion: MY("Nemean Lion", "nemeanlion", "Predator", B(74, 78, 66, 50), MV.pred, 0.12, "Greek"),
  goldenhind: MY("Golden Hind", "goldenhind", "Swift", B(54, 52, 44, 84), MV.swi, 0.2, "Greek"),
  stymphbird: MY("Stymphalian Bird", "stymphbird", "Aerial", B(52, 64, 46, 62), MV.aer, 0.3, "Greek"),
  cetus: MY("Cetus", "cetus", "Aquatic", B(76, 72, 60, 40), MV.aqua, 0.15, "Greek"),
  ladon: MY("Ladon", "ladon", "Venom", B(70, 66, 62, 42), MV.ven, 0.2, "Greek"),
  harpy: MY("Harpy", "harpy", "Aerial", B(54, 60, 44, 68), MV.aer, 0.3, "Greek"),
  hippocampus: MY("Hippocampus", "hippocampus", "Aquatic", B(60, 56, 52, 60), MV.aqua, 0.3, "Greek"),
  cyclops: MY("Cyclops", "cyclops", "Wild", B(76, 74, 60, 34), MV.wild, 0.2, "Greek"),
  colchisdrake: MY("Colchian Drake", "colchisdrake", "Predator", B(66, 70, 56, 52), MV.pred, 0.2, "Greek"),
  teumessian: MY("Teumessian Fox", "teumessian", "Swift", B(50, 56, 42, 88), ["quickdash", "firststrike", "lightstep"], 0.08, "Greek"),
  fenrir: MY("Fenrir", "fenrir", "Predator", B(78, 82, 62, 58), ["maul", "dreadhowl", "apexfang"], 0.1, "Norse"),
  jormungandr: MY("Jörmungandr", "jormungandr", "Aquatic", B(82, 74, 64, 40), MV.aqua, 0.1, "Norse"),
  sleipnir: MY("Sleipnir", "sleipnir", "Swift", B(64, 60, 52, 86), MV.swi, 0.15, "Norse"),
  nidhogg: MY("Níðhöggr", "nidhogg", "Night", B(72, 74, 60, 46), MV.night, 0.15, "Norse"),
  ratatoskr: MY("Ratatoskr", "ratatoskr", "Swift", B(42, 44, 36, 80), ["quickdash", "firststrike", "blitz"], 0.5, "Norse"),
  kraken: MY("Kraken", "kraken", "Aquatic", B(80, 76, 62, 36), MV.aqua, 0.12, "Norse"),
  lindworm: MY("Lindworm", "lindworm", "Venom", B(64, 66, 56, 44), MV.ven, 0.25, "Norse"),
  kelpie: MY("Kelpie", "kelpie", "Aquatic", B(62, 64, 50, 66), MV.aqua, 0.25, "Scottish"),
  cusith: MY("Cù-Sìth", "cusith", "Night", B(64, 66, 52, 60), MV.night, 0.25, "Scottish"),
  caitsith: MY("Cat-Sìth", "caitsith", "Night", B(52, 58, 44, 72), MV.night, 0.3, "Celtic"),
  puca: MY("Púca", "puca", "Night", B(58, 60, 48, 70), MV.night, 0.25, "Irish"),
  questingbeast: MY("Questing Beast", "questingbeast", "Swift", B(60, 58, 50, 74), MV.swi, 0.2, "Arthurian"),
  wyvern: MY("Wyvern", "wyvern", "Aerial", B(64, 70, 52, 62), MV.aer, 0.25, "Heraldic"),
  firebird: MY("Firebird", "firebird", "Ember", B(66, 72, 52, 68), MV.emb, 0.15, "Slavic"),
  zmey: MY("Zmey Gorynych", "zmey", "Ember", B(74, 76, 58, 44), MV.emb, 0.12, "Slavic"),
  alkonost: MY("Alkonost", "alkonost", "Aerial", B(58, 56, 48, 64), ["gust", "lullaby", "hurricane"], 0.25, "Slavic"),
  leshy: MY("Leshy", "leshy", "Canopy", B(70, 64, 62, 36), MV.can, 0.2, "Slavic"),
  sphinx: MY("Sphinx", "sphinx", "Night", B(68, 64, 58, 54), MV.night, 0.15, "Egyptian"),
  bennu: MY("Bennu", "bennu", "Ember", B(64, 66, 52, 66), MV.emb, 0.15, "Egyptian"),
  ammit: MY("Ammit", "ammit", "Predator", B(70, 76, 58, 42), MV.pred, 0.15, "Egyptian"),
  serpopard: MY("Serpopard", "serpopard", "Swift", B(56, 62, 46, 72), MV.swi, 0.3, "Egyptian"),
  apep: MY("Apep", "apep", "Venom", B(76, 72, 58, 44), MV.ven, 0.12, "Egyptian"),
  sha: MY("Sha", "sha", "Night", B(58, 60, 48, 66), MV.night, 0.3, "Egyptian"),
  roc: MY("Roc", "roc", "Aerial", B(78, 76, 58, 58), MV.aer, 0.12, "Middle Eastern"),
  simurgh: MY("Simurgh", "simurgh", "Aerial", B(70, 66, 56, 64), ["gust", "preen", "hurricane"], 0.15, "Persian"),
  manticore: MY("Manticore", "manticore", "Venom", B(68, 74, 54, 58), MV.ven, 0.15, "Persian"),
  lamassu: MY("Lamassu", "lamassu", "Armor", B(72, 66, 70, 36), MV.arm, 0.15, "Mesopotamian"),
  mushussu: MY("Mušḫuššu", "mushussu", "Swift", B(62, 64, 52, 66), MV.swi, 0.2, "Babylonian"),
  ziz: MY("Ziz", "ziz", "Aerial", B(74, 70, 56, 60), MV.aer, 0.15, "Jewish"),
  behemoth: MY("Behemoth", "behemoth", "Armor", B(84, 74, 74, 20), MV.arm, 0.1, "Jewish"),
  leviathan: MY("Leviathan", "leviathan", "Aquatic", B(86, 80, 66, 38), MV.aqua, 0.08, "Jewish"),
  grootslang: MY("Grootslang", "grootslang", "Burrow", B(78, 74, 62, 36), MV.bur, 0.12, "South African"),
  impundulu: MY("Impundulu", "impundulu", "Aerial", B(60, 68, 48, 70), ["gust", "stormdive", "hurricane"], 0.2, "Zulu"),
  anansi: MY("Anansi", "anansi", "Bug", B(54, 60, 48, 66), ["buzzrush", "silksnare", "swarmsting"], 0.25, "Akan"),
  qinglong: MY("Qinglong", "qinglong", "Aquatic", B(78, 76, 62, 60), MV.aqua, 0.1, "Chinese"),
  fenghuang: MY("Fenghuang", "fenghuang", "Ember", B(72, 70, 58, 64), MV.emb, 0.1, "Chinese"),
  baihu: MY("Baihu", "baihu", "Ice", B(72, 78, 58, 66), MV.ice, 0.12, "Chinese"),
  xuanwu: MY("Xuanwu", "xuanwu", "Armor", B(76, 58, 84, 18), ["shellbash", "harden", "siegehorn"], 0.12, "Chinese"),
  pixiu: MY("Pixiu", "pixiu", "Wild", B(64, 66, 56, 58), MV.wild, 0.2, "Chinese"),
  nian: MY("Nian", "nian", "Ember", B(70, 72, 58, 50), MV.emb, 0.15, "Chinese"),
  bixi: MY("Bixi", "bixi", "Armor", B(72, 52, 80, 16), ["shellbash", "harden", "ironhide"], 0.2, "Chinese"),
  taotie: MY("Taotie", "taotie", "Predator", B(72, 76, 60, 42), MV.pred, 0.15, "Chinese"),
  kitsune: MY("Kitsune", "kitsune", "Night", B(60, 68, 50, 74), MV.night, 0.15, "Japanese"),
  tanuki: MY("Bake-danuki", "tanuki", "Wild", B(58, 56, 52, 54), MV.wild, 0.35, "Japanese"),
  kappa: MY("Kappa", "kappa", "Aquatic", B(56, 58, 56, 52), MV.aqua, 0.3, "Japanese"),
  tengu: MY("Tengu", "tengu", "Aerial", B(64, 70, 52, 70), MV.aer, 0.2, "Japanese"),
  baku: MY("Baku", "baku", "Night", B(66, 58, 58, 40), ["duskfeint", "lullaby", "moonstrike"], 0.25, "Japanese"),
  komainu: MY("Komainu", "komainu", "Armor", B(66, 62, 66, 44), MV.arm, 0.25, "Japanese"),
  orochi: MY("Yamata-no-Orochi", "orochi", "Venom", B(80, 76, 60, 42), MV.ven, 0.1, "Japanese"),
  nekomata: MY("Nekomata", "nekomata", "Night", B(56, 62, 46, 70), MV.night, 0.25, "Japanese"),
  haetae: MY("Haetae", "haetae", "Armor", B(66, 60, 68, 46), MV.arm, 0.2, "Korean"),
  garuda: MY("Garuda", "garuda", "Aerial", B(76, 78, 58, 68), MV.aer, 0.1, "Hindu"),
  naga: MY("Naga", "naga", "Venom", B(70, 68, 58, 50), MV.ven, 0.15, "Hindu"),
  makara: MY("Makara", "makara", "Aquatic", B(68, 66, 58, 42), MV.aqua, 0.2, "Hindu"),
  airavata: MY("Airavata", "airavata", "Armor", B(80, 68, 72, 26), MV.arm, 0.12, "Hindu"),
  yali: MY("Yali", "yali", "Predator", B(68, 72, 58, 54), MV.pred, 0.2, "Hindu"),
  navagunjara: MY("Navagunjara", "navagunjara", "Wild", B(66, 62, 58, 56), MV.wild, 0.2, "Hindu"),
  bakunawa: MY("Bakunawa", "bakunawa", "Aquatic", B(78, 74, 60, 46), MV.aqua, 0.12, "Filipino"),
  tikbalang: MY("Tikbalang", "tikbalang", "Night", B(66, 68, 52, 72), MV.night, 0.2, "Filipino"),
  sigbin: MY("Sigbin", "sigbin", "Night", B(56, 62, 46, 68), MV.night, 0.3, "Filipino"),
  sarimanok: MY("Sarimanok", "sarimanok", "Aerial", B(58, 56, 48, 62), MV.aer, 0.25, "Maranao"),
  barong: MY("Barong", "barong", "Armor", B(70, 66, 66, 48), MV.arm, 0.15, "Balinese"),
  phayanaga: MY("Phaya Naga", "phayanaga", "Aquatic", B(72, 66, 58, 48), MV.aqua, 0.15, "Lao–Thai"),
  taniwha: MY("Taniwha", "taniwha", "Aquatic", B(74, 70, 60, 44), MV.aqua, 0.15, "Māori"),
  moo: MY("Moʻo", "moo", "Aquatic", B(62, 60, 52, 58), MV.aqua, 0.25, "Hawaiian"),
  bunyip: MY("Bunyip", "bunyip", "Aquatic", B(70, 66, 60, 36), MV.aqua, 0.2, "Aboriginal Australian"),
  rainbowserpent: MY("Rainbow Serpent", "rainbowserpent", "Aquatic", B(80, 72, 62, 48), MV.aqua, 0.1, "Aboriginal Australian"),
  adaro: MY("Adaro", "adaro", "Aquatic", B(60, 64, 50, 60), MV.aqua, 0.25, "Solomon Islands"),
  quetzalcoatl: MY("Quetzalcoatl", "quetzalcoatl", "Aerial", B(80, 78, 62, 58), ["gust", "stormdive", "hurricane"], 0.08, "Aztec"),
  ahuizotl: MY("Ahuizotl", "ahuizotl", "Aquatic", B(62, 68, 52, 62), MV.aqua, 0.2, "Aztec"),
  camazotz: MY("Camazotz", "camazotz", "Night", B(64, 72, 52, 72), MV.night, 0.15, "Maya"),
  cipactli: MY("Cipactli", "cipactli", "Aquatic", B(74, 72, 62, 36), MV.aqua, 0.15, "Aztec"),
  amaru: MY("Amaru", "amaru", "Aerial", B(70, 68, 56, 58), MV.aer, 0.15, "Inca"),
  alicanto: MY("Alicanto", "alicanto", "Ember", B(58, 60, 48, 64), MV.emb, 0.25, "Chilean"),
  cadejo: MY("Cadejo", "cadejo", "Night", B(60, 62, 50, 66), MV.night, 0.25, "Central American"),
  mishipeshu: MY("Mishipeshu", "mishipeshu", "Aquatic", B(70, 72, 58, 54), MV.aqua, 0.12, "Anishinaabe"),
  hornedserpent: MY("Horned Serpent", "hornedserpent", "Aquatic", B(72, 68, 58, 46), MV.aqua, 0.15, "Indigenous N. American"),
  piasa: MY("Piasa", "piasa", "Aerial", B(66, 68, 52, 62), MV.aer, 0.2, "Illini"),
  jackalope: MY("Jackalope", "jackalope", "Swift", B(48, 50, 42, 78), MV.swi, 0.35, "American folklore"),
  chupacabra: MY("Chupacabra", "chupacabra", "Night", B(58, 66, 48, 68), MV.night, 0.25, "Latin American"),
  sasquatch: MY("Sasquatch", "sasquatch", "Wild", B(76, 72, 62, 38), MV.wild, 0.15, "N. American folklore"),
  mothman: MY("Mothman", "mothman", "Night", B(62, 64, 50, 74), ["duskfeint", "dreadhowl", "moonstrike"], 0.15, "American folklore"),
  unicorn: MY("Unicorn", "unicorn", "Wild", B(66, 62, 58, 72), ["quickdash", "bodyslam", "preen"], 0.15, "European"),
  cockatrice: MY("Cockatrice", "cockatrice", "Venom", B(56, 62, 48, 60), MV.ven, 0.25, "European"),
});

// --- rift zone & maps ---
Object.assign(PALS, {
  rift: { ground: "#3e3560", grass: "#6f5c94", grass2: "#7d68a8", tree: { bg: "#2c2547", em: "🌌" }, mount: { bg: "#352c52", em: "🗿" }, water: "#5c7dd9", flower: "✨" },
});
Object.assign(ARENA, { rift: "linear-gradient(#7d68a8,#2c2547)" });

const ROWS_RIFT = [
  "TTTTTTTTTTTTTTTT",
  "T..GGGG..GGGG..T",
  "T..GGGG..GGGG..T",
  "T......!.......T",
  "TGGGGG....GGGGGT",
  "TGGGGG....GGGGGT",
  "T..............T",
  "T..GGGG..GGGG..T",
  "T..GGGG..GGGG..T",
  "TTTTTTTsTTTTTTTT",
];
Object.assign(MAPS, {
  mythhub: {
    name: "Rift Crossroads", zone: "rift", music: "legend",
    rows: [
      "^^^^^n^^^^n^^^^^",
      "^...!......!...^",
      "^..............^",
      "e...!......!...e",
      "^..............^",
      "^..CC..........^",
      "^..............^",
      "e...!......!...e",
      "^..............^",
      "^......*.......^",
      "^..............^",
      "^^^^^^^s^^^^^^^^",
    ],
    exits: {
      "7,11": { map: "summit", x: 7, y: 1 },
      "0,3": { map: "rift1", x: 7, y: 8 }, "15,3": { map: "rift2", x: 7, y: 8 },
      "0,7": { map: "rift3", x: 7, y: 8 }, "15,7": { map: "rift4", x: 7, y: 8 },
      "5,0": { map: "rift5", x: 7, y: 8 }, "10,0": { map: "rift6", x: 7, y: 8 },
    },
  },
  rift1: {
    name: "Olympus Rift", zone: "rift", music: "legend", rows: ROWS_RIFT,
    exits: { "7,9": { map: "mythhub", x: 1, y: 3 } },
    pool: [["harpy", 10], ["stymphbird", 10], ["hippocampus", 9], ["pegasus", 8], ["goldenhind", 7], ["griffin", 7], ["minotaur", 7], ["cyclops", 7], ["ladon", 6], ["colchisdrake", 6], ["chimera", 5], ["cerberus", 5], ["hydra", 5], ["cetus", 5], ["nemeanlion", 3], ["teumessian", 2]],
    lvl: [50, 54],
  },
  rift2: {
    name: "Aurora Rift", zone: "rift", music: "legend", rows: ROWS_RIFT,
    exits: { "7,9": { map: "mythhub", x: 14, y: 3 } },
    pool: [["ratatoskr", 11], ["caitsith", 9], ["puca", 8], ["cusith", 8], ["kelpie", 8], ["lindworm", 8], ["wyvern", 7], ["alkonost", 7], ["questingbeast", 6], ["leshy", 6], ["sleipnir", 5], ["firebird", 5], ["nidhogg", 5], ["zmey", 4], ["kraken", 4], ["fenrir", 2], ["jormungandr", 2]],
    lvl: [51, 55],
  },
  rift3: {
    name: "Hearth Rift", zone: "rift", music: "legend", rows: ROWS_RIFT,
    exits: { "7,9": { map: "mythhub", x: 1, y: 7 } },
    pool: [["sha", 10], ["serpopard", 10], ["anansi", 9], ["impundulu", 8], ["mushussu", 7], ["manticore", 7], ["simurgh", 7], ["sphinx", 6], ["bennu", 6], ["ammit", 6], ["lamassu", 6], ["ziz", 5], ["roc", 4], ["apep", 4], ["grootslang", 4], ["behemoth", 3], ["leviathan", 2]],
    lvl: [52, 55],
  },
  rift4: {
    name: "Celestial Rift", zone: "rift", music: "legend", rows: ROWS_RIFT,
    exits: { "7,9": { map: "mythhub", x: 14, y: 7 } },
    pool: [["tanuki", 10], ["kappa", 9], ["nekomata", 8], ["komainu", 8], ["haetae", 8], ["tengu", 7], ["baku", 7], ["pixiu", 6], ["bixi", 6], ["nian", 6], ["taotie", 5], ["kitsune", 5], ["baihu", 4], ["xuanwu", 4], ["fenghuang", 2], ["qinglong", 2], ["orochi", 2]],
    lvl: [52, 56],
  },
  rift5: {
    name: "Monsoon Rift", zone: "rift", music: "legend", rows: ROWS_RIFT,
    exits: { "7,9": { map: "mythhub", x: 5, y: 1 } },
    pool: [["sigbin", 10], ["sarimanok", 9], ["moo", 9], ["adaro", 8], ["tikbalang", 8], ["yali", 7], ["makara", 7], ["navagunjara", 7], ["naga", 6], ["barong", 6], ["phayanaga", 6], ["bunyip", 6], ["taniwha", 5], ["airavata", 4], ["bakunawa", 4], ["garuda", 2], ["rainbowserpent", 2]],
    lvl: [53, 56],
  },
  rift6: {
    name: "Twilight Rift", zone: "rift", music: "legend", rows: ROWS_RIFT,
    exits: { "7,9": { map: "mythhub", x: 10, y: 1 } },
    pool: [["jackalope", 11], ["cadejo", 9], ["chupacabra", 8], ["alicanto", 8], ["ahuizotl", 8], ["unicorn", 7], ["cockatrice", 7], ["piasa", 6], ["amaru", 6], ["camazotz", 6], ["mothman", 5], ["sasquatch", 5], ["cipactli", 5], ["hornedserpent", 5], ["mishipeshu", 4], ["quetzalcoatl", 2]],
    lvl: [54, 58],
  },
});
Object.assign(SIGNS, {
  "mythhub:4,3": "🪧 '⬅ OLYMPUS RIFT — Greece & Rome. Twelve labors' worth of company.'",
  "mythhub:11,3": "🪧 'AURORA RIFT ➡ — Norse, Celtic & Slavic lands. Mind the world-serpent.'",
  "mythhub:4,7": "🪧 '⬅ HEARTH RIFT — Egypt, Mesopotamia, Persia & Africa. The oldest stories humans ever wrote down.'",
  "mythhub:11,7": "🪧 'CELESTIAL RIFT ➡ — China, Japan & Korea. Bow to the guardian beasts.'",
  "mythhub:4,1": "🪧 '⬆ MONSOON RIFT — South & Southeast Asia, the Pacific. The Bakunawa is why we watch eclipses.'",
  "mythhub:11,1": "🪧 '⬆ TWILIGHT RIFT — the Americas, and legends still being told today.'",
  "rift1:7,3": "🪧 'The Teumessian Fox was destined never to be caught. Prove destiny wrong, ranger.'",
  "rift2:7,3": "🪧 'Ratatoskr carries gossip up and down the World Tree. Whatever it told you about the Elite Four is true.'",
  "rift3:7,3": "🪧 'Anansi owns all the stories — including, now, yours.'",
  "rift4:7,3": "🪧 'Four guardian beasts watch four directions: Qinglong east, Baihu west, Xuanwu north... the Vermilion Bird sends her regards through Fenghuang.'",
  "rift5:7,3": "🪧 'When the Bakunawa rises to swallow the moon, bang pots and shout — or offer it a Trail Treat.'",
  "rift6:7,3": "🪧 'Some legends here are ancient; some were born on a dark highway in 1966. Every culture is still writing new ones.'",
});
