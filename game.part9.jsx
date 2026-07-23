// ---------- CHAPTER VI — Part 9: THE MENAGERIE (sea, sky, small) ----------

// --- birds ---
const parrA = (o) => (er) => {
  const B = o.body || "#3a9a4a";
  const W = o.wingC || sh(B, -0.2);
  const HD = o.head || B;
  const g1 = gid("prc", B), g2 = gid("prw", W);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, -0.16)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, 0.28)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(W, 0.12)} /><stop offset="1" stopColor={sh(W, -0.24)} />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy="57.6" rx="13" ry="2" fill="#000" opacity=".14" />
    {/* the long tail a parrot trails behind the perch */}
    {o.longTail ? (
      <g>
        <path d="M22,40 Q13,50 7,62 L12,63 Q20,51 27,43 Z" fill={o.tailC || `url(#${g2})`} />
        <path d="M25,41 Q17,51 12,62 L15,62.6 Q22,51 29,44 Z" fill={sh(o.tailC || W, -0.18)} opacity=".7" />
      </g>
    ) : (
      <path d="M20,38 Q10,44 5,52 L11,53 Q19,46 25,42 Z" fill={o.tailC || `url(#${g2})`} />
    )}
    {/* short gripping feet */}
    <g stroke={o.footC || sh(B, -0.5)} strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M27,45 L26.6,48.6" /><path d="M34,45 L34.4,48.6" />
    </g>
    <g stroke={o.footC || sh(B, -0.5)} strokeWidth="1.4" fill="none" strokeLinecap="round">
      <path d="M26.6,48.6 L23.6,50 M26.6,48.6 L29.6,50" />
      <path d="M34.4,48.6 L31.4,50 M34.4,48.6 L37.4,50" />
    </g>
    {/* Head and body are one mass. A parrot has no visible neck - the skull
        sits straight onto the shoulders, which is most of its silhouette. */}
    <path d="M46,20 Q55,25 53,34 Q51,45 38,48 Q24,50 17,42 Q12,35 18,27 Q28,16 46,20 Z"
      fill={`url(#${g1})`} />
    {o.stripes && (
      <g stroke={o.markC || sh(B, -0.45)} strokeWidth=".9" fill="none" opacity=".7">
        <path d="M21,30 q7,1.8 14,.4 M20,35 q7,1.8 14,.4 M21,40 q7,1.8 13,.4" />
      </g>
    )}
    {o.belly && <path d="M22,42 Q33,48 45,44 Q33,50 22,45 Z" fill={o.belly} />}
    {/* folded wing */}
    <path d="M19,29 Q32,25 42,32 Q38,42 25,43 Q15,39 19,29 Z" fill={`url(#${g2})`} />
    <path d="M23,32 Q32,31 39,35" stroke={sh(W, -0.32)} strokeWidth="1" fill="none"
      opacity=".6" strokeLinecap="round" />
    {/* the head, same mass, different colour */}
    <path d="M46,20 Q55,25 53,33 Q47,35 42,29 Q39,23 46,20 Z" fill={HD} />
    {o.face && <ellipse cx="49" cy="27" rx="4.6" ry="4.4" fill={o.face} />}
    {o.cheek && <ellipse cx="47.4" cy="31" rx="2.8" ry="2.2" fill={o.cheekC || "#e8734a"} />}
    {o.crest && (
      <g fill={o.crestC || sh(HD, 0.3)}>
        <path d="M42,15 Q39,4 46,9 Q42.6,11.6 43.4,17 Z" />
        <path d="M47,14 Q46,3 53,8 Q48.6,10.6 49,15 Z" />
      </g>
    )}
    {/* the deep hooked bill, with the lower mandible showing */}
    <path d="M52,22 Q60,22 60.4,27 Q60,33 55,29.6 Q53.6,25.6 51,23.6 Z"
      fill={o.beakC || "#3c3630"} />
    <path d="M52.6,26.6 Q56.4,28 58,30.4 Q54.6,31.4 52.4,29 Z"
      fill={sh(o.beakC || "#3c3630", 0.3)} />
    <Eye x={48.6} y={24} r={2.1 * er} iris={o.iris || "#e8dcc3"} />
  </g>
  );
};
const rapA = (o) => (er) => {
  const B = o.body || "#7a6a4a";
  const W = o.wingC || sh(B, -0.22);
  const HD = o.head || B;
  const g1 = gid("rpc", B), g2 = gid("rpw", W);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, -0.24)} /><stop offset=".55" stopColor={B} />
        <stop offset="1" stopColor={sh(B, 0.32)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(W, 0.16)} /><stop offset="1" stopColor={sh(W, -0.28)} />
      </linearGradient>
    </defs>
    <ellipse cx="31" cy="57.4" rx="15" ry="2.2" fill="#000" opacity=".16" />
    {/* squared raptor tail */}
    <path d="M21,38 Q10,44 5,52 L12,53 Q19,46 25,42 Z" fill={`url(#${g2})`} />
    <g stroke={sh(W, -0.4)} strokeWidth=".8" fill="none" opacity=".6">
      <path d="M9,49 Q16,44 22,40" /><path d="M11,52 Q18,47 24,42" />
    </g>
    {/* Short feathered legs and talons. Raptors are compact - only the
        secretary bird stands tall, and it opts in with longLegs. */}
    {o.longLegs ? (
      <g>
        <g stroke={sh(B, -0.14)} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="28,44 27.4,50 28.4,55" />
          <polyline points="34,44 34.6,50 33.6,55" />
        </g>
        <g stroke={o.beakC || "#e8b03a"} strokeWidth="1.4" fill="none" strokeLinecap="round">
          <path d="M28.4,55 L25.4,56.4 M28.4,55 L29,57 M28.4,55 L31.4,56.4" />
          <path d="M33.6,55 L30.6,56.4 M33.6,55 L34.2,57 M33.6,55 L36.6,56.4" />
        </g>
      </g>
    ) : (
      <g>
        <g stroke={sh(B, -0.14)} strokeWidth="3.6" fill="none" strokeLinecap="round">
          <path d="M28,44 L27.6,47.6" /><path d="M34,44 L34.4,47.6" />
        </g>
        <g stroke={o.beakC || "#e8b03a"} strokeWidth="1.6" fill="none" strokeLinecap="round">
          <path d="M27.6,47.6 L24.4,49.4 M27.6,47.6 L28.2,50 M27.6,47.6 L30.8,49.4" />
          <path d="M34.4,47.6 L31.2,49.4 M34.4,47.6 L35,50 M34.4,47.6 L38.2,49.4" />
        </g>
      </g>
    )}
    {/* upright, broad-chested body */}
    <ellipse cx="30" cy="35" rx="12.4" ry="11" fill={`url(#${g1})`} transform="rotate(-8 30 35)" />
    {o.mottle && (
      <g fill={o.markC || sh(B, -0.4)} opacity=".55">
        <circle cx="26" cy="31" r="1.5" /><circle cx="32" cy="33" r="1.4" />
        <circle cx="28" cy="39" r="1.4" /><circle cx="34" cy="40" r="1.3" />
      </g>
    )}
    {/* folded wing */}
    <path d="M21,30 Q32,26 40,33 Q35,43 25,43 Q17,39 21,30 Z" fill={`url(#${g2})`} />
    <g stroke={sh(W, -0.4)} strokeWidth=".85" fill="none" opacity=".7">
      <path d="M23,32 Q30,31 37,35" /><path d="M22,36 Q29,35 36,39" /><path d="M22,40 Q28,39.6 34,42" />
    </g>
    {o.ruff && (
      <path d="M36,28 Q42,22 48,26 Q44,32 38,33 Z" fill={o.ruffC || sh(B, 0.3)} />
    )}
    {/* head sunk onto the shoulders */}
    <path d="M37,30 Q42,25 46,21 L51,25 Q46,28 42,33 Z" fill={`url(#${g1})`} />
    {o.disc ? (
      <g>
        <circle cx="49" cy="21" r="8" fill={o.discC || sh(HD, 0.24)} />
        <circle cx="49" cy="21" r="8" fill="none" stroke={sh(HD, -0.3)} strokeWidth=".8" />
        <ellipse cx="46" cy="20" rx="3.4" ry="3.8" fill={sh(HD, 0.4)} />
        <ellipse cx="52" cy="20" rx="3.4" ry="3.8" fill={sh(HD, 0.4)} />
      </g>
    ) : (
      <ellipse cx="49" cy="21" rx="7.2" ry="6.4" fill={HD} />
    )}
    {o.hood && <path d="M43,16 Q49,12.6 55,16.6 Q49,19 43.4,19.6 Z" fill={sh(HD, -0.34)} />}
    {o.brow && (
      <path d="M45,17 Q50,14.6 55,17.4 Q50,17.4 45,18.6 Z" fill={o.browC || sh(HD, -0.45)} />
    )}
    {o.tufts && (
      <g fill={HD}>
        <path d="M44,16 Q42,8.6 47,12.6 Z" /><path d="M54,15.6 Q56,8.4 51,12.4 Z" />
      </g>
    )}
    {o.plumes && (
      <g fill={o.plumeC || sh(B, -0.3)}>
        <path d="M45,15 Q42,6 49,10 Q46,12 46.4,15.6 Z" />
      </g>
    )}
    {o.wattle && (
      <path d="M46,27 Q49,32 45,33.4 Q43.6,30 44.4,26.6 Z" fill={o.wattleC || "#c94a5a"} />
    )}
    {/* the hooked beak every raptor has */}
    <path d="M54,19 Q60,18.6 60,22.6 Q59.6,27 56.6,24.4 Q56.4,21.4 53,21.6 Z"
      fill={o.beakC || "#3c3630"} />
    <Eye x={51} y={19.4} r={2.1 * er} iris={o.iris || "#e8c547"} />
  </g>
  );
};

