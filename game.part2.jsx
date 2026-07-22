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
const felArt = (o) => (er) => (
  <g>
    {o.earTall ? (
      <g>
        <path d="M15,27 L11,5 L28,19 Z" fill={o.fur} />
        <path d="M18,24 L15,10 L25,18 Z" fill={o.inner || "#3a2c1a"} />
        <path d="M49,27 L53,5 L36,19 Z" fill={o.fur} />
        <path d="M46,24 L49,10 L39,18 Z" fill={o.inner || "#3a2c1a"} />
      </g>
    ) : (
      <g>
        <circle cx="20" cy="24" r="5.4" fill={o.fur} />
        <circle cx="44" cy="24" r="5.4" fill={o.fur} />
        <circle cx="20" cy="24" r="2.3" fill={o.inner || "#3a2c1a"} />
        <circle cx="44" cy="24" r="2.3" fill={o.inner || "#3a2c1a"} />
      </g>
    )}
    {o.tufts && <g stroke="#1e1611" strokeWidth="2" strokeLinecap="round"><path d="M18,17 L15,9" /><path d="M46,17 L49,9" /></g>}
    {o.ruff && <g fill={o.ruffC || "#e8e0d0"}><path d="M18,42 L9,47 L18,49 Z" /><path d="M46,42 L55,47 L46,49 Z" /></g>}
    <circle cx="32" cy="37" r="15" fill={o.fur} />
    {o.stripes && (
      <g stroke={o.markC || "#1e1611"} strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path d="M20,27 L25,31 M44,27 L39,31 M17,36 L23,37 M47,36 L41,37 M27,23 L28,27 M37,23 L36,27 M32,21 L32,25" />
      </g>
    )}
    {o.rosettes && (
      <g fill={o.markC || "#3a2c1a"}>
        <circle cx="21" cy="32" r="1.4" /><circle cx="43" cy="32" r="1.4" /><circle cx="24" cy="27" r="1.2" />
        <circle cx="40" cy="27" r="1.2" /><circle cx="32" cy="23.5" r="1.2" /><circle cx="19" cy="40" r="1.2" /><circle cx="45" cy="40" r="1.2" />
      </g>
    )}
    {o.spots && (
      <g fill={o.markC || "#3a2c1a"}>
        <circle cx="22" cy="30" r="1" /><circle cx="26" cy="26" r="1" /><circle cx="38" cy="26" r="1" /><circle cx="42" cy="30" r="1" />
        <circle cx="20" cy="38" r="1" /><circle cx="44" cy="38" r="1" /><circle cx="29" cy="23" r="1" /><circle cx="35" cy="23" r="1" />
      </g>
    )}
    <ellipse cx="32" cy="44" rx="8.5" ry="6.5" fill={o.muzzle || "#f3e3c3"} />
    {o.tear && (
      <g stroke="#1e1611" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M25.5,37.5 Q24,41 25,44" /><path d="M38.5,37.5 Q40,41 39,44" />
      </g>
    )}
    <path d="M29,41 L35,41 L32,45 Z" fill={o.nose || "#874f3d"} />
    <path d="M32,45 L32,47.5 M32,47.5 Q29,50 26.5,48.5 M32,47.5 Q35,50 37.5,48.5" stroke={o.nose || "#874f3d"} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <Eye x={25.5} y={34} r={2.9 * er} iris={o.iris || "#caa23a"} />
    <Eye x={38.5} y={34} r={2.9 * er} iris={o.iris || "#caa23a"} />
  </g>
);

