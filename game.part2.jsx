// ---------- SPRITE ART (flat vector, original) ----------
const Eye = ({ x, y, r = 3, iris, lid }) => (
  <g>
    {iris && <circle cx={x} cy={y} r={r * 1.3} fill={iris} />}
    <circle cx={x} cy={y} r={r} fill="#1e1611" />
    <circle cx={x - r * 0.33} cy={y - r * 0.4} r={r * 0.32} fill="#fff" />
    {lid && <path d={`M${x - r * 1.4},${y - r * 0.9} Q${x},${y - r * 1.8} ${x + r * 1.4},${y - r * 0.9}`} stroke={lid} strokeWidth={r * 0.9} fill="none" strokeLinecap="round" />}
  </g>
);

// Parametric feline head
// ---------- shared drawing helpers ----------
// Lighten (amt > 0) or darken (amt < 0) a hex colour. Used to build coat
// gradients from a single fur colour, so every species still only declares one.
const sh = (hex, amt) => {
  const h = (hex || "#8a7f68").replace("#", "");
  const f = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(f, 16);
  if (isNaN(n)) return hex;
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) =>
    Math.max(0, Math.min(255, Math.round(amt > 0 ? v + (255 - v) * amt : v * (1 + amt)))));
  return "#" + ch.map((v) => v.toString(16).padStart(2, "0")).join("");
};
// Gradient ids must be unique per colour, or every sprite on the page inherits
// whichever one rendered first. Deriving the id from the fur colour means two
// animals with the same coat correctly share a definition and no others collide.
const gid = (pre, hex) => pre + (hex || "x").replace("#", "");