// ---------- BIRD POSTURE ARCHETYPES ----------
// One generic bird could not cover a floating duck, a forward-staring owl and a
// perched parrot at once. These split birds by how the animal actually holds
// itself, following the shapes the emoji get right.

// --- waterfowl: floating, seen side-on, no legs at all ---
const waterA = (o) => (er) => {
  const B = o.body || "#8a7a5c";
  const W = o.wingC || sh(B, -0.2);
  const HD = o.head || B;
  const g1 = gid("wfc", B), g2 = gid("wfw", W);
  const neckLong = o.longNeck;
  const hx = 46, hy = neckLong ? 14 : 24;
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, -0.16)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, 0.26)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(W, 0.12)} /><stop offset="1" stopColor={sh(W, -0.22)} />
      </linearGradient>
    </defs>

    {/* the waterline. A duck has legs, you simply never see them. */}
    <g stroke={o.waterC || "#6b9ac4"} strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".55">
      <path d="M4,46 q5,-2.4 10,0 q5,2.4 10,0 q5,-2.4 10,0 q5,2.4 10,0 q5,-2.4 10,0" />
      <path d="M8,50 q5,-2 10,0 q5,2 10,0 q5,-2 10,0 q5,2 10,0" opacity=".6" />
    </g>

    {/* tail cocked up at the stern */}
    <path d="M16,36 Q7,32 3,26 Q10,29 18,32 Z" fill={o.tailC || `url(#${g2})`} />

    {/* the hull: flat along the waterline, rounded above */}
    <path d="M15,44 Q13,32 26,29 Q40,27 44,36 Q45,42 42,44 Z" fill={`url(#${g1})`} />
    {o.flank && <path d="M20,42 Q28,38 38,40 Q30,43 20,43 Z" fill={o.flank} opacity=".8" />}

    {/* folded wing */}
    <path d="M19,36 Q29,31 38,35 Q34,42 24,42 Q17,40 19,36 Z" fill={`url(#${g2})`} />
    {o.speculum && <path d="M23,38 Q30,36 35,38 Q30,40 23,40 Z" fill={o.speculum} />}

    {/* neck: a duck's is short and thick, a swan's is a tall S */}
    {neckLong ? (
      <path d="M38,32 Q46,28 47,20 Q47.6,12 43,9 L47,6.6 Q52,11 51,20 Q50,30 42,35 Z"
        fill={o.neckC || `url(#${g1})`} />
    ) : (
      <path d="M37,32 Q41,27 43,22 L48,24 Q45,29 42,34 Z" fill={o.neckC || `url(#${g1})`} />
    )}

    <ellipse cx={hx} cy={hy} rx="7.4" ry="6.4" fill={HD} />
    {o.mask && <path d={`M${hx - 5},${hy - 2} Q${hx},${hy - 5} ${hx + 5},${hy - 1} Q${hx},${hy + 1} ${hx - 4.6},${hy + 2} Z`} fill={o.mask} />}
    {o.crest && <path d={`M${hx - 4},${hy - 6} Q${hx - 6},${hy - 14} ${hx + 2},${hy - 10} Q${hx - 2},${hy - 8} ${hx - 2},${hy - 5} Z`} fill={o.crestC || sh(HD, -0.3)} />}
    {/* the broad flat bill every waterfowl has */}
    <path d={`M${hx + 4},${hy - 2.4} Q${hx + 16},${hy - 1.4} ${hx + 16},${hy + 2.2} Q${hx + 10},${hy + 4.4} ${hx + 4},${hy + 3} Z`}
      fill={o.beakC || "#e8a53a"} />
    <ellipse cx={hx + 13} cy={hy - 0.4} rx=".8" ry=".6" fill={sh(o.beakC || "#e8a53a", -0.5)} />
    <Eye x={hx + 2} y={hy - 1.8} r={2.1 * er} iris={o.iris || "#3c3226"} />
  </g>
  );
};

