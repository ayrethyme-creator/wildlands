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
    {/* melon: the fatty forehead lens a toothed whale focuses sound with */}
    {o.melon && <ellipse cx="52" cy="32.5" rx="8" ry="6.5" fill={o.melonC || o.hide} />}
    {/* beak. This is not decoration: a beak is how you tell a dolphin from a
        porpoise. Porpoises have none — vaquita, harbour porpoise, Dall's. */}
    {(o.beak || o.longBeak) && (
      <g>
        <path d={o.longBeak
          ? "M54,36.5 Q64,35.5 72,37.5 Q64,41 54,41 Z"
          : "M54,36.5 Q61,36 66,38.5 Q61,41 54,41 Z"} fill={o.rostrum || o.hide} />
        <path d={o.longBeak ? "M55,39.4 Q63,39.2 71,37.8" : "M55,39.4 Q60,39.4 65,38.4"}
          stroke={o.mouth || "#3c4c54"} strokeWidth=".9" fill="none" strokeLinecap="round" />
      </g>
    )}
    {!(o.beak || o.longBeak) && <path d={o.melon ? "M50,42 Q55,43 59,40" : "M48,41 Q54,42 60,39"} stroke={o.mouth || "#3c4c54"} strokeWidth="1.2" fill="none" strokeLinecap="round" />}
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
const bearA = (o) => (er) => {
  const F = o.fur || "#6b4c34";
  const spine = sh(F, -0.24), belly = sh(F, 0.34), limb = sh(F, -0.1);
  const g1 = gid("bc", F), g2 = gid("bl", F);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={spine} /><stop offset=".55" stopColor={F} />
        <stop offset="1" stopColor={belly} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.16)} /><stop offset="1" stopColor={sh(F, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="57.4" rx="21" ry="2.5" fill="#000" opacity=".16" />

    {/* bears are heavy and low, with a shoulder hump and a stub tail */}
    <path d="M13.6,34.4 Q10.4,35.6 10.8,38.4" stroke={limb} strokeWidth="2.6" fill="none"
      strokeLinecap="round" />
    <g stroke={`url(#${g2})`} strokeWidth="4.2" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".72">
      <polyline points="39,38 38,45 40,50 40,54.6" />
      <polyline points="22,37 24,44 20.6,49 21,54.6" />
    </g>
    <path d="M44,26.6 Q50.4,29.4 50.6,35 Q50.6,41.4 45.6,44 L36,45.4
             Q25,47.4 18.6,44.6 Q12.6,42 12.6,34.6 Q12.6,27.6 19,25.6 Q31,22 44,26.6 Z"
      fill={`url(#${g1})`} />
    {/* shoulder hump */}
    <ellipse cx="41" cy="27.6" rx="7.4" ry="4.4" fill={sh(F, -0.14)} />
    <path d="M18.6,44.6 Q25,47.4 36,45.4 L45.6,44 Q42,46.8 36,47.6 Q25,49.2 18.6,44.6 Z"
      fill={sh(F, 0.44)} />
    {o.bib && <ellipse cx="47" cy="34.4" rx="4.6" ry="5.4" fill={sh(F, 0.5)} opacity=".85" />}

    <ellipse cx="20" cy="34.6" rx="8.4" ry="7.8" fill={F} opacity=".5" />
    <g stroke={`url(#${g2})`} strokeWidth="4.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="44,35 43,44.6 45.2,50 45.2,55" />
      <polyline points="20,34.6 22.6,44 19,49.6 19.4,55" />
    </g>
    <g fill={sh(F, -0.4)}>
      <ellipse cx="45.2" cy="55.4" rx="2.8" ry="1.4" /><ellipse cx="19.4" cy="55.4" rx="2.8" ry="1.4" />
      <ellipse cx="40" cy="55" rx="2.4" ry="1.2" /><ellipse cx="21" cy="55" rx="2.4" ry="1.2" />
    </g>

    {/* small round ears, set wide on a broad skull */}
    <circle cx="47.6" cy="17.4" r="3.2" fill={sh(F, -0.22)} />
    <circle cx="57.6" cy="16.8" r="3.5" fill={F} />
    <circle cx="57.8" cy="17" r="1.9" fill={o.inner || sh(F, -0.35)} />
    <ellipse cx="52.6" cy="23.4" rx="8" ry="6.8" fill={F} />
    {o.eyePatch && (
      <g fill={sh(F, -0.55)} opacity=".85">
        <ellipse cx="50" cy="21" rx="2.6" ry="2.2" /><ellipse cx="56.6" cy="20.6" rx="2.4" ry="2" />
      </g>
    )}
    {o.blaze && (
      <path d="M53,16.8 Q54.8,20.6 54.6,27 Q52.8,27.2 52,26.2 Q52.6,20.8 53,16.8 Z"
        fill={sh(F, 0.55)} opacity=".9" />
    )}
    {/* long straight snout */}
    <ellipse cx="58" cy="26.4" rx="5" ry="3.2" fill={o.muzzle || sh(F, 0.42)} />
    <path d="M60.6,24.6 Q62.8,24.8 62.9,26.2 Q62.7,27.5 61.4,27.5 Q60.2,27.1 60.6,24.6 Z"
      fill={o.nose || sh(F, -0.7)} />
    <Eye x={53.6} y={20.6} r={1.95 * er} iris={o.iris || "#3a2a18"} />
  </g>
  );
};
const primA = (o) => (er) => {
  const F = o.fur || "#5c4632";
  const spine = sh(F, -0.24), belly = sh(F, 0.34), limb = sh(F, -0.1);
  const g1 = gid("pc", F), g2 = gid("pl", F);
  const face = o.face || sh(F, 0.3);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={spine} /><stop offset=".55" stopColor={F} />
        <stop offset="1" stopColor={belly} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.16)} /><stop offset="1" stopColor={sh(F, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="57.4" rx="17" ry="2.3" fill="#000" opacity=".15" />

    {/* primates sit upright, so this is a seated pose rather than a quadruped */}
    {/* far arm, hanging */}
    <g stroke={`url(#${g2})`} strokeWidth="3.6" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".7">
      <polyline points="26,28 21,34 22.4,41" />
    </g>
    {/* far leg, folded */}
    <g stroke={`url(#${g2})`} strokeWidth="4" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".7">
      <polyline points="27,42 23,48 27,52.4" />
    </g>

    {/* haunches, wide and low */}
    <ellipse cx="32" cy="47" rx="13.4" ry="8" fill={`url(#${g1})`} />
    {/* torso, narrowing to the shoulders */}
    <path d="M24.6,45 Q22.6,34 26.6,26.6 Q31,21.6 38,23 Q43.4,25 43.6,32.4
             Q43.8,40.6 41,46.4 Q32.6,49 24.6,45 Z" fill={`url(#${g1})`} />
    <path d="M28.6,44.6 Q30.6,35.4 33.4,29.4 Q37.6,28.4 39.6,32.4
             Q40.4,40 38.4,45.8 Q33.4,47 28.6,44.6 Z" fill={sh(F, 0.4)} opacity=".8" />
    {o.stripe && (
      <path d="M32,23.6 Q34,33 33.4,45.6" stroke={o.stripeC || sh(F, -0.5)} strokeWidth="2"
        fill="none" strokeLinecap="round" opacity=".8" />
    )}

    {/* near arm, long - the defining primate limb */}
    <g stroke={`url(#${g2})`} strokeWidth="4.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="41,28.6 46.6,35.6 44.6,43.6" />
    </g>
    <ellipse cx="44.4" cy="45" rx="2.4" ry="2.8" fill={sh(F, -0.24)} />
    {/* near leg, folded under */}
    <g stroke={`url(#${g2})`} strokeWidth="4.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="34,44 30.6,50 36,54" />
    </g>
    <ellipse cx="37" cy="54.4" rx="3.2" ry="1.8" fill={sh(F, -0.3)} />

    {o.ruff && (
      <path d="M27,25 Q24,19.6 27.4,15.4 Q31,12.6 36,13 Q41.4,13.6 43.6,18
               Q45,22.4 41.6,25.6 Q34.4,28.4 27,25 Z" fill={o.ruffC || sh(F, -0.2)} />
    )}
    {o.flange && (
      <g fill={o.ruffC || sh(F, -0.26)}>
        <ellipse cx="25.6" cy="19" rx="3.4" ry="6" /><ellipse cx="44.4" cy="19" rx="3.4" ry="6" />
      </g>
    )}

    {/* ears sit on the sides of the skull, not on top */}
    {o.bigEar ? (
      <g>
        <ellipse cx="26.4" cy="18.6" rx="3.4" ry="4" fill={sh(F, -0.2)} />
        <ellipse cx="43.6" cy="18.6" rx="3.4" ry="4" fill={sh(F, -0.2)} />
        <ellipse cx="26.6" cy="18.6" rx="1.9" ry="2.4" fill={o.inner || sh(F, 0.35)} />
        <ellipse cx="43.4" cy="18.6" rx="1.9" ry="2.4" fill={o.inner || sh(F, 0.35)} />
      </g>
    ) : (
      <g fill={sh(F, -0.2)}>
        <circle cx="27" cy="18.4" r="2.4" /><circle cx="43" cy="18.4" r="2.4" />
      </g>
    )}

    {/* head, facing the viewer the way a primate portrait reads best */}
    <ellipse cx="35" cy="17.6" rx="8.2" ry="8" fill={F} />
    {o.crest && (
      <path d="M30,11 Q35,5.6 40,11 Q35,9.4 30,11 Z" fill={o.crestC || sh(F, -0.3)} />
    )}
    {o.brow && (
      <path d="M28.6,14.4 Q35,11.8 41.4,14.4 Q35,13.6 28.6,14.4 Z"
        fill={o.browC || sh(F, -0.45)} />
    )}
    {/* the bare face patch */}
    <ellipse cx="35" cy="19" rx="6" ry="6.2" fill={face} />
    {o.cheeks && (
      <g fill={o.cheekC || sh(F, 0.45)}>
        <ellipse cx="28.6" cy="19.6" rx="2.4" ry="3" /><ellipse cx="41.4" cy="19.6" rx="2.4" ry="3" />
      </g>
    )}
    <ellipse cx="35" cy="22.4" rx="3" ry="2.2" fill={o.muzzle || sh(face, -0.16)} />
    <g fill={sh(face, -0.5)}>
      <ellipse cx="33.8" cy="21.4" rx=".6" ry=".8" /><ellipse cx="36.2" cy="21.4" rx=".6" ry=".8" />
    </g>
    <path d="M32.8,23.8 Q35,25 37.2,23.8" stroke={sh(face, -0.45)} strokeWidth=".8" fill="none"
      strokeLinecap="round" />
    <Eye x={32.2} y={17.6} r={2 * er} iris={o.iris || "#4a3320"} />
    <Eye x={37.8} y={17.6} r={2 * er} iris={o.iris || "#4a3320"} />
  </g>
  );
};
const marsA = (o) => (er) => {
  const F = o.fur || "#a8825c";
  const spine = sh(F, -0.24), belly = sh(F, 0.4), limb = sh(F, -0.12);
  const mark = o.markC || sh(F, -0.5);
  const g1 = gid("sc", F), g2 = gid("sl", F);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={spine} /><stop offset=".55" stopColor={F} />
        <stop offset="1" stopColor={belly} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.16)} /><stop offset="1" stopColor={sh(F, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="56.6" rx="19" ry="2.3" fill="#000" opacity=".15" />

    {/* heavy tapering tail, the counterweight a hopping marsupial balances on */}
    <path d="M18,42 Q9,44 4,50" stroke={limb} strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M9,46.4 Q5.4,48.4 3.4,50.6" stroke={sh(F, -0.28)} strokeWidth="3.4" fill="none"
      strokeLinecap="round" />

    {/* folded hind leg with the long foot marsupials stand on */}
    <g stroke={`url(#${g2})`} strokeWidth="4.4" fill="none" strokeLinecap="round" strokeLinejoin="round"
      opacity=".72">
      <polyline points="26,40 21.4,47 27,51.4" />
    </g>
    <ellipse cx="26.6" cy="45.6" rx="9" ry="8" fill={`url(#${g1})`} />
    <path d="M40,26.6 Q45.4,29.4 45.2,35.4 Q45,42 40.4,45.6 Q33,49 25.6,46.4
             Q19.4,43.6 19.4,36 Q19.4,29.4 25.4,26.6 Q32.6,23.6 40,26.6 Z"
      fill={`url(#${g1})`} />
    {o.bib && <ellipse cx="42.6" cy="34.6" rx="4" ry="4.6" fill={sh(F, 0.55)} opacity=".85" />}
    {o.stripes && (
      <g stroke={mark} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity=".85">
        <path d="M25,29 Q26,35 25,44 M31,27.6 Q32,34.4 31,45 M37,28.4 Q38,35 37,44.4" />
      </g>
    )}
    {o.spots && (
      <g fill={mark} opacity=".7">
        <circle cx="27" cy="32" r="1.2" /><circle cx="33.4" cy="30.6" r="1.15" />
        <circle cx="39" cy="32.4" r="1.1" /><circle cx="30" cy="39" r="1.1" />
        <circle cx="36.4" cy="39.6" r="1.1" />
      </g>
    )}

    {/* near hind leg and the long foot */}
    <g stroke={`url(#${g2})`} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="30.6,42 25.6,49 32.4,53.6" />
    </g>
    <path d="M30.6,53.6 L40.4,53.6 Q41.6,55.4 40,56 L30,56 Q28.6,55 30.6,53.6 Z"
      fill={sh(F, -0.28)} />
    {/* short forearm held up at the chest */}
    <g stroke={`url(#${g2})`} strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="43,31.6 46.6,35.6 44.6,39.4" />
    </g>

    {/* tall ears, swivelled forward */}
    {o.fluff ? (
      <g>
        <circle cx="46.6" cy="21.6" r="4.4" fill={sh(F, -0.2)} />
        <circle cx="57.4" cy="20.8" r="4.8" fill={F} />
        <circle cx="57.6" cy="21" r="2.8" fill={o.earC || o.inner || sh(F, 0.4)} />
      </g>
    ) : (
      <g>
        <ellipse cx="47.4" cy="18.6" rx="2.6" ry="5.6" fill={sh(F, -0.2)} transform="rotate(-14 47.4 18.6)" />
        <ellipse cx="56.6" cy="17.8" rx="2.8" ry="6" fill={F} transform="rotate(10 56.6 17.8)" />
        <ellipse cx="56.6" cy="18.2" rx="1.5" ry="4" fill={o.earC || o.inner || sh(F, 0.4)}
          transform="rotate(10 56.6 18.2)" />
      </g>
    )}

    <ellipse cx="52" cy="27" rx="7.2" ry="6" fill={F} />
    <ellipse cx="57" cy="29.6" rx="4.2" ry="2.8" fill={o.muzzle || sh(F, 0.45)} />
    <path d="M59.4,28 Q61.4,28.2 61.5,29.4 Q61.3,30.6 60.1,30.6 Q59,30.2 59.4,28 Z"
      fill={o.nose || sh(F, -0.7)} />
    <Eye x={53} y={25} r={2 * er} iris={o.iris || "#26221c"} />
  </g>
  );
};
const mustA = (o) => (er) => {
  const F = o.fur || "#7a5230";
  const spine = sh(F, -0.24), belly = sh(F, 0.4), limb = sh(F, -0.12);
  const mark = o.markC || sh(F, -0.55);
  const g1 = gid("mc", F), g2 = gid("ml", F);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={spine} /><stop offset=".55" stopColor={F} />
        <stop offset="1" stopColor={belly} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.16)} /><stop offset="1" stopColor={sh(F, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="55.6" rx="21" ry="2.3" fill="#000" opacity=".15" />

    {/* mustelids are long and low: a tube of an animal on short legs */}
    <path d="M11,38.4 Q5,36.4 3.4,30.4" stroke={limb} strokeWidth="3.6" fill="none"
      strokeLinecap="round" />
    {o.rings && (
      <g stroke={mark} strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M9.4,37.6 L8,35 M6,35 L4.6,32.2" />
      </g>
    )}
    <g stroke={`url(#${g2})`} strokeWidth="3" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".72">
      <polyline points="40,42 39.4,46.4 41,50 41,53.4" />
      <polyline points="20,41.6 21.6,46 18.8,49.6 19.2,53.4" />
    </g>
    <path d="M46,32 Q52,34 52.2,38.6 Q52.2,43.4 47.6,45.4 L36,46.6
             Q24,48.2 17.4,46 Q11.4,44 11.2,38.6 Q11,33.6 17,32 Q31,29 46,32 Z"
      fill={`url(#${g1})`} />
    <path d="M17.4,46 Q24,48.2 36,46.6 L47.6,45.4 Q44,47.8 36,48.4 Q24,49.6 17.4,46 Z"
      fill={sh(F, 0.5)} />
    {o.bib && <ellipse cx="49" cy="38.6" rx="4" ry="4.4" fill={sh(F, 0.55)} opacity=".85" />}

    <g stroke={`url(#${g2})`} strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="44.6,40.4 44,46 45.8,50 45.8,54" />
      <polyline points="17.6,40 19.4,45.6 16.6,49.6 17,54" />
    </g>
    <g fill={sh(F, -0.4)}>
      <ellipse cx="45.8" cy="54.3" rx="2.1" ry="1.15" /><ellipse cx="17" cy="54.3" rx="2.1" ry="1.15" />
      <ellipse cx="41" cy="53.7" rx="1.8" ry="1" /><ellipse cx="19.2" cy="53.7" rx="1.8" ry="1" />
    </g>

    {/* small low-set ears and a flat wedge head carried forward */}
    {o.earRound ? (
      <g>
        <circle cx="49" cy="27.4" r="2.6" fill={sh(F, -0.22)} />
        <circle cx="57.6" cy="26.8" r="2.8" fill={F} />
        <circle cx="57.8" cy="27" r="1.5" fill={o.inner || sh(F, -0.35)} />
      </g>
    ) : (
      <g>
        <path d="M49.6,28.4 Q48,24.6 47.2,23.6 Q50,24.2 51.8,26.8 Z" fill={sh(F, -0.22)} />
        <path d="M56.6,27.6 Q57.6,23.8 58.6,22.8 Q59.6,25.6 59.2,28 Z" fill={F} />
      </g>
    )}
    <ellipse cx="53.6" cy="32.4" rx="7.4" ry="5.6" fill={F} />
    {o.mask && (
      <path d="M49,30 Q54.8,28.8 59.6,31.4 Q60,34.8 57.4,36.4 Q52.8,36.6 49.6,34.4 Z"
        fill={mark} opacity=".55" />
    )}
    {o.cheeks && (
      <g fill={o.cheekC || sh(F, 0.5)} opacity=".85">
        <ellipse cx="50.6" cy="34.6" rx="2.4" ry="1.8" />
      </g>
    )}
    {o.blaze && (
      <path d="M54,26.8 Q55.6,30 55.4,35.4 Q53.8,35.6 53.2,34.8 Q53.6,30 54,26.8 Z"
        fill={sh(F, 0.6)} opacity=".9" />
    )}
    <ellipse cx="58.6" cy="34.6" rx="4.2" ry="2.6" fill={o.muzzle || sh(F, 0.45)} />
    <path d="M61,33 Q62.9,33.2 63,34.4 Q62.8,35.6 61.6,35.6 Q60.6,35.2 61,33 Z"
      fill={sh(F, -0.7)} />
    <Eye x={54.4} y={30.4} r={1.85 * er} iris={o.iris || "#3a2a18"} />
  </g>
  );
};
const ungA = (o) => (er) => {
  const C = o.coat || "#a8825c";
  const spine = sh(C, -0.24), belly = sh(C, 0.4), limb = sh(C, -0.12);
  const mark = o.markC || sh(C, -0.55);
  const horn = o.hornC || "#e8dcc3";
  const g1 = gid("uc", C), g2 = gid("ul", C);
  const S = o.small ? 0.9 : 1;
  return (
  <g transform={o.small ? "translate(3.2,4) scale(.9)" : undefined}>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={spine} /><stop offset=".5" stopColor={C} />
        <stop offset="1" stopColor={belly} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(C, -0.16)} /><stop offset="1" stopColor={sh(C, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="31" cy="57.6" rx="19" ry="2.3" fill="#000" opacity=".15" />

    {/* tail, short and hanging the way most hoofed animals carry it */}
    <path d="M13.6,31.6 Q9.4,35.4 10.4,41.4" stroke={limb} strokeWidth="2.1" fill="none"
      strokeLinecap="round" />

    {/* far pair of legs - ungulates stand tall, so these run most of the frame */}
    <g stroke={`url(#${g2})`} strokeWidth="2.6" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".7">
      <polyline points="37.5,36 36.6,45 38.2,51 38.2,55.4" />
      <polyline points="20.5,35 22.6,44 19.4,50 19.8,55.4" />
    </g>

    {/* barrel body */}
    <path d="M42.5,26.4 Q48.4,28.6 48.8,33.6 Q48.8,39.4 44.4,42.4 L36,43.8
             Q26,45.8 19.6,43.6 Q13.6,41.4 13.2,34.4 Q13,28 18.8,26 Q30,22.8 42.5,26.4 Z"
      fill={`url(#${g1})`} />
    <path d="M19.6,43.6 Q26,45.8 36,43.8 L44.4,42.4 Q41,45 36,45.8 Q26,47.2 19.6,43.6 Z"
      fill={sh(C, 0.5)} />

    {o.stripes && (
      <g stroke={mark} strokeWidth="2" strokeLinecap="round" fill="none" opacity=".9">
        <path d="M22.6,25.6 Q23.4,33 22.2,42.4 M28,24.2 Q28.8,32.4 27.6,43.4
                 M33.6,24.2 Q34.4,32.6 33.2,43.4 M39.2,25 Q39.8,32.8 38.8,42.2
                 M44.2,27.6 Q44.6,33.4 43.8,40.4" />
      </g>
    )}
    {o.patches && (
      <g fill={mark} opacity=".45">
        <path d="M22,28 q4,-1.6 6.4,1.2 q-.8,3.6 -4.4,3.8 q-3,-.4 -2,-5 Z" />
        <path d="M32,26.8 q4.4,-1 6.2,2 q-1.4,3.4 -4.8,3.2 q-2.8,-.8 -1.4,-5.2 Z" />
        <path d="M24,36.4 q4,-.8 5.6,1.8 q-1.2,3 -4.2,2.8 q-2.6,-.8 -1.4,-4.6 Z" />
        <path d="M35,36 q4.2,-.8 5.8,1.8 q-1.2,3 -4.4,2.8 q-2.6,-.8 -1.4,-4.6 Z" />
      </g>
    )}
    {o.spots && (
      <g fill={mark} opacity=".7">
        <circle cx="24" cy="30" r="1.3" /><circle cx="30.6" cy="28.4" r="1.25" />
        <circle cx="37" cy="29" r="1.2" /><circle cx="27" cy="37" r="1.15" />
        <circle cx="34" cy="36.6" r="1.15" /><circle cx="41" cy="33" r="1.05" />
      </g>
    )}

    <ellipse cx="19.4" cy="33.6" rx="7.4" ry="7" fill={C} opacity=".5" />

    {/* near pair of legs, ending in hooves */}
    <g stroke={`url(#${g2})`} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="42,34.6 41,44 42.8,50 42.8,55.6" />
      <polyline points="19.4,33.6 21.8,43.6 18.4,50 18.8,55.6" />
    </g>
    <g fill={sh(C, -0.62)}>
      <ellipse cx="42.8" cy="56" rx="1.7" ry="1.3" /><ellipse cx="18.8" cy="56" rx="1.7" ry="1.3" />
      <ellipse cx="38.2" cy="55.8" rx="1.5" ry="1.15" /><ellipse cx="19.8" cy="55.8" rx="1.5" ry="1.15" />
    </g>

    {/* neck, carried up and forward */}
    <path d="M41.4,28.6 Q44.4,21.6 48.6,17.4 L53.6,20.6 Q50.4,24.8 48.4,31 Z"
      fill={`url(#${g1})`} />
    {o.mane && (
      <path d="M42.6,27.4 Q45.6,20.4 49.8,16.2 Q51.4,17.2 51.8,18.6 Q47.6,22.6 45.2,29 Z"
        fill={o.maneC || sh(C, -0.3)} />
    )}

    {/* head: a long wedge skull rather than a cat's round one */}
    <path d="M48.8,17.4 Q54,13.4 58.6,14.6 Q61.6,16 61,19.6 Q60.2,22.8 56.6,23.4
             Q52,24 49.6,21.6 Q48,19.8 48.8,17.4 Z" fill={C} />
    <ellipse cx="59" cy="20.4" rx="3.2" ry="2.4" fill={o.muzzle || sh(C, 0.45)} />
    <ellipse cx="60.4" cy="19.8" rx="1" ry=".8" fill={sh(C, -0.66)} />
    {o.blaze && (
      <path d="M53.4,14.6 Q56.6,15.2 58.6,17.4 Q56.4,19.6 54,20.2 Q52.4,17.4 53.4,14.6 Z"
        fill={sh(C, 0.6)} opacity=".9" />
    )}
    <Eye x={53.6} y={17.8} r={1.85 * er} iris={o.iris || "#4a3320"} />

    {/* ears sit behind the horns */}
    <path d="M50.2,15.6 Q47.6,12.4 46.4,11.8 Q48.6,11.4 51.4,13.8 Z" fill={sh(C, -0.2)} />

    {/* headgear */}
    {o.curved && (
      <g fill="none" stroke={horn} strokeWidth="2.1" strokeLinecap="round">
        <path d="M52.6,13.6 Q55.4,7.4 51.4,4.4" />
        <path d="M56.6,13.6 Q59.6,7.8 56,4.6" />
      </g>
    )}
    {o.straight && (
      <g stroke={horn} strokeWidth="1.9" strokeLinecap="round">
        <path d="M52.8,13.8 L50.8,4.6" /><path d="M56.6,14 L57.4,4.4" />
      </g>
    )}
    {o.spiral && (
      <g fill="none" stroke={horn} strokeWidth="1.9" strokeLinecap="round">
        <path d="M52.8,13.8 Q49.6,10 52.2,7 Q54.6,4.4 52,2.6" />
        <path d="M56.8,13.8 Q60,10 57.4,7 Q55,4.4 57.6,2.6" />
      </g>
    )}
    {o.antler && (
      <g fill="none" stroke={horn} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M52.6,13.4 L50.4,7.6 M50.4,7.6 L47.2,5.4 M50.4,7.6 L49.4,3 M50.4,7.6 L53,4.4" />
        <path d="M56.8,13.4 L58.8,7.4 M58.8,7.4 L61.8,5 M58.8,7.4 L59.6,2.8 M58.8,7.4 L56.4,4.2" />
      </g>
    )}
    {o.ossi && (
      <g stroke={horn} strokeWidth="2.2" strokeLinecap="round">
        <path d="M53,13.6 L52.2,9.6" /><path d="M56.4,13.6 L57.2,9.6" />
        <circle cx="52.1" cy="9" r="1.2" fill={sh(C, -0.4)} stroke="none" />
        <circle cx="57.3" cy="9" r="1.2" fill={sh(C, -0.4)} stroke="none" />
      </g>
    )}
    {o.nasal && (
      <g fill={horn}>
        <path d="M60,16.6 Q62.6,12.4 63.4,15.4 Q63,18.2 61,18.4 Z" />
        <path d="M56.4,15.4 Q58,12.8 58.8,15.2 Q58.4,16.8 57.2,16.9 Z" />
      </g>
    )}
  </g>
  );
};
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
const rodA = (o) => (er) => {
  const F = o.fur || "#a8825c";
  const spine = sh(F, -0.24), belly = sh(F, 0.42), limb = sh(F, -0.12);
  const mark = o.markC || sh(F, -0.55);
  const g1 = gid("rc", F), g2 = gid("rl", F);
  return (
  <g transform={o.big ? undefined : "translate(6,7) scale(.82)"}>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={spine} /><stop offset=".55" stopColor={F} />
        <stop offset="1" stopColor={belly} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.16)} /><stop offset="1" stopColor={sh(F, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="56.4" rx="18" ry="2.2" fill="#000" opacity=".15" />

    {/* long thin tail, the way a rat or squirrel carries it */}
    <path d="M15,38 Q6,37 3,29 Q2,23.6 6,21" stroke={limb} strokeWidth="2.2" fill="none"
      strokeLinecap="round" />

    <g stroke={`url(#${g2})`} strokeWidth="2.8" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".72">
      <polyline points="39,42 38.4,47 40,50.6 40,54.2" />
      <polyline points="22,41 23.4,46 20.6,50 21,54.2" />
    </g>

    {/* hunched rounded back - rodents sit compact rather than stretched */}
    <path d="M45,30 Q51,32.6 51,38.4 Q51,44 46.4,46.4 L36,47.6
             Q26,49 19.6,46.6 Q14,44.4 14,38 Q14,31.6 20,29.6 Q32,26.4 45,30 Z"
      fill={`url(#${g1})`} />
    <path d="M19.6,46.6 Q26,49 36,47.6 L46.4,46.4 Q43,48.8 36,49.4 Q26,50.6 19.6,46.6 Z"
      fill={sh(F, 0.5)} />
    {o.stripes && (
      <g stroke={mark} strokeWidth="1.6" strokeLinecap="round" fill="none" opacity=".85">
        <path d="M24,29.6 Q25,37 24,46 M31,28 Q32,36.4 31,47 M38,28.6 Q39,36.6 38,46.4" />
      </g>
    )}
    {o.quills && (
      <g stroke={o.quillC || sh(F, -0.5)} strokeWidth="1.5" strokeLinecap="round">
        <path d="M22,30 L18.6,23 M28,27.8 L26.4,20.4 M34,27.4 L34,20 M40,28.4 L42,21.2
                 M45,31 L48.4,25" />
      </g>
    )}
    {o.bib && <ellipse cx="48" cy="38.6" rx="3.8" ry="4.4" fill={sh(F, 0.55)} opacity=".85" />}

    <g stroke={`url(#${g2})`} strokeWidth="3.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="43.6,39.6 43,46 44.8,50.4 44.8,54.6" />
      <polyline points="19.4,39 21,45.6 18.2,50 18.6,54.6" />
    </g>
    <g fill={sh(F, -0.4)}>
      <ellipse cx="44.8" cy="54.9" rx="1.9" ry="1.1" /><ellipse cx="18.6" cy="54.9" rx="1.9" ry="1.1" />
    </g>

    {/* ears: rodent ears are big relative to the head */}
    {o.longEar ? (
      <g>
        <path d="M48.6,26 Q46.6,16 45.4,13.4 Q49.4,15.6 51.4,24 Z" fill={sh(F, -0.22)} />
        <path d="M55.6,25.2 Q56.8,15 58.4,12.6 Q60.4,18.4 59.2,25.6 Z" fill={F} />
        <path d="M56.4,24.4 Q57.2,17.4 58.4,15.4 Q59.4,19.6 58.6,24.8 Z"
          fill={o.inner || sh(F, 0.35)} />
      </g>
    ) : (
      <g>
        <circle cx="48.6" cy="24.4" r={o.earRound ? 4 : 3.2} fill={sh(F, -0.22)} />
        <circle cx="57.6" cy="23.8" r={o.earRound ? 4.4 : 3.5} fill={F} />
        <circle cx="57.8" cy="24" r={o.earRound ? 2.6 : 2} fill={o.inner || sh(F, 0.35)} />
      </g>
    )}

    <ellipse cx="53.4" cy="31.4" rx="7" ry="5.8" fill={F} />
    {/* short blunt rodent muzzle with a big front incisor */}
    <ellipse cx="58.2" cy="33.6" rx="3.8" ry="2.6" fill={o.muzzle || sh(F, 0.45)} />
    <path d="M60.4,32 Q62.4,32.2 62.5,33.4 Q62.3,34.6 61.1,34.6 Q60,34.2 60.4,32 Z"
      fill={sh(F, -0.7)} />
    <path d="M59.6,35.4 L61.4,35.4 L61.4,37.4 L59.6,37.4 Z" fill="#f4ecd8" />
    <Eye x={54.2} y={29.4} r={2 * er} iris={o.iris || "#26221c"} />
    <g stroke={sh(F, -0.45)} strokeWidth=".4" fill="none" opacity=".6" strokeLinecap="round">
      <path d="M59.6,32.6 Q62,31.4 63.4,30.8" /><path d="M59.8,34 Q62.2,33.8 63.6,33.6" />
    </g>
  </g>
  );
};
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
  bottlenose: cetA({ hide: "#7a8a94", belly: "#c9d4d9", dorsal: true, melon: true, melonC: "#8a9aa3", blow: true, beak: true }),
  spinnerdolphin: cetA({ hide: "#5c6b7a", belly: "#c4d0d9", dorsal: true, melon: true, melonC: "#6b7a8a", beak: true }),
  duskydolphin: cetA({ hide: "#3c4c5c", belly: "#e8e4d8", dorsal: true, melon: true, melonC: "#4c5c6b", patch: "#c9bda3", beak: true }),
  hectorsdolphin: cetA({ hide: "#8a8578", belly: "#f2ede0", dorsal: true, melon: true, melonC: "#26292e", patch: "#26292e", beak: true }),
  commersons: cetA({ hide: "#26292e", belly: "#f5f2e8", dorsal: true, melon: true, melonC: "#26292e", patch: "#f5f2e8", beak: true }),
  rissos: cetA({ hide: "#a8a89a", belly: "#d9d4c4", dorsal: true, tall: true, melon: true, melonC: "#b5b5a3", spots: true, markC: "#f2ede0" }),
  irrawaddy: cetA({ hide: "#8a9099", belly: "#c4cad0", dorsal: true, melon: true, melonC: "#99a0a8" }),
  amazonriverdolphin: cetA({ hide: "#d9a5b5", belly: "#e8c9d4", melon: true, melonC: "#e8b5c4", rostrum: "#d9a5b5", longBeak: true }),
  gangesdolphin: cetA({ hide: "#8a8578", belly: "#b5b0a0", rostrum: "#8a8578", melon: true, melonC: "#8a8578", longBeak: true }),
  vaquita: cetA({ hide: "#8a8a90", belly: "#e8e4d8", dorsal: true, patch: "#26292e", melon: true, melonC: "#8a8a90" }),
  harborporpoise: cetA({ hide: "#5c6068", belly: "#c9c9c4", dorsal: true, melon: true, melonC: "#6b6f78" }),
  cuvierbeaked: cetA({ hide: "#8a8578", belly: "#c4c0b0", dorsal: true, melon: true, melonC: "#9a958a", spots: true, markC: "#e8e4d8", beak: true }),
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
  echidna: platyA({ fur: "#5c4c3c", spines: true, spineC: "#e8c547", beakLong: true, billC: "#3c3226", iris: "#2a2018" }) });

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
  echidna: A("Echidna", "echidna", ["Armor", "Bug"], B(48, 42, 62, 24), ["quillguard", "buzzrush", "ironhide"], 0.32) });