// Parametric canine head
const canArt = (o) => (er) => (
  <g>
    {o.earRound ? (
      <g>
        <circle cx="18" cy="20" r="7" fill={o.fur} /><circle cx="18" cy="20" r="3.4" fill={o.inner || "#5c4038"} />
        <circle cx="46" cy="20" r="7" fill={o.fur} /><circle cx="46" cy="20" r="3.4" fill={o.inner || "#5c4038"} />
      </g>
    ) : (
      <g>
        <path d="M19,26 L14,5 L29,19 Z" fill={o.fur} />
        <path d="M21,22 L18,10 L26,18 Z" fill={o.inner || "#5c4038"} />
        <path d="M45,26 L50,5 L35,19 Z" fill={o.fur} />
        <path d="M43,22 L46,10 L38,18 Z" fill={o.inner || "#5c4038"} />
      </g>
    )}
    {o.crest && <path d="M24,24 L27,18 L30,23 L33,17 L36,23 L39,18 L42,24 Z" fill={o.crest} />}
    <ellipse cx="32" cy="39" rx="15" ry="13" fill={o.fur} />
    {o.mask && <path d="M19,34 Q32,28 45,34 L45,39 Q32,33 19,39 Z" fill={o.mask} />}
    {o.spots && (
      <g fill={o.markC || "#4c4438"}>
        <circle cx="22" cy="33" r="1.2" /><circle cx="42" cy="33" r="1.2" /><circle cx="25" cy="29" r="1" />
        <circle cx="39" cy="29" r="1" /><circle cx="20" cy="41" r="1.1" /><circle cx="44" cy="41" r="1.1" />
      </g>
    )}
    <ellipse cx="32" cy="46" rx="8" ry="6.5" fill={o.muzzle || "#d7d0c4"} />
    <circle cx="32" cy="44" r="2.6" fill="#26292e" />
    <path d="M32,46.5 L32,49 M32,49 Q29,51.5 26.5,50 M32,49 Q35,51.5 37.5,50" stroke={o.line || "#5c6068"} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <Eye x={25} y={36} r={2.8 * er} iris={o.iris || "#d9a43a"} />
    <Eye x={39} y={36} r={2.8 * er} iris={o.iris || "#d9a43a"} />
  </g>
);