// --- owls: facing you, which is the whole point of an owl ---
const owlA = (o) => (er) => {
  const B = o.body || "#8a7458";
  const W = o.wingC || sh(B, -0.2);
  const D = o.discC || sh(B, 0.3);
  const g1 = gid("owc", B), g2 = gid("oww", W);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, -0.14)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, 0.24)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(W, 0.12)} /><stop offset="1" stopColor={sh(W, -0.24)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="58" rx="13" ry="2.2" fill="#000" opacity=".14" />
    {/* wings hanging at the sides of an upright barrel body */}
    <path d="M17,26 Q11,38 15,50 Q21,48 23,36 Z" fill={`url(#${g2})`} />
    <path d="M47,26 Q53,38 49,50 Q43,48 41,36 Z" fill={`url(#${g2})`} />
    <ellipse cx="32" cy="36" rx="16" ry="18" fill={`url(#${g1})`} />
    {o.mottle && (
      <g fill={o.markC || sh(B, -0.36)} opacity=".5">
        <circle cx="26" cy="30" r="1.5" /><circle cx="34" cy="28" r="1.4" />
        <circle cx="38" cy="34" r="1.4" /><circle cx="27" cy="40" r="1.4" />
        <circle cx="35" cy="43" r="1.3" /><circle cx="30" cy="48" r="1.2" />
      </g>
    )}
    {o.bars && (
      <g stroke={o.markC || sh(B, -0.4)} strokeWidth="1.2" fill="none" opacity=".55">
        <path d="M22,32 q10,3 20,0 M21,39 q11,3 22,0 M23,46 q9,2.6 18,0" />
      </g>
    )}
    {/* stubby feathered legs and talons */}
    <g stroke={o.beakC || "#e8b03a"} strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M27,53 L24.6,56 M27,53 L27.4,56.6 M27,53 L30,56" />
      <path d="M37,53 L34.4,56 M37,53 L37.4,56.6 M37,53 L40,56" />
    </g>
    {/* ear tufts sit behind the head */}
    {o.tufts && (
      <g fill={sh(B, -0.16)}>
        <path d="M20,16 Q17,4 26,11 Z" /><path d="M44,16 Q47,4 38,11 Z" />
      </g>
    )}
    {/* the big round skull and the two facial discs */}
    <circle cx="32" cy="21" r="17" fill={B} />
    <circle cx="24.6" cy="21" r="8.6" fill={D} />
    <circle cx="39.4" cy="21" r="8.6" fill={D} />
    <circle cx="24.6" cy="21" r="8.6" fill="none" stroke={sh(B, -0.3)} strokeWidth=".8" opacity=".7" />
    <circle cx="39.4" cy="21" r="8.6" fill="none" stroke={sh(B, -0.3)} strokeWidth=".8" opacity=".7" />
    {o.brow && (
      <g fill={o.browC || sh(B, -0.4)}>
        <path d="M17,15 Q24,11.6 31,14.6 Q24,14 17,16.4 Z" />
        <path d="M47,15 Q40,11.6 33,14.6 Q40,14 47,16.4 Z" />
      </g>
    )}
    <Eye x={24.6} y={21} r={4.6 * er} iris={o.iris || "#e8c547"} />
    <Eye x={39.4} y={21} r={4.6 * er} iris={o.iris || "#e8c547"} />
    {/* small hooked beak, tucked between the eyes */}
    <path d="M32,24 Q35,25 34,29 Q32,32 30,29 Q29,25 32,24 Z" fill={o.beakC || "#3c3630"} />
  </g>
  );
};

// --- penguins: upright, facing forward, flippers not wings ---
const pengA = (o) => (er) => {
  const B = o.body || "#2e2b28";
  const F = o.front || "#f4efe4";
  const FT = o.footC || "#e8913a";
  const g1 = gid("pgc", B), g2 = gid("pgf", F);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, 0.16)} /><stop offset="1" stopColor={sh(B, -0.22)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, 0.1)} /><stop offset="1" stopColor={sh(F, -0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="58.4" rx="13" ry="2" fill="#000" opacity=".14" />
    {/* webbed feet planted at the bottom */}
    <g fill={FT}>
      <path d="M24,54 Q19,57.4 20.6,58.6 L29,58.6 Q30,56 28,54 Z" />
      <path d="M40,54 Q45,57.4 43.4,58.6 L35,58.6 Q34,56 36,54 Z" />
    </g>
    {/* flippers held out from the body */}
    <path d="M16,26 Q9,38 13,52 Q19,50 21,34 Z" fill={`url(#${g1})`} />
    <path d="M48,26 Q55,38 51,52 Q45,50 43,34 Z" fill={`url(#${g1})`} />
    {/* the body: one continuous dark oval from head to tail */}
    <ellipse cx="32" cy="32" rx="16.4" ry="24" fill={`url(#${g1})`} />
    {/* the pale front */}
    <ellipse cx="32" cy="36" rx="11.4" ry="19" fill={`url(#${g2})`} />
    {/* face patches vary by species: the white mask, or a bare dark face */}
    {o.face && (
      <g fill={o.face}>
        <ellipse cx="24" cy="18" rx="4.4" ry="5.4" /><ellipse cx="40" cy="18" rx="4.4" ry="5.4" />
      </g>
    )}
    {o.bandC && (
      <path d="M21,28 Q32,33 43,28 Q32,36 21,28 Z" fill={o.bandC} />
    )}
    {o.crest && (
      <g fill={o.crestC || "#e8c547"}>
        <path d="M23,12 Q16,6 12,10 Q18,11 22,15 Z" />
        <path d="M41,12 Q48,6 52,10 Q46,11 42,15 Z" />
      </g>
    )}
    {o.downy && <ellipse cx="32" cy="36" rx="13" ry="20" fill={sh(F, -0.12)} opacity=".5" />}
    <Eye x={26.6} y={17} r={2.2 * er} iris={o.iris || "#3c3226"} />
    <Eye x={37.4} y={17} r={2.2 * er} iris={o.iris || "#3c3226"} />
    {/* the straight spear bill */}
    <path d="M28.6,22 L35.4,22 L33.4,29.4 Q32,30.6 30.6,29.4 Z" fill={o.beakC || "#c9762e"} />
  </g>
  );
};