const felArt = (o) => (er) => {
  const F = o.fur || "#c9a06a";
  const spine = sh(F, -0.26), belly = sh(F, 0.42), limb = sh(F, -0.1);
  const mark = o.markC || sh(F, -0.62);
  const g1 = gid("fc", F), g2 = gid("fl", F);
  const s = o.big ? 1.06 : 1;
  return (
  <g transform={o.big ? "translate(-1.8,-1.8) scale(1.06)" : undefined}>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={spine} /><stop offset=".52" stopColor={F} />
        <stop offset="1" stopColor={belly} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.18)} /><stop offset="1" stopColor={sh(F, 0.16)} />
      </linearGradient>
    </defs>

    {/* ground shadow anchors the animal instead of leaving it floating */}
    <ellipse cx="33" cy="57.4" rx="20" ry="2.4" fill="#000" opacity=".15" />

    {/* tail */}
    <path d="M17.5,32.5 Q7.6,29.6 4.4,21.6 Q3.3,15.8 8,13.4" stroke={limb} strokeWidth="2.9"
      fill="none" strokeLinecap="round" />
    {o.stripes && (
      <g stroke={mark} strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M12.4,30.4 L10.6,27.8 M7.4,25.6 L5.2,24.2 M5.4,19.6 L3.4,19" />
      </g>
    )}
    {(o.rosettes || o.spots) && (
      <g fill="none" stroke={mark} strokeWidth=".85" opacity=".85">
        <ellipse cx="10.6" cy="28.6" rx="1.35" ry="1" /><ellipse cx="6.2" cy="22.6" rx="1.2" ry=".9" />
      </g>
    )}

    {/* far pair of legs, jointed, held back by tone so they read as behind */}
    <g stroke={`url(#${g2})`} strokeWidth="3.1" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".72">
      <polyline points="40,36.5 38.2,44 40.8,50.2 40.8,55" />
      <polyline points="24.5,33.5 28,42 22.4,48 24,55" />
    </g>

    {/* torso with a tucked waist */}
    <path d="M45.5,26 Q51,28.4 51.4,33.4 Q51.4,39.2 47,42.4 L38,44 Q28.6,46.2 22.4,44
             Q16.4,41.8 15.8,35.4 Q15.4,29 21,26.2 Q33,22.4 45.5,26 Z" fill={`url(#${g1})`} />
    {/* pale underside */}
    <path d="M22.4,44 Q28.6,46.2 38,44 L47,42.4 Q44,45.2 38,46.1 Q28.6,47.6 22.4,44 Z"
      fill={sh(F, 0.55)} />

    {/* markings ride on the flank, not the face */}
    {o.stripes && (
      <g stroke={mark} strokeWidth="1.9" strokeLinecap="round" fill="none" opacity=".92">
        <path d="M25.6,27.4 Q26.4,34 25.2,41.6 M31.4,25.8 Q32.2,33 31,42.4
                 M37.2,26 Q38,33.2 36.8,42.2 M43,27.4 Q43.6,33.6 42.6,40.6" />
      </g>
    )}
    {o.rosettes && (
      <g fill="none" stroke={mark} strokeWidth="1" opacity=".92">
        <path d="M23.5,32.6 q1.4,-1.9 2.9,-.4 q1.25,1.45 -.4,2.5 q-1.95,.95 -2.5,-.85 Z" />
        <path d="M30.7,30.9 q1.45,-2 3,-.4 q1.25,1.5 -.5,2.6 q-1.95,.95 -2.5,-.95 Z" />
        <path d="M37.7,31.3 q1.35,-1.9 2.9,-.4 q1.15,1.45 -.5,2.5 q-1.85,.95 -2.4,-.85 Z" />
        <path d="M43.6,33.3 q1.15,-1.6 2.4,-.3 q.95,1.25 -.4,2.1 q-1.55,.75 -2,-.75 Z" />
        <path d="M26.7,38.4 q1.25,-1.8 2.7,-.4 q1.15,1.35 -.4,2.3 q-1.75,.85 -2.3,-.85 Z" />
        <path d="M34.3,38.2 q1.25,-1.8 2.7,-.4 q1.15,1.35 -.4,2.3 q-1.75,.85 -2.3,-.85 Z" />
        <path d="M41,37.7 q1.05,-1.55 2.3,-.3 q.95,1.15 -.4,2 q-1.45,.75 -1.9,-.75 Z" />
        <path d="M19.9,35.6 q1.15,-1.6 2.5,-.3 q1.05,1.25 -.4,2.1 q-1.65,.75 -2.1,-.75 Z" />
      </g>
    )}
    {o.spots && !o.rosettes && (
      <g fill={mark} opacity=".85">
        <circle cx="25" cy="32.6" r="1.15" /><circle cx="31.4" cy="31" r="1.15" />
        <circle cx="38" cy="31.4" r="1.1" /><circle cx="44" cy="33.4" r="1" />
        <circle cx="27.6" cy="38.6" r="1.05" /><circle cx="34.6" cy="38.4" r="1.05" />
        <circle cx="41.2" cy="37.8" r=".95" /><circle cx="20.6" cy="35.8" r="1" />
      </g>
    )}

    {/* haunch over the flank */}
    <ellipse cx="20.6" cy="33.4" rx="8" ry="7.4" fill={F} opacity=".55" />

    {/* near pair of legs */}
    <g stroke={`url(#${g2})`} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="43.8,35.4 42.3,43.6 45,49.8 45,55.6" />
      <polyline points="20.6,33.4 24.4,42.6 18.7,48.8 20.3,55.6" />
    </g>
    <g fill={sh(F, -0.3)} opacity=".55">
      <ellipse cx="45" cy="55.8" rx="2.1" ry="1.1" /><ellipse cx="20.3" cy="55.8" rx="2.1" ry="1.1" />
      <ellipse cx="40.8" cy="55.2" rx="1.8" ry="1" /><ellipse cx="24" cy="55.2" rx="1.8" ry="1" />
    </g>

    {/* neck ruff for the maned and long-haired cats */}
    {o.ruff && (
      <g fill={o.ruffC || sh(F, -0.2)}>
        <path d="M46.4,20.4 Q41.6,25 43.4,31.6 Q45.6,36 50.6,35.4 Q45.4,32 45,27 Q44.8,23 46.4,20.4 Z" />
        <path d="M57.4,19.8 Q61.6,23.4 60.8,29 Q60,33.2 56,34.4 Q59.6,30.6 59.4,26.6 Q59.2,22.6 57.4,19.8 Z" />
      </g>
    )}

    {/* ears: far one behind and darker, near one sitting on the skull */}
    {o.earTall ? (
      <g>
        <path d="M46.6,20.4 Q45.2,11.6 44.2,9.6 Q48.6,12.4 51,17.4 Z" fill={sh(F, -0.22)} />
        <path d="M56.4,19.4 Q57.8,10.4 59.2,8.6 Q60.6,13.8 60.2,19.4 Z" fill={F} />
        <path d="M57.2,18.6 Q58.2,12.4 59.2,11 Q59.8,15 59.4,18.8 Z" fill={o.inner || "#7d5b3a"} />
      </g>
    ) : (
      <g>
        <path d="M46.5,20.6 Q45.4,14.6 44.6,13.4 Q48.4,15 50.8,17.8 Z" fill={sh(F, -0.22)} />
        <path d="M56.6,19.6 Q57.6,13.8 58.6,12.8 Q59.8,16.4 59.6,19.6 Z" fill={F} />
        <path d="M57.2,18.9 Q57.9,14.8 58.6,14.1 Q59.3,17 59.2,19 Z" fill={o.inner || "#7d5b3a"} />
      </g>
    )}
    {o.tufts && (
      <g stroke={sh(F, -0.6)} strokeWidth="1.2" strokeLinecap="round">
        <path d="M45.2,12.4 L43.4,6.6" /><path d="M58.2,11.6 L59.8,5.8" />
      </g>
    )}

    {/* head */}
    <ellipse cx="52" cy="25.2" rx="8.2" ry="6.9" fill={F} />
    <path d="M52,18.4 Q57,18.8 59.4,21.8 Q55.6,20.3 52,20.5 Z" fill={sh(F, -0.2)} opacity=".55" />
    {o.stripes && (
      <g stroke={mark} strokeWidth="1.15" strokeLinecap="round" fill="none" opacity=".9">
        <path d="M48.6,19.6 q1.6,1.5 3.2,.7" /><path d="M50.6,18.5 q.4,1.6 .1,2.6" />
        <path d="M46.6,23.4 q1.5,1.1 2.7,.6" />
      </g>
    )}

    {/* muzzle: seated inside the skull, only its front edge proud, so the
        snout reads as projecting rather than falling off the face */}
    <ellipse cx="55.6" cy="27.2" rx="4.4" ry="2.9" fill={o.muzzle || sh(F, 0.5)} />
    {o.tear && (
      <g stroke={sh(F, -0.66)} strokeWidth="1.1" fill="none" strokeLinecap="round">
        <path d="M53,23.6 Q52.4,26.4 53.4,29.2" /><path d="M55.4,23.4 Q55.4,26.2 56.2,28.6" />
      </g>
    )}
    <path d="M57.9,25.6 Q59.8,25.7 59.9,26.9 Q59.7,28 58.6,28 Q57.6,27.7 57.9,25.6 Z"
      fill={sh(F, -0.68)} />
    <path d="M58.7,28 L58.6,29.2 M58.6,29.2 Q57.4,30.2 56.4,29.6 M58.6,29.2 Q59.7,30.1 60.5,29.5"
      stroke={sh(F, -0.68)} strokeWidth=".7" fill="none" strokeLinecap="round" />

    <Eye x={53.3} y={22.1} r={2.15 * er} iris={o.iris || "#caa23a"} />
    <path d="M51.1,20.5 Q53.3,19.7 55.3,20.5" stroke={sh(F, -0.6)} strokeWidth=".7" fill="none"
      strokeLinecap="round" />

    {/* whiskers */}
    <g stroke={sh(F, -0.45)} strokeWidth=".45" fill="none" opacity=".6" strokeLinecap="round">
      <path d="M57.2,26.9 Q60.2,25.7 62.2,25.1" />
      <path d="M57.4,28 Q60.4,27.9 62.4,27.7" />
      <path d="M57.2,28.8 Q59.8,29.6 61.5,30.4" />
    </g>
  </g>
  );
};

