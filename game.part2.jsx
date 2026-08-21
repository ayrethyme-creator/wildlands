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
const PHOTO_ART = {
  "aardvark": true,
  "aardwolf": true,
  "abyssiniancat": true,
  "adaro": true,
  "addax": true,
  "africanelephant": true,
  "africanelephant_c": true,
  "africangrey": true,
  "agouti": true,
  "ahuizotl": true,
  "airavata": true,
  "akhlut": true,
  "akita": true,
  "alala": true,
  "albatross": true,
  "alicanto": true,
  "alkonost": true,
  "alligator": true,
  "allosaurus": true,
  "alpaca": true,
  "alpaca_c": true,
  "alpacafarm": true,
  "amaru": true,
  "amazonriverdolphin": true,
  "ammit": true,
  "amurleopard": true,
  "anansi": true,
  "andeancat": true,
  "angelfish": true,
  "angelshark": true,
  "anglerfish": true,
  "ankylosaurus": true,
  "apatosaurus": true,
  "apep": true,
  "archaeopteryx": true,
  "arcticfox": true,
  "arcticfox_j": true,
  "arctichare": true,
  "asianelephant": true,
  "asianelephant_c": true,
  "asiangoldencat": true,
  "asiaticcheetah": true,
  "atlasmoth": true,
  "aurochs": true,
  "australianshepherd": true,
  "axolotl": true,
  "axolotlmeta": true,
  "ayeaye": true,
  "babirusa": true,
  "baboon": true,
  "baboon_i": true,
  "badger": true,
  "badger_j": true,
  "baihu": true,
  "baiji": true,
  "baku": true,
  "bakunawa": true,
  "baldeagle": true,
  "balitiger": true,
  "bandicoot": true,
  "banggaicardinalfish": true,
  "barbarylion": true,
  "barnowl": true,
  "barnswallow": true,
  "barong": true,
  "barracuda": true,
  "barrelsponge": true,
  "bartailedgodwit": true,
  "basilisk": true,
  "baskingshark": true,
  "bat": true,
  "bateared": true,
  "bathynax": true,
  "beagle": true,
  "beaver": true,
  "beaver_j": true,
  "behemoth": true,
  "beluga": true,
  "beluga_c": true,
  "bengalcat": true,
  "bennu": true,
  "bernesemountain": true,
  "betta": true,
  "bighorn": true,
  "bilby": true,
  "binturong": true,
  "birdwing": true,
  "bison": true,
  "bison_c": true,
  "bixi": true,
  "blackbackjackal": true,
  "blackbear": true,
  "blackbear_c": true,
  "blackbuck": true,
  "blackcat": true,
  "blackcockatoo": true,
  "blackfootedcat": true,
  "blackmamba": true,
  "blackrhino": true,
  "blackrhino_c": true,
  "blackskirttetra": true,
  "bluebuck": true,
  "bluefootedbooby": true,
  "bluegoldmacaw": true,
  "bluegreenchromis": true,
  "bluemorpho": true,
  "bluetang": true,
  "bluewhale": true,
  "bluewhale_c": true,
  "boaconstrictor": true,
  "boar": true,
  "boar_j": true,
  "bobbitworm": true,
  "bobcat": true,
  "bongo": true,
  "bonobo": true,
  "bordeauxmastiff": true,
  "bordercollie": true,
  "bottlenose": true,
  "bottlenose_c": true,
  "bowhead": true,
  "bowhead_c": true,
  "boxfish": true,
  "boxjelly": true,
  "brachiosaurus": true,
  "bramblecaymelomys": true,
  "bramwold": true,
  "bristlenosepleco": true,
  "britishshorthair": true,
  "brittlestar": true,
  "brontosaurus": true,
  "brownhyena": true,
  "brydeswhale": true,
  "budgie": true,
  "bulldog": true,
  "bullshark": true,
  "bumblebee": true,
  "bunyip": true,
  "bushdog": true,
  "bushmaster": true,
  "butterflyfish": true,
  "cadejo": true,
  "caiman": true,
  "caitsith": true,
  "calicocat": true,
  "californiacondor": true,
  "camarasaurus": true,
  "camazotz": true,
  "camel": true,
  "camel_c": true,
  "canary": true,
  "capuchin": true,
  "capybara": true,
  "caracal": true,
  "caracara": true,
  "caribbeanmonkseal": true,
  "carnotaurus": true,
  "carolinaparakeet": true,
  "caspiantiger": true,
  "cassowary": true,
  "cavelion": true,
  "ceratosaurus": true,
  "cerberus": true,
  "cetarch": true,
  "cetus": true,
  "chameleon": true,
  "cheetah": true,
  "cheetah_j": true,
  "chevrotain": true,
  "chicken": true,
  "chihuahua": true,
  "chimera": true,
  "chimpanzee": true,
  "chimpanzee_i": true,
  "chinchilla": true,
  "chinesegiantsalamander": true,
  "chinesepaddlefish": true,
  "chipmunk": true,
  "chital": true,
  "christmastreeworm": true,
  "chupacabra": true,
  "cicada": true,
  "cicadanymph": true,
  "cipactli": true,
  "civet": true,
  "cloudedleopard": true,
  "clownfemale": true,
  "clownfish": true,
  "clownjuv": true,
  "coati": true,
  "cobra": true,
  "cobra_j": true,
  "cockatiel": true,
  "cockatoo": true,
  "cockatrice": true,
  "coconutcrab": true,
  "coelacanth": true,
  "coelophysis": true,
  "colchisdrake": true,
  "colobus": true,
  "columbianmammoth": true,
  "commersons": true,
  "commonstarling": true,
  "commontreeshrew": true,
  "compsognathus": true,
  "condor": true,
  "conure": true,
  "copperbandbutterfly": true,
  "corgi": true,
  "corsacfox": true,
  "corydoras": true,
  "cow": true,
  "coyote": true,
  "crabeaterseal": true,
  "crane": true,
  "croc": true,
  "croc_j": true,
  "crossrivergorilla": true,
  "crownofthorns": true,
  "cryolophosaurus": true,
  "culpeo": true,
  "cuscus": true,
  "cusith": true,
  "cuttlefish": true,
  "cuvierbeaked": true,
  "cyclops": true,
  "cygnet": true,
  "cynognathus": true,
  "dachshund": true,
  "dalmatian": true,
  "damagazelle": true,
  "damselfly": true,
  "dartfrog": true,
  "dartfrog_j": true,
  "degu": true,
  "deinonychus": true,
  "desertratkangaroo": true,
  "desmatosuchus": true,
  "devonrex": true,
  "dhole": true,
  "dikdik": true,
  "dilophosaurus": true,
  "dingo": true,
  "diplodocus": true,
  "direwolf": true,
  "discusfish": true,
  "dodo": true,
  "dog": true,
  "donkey": true,
  "dormouse": true,
  "dragonfly": true,
  "duck": true,
  "dugong": true,
  "dugong_c": true,
  "duiker": true,
  "duskydolphin": true,
  "dwarfgourami": true,
  "eaglejuv": true,
  "eagleray": true,
  "eaglet": true,
  "earthworm": true,
  "echidna": true,
  "echidna_p": true,
  "eclectus": true,
  "egyptianfruitbat": true,
  "eland": true,
  "electricray": true,
  "elephantbird": true,
  "elephantseal": true,
  "elk": true,
  "elver": true,
  "emperorpenguin": true,
  "emu": true,
  "eoraptor": true,
  "epaulette": true,
  "ephyra": true,
  "ethiopianwolf": true,
  "europeanrobin": true,
  "falklandwolf": true,
  "falsekiller": true,
  "fancygoldfish": true,
  "fancymouse": true,
  "fancyrat": true,
  "fawn": true,
  "fenghuang": true,
  "fennec": true,
  "fennec_j": true,
  "fenrir": true,
  "ferret": true,
  "ferretpet": true,
  "fiddlercrab": true,
  "finlessporpoise": true,
  "finwhale": true,
  "finwhale_c": true,
  "firebellytoad": true,
  "firebird": true,
  "firefishgoby": true,
  "firefly": true,
  "firehawk": true,
  "firesalamander": true,
  "fireskink": true,
  "fisher": true,
  "fishingbat": true,
  "fishingcat": true,
  "flameangelfish": true,
  "flamingo": true,
  "flamingo_c": true,
  "flamingo_j": true,
  "flyingfish": true,
  "flyingsquirrel": true,
  "formosancloudedleopard": true,
  "fossa": true,
  "franklinsbumblebee": true,
  "freetailbat": true,
  "frigatebird": true,
  "frilledlizard": true,
  "frilledshark": true,
  "froglet": true,
  "fursealion": true,
  "gaboonviper": true,
  "galago": true,
  "gallimimus": true,
  "gangesdolphin": true,
  "garuda": true,
  "gazelle": true,
  "gecko": true,
  "gelada": true,
  "genet": true,
  "gerbil": true,
  "gerenuk": true,
  "germanshepherd": true,
  "gharial": true,
  "giantanteater": true,
  "giantarmadillo": true,
  "giantbeaver": true,
  "giantcentipede": true,
  "giantmillipede": true,
  "giantotter": true,
  "giantsquid": true,
  "gibbon": true,
  "gibbon_i": true,
  "giganotosaurus": true,
  "gilamonster": true,
  "gippslandworm": true,
  "giraffe": true,
  "giraffe_c": true,
  "glasseel": true,
  "glassfrog": true,
  "glasswing": true,
  "glyptodon": true,
  "glyptor": true,
  "goat": true,
  "goblinshark": true,
  "goldeneagle": true,
  "goldeneagle_e": true,
  "goldenhind": true,
  "goldenretriever": true,
  "goldentoad": true,
  "goldfish": true,
  "goliathbeetle": true,
  "goliathfrog": true,
  "goose": true,
  "gorilla": true,
  "gorilla_i": true,
  "goshawk": true,
  "grayfox": true,
  "graywhale": true,
  "graywhale_c": true,
  "greatauk": true,
  "greatdane": true,
  "greaterbop": true,
  "greaterhorseshoebat": true,
  "greathornedowl": true,
  "greatindianbustard": true,
  "greattit": true,
  "greatwhite": true,
  "greenanaconda": true,
  "greeniguana": true,
  "greenlandshark": true,
  "greenseaturtle": true,
  "greyhound": true,
  "griffin": true,
  "grizzly": true,
  "grizzly_c": true,
  "grootslang": true,
  "groundhog": true,
  "grouper": true,
  "guamkingfisher": true,
  "guamrail": true,
  "guanaco": true,
  "guineapig": true,
  "guppy": true,
  "haastseagle": true,
  "haetae": true,
  "hainangibbon": true,
  "hammerhead": true,
  "hamster": true,
  "harborporpoise": true,
  "hare": true,
  "harpseal": true,
  "harpy": true,
  "harpyeagle": true,
  "harpyeagle_e": true,
  "harrier": true,
  "harrishawk": true,
  "hartebeest": true,
  "hawkmoth": true,
  "hawksbill": true,
  "heathhen": true,
  "hectorsdolphin": true,
  "hedgehog": true,
  "hedgehog_j": true,
  "hellbender": true,
  "herculesbeetle": true,
  "hermitcrab": true,
  "heron": true,
  "herrerasaurus": true,
  "highlandcow": true,
  "hippo": true,
  "hippo_c": true,
  "hippocampus": true,
  "hirola": true,
  "hoatzin": true,
  "honeybee": true,
  "honeypotant": true,
  "hornbill": true,
  "hornedlizard": true,
  "hornedserpent": true,
  "horse": true,
  "horseshoecrab": true,
  "housecat": true,
  "housesparrow": true,
  "hoverfly": true,
  "howler": true,
  "huia": true,
  "hummingbird": true,
  "humpback": true,
  "humpback_c": true,
  "husky": true,
  "hyacinthmacaw": true,
  "hydra": true,
  "hyena": true,
  "hyena_j": true,
  "ibericanworm": true,
  "ibex": true,
  "ibis": true,
  "iguanodon": true,
  "impala": true,
  "imperialwoodpecker": true,
  "impundulu": true,
  "indri": true,
  "irishelk": true,
  "irrawaddy": true,
  "ivorybilledwoodpecker": true,
  "jackal": true,
  "jackalope": true,
  "jackrussell": true,
  "jaguar": true,
  "jaguar_j": true,
  "jaguarundi": true,
  "japanesewolf": true,
  "javanrhino": true,
  "javantiger": true,
  "jerboa": true,
  "jewelbeetle": true,
  "jormungandr": true,
  "jumpingspider": true,
  "jungle_cat": true,
  "kakapo": true,
  "kangaroo": true,
  "kangaroo_j2": true,
  "kappa": true,
  "kauaioo": true,
  "kea": true,
  "kelpie": true,
  "kempsridley": true,
  "kentrosaurus": true,
  "kestrel": true,
  "kestrel_j": true,
  "kihansispraytoad": true,
  "kingcobra": true,
  "kingfisher": true,
  "kinkajou": true,
  "kitsune": true,
  "kiwi": true,
  "klipspringer": true,
  "koala": true,
  "koala_j": true,
  "kodkod": true,
  "koi": true,
  "komainu": true,
  "komododragon": true,
  "kookaburra": true,
  "kraken": true,
  "kudu": true,
  "labrador": true,
  "labradorduck": true,
  "ladon": true,
  "ladybug": true,
  "lamassu": true,
  "langur": true,
  "lavalizard": true,
  "laysanhoneycreeper": true,
  "leafcutterant": true,
  "leafinsect": true,
  "leafyseadragon": true,
  "leatherback": true,
  "leopard": true,
  "leopard_j": true,
  "leopardseal": true,
  "leopardseal_p": true,
  "leptocephalus": true,
  "leshy": true,
  "lesserbilby": true,
  "leviathan": true,
  "lindworm": true,
  "linsang": true,
  "lion": true,
  "lion_j": true,
  "lionfish": true,
  "lionsmane": true,
  "liopleurodon": true,
  "littlebrownbat": true,
  "llama": true,
  "llama_c": true,
  "lobster": true,
  "longnosedbat": true,
  "loon": true,
  "lopbunny": true,
  "lorikeet": true,
  "loris": true,
  "lovebird": true,
  "lovebird_j": true,
  "lunamoth": true,
  "lynx": true,
  "lynx_j": true,
  "lyrebird": true,
  "lystrosaurus": true,
  "macaque": true,
  "mainecoon": true,
  "makara": true,
  "makoshark": true,
  "malamute": true,
  "mamenchisaurus": true,
  "mammoth": true,
  "mammoth_c": true,
  "manatee": true,
  "manatee_c": true,
  "mandarin_dragonet": true,
  "mandarinduck": true,
  "mandarinfish": true,
  "mandrill": true,
  "manedlion": true,
  "manedwolf": true,
  "manedwolf_j": true,
  "mantaray": true,
  "manticore": true,
  "mantis": true,
  "mantisshrimp": true,
  "mara": true,
  "marbledcat": true,
  "margay": true,
  "marineiguana": true,
  "markhor": true,
  "marlin": true,
  "marmoset": true,
  "marmot": true,
  "marten": true,
  "masonbee": true,
  "mastodon": true,
  "mauritiuskestrel": true,
  "medicinalleech": true,
  "meerkat": true,
  "megalopa": true,
  "megatherium": true,
  "melonhead": true,
  "militarymacaw": true,
  "mimicoctopus": true,
  "mink": true,
  "minke": true,
  "minke_c": true,
  "minotaur": true,
  "mishipeshu": true,
  "moa": true,
  // "molepup" is deliberately absent. The generated sprite came back as a pink
  // humanoid infant standing upright - the same "drawn as a person" fault the
  // audit passes kept finding, but on a species that turns up constantly in the
  // desert, so it was on screen more than almost anything else. Ayr: "it is
  // hideous and it comes up a lot."
  //
  // Dropping the line is the whole fix: Sprite falls back to ART.molepup, which
  // is the game's own drawn rodent, on four legs, in the house style. Better a
  // plain correct animal than a striking wrong one. Put the line back when the
  // art pipeline is up and the reworked description below has been through it.
  // "molequeen" absent for the same reason as the pup, and so is the adult
  // below. All three came out of the generator as pink upright humanoids -
  // it is the one species in the game where the reference photographs really
  // do look like something a model will read as a person, and it lost that
  // argument three times out of three. ART.molequeen is rodA with `big`.
  "monarch": true,
  "monarch_c": true,
  "monarch_p": true,
  "mongoose": true,
  "monitor": true,
  "monkseal": true,
  "moo": true,
  "moonbear": true,
  "moonjelly": true,
  "moose": true,
  "moose_c": true,
  "moray": true,
  "mosasaurus": true,
  "mothman": true,
  "muntjac": true,
  "mushussu": true,
  "muskox": true,
  "myrmedon": true,
  "naga": true,
  "naiad": true,
  // "nakedmolerat" absent - see the note on molequeen. ART.nakedmolerat is
  // rodA with `naked`, which is the drawn hairless variant made for exactly
  // this animal. The whole colony now renders in one consistent style rather
  // than three photographs that disagree with each other and with the game.
  "narwhal": true,
  "narwhal_c": true,
  "nautilus": true,
  "navagunjara": true,
  "nekomata": true,
  "nemeanlion": true,
  "neontetra": true,
  "newt": true,
  "nian": true,
  "nicobarpigeon": true,
  "nidhogg": true,
  "ninebandarmadillo": true,
  "northerncardinal": true,
  "northernwhiterhino": true,
  "norwegianforest": true,
  "numbat": true,
  "nurseshark": true,
  "nyala": true,
  "nycterion": true,
  "nyxfang": true,
  "oarfish": true,
  "ocelot": true,
  "ochrestar": true,
  "octopus": true,
  "okapi": true,
  "olm": true,
  "ophthalmosaurus": true,
  "opossum": true,
  "opossum_j": true,
  "orangebelliedparrot": true,
  "orangutan": true,
  "orangutanflanged": true,
  "orca": true,
  "orca_c": true,
  "orchidbee": true,
  "orchidmantis": true,
  "orientalcat": true,
  "orochi": true,
  "oryx": true,
  "oscarcichlid": true,
  "osprey": true,
  "ostrich": true,
  "ostrich_c": true,
  "otter": true,
  "otter_j": true,
  "oviraptor": true,
  "owl": true,
  "owl_j": true,
  "oystercatcher": true,
  "pachycephalosaurus": true,
  "pacifichagfish": true,
  "pallascat": true,
  "pallidbat": true,
  "panda": true,
  "panda_c": true,
  "pangolin": true,
  "parasaurolophus": true,
  "parr": true,
  "parrotfish": true,
  "partulasnail": true,
  "passengerpigeon": true,
  "peacock": true,
  "peacockspider": true,
  "peccary": true,
  "pegasus": true,
  "pelican": true,
  "penguin": true,
  "penguin_c": true,
  "penguin_j": true,
  "perculaclownfish": true,
  "peredavidsdeer": true,
  "peregrine": true,
  "peregrine_e": true,
  "persiancat": true,
  "petrabbit": true,
  "phayanaga": true,
  "philippineeagle": true,
  "phoenix": true,
  "piasa": true,
  "picassotriggerfish": true,
  "piedavocet": true,
  "pig": true,
  "pigfootedbandicoot": true,
  "pika": true,
  "pillmillipede": true,
  "pilotwhale": true,
  "pintatortoise": true,
  "pipefish": true,
  "pixiu": true,
  "placerias": true,
  "plateosaurus": true,
  "platyfish": true,
  "platypus": true,
  "platypus_p": true,
  "plesiosaurus": true,
  "polarbear": true,
  "polarbear_c": true,
  "polyp": true,
  "pompeiiworm": true,
  "poodle": true,
  "poouli": true,
  "porcupine": true,
  "porcupinepufferfish": true,
  "postosuchus": true,
  "potbellypig": true,
  "potoo": true,
  "prairiedog": true,
  "proboscis": true,
  "proganochelys": true,
  "pronghorn": true,
  "protoceratops": true,
  "przewalskishorse": true,
  "pteranodon": true,
  "pterodactylus": true,
  "puca": true,
  "pudu": true,
  "pufferfish": true,
  "puffin": true,
  "pug": true,
  "puma": true,
  "puppy": true,
  "purpleurchin": true,
  "pygmyhippo": true,
  "pyrelynx": true,
  "pyreneanibex": true,
  "python": true,
  "qilin": true,
  "qinglong": true,
  "quagga": true,
  "quakerparrot": true,
  "questingbeast": true,
  "quetzal": true,
  "quetzalcoatl": true,
  "quetzalcoatlus": true,
  "quokka": true,
  "quokka_j": true,
  "quoll": true,
  "rabbit": true,
  "rabbit_j": true,
  "raccoon": true,
  "raccoondog": true,
  "ragdollcat": true,
  "rainbowserpent": true,
  "ratatoskr": true,
  "rattlesnake": true,
  "raven": true,
  "redeyedtreefrog": true,
  "redfox": true,
  "redfox_j": true,
  "redknot": true,
  "redpanda": true,
  "redsquirrel": true,
  "redtailhawk": true,
  "redwolf": true,
  "reefshark": true,
  "regenthoneyeater": true,
  "reindeer": true,
  "rhamphorhynchus": true,
  "ribbonseal": true,
  "rightwhale": true,
  "rightwhale_c": true,
  "rimehorn": true,
  "ringedcaecilian": true,
  "ringtail": true,
  "ringtaillemur": true,
  "rissos": true,
  "roadrunner": true,
  "roc": true,
  "rockdove": true,
  "rockymountainlocust": true,
  "rosella": true,
  "rottweiler": true,
  "royalgramma": true,
  "ruddyturnstone": true,
  "russianblue": true,
  "rustypatchedbumblebee": true,
  "rustyspottedcat": true,
  "saharancheetah": true,
  "saiga": true,
  "sailfish": true,
  "saintbernard": true,
  "salmon": true,
  "samoyed": true,
  "sandcat": true,
  "saola": true,
  "sarimanok": true,
  "sarkoth": true,
  "sasquatch": true,
  "satinbowerbird": true,
  "savannahcat": true,
  "sawfish": true,
  "scalyfootsnail": true,
  "scarletmacaw": true,
  "schomburgksdeer": true,
  "scimitaroryx": true,
  "scorpion": true,
  "scottishfold": true,
  "seacucumber": true,
  "seahorse": true,
  "selkie": true,
  "seal": true,
  "seal_p": true,
  "sealamprey": true,
  "sealion": true,
  "sealion_p": true,
  "sealjuv": true,
  "sealpup": true,
  "seamink": true,
  "seaotter": true,
  "seasnake": true,
  "seasquirt": true,
  "secretarybird": true,
  "seiwhale": true,
  "seiwhale_c": true,
  "serpopard": true,
  "serval": true,
  "sha": true,
  "sheep": true,
  "shibainu": true,
  "shoebill": true,
  "shonisaurus": true,
  "shortfacedbear": true,
  "siamang": true,
  "siamesecat": true,
  "sifaka": true,
  "sigbin": true,
  "silkyanteater": true,
  "simurgh": true,
  "sitatunga": true,
  "sixlinewrasse": true,
  "skink": true,
  "skunk": true,
  "sleipnir": true,
  "slenderbilledcurlew": true,
  "sloth": true,
  "slothbear": true,
  "slothbear_c": true,
  "smilodon": true,
  "smolt": true,
  "snowleopard": true,
  "snowleopard_j": true,
  "snowyowl": true,
  "snubnosed": true,
  "socorrodove": true,
  "solenn": true,
  "southchinatiger": true,
  "spectacledbear": true,
  "spectacledbear_c": true,
  "spectacledflyingfox": true,
  "spermwhale": true,
  "spermwhale_c": true,
  "sphinx": true,
  "sphynxcat": true,
  "spidercrab": true,
  "spidermonkey": true,
  "spinner_c": true,
  "spinnerdolphin": true,
  "spinosaurus": true,
  "spixsmacaw": true,
  "splendidpoisonfrog": true,
  "spoonbill": true,
  "springbok": true,
  "stagbeetle": true,
  "stegosaurus": true,
  "stellerseacow": true,
  "stellerseagle": true,
  "steppebison": true,
  "stickinsect": true,
  "stingray": true,
  "stoat": true,
  "stork": true,
  "stripedhyena": true,
  "stymphbird": true,
  "styracosaurus": true,
  "sugarglider": true,
  "sumatranorangutan": true,
  "sumatranrhino": true,
  "sumatrantiger": true,
  "sunbear": true,
  "sunbear_c": true,
  "sundacolugo": true,
  "sunfishmola": true,
  "sunflowerstar": true,
  "swallowtail": true,
  "swan": true,
  "swanjuv": true,
  "swiftfox": true,
  "swordfish": true,
  "tabbycat": true,
  "taipan": true,
  "takin": true,
  "tamandua": true,
  "tamarin": true,
  "taniwha": true,
  "tanuki": true,
  "tanystropheus": true,
  "taotie": true,
  "tapanuliorangutan": true,
  "tapir": true,
  "tapir_c": true,
  "tardigrade": true,
  "tarsier": true,
  "tasdevil": true,
  "tawnyfrogmouth": true,
  "tayra": true,
  "tegu": true,
  "teneral": true,
  "tengu": true,
  "teumessian": true,
  "therizinosaurus": true,
  "thornydevil": true,
  "thresher": true,
  "thunderbird": true,
  "thylacine": true,
  "tibetanfox": true,
  "tiger": true,
  "tiger_j": true,
  "tigershark": true,
  "tikbalang": true,
  "tomatofrog": true,
  "toolachewallaby": true,
  "topi": true,
  "tortoise": true,
  "toucan": true,
  "treekangaroo": true,
  "triceratops": true,
  "triggerfish": true,
  "tuatara": true,
  "turkey": true,
  "turkishvan": true,
  "turtle": true,
  "tyrannosaurus": true,
  "uakari": true,
  "unicorn": true,
  "vampirebat": true,
  "vancouvermarmot": true,
  "vaquita": true,
  "velissa": true,
  "velociraptor": true,
  "velvetworm": true,
  "verdanmane": true,
  "vermilionflycatcher": true,
  "vervet": true,
  "victoriacrowned": true,
  "vicuna": true,
  "villageweaver": true,
  "viscacha": true,
  "volcanorabbit": true,
  "vulture": true,
  "wallaby": true,
  "wallaby_j": true,
  "walrus": true,
  "walrus_c": true,
  "weasel": true,
  "weddellseal": true,
  "weddellseal_p": true,
  "weedyseadragon": true,
  "whaleshark": true,
  "whiterhino": true,
  "whiterhino_c": true,
  "whitehart": true,
  "whitetail": true,
  "whitetentbat": true,
  "whoopingcrane": true,
  "wilddog": true,
  "wilddog_j": true,
  "wildebeest": true,
  "wobbegong": true,
  "wolf": true,
  "wolf_j": true,
  "wolfdog": true,
  "wolverine": true,
  "wombat": true,
  "wombat_j": true,
  "woodpecker": true,
  "woodthrush": true,
  "woollyrhino": true,
  "wrasse": true,
  "wyomingtoad": true,
  "wyvern": true,
  "xercesblue": true,
  "xmasislandpipistrelle": true,
  "xuanwu": true,
  "yak": true,
  "yali": true,
  "yangtzesofttshell": true,
  "yearlingelk": true,
  "zanzibarleopard": true,
  "zebra": true,
  "zebra_f": true,
  "zebradanio": true,
  "zebrafinch": true,
  "zebrashark": true,
  "ziz": true,
  "zmey": true,
  "zoea": true,
};