// --- ground fowl: facing forward, round and speckled ---
const fowlA = (o) => (er) => {
  const B = o.body || "#5c5344";
  const W = o.wingC || sh(B, -0.2);
  const g1 = gid("flc", B), g2 = gid("flw", W);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, -0.14)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, 0.24)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(W, 0.12)} /><stop offset="1" stopColor={sh(W, -0.24)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="58" rx="14" ry="2.2" fill="#000" opacity=".14" />
    {/* the fan, spread behind the bird */}
    {o.fan && (
      <g>
        {[-34, -20, -7, 7, 20, 34].map((d, i) => (
          <g key={i}>
            <path d={`M32,42 Q${32 + d * 0.7},${22 + Math.abs(d) * 0.16} ${32 + d},${12 + Math.abs(d) * 0.22}`}
              stroke={o.fanC || sh(B, -0.2)} strokeWidth="3" fill="none" strokeLinecap="round" />
            {o.eyeSpot && <circle cx={32 + d} cy={12 + Math.abs(d) * 0.22} r="3" fill={o.eyeSpot} />}
          </g>
        ))}
      </g>
    )}
    {/* legs and scaly feet */}
    <g stroke={o.footC || "#c98a4a"} strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M27,50 L26.4,55" /><path d="M37,50 L37.6,55" />
    </g>
    <g stroke={o.footC || "#c98a4a"} strokeWidth="1.5" fill="none" strokeLinecap="round">
      <path d="M26.4,55 L23,57 M26.4,55 L26.4,58 M26.4,55 L29.8,57" />
      <path d="M37.6,55 L34.2,57 M37.6,55 L37.6,58 M37.6,55 L41,57" />
    </g>
    {/* wings at the flanks */}
    <path d="M16,30 Q10,40 15,50 Q21,47 23,36 Z" fill={`url(#${g2})`} />
    <path d="M48,30 Q54,40 49,50 Q43,47 41,36 Z" fill={`url(#${g2})`} />
    {/* plump upright body */}
    <ellipse cx="32" cy="36" rx="15.4" ry="16.4" fill={`url(#${g1})`} />
    {o.speckle && (
      <g fill={o.speckleC || "#f2ede0"} opacity=".85">
        {[[25,28],[32,26],[39,29],[22,35],[30,34],[38,36],[26,42],[34,42],[41,44],[29,48],[36,49]]
          .map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.4" />)}
      </g>
    )}
    {o.bib && <ellipse cx="32" cy="44" rx="7" ry="6" fill={o.bib} opacity=".85" />}
    {/* head on a short neck */}
    <ellipse cx="32" cy="18" rx="7.6" ry="7.4" fill={o.head || B} />
    {o.bare && <ellipse cx="32" cy="19.4" rx="5.6" ry="6" fill={o.bare} />}
    {o.comb && (
      <path d="M27,11 q2.4,-5 4.6,-1.4 q2.4,-5 4.6,-1.4 q2,-3.6 3.4,.6 q-6.4,-.6 -12.6,2.2 Z"
        fill={o.combC || "#c93a3a"} />
    )}
    {o.casque && <path d="M29,11 Q32,2 35,11 Q32,9.4 29,11 Z" fill={o.casqueC || "#c9b08a"} />}
    {o.wattle && (
      <g fill={o.wattleC || "#c93a3a"}>
        <path d="M28.6,23 Q27,29 30,29.6 Q31.4,26.6 31,22.6 Z" />
        <path d="M35.4,23 Q37,29 34,29.6 Q32.6,26.6 33,22.6 Z" />
      </g>
    )}
    <Eye x={28.4} y={17} r={1.9 * er} iris={o.iris || "#3c3226"} />
    <Eye x={35.6} y={17} r={1.9 * er} iris={o.iris || "#3c3226"} />
    <path d="M30.4,20.6 L33.6,20.6 L32,25 Z" fill={o.beakC || "#e8b03a"} />
  </g>
  );
};

// --- songbirds and corvids: compact, side-on, and emphatically no neck ---
const songA = (o) => (er) => {
  const B = o.body || "#7a6a4a";
  const W = o.wingC || sh(B, -0.22);
  const HD = o.head || B;
  const g1 = gid("sgc", B), g2 = gid("sgw", W);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, -0.16)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, 0.28)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(W, 0.12)} /><stop offset="1" stopColor={sh(W, -0.24)} />
      </linearGradient>
    </defs>
    <ellipse cx="31" cy="57.6" rx="13" ry="2" fill="#000" opacity=".14" />
    {/* tail: short and pointed, or streaming for the showy ones */}
    {o.longTail ? (
      <path d="M18,38 Q8,48 3,61 L9,62 Q17,50 24,42 Z" fill={o.tailC || `url(#${g2})`} />
    ) : (
      <path d="M17,34 Q7,36 2,42 Q10,42 19,39 Z" fill={o.tailC || `url(#${g2})`} />
    )}
    {/* tiny legs, barely there */}
    <g stroke={o.footC || sh(B, -0.5)} strokeWidth="1.8" fill="none" strokeLinecap="round">
      <path d="M27,48 L26.6,51.6" /><path d="M34,48 L34.4,51.6" />
    </g>
    <g stroke={o.footC || sh(B, -0.5)} strokeWidth="1.2" fill="none" strokeLinecap="round">
      <path d="M26.6,51.6 L24,53 M26.6,51.6 L27,53.6 M26.6,51.6 L29.2,53" />
      <path d="M34.4,51.6 L31.8,53 M34.4,51.6 L34.8,53.6 M34.4,51.6 L37,53" />
    </g>
    {/* one continuous teardrop from crown to tail - no neck at all, which is
        what makes a sparrow read as a sparrow */}
    <path d="M45,22 Q52,26 51,34 Q50,44 38,47 Q24,49 17,42 Q13,36 18,29 Q28,19 45,22 Z"
      fill={`url(#${g1})`} />
    {o.bib && <path d="M40,38 Q47,40 48.6,33 Q46.6,44 38,44.4 Z" fill={o.bib} />}
    {o.belly && <path d="M22,42 Q32,47 43,44 Q32,49 22,44 Z" fill={o.belly} />}
    {/* folded wing */}
    <path d="M20,30 Q32,26 41,32 Q37,41 25,42 Q16,39 20,30 Z" fill={`url(#${g2})`} />
    <path d="M23,33 Q31,32 38,35" stroke={sh(W, -0.32)} strokeWidth="1" fill="none"
      opacity=".6" strokeLinecap="round" />
    {o.crest && (
      <path d="M42,17 Q40,7 48,12 Q44,14 44.6,19 Z" fill={o.crestC || sh(HD, -0.24)} />
    )}
    {/* the head is part of the same mass, only tinted differently */}
    <path d="M45,22 Q52,26 51,33 Q46,34 42,29 Q40,24 45,22 Z" fill={HD} />
    {o.mask && <path d="M44,24 Q50,24 52,28.6 Q47,29 43.6,27.4 Z" fill={o.mask} />}
    {o.cheek && <ellipse cx="47" cy="30" rx="2.6" ry="2" fill={o.cheekC || "#e8734a"} />}
    {/* small beak, sized to the bird */}
    {o.bill === "dagger" ? (
      <path d="M50,25 L63,28 L50,30.6 Z" fill={o.beakC || "#3c3630"} />
    ) : o.bill === "chisel" ? (
      <path d="M50.4,25.4 L60,27.6 L50.4,30 Z" fill={o.beakC || "#3c3630"} />
    ) : o.bill === "stout" ? (
      <path d="M50,25 Q57,26.4 56.6,28.4 Q55,30.6 50,30.4 Z" fill={o.beakC || "#3c3630"} />
    ) : (
      <path d="M50.4,25.8 L57.4,28 L50.4,30 Z" fill={o.beakC || "#3c3630"} />
    )}
    <Eye x={46.6} y={26.4} r={2 * er} iris={o.iris || "#26221c"} />
  </g>
  );
};