// Parametric canine head
const canArt = (o) => (er) => {
  const F = o.fur || "#9a7a52";
  const spine = sh(F, -0.26), belly = sh(F, 0.42), limb = sh(F, -0.1);
  const mark = o.markC || sh(F, -0.6);
  const g1 = gid("dc", F), g2 = gid("dl", F);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={spine} /><stop offset=".52" stopColor={F} />
        <stop offset="1" stopColor={belly} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.18)} /><stop offset="1" stopColor={sh(F, 0.16)} />
      </linearGradient>
    </defs>

    <ellipse cx="33" cy="57.4" rx="20" ry="2.4" fill="#000" opacity=".15" />

    {/* tail: canids carry it out and up rather than in a cat's long curl */}
    <path d="M17.2,32.8 Q9,30.4 5.2,24.2 Q3.4,19.6 6.6,16.2" stroke={limb} strokeWidth="3.6"
      fill="none" strokeLinecap="round" />
    <path d="M6.6,16.2 Q5.2,14.4 5.8,12.6" stroke={sh(F, 0.3)} strokeWidth="3" fill="none"
      strokeLinecap="round" />

    <g stroke={`url(#${g2})`} strokeWidth="3.1" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".72">
      <polyline points="40,36.5 38.4,44 41,50.2 41,55" />
      <polyline points="24.5,33.5 27.8,42 22.4,48 24,55" />
    </g>

    {/* deeper chest and a straighter back than the cat */}
    <path d="M46,25.4 Q51.4,28 51.8,33.2 Q51.8,39.4 47.2,42.6 L38,44.2
             Q28.4,46.4 22.2,44.2 Q16,42 15.6,35.2 Q15.2,28.6 21,26 Q33,22 46,25.4 Z"
      fill={`url(#${g1})`} />
    <path d="M22.2,44.2 Q28.4,46.4 38,44.2 L47.2,42.6 Q44,45.4 38,46.3 Q28.4,47.8 22.2,44.2 Z"
      fill={sh(F, 0.55)} />

    {/* saddle marking, the dark back many canids carry */}
    {o.line && (
      <path d="M24,27.6 Q33,24.4 45,27.2 Q44,32.4 38,33.6 Q30,34.8 23.6,32.4 Z"
        fill={mark} opacity=".5" />
    )}
    {o.spots && (
      <g fill={mark} opacity=".8">
        <circle cx="26" cy="32.4" r="1.5" /><circle cx="32.6" cy="30.8" r="1.4" />
        <circle cx="39.4" cy="31.6" r="1.3" /><circle cx="29.6" cy="38.6" r="1.25" />
        <circle cx="36.8" cy="38.2" r="1.2" /><circle cx="44" cy="34.6" r="1.1" />
      </g>
    )}

    <ellipse cx="20.6" cy="33.4" rx="8" ry="7.4" fill={F} opacity=".55" />

    <g stroke={`url(#${g2})`} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="44,35.2 42.6,43.6 45.2,49.8 45.2,55.6" />
      <polyline points="20.6,33.4 24.2,42.6 18.7,48.8 20.3,55.6" />
    </g>
    <g fill={sh(F, -0.3)} opacity=".55">
      <ellipse cx="45.2" cy="55.8" rx="2.1" ry="1.1" /><ellipse cx="20.3" cy="55.8" rx="2.1" ry="1.1" />
      <ellipse cx="41" cy="55.2" rx="1.8" ry="1" /><ellipse cx="24" cy="55.2" rx="1.8" ry="1" />
    </g>

    {/* ruff at the throat */}
    {o.crest && (
      <path d="M46.6,21 Q42.8,26 44.8,32 Q47,35.6 51.4,34.8 Q46.8,31.6 46.4,27 Q46.2,23.4 46.6,21 Z"
        fill={sh(F, 0.28)} />
    )}

    {/* ears */}
    {o.earRound ? (
      <g>
        <circle cx="47.4" cy="19.4" r="3.5" fill={sh(F, -0.24)} />
        <circle cx="57.4" cy="18.8" r="3.9" fill={F} />
        <circle cx="57.7" cy="19" r="2.1" fill={o.inner || "#7d5b3a"} />
      </g>
    ) : o.earDrop ? (
      <g>
        {/* folded drop ear, for the hounds */}
        <path d="M47.6,19 Q45,20.4 44.6,25 Q44.4,28.6 46.8,29.6 Q47.2,24.4 48.6,20.8 Z"
          fill={sh(F, -0.24)} />
        <path d="M57.2,18.4 Q60.6,19.6 61.2,24.4 Q61.6,28.4 59,29.6 Q58.8,24 57,20.4 Z" fill={F} />
        <path d="M58,19.6 Q60.4,20.8 60.8,24.6 Q61,27.6 59.2,28.4 Q59,24 57.8,21 Z"
          fill={o.inner || "#7d5b3a"} opacity=".55" />
      </g>
    ) : (
      <g>
        {/* upright pointed ear - the default for canids, and taller when asked */}
        <path d={o.earTall ? "M47,20.2 Q45.6,11.4 44.6,9.4 Q49,12.2 51.4,17.2 Z"
                           : "M47.2,20 Q46,13.4 45.2,11.8 Q49.2,14 51.2,17.8 Z"}
          fill={sh(F, -0.24)} />
        <path d={o.earTall ? "M56.6,19.2 Q58,10.2 59.4,8.4 Q60.8,13.6 60.4,19.2 Z"
                           : "M56.8,19.2 Q58,12.6 59.2,11 Q60.4,15.2 60.2,19.4 Z"}
          fill={F} />
        <path d={o.earTall ? "M57.4,18.4 Q58.4,12.2 59.4,10.8 Q60,14.8 59.6,18.6 Z"
                           : "M57.5,18.6 Q58.3,13.9 59.2,12.8 Q59.9,16.2 59.6,18.8 Z"}
          fill={o.inner || "#7d5b3a"} />
      </g>
    )}

    {/* head: a longer skull than the cat, and a real snout in front of it */}
    <ellipse cx="52.2" cy="25" rx="8" ry="6.6" fill={F} />
    {o.blaze && (
      <path d="M52.6,18.6 Q54.4,23 54.2,29.6 Q52.4,29.8 51.6,28.8 Q52.2,23 52.6,18.6 Z"
        fill={sh(F, 0.55)} opacity=".9" />
    )}
    {o.mask && (
      <path d="M50.6,21.6 Q56,20.8 59.4,23.6 Q60.2,27.4 57.8,29.4 Q53.6,29.6 51,27.4 Z"
        fill={mark} opacity=".45" />
    )}

    <ellipse cx="56.6" cy="27.6" rx="5.2" ry="2.9" fill={o.muzzle || sh(F, 0.42)} />
    <path d="M59.6,25.9 Q61.8,26 61.9,27.3 Q61.7,28.5 60.5,28.5 Q59.3,28.2 59.6,25.9 Z"
      fill={sh(F, -0.7)} />
    <path d="M60.6,28.5 L60.5,29.8 M60.5,29.8 Q59.2,30.9 58.1,30.2 M60.5,29.8 Q61.7,30.7 62.6,30"
      stroke={sh(F, -0.7)} strokeWidth=".7" fill="none" strokeLinecap="round" />

    <Eye x={53.4} y={22.2} r={2.05 * er} iris={o.iris || "#8a5c2a"} />
    <path d="M51.2,20.6 Q53.4,19.8 55.4,20.6" stroke={sh(F, -0.6)} strokeWidth=".7" fill="none"
      strokeLinecap="round" />
  </g>
  );
};

