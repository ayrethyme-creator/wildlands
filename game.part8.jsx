// ---------- CHAPTER VI — Part 8: THE MENAGERIE (mammals) ----------
// Additive only. Reuses B(), MV, teethRow from part6 and felArt/canArt/Eye from part2.

const wh = (o, er) => o.iris || "#3a2e22";
// --- cetaceans & sirenians ---
const cetA = (o) => (er) => (
  <g>
    {/* body: one path from tail stock to rostrum, so nothing floats */}
    <path d={o.melon
      ? "M9,42 Q13,40 17,39 Q26,30 38,28 Q52,26 58,33 Q61,37 59,40 Q56,46 44,49 Q28,52 16,47 Q11,45 9,42 Z"
      : "M9,42 Q13,40 17,39 Q26,29 38,28 Q50,27 56,32 Q62,36 61,39 Q58,45 44,49 Q28,52 16,47 Q11,45 9,42 Z"} fill={o.hide} />
    {/* fluke: swept crescent growing out of the stock */}
    <path d="M12,41 Q7,34 2,27 Q6,28 10,33 Q13,37 15,40 Z" fill={o.fluke || o.hide} />
    <path d="M12,44 Q7,51 3,58 Q7,56 11,51 Q14,47 15,44 Z" fill={o.fluke || o.hide} />
    {o.belly && <path d="M12,44 Q8,49 5,54 Q9,50 13,45 Z" fill={o.belly} opacity=".75" />}
    {/* ventral field riding high on the flank */}
    {o.belly && <path d="M16,46 Q28,51 44,49 Q54,46 59,40 Q60,43 57,45 Q47,51 33,52 Q23,52 16,46 Z" fill={o.belly} />}
    {o.pleats && <g stroke={o.pleatC || "#5c6b74"} strokeWidth="1" fill="none" opacity=".7"><path d="M34,47 Q35,50 36,52 M40,46 Q41,49 42,51 M46,44 Q47,47 48,49" /></g>}
    {o.spots && <g fill={o.markC || "#f2ede0"} opacity=".7"><circle cx="30" cy="35" r="1.9" /><circle cx="40" cy="33" r="1.5" /><circle cx="24" cy="41" r="1.5" /><circle cx="47" cy="37" r="1.3" /></g>}
    {o.patch && <ellipse cx="50" cy="34" rx="4.6" ry="2.5" fill={o.patch} transform="rotate(-18 50 34)" />}
    {/* dorsal, raked back, rooted in the spine */}
    {o.dorsal && <path d={o.tall ? "M28,30 Q31,11 34,7 Q36,17 38,31 Z" : "M29,31 Q33,22 39,30 Q36,32 29,33 Z"} fill={o.dorsalC || o.hide} />}
    {/* pectoral paddle, attached at the chest */}
    <path d="M39,46 Q40,53 34,58 Q31,52 33,45 Q36,44 39,46 Z" fill={o.flipC || o.hide} opacity=".92" />
    {o.tusk && <path d="M60,37 Q68,31 76,25 Q68,34 61,39 Z" fill="#f5efdf" />}
    {o.blow && <g stroke={o.blowC || "#a8ccd9"} strokeWidth="1.3" fill="none" strokeLinecap="round" opacity=".5"><path d="M40,27 Q39,20 36,16" /><path d="M42,27 Q44,20 47,16" /></g>}
    <path d={o.melon ? "M50,42 Q55,43 59,40" : "M48,41 Q54,42 60,39"} stroke={o.mouth || "#3c4c54"} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {o.baleen && <g stroke="#d9cfc0" strokeWidth=".7" fill="none" opacity=".8"><path d="M50,42 L50,45 M53,42 L53,45 M56,41 L56,44" /></g>}
    <Eye x={47.5} y={35.5} r={2 * er} iris={wh(o)} />
  </g>
);
const pinA = (o) => (er) => (
  <g>
    {/* hind flippers, fanned and trailing — the pinniped tell */}
    <path d="M14,46 Q7,42 2,36 Q8,38 13,42 Z" fill={o.flip || o.fur} />
    <path d="M14,48 Q7,53 3,59 Q9,55 14,49 Z" fill={o.flip || o.fur} />
    {/* body: heavy chest, tapering to the hips, neck rising at the right */}
    <path d="M13,44 Q17,34 28,32 Q40,30 46,26 Q49,20 54,20 Q60,21 61,27 Q61,33 57,36 Q52,40 46,44 Q34,52 20,51 Q14,49 13,44 Z" fill={o.fur} />
    {o.spots && <g fill={o.markC || "#4c4438"} opacity=".6"><circle cx="24" cy="41" r="1.9" /><circle cx="33" cy="38" r="1.7" /><circle cx="41" cy="41" r="1.5" /><circle cx="28" cy="47" r="1.5" /></g>}
    {/* fore flipper, broad and rooted at the chest */}
    <path d="M40,42 Q43,50 37,56 Q32,50 35,41 Q38,40 40,42 Z" fill={o.flip || o.fur} opacity=".95" />
    {o.mane && <path d="M44,26 Q50,17 58,22 Q60,28 55,32 Q47,33 44,30 Z" fill={o.maneC || "#7a5c3c"} />}
    {/* head: blunt, low forehead */}
    <ellipse cx="55" cy="26" rx="7" ry="6" fill={o.head || o.fur} />
    {o.earFlap && <ellipse cx="50" cy="22" rx="1.6" ry="3.2" fill={o.fur} transform="rotate(-25 50 22)" />}
    {/* muzzle */}
    <ellipse cx="60" cy="28" rx="4" ry="3.2" fill={o.muzzle || "#d9cfc0"} />
    <ellipse cx="62" cy="27" rx="1.4" ry="1.1" fill="#2a2018" />
    {o.tusks && <g fill="#f5efdf"><path d="M59,30 Q58,40 57,46 Q61,38 61,30 Z" /><path d="M62,30 Q63,39 63,45 Q65,37 64,30 Z" /></g>}
    <g stroke={o.whisk || "#e8e0d0"} strokeWidth=".6" strokeLinecap="round" opacity=".85">
      <path d="M59,29 L66,28 M59,30 L66,32 M58,31 L64,35" />
    </g>
    <Eye x={53} y={25} r={2.2 * er} iris={o.iris || "#2a2018"} />
  </g>
);
// --- bears ---
const bearA = (o) => (er) => (
  <g>
    <circle cx="17" cy="20" r="7" fill={o.fur} /><circle cx="47" cy="20" r="7" fill={o.fur} />
    <circle cx="17" cy="20" r="3.4" fill={o.inner || "#8a6b52"} /><circle cx="47" cy="20" r="3.4" fill={o.inner || "#8a6b52"} />
    <ellipse cx="32" cy="36" rx="17" ry="15" fill={o.fur} />
    {o.bib && <path d="M20,44 Q32,54 44,44 Q44,52 32,54 Q20,52 20,44 Z" fill={o.bib} />}
    {o.blaze && <path d="M26,26 Q32,20 38,26 L36,34 L28,34 Z" fill={o.blaze} />}
    {o.mask && <g fill={o.mask}><ellipse cx="25" cy="32" rx="6" ry="5" /><ellipse cx="39" cy="32" rx="6" ry="5" /></g>}
    {o.eyePatch && <g fill={o.eyePatch}><ellipse cx="24" cy="31" rx="5.5" ry="6" transform="rotate(-15 24 31)" /><ellipse cx="40" cy="31" rx="5.5" ry="6" transform="rotate(15 40 31)" /></g>}
    <ellipse cx="32" cy="44" rx="8.5" ry="6.5" fill={o.muzzle || "#c9ae8a"} />
    <ellipse cx="32" cy="41" rx="3" ry="2.2" fill={o.nose || "#2a2018"} />
    <path d="M32,44 L32,47 M32,47 Q29,49 27,47 M32,47 Q35,49 37,47" stroke="#3c3226" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    <Eye x={25} y={31} r={2.4 * er} iris={o.iris || "#3a2e22"} />
    <Eye x={39} y={31} r={2.4 * er} iris={o.iris || "#3a2e22"} />
  </g>
);
// --- primates ---
const primA = (o) => (er) => (
  <g>
    {o.crest && <path d="M22,16 Q32,2 42,16 L38,20 L26,20 Z" fill={o.crestC || o.fur} />}
    {o.bigEar && <g fill={o.fur}><ellipse cx="13" cy="32" rx="6" ry="8" /><ellipse cx="51" cy="32" rx="6" ry="8" /><ellipse cx="13" cy="32" rx="3" ry="4.5" fill={o.inner || "#c9a88a"} /><ellipse cx="51" cy="32" rx="3" ry="4.5" fill={o.inner || "#c9a88a"} /></g>}
    {o.ruff && <ellipse cx="32" cy="36" rx="21" ry="18" fill={o.ruffC || o.fur} />}
    <ellipse cx="32" cy="34" rx="15" ry="15" fill={o.fur} />
    <ellipse cx="32" cy="37" rx="10.5" ry="12" fill={o.face || "#c9a88a"} />
    {o.brow && <path d="M20,28 Q32,22 44,28 L44,32 Q32,27 20,32 Z" fill={o.browC || o.fur} />}
    {o.stripe && <path d="M30,26 L34,26 L33,46 L31,46 Z" fill={o.stripeC || "#c94a3a"} />}
    {o.cheeks && <g fill={o.cheekC || "#3a7ad9"}><ellipse cx="23" cy="38" rx="4" ry="7" /><ellipse cx="41" cy="38" rx="4" ry="7" /></g>}
    <ellipse cx="32" cy="43" rx="5" ry="4" fill={o.muzzle || o.face || "#c9a88a"} />
    <g fill="#2a2018"><ellipse cx="30" cy="41" rx="1" ry="1.4" /><ellipse cx="34" cy="41" rx="1" ry="1.4" /></g>
    <path d="M28,46 Q32,49 36,46" stroke="#5c4436" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <Eye x={27} y={34} r={2.6 * er} iris={o.iris || "#8a5c2a"} />
    <Eye x={37} y={34} r={2.6 * er} iris={o.iris || "#8a5c2a"} />
  </g>
);
// --- marsupials ---
const marsA = (o) => (er) => (
  <g>
    {o.fluff ? <g fill={o.earC || o.fur}><ellipse cx="15" cy="24" rx="9" ry="8" /><ellipse cx="49" cy="24" rx="9" ry="8" /><ellipse cx="15" cy="24" rx="5" ry="4.5" fill={o.inner || "#c9a8a8"} /><ellipse cx="49" cy="24" rx="5" ry="4.5" fill={o.inner || "#c9a8a8"} /></g>
      : <g fill={o.fur}><ellipse cx="20" cy="18" rx="4.5" ry="10" transform="rotate(-12 20 18)" /><ellipse cx="44" cy="18" rx="4.5" ry="10" transform="rotate(12 44 18)" /><ellipse cx="20" cy="19" rx="2.2" ry="6" fill={o.inner || "#c9a8a8"} transform="rotate(-12 20 19)" /><ellipse cx="44" cy="19" rx="2.2" ry="6" fill={o.inner || "#c9a8a8"} transform="rotate(12 44 19)" /></g>}
    <ellipse cx="32" cy="38" rx="14" ry="14" fill={o.fur} />
    {o.stripes && <g stroke={o.markC || "#5c4030"} strokeWidth="2" strokeLinecap="round"><path d="M24,44 L22,50 M32,46 L32,52 M40,44 L42,50" /></g>}
    {o.spots && <g fill={o.markC || "#f2ede0"}><circle cx="24" cy="40" r="1.8" /><circle cx="40" cy="38" r="1.8" /><circle cx="32" cy="46" r="1.6" /></g>}
    {o.bib && <path d="M24,46 Q32,54 40,46 Q40,53 32,54 Q24,53 24,46 Z" fill={o.bib} />}
    <ellipse cx="32" cy="46" rx="7" ry="5.5" fill={o.muzzle || "#d9cfc0"} />
    <path d="M28,43 Q32,39 36,43 Q34,47 32,47 Q30,47 28,43 Z" fill={o.nose || "#3c3226"} />
    <Eye x={26} y={35} r={2.6 * er} iris={o.iris || "#3a2e22"} />
    <Eye x={38} y={35} r={2.6 * er} iris={o.iris || "#3a2e22"} />
  </g>
);
// --- mustelids, procyonids, viverrids ---
const mustA = (o) => (er) => (
  <g>
    {o.earRound ? <g fill={o.fur}><circle cx="18" cy="24" r="6" /><circle cx="46" cy="24" r="6" /><circle cx="18" cy="24" r="3" fill={o.inner || "#c9a88a"} /><circle cx="46" cy="24" r="3" fill={o.inner || "#c9a88a"} /></g>
      : <g fill={o.fur}><path d="M18,26 L14,14 L26,22 Z" /><path d="M46,26 L50,14 L38,22 Z" /></g>}
    <ellipse cx="32" cy="38" rx="15" ry="13" fill={o.fur} />
    {o.mask && <path d="M18,32 Q32,26 46,32 L46,38 Q32,32 18,38 Z" fill={o.mask} />}
    {o.blaze && <path d="M30,25 L34,25 L34,44 L30,44 Z" fill={o.blaze} />}
    {o.cheeks && <g fill={o.cheekC || "#f2ede0"}><ellipse cx="20" cy="40" rx="5" ry="6" /><ellipse cx="44" cy="40" rx="5" ry="6" /></g>}
    {o.bib && <path d="M22,44 Q32,53 42,44 Q42,52 32,54 Q22,52 22,44 Z" fill={o.bib} />}
    {o.rings && <g stroke={o.markC || "#3c3226"} strokeWidth="2.5" fill="none"><path d="M8,52 Q4,46 8,42" /><path d="M13,55 Q9,49 13,45" /></g>}
    <ellipse cx="32" cy="46" rx="6.5" ry="5" fill={o.muzzle || "#e8dcc3"} />
    <path d="M29,43 Q32,40 35,43 Q33,46 32,46 Q31,46 29,43 Z" fill={o.nose || "#3c3226"} />
    <g stroke="#e8e0d0" strokeWidth=".6" strokeLinecap="round" opacity=".8"><path d="M27,45 L19,43 M27,47 L19,49 M37,45 L45,43 M37,47 L45,49" /></g>
    <Eye x={26} y={35} r={2.5 * er} iris={o.iris || "#3a2e22"} />
    <Eye x={38} y={35} r={2.5 * er} iris={o.iris || "#3a2e22"} />
  </g>
);
// --- ungulates ---
const ungA = (o) => (er) => (
  <g>
    {o.spiral && <g stroke={o.hornC || "#5c4c3c"} strokeWidth="2.6" fill="none" strokeLinecap="round"><path d="M24,20 Q18,10 24,4 Q28,8 26,14" /><path d="M40,20 Q46,10 40,4 Q36,8 38,14" /></g>}
    {o.curved && <g stroke={o.hornC || "#8a7a5c"} strokeWidth="3.4" fill="none" strokeLinecap="round"><path d="M23,22 Q12,16 14,6" /><path d="M41,22 Q52,16 50,6" /></g>}
    {o.straight && <g fill={o.hornC || "#3c3226"}><path d="M25,22 L21,2 L28,20 Z" /><path d="M39,22 L43,2 L36,20 Z" /></g>}
    {o.antler && <g stroke={o.hornC || "#8a6f52"} strokeWidth="2.2" fill="none" strokeLinecap="round"><path d="M24,20 L18,6 M21,12 L13,9 M20,8 L14,3" /><path d="M40,20 L46,6 M43,12 L51,9 M44,8 L50,3" /></g>}
    {o.ossi && <g fill={o.hornC || "#5c4030"}><path d="M25,20 L24,10 L29,18 Z" /><path d="M39,20 L40,10 L35,18 Z" /><circle cx="24" cy="9" r="2.5" /><circle cx="40" cy="9" r="2.5" /></g>}
    {o.nasal && <path d="M32,30 L34,12 L37,30 Z" fill={o.hornC || "#8a8478"} />}
    <g fill={o.coat}><ellipse cx="17" cy="26" rx="4" ry="7" transform="rotate(-20 17 26)" /><ellipse cx="47" cy="26" rx="4" ry="7" transform="rotate(20 47 26)" /></g>
    <ellipse cx="32" cy="34" rx="12" ry="12" fill={o.coat} />
    {o.mane && <path d="M22,24 Q32,14 42,24 L42,30 Q32,22 22,30 Z" fill={o.maneC || "#3c3226"} />}
    {o.stripes && <g stroke={o.markC || "#26221c"} strokeWidth="2.2" fill="none"><path d="M24,26 L24,42 M32,24 L32,42 M40,26 L40,42" /></g>}
    {o.patches && <g fill={o.markC || "#a3683c"}><path d="M22,28 L28,26 L27,34 L21,33 Z" /><path d="M36,26 L43,29 L42,36 L35,34 Z" /><path d="M26,40 L33,38 L32,45 L26,44 Z" /></g>}
    {o.blaze && <path d="M30,24 L34,24 L33,48 L31,48 Z" fill={o.blaze} />}
    <path d="M25,42 Q32,38 39,42 L38,52 Q32,56 26,52 Z" fill={o.muzzle || o.coat} />
    <ellipse cx="32" cy="50" rx="4.5" ry="3" fill={o.nose || "#3c3226"} />
    <Eye x={25} y={32} r={2.6 * er} iris={o.iris || "#3a2e22"} />
    <Eye x={39} y={32} r={2.6 * er} iris={o.iris || "#3a2e22"} />
  </g>
);
// --- proboscideans ---
const elephA = (o) => (er) => (
  <g>
    <ellipse cx="12" cy="32" rx="11" ry={o.bigEar ? 17 : 10} fill={o.hide} />
    <ellipse cx="52" cy="32" rx="11" ry={o.bigEar ? 17 : 10} fill={o.hide} />
    <ellipse cx="32" cy="32" rx="15" ry="14" fill={o.hide} />
    {o.hair && <g stroke={o.hairC || "#8a5c3c"} strokeWidth="2.6" strokeLinecap="round"><path d="M20,22 L17,14 M27,18 L26,10 M34,18 L36,10 M42,22 L46,15" /></g>}
    <path d="M27,42 Q32,48 32,56 Q32,62 27,61 Q24,54 26,46 Z" fill={o.trunkC || o.hide} />
    {o.tusks && <g fill="#f5efdf"><path d={o.longTusk ? "M22,44 Q12,58 20,62 Q22,52 26,46 Z" : "M23,44 L19,56 L27,46 Z"} /><path d={o.longTusk ? "M42,44 Q52,58 44,62 Q42,52 38,46 Z" : "M41,44 L45,56 L37,46 Z"} /></g>}
    <Eye x={24} y={31} r={2.2 * er} iris={o.iris || "#5c4436"} />
    <Eye x={40} y={31} r={2.2 * er} iris={o.iris || "#5c4436"} />
  </g>
);
// --- rodents & lagomorphs ---
const rodA = (o) => (er) => (
  <g>
    {o.longEar ? <g fill={o.fur}><ellipse cx="22" cy="14" rx="4" ry="12" transform="rotate(-10 22 14)" /><ellipse cx="42" cy="14" rx="4" ry="12" transform="rotate(10 42 14)" /><ellipse cx="22" cy="15" rx="2" ry="8" fill={o.inner || "#e8a5a5"} transform="rotate(-10 22 15)" /><ellipse cx="42" cy="15" rx="2" ry="8" fill={o.inner || "#e8a5a5"} transform="rotate(10 42 15)" /></g>
      : <g fill={o.fur}><circle cx="19" cy="24" r="6.5" /><circle cx="45" cy="24" r="6.5" /><circle cx="19" cy="24" r="3.4" fill={o.inner || "#e8b5a5"} /><circle cx="45" cy="24" r="3.4" fill={o.inner || "#e8b5a5"} /></g>}
    {o.quills && <g fill={o.quillC || "#e8dcc3"}>{[-14, -7, 0, 7, 14].map((dx, i) => <path key={i} d={`M${30 + dx},${30 - Math.abs(dx) * 0.2} l2,-13 l3,13 Z`} />)}</g>}
    <ellipse cx="32" cy="40" rx="14" ry="13" fill={o.fur} />
    {o.stripes && <g stroke={o.markC || "#4c3826"} strokeWidth="1.8" fill="none"><path d="M24,34 L23,48 M32,32 L32,48 M40,34 L41,48" /></g>}
    {o.bib && <ellipse cx="32" cy="48" rx="8" ry="5" fill={o.bib} />}
    <ellipse cx="32" cy="47" rx="6" ry="4.5" fill={o.muzzle || "#e8dcc3"} />
    <path d="M30,44 Q32,42 34,44 Q33,46 32,46 Q31,46 30,44 Z" fill={o.nose || "#c98a8a"} />
    <path d="M29.5,49 L29.5,54 M34.5,49 L34.5,54" stroke="#f5efdf" strokeWidth="2.4" strokeLinecap="round" />
    <g stroke="#e8e0d0" strokeWidth=".6" strokeLinecap="round" opacity=".8"><path d="M27,46 L18,44 M27,48 L18,50 M37,46 L46,44 M37,48 L46,50" /></g>
    <Eye x={26} y={37} r={2.7 * er} iris={o.iris || "#2a2018"} />
    <Eye x={38} y={37} r={2.7 * er} iris={o.iris || "#2a2018"} />
  </g>
);
// --- xenarthrans ---
const xenA = (o) => (er) => (
  <g>
    {o.bands && <g fill={o.plateC || "#a89078"}>{[0, 1, 2, 3].map((i) => <path key={i} d={`M${16 + i * 2},${26 + i * 7} q16,-7 32,0 l0,4 q-16,-6 -32,0 Z`} />)}</g>}
    {o.shell && <path d="M14,40 Q14,20 32,20 Q50,20 50,40 Z" fill={o.plateC || "#a89078"} />}
    <ellipse cx="32" cy="40" rx="13" ry="12" fill={o.fur} />
    {o.snout && <path d="M28,44 Q32,48 46,54 Q50,57 46,59 Q34,52 28,50 Z" fill={o.fur} />}
    {o.stripe && <path d="M18,34 L44,52 L40,56 L16,40 Z" fill={o.markC || "#26292e"} />}
    {!o.snout && <ellipse cx="32" cy="48" rx="6" ry="4.5" fill={o.muzzle || "#d9cfc0"} />}
    {!o.snout && <ellipse cx="32" cy="46" rx="2.4" ry="1.8" fill="#3c3226" />}
    <g fill={o.fur}><ellipse cx="19" cy="30" rx="3.4" ry="5" /><ellipse cx="45" cy="30" rx="3.4" ry="5" /></g>
    <Eye x={26} y={38} r={2.2 * er} iris={o.iris || "#3a2e22"} />
    <Eye x={38} y={38} r={2.2 * er} iris={o.iris || "#3a2e22"} />
  </g>
);
// --- monotremes ---
const platyA = (o) => (er) => (
  <g>
    {o.spines && <g fill={o.spineC || "#c9b98a"}>{[-15, -8, 0, 8, 15].map((dx, i) => <path key={i} d={`M${30 + dx},${32 - Math.abs(dx) * 0.2} l2,-14 l3,14 Z`} />)}</g>}
    <ellipse cx="32" cy="40" rx="15" ry="13" fill={o.fur} />
    {o.bill && <g><ellipse cx="32" cy="52" rx="11" ry="6" fill={o.billC || "#5c4436"} /><circle cx="28" cy="51" r="1" fill="#2a2018" /><circle cx="36" cy="51" r="1" fill="#2a2018" /></g>}
    {o.beakLong && <path d="M30,46 Q32,58 34,62 Q36,58 34,46 Z" fill={o.billC || "#3c3226"} />}
    <Eye x={26} y={37} r={2.2 * er} iris={o.iris || "#2a2018"} />
    <Eye x={38} y={37} r={2.2 * er} iris={o.iris || "#2a2018"} />
  </g>
);
// --- sharks & rays ---
const sharkA = (o) => (er) => (
  <g>
    {/* caudal fin: heterocercal — the upper lobe is longer. That asymmetry is
        the single most shark-shaped thing about a shark. */}
    <path d="M13,40 Q7,30 3,18 Q9,24 15,36 Z" fill={o.finC || o.hide} />
    <path d="M13,43 Q9,50 6,57 Q11,52 15,45 Z" fill={o.finC || o.hide} />
    {/* body: one fusiform path, tail stock into pointed snout */}
    <path d="M11,42 Q15,40 19,39 Q28,29 40,28 Q52,28 58,32 Q63,35 63,38 Q60,44 46,48 Q28,52 18,47 Q13,45 11,42 Z" fill={o.hide} />
    {o.belly && <path d="M18,46 Q30,51 46,48 Q57,45 62,39 Q62,42 58,45 Q48,50 34,51 Q24,51 18,46 Z" fill={o.belly} />}
    {/* first dorsal, raked */}
    <path d={o.tallFin ? "M28,29 Q31,10 34,6 Q36,16 39,30 Z" : "M29,30 Q33,20 40,29 Q36,31 29,32 Z"} fill={o.finC || o.hide} />
    {/* pectoral: long swept blade, rooted behind the gills */}
    <path d="M42,44 Q44,53 36,59 Q32,52 36,43 Q39,42 42,44 Z" fill={o.finC || o.hide} opacity=".92" />
    {o.hammer && <path d="M54,28 Q66,26 67,33 Q66,40 54,42 Q57,35 54,28 Z" fill={o.hide} />}
    {o.stripes && <g stroke={o.markC || "#3c3226"} strokeWidth="1.8" fill="none" opacity=".75"><path d="M28,32 Q27,40 27,47 M36,30 Q35,39 35,48 M44,31 Q44,39 44,47" /></g>}
    {o.spots && <g fill={o.markC || "#e8e4dc"} opacity=".8"><circle cx="28" cy="35" r="1.6" /><circle cx="37" cy="33" r="1.5" /><circle cx="45" cy="36" r="1.3" /><circle cx="33" cy="43" r="1.3" /></g>}
    {/* gill slits, curved, on the flank behind the head */}
    <g stroke={o.gill || "#3c4c54"} strokeWidth="1" fill="none" opacity=".8"><path d="M46,33 Q45,39 46,45 M49,33 Q48,39 49,45 M52,34 Q51,39 52,44" /></g>
    {/* the mouth sits UNDER the snout on most sharks */}
    <path d="M52,44 Q57,45 62,40" stroke="#2a2018" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {o.teeth && <g fill="#f7f5ee"><path d="M54,44 L55,46.6 L56,44 Z" /><path d="M57,44 L58,46.6 L59,44 Z" /><path d="M60,43 L61,45.4 L62,42.8 Z" /></g>}
    <Eye x={o.hammer ? 65 : 55} y={o.hammer ? 33 : 35} r={1.9 * er} iris={o.iris || "#2a2018"} />
  </g>
);
const rayA = (o) => (er) => (
  <g>
    <path d="M32,26 Q4,30 2,42 Q18,44 32,40 Q46,44 62,42 Q60,30 32,26 Z" fill={o.hide} />
    {o.horns && <g fill={o.hide}><path d="M24,28 L20,18 L28,26 Z" /><path d="M40,28 L44,18 L36,26 Z" /></g>}
    {o.spots && <g fill={o.markC || "#e8e4dc"}><circle cx="18" cy="36" r="2" /><circle cx="46" cy="36" r="2" /><circle cx="32" cy="33" r="1.6" /></g>}
    <path d="M30,40 Q31,54 32,62 Q33,54 34,40 Z" fill={o.tailC || o.hide} />
    {o.barb && <path d="M30,52 L32,60 L34,52 Z" fill="#e8dcc3" />}
    <ellipse cx="32" cy="34" rx="7" ry="5" fill={o.head || o.hide} />
    <Eye x={27} y={32} r={1.8 * er} iris={o.iris || "#2a2018"} />
    <Eye x={37} y={32} r={1.8 * er} iris={o.iris || "#2a2018"} />
  </g>
);
// --- bony fish ---
const fishA = (o) => (er) => (
  <g>
    <path d="M6,34 L18,26 L18,44 Z" fill={o.finC || o.body} />
    {o.sail ? <path d="M22,26 Q32,4 46,26 Z" fill={o.finC || o.body} /> : <path d="M26,26 Q32,16 40,28 Z" fill={o.finC || o.body} />}
    <path d="M26,46 Q32,54 40,44 Z" fill={o.finC || o.body} />
    <ellipse cx="34" cy="36" rx="18" ry="13" fill={o.body} />
    {o.stripes && <g stroke={o.markC || "#f2ede0"} strokeWidth="3" fill="none"><path d="M28,25 L26,47 M38,25 L36,47" /></g>}
    {o.bands && <g stroke={o.markC || "#26292e"} strokeWidth="2" fill="none"><path d="M24,27 Q26,36 24,45" /><path d="M34,25 Q36,36 34,47" /><path d="M44,28 Q46,36 44,44" /></g>}
    {o.spots && <g fill={o.markC || "#e8c547"}><circle cx="28" cy="32" r="1.8" /><circle cx="38" cy="38" r="1.8" /><circle cx="32" cy="42" r="1.4" /></g>}
    {o.bill && <path d="M50,36 L64,34 L50,38 Z" fill={o.body} />}
    {o.lure && <g><path d="M40,26 Q44,14 50,16" stroke={o.body} strokeWidth="1.6" fill="none" /><circle cx="51" cy="15" r="3.4" fill={o.lureC || "#8fd9e8"} /></g>}
    {o.puff && <g fill={o.body}>{[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${34 + 17 * Math.cos(i)},${36 + 13 * Math.sin(i)} l3,-3 l1,4 Z`} />)}</g>}
    {o.beak && <path d="M48,36 Q54,34 54,38 Q50,40 48,39 Z" fill={o.beakC || "#8fd9b5"} />}
    {o.teeth && teethRow(39, 44, 3, 3)}
    <Eye x={44} y={33} r={o.bigEye ? 3.4 * er : 2.4 * er} iris={o.iris || "#e8c547"} />
  </g>
);
const shorseA = (o) => (er) => (
  <g>
    {o.leafy && <g fill={o.leafC || o.body} opacity=".9"><ellipse cx="18" cy="26" rx="6" ry="3" transform="rotate(-30 18 26)" /><ellipse cx="16" cy="40" rx="6" ry="3" transform="rotate(20 16 40)" /><ellipse cx="46" cy="30" rx="5" ry="3" transform="rotate(30 46 30)" /><ellipse cx="20" cy="52" rx="5" ry="3" /></g>}
    <path d="M36,22 Q46,22 46,30 Q46,36 38,36 L34,42 Q34,52 40,54 Q30,58 28,50 Q26,42 30,36 L30,26 Q30,20 36,22 Z" fill={o.body} />
    {o.crown && <path d="M32,20 L34,14 L37,19 L40,13 L41,21 Z" fill={o.crownC || "#e8c547"} />}
    {o.rings && <g stroke={o.markC || "#e8c547"} strokeWidth="1.2" fill="none"><path d="M29,40 L36,40 M29,46 L38,46 M30,50 L40,50" /></g>}
    <path d="M44,30 Q52,31 54,34 Q50,35 44,34 Z" fill={o.snout || o.body} />
    <Eye x={40} y={28} r={2.2 * er} iris={o.iris || "#e8c547"} />
  </g>
);
// --- cnidarians, cephalopods, crustaceans ---
const jellyA = (o) => (er) => (
  <g>
    {o.cube ? <path d="M18,20 L46,20 L48,40 L16,40 Z" fill={o.bell} opacity=".85" />
      : <path d="M12,40 Q12,16 32,16 Q52,16 52,40 Q42,44 32,42 Q22,44 12,40 Z" fill={o.bell} opacity=".85" />}
    <g stroke={o.tentC || o.bell} strokeWidth={o.thick ? 3 : 1.6} fill="none" strokeLinecap="round" opacity=".9">
      <path d="M18,40 Q14,52 18,62" /><path d="M25,42 Q22,54 26,63" /><path d="M32,42 Q32,54 32,63" /><path d="M39,42 Q42,54 38,63" /><path d="M46,40 Q50,52 46,62" />
    </g>
    {o.frill && <path d="M20,38 Q32,48 44,38 Q40,50 32,52 Q24,50 20,38 Z" fill={o.frillC || "#f2ede0"} opacity=".7" />}
    <g fill={o.markC || "#f2ede0"} opacity=".85"><circle cx="26" cy="30" r="3.4" /><circle cx="38" cy="30" r="3.4" /><circle cx="32" cy="24" r="3" /></g>
  </g>
);
const cephA = (o) => (er) => (
  <g>
    <g stroke={o.hide} strokeWidth="3.4" fill="none" strokeLinecap="round">
      <path d="M20,44 Q10,52 8,62" /><path d="M26,48 Q20,56 18,63" /><path d="M32,50 Q32,58 32,63" /><path d="M38,48 Q44,56 46,63" /><path d="M44,44 Q54,52 56,62" />
    </g>
    {o.shell && <g><path d="M32,10 Q54,14 54,34 Q54,50 34,50 Q16,50 16,32 Q16,14 32,10 Z" fill={o.shellC || "#e8dcc3"} /><g stroke={o.bandC || "#c9704a"} strokeWidth="2" fill="none"><path d="M32,10 Q34,30 34,50" /><path d="M18,24 Q34,28 52,24" /><path d="M20,40 Q34,42 50,40" /></g></g>}
    {o.mantle !== false && !o.shell && <ellipse cx="32" cy="30" rx="15" ry={o.squid ? 18 : 14} fill={o.hide} />}
    {o.fins && <g fill={o.finC || o.hide}><ellipse cx="15" cy="22" rx="6" ry="9" /><ellipse cx="49" cy="22" rx="6" ry="9" /></g>}
    {o.warts && <g fill={o.markC || "#8a4a3c"} opacity=".7"><circle cx="26" cy="26" r="2" /><circle cx="38" cy="24" r="2" /><circle cx="32" cy="34" r="1.8" /></g>}
    <Eye x={25} y={o.shell ? 44 : 34} r={o.bigEye ? 4 * er : 2.8 * er} iris={o.iris || "#e8c547"} />
    <Eye x={39} y={o.shell ? 44 : 34} r={o.bigEye ? 4 * er : 2.8 * er} iris={o.iris || "#e8c547"} />
  </g>
);
const crabA = (o) => (er) => (
  <g>
    <g stroke={o.shell} strokeWidth="2.6" fill="none" strokeLinecap="round">
      <path d="M20,42 Q10,46 6,56" /><path d="M22,46 Q14,54 14,62" /><path d="M44,42 Q54,46 58,56" /><path d="M42,46 Q50,54 50,62" />
    </g>
    <g fill={o.clawC || o.shell}>
      <path d={o.bigClaw ? "M14,30 Q0,26 2,14 Q12,12 16,24 Z" : "M16,30 Q6,28 6,20 Q14,18 18,26 Z"} />
      <path d="M48,30 Q58,28 58,20 Q50,18 46,26 Z" />
    </g>
    {o.lobster ? <ellipse cx="32" cy="40" rx="12" ry="17" fill={o.shell} /> : <ellipse cx="32" cy="38" rx="17" ry="12" fill={o.shell} />}
    {o.bands && <g stroke={o.markC || "#e8dcc3"} strokeWidth="1.6" fill="none"><path d="M20,36 Q32,40 44,36" /><path d="M22,44 Q32,47 42,44" /></g>}
    <g stroke={o.shell} strokeWidth="1.4" fill="none"><path d="M27,28 L25,18" /><path d="M37,28 L39,18" /></g>
    <Eye x={25} y={17} r={2.2 * er} iris={o.iris || "#2a2018"} />
    <Eye x={39} y={17} r={2.2 * er} iris={o.iris || "#2a2018"} />
  </g>
);

// ---------------- MAMMAL ART ----------------
Object.assign(ART, {
  // small cats
  pallascat: felArt({ fur: "#c9b89a", inner: "#e8d5b5", muzzle: "#f2ede0", iris: "#c9d94a", ruff: true, ruffC: "#a89878", spots: true, markC: "#5c5344" }),
  puma: felArt({ fur: "#c9a578", inner: "#e8c9a5", muzzle: "#f2ede0", iris: "#c9a43a", tear: "#5c4436" }),
  ocelot: felArt({ fur: "#d9b06a", inner: "#e8cfa5", muzzle: "#f2ede0", iris: "#8a9a3a", rosettes: true, markC: "#3c2e22" }),
  cloudedleopard: felArt({ fur: "#c9b078", inner: "#e8d0a5", muzzle: "#f2ede0", iris: "#7a9a4a", rosettes: true, markC: "#4c3c2e", tufts: true }),
  fishingcat: felArt({ fur: "#a3987a", inner: "#c9bd9a", muzzle: "#e8e0d0", iris: "#8fb35c", spots: true, markC: "#3c3428" }),
  jaguarundi: felArt({ fur: "#8a7a68", inner: "#a89a85", muzzle: "#c9bda8", iris: "#a3853a", earTall: false }),
  margay: felArt({ fur: "#d9b884", inner: "#e8d4a8", muzzle: "#f2ede0", iris: "#6b8a3a", rosettes: true, markC: "#3c2e22" }),
  bobcat: felArt({ fur: "#c9a884", inner: "#e8ccaa", muzzle: "#f2ede0", iris: "#c9a43a", tufts: true, spots: true, markC: "#5c4436" }),
  marbledcat: felArt({ fur: "#c9a878", inner: "#e8c9a5", muzzle: "#f2ede0", iris: "#8a9a4a", rosettes: true, markC: "#4c3826" }),
  blackfootedcat: felArt({ fur: "#d9c49a", inner: "#e8dcc0", muzzle: "#f2ede0", iris: "#c9b03a", spots: true, markC: "#5c4436" }),
  rustyspottedcat: felArt({ fur: "#c99a72", inner: "#e8bd96", muzzle: "#f2ede0", iris: "#a39a3a", spots: true, markC: "#8a4a2a" }),
  kodkod: felArt({ fur: "#a3855c", inner: "#c9a878", muzzle: "#e8dcc3", iris: "#8a8a3a", spots: true, markC: "#3c2e1e" }),
  andeancat: felArt({ fur: "#b5b0a3", inner: "#d4d0c4", muzzle: "#f2ede0", iris: "#c9c44a", stripes: true, markC: "#8a6f52", tufts: true }),
  asiangoldencat: felArt({ fur: "#c98a52", inner: "#e8ad78", muzzle: "#f2ede0", iris: "#c9a43a" }),
  jungle_cat: felArt({ fur: "#c9b085", inner: "#e8d0a8", muzzle: "#f2ede0", iris: "#c9c44a", tufts: true }),
  // canids
  tibetanfox: canArt({ fur: "#c9a878", inner: "#e8cfa5", muzzle: "#e8dcc3", iris: "#c9a43a", mask: "#a3937a" }),
  dingo: canArt({ fur: "#d9a05c", inner: "#e8c48a", muzzle: "#f2ede0", iris: "#c9853a" }),
  dhole: canArt({ fur: "#c96b3a", inner: "#e8955c", muzzle: "#e8dcc3", iris: "#8a4a2a", earRound: true }),
  coyote: canArt({ fur: "#a3906b", inner: "#c9b490", muzzle: "#e8dcc3", iris: "#c9a43a" }),
  bateared: canArt({ fur: "#b5a388", inner: "#d4c4a8", muzzle: "#e8dcc3", iris: "#3c3226", mask: "#4c4438", earRound: true }),
  grayfox: canArt({ fur: "#8a8578", inner: "#b5b0a0", muzzle: "#e8dcc3", iris: "#c9a43a", line: "#3c3226" }),
  corsacfox: canArt({ fur: "#d9bd8a", inner: "#e8d4a8", muzzle: "#f2ede0", iris: "#c9a43a" }),
  swiftfox: canArt({ fur: "#c9b085", inner: "#e8ceaa", muzzle: "#f2ede0", iris: "#c9a03a", mask: "#5c4c3c" }),
  culpeo: canArt({ fur: "#c9723a", inner: "#e89a5c", muzzle: "#e8dcc3", iris: "#c9853a" }),
  bushdog: canArt({ fur: "#8a6142", inner: "#a88562", muzzle: "#c9a078", iris: "#3c3226", earRound: true }),
  raccoondog: canArt({ fur: "#a3907a", inner: "#c4b096", muzzle: "#e8dcc3", iris: "#2a2018", mask: "#3c3226", earRound: true }),
  ethiopianwolf: canArt({ fur: "#c96b42", inner: "#e8956b", muzzle: "#f2ede0", iris: "#c9853a" }),
  blackbackjackal: canArt({ fur: "#c9995c", inner: "#e8bd85", muzzle: "#e8dcc3", iris: "#c9a43a", line: "#2a2018" }),
  aardwolf: canArt({ fur: "#d9b884", inner: "#e8d0a5", muzzle: "#e8dcc3", iris: "#8a6b3a", crest: "#3c3226", line: "#3c3226" }),
  stripedhyena: canArt({ fur: "#c9bda3", inner: "#e0d5bd", muzzle: "#d9cfc0", iris: "#8a6b3a", crest: "#3c3226", line: "#3c3226", earTall: true }),
  brownhyena: canArt({ fur: "#6b5442", inner: "#8a7058", muzzle: "#a89078", iris: "#8a6b3a", crest: "#c9b08a" }),
  // viverrids & herpestids
  binturong: mustA({ fur: "#3c3630", inner: "#6b6058", muzzle: "#8a7f70", iris: "#c9a43a", earRound: true, cheeks: true, cheekC: "#8a8070" }),
  civet: mustA({ fur: "#c9b894", inner: "#e0d0ac", muzzle: "#e8dcc3", iris: "#3c3226", mask: "#3c3226" }),
  genet: mustA({ fur: "#d9c9a3", inner: "#e8dcc0", muzzle: "#f2ede0", iris: "#c9a43a", mask: "#4c4438", rings: true }),
  fossa: mustA({ fur: "#a3703c", inner: "#c99a68", muzzle: "#d9c4a3", iris: "#8a6b2a", earRound: true }),
  mongoose: mustA({ fur: "#8a7a5c", inner: "#a89878", muzzle: "#c9bd9a", iris: "#c9703a" }),
  linsang: mustA({ fur: "#e8d4a5", inner: "#f2e4c4", muzzle: "#f8f2e4", iris: "#3c3226", rings: true, markC: "#3c3226" }),
  // bears
  grizzly: bearA({ fur: "#8a6142", inner: "#6b4a30", muzzle: "#c9a078", iris: "#3a2e22" }),
  polarbear: bearA({ fur: "#f2ede0", inner: "#d9d4c4", muzzle: "#e8e4d8", nose: "#2a2018", iris: "#2a2018" }),
  blackbear: bearA({ fur: "#3c3630", inner: "#2a2620", muzzle: "#a3907a", iris: "#5c4436" }),
  panda: bearA({ fur: "#f5f2e8", inner: "#26292e", muzzle: "#e8e4d8", eyePatch: "#26292e", iris: "#2a2018" }),
  spectacledbear: bearA({ fur: "#4c4038", inner: "#3c332a", muzzle: "#c9ae7d", eyePatch: "#e8d4a5", iris: "#3a2e22" }),
  slothbear: bearA({ fur: "#2e2921", inner: "#1e1a14", muzzle: "#d9cfc0", blaze: "#e8dcc3", iris: "#5c4436" }),
  moonbear: bearA({ fur: "#26292e", inner: "#16181c", muzzle: "#a3907a", bib: "#f2ede0", iris: "#5c4436" }),
  sunbear: bearA({ fur: "#3c3226", inner: "#2a2418", muzzle: "#c9a878", bib: "#e8c547", iris: "#5c4436" }),
  // procyonids, ailurids, mustelids
  raccoon: mustA({ fur: "#8a8578", inner: "#a8a396", muzzle: "#e8e4d8", iris: "#2a2018", mask: "#26292e", earRound: true, rings: true }),
  redpanda: mustA({ fur: "#c9703a", inner: "#f2ede0", muzzle: "#f8f4ea", iris: "#3c2a1e", earRound: true, cheeks: true, cheekC: "#f2ede0", rings: true, markC: "#8a5230" }),
  coati: mustA({ fur: "#8a6b4a", inner: "#a88a68", muzzle: "#d9c4a3", iris: "#3c3226", rings: true }),
  kinkajou: mustA({ fur: "#c9955c", inner: "#e8b585", muzzle: "#e8d4b5", iris: "#3c2a1e", earRound: true }),
  ringtail: mustA({ fur: "#c9b894", inner: "#e0d4b0", muzzle: "#f2ede0", iris: "#2a2018", earRound: true, rings: true }),
  giantotter: mustA({ fur: "#5c4030", inner: "#7a5a44", muzzle: "#c9b08a", iris: "#3c3226", bib: "#e8dcc3", earRound: true }),
  seaotter: mustA({ fur: "#7a5c44", inner: "#9a7a5c", muzzle: "#e8dcc3", iris: "#2a2018", earRound: true, cheeks: true, cheekC: "#d9cfc0" }),
  honeybadger: mustA({ fur: "#26292e", inner: "#16181c", muzzle: "#8a8578", iris: "#2a2018", blaze: "#e8e4d8", earRound: true }),
  wolverine: mustA({ fur: "#4c3c2e", inner: "#3a2c20", muzzle: "#8a6f52", iris: "#8a6b3a", cheeks: true, cheekC: "#c9a878", earRound: true }),
  marten: mustA({ fur: "#6b4c34", inner: "#8a6448", muzzle: "#c9a878", iris: "#3c2a1e", bib: "#e8c547" }),
  fisher: mustA({ fur: "#3c3026", inner: "#2a2118", muzzle: "#8a7058", iris: "#3c2a1e" }),
  stoat: mustA({ fur: "#c9955c", inner: "#e8b585", muzzle: "#f2ede0", iris: "#2a2018", bib: "#f8f4ea" }),
  weasel: mustA({ fur: "#b5854c", inner: "#d4a570", muzzle: "#f2ede0", iris: "#2a2018", bib: "#f2ede0" }),
  ferret: mustA({ fur: "#d9c9a3", inner: "#e8dcc0", muzzle: "#f2ede0", iris: "#c94a3a", mask: "#5c4436" }),
  mink: mustA({ fur: "#4c3428", inner: "#3a2620", muzzle: "#6b5040", iris: "#2a2018" }),
  tayra: mustA({ fur: "#2e2921", inner: "#1e1a14", muzzle: "#8a7058", iris: "#3c2a1e", bib: "#c9a878" }),
  skunk: mustA({ fur: "#26292e", inner: "#16181c", muzzle: "#3c3630", iris: "#2a2018", blaze: "#f5f2e8" }),
  // primates — apes
  gorilla: primA({ fur: "#3c3630", face: "#26221e", crest: true, crestC: "#2a2620", brow: true, browC: "#26221e", iris: "#5c4436" }),
  chimpanzee: primA({ fur: "#3c322a", face: "#c9a888", bigEar: true, inner: "#b59878", iris: "#5c4436" }),
  bonobo: primA({ fur: "#26221c", face: "#4c3c30", bigEar: true, inner: "#3c2e24", iris: "#5c4436", crest: true, crestC: "#3c3630" }),
  orangutan: primA({ fur: "#c9703a", face: "#8a5c3c", ruff: true, ruffC: "#a3562a", iris: "#5c3a22" }),
  gibbon: primA({ fur: "#4c4038", face: "#2a2620", ruff: true, ruffC: "#e8dcc3", iris: "#5c4436" }),
  siamang: primA({ fur: "#26221c", face: "#1e1a16", ruff: true, ruffC: "#2e2921", iris: "#5c4436" }),
  // primates — monkeys
  mandrill: primA({ fur: "#5c4c38", face: "#c94a3a", cheeks: true, cheekC: "#3a5cd9", crest: true, crestC: "#8a6f42", iris: "#8a5c2a", muzzle: "#c94a3a" }),
  baboon: primA({ fur: "#8a7a5c", face: "#4c3c30", ruff: true, ruffC: "#a89070", iris: "#8a5c2a" }),
  gelada: primA({ fur: "#8a6b4a", face: "#c9a888", ruff: true, ruffC: "#c9a878", stripe: true, stripeC: "#c94a3a", iris: "#5c4436" }),
  macaque: primA({ fur: "#a3906b", face: "#c9857a", bigEar: true, inner: "#b5786e", iris: "#8a5c2a" }),
  capuchin: primA({ fur: "#6b4c34", face: "#e8d4b5", crest: true, crestC: "#3c2e22", iris: "#5c3a22" }),
  howler: primA({ fur: "#a3502a", face: "#3c2a1e", ruff: true, ruffC: "#8a3c1e", iris: "#5c3a22" }),
  spidermonkey: primA({ fur: "#4c3c2e", face: "#c9a888", iris: "#5c4436" }),
  marmoset: primA({ fur: "#a3907a", face: "#c9a888", ruff: true, ruffC: "#f2ede0", iris: "#5c3a22" }),
  tamarin: primA({ fur: "#3c3226", face: "#26221c", ruff: true, ruffC: "#e8853a", iris: "#5c3a22" }),
  colobus: primA({ fur: "#26221c", face: "#3c3630", ruff: true, ruffC: "#f5f2e8", iris: "#5c4436" }),
  langur: primA({ fur: "#a3a08a", face: "#26221c", ruff: true, ruffC: "#c4c0a8", iris: "#8a5c2a" }),
  proboscis: primA({ fur: "#c9853a", face: "#d9a578", iris: "#5c3a22", muzzle: "#c96b3a" }),
  uakari: primA({ fur: "#a3703c", face: "#d94a3a", iris: "#8a5c2a", muzzle: "#c94a3a" }),
  vervet: primA({ fur: "#8a8a6b", face: "#26221c", ruff: true, ruffC: "#c9c4a8", iris: "#5c4436" }),
  snubnosed: primA({ fur: "#c9a03a", face: "#5c8ad9", ruff: true, ruffC: "#e8c547", iris: "#5c4436" }),
  // primates — strepsirrhines
  ringtaillemur: primA({ fur: "#a8a89a", face: "#f2ede0", bigEar: true, inner: "#d9d4c4", iris: "#c9a43a", cheeks: true, cheekC: "#26292e" }),
  indri: primA({ fur: "#26221c", face: "#1e1a16", ruff: true, ruffC: "#f2ede0", iris: "#8fb35c" }),
  sifaka: primA({ fur: "#f2ede0", face: "#26221c", ruff: true, ruffC: "#e8dcc3", iris: "#c9a43a" }),
  ayeaye: primA({ fur: "#3c3630", face: "#5c5448", bigEar: true, inner: "#3c3630", iris: "#e8c547" }),
  tarsier: primA({ fur: "#c9b894", face: "#d9c9a8", bigEar: true, inner: "#c9a888", iris: "#e8c547" }),
  loris: primA({ fur: "#c9b08a", face: "#e8dcc3", iris: "#3c2a1e", cheeks: true, cheekC: "#8a6f52" }),
  // marsupials
  kangaroo: marsA({ fur: "#a3785c", inner: "#c99a78", muzzle: "#d9c4a3", iris: "#3a2e22" }),
  wallaby: marsA({ fur: "#8a7a68", inner: "#a89885", muzzle: "#c9bda8", iris: "#3a2e22" }),
  treekangaroo: marsA({ fur: "#8a5c3a", inner: "#a87a52", muzzle: "#c9a878", iris: "#3a2e22", fluff: true, earC: "#8a5c3a", bib: "#e8c9a5" }),
  koala: marsA({ fur: "#a8a89a", inner: "#f2ede0", muzzle: "#c4c0b0", nose: "#3c3630", iris: "#3a2e22", fluff: true, earC: "#b5b5a3" }),
  wombat: marsA({ fur: "#8a7a62", inner: "#a89880", muzzle: "#c9bda3", iris: "#3a2e22", fluff: true, earC: "#8a7a62" }),
  quokka: marsA({ fur: "#a3855c", inner: "#c9a878", muzzle: "#d9c9a8", iris: "#3a2e22", fluff: true, earC: "#a3855c" }),
  tasdevil: marsA({ fur: "#26221c", inner: "#c94a3a", muzzle: "#5c4c44", iris: "#c94a3a", fluff: true, earC: "#c94a3a", bib: "#f2ede0" }),
  quoll: marsA({ fur: "#8a6b52", inner: "#a88a6b", muzzle: "#c9a888", iris: "#3a2e22", spots: true, markC: "#f2ede0" }),
  numbat: marsA({ fur: "#c9703a", inner: "#e8955c", muzzle: "#d9c4a3", iris: "#3a2e22", stripes: true, markC: "#f2ede0" }),
  bilby: marsA({ fur: "#a8a396", inner: "#e8c9c9", muzzle: "#d9d4c4", iris: "#3a2e22" }),
  bandicoot: marsA({ fur: "#a3906b", inner: "#c9b490", muzzle: "#d9cfc0", iris: "#3a2e22" }),
  sugarglider: marsA({ fur: "#a8a8a0", inner: "#e8dcc3", muzzle: "#e8e4d8", iris: "#26221c", fluff: true, earC: "#a8a8a0", stripes: true, markC: "#3c3630" }),
  cuscus: marsA({ fur: "#d9c9a3", inner: "#e8dcc0", muzzle: "#e8dcc3", iris: "#c94a3a", fluff: true, earC: "#d9c9a3", spots: true, markC: "#8a6f52" }),
  opossum: marsA({ fur: "#a8a396", inner: "#e8c9c9", muzzle: "#f2ede0", iris: "#26221c", fluff: true, earC: "#3c3630" }),
  // ungulates
  zebra: ungA({ coat: "#f5f2e8", stripes: true, markC: "#26221c", mane: true, maneC: "#26221c", muzzle: "#3c3630" }),
  giraffe: ungA({ coat: "#e8c98a", patches: true, markC: "#a3683c", ossi: true, muzzle: "#e8dcc3", iris: "#3a2e22" }),
  okapi: ungA({ coat: "#5c3c2a", ossi: true, hornC: "#3c2a1e", muzzle: "#3c2a1e", iris: "#3a2e22", stripes: false }),
  bison: ungA({ coat: "#5c4636", curved: true, hornC: "#3c3226", mane: true, maneC: "#3c3226", muzzle: "#3c3226" }),
  muskox: ungA({ coat: "#4c3c2e", curved: true, hornC: "#c9b08a", mane: true, maneC: "#3a2c20", muzzle: "#3c3226" }),
  moose: ungA({ coat: "#5c4432", antler: true, hornC: "#8a6f52", muzzle: "#3c3226", iris: "#3a2e22" }),
  elk: ungA({ coat: "#a3784c", antler: true, hornC: "#8a6f52", mane: true, maneC: "#5c4030", muzzle: "#3c3226" }),
  reindeer: ungA({ coat: "#a8987a", antler: true, hornC: "#c9b08a", mane: true, maneC: "#e8dcc3", muzzle: "#5c4c3c" }),
  whitetail: ungA({ coat: "#b5855c", antler: true, hornC: "#c9b08a", muzzle: "#f2ede0", iris: "#3a2e22" }),
  chital: ungA({ coat: "#c9955c", antler: true, hornC: "#8a6f52", patches: true, markC: "#f2ede0", muzzle: "#e8dcc3" }),
  muntjac: ungA({ coat: "#a3683c", straight: true, hornC: "#5c4030", muzzle: "#3c3226", iris: "#3a2e22" }),
  pudu: ungA({ coat: "#8a6142", straight: true, hornC: "#3c3226", muzzle: "#3c3226", iris: "#3a2e22" }),
  gazelle: ungA({ coat: "#d9b884", curved: true, hornC: "#3c3226", blaze: "#f2ede0", muzzle: "#f2ede0" }),
  springbok: ungA({ coat: "#c9a878", curved: true, hornC: "#3c3226", blaze: "#f8f4ea", muzzle: "#f2ede0" }),
  impala: ungA({ coat: "#c99a5c", curved: true, hornC: "#3c3226", muzzle: "#e8dcc3", iris: "#3a2e22" }),
  gerenuk: ungA({ coat: "#c9a06b", curved: true, hornC: "#3c3226", muzzle: "#e8dcc3", iris: "#3a2e22" }),
  dikdik: ungA({ coat: "#a89070", straight: true, hornC: "#3c3226", muzzle: "#3c3226", iris: "#3a2e22" }),
  klipspringer: ungA({ coat: "#a8987a", straight: true, hornC: "#3c3226", muzzle: "#3c3226", iris: "#3a2e22" }),
  kudu: ungA({ coat: "#8a7a6b", spiral: true, hornC: "#5c4436", stripes: true, markC: "#e8dcc3", muzzle: "#e8dcc3" }),
  eland: ungA({ coat: "#c9a878", spiral: true, hornC: "#5c4436", mane: true, maneC: "#8a6f52", muzzle: "#e8dcc3" }),
  bongo: ungA({ coat: "#c9622a", spiral: true, hornC: "#5c4436", stripes: true, markC: "#f2ede0", muzzle: "#3c3226" }),
  nyala: ungA({ coat: "#5c4c3c", spiral: true, hornC: "#c9b08a", stripes: true, markC: "#c9bda3", mane: true, maneC: "#3c3226" }),
  sitatunga: ungA({ coat: "#8a6b4a", spiral: true, hornC: "#5c4436", stripes: true, markC: "#c9bda3", muzzle: "#e8dcc3" }),
  oryx: ungA({ coat: "#d9cfc0", straight: true, hornC: "#26221c", blaze: "#26221c", mane: true, maneC: "#26221c", muzzle: "#26221c" }),
  addax: ungA({ coat: "#f2ede0", spiral: true, hornC: "#5c4436", blaze: "#8a6f52", muzzle: "#3c3226" }),
  saiga: ungA({ coat: "#d9c9a3", straight: true, hornC: "#e8dcc3", muzzle: "#c9b08a", iris: "#3a2e22" }),
  wildebeest: ungA({ coat: "#5c5448", curved: true, hornC: "#3c3226", mane: true, maneC: "#26221c", muzzle: "#26221c" }),
  hartebeest: ungA({ coat: "#c9853a", curved: true, hornC: "#3c3226", muzzle: "#5c4030", iris: "#3a2e22" }),
  topi: ungA({ coat: "#8a5c3a", curved: true, hornC: "#3c3226", patches: true, markC: "#3c2a1e", muzzle: "#3c2a1e" }),
  blackbuck: ungA({ coat: "#4c3428", spiral: true, hornC: "#26221c", blaze: "#f2ede0", muzzle: "#f2ede0" }),
  pronghorn: ungA({ coat: "#c9a878", straight: true, hornC: "#3c3226", blaze: "#f2ede0", muzzle: "#f2ede0" }),
  bighorn: ungA({ coat: "#a3856b", curved: true, hornC: "#8a7a5c", muzzle: "#e8dcc3", iris: "#3a2e22" }),
  markhor: ungA({ coat: "#c9b08a", spiral: true, hornC: "#8a7a5c", mane: true, maneC: "#e8dcc3", muzzle: "#e8dcc3" }),
  takin: ungA({ coat: "#d9c48a", curved: true, hornC: "#3c3226", muzzle: "#5c4030", iris: "#3a2e22" }),
  yak: ungA({ coat: "#3c3630", curved: true, hornC: "#c9b08a", mane: true, maneC: "#26221c", muzzle: "#5c5448" }),
  llama: ungA({ coat: "#e8dcc3", muzzle: "#f2ede0", iris: "#3a2e22" }),
  alpaca: ungA({ coat: "#d9c9a3", mane: true, maneC: "#e8dcc3", muzzle: "#e8dcc3", iris: "#3a2e22" }),
  vicuna: ungA({ coat: "#c9a878", muzzle: "#f2ede0", iris: "#3a2e22" }),
  guanaco: ungA({ coat: "#c9955c", muzzle: "#e8dcc3", iris: "#3a2e22" }),
  tapir: ungA({ coat: "#4c4438", muzzle: "#3c3630", iris: "#3a2e22", blaze: "#a8a396" }),
  whiterhino: ungA({ coat: "#a8a396", nasal: true, hornC: "#c9bda3", muzzle: "#8a8578", iris: "#3a2e22" }),
  blackrhino: ungA({ coat: "#6b6860", nasal: true, hornC: "#a8a08a", muzzle: "#5c5850", iris: "#3a2e22" }),
  babirusa: ungA({ coat: "#a8968a", straight: true, hornC: "#f5efdf", muzzle: "#8a7a70", iris: "#3a2e22" }),
  peccary: ungA({ coat: "#5c5448", muzzle: "#3c3630", iris: "#3a2e22", mane: true, maneC: "#3c3630" }),
  chevrotain: ungA({ coat: "#8a6b4a", muzzle: "#3c3226", iris: "#3a2e22", spots: false }),
  duiker: ungA({ coat: "#a3785c", straight: true, hornC: "#3c3226", muzzle: "#3c3226", iris: "#3a2e22" }),
  pygmyhippo: ungA({ coat: "#5c4c44", muzzle: "#8a6f5c", iris: "#3a2e22" }),
  // proboscideans
  africanelephant: elephA({ hide: "#8a8578", bigEar: true, tusks: true, longTusk: true, iris: "#5c4436" }),
  asianelephant: elephA({ hide: "#8a7f78", tusks: true, iris: "#5c4436" }),
  mammoth: elephA({ hide: "#8a5c3c", hair: true, hairC: "#a3683c", tusks: true, longTusk: true, iris: "#5c4436" }),
  // pinnipeds
  walrus: pinA({ fur: "#a3705c", head: "#b5806b", muzzle: "#c9a888", tusks: true, iris: "#8a4a3a", flip: "#8a5c4a" }),
  sealion: pinA({ fur: "#6b4c34", head: "#7a5840", muzzle: "#a3785c", earFlap: true, iris: "#3c2a1e" }),
  fursealion: pinA({ fur: "#4c3c2e", head: "#5c4a38", muzzle: "#8a6f52", earFlap: true, mane: true, maneC: "#3a2c20", iris: "#3c2a1e" }),
  elephantseal: pinA({ fur: "#6b6058", head: "#7a7068", muzzle: "#8a8078", iris: "#26221c" }),
  leopardseal: pinA({ fur: "#5a768a", head: "#68849a", muzzle: "#8fa8b5", spots: true, markC: "#3c5468", iris: "#26221c" }),
  weddellseal: pinA({ fur: "#4c5c68", head: "#5a6a78", muzzle: "#8a9aa8", spots: true, markC: "#8fa8b5", iris: "#26221c" }),
  harpseal: pinA({ fur: "#e8e4d8", head: "#f2ede0", muzzle: "#f8f4ea", spots: true, markC: "#8a8578", iris: "#26221c" }),
  ribbonseal: pinA({ fur: "#3c3630", head: "#4c4438", muzzle: "#8a8578", spots: true, markC: "#f2ede0", iris: "#26221c" }),
  monkseal: pinA({ fur: "#6b6b5c", head: "#7a7a6b", muzzle: "#a8a89a", iris: "#26221c" }),
  crabeaterseal: pinA({ fur: "#c9bda3", head: "#d9cfc0", muzzle: "#e8dcc3", iris: "#26221c" }),
  // cetaceans
  bluewhale: cetA({ hide: "#5a768a", belly: "#a3b8c4", dorsal: true, pleats: true, baleen: true, blow: true, iris: "#26221c" }),
  humpback: cetA({ hide: "#3c4c5c", belly: "#c9bda3", dorsal: true, pleats: true, baleen: true, blow: true, spots: true, markC: "#8a9aa8" }),
  finwhale: cetA({ hide: "#4c5c68", belly: "#c4d0d9", dorsal: true, pleats: true, baleen: true, blow: true }),
  minke: cetA({ hide: "#5c6b78", belly: "#c9d4dc", dorsal: true, pleats: true, baleen: true }),
  seiwhale: cetA({ hide: "#48586b", belly: "#b5c4cf", dorsal: true, baleen: true }),
  brydeswhale: cetA({ hide: "#54626b", belly: "#b5c0c4", dorsal: true, pleats: true, baleen: true }),
  rightwhale: cetA({ hide: "#26292e", belly: "#8a8578", baleen: true, blow: true, spots: true, markC: "#c9bda3" }),
  bowhead: cetA({ hide: "#2e2921", belly: "#e8dcc3", baleen: true, blow: true }),
  graywhale: cetA({ hide: "#8a8578", belly: "#c4c0b0", baleen: true, blow: true, spots: true, markC: "#e8e4d8" }),
  spermwhale: cetA({ hide: "#5c5448", belly: "#8a8578", melon: true, melonC: "#6b6358", blow: true, teeth: true }),
  orca: cetA({ hide: "#26292e", belly: "#f5f2e8", dorsal: true, tall: true, patch: "#f5f2e8", blow: true, iris: "#26221c" }),
  pilotwhale: cetA({ hide: "#26221c", belly: "#4c4438", dorsal: true, melon: true, melonC: "#2e2921" }),
  falsekiller: cetA({ hide: "#3c3630", belly: "#5c5448", dorsal: true, melon: true, melonC: "#3c3630" }),
  melonhead: cetA({ hide: "#4c4c54", belly: "#8a8a90", dorsal: true, melon: true, melonC: "#54545c" }),
  beluga: cetA({ hide: "#f2ede0", belly: "#f8f4ea", melon: true, melonC: "#f5f2e8", blow: true, iris: "#26221c" }),
  narwhal: cetA({ hide: "#8a8fa3", belly: "#c9cdd9", tusk: true, melon: true, melonC: "#9a9fb0", spots: true, markC: "#5c6070" }),
  bottlenose: cetA({ hide: "#7a8a94", belly: "#c9d4d9", dorsal: true, melon: true, melonC: "#8a9aa3", blow: true }),
  spinnerdolphin: cetA({ hide: "#5c6b7a", belly: "#c4d0d9", dorsal: true, melon: true, melonC: "#6b7a8a" }),
  duskydolphin: cetA({ hide: "#3c4c5c", belly: "#e8e4d8", dorsal: true, melon: true, melonC: "#4c5c6b", patch: "#c9bda3" }),
  hectorsdolphin: cetA({ hide: "#8a8578", belly: "#f2ede0", dorsal: true, melon: true, melonC: "#26292e", patch: "#26292e" }),
  commersons: cetA({ hide: "#26292e", belly: "#f5f2e8", dorsal: true, melon: true, melonC: "#26292e", patch: "#f5f2e8" }),
  rissos: cetA({ hide: "#a8a89a", belly: "#d9d4c4", dorsal: true, tall: true, melon: true, melonC: "#b5b5a3", spots: true, markC: "#f2ede0" }),
  irrawaddy: cetA({ hide: "#8a9099", belly: "#c4cad0", dorsal: true, melon: true, melonC: "#99a0a8" }),
  amazonriverdolphin: cetA({ hide: "#d9a5b5", belly: "#e8c9d4", melon: true, melonC: "#e8b5c4", rostrum: "#d9a5b5" }),
  gangesdolphin: cetA({ hide: "#8a8578", belly: "#b5b0a0", rostrum: "#8a8578", melon: true, melonC: "#8a8578" }),
  vaquita: cetA({ hide: "#8a8a90", belly: "#e8e4d8", dorsal: true, patch: "#26292e", melon: true, melonC: "#8a8a90" }),
  harborporpoise: cetA({ hide: "#5c6068", belly: "#c9c9c4", dorsal: true, melon: true, melonC: "#6b6f78" }),
  cuvierbeaked: cetA({ hide: "#8a8578", belly: "#c4c0b0", dorsal: true, melon: true, melonC: "#9a958a", spots: true, markC: "#e8e4d8" }),
  // sirenians
  manatee: cetA({ hide: "#8a8578", belly: "#a8a396", melon: true, melonC: "#8a8578", fluke: "#7a7568", iris: "#3c3226" }),
  dugong: cetA({ hide: "#a3988a", belly: "#c4bcae", melon: true, melonC: "#a3988a", fluke: "#8a8078", iris: "#3c3226" }),
  // rodents & lagomorphs
  capybara: rodA({ fur: "#8a6b4a", inner: "#6b5038", muzzle: "#a3856b", iris: "#3a2e22" }),
  porcupine: rodA({ fur: "#3c3630", inner: "#2a2620", muzzle: "#5c5448", quills: true, quillC: "#e8dcc3", iris: "#2a2018" }),
  chinchilla: rodA({ fur: "#a8a8a0", inner: "#e8c9c9", muzzle: "#d9d4c4", iris: "#26221c" }),
  prairiedog: rodA({ fur: "#c9a878", inner: "#e8c9a5", muzzle: "#e8dcc3", iris: "#2a2018" }),
  groundhog: rodA({ fur: "#8a6b4a", inner: "#6b5038", muzzle: "#a89078", iris: "#2a2018" }),
  redsquirrel: rodA({ fur: "#c9703a", inner: "#e8955c", muzzle: "#f2ede0", iris: "#2a2018", bib: "#f2ede0" }),
  flyingsquirrel: rodA({ fur: "#a89885", inner: "#e8dcc3", muzzle: "#f2ede0", iris: "#26221c" }),
  chipmunk: rodA({ fur: "#c9955c", inner: "#e8b585", muzzle: "#f2ede0", stripes: true, markC: "#4c3826", iris: "#2a2018" }),
  dormouse: rodA({ fur: "#d9b884", inner: "#e8cfa5", muzzle: "#f2ede0", iris: "#26221c" }),
  jerboa: rodA({ fur: "#e8d4a5", inner: "#f2e4c4", muzzle: "#f8f2e4", longEar: true, iris: "#26221c" }),
  marmot: rodA({ fur: "#a3855c", inner: "#8a6f42", muzzle: "#c9b08a", iris: "#2a2018" }),
  viscacha: rodA({ fur: "#a8a08a", inner: "#c9c0a8", muzzle: "#d9d0b8", longEar: true, iris: "#26221c" }),
  agouti: rodA({ fur: "#8a6142", inner: "#6b4830", muzzle: "#a3785c", iris: "#2a2018" }),
  mara: rodA({ fur: "#8a7a68", inner: "#a89885", muzzle: "#c9bda8", longEar: true, iris: "#2a2018", bib: "#f2ede0" }),
  nakedmolerat: rodA({ fur: "#e8b5a5", inner: "#d9a08f", muzzle: "#f2c9bd", iris: "#26221c" }),
  degu: rodA({ fur: "#a3855c", inner: "#c9a878", muzzle: "#d9c4a3", iris: "#2a2018" }),
  hare: rodA({ fur: "#b5936b", inner: "#e8c9a5", muzzle: "#f2ede0", longEar: true, iris: "#c9a43a" }),
  arctichare: rodA({ fur: "#f2ede0", inner: "#e8d4d4", muzzle: "#f8f4ea", longEar: true, iris: "#3a5cd9" }),
  pika: rodA({ fur: "#a8907a", inner: "#c9b096", muzzle: "#d9c9b5", iris: "#2a2018" }),
  // xenarthrans
  ninebandarmadillo: xenA({ fur: "#a89078", bands: true, plateC: "#8a7058", iris: "#3a2e22" }),
  giantarmadillo: xenA({ fur: "#8a7058", bands: true, plateC: "#6b5442", iris: "#3a2e22" }),
  giantanteater: xenA({ fur: "#8a8578", snout: true, stripe: true, markC: "#26292e", iris: "#3a2e22" }),
  tamandua: xenA({ fur: "#e8c98a", snout: true, stripe: true, markC: "#3c3630", iris: "#3a2e22" }),
  silkyanteater: xenA({ fur: "#e8d4a5", snout: true, iris: "#26221c" }),
  // monotremes
  platypus: platyA({ fur: "#6b5442", bill: true, billC: "#4c3c30", iris: "#2a2018" }),
  echidna: platyA({ fur: "#5c4c3c", spines: true, spineC: "#e8c547", beakLong: true, billC: "#3c3226", iris: "#2a2018" }),
});

// ---------------- MAMMAL DEX ----------------
const A = (n, art, t, b, m, c, ex) => ({ n, art, t, b, m, l: [], c, ...(ex || {}) });
Object.assign(DEX, {
  // small cats
  pallascat: A("Pallas's Cat", "pallascat", ["Ice", "Night"], B(52, 54, 50, 40), MV.ice, 0.3),
  puma: A("Puma", "puma", ["Predator", "Swift"], B(62, 68, 50, 64), MV.pred, 0.22),
  ocelot: A("Ocelot", "ocelot", ["Predator", "Night"], B(52, 58, 44, 62), MV.night, 0.28),
  cloudedleopard: A("Clouded Leopard", "cloudedleopard", ["Predator", "Canopy"], B(56, 66, 48, 60), MV.can, 0.24),
  fishingcat: A("Fishing Cat", "fishingcat", ["Predator", "Aquatic"], B(54, 58, 48, 50), MV.aqua, 0.28),
  jaguarundi: A("Jaguarundi", "jaguarundi", ["Predator", "Swift"], B(48, 54, 42, 66), MV.swi, 0.3),
  margay: A("Margay", "margay", ["Canopy", "Night"], B(46, 52, 40, 68), MV.can, 0.3),
  bobcat: A("Bobcat", "bobcat", ["Predator", "Swift"], B(52, 58, 46, 56), MV.pred, 0.3),
  marbledcat: A("Marbled Cat", "marbledcat", ["Canopy", "Predator"], B(46, 54, 42, 62), MV.can, 0.3),
  blackfootedcat: A("Black-footed Cat", "blackfootedcat", ["Night", "Swift"], B(38, 52, 34, 64), MV.night, 0.35),
  rustyspottedcat: A("Rusty-spotted Cat", "rustyspottedcat", ["Swift", "Night"], B(36, 48, 32, 70), MV.swi, 0.35),
  kodkod: A("Kodkod", "kodkod", ["Canopy", "Night"], B(38, 48, 36, 64), MV.night, 0.35),
  andeancat: A("Andean Cat", "andeancat", ["Ice", "Predator"], B(50, 56, 46, 54), MV.ice, 0.25),
  asiangoldencat: A("Asian Golden Cat", "asiangoldencat", ["Predator", "Canopy"], B(56, 62, 48, 54), MV.pred, 0.26),
  jungle_cat: A("Jungle Cat", "jungle_cat", ["Predator", "Swift"], B(50, 56, 44, 58), MV.pred, 0.3),
  // canids
  tibetanfox: A("Tibetan Fox", "tibetanfox", ["Ice", "Burrow"], B(48, 52, 44, 52), MV.bur, 0.3),
  dingo: A("Dingo", "dingo", ["Predator", "Swift"], B(54, 60, 46, 60), MV.pred, 0.28),
  dhole: A("Dhole", "dhole", ["Predator", "Swift"], B(52, 62, 44, 64), MV.pred, 0.26),
  coyote: A("Coyote", "coyote", ["Predator", "Swift"], B(50, 56, 44, 58), MV.pred, 0.32),
  bateared: A("Bat-eared Fox", "bateared", ["Burrow", "Night"], B(42, 44, 40, 56), MV.bur, 0.35),
  grayfox: A("Gray Fox", "grayfox", ["Canopy", "Swift"], B(44, 50, 40, 58), MV.can, 0.33),
  corsacfox: A("Corsac Fox", "corsacfox", ["Burrow", "Swift"], B(42, 48, 38, 60), MV.swi, 0.34),
  swiftfox: A("Swift Fox", "swiftfox", ["Swift", "Burrow"], B(40, 46, 36, 68), MV.swi, 0.34),
  culpeo: A("Culpeo", "culpeo", ["Predator", "Swift"], B(50, 56, 44, 56), MV.pred, 0.3),
  bushdog: A("Bush Dog", "bushdog", ["Aquatic", "Predator"], B(46, 52, 44, 50), MV.aqua, 0.32),
  raccoondog: A("Raccoon Dog", "raccoondog", ["Night", "Wild"], B(48, 46, 48, 42), MV.night, 0.35),
  ethiopianwolf: A("Ethiopian Wolf", "ethiopianwolf", ["Predator", "Swift"], B(52, 60, 44, 62), MV.pred, 0.2),
  blackbackjackal: A("Black-backed Jackal", "blackbackjackal", ["Predator", "Swift"], B(46, 52, 40, 60), MV.pred, 0.33),
  aardwolf: A("Aardwolf", "aardwolf", ["Bug", "Night"], B(48, 44, 46, 50), MV.bug, 0.32),
  stripedhyena: A("Striped Hyena", "stripedhyena", ["Predator", "Night"], B(58, 62, 54, 44), MV.night, 0.28),
  brownhyena: A("Brown Hyena", "brownhyena", ["Predator", "Night"], B(60, 64, 56, 42), MV.night, 0.26),
  // viverrids
  binturong: A("Binturong", "binturong", ["Canopy", "Wild"], B(58, 54, 54, 34), MV.can, 0.28),
  civet: A("Civet", "civet", ["Night", "Canopy"], B(44, 48, 42, 52), MV.night, 0.35),
  genet: A("Genet", "genet", ["Night", "Swift"], B(40, 50, 38, 62), MV.night, 0.35),
  fossa: A("Fossa", "fossa", ["Predator", "Canopy"], B(54, 64, 46, 62), MV.pred, 0.24),
  mongoose: A("Mongoose", "mongoose", ["Venom", "Swift"], B(42, 52, 40, 66), MV.ven, 0.34),
  linsang: A("Banded Linsang", "linsang", ["Canopy", "Night"], B(38, 48, 36, 64), MV.can, 0.35),
  // bears
  grizzly: A("Grizzly Bear", "grizzly", ["Predator", "Wild"], B(76, 76, 62, 34), ["maul", "takedown", "gigaslam"], 0.16),
  polarbear: A("Polar Bear", "polarbear", ["Ice", "Predator"], B(80, 78, 62, 32), MV.ice, 0.14),
  blackbear: A("Black Bear", "blackbear", ["Wild", "Canopy"], B(68, 66, 58, 36), MV.wild, 0.22),
  panda: A("Giant Panda", "panda", ["Canopy", "Armor"], B(74, 60, 68, 24), MV.can, 0.16),
  spectacledbear: A("Spectacled Bear", "spectacledbear", ["Canopy", "Wild"], B(66, 62, 58, 34), MV.can, 0.22),
  slothbear: A("Sloth Bear", "slothbear", ["Bug", "Wild"], B(68, 64, 58, 32), MV.bug, 0.22),
  moonbear: A("Moon Bear", "moonbear", ["Wild", "Canopy"], B(70, 68, 58, 34), MV.wild, 0.2),
  sunbear: A("Sun Bear", "sunbear", ["Canopy", "Bug"], B(60, 62, 52, 42), MV.can, 0.24),
  // procyonids & mustelids
  raccoon: A("Raccoon", "raccoon", ["Night", "Wild"], B(46, 48, 44, 48), MV.night, 0.38),
  redpanda: A("Red Panda", "redpanda", ["Canopy", "Ice"], B(48, 46, 46, 50), MV.can, 0.28),
  coati: A("Coati", "coati", ["Canopy", "Bug"], B(44, 48, 40, 54), MV.can, 0.36),
  kinkajou: A("Kinkajou", "kinkajou", ["Canopy", "Night"], B(44, 46, 40, 56), MV.can, 0.34),
  ringtail: A("Ringtail", "ringtail", ["Night", "Swift"], B(38, 46, 36, 64), MV.night, 0.36),
  giantotter: A("Giant Otter", "giantotter", ["Aquatic", "Predator"], B(62, 64, 50, 54), MV.aqua, 0.22),
  seaotter: A("Sea Otter", "seaotter", ["Aquatic", "Armor"], B(56, 50, 56, 44), MV.aqua, 0.28),
  honeybadger: A("Honey Badger", "honeybadger", ["Armor", "Venom"], B(56, 68, 58, 44), ["ironhide", "crunch", "siegehorn"], 0.24),
  wolverine: A("Wolverine", "wolverine", ["Ice", "Predator"], B(60, 70, 54, 44), MV.ice, 0.2),
  marten: A("Pine Marten", "marten", ["Canopy", "Swift"], B(42, 52, 38, 62), MV.can, 0.34),
  fisher: A("Fisher", "fisher", ["Canopy", "Predator"], B(48, 58, 42, 58), MV.pred, 0.3),
  stoat: A("Stoat", "stoat", ["Swift", "Ice"], B(34, 50, 30, 70), MV.swi, 0.38),
  weasel: A("Least Weasel", "weasel", ["Swift", "Predator"], B(32, 48, 28, 72), MV.swi, 0.4),
  ferret: A("Black-footed Ferret", "ferret", ["Burrow", "Swift"], B(38, 50, 34, 62), MV.bur, 0.34),
  mink: A("Mink", "mink", ["Aquatic", "Swift"], B(40, 50, 36, 58), MV.aqua, 0.36),
  tayra: A("Tayra", "tayra", ["Canopy", "Predator"], B(48, 56, 42, 58), MV.can, 0.32),
  skunk: A("Striped Skunk", "skunk", ["Venom", "Night"], B(44, 46, 44, 42), MV.ven, 0.36),
  // apes
  gorilla: A("Gorilla", "gorilla", ["Wild", "Armor"], B(78, 76, 66, 30), ["gigaslam", "intimidate", "harmonystomp"], 0.14),
  chimpanzee: A("Chimpanzee", "chimpanzee", ["Wild", "Canopy"], B(58, 62, 50, 54), MV.wild, 0.22),
  bonobo: A("Bonobo", "bonobo", ["Canopy", "Wild"], B(56, 56, 50, 54), MV.can, 0.22),
  orangutan: A("Orangutan", "orangutan", ["Canopy", "Wild"], B(68, 66, 58, 34), MV.can, 0.18),
  gibbon: A("Gibbon", "gibbon", ["Canopy", "Swift"], B(48, 52, 42, 72), MV.can, 0.3),
  siamang: A("Siamang", "siamang", ["Canopy", "Swift"], B(52, 54, 44, 66), MV.can, 0.28),
  // monkeys
  mandrill: A("Mandrill", "mandrill", ["Wild", "Predator"], B(60, 68, 52, 48), MV.wild, 0.22),
  baboon: A("Baboon", "baboon", ["Wild", "Predator"], B(56, 62, 48, 50), MV.wild, 0.26),
  gelada: A("Gelada", "gelada", ["Wild", "Ice"], B(54, 56, 50, 46), MV.wild, 0.28),
  macaque: A("Macaque", "macaque", ["Wild", "Canopy"], B(48, 50, 44, 52), MV.wild, 0.34),
  capuchin: A("Capuchin", "capuchin", ["Canopy", "Swift"], B(42, 46, 38, 62), MV.can, 0.34),
  howler: A("Howler Monkey", "howler", ["Canopy", "Night"], B(52, 54, 46, 42), ["dreadhowl", "treeleap", "canopycrash"], 0.3),
  spidermonkey: A("Spider Monkey", "spidermonkey", ["Canopy", "Swift"], B(46, 48, 40, 68), MV.can, 0.32),
  marmoset: A("Marmoset", "marmoset", ["Canopy", "Swift"], B(30, 38, 28, 66), MV.can, 0.42),
  tamarin: A("Golden Tamarin", "tamarin", ["Canopy", "Swift"], B(32, 40, 30, 64), MV.can, 0.4),
  colobus: A("Colobus", "colobus", ["Canopy", "Swift"], B(46, 46, 42, 60), MV.can, 0.32),
  langur: A("Langur", "langur", ["Canopy", "Swift"], B(46, 48, 42, 58), MV.can, 0.34),
  proboscis: A("Proboscis Monkey", "proboscis", ["Canopy", "Aquatic"], B(54, 50, 46, 46), MV.aqua, 0.28),
  uakari: A("Bald Uakari", "uakari", ["Canopy", "Wild"], B(46, 48, 42, 52), MV.can, 0.32),
  vervet: A("Vervet Monkey", "vervet", ["Canopy", "Swift"], B(42, 46, 38, 60), MV.can, 0.36),
  snubnosed: A("Snub-nosed Monkey", "snubnosed", ["Ice", "Canopy"], B(50, 50, 46, 50), MV.ice, 0.28),
  // lemurs & kin
  ringtaillemur: A("Ring-tailed Lemur", "ringtaillemur", ["Canopy", "Swift"], B(42, 46, 38, 60), MV.can, 0.34),
  indri: A("Indri", "indri", ["Canopy", "Wild"], B(50, 50, 44, 54), MV.can, 0.26),
  sifaka: A("Sifaka", "sifaka", ["Canopy", "Swift"], B(44, 46, 40, 66), MV.can, 0.3),
  ayeaye: A("Aye-aye", "ayeaye", ["Night", "Canopy"], B(40, 46, 38, 54), MV.night, 0.28),
  tarsier: A("Tarsier", "tarsier", ["Night", "Canopy"], B(28, 44, 26, 68), MV.night, 0.36),
  loris: A("Slow Loris", "loris", ["Venom", "Night"], B(38, 44, 40, 26), MV.ven, 0.3),
  // marsupials
  kangaroo: A("Red Kangaroo", "kangaroo", ["Wild", "Swift"], B(62, 64, 48, 56), MV.wild, 0.26),
  wallaby: A("Wallaby", "wallaby", ["Swift", "Wild"], B(48, 50, 40, 60), MV.swi, 0.34),
  treekangaroo: A("Tree Kangaroo", "treekangaroo", ["Canopy", "Wild"], B(50, 50, 44, 50), MV.can, 0.3),
  koala: A("Koala", "koala", ["Canopy", "Armor"], B(52, 42, 54, 24), MV.can, 0.3),
  wombat: A("Wombat", "wombat", ["Burrow", "Armor"], B(58, 50, 62, 24), MV.bur, 0.3),
  quokka: A("Quokka", "quokka", ["Wild", "Swift"], B(40, 40, 38, 52), MV.wild, 0.42),
  tasdevil: A("Tasmanian Devil", "tasdevil", ["Night", "Predator"], B(52, 64, 46, 44), MV.night, 0.26),
  quoll: A("Spotted Quoll", "quoll", ["Night", "Predator"], B(42, 52, 38, 54), MV.night, 0.32),
  numbat: A("Numbat", "numbat", ["Bug", "Swift"], B(36, 42, 34, 56), MV.bug, 0.36),
  bilby: A("Bilby", "bilby", ["Burrow", "Night"], B(38, 42, 36, 52), MV.bur, 0.36),
  bandicoot: A("Bandicoot", "bandicoot", ["Burrow", "Swift"], B(38, 44, 34, 56), MV.bur, 0.38),
  sugarglider: A("Sugar Glider", "sugarglider", ["Aerial", "Night"], B(30, 40, 28, 68), MV.aer, 0.38),
  cuscus: A("Spotted Cuscus", "cuscus", ["Canopy", "Night"], B(46, 44, 44, 34), MV.can, 0.34),
  opossum: A("Virginia Opossum", "opossum", ["Night", "Wild"], B(44, 42, 42, 44), MV.night, 0.4),
  // ungulates
  zebra: A("Plains Zebra", "zebra", ["Swift", "Wild"], B(60, 56, 48, 66), MV.swi, 0.28),
  giraffe: A("Giraffe", "giraffe", ["Canopy", "Wild"], B(72, 62, 54, 46), MV.can, 0.22),
  okapi: A("Okapi", "okapi", ["Canopy", "Swift"], B(58, 54, 48, 52), MV.can, 0.24),
  bison: A("American Bison", "bison", ["Armor", "Wild"], B(76, 70, 64, 30), MV.arm, 0.2),
  muskox: A("Muskox", "muskox", ["Ice", "Armor"], B(72, 64, 68, 26), MV.ice, 0.22),
  moose: A("Moose", "moose", ["Wild", "Armor"], B(74, 68, 58, 34), MV.wild, 0.22),
  elk: A("Elk", "elk", ["Wild", "Swift"], B(66, 62, 52, 48), MV.wild, 0.26),
  reindeer: A("Reindeer", "reindeer", ["Ice", "Swift"], B(60, 56, 50, 54), MV.ice, 0.28),
  whitetail: A("White-tailed Deer", "whitetail", ["Swift", "Wild"], B(52, 50, 42, 62), MV.swi, 0.34),
  chital: A("Chital", "chital", ["Swift", "Wild"], B(50, 48, 42, 62), MV.swi, 0.34),
  muntjac: A("Muntjac", "muntjac", ["Swift", "Canopy"], B(44, 46, 38, 58), MV.swi, 0.36),
  pudu: A("Pudú", "pudu", ["Swift", "Canopy"], B(36, 40, 34, 56), MV.swi, 0.4),
  gazelle: A("Thomson's Gazelle", "gazelle", ["Swift", "Wild"], B(46, 46, 38, 74), MV.swi, 0.34),
  springbok: A("Springbok", "springbok", ["Swift", "Wild"], B(48, 48, 40, 72), MV.swi, 0.34),
  impala: A("Impala", "impala", ["Swift", "Wild"], B(50, 48, 40, 70), MV.swi, 0.34),
  gerenuk: A("Gerenuk", "gerenuk", ["Canopy", "Swift"], B(48, 46, 40, 64), MV.can, 0.32),
  dikdik: A("Dik-dik", "dikdik", ["Swift", "Burrow"], B(34, 38, 32, 66), MV.swi, 0.42),
  klipspringer: A("Klipspringer", "klipspringer", ["Swift", "Armor"], B(42, 46, 44, 62), MV.swi, 0.34),
  kudu: A("Greater Kudu", "kudu", ["Wild", "Swift"], B(64, 58, 52, 52), MV.wild, 0.26),
  eland: A("Common Eland", "eland", ["Wild", "Armor"], B(72, 62, 58, 38), MV.wild, 0.24),
  bongo: A("Bongo", "bongo", ["Canopy", "Wild"], B(62, 58, 52, 48), MV.can, 0.26),
  nyala: A("Nyala", "nyala", ["Wild", "Swift"], B(54, 52, 46, 56), MV.wild, 0.3),
  sitatunga: A("Sitatunga", "sitatunga", ["Aquatic", "Wild"], B(54, 50, 46, 48), MV.aqua, 0.3),
  oryx: A("Arabian Oryx", "oryx", ["Armor", "Swift"], B(58, 58, 54, 54), MV.arm, 0.26),
  addax: A("Addax", "addax", ["Armor", "Swift"], B(56, 54, 54, 48), MV.arm, 0.26),
  saiga: A("Saiga", "saiga", ["Swift", "Ice"], B(48, 48, 42, 64), MV.swi, 0.3),
  wildebeest: A("Wildebeest", "wildebeest", ["Wild", "Armor"], B(64, 60, 54, 52), MV.wild, 0.28),
  hartebeest: A("Hartebeest", "hartebeest", ["Swift", "Wild"], B(56, 52, 46, 60), MV.swi, 0.3),
  topi: A("Topi", "topi", ["Swift", "Wild"], B(54, 52, 46, 62), MV.swi, 0.3),
  blackbuck: A("Blackbuck", "blackbuck", ["Swift", "Wild"], B(46, 48, 40, 72), MV.swi, 0.32),
  pronghorn: A("Pronghorn", "pronghorn", ["Swift", "Wild"], B(50, 48, 42, 78), MV.swi, 0.28),
  bighorn: A("Bighorn Sheep", "bighorn", ["Armor", "Ice"], B(58, 60, 58, 42), MV.arm, 0.28),
  markhor: A("Markhor", "markhor", ["Armor", "Ice"], B(56, 58, 56, 46), MV.arm, 0.26),
  takin: A("Takin", "takin", ["Armor", "Ice"], B(64, 58, 62, 32), MV.arm, 0.24),
  yak: A("Wild Yak", "yak", ["Ice", "Armor"], B(72, 64, 64, 30), MV.ice, 0.22),
  llama: A("Llama", "llama", ["Wild", "Ice"], B(54, 48, 46, 48), MV.wild, 0.36),
  alpaca: A("Alpaca", "alpaca", ["Wild", "Ice"], B(50, 44, 46, 46), MV.wild, 0.38),
  vicuna: A("Vicuña", "vicuna", ["Swift", "Ice"], B(48, 46, 42, 62), MV.swi, 0.3),
  guanaco: A("Guanaco", "guanaco", ["Swift", "Wild"], B(54, 50, 44, 58), MV.swi, 0.32),
  tapir: A("Tapir", "tapir", ["Wild", "Aquatic"], B(66, 56, 56, 36), MV.wild, 0.26),
  whiterhino: A("White Rhinoceros", "whiterhino", ["Armor", "Wild"], B(82, 72, 76, 24), ["siegehorn", "ironhide", "gigaslam"], 0.14),
  blackrhino: A("Black Rhinoceros", "blackrhino", ["Armor", "Wild"], B(76, 74, 70, 32), MV.arm, 0.14),
  babirusa: A("Babirusa", "babirusa", ["Wild", "Armor"], B(56, 54, 52, 40), MV.wild, 0.3),
  peccary: A("Peccary", "peccary", ["Wild", "Armor"], B(50, 52, 48, 44), MV.wild, 0.34),
  chevrotain: A("Chevrotain", "chevrotain", ["Swift", "Canopy"], B(34, 38, 32, 62), MV.swi, 0.42),
  duiker: A("Duiker", "duiker", ["Canopy", "Swift"], B(40, 44, 38, 58), MV.can, 0.38),
  pygmyhippo: A("Pygmy Hippo", "pygmyhippo", ["Aquatic", "Armor"], B(60, 54, 58, 30), MV.aqua, 0.28),
  // elephants
  africanelephant: A("African Elephant", "africanelephant", ["Wild", "Armor"], B(88, 76, 72, 26), ["gigaslam", "harmonystomp", "siegehorn"], 0.12),
  asianelephant: A("Asian Elephant", "asianelephant", ["Wild", "Armor"], B(84, 72, 70, 28), MV.wild, 0.14),
  mammoth: A("Woolly Mammoth", "mammoth", ["Ice", "Armor"], B(86, 76, 72, 24), MV.ice, 0.12),
  // pinnipeds
  walrus: A("Walrus", "walrus", ["Ice", "Armor"], B(76, 64, 68, 24), MV.ice, 0.2),
  sealion: A("Sea Lion", "sealion", ["Aquatic", "Swift"], B(58, 56, 48, 58), MV.aqua, 0.3),
  fursealion: A("Fur Seal", "fursealion", ["Aquatic", "Ice"], B(54, 52, 48, 56), MV.aqua, 0.32),
  elephantseal: A("Elephant Seal", "elephantseal", ["Aquatic", "Armor"], B(80, 62, 64, 26), MV.aqua, 0.2),
  leopardseal: A("Leopard Seal", "leopardseal", ["Ice", "Predator"], B(66, 74, 52, 54), MV.ice, 0.18),
  weddellseal: A("Weddell Seal", "weddellseal", ["Ice", "Aquatic"], B(64, 52, 56, 40), MV.ice, 0.28),
  harpseal: A("Harp Seal", "harpseal", ["Ice", "Aquatic"], B(56, 48, 50, 46), MV.ice, 0.32),
  ribbonseal: A("Ribbon Seal", "ribbonseal", ["Ice", "Swift"], B(52, 50, 46, 56), MV.ice, 0.32),
  monkseal: A("Monk Seal", "monkseal", ["Aquatic", "Wild"], B(60, 52, 52, 44), MV.aqua, 0.26),
  crabeaterseal: A("Crabeater Seal", "crabeaterseal", ["Ice", "Aquatic"], B(58, 50, 52, 48), MV.ice, 0.3),
  // cetaceans
  bluewhale: A("Blue Whale", "bluewhale", ["Aquatic", "Wild"], B(92, 70, 70, 34), ["tidalcrash", "harmonystomp", "torrent"], 0.1),
  humpback: A("Humpback Whale", "humpback", ["Aquatic", "Wild"], B(84, 70, 64, 38), ["torrent", "lullaby", "tidalcrash"], 0.14),
  finwhale: A("Fin Whale", "finwhale", ["Aquatic", "Swift"], B(82, 66, 60, 48), MV.aqua, 0.14),
  minke: A("Minke Whale", "minke", ["Aquatic", "Swift"], B(70, 58, 54, 50), MV.aqua, 0.2),
  seiwhale: A("Sei Whale", "seiwhale", ["Aquatic", "Swift"], B(74, 60, 56, 54), MV.aqua, 0.18),
  brydeswhale: A("Bryde's Whale", "brydeswhale", ["Aquatic", "Swift"], B(72, 60, 56, 48), MV.aqua, 0.2),
  rightwhale: A("Right Whale", "rightwhale", ["Aquatic", "Armor"], B(86, 62, 70, 24), MV.aqua, 0.14),
  bowhead: A("Bowhead Whale", "bowhead", ["Ice", "Armor"], B(88, 64, 72, 22), MV.ice, 0.12),
  graywhale: A("Gray Whale", "graywhale", ["Aquatic", "Wild"], B(80, 62, 62, 32), MV.aqua, 0.16),
  spermwhale: A("Sperm Whale", "spermwhale", ["Aquatic", "Predator"], B(84, 76, 62, 36), ["crunch", "torrent", "tidalcrash"], 0.12),
  orca: A("Orca", "orca", ["Aquatic", "Predator"], B(76, 80, 60, 58), ["apexfang", "torrent", "tidalcrash"], 0.1),
  pilotwhale: A("Pilot Whale", "pilotwhale", ["Aquatic", "Night"], B(68, 62, 54, 48), MV.aqua, 0.22),
  falsekiller: A("False Killer Whale", "falsekiller", ["Aquatic", "Predator"], B(70, 68, 54, 52), MV.aqua, 0.2),
  melonhead: A("Melon-headed Whale", "melonhead", ["Aquatic", "Swift"], B(62, 58, 48, 58), MV.aqua, 0.26),
  beluga: A("Beluga", "beluga", ["Ice", "Aquatic"], B(66, 56, 54, 48), ["lullaby", "torrent", "blizzard"], 0.22),
  narwhal: A("Narwhal", "narwhal", ["Ice", "Aquatic"], B(68, 66, 54, 46), ["siegehorn", "frostfang", "blizzard"], 0.18),
  bottlenose: A("Bottlenose Dolphin", "bottlenose", ["Aquatic", "Swift"], B(58, 58, 46, 68), MV.aqua, 0.28),
  spinnerdolphin: A("Spinner Dolphin", "spinnerdolphin", ["Aquatic", "Swift"], B(52, 54, 42, 74), MV.swi, 0.3),
  duskydolphin: A("Dusky Dolphin", "duskydolphin", ["Aquatic", "Swift"], B(54, 56, 44, 72), MV.swi, 0.3),
  hectorsdolphin: A("Hector's Dolphin", "hectorsdolphin", ["Aquatic", "Swift"], B(48, 50, 40, 70), MV.aqua, 0.3),
  commersons: A("Commerson's Dolphin", "commersons", ["Aquatic", "Swift"], B(48, 52, 42, 72), MV.swi, 0.3),
  rissos: A("Risso's Dolphin", "rissos", ["Aquatic", "Night"], B(62, 60, 50, 58), MV.aqua, 0.26),
  irrawaddy: A("Irrawaddy Dolphin", "irrawaddy", ["Aquatic", "Wild"], B(56, 52, 46, 54), MV.aqua, 0.28),
  amazonriverdolphin: A("Amazon River Dolphin", "amazonriverdolphin", ["Aquatic", "Night"], B(58, 54, 46, 52), MV.aqua, 0.24),
  gangesdolphin: A("Ganges River Dolphin", "gangesdolphin", ["Aquatic", "Night"], B(54, 52, 44, 50), MV.night, 0.24),
  vaquita: A("Vaquita", "vaquita", ["Aquatic", "Swift"], B(44, 46, 38, 64), MV.aqua, 0.16),
  harborporpoise: A("Harbor Porpoise", "harborporpoise", ["Aquatic", "Swift"], B(48, 48, 40, 62), MV.aqua, 0.32),
  cuvierbeaked: A("Cuvier's Beaked Whale", "cuvierbeaked", ["Aquatic", "Night"], B(70, 60, 54, 46), MV.aqua, 0.2),
  // sirenians
  manatee: A("Manatee", "manatee", ["Aquatic", "Wild"], B(72, 44, 62, 20), MV.aqua, 0.24),
  dugong: A("Dugong", "dugong", ["Aquatic", "Wild"], B(68, 44, 60, 24), MV.aqua, 0.24),
  // rodents
  capybara: A("Capybara", "capybara", ["Aquatic", "Wild"], B(56, 42, 50, 36), MV.aqua, 0.36),
  porcupine: A("Porcupine", "porcupine", ["Armor", "Night"], B(52, 48, 62, 26), ["quillguard", "shellbash", "ironhide"], 0.32),
  chinchilla: A("Chinchilla", "chinchilla", ["Ice", "Swift"], B(34, 38, 34, 66), MV.swi, 0.4),
  prairiedog: A("Prairie Dog", "prairiedog", ["Burrow", "Swift"], B(36, 38, 36, 54), MV.bur, 0.44),
  groundhog: A("Groundhog", "groundhog", ["Burrow", "Wild"], B(44, 42, 44, 38), MV.bur, 0.42),
  redsquirrel: A("Red Squirrel", "redsquirrel", ["Canopy", "Swift"], B(32, 38, 30, 66), MV.can, 0.44),
  flyingsquirrel: A("Flying Squirrel", "flyingsquirrel", ["Aerial", "Night"], B(30, 38, 28, 70), MV.aer, 0.4),
  chipmunk: A("Chipmunk", "chipmunk", ["Burrow", "Swift"], B(28, 36, 28, 68), MV.swi, 0.46),
  dormouse: A("Dormouse", "dormouse", ["Canopy", "Night"], B(28, 34, 28, 60), MV.night, 0.46),
  jerboa: A("Jerboa", "jerboa", ["Burrow", "Swift"], B(28, 36, 26, 74), MV.swi, 0.44),
  marmot: A("Marmot", "marmot", ["Burrow", "Ice"], B(48, 44, 46, 36), MV.bur, 0.4),
  viscacha: A("Viscacha", "viscacha", ["Ice", "Burrow"], B(40, 40, 40, 52), MV.bur, 0.4),
  agouti: A("Agouti", "agouti", ["Swift", "Canopy"], B(38, 40, 34, 60), MV.swi, 0.42),
  mara: A("Patagonian Mara", "mara", ["Swift", "Burrow"], B(44, 44, 38, 68), MV.swi, 0.36),
  nakedmolerat: A("Naked Mole-Rat", "nakedmolerat", ["Burrow", "Armor"], B(38, 34, 48, 20), MV.bur, 0.4),
  degu: A("Degu", "degu", ["Burrow", "Swift"], B(32, 36, 32, 58), MV.bur, 0.46),
  hare: A("Brown Hare", "hare", ["Swift", "Wild"], B(42, 42, 34, 76), MV.swi, 0.4),
  arctichare: A("Arctic Hare", "arctichare", ["Ice", "Swift"], B(44, 44, 38, 70), MV.ice, 0.36),
  pika: A("Pika", "pika", ["Ice", "Burrow"], B(30, 34, 32, 56), MV.ice, 0.44),
  // xenarthrans
  ninebandarmadillo: A("Nine-banded Armadillo", "ninebandarmadillo", ["Armor", "Burrow"], B(44, 40, 58, 30), MV.arm, 0.38),
  giantarmadillo: A("Giant Armadillo", "giantarmadillo", ["Armor", "Burrow"], B(62, 54, 70, 22), MV.arm, 0.24),
  giantanteater: A("Giant Anteater", "giantanteater", ["Bug", "Wild"], B(62, 58, 52, 32), MV.bug, 0.26),
  tamandua: A("Tamandua", "tamandua", ["Bug", "Canopy"], B(44, 46, 42, 42), MV.bug, 0.34),
  silkyanteater: A("Silky Anteater", "silkyanteater", ["Bug", "Canopy"], B(28, 36, 30, 48), MV.bug, 0.4),
  // monotremes
  platypus: A("Platypus", "platypus", ["Aquatic", "Venom"], B(44, 46, 42, 50), MV.ven, 0.3),
  echidna: A("Echidna", "echidna", ["Armor", "Bug"], B(48, 42, 62, 24), ["quillguard", "buzzrush", "ironhide"], 0.32),
});