// --- the hummingbird gets its own model, because nothing else hovers ---
const hummA = (o) => (er) => {
  const B = o.body || "#2e9a6a";
  const W = o.wingC || "#c9d4e8";
  const g1 = gid("hmc", B);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={sh(B, 0.34)} /><stop offset=".5" stopColor={B} />
        <stop offset="1" stopColor={sh(B, -0.3)} />
      </linearGradient>
      <radialGradient id={g1 + "b"} cx=".5" cy=".5" r=".5">
        <stop offset="0" stopColor={W} stopOpacity=".55" />
        <stop offset="1" stopColor={W} stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* wings drawn as motion blur, since a hovering hummingbird has no wings
        the eye can resolve - about 50 beats a second */}
    <ellipse cx="20" cy="26" rx="15" ry="8" fill={`url(#${g1}b)`} transform="rotate(-24 20 26)" />
    <ellipse cx="44" cy="26" rx="15" ry="8" fill={`url(#${g1}b)`} transform="rotate(24 44 26)" />
    <g stroke={W} strokeWidth=".8" fill="none" opacity=".55">
      <path d="M28,28 Q18,20 8,22" /><path d="M28,30 Q18,28 9,32" />
      <path d="M36,28 Q46,20 56,22" /><path d="M36,30 Q46,28 55,32" />
    </g>
    {/* forked tail */}
    <path d="M26,38 Q20,46 16,54 L21,52 L24,44 Z" fill={sh(B, -0.24)} />
    <path d="M30,39 Q28,48 27,56 L31,52 L32,42 Z" fill={sh(B, -0.16)} />
    {/* tiny feet, tucked up - they perch but barely walk */}
    <g stroke={sh(B, -0.5)} strokeWidth="1" fill="none" strokeLinecap="round">
      <path d="M30,42 L28.6,45" /><path d="M34,42 L35.4,45" />
    </g>
    {/* compact body */}
    <ellipse cx="33" cy="33" rx="9" ry="10.4" fill={`url(#${g1})`} transform="rotate(-14 33 33)" />
    {o.gorget && (
      <path d="M38,28 Q45,29 45.6,34 Q41,37 37,34 Z" fill={o.gorgetC || "#c93a5a"} />
    )}
    {o.belly && <ellipse cx="31" cy="38" rx="5.4" ry="4.4" fill={o.belly} />}
    <ellipse cx="41" cy="24" rx="6.4" ry="6" fill={o.head || B} />
    {o.cap && <path d="M36,20 Q41,16.6 46,20.4 Q41,21.6 36.4,22.6 Z" fill={o.cap} />}
    {/* the needle bill, as long as the bird */}
    <path d="M46,22.4 L63,19.6 L46.4,25 Z" fill={o.beakC || "#26221c"} />
    <Eye x={43} y={22.6} r={1.7 * er} iris={o.iris || "#26221c"} />
  </g>
  );
};