const ART = {
  // Also hand-drawn and head-only. It is a desert fox whose defining feature is
  // the size of its ears, so it goes through the canid body with earTall set.
  fennec: canArt({ fur: "#e8cfa3", inner: "#f2e2c0", muzzle: "#f8f2e4", iris: "#8a6b3a", earTall: true }),
  otter: (er) => (
    <g>
      <circle cx="19" cy="24" r="4.5" fill="#8b6748" /><circle cx="45" cy="24" r="4.5" fill="#8b6748" />
      <circle cx="19" cy="24" r="2" fill="#6e4f36" /><circle cx="45" cy="24" r="2" fill="#6e4f36" />
      <circle cx="32" cy="37" r="16" fill="#8b6748" />
      <ellipse cx="32" cy="44" rx="9.5" ry="7.5" fill="#d9c4a3" />
      <ellipse cx="32" cy="40.5" rx="3.2" ry="2.3" fill="#2e2018" />
      <path d="M32,43 L32,46 M32,46 Q29,48.5 26.5,47 M32,46 Q35,48.5 37.5,47" stroke="#6e4f36" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <Eye x={25} y={33} r={3 * er} /><Eye x={39} y={33} r={3 * er} />
    </g>
  ),
  hedgehog: (er) => (
    <g>
      <path d="M8,42 L14,20 L20,34 L26,13 L32,30 L38,11 L44,32 L50,17 L56,42 Z" fill="#5d4a36" />
      <path d="M13,42 L18,26 L23,36 L28,20 L32,33 L37,19 L42,36 L47,24 L51,42 Z" fill="#7a6249" />
      <ellipse cx="32" cy="45" rx="14" ry="10.5" fill="#e9d7b7" />
      <circle cx="32" cy="52" r="2.8" fill="#33261c" />
      <Eye x={26} y={43} r={2.8 * er} /><Eye x={38} y={43} r={2.8 * er} />
    </g>
  ),
  gecko: (er) => (
    <g>
      <path d="M12,42 Q12,22 32,20 Q52,22 52,42 Q52,52 32,52 Q12,52 12,42 Z" fill="#7cb342" />
      <circle cx="21" cy="31" r="6.2" fill="#e5c94e" stroke="#5d8f2c" strokeWidth="1.4" />
      <ellipse cx="21" cy="31" rx={1.6 * er} ry={4.2 * er} fill="#1e1611" />
      <circle cx="43" cy="31" r="6.2" fill="#e5c94e" stroke="#5d8f2c" strokeWidth="1.4" />
      <ellipse cx="43" cy="31" rx={1.6 * er} ry={4.2 * er} fill="#1e1611" />
      <path d="M24,45 Q32,49 40,45" stroke="#4c7a24" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="24" r="1.2" fill="#5d8f2c" /><circle cx="36" cy="26" r="1.2" fill="#5d8f2c" />
    </g>
  ),
  dartfrog: (er) => (
    <g>
      <circle cx="20" cy="26" r="6.5" fill="#3b8de0" /><circle cx="44" cy="26" r="6.5" fill="#3b8de0" />
      <path d="M12,46 Q12,25 32,23 Q52,25 52,46 Q52,50 46,50 L18,50 Q12,50 12,46 Z" fill="#3b8de0" />
      <ellipse cx="27" cy="38" rx="3.4" ry="2.2" fill="#101820" transform="rotate(-20 27 38)" />
      <ellipse cx="39" cy="42" rx="3" ry="2" fill="#101820" transform="rotate(15 39 42)" />
      <ellipse cx="32" cy="30" rx="2.4" ry="1.7" fill="#101820" />
      <path d="M20,45 Q32,49 44,45" stroke="#123047" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <Eye x={20} y={26} r={3.6 * er} /><Eye x={44} y={26} r={3.6 * er} />
    </g>
  ),
  tadpole: (er) => (
    <g>
      <path d="M34,34 Q50,24 56,33 Q51,43 34,37 Z" fill="#5a6b7d" />
      <path d="M38,31 Q49,26 53,33" stroke="#7d8ea0" strokeWidth="1.4" fill="none" />
      <circle cx="25" cy="34" r="11" fill="#4a5568" />
      <path d="M19,40 Q25,43 31,40" stroke="#2e3540" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <Eye x={21} y={31} r={2.4 * er} /><Eye x={29} y={31} r={2.4 * er} />
    </g>
  ),
  rabbit: (er) => (
    <g>
      <ellipse cx="24" cy="15" rx="5" ry="13" fill="#c8a976" transform="rotate(-9 24 15)" />
      <ellipse cx="24" cy="16" rx="2.4" ry="9" fill="#e0b9a4" transform="rotate(-9 24 16)" />
      <ellipse cx="40" cy="15" rx="5" ry="13" fill="#c8a976" transform="rotate(9 40 15)" />
      <ellipse cx="40" cy="16" rx="2.4" ry="9" fill="#e0b9a4" transform="rotate(9 40 16)" />
      <ellipse cx="32" cy="41" rx="13.5" ry="12.5" fill="#c8a976" />
      <ellipse cx="32" cy="47" rx="6.5" ry="5" fill="#e6d3ae" />
      <path d="M29.5,44 L34.5,44 L32,47 Z" fill="#8b5a4a" />
      <Eye x={25} y={39} r={3 * er} /><Eye x={39} y={39} r={3 * er} />
    </g>
  ),
  beaver: (er) => (
    <g>
      <circle cx="20" cy="24" r="4" fill="#5d3d22" /><circle cx="44" cy="24" r="4" fill="#5d3d22" />
      <circle cx="32" cy="37" r="15.5" fill="#7a5230" />
      <ellipse cx="32" cy="45" rx="9.5" ry="8" fill="#9c6b3f" />
      <ellipse cx="32" cy="41" rx="3.6" ry="2.6" fill="#2e2018" />
      <rect x="28.4" y="47" width="3.2" height="6.5" rx="1" fill="#f2b53c" /><rect x="32.4" y="47" width="3.2" height="6.5" rx="1" fill="#f2b53c" />
      <Eye x={25} y={33} r={2.8 * er} /><Eye x={39} y={33} r={2.8 * er} />
    </g>
  ),
  badger: (er) => (
    <g>
      <circle cx="18" cy="27" r="3.5" fill="#2e2b28" /><circle cx="46" cy="27" r="3.5" fill="#2e2b28" />
      <ellipse cx="32" cy="39" rx="16" ry="14" fill="#2e2b28" />
      <path d="M18,36 A14,11.5 0 0 1 46,36 L44,31 A14,12 0 0 0 20,31 Z" fill="#c9ced1" />
      <circle cx="32" cy="47" r="3" fill="#0d0b0a" />
      <Eye x={25} y={41} r={2.7 * er} /><Eye x={39} y={41} r={2.7 * er} />
    </g>
  ),
  cobra: (er) => (
    <g>
      <path d="M32,7 Q54,15 52,38 Q50,53 32,55 Q14,53 12,38 Q10,15 32,7 Z" fill="#7a8a4a" />
      <ellipse cx="32" cy="39" rx="11" ry="14" fill="#cdd39a" />
      <ellipse cx="32" cy="20" rx="8.5" ry="6.5" fill="#66743c" />
      <path d="M32,27 L32,32 M32,32 L29.3,35.5 M32,32 L34.7,35.5" stroke="#d84b3a" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <ellipse cx="27" cy="34" rx="2.6" ry="3.6" fill="#66743c" /><ellipse cx="37" cy="34" rx="2.6" ry="3.6" fill="#66743c" />
      <Eye x={28.5} y={19.5} r={2.2 * er} /><Eye x={35.5} y={19.5} r={2.2 * er} />
    </g>
  ),
  boar: (er) => (
    <g>
      <path d="M19,25 L23,16 L27,23 L32,13 L37,23 L41,16 L45,25 Z" fill="#4c3b2e" />
      <path d="M14,32 L8,26 L18,26 Z" fill="#5d4a3a" /><path d="M50,32 L56,26 L46,26 Z" fill="#5d4a3a" />
      <ellipse cx="32" cy="37" rx="16" ry="14" fill="#6e5a4a" />
      <path d="M21,49 q-3,-5 1,-7 l2,4 z" fill="#f4ead6" /><path d="M43,49 q3,-5 -1,-7 l-2,4 z" fill="#f4ead6" />
      <ellipse cx="32" cy="46" rx="8" ry="6" fill="#a58877" />
      <circle cx="29" cy="46" r="1.6" fill="#4c3b2e" /><circle cx="35" cy="46" r="1.6" fill="#4c3b2e" />
      <Eye x={25} y={34} r={2.6 * er} /><Eye x={39} y={34} r={2.6 * er} />
    </g>
  ),
  leopard: felArt({ fur: "#d9a44a", rosettes: 1, iris: "#caa23a" }),
  serval: felArt({ fur: "#d9b060", earTall: 1, spots: 1, iris: "#caa23a" }),
  // The lioness was one of the original hand-drawn heads. She now uses the
  // shared feline body like every other cat - tawny, no mane, since the maned
  // male is a separate species entry.
  lion: felArt({ fur: "#c9a05c", inner: "#a8763c", muzzle: "#e8dcc3", iris: "#c9a43a", big: true }),
  turtle: (er) => (
    <g>
      <path d="M14,40 Q14,17 32,15 Q50,17 50,40 L14,40 Z" fill="#5b6b3a" />
      <path d="M32,15 L32,40 M20,20 Q23,30 22,40 M44,20 Q41,30 42,40 M15,30 L49,30" stroke="#45532c" strokeWidth="1.6" fill="none" />
      <rect x="12" y="38" width="40" height="5" rx="2.5" fill="#8a7a4a" />
      <ellipse cx="32" cy="49" rx="10" ry="8.5" fill="#8fa05a" />
      <path d="M26,52 Q32,55 38,52" stroke="#5b6b3a" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <Eye x={27} y={47} r={2.5 * er} /><Eye x={37} y={47} r={2.5 * er} />
    </g>
  ),
  scorpion: (er) => (
    <g>
      <path d="M40,38 Q56,34 54,19 Q53,10 45,12" stroke="#8c5a2b" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M45,12 L41,7 L47,8 Z" fill="#4c2f14" />
      <path d="M18,38 Q12,34 13,30" stroke="#7a4c22" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M46,40 Q52,38 52,34" stroke="#7a4c22" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="13" cy="27" r="5.5" fill="#8c5a2b" /><circle cx="52" cy="31" r="5.5" fill="#8c5a2b" />
      <ellipse cx="32" cy="42" rx="12" ry="8" fill="#8c5a2b" />
      <path d="M24,38 Q32,41 40,38 M23,42 Q32,45 41,42 M24,46 Q32,49 40,46" stroke="#6b421c" strokeWidth="1.2" fill="none" />
      <Eye x={28} y={38} r={1.9 * er} /><Eye x={36} y={38} r={1.9 * er} />
    </g>
  ),
  bat: (er) => (
    <g>
      <path d="M20,27 L15,6 L30,20 Z" fill="#7d5a3c" /><path d="M44,27 L49,6 L34,20 Z" fill="#7d5a3c" />
      <path d="M9,52 Q14,36 21,48 Q15,54 9,52 Z" fill="#4c3626" /><path d="M55,52 Q50,36 43,48 Q49,54 55,52 Z" fill="#4c3626" />
      <ellipse cx="32" cy="38" rx="13.5" ry="12.5" fill="#7d5a3c" />
      <ellipse cx="32" cy="44" rx="6.5" ry="5" fill="#9c7a55" />
      <ellipse cx="32" cy="42" rx="2.4" ry="1.8" fill="#2e2018" />
      <Eye x={26} y={35} r={3.4 * er} /><Eye x={38} y={35} r={3.4 * er} />
    </g>
  ),
  wolf: canArt({ fur: "#8a8f98", inner: "#5c6068", muzzle: "#d7d9dd", line: "#5c6068", iris: "#d9a43a" }),
  croc: (er) => (
    <g>
      <circle cx="23" cy="24" r="6.5" fill="#5d8a4a" /><circle cx="41" cy="24" r="6.5" fill="#5d8a4a" />
      <rect x="13" y="27" width="38" height="17" rx="8.5" fill="#5d8a4a" />
      <rect x="15" y="41" width="34" height="7" rx="3.5" fill="#8fae6a" />
      <path d="M17,42 L20,38.5 L23,42 L26,38.5 L29,42 L32,38.5 L35,42 L38,38.5 L41,42 L44,38.5 L47,42 Z" fill="#f4f7ee" />
      <Eye x={23} y={23} r={2.6 * er} iris="#d9c23a" /><Eye x={41} y={23} r={2.6 * er} iris="#d9c23a" />
    </g>
  ),
  meerkat: (er) => (
    <g>
      <circle cx="22" cy="26" r="3.5" fill="#b5946a" /><circle cx="42" cy="26" r="3.5" fill="#b5946a" />
      <ellipse cx="32" cy="38" rx="12" ry="14" fill="#d9b98a" />
      <ellipse cx="26" cy="34" rx="4" ry="5" fill="#4c3b28" /><ellipse cx="38" cy="34" rx="4" ry="5" fill="#4c3b28" />
      <ellipse cx="32" cy="46" rx="5.5" ry="4.5" fill="#efe0c0" />
      <circle cx="32" cy="44" r="1.8" fill="#33261c" />
      <Eye x={26} y={34} r={2.4 * er} /><Eye x={38} y={34} r={2.4 * er} />
    </g>
  ),
  pangolin: (er) => (
    <g>
      <path d="M10,40 Q16,16 32,12 Q48,16 54,40 Z" fill="#8a6a42" />
      <path d="M16,40 Q20,24 32,20 M48,40 Q44,24 32,20 M32,12 L32,40 M22,40 Q24,28 32,24 M42,40 Q40,28 32,24" stroke="#6b4f2e" strokeWidth="1.6" fill="none" />
      <path d="M14,36 L20,32 L26,36 L32,31 L38,36 L44,32 L50,36" stroke="#6b4f2e" strokeWidth="1.6" fill="none" />
      <ellipse cx="32" cy="44" rx="12" ry="9" fill="#c9ad85" />
      <path d="M32,44 L37,55 Q32,58 27,55 Z" fill="#c9ad85" />
      <circle cx="32" cy="55" r="1.8" fill="#33261c" />
      <Eye x={27} y={42} r={2.3 * er} /><Eye x={37} y={42} r={2.3 * er} />
    </g>
  ),
  aardvark: (er) => (
    <g>
      <ellipse cx="23" cy="16" rx="5" ry="12" fill="#b89a8f" /><ellipse cx="23" cy="17" rx="2.4" ry="8" fill="#d4b3a8" />
      <ellipse cx="41" cy="16" rx="5" ry="12" fill="#b89a8f" /><ellipse cx="41" cy="17" rx="2.4" ry="8" fill="#d4b3a8" />
      <ellipse cx="32" cy="38" rx="13" ry="12" fill="#b89a8f" />
      <ellipse cx="32" cy="49" rx="5.5" ry="7.5" fill="#c9aba0" />
      <circle cx="30" cy="53" r="1.2" fill="#5c4038" /><circle cx="34" cy="53" r="1.2" fill="#5c4038" />
      <Eye x={26} y={35} r={2.5 * er} /><Eye x={38} y={35} r={2.5 * er} />
    </g>
  ),
  hippo: (er) => (
    <g>
      <circle cx="20" cy="22" r="3.5" fill="#7a7a88" /><circle cx="44" cy="22" r="3.5" fill="#7a7a88" />
      <ellipse cx="32" cy="31" rx="14" ry="10" fill="#8b8b98" />
      <ellipse cx="32" cy="45" rx="13.5" ry="10" fill="#a3a3b0" />
      <ellipse cx="26" cy="42" rx="2.2" ry="1.6" fill="#5c5c68" /><ellipse cx="38" cy="42" rx="2.2" ry="1.6" fill="#5c5c68" />
      <path d="M24,51 l0,-4 l3,0 l0,4 z" fill="#f4ead6" /><path d="M37,51 l0,-4 l3,0 l0,4 z" fill="#f4ead6" />
      <Eye x={26} y={28} r={2.3 * er} /><Eye x={38} y={28} r={2.3 * er} />
    </g>
  ),
  // --- felines ---
  cheetah: felArt({ fur: "#e8c06a", spots: 1, tear: 1, iris: "#c96f2e" }),
  tiger: felArt({ fur: "#e0762e", stripes: 1, muzzle: "#f6ead2", iris: "#e8c547" }),
  caracal: felArt({ fur: "#c98a4b", earTall: 1, tufts: 1, iris: "#9bb35c" }),
  lynx: felArt({ fur: "#c9b08a", tufts: 1, ruff: 1, spots: 1, iris: "#d9c23a" }),
  snowleopard: felArt({ fur: "#dde1e6", rosettes: 1, markC: "#4a4f58", muzzle: "#f4f6f8", iris: "#8fb0c9" }),
  jaguar: felArt({ fur: "#d99a3c", rosettes: 1, markC: "#2e2418", iris: "#c9642e" }),
  sandcat: felArt({ fur: "#e5d0a3", earTall: 1, iris: "#9bb35c", muzzle: "#f4ead2" }),
  // --- canines ---
  wilddog: canArt({ fur: "#b58a4b", mask: "#3a2c1a", inner: "#2e2418", muzzle: "#6b5a3c", line: "#2e2418", earRound: 1, iris: "#b5945a" }),
  jackal: canArt({ fur: "#c9a668", mask: "#8a7248", inner: "#5c4838" }),
  arcticfox: canArt({ fur: "#eef1f4", inner: "#c9ced4", muzzle: "#ffffff", line: "#8a93a3", iris: "#6b7d94" }),
  redfox: canArt({ fur: "#d96f2e", inner: "#2e2418", muzzle: "#f6ead2", line: "#8a4a22", iris: "#b5651d" }),
  hyena: canArt({ fur: "#b5a488", spots: 1, inner: "#3a2c1a", muzzle: "#8a7a68", line: "#3a2c1a", earRound: 1, crest: "#4c4438" }),
  manedwolf: canArt({ fur: "#c9642e", inner: "#1e1611", muzzle: "#e8c9a3", line: "#8a3c1e", crest: "#2e2418" }),
  // --- new bespoke ---
  camel: (er) => (
    <g>
      <path d="M26,18 Q32,12 38,18 Q35,15 32,15 Q29,15 26,18 Z" fill="#b5945a" />
      <ellipse cx="24" cy="22" rx="3.5" ry="2.5" fill="#c9a668" /><ellipse cx="40" cy="22" rx="3.5" ry="2.5" fill="#c9a668" />
      <ellipse cx="32" cy="32" rx="12.5" ry="11" fill="#d9b878" />
      <ellipse cx="32" cy="45" rx="8.5" ry="8" fill="#c9a668" />
      <ellipse cx="32" cy="52" rx="5.5" ry="3" fill="#b5945a" />
      <path d="M28.5,45 L28,48 M35.5,45 L36,48" stroke="#8a7248" strokeWidth="1.6" strokeLinecap="round" />
      <Eye x={25.5} y={30} r={2.6 * er} lid="#b5945a" /><Eye x={38.5} y={30} r={2.6 * er} lid="#b5945a" />
    </g>
  ),
  ibex: (er) => (
    <g>
      <path d="M24,25 Q13,14 18,3" stroke="#8a7a5c" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M40,25 Q51,14 46,3" stroke="#8a7a5c" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M20,17 L23,19 M17,11 L21,12 M43,17 L41,19 M47,11 L43,12" stroke="#6b5a3c" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="32" cy="36" rx="13" ry="12" fill="#b5a488" />
      <ellipse cx="32" cy="45" rx="7" ry="5.5" fill="#d4c8b0" />
      <path d="M30,50 L34,50 L32,56 Z" fill="#8a7a5c" />
      <ellipse cx="30" cy="47" rx="1.2" ry="1" fill="#5c4838" /><ellipse cx="34" cy="47" rx="1.2" ry="1" fill="#5c4838" />
      <g><circle cx="25" cy="33" r={3 * er} fill="#d9c23a" /><ellipse cx="25" cy="33" rx={2.2 * er} ry={1.1 * er} fill="#1e1611" /></g>
      <g><circle cx="39" cy="33" r={3 * er} fill="#d9c23a" /><ellipse cx="39" cy="33" rx={2.2 * er} ry={1.1 * er} fill="#1e1611" /></g>
    </g>
  ),
  monitor: (er) => (
    <g>
      <path d="M12,42 Q12,24 32,22 Q52,24 52,42 Q52,50 32,50 Q12,50 12,42 Z" fill="#5c6b4a" />
      <g fill="#d9c23a">
        <circle cx="22" cy="30" r="1" /><circle cx="28" cy="27" r="1" /><circle cx="36" cy="27" r="1" /><circle cx="42" cy="30" r="1" />
        <circle cx="18" cy="38" r="1" /><circle cx="46" cy="38" r="1" /><circle cx="25" cy="45" r="1" /><circle cx="39" cy="45" r="1" />
      </g>
      <path d="M32,44 L32,49 M32,49 L29.5,52 M32,49 L34.5,52" stroke="#d84b3a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <Eye x={23} y={33} r={2.6 * er} iris="#d9c23a" /><Eye x={41} y={33} r={2.6 * er} iris="#d9c23a" />
    </g>
  ),
  tortoise: (er) => (
    <g>
      <path d="M13,40 Q13,15 32,13 Q51,15 51,40 L13,40 Z" fill="#c9a668" />
      <path d="M32,13 L32,40 M21,18 Q24,29 23,40 M43,18 Q40,29 41,40 M14,29 L50,29 M17,21 L47,21" stroke="#8a7248" strokeWidth="1.8" fill="none" />
      <rect x="11" y="38" width="42" height="5" rx="2.5" fill="#a3885c" />
      <ellipse cx="32" cy="49" rx="10.5" ry="8.5" fill="#d4bc8a" />
      <path d="M25,46 Q28,44 31,46 M33,46 Q36,44 39,46" stroke="#a3885c" strokeWidth="1.2" fill="none" />
      <path d="M26,53 Q32,56 38,53" stroke="#8a7248" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <Eye x={27} y={48} r={2.4 * er} /><Eye x={37} y={48} r={2.4 * er} />
    </g>
  ),
  chameleon: (er) => (
    <g>
      <path d="M32,10 L40,24 L24,24 Z" fill="#4c8a3c" />
      <path d="M12,40 Q12,24 32,22 Q52,24 52,40 Q52,50 32,50 Q12,50 12,40 Z" fill="#6ab04c" />
      <path d="M14,38 Q32,32 50,38" stroke="#8fd06a" strokeWidth="2.4" fill="none" />
      <path d="M46,46 Q54,44 53,38 Q49,40 48,44 Z" fill="#4c8a3c" />
      <circle cx="22" cy="32" r={5.6} fill="#8fd06a" stroke="#4c8a3c" strokeWidth="1.6" />
      <circle cx={20.5} cy={30.5} r={1.8 * er} fill="#1e1611" />
      <circle cx="42" cy="32" r={5.6} fill="#8fd06a" stroke="#4c8a3c" strokeWidth="1.6" />
      <circle cx={44} cy={33.5} r={1.8 * er} fill="#1e1611" />
      <path d="M22,45 Q32,49 42,44" stroke="#3c6b2e" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </g>
  ),
  sloth: (er) => (
    <g>
      <circle cx="32" cy="36" r="16" fill="#9c8a6b" />
      <path d="M17,30 L13,27 M18,40 L13,41 M47,30 L51,27 M46,40 L51,41 M22,49 L19,53 M42,49 L45,53" stroke="#8a7a5c" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="32" cy="38" rx="11" ry="10" fill="#d4c8b0" />
      <path d="M21,32 Q25,36 24,40 Q20,38 21,32 Z" fill="#6b5a3c" /><path d="M43,32 Q39,36 40,40 Q44,38 43,32 Z" fill="#6b5a3c" />
      <ellipse cx="32" cy="42" rx="2.6" ry="2" fill="#4c4438" />
      <path d="M26,46 Q32,50 38,46" stroke="#6b5a3c" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <Eye x={24.5} y={35} r={2.4 * er} /><Eye x={39.5} y={35} r={2.4 * er} />
    </g>
  ),
  python: (er) => (
    <g>
      <circle cx="32" cy="38" r="16" fill="#6b4f2e" />
      <path d="M17,32 Q24,26 32,28 Q40,26 47,32" stroke="#4c3820" strokeWidth="2.4" fill="none" />
      <path d="M16,42 Q24,38 32,40 Q40,38 48,42" stroke="#4c3820" strokeWidth="2.4" fill="none" />
      <g fill="#c9a668">
        <ellipse cx="21" cy="37" rx="3" ry="2.2" /><ellipse cx="43" cy="37" rx="3" ry="2.2" />
        <ellipse cx="27" cy="47" rx="3" ry="2" /><ellipse cx="37" cy="47" rx="3" ry="2" />
      </g>
      <ellipse cx="32" cy="22" rx="8.5" ry="6" fill="#8a6a42" />
      <path d="M32,28 L32,32 M32,32 L29.6,35 M32,32 L34.4,35" stroke="#d84b3a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <Eye x={28.5} y={21} r={2.1 * er} iris="#c9a63a" /><Eye x={35.5} y={21} r={2.1 * er} iris="#c9a63a" />
    </g>
  ),
  seal: (er) => (
    <g>
      <circle cx="32" cy="36" r="16" fill="#8a93a3" />
      <g fill="#6b7484">
        <circle cx="24" cy="27" r="1.1" /><circle cx="40" cy="27" r="1.1" /><circle cx="20" cy="34" r="1.1" /><circle cx="44" cy="34" r="1.1" />
      </g>
      <ellipse cx="32" cy="44" rx="8" ry="6" fill="#b8c0cc" />
      <ellipse cx="32" cy="41.5" rx="3" ry="2.2" fill="#26292e" />
      <path d="M26,45 L21,44 M26,47 L21,48 M38,45 L43,44 M38,47 L43,48" stroke="#6b7484" strokeWidth="1" strokeLinecap="round" />
      <Eye x={25} y={33} r={3.3 * er} /><Eye x={39} y={33} r={3.3 * er} />
    </g>
  ),
  galago: (er) => (
    <g>
      <circle cx="18" cy="22" r="7.5" fill="#9c8a7d" /><circle cx="18" cy="22" r="4" fill="#d4b3a8" />
      <circle cx="46" cy="22" r="7.5" fill="#9c8a7d" /><circle cx="46" cy="22" r="4" fill="#d4b3a8" />
      <circle cx="32" cy="38" r="14" fill="#9c8a7d" />
      <ellipse cx="32" cy="45" rx="6" ry="4.5" fill="#d4c8b0" />
      <path d="M30.5,43.5 L33.5,43.5 L32,45.5 Z" fill="#4c3838" />
      <Eye x={25.5} y={35} r={4.4 * er} iris="#e8912d" /><Eye x={38.5} y={35} r={4.4 * er} iris="#e8912d" />
    </g>
  ),
  // --- guardians ---
  qilin: (er) => (
    <g>
      <path d="M24,22 C22,12 17,10 14,5 M24,22 C21,16 16,17 12,15 M40,22 C42,12 47,10 50,5 M40,22 C43,16 48,17 52,15" stroke="#c9974d" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="18" cy="30" r="4" fill="#e8c547" /><circle cx="46" cy="30" r="4" fill="#e8c547" />
      <ellipse cx="32" cy="38" rx="13" ry="13" fill="#5aa08a" />
      <path d="M22,32 Q26,29 30,32 M34,32 Q38,29 42,32 M24,42 Q28,39 32,42 Q36,39 40,42" stroke="#3f7f6b" strokeWidth="1.3" fill="none" />
      <ellipse cx="32" cy="46" rx="7.5" ry="5.5" fill="#cfe8dd" />
      <circle cx="29.5" cy="45" r="1.1" fill="#3f7f6b" /><circle cx="34.5" cy="45" r="1.1" fill="#3f7f6b" />
      <path d="M32,51 L32,57" stroke="#e8c547" strokeWidth="2" strokeLinecap="round" />
      <Eye x={26} y={36} r={2.7 * er} iris="#e8c547" /><Eye x={38} y={36} r={2.7 * er} iris="#e8c547" />
    </g>
  ),
  thunderbird: (er) => (
    <g>
      <path d="M20,20 L16,4 L26,14 L28,2 L34,14 L38,4 L44,18 Z" fill="#2e3d52" />
      <circle cx="32" cy="34" r="14" fill="#3c4f6b" />
      <path d="M20,29 L28,32 M44,29 L36,32" stroke="#22303f" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M32,37 q4,1 3,6 q-3,2 -6,0 q-1,-5 3,-6 z" fill="#8a93a3" />
      <path d="M32,46 L36,46 L33,51 L36,51 L28,59 L31,52 L28,52 Z" fill="#ffe97a" />
      <Eye x={25.5} y={32} r={2.7 * er} iris="#ffd24a" /><Eye x={38.5} y={32} r={2.7 * er} iris="#ffd24a" />
    </g>
  ),
  phoenix: (er) => (
    <g>
      <path d="M26,20 Q22,8 28,3 Q29,12 32,15 Q33,6 38,2 Q39,12 36,17 Q43,10 46,12 Q42,19 38,21 Z" fill="#e85d1f" />
      <path d="M29,18 Q27,10 31,6 Q31,13 33,15 Q35,9 38,7 Q38,14 35,18 Z" fill="#f2a33c" />
      <path d="M12,34 Q6,28 8,22 Q14,26 16,31 Z" fill="#e85d1f" />
      <path d="M52,34 Q58,28 56,22 Q50,26 48,31 Z" fill="#e85d1f" />
      <circle cx="32" cy="35" r="13" fill="#e8641f" />
      <ellipse cx="32" cy="41" rx="9" ry="7" fill="#f2a33c" />
      <path d="M32,37 q4.5,0.5 3.5,5.5 q-3.5,2.4 -7,0 q-1,-5 3.5,-5.5 z" fill="#f2c14e" />
      <Eye x={25.5} y={33} r={2.7 * er} iris="#ffd24a" /><Eye x={38.5} y={33} r={2.7 * er} iris="#ffd24a" />
    </g>
  ),
};