// ---------- SPRITE COMPONENT ----------
function Sprite({ sp, size = 48, flip, anim, still }) {
  const d = DEX[sp];
  const er = d.juv ? 1.35 : 1;
  const shadow = "drop-shadow(1px 2px 2px rgba(0,0,0,.3))";

  // Every animal breathes now, not just the two in a battle. A page of static
  // sprites reads as a printed chart; the same page with everything gently
  // moving reads as a room full of animals, and it costs one CSS animation.
  //
  // The delay is derived from the species name so it is stable across redraws
  // and spread across the cycle. Without that, thirty sprites in the field
  // guide rise and fall in perfect unison, which looks like a rendering fault
  // rather than like life.
  let stagger = 0;
  for (let i = 0; i < sp.length; i++) stagger = (stagger * 31 + sp.charCodeAt(i)) >>> 0;
  const delay = -((stagger % 250) / 100).toFixed(2);   // 0 to -2.5s into the cycle

  const motion = anim
    ? `${anim} ${anim === "floatY" ? 2.6 : 1.8}s ease-in-out infinite`
    : still ? undefined
    : `idleY 2.5s ease-in-out ${delay}s infinite`;

  return (
    <div style={{ animation: motion, display: "inline-flex", flexShrink: 0 }}>
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
/* ---------- NATURES ----------
   An individual temperament, rolled once when the animal is made and never
   changed. Three stats can move, so there are nine: six that trade one stat
   for another and three that trade nothing. The trade is ±10%.

   HP is deliberately untouched. A temperament should change how an animal
   behaves, not how much of it there is, and letting nature move HP makes the
   difference between two individuals of the same species feel like a
   different species instead of a different animal. */

const NATURES = {
  fierce:   { n: "Fierce",   up: "atk", dn: "def", d: "quick to escalate" },
  dogged:   { n: "Dogged",   up: "atk", dn: "spd", d: "commits, and does not let go" },
  wary:     { n: "Wary",     up: "def", dn: "atk", d: "watches the exits" },
  patient:  { n: "Patient",  up: "def", dn: "spd", d: "waits things out" },
  skittish: { n: "Skittish", up: "spd", dn: "atk", d: "moves before it thinks" },
  restless: { n: "Restless", up: "spd", dn: "def", d: "never quite settles" },
  even:     { n: "Even",     up: null,  dn: null,  d: "hard to rattle" },
  placid:   { n: "Placid",   up: null,  dn: null,  d: "unbothered by much" },
  gentle:   { n: "Gentle",   up: null,  dn: null,  d: "easy in the hand" },
};
const NATURE_KEYS = Object.keys(NATURES);

const natMul = (nat, stat) => {
  const N = NATURES[nat];
  if (!N) return 1;
  if (N.up === stat) return 1.1;
  if (N.dn === stat) return 0.9;
  return 1;
};

// A stat of 1 that a nature drops must not become 0, hence the floor.
const withNature = (v, nat, stat) => Math.max(1, Math.round(v * natMul(nat, stat)));

// Deterministic from the uid so a save written before natures existed gets the
// same temperament every time it is loaded, rather than a new animal each time.
const natureFor = (uid) => {
  let h = 0x811c9dc5;
  const s = "nat" + uid;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = (h * 0x01000193) >>> 0; }
  return NATURE_KEYS[h % NATURE_KEYS.length];
};

const mk = (sp, lvl) => {
  const d = DEX[sp];
  const moves = [...d.m, ...(d.l || []).filter(([L]) => L <= lvl).map(([, k]) => k)].slice(-4);
  const maxHp = statAt(d.b.h, lvl, true);
  const uid = UID++;
  const nat = NATURE_KEYS[Math.floor(Math.random() * NATURE_KEYS.length)];
  return { uid, sp, lvl, xp: 0, maxHp, hp: maxHp, sex: Math.random() < 0.5 ? "M" : "F", nat,
    moves, pp: moves.map((k) => maxPP(MOVES[k])),
    atk: withNature(statAt(d.b.a, lvl), nat, "atk"),
    def: withNature(statAt(d.b.d, lvl), nat, "def"),
    spd: withNature(statAt(d.b.s, lvl), nat, "spd") };
};
// Levelling curve. The quadratic term is what makes later levels cost more than
// earlier ones; raising it slightly stretches the back half of the game without
// making the first few levels feel slow, which is where a flat multiplier would
// have hurt. Roughly +12% at level 10, +17% at 30, +20% at 50.
const xpNeed = (lvl) => Math.floor(lvl * 28 + lvl * lvl * 0.62);

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