// Birds in the shape the emoji get right: a plump rounded body that fills the
// frame, a big clear eye, bold simple masses, and feet that just peek out
// underneath. Long legs are the exception, not the rule - waders, ratites and
// the secretary bird opt in with longLegs. Everything else stands on stubs.
const birdA = (o) => (er) => {
  const B = o.body || "#8a7a5c";
  const W = o.wingC || sh(B, -0.22);
  const HD = o.head || B;
  const FT = o.beakC || "#e8a53a";
  const g1 = gid("bdc", B), g2 = gid("bdw", W);
  const LL = o.longLegs;
  // body sits higher when the bird is standing on stilts
  const by = LL ? 30 : 36;
  const hx = o.neck ? 46 : 47, hy = o.neck ? (LL ? 9 : 13) : (LL ? 16 : 21);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, -0.16)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, 0.28)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(W, 0.12)} /><stop offset="1" stopColor={sh(W, -0.22)} />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy="58" rx="15" ry="2.2" fill="#000" opacity=".14" />

    {o.fan && (
      <g>
        {[-32, -17, 0, 16, 31].map((d, i) => (
          <g key={i}>
            <path d={`M28,36 Q${28 + d * 0.7},${18 + Math.abs(d) * 0.18} ${28 + d},${9 + Math.abs(d) * 0.26}`}
              stroke={o.fanC || "#3a7ad9"} strokeWidth="2.6" fill="none" strokeLinecap="round" />
            <circle cx={28 + d} cy={9 + Math.abs(d) * 0.26} r="3.2" fill={o.eyeSpot || "#e8c547"} />
          </g>
        ))}
      </g>
    )}

    {/* tail: short and blunt unless the species streams one */}
    {o.longTail ? (
      <path d={`M18,${by + 4} Q7,${by + 15} 2,${by + 26} L8,${by + 27} Q16,${by + 15} 24,${by + 7} Z`}
        fill={o.tailC || `url(#${g2})`} />
    ) : (
      <path d={`M17,${by} Q7,${by + 3} 4,${by + 9} Q12,${by + 9} 19,${by + 5} Z`}
        fill={o.tailC || `url(#${g2})`} />
    )}

    {/* LEGS. Short stubs by default - most birds barely show any leg at all,
        and the previous version put every sparrow on heron stilts. */}
    {LL ? (
      <g>
        <g stroke={FT} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points={`26,${by + 12} 25.4,${by + 19} 26.4,${by + 26}`} />
          <polyline points={`33,${by + 12} 33.6,${by + 19} 32.6,${by + 26}`} />
        </g>
        <g stroke={FT} strokeWidth="1.3" fill="none" strokeLinecap="round">
          <path d={`M26.4,${by + 26} L23.4,${by + 27.4} M26.4,${by + 26} L27,${by + 28} M26.4,${by + 26} L29.4,${by + 27.4}`} />
          <path d={`M32.6,${by + 26} L29.6,${by + 27.4} M32.6,${by + 26} L33.2,${by + 28} M32.6,${by + 26} L35.6,${by + 27.4}`} />
        </g>
      </g>
    ) : (
      <g>
        <g stroke={FT} strokeWidth="2.4" fill="none" strokeLinecap="round">
          <path d={`M26,${by + 11} L25.6,${by + 15}`} />
          <path d={`M33,${by + 11} L33.4,${by + 15}`} />
        </g>
        <g stroke={FT} strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d={`M25.6,${by + 15} L22.6,${by + 16.4} M25.6,${by + 15} L26.2,${by + 17} M25.6,${by + 15} L28.4,${by + 16.4}`} />
          <path d={`M33.4,${by + 15} L30.4,${by + 16.4} M33.4,${by + 15} L34,${by + 17} M33.4,${by + 15} L36.4,${by + 16.4}`} />
        </g>
      </g>
    )}

    {/* the body: round and full, the way the emoji draw it */}
    <ellipse cx="29" cy={by} rx="14.6" ry="12.4" fill={`url(#${g1})`} />
    {o.bib && <path d={`M33,${by + 6} Q40,${by + 8} 41.6,${by + 1} Q39.6,${by + 10} 32.6,${by + 10.4} Z`} fill={o.bib} />}
    {o.downy && (
      <g stroke={sh(B, 0.42)} strokeWidth=".8" fill="none" opacity=".65">
        <path d={`M21,${by - 4} q3.4,2.2 6.6,0 M20,${by + 3} q3.4,2.2 6.6,0 M24,${by + 9} q3.4,1.8 6.6,0`} />
      </g>
    )}

    {/* one bold folded wing, not a fan of feather lines */}
    <path d={`M19,${by - 5} Q31,${by - 9} 39,${by - 1} Q35,${by + 8} 24,${by + 8} Q16,${by + 4} 19,${by - 5} Z`}
      fill={`url(#${g2})`} />
    <path d={`M22,${by - 2} Q30,${by - 3} 36,${by + 1}`} stroke={sh(W, -0.32)} strokeWidth="1"
      fill="none" opacity=".65" strokeLinecap="round" />

    {/* neck */}
    {o.neck ? (
      <path d={`M36,${by - 4} Q42,${by - 12} 41,${by - 20} Q40.6,${by - 27} ${hx},${hy + 4} L${hx + 5},${hy + 6} Q${hx - 1},${by - 24} ${hx + 1},${by - 18} Q43,${by - 9} 40,${by} Z`}
        fill={o.neckC || `url(#${g1})`} />
    ) : (
      <path d={`M36,${by - 6} Q41,${by - 11} ${hx - 2},${hy + 5} L${hx + 4},${hy + 8} Q42,${by - 6} 40,${by - 1} Z`}
        fill={o.neckC || `url(#${g1})`} />
    )}

    {o.plume && (
      <g fill={o.plumeC || "#e8c547"}>
        <path d={`M${hx - 3},${hy - 7} Q${hx - 5},${hy - 17} ${hx + 1},${hy - 12} Q${hx - 2},${hy - 10} ${hx - 1.4},${hy - 6} Z`} />
        <path d={`M${hx + 1},${hy - 8} Q${hx + 1},${hy - 18} ${hx + 6},${hy - 13} Q${hx + 2.6},${hy - 11} ${hx + 3},${hy - 7} Z`} />
      </g>
    )}
    {o.comb && (
      <path d={`M${hx - 4},${hy - 6} q2,-4 4,-1 q2,-4 4,-1 q2,-3 3.4,.6 q-5.6,-.6 -11.4,1.4 Z`}
        fill={o.combC || "#c93a3a"} />
    )}

    {/* head: big and round, the emoji proportion */}
    <ellipse cx={hx} cy={hy} rx="8.2" ry="7.4" fill={HD} />
    {o.mask && <path d={`M${hx - 6},${hy - 3} Q${hx},${hy - 6} ${hx + 6},${hy - 2} Q${hx},${hy} ${hx - 5.6},${hy + 1} Z`} fill={o.mask} />}
    {o.pouch && <path d={`M${hx - 1},${hy + 5} Q${hx - 3},${hy + 14} ${hx + 4},${hy + 16} Q${hx + 8},${hy + 9} ${hx + 6},${hy + 4} Z`} fill={o.pouchC || "#e8b03a"} />}

    {/* beak, forward-facing, sized like the emoji do it */}
    {(() => {
      const C = FT;
      if (o.bill === "big")
        return <path d={`M${hx + 5},${hy - 3} Q${hx + 22},${hy} ${hx + 14},${hy + 8} Q${hx + 6},${hy + 7} ${hx + 4},${hy + 2} Z`} fill={C} />;
      if (o.bill === "long")
        return <path d={`M${hx + 6},${hy - 1.4} L${hx + 24},${hy + 2} L${hx + 6},${hy + 3.6} Z`} fill={C} />;
      if (o.bill === "spoon")
        return <g fill={C}><path d={`M${hx + 6},${hy - 1} L${hx + 17},${hy + 1} L${hx + 6},${hy + 3} Z`} /><ellipse cx={hx + 19} cy={hy + 1} rx="4.4" ry="3.2" /></g>;
      if (o.bill === "shoe")
        return <path d={`M${hx + 5},${hy - 4} Q${hx + 16},${hy - 2} ${hx + 15},${hy + 5} Q${hx + 8},${hy + 9} ${hx + 4},${hy + 3} Z`} fill={o.beakC || "#c9b08a"} />;
      if (o.bill === "hook")
        return <path d={`M${hx + 5},${hy - 3} Q${hx + 13},${hy - 2} ${hx + 13},${hy + 2} Q${hx + 12},${hy + 7} ${hx + 9},${hy + 4} Q${hx + 9},${hy + 1} ${hx + 4},${hy + 1.6} Z`} fill={C} />;
      if (o.bill === "flat")
        return <path d={`M${hx + 5},${hy - 2} Q${hx + 16},${hy - 1} ${hx + 16},${hy + 2.6} Q${hx + 10},${hy + 4.4} ${hx + 5},${hy + 3} Z`} fill={C} />;
      return <path d={`M${hx + 5},${hy - 2.2} L${hx + 15},${hy + 1} L${hx + 5},${hy + 4} Z`} fill={C} />;
    })()}
    {o.wattleC && (
      <path d={`M${hx + 4},${hy + 4} Q${hx + 6},${hy + 11} ${hx + 2},${hy + 12} Q${hx},${hy + 7} ${hx + 1},${hy + 3} Z`} fill={o.wattleC} />
    )}
    <Eye x={hx + 2.4} y={hy - 1.6} r={2.4 * er} iris={o.iris || "#3c3226"} />
  </g>
  );
};
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
const lizA = (o) => (er) => {
  const H = o.hide || o.skin || "#6b8a4a";
  const B = o.belly || sh(H, 0.4);
  const mark = o.markC || sh(H, -0.44);
  const g1 = gid("lzc", H), g2 = gid("lzl", H);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.26)} /><stop offset=".55" stopColor={H} />
        <stop offset="1" stopColor={B} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.16)} /><stop offset="1" stopColor={sh(H, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="49.6" rx="20" ry="2.2" fill="#000" opacity=".14" />
    {/* long tapering tail, longer than the animal */}
    <path d="M16,38 Q7,39 2,45" stroke={sh(H, -0.1)} strokeWidth="3.4" fill="none" strokeLinecap="round" />
    <path d="M8,41.6 Q4.6,43.4 2,46" stroke={sh(H, -0.26)} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* sprawled far limbs - lizards hold their legs out sideways, not under */}
    <g stroke={`url(#${g2})`} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".7">
      <polyline points="38,38 42,42 40,45.6" /><polyline points="23,37 19,41 21,45" />
    </g>
    <path d="M42,31 Q48,33 47.8,37.4 Q47.6,42 42,44 Q31,46.4 22,44
             Q15,41.6 15,37 Q15,32.4 22,30.4 Q32,28 42,31 Z" fill={`url(#${g1})`} />
    {o.spots && (
      <g fill={mark} opacity=".8">
        <circle cx="24" cy="34.6" r="1.2" /><circle cx="30" cy="33.4" r="1.15" />
        <circle cx="36" cy="34" r="1.1" /><circle cx="27" cy="40" r="1.1" />
        <circle cx="33.4" cy="40.4" r="1.05" /><circle cx="40" cy="38" r="1" />
      </g>
    )}
    {o.spikes && (
      <g fill={o.spikeC || sh(H, -0.5)}>
        <path d="M20,30.4 L21.4,26.6 L23,30 Z" /><path d="M27,29 L28.4,25 L30,28.6 Z" />
        <path d="M34,29.2 L35.4,25.4 L37,29 Z" /><path d="M41,31 L42.4,27.6 L43.6,31.4 Z" />
      </g>
    )}
    {/* near limbs, splayed wide with toes */}
    <g stroke={`url(#${g2})`} strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="41,38.6 45.6,43 43.4,47" /><polyline points="20,37.6 15.6,42 18,46.4" />
    </g>
    <g stroke={sh(H, -0.3)} strokeWidth=".8" fill="none" strokeLinecap="round">
      <path d="M43.4,47 L46,48.6 M43.4,47 L44,49.6 M43.4,47 L41.4,49" />
      <path d="M18,46.4 L15.4,48 M18,46.4 L17.4,49 M18,46.4 L20,48.6" />
    </g>
    {/* head, low and wedge-shaped */}
    <path d="M45,31.6 Q52,28.6 58,30.6 Q62,32.4 61.6,35.6 Q60.6,38.6 55,39
             Q48,39 45.6,36 Z" fill={H} />
    {o.crest && (
      <path d="M47,29.6 Q52,23.6 58,26.6 Q53,28 49.6,31.6 Z" fill={o.crestC || sh(H, -0.3)} />
    )}
    <path d="M57.6,35 Q61.6,35 61.8,36.4 Q60.4,38.4 56.6,38.4 Z" fill={sh(H, -0.28)} />
    <Eye x={52.4} y={32.8} r={1.7 * er} iris={o.iris || "#c9a43a"} />
    <path d="M61.8,36.4 Q64,36.6 65.4,35.4" stroke="#c94a3a" strokeWidth=".7" fill="none" strokeLinecap="round" />
  </g>
  );
};
const snakeA = (o) => (er) => {
  const H = o.hide || "#7a8a4a";
  const mark = o.markC || sh(H, -0.4);
  const g1 = gid("snc", H);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={sh(H, 0.2)} /><stop offset=".5" stopColor={H} />
        <stop offset="1" stopColor={sh(H, -0.3)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="55.6" rx="18" ry="2.2" fill="#000" opacity=".14" />
    {/* a coiled body, which is what a snake actually is */}
    <path d="M14,52 Q30,56 40,48 Q48,41 38,35 Q28,30 34,23"
      stroke={`url(#${g1})`} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14,52 Q30,56 40,48 Q48,41 38,35 Q28,30 34,23"
      stroke={sh(H, 0.4)} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity=".3" />
    {o.diamond && (
      <g fill={mark} opacity=".85">
        <path d="M22,52.4 l3,-2.4 l3,2.4 l-3,2.4 Z" />
        <path d="M33,51 l3,-2.4 l3,2.4 l-3,2.4 Z" />
        <path d="M42,43 l2.6,-2.4 l2.6,2.4 l-2.6,2.4 Z" />
        <path d="M36,32 l2.6,-2.4 l2.6,2.4 l-2.6,2.4 Z" />
      </g>
    )}
    {o.bands && (
      <g stroke={mark} strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M20,52.6 L21,55.6" /><path d="M30,54 L30,50.6" />
        <path d="M41,45.6 L44,46.6" /><path d="M37,33 L34,32" />
      </g>
    )}
    {o.rattle && (
      <g fill={sh(H, -0.36)}>
        <ellipse cx="12" cy="52" rx="2" ry="2.4" /><ellipse cx="9.4" cy="53" rx="1.7" ry="2" />
        <ellipse cx="7.2" cy="53.8" rx="1.4" ry="1.7" />
      </g>
    )}
    {/* hood, for the cobras */}
    {o.hood && (
      <g>
        <path d="M27,24 Q20,18 25,11 Q32,6 40,9 Q46,13 43,20 Q38,25 33,25 Z"
          fill={o.hoodC || sh(H, -0.16)} />
        {o.hoodMark && (
          <g fill={mark} opacity=".8">
            <circle cx="30" cy="14" r="2.2" /><circle cx="38" cy="13.4" r="2.2" />
            <path d="M30,17.4 Q34,20 38,17" stroke={mark} strokeWidth="1.4" fill="none" />
          </g>
        )}
      </g>
    )}
    {/* head */}
    <path d="M33,20.6 Q40,17.6 46.6,20 Q50.6,22 50.2,25.4 Q49,28.6 43,29
             Q35.6,29 33.4,25.6 Z" fill={H} />
    {o.pits && (
      <g fill={sh(H, -0.5)}>
        <circle cx="46" cy="25.6" r=".8" /><circle cx="48.4" cy="24.6" r=".7" />
      </g>
    )}
    <Eye x={41} y={22.6} r={1.7 * er} iris={o.iris || "#c9a43a"} />
    <path d="M50.2,25.4 Q54,25.4 56.4,23.6 M54.6,24.6 L57,26.4" stroke="#c94a3a" strokeWidth=".8"
      fill="none" strokeLinecap="round" />
  </g>
  );
};
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
  // The penguin was hand-drawn and head-only. Penguins face forward and stand
  // upright, so it goes through the dedicated penguin build.
  penguin: pengA({ body: "#2e3138", front: "#f4efe4", beakC: "#c9762e", footC: "#e8913a",
    face: "#f4efe4", iris: "#26221c" }),
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
  snowyowl: owlA({ body: "#f5f2e8", wingC: "#e8e4d8", disc: true, discC: "#f8f4ea", beakC: "#3c3630", iris: "#e8c547" }),
  barnowl: owlA({ body: "#c9b894", wingC: "#a89878", disc: true, discC: "#f5f2e8", beakC: "#c9bda3", iris: "#26221c" }),
  greathornedowl: owlA({ body: "#8a7458", wingC: "#5c4c3c", tufts: true, disc: true, discC: "#c9a878", beakC: "#3c3630", iris: "#e8a53a" }),
  condor: rapA({ body: "#26221c", wingC: "#16140f", head: "#e8b5a5", ruff: true, ruffC: "#f5f2e8", beakC: "#c9bda3", wattle: true, wattleC: "#c94a3a" }),
  secretarybird: rapA({ longLegs: true, body: "#a8a8a0", wingC: "#26221c", head: "#e8dcc3", plumes: true, plumeC: "#26221c", beakC: "#e8a53a", iris: "#c9853a" }),
  caracara: rapA({ body: "#3c3630", wingC: "#26221c", head: "#e8dcc3", beakC: "#8fb3d9", wattle: true, wattleC: "#e8853a" }),
  goshawk: rapA({ body: "#5c6b74", wingC: "#3c4c54", head: "#4c5c68", brow: true, browC: "#f2ede0", beakC: "#3c3630", iris: "#c94a3a" }),
  // other birds
  toucan: birdA({ body: "#26221c", wingC: "#16140f", bib: "#e8d44a", bill: "big", beakC: "#e8853a", iris: "#8fd9e8" }),
  kingfisher: songA({ body: "#3a7ad9", wingC: "#2a5ca8", head: "#3a5cd9", bib: "#e8853a", bill: "long", beakC: "#26221c" }),
  peacock: fowlA({ body: "#3a5cd9", wingC: "#2a7a8a", head: "#3a5cd9", fan: true, fanC: "#3a8a6b", eyeSpot: "#e8c547", plume: true, plumeC: "#3a5cd9", beakC: "#c9bda3" }),
  quetzal: songA({ body: "#3ad9a4", wingC: "#2ab585", bib: "#c94a3a", plume: true, plumeC: "#3ad9a4", longTail: true, tailC: "#3ad9a4", beakC: "#e8c547" }),
  birdofparadise: songA({ body: "#e8853a", wingC: "#c9622a", head: "#e8d44a", bib: "#3a8a4c", longTail: true, tailC: "#f2ede0", beakC: "#8fd9e8" }),
  lyrebird: songA({ body: "#8a7458", wingC: "#5c4c3c", longTail: true, tailC: "#c9b894", beakC: "#3c3630" }),
  hummingbird: hummA({ body: "#3ad9a4", wingC: "#2ab585", head: "#c94a3a", bill: "long", beakC: "#26221c" }),
  crane: birdA({ longLegs: true, body: "#e8e4d8", wingC: "#c4c0b0", head: "#f5f2e8", neck: true, neckC: "#e8e4d8", mask: "#c94a3a", bill: "long", beakC: "#c9bda3" }),
  heron: birdA({ longLegs: true, body: "#8a9aa8", wingC: "#6b7a88", head: "#c9d4dc", neck: true, neckC: "#8a9aa8", plumes: true, bill: "long", beakC: "#e8c547" }),
  stork: birdA({ longLegs: true, body: "#f2ede0", wingC: "#26221c", neck: true, neckC: "#f2ede0", bill: "long", beakC: "#c94a3a" }),
  shoebill: birdA({ longLegs: true, body: "#8a9099", wingC: "#6b7078", head: "#9aa0a8", bill: "shoe", beakC: "#c9b08a", iris: "#e8e4d8" }),
  pelican: birdA({ body: "#e8e4d8", wingC: "#c4c0b0", pouch: true, pouchC: "#e8b03a", bill: "long", beakC: "#e8c547" }),
  spoonbill: birdA({ longLegs: true, body: "#e8a5b5", wingC: "#d9859a", bill: "spoon", beakC: "#8a8578" }),
  ibis: birdA({ longLegs: true, body: "#c94a3a", wingC: "#a33428", neck: true, neckC: "#c94a3a", bill: "long", beakC: "#8a3428" }),
  albatross: birdA({ body: "#f2ede0", wingC: "#5c6b74", bill: "hook", beakC: "#e8c9a5" }),
  puffin: birdA({ body: "#26221c", wingC: "#16140f", head: "#f5f2e8", bib: "#f5f2e8", bill: "big", beakC: "#e8853a", iris: "#3c3226" }),
  frigatebird: birdA({ body: "#26221c", wingC: "#16140f", pouch: true, pouchC: "#c94a3a", bill: "hook", beakC: "#5c5448" }),
  bluefootedbooby: birdA({ body: "#c9b894", wingC: "#8a7458", head: "#e8dcc3", bill: "long", beakC: "#8fb3d9", iris: "#e8d44a" }),
  ostrich: birdA({ longLegs: true, body: "#3c3630", wingC: "#f5f2e8", head: "#e8b5a5", neck: true, neckC: "#e8b5a5", beakC: "#e8b03a", iris: "#3c3226" }),
  emu: birdA({ longLegs: true, body: "#6b5c4c", wingC: "#5c4c3c", head: "#3c4c5c", neck: true, neckC: "#5c6b7a", beakC: "#3c3630" }),
  cassowary: birdA({ longLegs: true, body: "#26221c", wingC: "#16140f", head: "#3a5cd9", neck: true, neckC: "#3a5cd9", plume: true, plumeC: "#8a6f42", bib: "#c94a3a", beakC: "#5c5448" }),
  kiwi: birdA({ body: "#8a7458", wingC: "#6b5844", bill: "long", beakC: "#c9b08a", iris: "#26221c" }),
  roadrunner: birdA({ longLegs: true, body: "#a8987a", wingC: "#8a7458", head: "#8a7458", plume: true, plumeC: "#5c4c3c", longTail: true, tailC: "#8a7458", beakC: "#3c3630" }),
  hoatzin: songA({ body: "#8a6f52", wingC: "#5c4436", head: "#3a7ad9", plume: true, plumeC: "#c9853a", bib: "#c9853a", beakC: "#3c3630", iris: "#c94a3a" }),
  kookaburra: songA({ body: "#c9b894", wingC: "#3a5cd9", head: "#e8dcc3", mask: "#5c4c3c", bill: "long", beakC: "#3c3630" }),
  potoo: songA({ body: "#8a7a68", wingC: "#6b5c4c", mask: "#5c4c3c", beakC: "#5c4c3c", iris: "#e8c547" }),
  mandarinduck: waterA({ body: "#e8853a", wingC: "#3a5cd9", head: "#3a8a6b", plume: true, plumeC: "#c94a3a", bib: "#f2ede0", beakC: "#c94a3a" }),
  swan: waterA({ body: "#f8f4ea", wingC: "#e8e4d8", neck: true, neckC: "#f8f4ea", beakC: "#e8853a", mask: "#26221c" }),
  loon: waterA({ body: "#26221c", wingC: "#3c3630", bib: "#f5f2e8", neck: true, neckC: "#26221c", bill: "long", beakC: "#26221c", iris: "#c94a3a" }),
  emperorpenguin: pengA({ body: "#3c4c54", wingC: "#26343c", head: "#26221c", bib: "#e8d44a", bill: "long", beakC: "#e8853a" }),
  woodpecker: songA({ body: "#26221c", wingC: "#f5f2e8", head: "#c94a3a", plume: true, plumeC: "#c94a3a", bill: "long", beakC: "#5c5448" }),
  raven: songA({ body: "#26292e", wingC: "#16181c", head: "#26292e", bill: "hook", beakC: "#16140f", iris: "#3c3226" }),
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