// ---------- PHOTO ART OVERRIDES ----------
// Any species listed here renders from art/<species>.png instead of its drawn
// SVG. Everything not listed falls back to the generator, so the game works
// identically whether there is one photo in here or nine hundred. Add a file to
// art/ and a line here, and that species switches over. Nothing else changes.
const PHOTO_ART = {};

// ---------- SPRITE COMPONENT ----------
function Sprite({ sp, size = 48, flip, anim }) {
  const d = DEX[sp];
  const er = d.juv ? 1.35 : 1;
  const shadow = "drop-shadow(1px 2px 2px rgba(0,0,0,.3))";
  return (
    <div style={{ animation: anim ? `${anim} ${anim === "floatY" ? 2.6 : 1.8}s ease-in-out infinite` : undefined, display: "inline-flex", flexShrink: 0 }}>
      {PHOTO_ART[sp] ? (
        <img src={`art/${sp}.png`} width={size} height={size} alt=""
          style={{ filter: shadow, transform: flip ? "scaleX(-1)" : undefined, objectFit: "contain", flexShrink: 0 }} />
      ) : (
        <svg width={size} height={size} viewBox="0 0 64 64"
          style={{ filter: shadow, transform: flip ? "scaleX(-1)" : undefined, flexShrink: 0 }}>
          {d.juv ? <g transform="translate(6.4, 9) scale(.8)">{ART[d.art](er)}</g> : ART[d.art](er)}
        </svg>
      )}
    </div>
  );
}