const ART = {
  fennec: (er) => (
    <g>
      <path d="M13,32 L19,3 L30,27 Z" fill="#e3cba3" /><path d="M17,28 L20,10 L26,24 Z" fill="#efb69e" />
      <path d="M51,32 L45,3 L34,27 Z" fill="#e3cba3" /><path d="M47,28 L44,10 L38,24 Z" fill="#efb69e" />
      <ellipse cx="32" cy="41" rx="17" ry="15" fill="#ecd9b5" />
      <ellipse cx="32" cy="48" rx="8" ry="6" fill="#f8efdc" />
      <circle cx="32" cy="45.5" r="2.5" fill="#3a2d24" />
      <Eye x={25} y={38} r={3.1 * er} /><Eye x={39} y={38} r={3.1 * er} />
    </g>
  ),
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
  kestrel: (er) => (
    <g>
      <circle cx="32" cy="35" r="15" fill="#e8dcc3" />
      <path d="M17,35 A15,15 0 0 1 47,35 Z" fill="#7d8ca3" />
      <rect x="23.5" y="38" width="2.6" height="7.5" rx="1.3" fill="#37414f" /><rect x="37.9" y="38" width="2.6" height="7.5" rx="1.3" fill="#37414f" />
      <path d="M32,39 q4.5,1 3.5,5.5 q-3.5,2.4 -7,0 q-1,-4.5 3.5,-5.5 z" fill="#e8a23c" />
      <Eye x={25.5} y={34} r={3 * er} /><Eye x={38.5} y={34} r={3 * er} />
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
  lovebird: (er) => (
    <g>
      <circle cx="32" cy="34" r="15" fill="#6aa84f" />
      <ellipse cx="32" cy="39" rx="10.5" ry="9.5" fill="#f0956a" />
      <circle cx="25" cy="32" r="4.3" fill="#fff" /><circle cx="39" cy="32" r="4.3" fill="#fff" />
      <path d="M32,38 q5,0 4.2,5.2 q-4.2,3 -8.4,0 q-0.8,-5.2 4.2,-5.2 z" fill="#e8e3d0" />
      <Eye x={25} y={32} r={2.8 * er} /><Eye x={39} y={32} r={2.8 * er} />
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
  lion: (er) => (
    <g>
      <circle cx="20" cy="24" r="5.5" fill="#c9974d" /><circle cx="44" cy="24" r="5.5" fill="#c9974d" />
      <circle cx="20" cy="24" r="2.4" fill="#8a5f2c" /><circle cx="44" cy="24" r="2.4" fill="#8a5f2c" />
      <circle cx="32" cy="37" r="15" fill="#c9974d" />
      <ellipse cx="32" cy="45" rx="9" ry="7" fill="#ecd9b5" />
      <path d="M28,41.5 L36,41.5 L32,46 Z" fill="#7a4a35" />
      <path d="M32,46 L32,49 M32,49 Q28,52 25,50 M32,49 Q36,52 39,50" stroke="#7a4a35" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <Eye x={25} y={34} r={2.9 * er} iris="#b57e2e" /><Eye x={39} y={34} r={2.9 * er} iris="#b57e2e" />
    </g>
  ),
  owl: (er) => (
    <g>
      <path d="M19,23 L13,7 L27,17 Z" fill="#6e563c" /><path d="M45,23 L51,7 L37,17 Z" fill="#6e563c" />
      <circle cx="32" cy="37" r="16" fill="#8a6f4d" />
      <circle cx="24.5" cy="36" r="9.5" fill="#c8b190" /><circle cx="39.5" cy="36" r="9.5" fill="#c8b190" />
      <path d="M32,39 q3.2,1 2.2,6 q-2.2,1.6 -4.4,0 q-1,-5 2.2,-6 z" fill="#4c4238" />
      <Eye x={24.5} y={36} r={3 * er} iris="#e8912d" /><Eye x={39.5} y={36} r={3 * er} iris="#e8912d" />
    </g>
  ),
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
  flamingo: (er) => (
    <g>
      <path d="M34,38 Q22,42 20,52 Q28,54 34,48 Z" fill="#f08a9b" />
      <circle cx="36" cy="28" r="11" fill="#f08a9b" />
      <path d="M44,30 Q52,32 52,38 Q50,43 45,42 Q42,38 43,33 Z" fill="#f2c8ce" />
      <path d="M46,37 Q52,36 52,38 Q50,43 45,42 Z" fill="#1e1611" />
      <Eye x={33} y={26} r={2.5 * er} />
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
  hornbill: (er) => (
    <g>
      <path d="M20,20 Q32,10 46,16 Q44,22 38,23 Z" fill="#e8a23c" />
      <circle cx="32" cy="32" r="14" fill="#2e2b28" />
      <ellipse cx="24" cy="32" rx="5.5" ry="6.5" fill="#e8e0d0" /><ellipse cx="40" cy="32" rx="5.5" ry="6.5" fill="#e8e0d0" />
      <path d="M26,38 Q32,36 38,38 L36,52 Q32,56 28,52 Z" fill="#e8a23c" />
      <path d="M28,44 L36,43" stroke="#c97f1e" strokeWidth="1.3" />
      <Eye x={24} y={31} r={2.6 * er} iris="#d84b3a" /><Eye x={40} y={31} r={2.6 * er} iris="#d84b3a" />
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
  vulture: (er) => (
    <g>
      <path d="M14,44 Q12,30 22,26 Q20,36 24,42 Z" fill="#4c3b2e" />
      <path d="M50,44 Q52,30 42,26 Q44,36 40,42 Z" fill="#4c3b2e" />
      <path d="M18,46 Q32,34 46,46 Q46,56 32,58 Q18,56 18,46 Z" fill="#4c3b2e" />
      <path d="M20,45 Q32,36 44,45" stroke="#6b5a48" strokeWidth="2" fill="none" />
      <circle cx="32" cy="28" r="9.5" fill="#d9a08a" />
      <path d="M32,32 q4,0.5 3.2,5 q-3.2,2 -6.4,0 q-0.8,-4.5 3.2,-5 z" fill="#e8dcc3" />
      <path d="M32,36 q1.4,1.2 0.7,2.8" stroke="#b58a6a" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <Eye x={27.5} y={26} r={2.4 * er} iris="#e8912d" /><Eye x={36.5} y={26} r={2.4 * er} iris="#e8912d" />
    </g>
  ),
  penguin: (er) => (
    <g>
      <ellipse cx="32" cy="36" rx="15" ry="17" fill="#2e2b28" />
      <path d="M22,30 Q32,24 42,30 Q42,44 32,48 Q22,44 22,30 Z" fill="#f4f6f8" />
      <path d="M23,36 Q32,32 41,36 Q41,44 32,47 Q23,44 23,36 Z" fill="none" stroke="#2e2b28" strokeWidth="2.4" />
      <circle cx="32" cy="21" r="1.4" fill="#f08a9b" />
      <path d="M32,26 q3.4,0 2.8,4 q-2.8,1.8 -5.6,0 q-0.6,-4 2.8,-4 z" fill="#3c3833" />
      <Eye x={26} y={24} r={2.3 * er} /><Eye x={38} y={24} r={2.3 * er} />
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
const PHOTO_ART = { leopard: 1 };

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