// ---------- bespoke birds folded into the shared bird archetypes ----------
// These six predated the archetype system and were still hand-drawn heads.
// They live here rather than in part2 because the bird archetypes they call
// are defined in this file, and part2 loads first.
Object.assign(ART, {
  // Was a hand-drawn head. A flamingo is a wading bird - long legs, long neck,
  // and the down-kinked bill that lets it filter-feed upside down.
  flamingo: birdA({ body: "#e88aa8", head: "#f2a8c0", wingC: "#d96f92", beakC: "#3c3630",
    bill: "hook", neck: true, longLegs: true, iris: "#e8dcc3" }),
  // Owls go through the raptor build, which carries the facial disc and tufts.
  owl: owlA({ body: "#8a7458", head: "#a89078", wingC: "#6b5a44", beakC: "#3c3630",
    disc: true, discC: "#c9b494", tufts: true, iris: "#e8c547" }),
  vulture: rapA({ body: "#4a423a", head: "#c9a8a0", wingC: "#3a332c", beakC: "#c9b08a",
    hood: true, wattle: true, wattleC: "#b5645a", iris: "#3c3226" }),
  hornbill: birdA({ body: "#2e2a26", head: "#f2ede0", wingC: "#4a443c", beakC: "#e8c547",
    bill: "big", bib: "#f2ede0", iris: "#c94a3a" }),
  kestrel: rapA({ body: "#c98a4a", head: "#8a9ab5", wingC: "#a86f34", beakC: "#e8b03a",
    mottle: true, markC: "#5c4432", iris: "#3c3226" }),
  lovebird: parrA({ body: "#5da84a", head: "#e8734a", wingC: "#4a8a3a", beakC: "#e8a53a",
    cheek: true, cheekC: "#e8c547", iris: "#e8dcc3" }),
});