// ---------- INSTANCES ----------
const statAt = (base, lvl, isHp) =>
  isHp ? Math.floor(base * (0.5 + lvl * 0.07)) + 12 : Math.floor(base * (0.35 + lvl * 0.055)) + 4;

let UID = 1;
const mk = (sp, lvl) => {
  const d = DEX[sp];
  const moves = [...d.m, ...(d.l || []).filter(([L]) => L <= lvl).map(([, k]) => k)].slice(-4);
  const maxHp = statAt(d.b.h, lvl, true);
  return { uid: UID++, sp, lvl, xp: 0, maxHp, hp: maxHp, sex: Math.random() < 0.5 ? "M" : "F",
    moves, pp: moves.map((k) => maxPP(MOVES[k])),
    atk: statAt(d.b.a, lvl), def: statAt(d.b.d, lvl), spd: statAt(d.b.s, lvl) };
};
const xpNeed = (lvl) => Math.floor(lvl * 24 + lvl * lvl * 0.3);

const learnMove = (my, k, logs) => {
  if (my.moves.includes(k) || (my.pending || []).includes(k)) return;
  if (my.moves.length < 4) {
    my.moves = [...my.moves, k]; my.pp = [...my.pp, maxPP(MOVES[k])];
    logs.push(`${DEX[my.sp].n} learned ${MOVES[k].n}!`);
  } else {
    my.pending = [...(my.pending || []), k];
    logs.push(`${DEX[my.sp].n} wants to learn ${MOVES[k].n}!`);
  }
};

