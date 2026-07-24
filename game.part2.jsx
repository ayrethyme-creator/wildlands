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
  leopard: felArt({ fur: "#d9a44a", rosettes: 1, iris: "#caa23a" }),
  serval: felArt({ fur: "#d9b060", earTall: 1, spots: 1, iris: "#caa23a" }),
  // The lioness was one of the original hand-drawn heads. She now uses the
  // shared feline body like every other cat - tawny, no mane, since the maned
  // male is a separate species entry.
  lion: felArt({ fur: "#c9a05c", inner: "#a8763c", muzzle: "#e8dcc3", iris: "#c9a43a", big: true }),
  wolf: canArt({ fur: "#8a8f98", inner: "#5c6068", muzzle: "#d7d9dd", line: "#5c6068", iris: "#d9a43a" }),
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

