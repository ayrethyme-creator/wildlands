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
// --- crocodilians, and their armoured Triassic relatives ---
// Alligators, caimans and gharials were on the marine-reptile build, which
// gives them plesiosaur paddles. A crocodilian is the opposite animal: long and
// low to the ground on sprawled legs, armoured with scutes down the back, a
// heavy keeled tail that does the swimming, and eyes and nostrils riding on top
// of the skull so it can float with the rest submerged.
//
// The Triassic croc-line - aetosaurs, rauisuchians - used the same body but
// stood with the legs under it rather than out to the side, so `erect` switches
// the stance instead of needing a separate archetype.

// ================= SPECIALISED MAMMAL BUILDS =================
// Split out of the general hoofed and rodent archetypes, because a giraffe, a
// rhino, a hippo, a pig and a bison were all sharing one deer-shaped body and
// only differing by colour. Defined here in part6 so every later file can use
// them.

// --- rabbits, hares and pikas ---

// ================= INVERTEBRATE AND AMPHIBIAN BUILDS =================

// --- bees and wasps ---
// The generic insect build gave bees a narrow waist and long spindly legs, so
// they read as ants. A bee is the opposite: a fat furry thorax, a short rounded
// banded abdomen, and small wings it beats too fast to see clearly.

// ================= THE FISH THAT ARE NOT FISH-SHAPED =================
// A tuna outline does not cover an eel, a sunfish, an oarfish or an anglerfish.
// These are the shapes that need their own drawing.

// --- eels and morays ---

// ================= THE LAST OF THE ONE-OFFS =================
// Shapes that nothing else in the game shares.

// --- hedgehogs and tenrecs ---
const hogA = (o) => (er) => {
  const F = o.fur || "#a8906c";
  const SP = o.spineC || "#5c4a34";
  const g1 = gid("hgc", SP);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(SP, 0.22)} /><stop offset=".6" stopColor={SP} />
        <stop offset="1" stopColor={sh(SP, -0.26)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="51.6" rx="19" ry="2.2" fill="#000" opacity=".14" />
    {o.curled ? (
      /* rolled into a ball, which is the whole defence */
      <g>
        <circle cx="32" cy="34" r="19" fill={`url(#${g1})`} />
        <g stroke={sh(SP, -0.4)} strokeWidth="1.3" strokeLinecap="round">
          {Array.from({ length: 20 }).map((_, i) => {
            const a = (i / 20) * Math.PI * 2;
            return <path key={i} d={`M${32 + Math.cos(a) * 15},${34 + Math.sin(a) * 15}
              L${32 + Math.cos(a) * 22},${34 + Math.sin(a) * 22}`} />;
          })}
        </g>
      </g>
    ) : (
      <g>
        <g stroke={sh(F, -0.24)} strokeWidth="2.4" fill="none" strokeLinecap="round">
          <path d="M38,44 L38.4,49" /><path d="M24,43 L23.6,48" />
        </g>
        {/* the spiny mantle sits over the back like a cape, and stops well
            short of the face, which stays soft and furred */}
        <path d="M14,38 Q14,24 30,22 Q46,22 48,34 Q48,44 36,46 Q20,47 14,38 Z"
          fill={`url(#${g1})`} />
        <g stroke={sh(SP, -0.44)} strokeWidth="1.2" strokeLinecap="round">
          <path d="M17,32 L11,26 M22,27 L18,20 M28,24 L26,17 M35,23 L36,16
                   M42,25 L45,18 M46,30 L52,25 M47,37 L54,35 M44,43 L50,46
                   M36,46 L38,52 M27,46.6 L26,52.6 M19,43 L14,47" />
        </g>
        {/* the soft face poking out at the front */}
        <path d="M44,34 Q54,31 60,36 Q62,40 58,43 Q50,45 45,41 Z" fill={F} />
        <ellipse cx="59.6" cy="39.6" rx="2.4" ry="2" fill={o.noseC || "#3a2f2a"} />
        <circle cx="47.6" cy="32.6" r="2.6" fill={sh(F, -0.16)} />
        <g stroke={sh(F, -0.4)} strokeWidth=".4" fill="none" opacity=".6" strokeLinecap="round">
          <path d="M57,37 Q60.6,35 62.6,34.4" /><path d="M57.4,42 Q61,43 62.8,43.6" />
        </g>
        <Eye x={52} y={36.4} r={2 * er} iris={o.iris || "#1a1614"} />
      </g>
    )}
  </g>
  );
};

// --- scorpions ---
const scorpA = (o) => (er) => {
  const B = o.body || "#8a6a3a";
  const g1 = gid("scc", B);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, 0.26)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, -0.28)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="52.6" rx="20" ry="2.2" fill="#000" opacity=".14" />
    {/* the tail arched forward over the back, ending in the sting */}
    <path d="M18,42 Q8,40 6,30 Q5,20 14,16" stroke={`url(#${g1})`} strokeWidth="5"
      fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <g fill={sh(B, -0.2)}>
      {[[8.6,35],[6.6,28],[7.6,22],[11,17.6]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.8" />
      ))}
    </g>
    <path d="M14,16 Q19,13 20,17 Q18,20 14.6,19 Z" fill={o.stingC || sh(B, -0.34)} />
    {/* eight walking legs */}
    <g stroke={o.legC || sh(B, -0.24)} strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="28,44 20,50 22,54" /><polyline points="33,45 28,51 31,55" />
      <polyline points="38,45 40,51 37,55" /><polyline points="43,44 50,50 47,54" />
      <polyline points="28,38 18,36 14,30" /><polyline points="43,38 53,36 57,30" />
    </g>
    {/* the segmented body */}
    <g fill={`url(#${g1})`}>
      <ellipse cx="24" cy="42" rx="6" ry="5.4" /><ellipse cx="33" cy="42" rx="7" ry="6" />
      <ellipse cx="43" cy="40" rx="8" ry="6.6" />
    </g>
    <g stroke={sh(B, -0.36)} strokeWidth=".8" fill="none" opacity=".6">
      <path d="M28.6,38 Q28.6,42 28.6,46" /><path d="M38,37 Q38,41.6 38,45.6" />
    </g>
    {/* the pincers held out in front - a scorpion leads with these */}
    <g fill={o.clawC || sh(B, -0.12)}>
      <path d="M50,34 Q58,26 62,32 Q57,34 55,38 Q50,38 50,34 Z" />
      <path d="M55,29 Q61,25 63,30 Q58,30 56,33 Z" fill={sh(B, 0.24)} />
      <path d="M50,44 Q58,50 62,45 Q57,43 55,39.6 Q50,40 50,44 Z" />
      <path d="M55,48 Q61,51 63,46.6 Q58,46.6 56,44 Z" fill={sh(B, 0.24)} />
    </g>
    <Eye x={42} y={36} r={1.4 * er} iris={o.iris || "#1a1614"} />
    <Eye x={45.6} y={36.6} r={1.2 * er} iris={o.iris || "#1a1614"} />
  </g>
  );
};

// --- bats ---
// Membrane stretched between elongated finger bones, not feathers. Drawn
// hanging, because that is how a roosting bat is seen.
const batA = (o) => (er) => {
  const F = o.fur || "#5c4436";
  const W = o.wingC || sh(F, -0.14);
  const g1 = gid("bxc", F), g2 = gid("bxw", W);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, 0.2)} /><stop offset="1" stopColor={sh(F, -0.24)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(W, 0.14)} /><stop offset="1" stopColor={sh(W, -0.3)} />
      </linearGradient>
    </defs>
    {o.hanging ? (
      <g>
        {/* the branch it hangs from, and the feet gripping it */}
        <path d="M6,7 L58,7" stroke={o.perchC || "#5c4a34"} strokeWidth="3" strokeLinecap="round" />
        <g stroke={sh(F, -0.3)} strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M28,8 Q26,12 28,14" /><path d="M36,8 Q38,12 36,14" />
        </g>
        {/* wings furled around the body like a folded cloak */}
        <path d="M28,14 Q14,22 16,42 Q22,50 30,52 Q26,36 28,18 Z" fill={`url(#${g2})`} />
        <path d="M36,14 Q50,22 48,42 Q42,50 34,52 Q38,36 36,18 Z" fill={`url(#${g2})`} />
        <g stroke={sh(W, -0.4)} strokeWidth=".7" fill="none" opacity=".55">
          <path d="M27,20 Q19,28 19,40" /><path d="M37,20 Q45,28 45,40" />
        </g>
        <path d="M28,14 Q32,12 36,14 Q38,30 34,46 Q32,48 30,46 Q26,30 28,14 Z" fill={`url(#${g1})`} />
        {/* the head, upside down */}
        <ellipse cx="32" cy="50" rx="7" ry="6" fill={F} />
        <path d={o.bigEar
          ? "M27,52 Q22,60 25,62 Q28,57 29,53 Z" : "M27.6,52.6 Q24,58 26,59.4 Q28.6,56 29.4,53.6 Z"}
          fill={sh(F, -0.2)} />
        <path d={o.bigEar
          ? "M37,52 Q42,60 39,62 Q36,57 35,53 Z" : "M36.4,52.6 Q40,58 38,59.4 Q35.4,56 34.6,53.6 Z"}
          fill={sh(F, -0.2)} />
        {o.fox
          ? <path d="M32,54 Q37,55 38,50 Q36,58 32,58.6 Q28,58 26,50 Q27,55 32,54 Z" fill={o.muzzle || sh(F, 0.24)} />
          : <ellipse cx="32" cy="54.4" rx="3.4" ry="2.6" fill={o.muzzle || sh(F, 0.24)} />}
        <Eye x={29.4} y={49.4} r={(o.fox ? 2.2 : 1.6) * er} iris={o.iris || "#3a2a18"} />
        <Eye x={34.6} y={49.4} r={(o.fox ? 2.2 : 1.6) * er} iris={o.iris || "#3a2a18"} />
      </g>
    ) : (
      <g>
        {/* in flight, wings spread, with the finger bones showing through */}
        <path d="M30,28 Q16,16 2,20 Q10,26 12,36 Q20,34 30,32 Z" fill={`url(#${g2})`} />
        <path d="M34,28 Q48,16 62,20 Q54,26 52,36 Q44,34 34,32 Z" fill={`url(#${g2})`} />
        <g stroke={sh(W, -0.44)} strokeWidth=".8" fill="none" opacity=".7">
          <path d="M29,28 Q18,20 4,21" /><path d="M29,30 Q18,26 8,30" /><path d="M29,32 Q20,32 12,35" />
          <path d="M35,28 Q46,20 60,21" /><path d="M35,30 Q46,26 56,30" /><path d="M35,32 Q44,32 52,35" />
        </g>
        <ellipse cx="32" cy="34" rx="6" ry="10" fill={`url(#${g1})`} />
        <ellipse cx="32" cy="21" rx="6.6" ry="5.6" fill={F} />
        <path d="M27,17 Q24,9 28,10 Q29,14 30,17 Z" fill={sh(F, -0.2)} />
        <path d="M37,17 Q40,9 36,10 Q35,14 34,17 Z" fill={sh(F, -0.2)} />
        <ellipse cx="32" cy="24.4" rx="3.2" ry="2.4" fill={o.muzzle || sh(F, 0.24)} />
        <Eye x={29.6} y={20.4} r={1.6 * er} iris={o.iris || "#3a2a18"} />
        <Eye x={34.4} y={20.4} r={1.6 * er} iris={o.iris || "#3a2a18"} />
      </g>
    )}
  </g>
  );
};

// --- chameleons ---
const chamA = (o) => (er) => {
  const S = o.skin || "#6b9a4a";
  const g1 = gid("chc", S);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(S, -0.22)} /><stop offset=".55" stopColor={S} />
        <stop offset="1" stopColor={o.belly || sh(S, 0.36)} />
      </linearGradient>
    </defs>
    {/* the branch, since a chameleon is always gripping one */}
    <path d="M4,50 Q30,46 60,50" stroke={o.perchC || "#6b5238"} strokeWidth="3.4"
      fill="none" strokeLinecap="round" />
    {/* the prehensile tail, coiled */}
    <path d="M20,38 Q10,40 8,32 Q7,25 14,25 Q19,26 18,31"
      stroke={`url(#${g1})`} strokeWidth="4.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* mitten feet - two toes opposing three, which is how it grips */}
    <g stroke={sh(S, -0.2)} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="38,42 40,47 38,50" /><polyline points="26,41 24,46 26,50" />
    </g>
    <g stroke={sh(S, -0.34)} strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M38,50 L35.6,52 M38,50 L40.6,52" /><path d="M26,50 L23.6,52 M26,50 L28.6,52" />
    </g>
    {/* the body: tall and flattened side to side, with a serrated crest */}
    <path d="M44,28 Q50,32 49,38 Q47,44 40,45 Q30,47 24,44 Q18,40 19,33
             Q21,27 30,26 Q38,25 44,28 Z" fill={`url(#${g1})`} />
    <g fill={o.crestC || sh(S, -0.28)}>
      {[22,27,32,37,42].map((x,i)=>(<path key={i} d={`M${x},27 l1.6,-3.4 l1.6,3.4 Z`} />))}
    </g>
    {o.bands && (
      <g stroke={o.markC || sh(S, -0.36)} strokeWidth="2.2" fill="none" opacity=".7">
        <path d="M26,28 Q27,36 26,44" /><path d="M33,26.6 Q34,36 33,46" /><path d="M40,27 Q41,36 40,45" />
      </g>
    )}
    {/* the casque on the back of the head */}
    <path d="M44,28 Q48,14 56,20 Q52,24 50,30 Z" fill={o.casqueC || sh(S, -0.2)} />
    <path d="M46,29 Q56,26 61,31 Q63,35 59,38 Q50,40 45,35 Z" fill={S} />
    {/* the turret eye, which swivels independently of the other */}
    <circle cx="52" cy="32.6" r="4.4" fill={sh(S, -0.14)} />
    <g fill={o.markC || sh(S, -0.34)}>
      {Array.from({length:8}).map((_,i)=>{
        const a=(i/8)*Math.PI*2;
        return <circle key={i} cx={52+Math.cos(a)*3.2} cy={32.6+Math.sin(a)*3.2} r=".6" />;
      })}
    </g>
    <Eye x={53} y={32.6} r={2 * er} iris={o.iris || "#c9a43a"} />
    {/* the tongue, if it is hunting */}
    {o.tongue && (
      <g>
        <path d="M61,35 Q68,33 74,34" stroke={o.tongueC || "#e88aa8"} strokeWidth="1.8"
          fill="none" strokeLinecap="round" />
        <circle cx="75" cy="34" r="2.6" fill={o.tongueC || "#e88aa8"} />
      </g>
    )}
  </g>
  );
};

// --- sloths ---
const slothA = (o) => (er) => {
  const F = o.fur || "#a89478";
  const FACE = o.face || sh(F, 0.24);
  const g1 = gid("stc", F);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.2)} /><stop offset=".55" stopColor={F} />
        <stop offset="1" stopColor={sh(F, 0.24)} />
      </linearGradient>
    </defs>
    {/* the branch it hangs beneath, upside down, which is how it lives */}
    <path d="M2,10 Q32,6 62,10" stroke={o.perchC || "#5c4a34"} strokeWidth="4"
      fill="none" strokeLinecap="round" />
    {/* the long arms, hooked over the branch by the claws */}
    <g stroke={`url(#${g1})`} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20,12 18,26 26,34" /><polyline points="44,12 46,26 38,34" />
    </g>
    <g stroke={o.clawC || "#6b5a44"} strokeWidth="2" fill="none" strokeLinecap="round">
      <path d="M18,12 Q14,8 16,5" /><path d="M22,12 Q19,7 21,4.6" />
      <path d="M46,12 Q50,8 48,5" /><path d="M42,12 Q45,7 43,4.6" />
    </g>
    {/* the body slung below */}
    <ellipse cx="32" cy="36" rx="13" ry="12" fill={`url(#${g1})`} />
    {o.shaggy && (
      <g stroke={sh(F, -0.2)} strokeWidth="1" fill="none" opacity=".6" strokeLinecap="round">
        <path d="M22,30 L18,34 M22,38 L18,42 M42,30 L46,34 M42,38 L46,42 M28,46 L26,50 M36,46 L38,50" />
      </g>
    )}
    {o.algae && (
      <g fill={o.algaeC || "#6b8a4a"} opacity=".45">
        <ellipse cx="26" cy="32" rx="4" ry="2.6" transform="rotate(-20 26 32)" />
        <ellipse cx="38" cy="40" rx="4.4" ry="2.4" transform="rotate(16 38 40)" />
      </g>
    )}
    {/* hind legs, also hooked up */}
    <g stroke={`url(#${g1})`} strokeWidth="5.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="26,44 22,52 30,54" /><polyline points="38,44 42,52 34,54" />
    </g>
    {/* the head, upside down, with the fixed sloth expression */}
    <circle cx="32" cy="24" r="8.4" fill={F} />
    <ellipse cx="32" cy="25.6" rx="6.2" ry="5.6" fill={FACE} />
    {o.mask && (
      <g fill={o.maskC || sh(FACE, -0.34)}>
        <path d="M27,22 Q29,26 27.6,30 Q25.4,26 27,22 Z" />
        <path d="M37,22 Q35,26 36.4,30 Q38.6,26 37,22 Z" />
      </g>
    )}
    <ellipse cx="32" cy="28.6" rx="2.4" ry="1.8" fill={sh(FACE, -0.5)} />
    <path d="M29,23.6 Q32,22 35,23.6" stroke={sh(FACE, -0.4)} strokeWidth=".9" fill="none"
      strokeLinecap="round" />
    <Eye x={29} y={26} r={1.6 * er} iris={o.iris || "#3a2a18"} />
    <Eye x={35} y={26} r={1.6 * er} iris={o.iris || "#3a2a18"} />
  </g>
  );
};

const eelA = (o) => (er) => {
  const B = o.body || "#5c6a4a";
  const g1 = gid("elc", B);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, -0.22)} /><stop offset=".55" stopColor={B} />
        <stop offset="1" stopColor={o.belly || sh(B, 0.36)} />
      </linearGradient>
    </defs>
    {o.larva ? (
      /* a leptocephalus is a transparent leaf, which is why it was classified
         as a completely different animal until someone watched one change */
      <g>
        <path d="M6,32 Q20,18 40,24 Q54,29 60,32 Q54,35 40,40 Q20,46 6,32 Z"
          fill={o.body || "#dfe8ee"} opacity={o.glass ? 0.42 : 0.6} />
        <path d="M10,32 Q30,29 58,32" stroke={sh(B, -0.3)} strokeWidth=".8" fill="none" opacity=".7" />
        <g stroke={sh(B, -0.24)} strokeWidth=".5" fill="none" opacity=".55">
          <path d="M18,27 L18,37" /><path d="M26,25.6 L26,38.4" /><path d="M34,25.4 L34,38.6" />
          <path d="M42,26.6 L42,37.4" /><path d="M50,28.6 L50,35.4" />
        </g>
        <ellipse cx="58" cy="32" rx="3.4" ry="2.6" fill={o.body || "#dfe8ee"} opacity=".8" />
        <Eye x={58} y={31.4} r={1.5 * er} iris={o.iris || "#26221c"} />
      </g>
    ) : (
      <g>
        {/* one long ribbon of a body, thrown into an S */}
        <path d="M4,44 Q16,48 24,40 Q32,31 42,30 Q52,29 58,32"
          stroke={`url(#${g1})`} strokeWidth={o.thick ? 9 : 6.4} fill="none"
          strokeLinecap="round" strokeLinejoin="round" />
        {/* the fin running the whole length of the back, which is how an eel swims */}
        <path d="M6,40 Q16,43 24,35 Q32,26 42,25 Q52,24 58,27"
          stroke={o.finC || sh(B, -0.2)} strokeWidth="2.6" fill="none" strokeLinecap="round" opacity=".85" />
        {o.spots && (
          <g fill={o.markC || sh(B, 0.4)} opacity=".7">
            <circle cx="14" cy="45" r="1.7" /><circle cx="24" cy="40" r="1.6" />
            <circle cx="34" cy="32" r="1.6" /><circle cx="44" cy="30" r="1.5" />
          </g>
        )}
        {/* the blunt head and the gaping jaw a moray holds open to breathe */}
        <ellipse cx="58" cy="31" rx="7" ry="5.4" fill={B} />
        {o.gape ? (
          <g>
            <path d="M58,29 Q66,27.6 68,30 Q64,31.4 58,31.4 Z" fill={sh(B, -0.16)} />
            <path d="M58,32.6 Q66,33.6 68,31.4 Q64,34.6 58,34.6 Z" fill={sh(B, -0.16)} />
            <g fill="#f4ecd8">
              <path d="M61,30 l.9,0 l-.45,1.6 Z" /><path d="M63.4,30 l.9,0 l-.45,1.6 Z" />
              <path d="M61,33.4 l.9,0 l-.45,-1.6 Z" /><path d="M63.4,33.4 l.9,0 l-.45,-1.6 Z" />
            </g>
          </g>
        ) : (
          <path d="M60,32.6 Q64,34 66,32" stroke={sh(B, -0.4)} strokeWidth=".9" fill="none" strokeLinecap="round" />
        )}
        <Eye x={57} y={29.4} r={1.6 * er} iris={o.iris || "#c9a43a"} />
      </g>
    )}
  </g>
  );
};

// --- billfish, barracuda and the other long fast hunters ---
const elongA = (o) => (er) => {
  const B = o.body || "#3a6a9a";
  const BE = o.belly || sh(B, 0.5);
  const F = o.finC || sh(B, -0.24);
  const g1 = gid("egc", B);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, -0.24)} /><stop offset=".5" stopColor={B} />
        <stop offset="1" stopColor={BE} />
      </linearGradient>
    </defs>
    {o.ribbon ? (
      /* the oarfish: a silver ribbon with a red crest, and the longest bony
         fish in the sea */
      <g>
        <path d="M2,40 Q16,34 32,36 Q48,38 62,30" stroke={`url(#${g1})`} strokeWidth="8"
          fill="none" strokeLinecap="round" />
        <path d="M2,36 Q16,30 32,32 Q48,34 61,26" stroke={o.crestC || "#c94a4a"} strokeWidth="2.2"
          fill="none" strokeLinecap="round" />
        <g stroke={o.crestC || "#c94a4a"} strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M58,26 Q57,16 55,10" /><path d="M54,27 Q52,18 49,13" />
        </g>
        {o.spots && (
          <g fill={sh(B, -0.34)} opacity=".5">
            <circle cx="16" cy="38" r="1.8" /><circle cx="30" cy="36" r="1.7" /><circle cx="44" cy="35" r="1.6" />
          </g>
        )}
        <ellipse cx="60" cy="29" rx="5.4" ry="4.6" fill={B} />
        <Eye x={60} y={28} r={2 * er} iris={o.iris || "#26221c"} />
      </g>
    ) : (
      <g>
        {/* deeply forked tail for speed */}
        <path d="M12,32 Q4,22 1,26 Q5,32 1,38 Q5,42 12,36 Z" fill={F} />
        {/* the sail a marlin raises, or a low ridge on a barracuda */}
        {o.sail ? (
          <path d="M22,26 Q34,4 52,22 Q38,18 22,26 Z" fill={F} opacity=".92" />
        ) : (
          <path d="M26,27 Q34,20 42,27 Q34,25 26,27 Z" fill={F} />
        )}
        <path d="M26,39 Q34,46 42,39 Q34,41 26,39 Z" fill={F} />
        {/* long torpedo body */}
        <path d="M52,29 Q59,31 58.6,34 Q58,37.6 52,39 Q36,43 22,39.6 Q13,37 13,34
                 Q13,31 22,28.4 Q36,25 52,29 Z" fill={`url(#${g1})`} />
        {o.stripes && (
          <g stroke={o.markC || sh(B, -0.4)} strokeWidth="1.6" fill="none" opacity=".55">
            <path d="M22,29 Q23,34 22,39.4" /><path d="M30,27.6 Q31,34 30,41" />
            <path d="M38,28 Q39,34 38,40" /><path d="M46,29.4 Q47,34 46,39" />
          </g>
        )}
        <path d="M46,30 Q43,34 46,38.6" stroke={sh(B, -0.36)} strokeWidth="1" fill="none" opacity=".7" />
        {/* the bill, or the underslung jaw full of teeth */}
        {o.bill ? (
          <path d="M58,32.6 L78,30.6 L78.2,32.4 L58.4,35 Z" fill={sh(B, -0.14)} />
        ) : (
          <g>
            <path d="M58,33.6 Q64,33.6 66,36.6 Q61,37.6 57.6,36.6 Z" fill={sh(B, -0.1)} />
            <g fill="#f4ecd8">
              <path d="M59.6,35 l.8,0 l-.4,1.6 Z" /><path d="M61.6,35.2 l.8,0 l-.4,1.6 Z" />
              <path d="M63.4,35.6 l.8,0 l-.4,1.4 Z" />
            </g>
          </g>
        )}
        <Eye x={55} y={31.6} r={(o.bigEye ? 2.6 : 2) * er} iris={o.iris || "#26221c"} />
      </g>
    )}
  </g>
  );
};

// --- the ocean sunfish ---
// A mola is a head that swims: almost no tail, and fins above and below.
const molaA = (o) => (er) => {
  const B = o.body || "#9aa4ac";
  const g1 = gid("mlc2", B);
  return (
  <g>
    <defs>
      <radialGradient id={g1} cx=".46" cy=".38" r=".72">
        <stop offset="0" stopColor={sh(B, 0.3)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, -0.3)} />
      </radialGradient>
    </defs>
    {/* the clavus: a stubby rudder where a tail should be */}
    <path d="M18,26 Q10,32 18,40 Q14,33 18,26 Z" fill={sh(B, -0.2)} />
    <path d="M20,25 Q11,32 20,41 L24,38 Q20,32 24,28 Z" fill={sh(B, -0.16)} />
    {/* the tall dorsal and anal fins it sculls with */}
    <path d="M34,20 Q36,2 44,20 Q39,17 34,20 Z" fill={sh(B, -0.18)} />
    <path d="M34,46 Q36,62 44,46 Q39,49 34,46 Z" fill={sh(B, -0.18)} />
    {/* the disc */}
    <ellipse cx="40" cy="33" rx="19" ry="16" fill={`url(#${g1})`} />
    {o.mottle && (
      <g fill={sh(B, 0.34)} opacity=".5">
        <circle cx="34" cy="27" r="2.4" /><circle cx="44" cy="25" r="2.2" />
        <circle cx="48" cy="34" r="2.2" /><circle cx="36" cy="40" r="2" />
        <circle cx="46" cy="42" r="1.9" />
      </g>
    )}
    <path d="M52,27 Q49,33 52,39" stroke={sh(B, -0.34)} strokeWidth="1.2" fill="none" opacity=".7" />
    {/* the small round mouth it cannot close */}
    <ellipse cx="58.6" cy="34" rx="2.4" ry="2.2" fill={sh(B, -0.4)} />
    <Eye x={55} y={29} r={2.4 * er} iris={o.iris || "#26221c"} />
  </g>
  );
};

// --- anglerfish ---
const anglerA = (o) => (er) => {
  const B = o.body || "#2e2a30";
  const g1 = gid("agc", B);
  return (
  <g>
    <defs>
      <radialGradient id={g1} cx=".4" cy=".36" r=".76">
        <stop offset="0" stopColor={sh(B, 0.34)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, -0.3)} />
      </radialGradient>
    </defs>
    {/* the lure, on a modified fin ray, with its glow */}
    <path d="M40,20 Q44,10 52,8" stroke={sh(B, 0.2)} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <circle cx="53.6" cy="7.4" r="5" fill={o.lureC || "#9ae8d4"} opacity=".28" />
    <circle cx="53.6" cy="7.4" r="2.6" fill={o.lureC || "#9ae8d4"} />
    <path d="M14,34 Q6,28 3,32 Q7,36 3,42 Q8,44 15,38 Z" fill={sh(B, -0.14)} />
    {/* a mouth-heavy, almost spherical body */}
    <ellipse cx="34" cy="36" rx="21" ry="17" fill={`url(#${g1})`} />
    {o.warts && (
      <g fill={sh(B, 0.3)} opacity=".5">
        <circle cx="26" cy="28" r="1.6" /><circle cx="36" cy="26" r="1.5" />
        <circle cx="24" cy="40" r="1.5" /><circle cx="34" cy="44" r="1.4" />
      </g>
    )}
    <g stroke={sh(B, 0.2)} strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M28,50 Q26,56 30,58" /><path d="M40,50 Q42,56 38,58" />
    </g>
    {/* the enormous gape, and teeth that stop prey backing out */}
    <path d="M40,32 Q56,30 60,40 Q54,48 40,45 Q34,40 40,32 Z" fill={sh(B, -0.26)} />
    <g fill="#f2ecd8">
      <path d="M42,34 l1.4,0 l-.7,3.4 Z" /><path d="M46,32.8 l1.4,0 l-.7,3.6 Z" />
      <path d="M50,32.6 l1.4,0 l-.7,3.4 Z" /><path d="M54,33.6 l1.4,0 l-.7,3 Z" />
      <path d="M42.4,43.6 l1.4,0 l-.7,-3.2 Z" /><path d="M46.4,44.6 l1.4,0 l-.7,-3.4 Z" />
      <path d="M50.4,44.6 l1.4,0 l-.7,-3.2 Z" /><path d="M54,43.4 l1.4,0 l-.7,-2.8 Z" />
    </g>
    <Eye x={44} y={26} r={2 * er} iris={o.iris || "#e8dcc3"} />
  </g>
  );
};

// --- lionfish ---
// The venomous fin rays are the animal; drawn as a fan around the whole body.
const lionfishA = (o) => (er) => {
  const B = o.body || "#e8dcc3";
  const S = o.stripeC || "#a83a2a";
  const g1 = gid("lfc", B);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, 0.16)} /><stop offset="1" stopColor={sh(B, -0.2)} />
      </linearGradient>
    </defs>
    {/* the spines, radiating out and back */}
    <g stroke={S} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity=".92">
      <path d="M32,26 L26,6" /><path d="M36,25 L34,4" /><path d="M40,26 L42,5" />
      <path d="M44,28 L50,9" /><path d="M28,28 L18,12" />
      <path d="M30,42 L24,58" /><path d="M36,44 L34,60" /><path d="M42,42 L48,58" />
      <path d="M26,36 L6,30" /><path d="M27,39 L8,42" />
    </g>
    <g stroke={o.membC || "#f2e2d8"} strokeWidth="4.4" fill="none" opacity=".28" strokeLinecap="round">
      <path d="M32,26 L26,6" /><path d="M36,25 L34,4" /><path d="M40,26 L42,5" />
      <path d="M30,42 L24,58" /><path d="M36,44 L34,60" /><path d="M42,42 L48,58" />
    </g>
    <path d="M18,32 Q10,26 6,30 Q10,34 6,38 Q11,42 18,37 Z" fill={S} opacity=".7" />
    {/* the small striped body under all of it */}
    <ellipse cx="40" cy="34" rx="17" ry="10" fill={`url(#${g1})`} />
    <g stroke={S} strokeWidth="2.6" fill="none" opacity=".92">
      <path d="M28,26.6 Q29,34 28,41.4" /><path d="M34,25.6 Q35,34 34,42.4" />
      <path d="M40,25.4 Q41,34 40,42.6" /><path d="M46,26.6 Q47,34 46,41.4" />
      <path d="M52,29 Q53,34 52,39" />
    </g>
    <path d="M54,34 Q58,36.6 60,34" stroke={sh(B, -0.4)} strokeWidth="1" fill="none" strokeLinecap="round" />
    <Eye x={53} y={31} r={2.1 * er} iris={o.iris || "#c9a43a"} />
  </g>
  );
};

const beeA = (o) => (er) => {
  const B = o.body || "#e8b03a";
  const D = o.bandC || "#2e2a22";
  const FZ = o.fuzzC || sh(B, 0.34);
  const g1 = gid("bec", B);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, 0.24)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, -0.24)} />
      </linearGradient>
    </defs>
    {/* two pairs of small wings, the hind pair shorter */}
    <g fill={o.wingC || "#dfe8f2"} opacity=".6">
      <ellipse cx="24" cy="20" rx="14" ry="6.4" transform="rotate(-22 24 20)" />
      <ellipse cx="42" cy="19" rx="13" ry="6" transform="rotate(20 42 19)" />
      <ellipse cx="26" cy="27" rx="9" ry="4" transform="rotate(-12 26 27)" />
      <ellipse cx="40" cy="26" rx="8.6" ry="3.8" transform="rotate(10 40 26)" />
    </g>
    <g stroke={sh(o.wingC || "#dfe8f2", -0.3)} strokeWidth=".5" fill="none" opacity=".5">
      <path d="M28,22 Q20,18 13,16" /><path d="M38,21 Q46,18 52,16" />
    </g>
    {/* short legs, with the pollen basket a worker carries */}
    <g stroke={o.legC || "#3a342b"} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="27,36 22,42 24,47" /><polyline points="33,37 32,44 36,48" />
      <polyline points="38,35 44,41 42,46" />
    </g>
    {o.pollen && (
      <g fill={o.pollenC || "#e8d44a"}>
        <ellipse cx="23" cy="44" rx="3" ry="3.6" /><ellipse cx="43" cy="43.4" rx="2.8" ry="3.4" />
      </g>
    )}
    {/* the fat rounded abdomen, banded */}
    <ellipse cx="32" cy="40" rx="11" ry="12.4" fill={`url(#${g1})`} />
    <g fill={D}>
      <path d="M21.4,36.4 Q32,34.4 42.6,36.4 Q32,38.4 21.4,36.4 Z" />
      <path d="M21.6,42 Q32,40 42.4,42 Q32,44 21.6,42 Z" />
      <path d="M24,47.4 Q32,46 40,47.4 Q32,49.4 24,47.4 Z" />
    </g>
    {o.sting && <path d="M32,52.4 L30.6,51 L33.4,51 Z" fill={sh(D, 0.2)} />}
    {/* the furry thorax - a bee's defining texture */}
    <ellipse cx="32" cy="26" rx="9.4" ry="8" fill={FZ} />
    <g stroke={sh(FZ, -0.24)} strokeWidth="1" fill="none" opacity=".7" strokeLinecap="round">
      <path d="M25,22 L23,19 M29,20 L28,16.6 M35,20 L36,16.6 M39,22 L41,19" />
      <path d="M24,29 L21,30 M40,29 L43,30" />
    </g>
    {/* head with big compound eyes */}
    <ellipse cx="32" cy="14" rx="7" ry="6" fill={o.head || "#2e2a22"} />
    <g stroke={o.antC || "#2e2a22"} strokeWidth="1.2" fill="none" strokeLinecap="round">
      <path d="M28,10 Q25,4 20,2" /><path d="M36,10 Q39,4 44,2" />
    </g>
    <ellipse cx="27.4" cy="13.4" rx="2.6" ry="3.4" fill={sh(o.head || "#2e2a22", 0.4)} />
    <ellipse cx="36.6" cy="13.4" rx="2.6" ry="3.4" fill={sh(o.head || "#2e2a22", 0.4)} />
    <Eye x={27.4} y={13.4} r={1.7 * er} iris={o.iris || "#1a1614"} />
    <Eye x={36.6} y={13.4} r={1.7 * er} iris={o.iris || "#1a1614"} />
  </g>
  );
};

// --- mantises, stick insects and leaf insects ---
const mantidA = (o) => (er) => {
  const B = o.body || "#6b9a4a";
  const g1 = gid("mtc", B);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={sh(B, 0.24)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, -0.26)} />
      </linearGradient>
    </defs>
    {o.leaf ? (
      /* a leaf insect is a walking leaf: broad flat body with a midrib */
      <g>
        <path d="M32,6 Q48,20 44,44 Q38,56 32,58 Q26,56 20,44 Q16,20 32,6 Z" fill={`url(#${g1})`} />
        <path d="M32,8 L32,56" stroke={sh(B, -0.3)} strokeWidth="1.2" fill="none" />
        <g stroke={sh(B, -0.26)} strokeWidth=".7" fill="none" opacity=".8">
          <path d="M32,16 L22,22 M32,24 L21,30 M32,32 L22,39 M32,40 L24,46" />
          <path d="M32,16 L42,22 M32,24 L43,30 M32,32 L42,39 M32,40 L40,46" />
        </g>
        <g stroke={o.legC || sh(B, -0.34)} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22,20 12,22 8,30" /><polyline points="42,20 52,22 56,30" />
          <polyline points="22,34 12,38 10,46" /><polyline points="42,34 52,38 54,46" />
        </g>
        <ellipse cx="32" cy="9" rx="4.4" ry="3.6" fill={sh(B, -0.14)} />
        <Eye x={30} y={8.4} r={1.3 * er} iris={o.iris || "#1a1614"} />
        <Eye x={34} y={8.4} r={1.3 * er} iris={o.iris || "#1a1614"} />
      </g>
    ) : o.stick ? (
      /* a stick insect is a twig with legs, so it should be nearly all length */
      <g>
        <path d="M30,4 Q34,20 33,36 Q32,50 34,60" stroke={`url(#${g1})`} strokeWidth="4.4"
          fill="none" strokeLinecap="round" />
        <g stroke={sh(B, -0.3)} strokeWidth=".7" fill="none" opacity=".7">
          <path d="M31,14 L34,14 M32,24 L35,24 M32,34 L35,34 M32.6,44 L35.6,44" />
        </g>
        <g stroke={o.legC || sh(B, -0.2)} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="31,12 18,10 8,16" /><polyline points="32,14 46,12 56,18" />
          <polyline points="33,28 20,30 12,38" /><polyline points="33,30 46,32 54,40" />
          <polyline points="33,42 22,46 16,54" /><polyline points="33,44 44,48 50,56" />
        </g>
        <ellipse cx="30" cy="5" rx="3.4" ry="2.8" fill={sh(B, -0.14)} />
        <g stroke={sh(B, -0.3)} strokeWidth=".9" fill="none" strokeLinecap="round">
          <path d="M28,3 Q24,-1 19,-2" /><path d="M32,3 Q36,-1 41,-2" />
        </g>
        <Eye x={28.6} y={4.4} r={1.2 * er} iris={o.iris || "#1a1614"} />
        <Eye x={31.6} y={4.4} r={1.2 * er} iris={o.iris || "#1a1614"} />
      </g>
    ) : (
      /* the mantis: upright, with the folded raptorial forelegs held ready */
      <g>
        <ellipse cx="30" cy="55" rx="13" ry="2" fill="#000" opacity=".13" />
        {o.wings && (
          <path d="M28,26 Q22,40 26,54 Q34,52 34,32 Z" fill={o.wingC || sh(B, 0.24)} opacity=".85" />
        )}
        {/* the long abdomen, curled up at the tip */}
        <path d="M30,28 Q26,40 28,50 Q31,56 36,52" stroke={`url(#${g1})`} strokeWidth="7"
          fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* walking legs */}
        <g stroke={o.legC || sh(B, -0.24)} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="28,32 18,38 14,48" /><polyline points="32,32 42,38 46,48" />
          <polyline points="28,26 16,28 10,36" /><polyline points="33,26 45,28 51,36" />
        </g>
        {/* the elongated thorax that holds the strike */}
        <path d="M31,10 Q35,18 32,28" stroke={`url(#${g1})`} strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* raptorial forelegs, folded and spined */}
        <g stroke={sh(B, -0.14)} strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="30,16 20,22 26,30" /><polyline points="34,16 44,22 38,30" />
        </g>
        <g stroke={o.spineC || sh(B, -0.5)} strokeWidth=".9" fill="none" strokeLinecap="round">
          <path d="M23,24 L21,26 M26,26 L24,28.6 M41,24 L43,26 M38,26 L40,28.6" />
        </g>
        {/* the triangular head that swivels */}
        <path d="M25,10 Q32,4 39,10 Q35,14 32,14 Q29,14 25,10 Z" fill={o.head || sh(B, 0.14)} />
        <g stroke={sh(B, -0.34)} strokeWidth="1" fill="none" strokeLinecap="round">
          <path d="M28,6.6 Q24,2 19,0.6" /><path d="M36,6.6 Q40,2 45,0.6" />
        </g>
        <Eye x={26.6} y={9} r={2.4 * er} iris={o.iris || "#e8dcc3"} />
        <Eye x={37.4} y={9} r={2.4 * er} iris={o.iris || "#e8dcc3"} />
      </g>
    )}
  </g>
  );
};

// --- beetles ---
const beetleA = (o) => (er) => {
  const B = o.body || "#3a2f26";
  const EL = o.elytra || B;
  const g1 = gid("btc", EL);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={sh(EL, 0.34)} /><stop offset=".5" stopColor={EL} />
        <stop offset="1" stopColor={sh(EL, -0.3)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="57" rx="15" ry="2" fill="#000" opacity=".14" />
    {/* six legs from the thorax, jointed */}
    <g stroke={o.legC || sh(B, -0.2)} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="24,30 12,32 8,40" /><polyline points="40,30 52,32 56,40" />
      <polyline points="23,40 12,44 10,52" /><polyline points="41,40 52,44 54,52" />
      <polyline points="25,48 16,54 18,58" /><polyline points="39,48 48,54 46,58" />
    </g>
    {/* the elytra: a hard domed shell with a seam down the middle */}
    <ellipse cx="32" cy="40" rx="14" ry="17" fill={`url(#${g1})`} />
    <path d="M32,24 L32,56" stroke={sh(EL, -0.44)} strokeWidth="1.2" fill="none" />
    <g stroke={sh(EL, -0.3)} strokeWidth=".7" fill="none" opacity=".6">
      <path d="M26,26 Q24,40 26,54" /><path d="M38,26 Q40,40 38,54" />
    </g>
    {o.spots && (
      <g fill={o.markC || "#2e2a22"}>
        <circle cx="26" cy="34" r="2.6" /><circle cx="38" cy="34" r="2.6" />
        <circle cx="25" cy="46" r="2.2" /><circle cx="39" cy="46" r="2.2" />
      </g>
    )}
    {o.glow && <ellipse cx="32" cy="53" rx="6" ry="4" fill={o.glowC || "#e8f24a"} opacity=".9" />}
    {/* pronotum, the shield behind the head */}
    <path d="M24,26 Q32,20 40,26 Q36,30 32,30 Q28,30 24,26 Z" fill={sh(B, 0.1)} />
    <ellipse cx="32" cy="18" rx="6" ry="5" fill={B} />
    {/* the headgear that makes a rhinoceros or stag beetle */}
    {o.horn && (
      <path d="M32,14 Q31,4 36,2 Q34,7 34.6,13 Z" fill={o.hornC || sh(B, 0.2)} />
    )}
    {o.mandibles && (
      <g fill={o.hornC || sh(B, 0.16)}>
        <path d="M28,14 Q22,6 24,2 Q28,7 30,13 Z" /><path d="M36,14 Q42,6 40,2 Q36,7 34,13 Z" />
        <path d="M25,5 L21,3 L25,8 Z" /><path d="M39,5 L43,3 L39,8 Z" />
      </g>
    )}
    <g stroke={o.antC || sh(B, 0.2)} strokeWidth="1.1" fill="none" strokeLinecap="round">
      <path d="M28,15 Q23,12 19,13" /><path d="M36,15 Q41,12 45,13" />
    </g>
    <Eye x={28.6} y={17} r={1.5 * er} iris={o.iris || "#1a1614"} />
    <Eye x={35.4} y={17} r={1.5 * er} iris={o.iris || "#1a1614"} />
  </g>
  );
};

// --- dragonflies and damselflies ---
const odonA = (o) => (er) => {
  const B = o.body || "#3a8a9a";
  const g1 = gid("odc", B);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, 0.3)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, -0.28)} />
      </linearGradient>
    </defs>
    {o.nymph ? (
      /* the naiad: squat, wingless, and armed with the hinged jaw it fires out */
      <g>
        <path d="M18,32 Q10,30 4,34 Q10,36 18,36 Z" fill={sh(B, -0.2)} />
        <ellipse cx="30" cy="34" rx="14" ry="8" fill={`url(#${g1})`} />
        <g stroke={sh(B, -0.34)} strokeWidth=".8" fill="none" opacity=".6">
          <path d="M24,27 Q24,34 24,41" /><path d="M32,27 Q32,34 32,41" />
        </g>
        <g stroke={o.legC || sh(B, -0.24)} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="28,40 24,48 28,52" /><polyline points="36,40 40,48 36,52" />
          <polyline points="26,28 20,22 22,17" /><polyline points="36,28 42,22 40,17" />
        </g>
        <ellipse cx="46" cy="32" rx="7" ry="6" fill={sh(B, 0.1)} />
        {/* the extendable labium folded under the head */}
        <path d="M48,36 Q54,40 60,38 Q54,42 47,40 Z" fill={sh(B, -0.3)} />
        <Eye x={44} y={29.4} r={2.6 * er} iris={o.iris || "#1a1614"} />
        <Eye x={50} y={30.4} r={2.6 * er} iris={o.iris || "#1a1614"} />
      </g>
    ) : (
      <g>
        {/* four long narrow wings, held out flat rather than folded */}
        <g fill={o.wingC || "#dfeaf2"} opacity=".55">
          <ellipse cx="16" cy="22" rx="17" ry="4" transform="rotate(-8 16 22)" />
          <ellipse cx="48" cy="22" rx="17" ry="4" transform="rotate(8 48 22)" />
          <ellipse cx="17" cy="30" rx="16" ry="3.6" transform="rotate(6 17 30)" />
          <ellipse cx="47" cy="30" rx="16" ry="3.6" transform="rotate(-6 47 30)" />
        </g>
        <g stroke={sh(o.wingC || "#dfeaf2", -0.34)} strokeWidth=".45" fill="none" opacity=".7">
          <path d="M30,22 L2,21" /><path d="M34,22 L62,21" />
          <path d="M30,30 L3,31" /><path d="M34,30 L61,31" />
        </g>
        {o.wingSpot && (
          <g fill={o.spotC || "#2e2a22"} opacity=".8">
            <ellipse cx="6" cy="21" rx="2.6" ry="1.6" /><ellipse cx="58" cy="21" rx="2.6" ry="1.6" />
          </g>
        )}
        {/* the very long thin abdomen */}
        <path d="M32,28 Q33,42 32,58" stroke={`url(#${g1})`} strokeWidth={o.damsel ? 3 : 4.6}
          fill="none" strokeLinecap="round" />
        <g stroke={sh(B, -0.4)} strokeWidth=".8" fill="none" opacity=".7">
          <path d="M30,36 L34,36 M30,42 L34,42 M30.4,48 L34.4,48 M30.6,54 L34,54" />
        </g>
        <ellipse cx="32" cy="26" rx="5" ry="5.4" fill={sh(B, 0.1)} />
        {/* the head is almost entirely eye */}
        <ellipse cx="32" cy="16" rx="8.4" ry="6.4" fill={o.head || sh(B, 0.2)} />
        <Eye x={28} y={15} r={4 * er} iris={o.iris || "#2e6a7a"} />
        <Eye x={36} y={15} r={4 * er} iris={o.iris || "#2e6a7a"} />
      </g>
    )}
  </g>
  );
};

// --- cicadas ---
const cicadaA = (o) => (er) => {
  const B = o.body || "#4a5c3a";
  const g1 = gid("ccc", B);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(B, 0.24)} /><stop offset=".6" stopColor={B} />
        <stop offset="1" stopColor={sh(B, -0.28)} />
      </linearGradient>
    </defs>
    {o.nymph ? (
      /* the nymph: pale, wingless, with the shovel forelegs it digs with */
      <g>
        <ellipse cx="32" cy="38" rx="12" ry="15" fill={`url(#${g1})`} />
        <g stroke={sh(B, -0.3)} strokeWidth=".9" fill="none" opacity=".6">
          <path d="M21,36 Q32,34 43,36" /><path d="M22,42 Q32,40 42,42" /><path d="M24,48 Q32,46.6 40,48" />
        </g>
        <ellipse cx="32" cy="20" rx="9" ry="7.4" fill={sh(B, 0.14)} />
        <g stroke={o.legC || sh(B, -0.24)} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="24,22 14,26 12,34" /><polyline points="40,22 50,26 52,34" />
        </g>
        <g fill={sh(B, -0.3)}>
          <path d="M12,32 q-5,2 -4,7 q4,-3 6,-4 Z" /><path d="M52,32 q5,2 4,7 q-4,-3 -6,-4 Z" />
        </g>
        <Eye x={27.4} y={19} r={1.8 * er} iris={o.iris || "#8a3a2a"} />
        <Eye x={36.6} y={19} r={1.8 * er} iris={o.iris || "#8a3a2a"} />
      </g>
    ) : (
      <g>
        {/* the broad wings held roof-like over the body */}
        <g fill={o.wingC || "#e2e8ee"} opacity=".55">
          <path d="M30,22 Q14,32 8,54 Q22,46 31,32 Z" />
          <path d="M34,22 Q50,32 56,54 Q42,46 33,32 Z" />
        </g>
        <g stroke={o.veinC || sh(B, -0.2)} strokeWidth=".6" fill="none" opacity=".75">
          <path d="M30,24 Q18,34 11,50" /><path d="M30,26 Q20,36 15,50" />
          <path d="M34,24 Q46,34 53,50" /><path d="M34,26 Q44,36 49,50" />
        </g>
        {/* stout tapering body */}
        <path d="M27,22 Q32,20 37,22 Q38,36 32,46 Q26,36 27,22 Z" fill={`url(#${g1})`} />
        <g stroke={sh(B, -0.4)} strokeWidth=".8" fill="none" opacity=".7">
          <path d="M28,30 Q32,31 36,30" /><path d="M28.6,36 Q32,37 35.4,36" />
        </g>
        <g stroke={o.legC || sh(B, -0.24)} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="27,24 20,30 22,36" /><polyline points="37,24 44,30 42,36" />
        </g>
        {/* the wide blunt head with eyes set right out at the corners */}
        <path d="M23,16 Q32,10 41,16 Q38,22 32,22 Q26,22 23,16 Z" fill={sh(B, 0.16)} />
        <Eye x={24.6} y={16.6} r={2.6 * er} iris={o.iris || "#8a3a2a"} />
        <Eye x={39.4} y={16.6} r={2.6 * er} iris={o.iris || "#8a3a2a"} />
      </g>
    )}
  </g>
  );
};

// --- snails and slugs ---
const snailA = (o) => (er) => {
  const SHc = o.shell || "#c9a04a";
  const BD = o.body || "#c9b8a8";
  const g1 = gid("snc", SHc);
  return (
  <g>
    <defs>
      <radialGradient id={g1} cx=".42" cy=".36" r=".76">
        <stop offset="0" stopColor={sh(SHc, 0.36)} /><stop offset=".6" stopColor={SHc} />
        <stop offset="1" stopColor={sh(SHc, -0.3)} />
      </radialGradient>
    </defs>
    <ellipse cx="32" cy="52.6" rx="20" ry="2.2" fill="#000" opacity=".13" />
    {/* the muscular foot it glides on, with a slime trail */}
    <path d="M8,50 Q14,44 26,44 L48,44 Q56,45 56,49 Q52,52 40,52 L16,52 Q8,52 8,50 Z" fill={BD} />
    <path d="M6,51.6 Q16,53.6 30,53.4" stroke={sh(BD, 0.4)} strokeWidth="1.2" fill="none" opacity=".6" />
    {o.slug ? (
      /* a slug carries the mantle as a saddle instead of a shell */
      <g>
        <path d="M18,44 Q22,30 34,29 Q46,29 50,40 Q48,45 40,45 L22,45 Z" fill={sh(BD, -0.12)} />
        <ellipse cx="30" cy="36" rx="10" ry="6" fill={o.mantleC || sh(BD, -0.24)} />
      </g>
    ) : (
      <g>
        {/* the coiled shell, wound the way a real one is */}
        <circle cx="28" cy="30" r="15" fill={`url(#${g1})`} />
        <g fill="none" stroke={o.bandC || sh(SHc, -0.34)} strokeWidth="2.2" opacity=".85">
          <path d="M28,15 Q40,19 42.6,31" /><path d="M28,17.6 Q22,18 17,25" />
          <path d="M14,33 Q17,42 27,44.6" /><path d="M42,35 Q39,43 31,45" />
          <path d="M28,24 Q34,26 34.6,31" />
        </g>
        <circle cx="28" cy="30" r="4.4" fill={sh(SHc, 0.4)} />
      </g>
    )}
    {/* head and the two pairs of tentacles - eyes ride on the long pair */}
    <path d="M44,44 Q52,42 56,36 Q58,40 54,45 Q50,47 44,46.6 Z" fill={BD} />
    <g stroke={BD} strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M52,40 Q57,32 58,24" /><path d="M49,42 Q54,36 56,29" />
    </g>
    <circle cx="58.2" cy="22.6" r={2.2 * er} fill={sh(BD, -0.5)} />
    <circle cx="56.2" cy="27.6" r={1.8 * er} fill={sh(BD, -0.5)} />
    <g stroke={BD} strokeWidth="1.4" fill="none" strokeLinecap="round">
      <path d="M53,46 Q58,46 61,43" /><path d="M51,47.4 Q56,49 59,48" />
    </g>
  </g>
  );
};

// --- salamanders, newts and axolotls ---
// These were on the frog build, which gave them a squat round body and folded
// hopping legs. A salamander is a long-bodied amphibian that walks: closer to a
// lizard in outline, with a tail as long as the rest of it.
const salA = (o) => (er) => {
  const S = o.skin || "#3a6a4a";
  const BE = o.belly || sh(S, 0.42);
  const mark = o.markC || sh(S, -0.44);
  const g1 = gid("slc", S), g2 = gid("sll", S);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(S, -0.24)} /><stop offset=".55" stopColor={S} />
        <stop offset="1" stopColor={BE} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(S, -0.16)} /><stop offset="1" stopColor={sh(S, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy="49.6" rx="21" ry="2.2" fill="#000" opacity=".13" />
    {/* the tail: long, and flattened side to side in the aquatic species */}
    {o.finTail ? (
      <path d="M18,36 Q10,34 3,36 Q9,40 3,44 Q11,45 19,40 Z" fill={sh(S, -0.14)} />
    ) : (
      <path d="M18,37 Q9,38 2,43 Q10,43 19,41 Z" fill={sh(S, -0.12)} />
    )}
    {/* sprawled limbs with the long spread toes an amphibian has */}
    <g stroke={`url(#${g2})`} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".7">
      <polyline points="38,40 42,44 40,47" /><polyline points="24,39 20,43 22,46" />
    </g>
    {/* long low body */}
    <path d="M44,33 Q50,35 49.8,38.6 Q49.6,42.6 44,44.4 Q32,47 22,44.6
             Q16,42.6 16,38.6 Q16,34.6 22,32.6 Q33,30.4 44,33 Z" fill={`url(#${g1})`} />
    {o.spots && (
      <g fill={mark} opacity=".9">
        <ellipse cx="24" cy="36" rx="2.6" ry="1.9" /><ellipse cx="31" cy="34.6" rx="2.4" ry="1.8" />
        <ellipse cx="38" cy="35.4" rx="2.4" ry="1.8" /><ellipse cx="27" cy="41.4" rx="2.2" ry="1.6" />
        <ellipse cx="35" cy="41.6" rx="2.2" ry="1.6" /><ellipse cx="43" cy="38" rx="2" ry="1.5" />
      </g>
    )}
    {o.stripe && <path d="M18,35.6 Q32,32.6 46,35.4" stroke={mark} strokeWidth="2.4" fill="none" strokeLinecap="round" />}
    {o.warts && (
      <g fill={sh(S, -0.24)} opacity=".55">
        <circle cx="26" cy="38" r="1.2" /><circle cx="34" cy="37" r="1.1" /><circle cx="41" cy="40" r="1.1" />
      </g>
    )}
    <g stroke={`url(#${g2})`} strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="41,41 45.6,45.6 43,48.6" /><polyline points="21,40 16.4,44.6 19,47.6" />
    </g>
    <g stroke={sh(S, -0.34)} strokeWidth=".8" fill="none" strokeLinecap="round">
      <path d="M43,48.6 L46,49.6 M43,48.6 L43.6,50.6 M43,48.6 L40.6,50" />
      <path d="M19,47.6 L16,48.6 M19,47.6 L19.6,49.6 M19,47.6 L21.6,49" />
    </g>
    {/* the external gills an axolotl keeps for life */}
    {o.gills && (
      <g>
        <g stroke={o.gillC || "#e88aa8"} strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M48,30 Q54,24 60,22" /><path d="M49,33 Q56,29 62,28" /><path d="M49,36 Q56,35 62,35" />
        </g>
        <g fill={o.gillC || "#e88aa8"} opacity=".8">
          <circle cx="60" cy="21.4" r="1.7" /><circle cx="62.4" cy="27.4" r="1.7" /><circle cx="62.4" cy="35" r="1.7" />
        </g>
      </g>
    )}
    {/* broad flat head with the wide amphibian mouth */}
    <path d="M45,33.4 Q53,31.6 59,34 Q62.6,36 61.6,39 Q59,41.6 52,41.6 Q46,41 44.6,37.6 Z" fill={S} />
    <path d="M50,39.4 Q56,41.6 61.4,38.6" stroke={sh(S, -0.4)} strokeWidth=".9" fill="none" strokeLinecap="round" />
    <ellipse cx="60.6" cy="35.6" rx="1" ry=".8" fill={sh(S, -0.5)} />
    <Eye x={52} y={34.6} r={1.9 * er} iris={o.iris || "#26221c"} />
  </g>
  );
};

const lagoA = (o) => (er) => {
  const F = o.fur || "#a8906c";
  const g1 = gid("lgc", F), g2 = gid("lgl", F);
  const E = o.shortEar;
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.2)} /><stop offset=".55" stopColor={F} />
        <stop offset="1" stopColor={o.belly || sh(F, 0.4)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(F, -0.14)} /><stop offset="1" stopColor={sh(F, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="31" cy="55.6" rx="17" ry="2.2" fill="#000" opacity=".14" />
    {/* the cotton tail */}
    <circle cx="16" cy="38" r="4.4" fill={o.tailC || sh(F, 0.5)} />
    {/* the folded hind leg: a lagomorph is mostly haunch */}
    <g stroke={`url(#${g2})`} strokeWidth="4" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".7">
      <polyline points="27,40 22,47 28,50" />
    </g>
    <ellipse cx="26" cy="40" rx="11.4" ry="10" fill={`url(#${g1})`} />
    <path d="M40,28 Q47,32 46.4,38 Q46,44 40,47 Q30,50 22,47 Q16,44 16,38
             Q16,32 23,29 Q32,26 40,28 Z" fill={`url(#${g1})`} />
    {o.bib && <ellipse cx="42" cy="41" rx="4.4" ry="4" fill={o.bib} opacity=".85" />}
    {/* the long foot it sits back on */}
    <g stroke={`url(#${g2})`} strokeWidth="4.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="31,42 26,49 33,52" />
    </g>
    <path d="M30,52 L41,52 Q42.4,53.8 40.6,54.6 L29.4,54.6 Q27.6,53.4 30,52 Z" fill={sh(F, -0.26)} />
    {/* short forelimb */}
    <g stroke={`url(#${g2})`} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="42,42 45,48 42.6,51.6" />
    </g>
    {/* the ears, which are the entire animal */}
    {E ? (
      <g>
        <ellipse cx="45" cy="21" rx="4" ry="4.4" fill={sh(F, -0.16)} />
        <ellipse cx="54" cy="20.6" rx="4.2" ry="4.6" fill={F} />
        <ellipse cx="54.2" cy="20.8" rx="2.4" ry="2.8" fill={o.inner || sh(F, 0.4)} />
      </g>
    ) : (
      <g>
        <ellipse cx="45.4" cy="15" rx="3" ry="9.4" fill={sh(F, -0.18)} transform="rotate(-10 45.4 15)" />
        <ellipse cx="54" cy="13.6" rx="3.2" ry="10" fill={F} transform="rotate(9 54 13.6)" />
        <ellipse cx="54" cy="14.4" rx="1.7" ry="7" fill={o.inner || sh(F, 0.42)} transform="rotate(9 54 14.4)" />
        {o.blackTip && (
          <g fill={sh(F, -0.7)}>
            <ellipse cx="46" cy="6.6" rx="2.6" ry="2.6" transform="rotate(-10 46 6.6)" />
            <ellipse cx="55" cy="5" rx="2.8" ry="2.8" transform="rotate(9 55 5)" />
          </g>
        )}
      </g>
    )}
    <ellipse cx="49" cy="29" rx="7.6" ry="6.6" fill={F} />
    <ellipse cx="54" cy="32" rx="4" ry="2.8" fill={o.muzzle || sh(F, 0.45)} />
    <path d="M55.6,30.4 Q57.6,30.6 57.7,31.8 Q57.5,33 56.3,33 Q55.2,32.6 55.6,30.4 Z" fill={sh(F, -0.6)} />
    <path d="M56.5,33 L56.4,34.4 M56.4,34.4 Q55,35.4 54,34.8" stroke={sh(F, -0.6)} strokeWidth=".7"
      fill="none" strokeLinecap="round" />
    <g stroke={sh(F, -0.4)} strokeWidth=".4" fill="none" opacity=".6" strokeLinecap="round">
      <path d="M55.6,31 Q59,29.6 61,29" /><path d="M55.8,32.6 Q59.2,32.4 61.2,32.2" />
    </g>
    <Eye x={50} y={27.4} r={2.3 * er} iris={o.iris || "#3c2a1a"} />
  </g>
  );
};

// --- pigs and boar ---
const suidA = (o) => (er) => {
  const H = o.hide || "#8a6a5c";
  const g1 = gid("sdc", H), g2 = gid("sdl", H);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.22)} /><stop offset=".55" stopColor={H} />
        <stop offset="1" stopColor={sh(H, 0.3)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.14)} /><stop offset="1" stopColor={sh(H, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="31" cy="55.6" rx="19" ry="2.3" fill="#000" opacity=".15" />
    {/* curly tail */}
    <path d="M14,33 Q9,32 9,36 Q9,39 12,38" stroke={sh(H, -0.1)} strokeWidth="1.8" fill="none"
      strokeLinecap="round" />
    <g stroke={`url(#${g2})`} strokeWidth="3.4" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".7">
      <polyline points="37,42 36.4,47 37.4,51" /><polyline points="22,41 22.6,46 21.6,50" />
    </g>
    {/* barrel body, high shoulder, low head - a pig carries its head down */}
    <path d="M44,29 Q51,32 50.6,38 Q50,44 44,46.6 Q32,50 21,47 Q14,44 14,38
             Q14,32 21,29.6 Q33,26 44,29 Z" fill={`url(#${g1})`} />
    {o.mane && (
      <path d="M20,28 Q30,22 44,27 Q32,26 21,31 Z" fill={o.maneC || sh(H, -0.3)} />
    )}
    {o.stripes && (
      <g stroke={o.markC || sh(H, 0.5)} strokeWidth="2" fill="none" opacity=".7" strokeLinecap="round">
        <path d="M18,34 Q30,31 46,34" /><path d="M18,40 Q30,37.6 46,40" />
      </g>
    )}
    {o.spots && (
      <g fill={o.markC || sh(H, -0.4)} opacity=".6">
        <ellipse cx="24" cy="35" rx="4" ry="3" /><ellipse cx="36" cy="40" rx="4.4" ry="3.2" />
      </g>
    )}
    <g stroke={`url(#${g2})`} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="41,42 40.4,48 41.6,52.6" /><polyline points="20,41 20.6,47 19.4,52.6" />
    </g>
    {/* cloven trotters */}
    <g fill={sh(H, -0.55)}>
      <path d="M40,52.6 l1.4,0 l.4,2.4 l-1.4,0 Z" /><path d="M42.2,52.6 l1.4,0 l-.4,2.4 l-1.4,0 Z" />
      <path d="M18,52.6 l1.4,0 l.4,2.4 l-1.4,0 Z" /><path d="M20.2,52.6 l1.4,0 l-.4,2.4 l-1.4,0 Z" />
    </g>
    {/* the head runs straight into the body, no neck to speak of */}
    <path d="M43,30 Q52,27.6 58,32 Q62,35.4 60.4,40 Q57.6,44 51,43.6 Q44,42.6 42,37 Z" fill={H} />
    {/* ears: floppy on a domestic pig, upright on a boar */}
    {o.earUp ? (
      <g>
        <path d="M46,28 Q44,20 47.6,18.6 Q50,22 50,28 Z" fill={sh(H, -0.2)} />
        <path d="M53,27.6 Q54,19.6 57.4,19.6 Q58,24.6 56.4,29 Z" fill={H} />
      </g>
    ) : (
      <g>
        <path d="M46,28.6 Q42,22 45,20 Q50,23 50.6,29.6 Z" fill={sh(H, -0.2)} />
        <path d="M53,28 Q56,20.6 59.6,22 Q59,28 56,31.6 Z" fill={H} />
      </g>
    )}
    {/* the flat disc snout, which is the whole face */}
    <ellipse cx="61" cy="38.6" rx="4.4" ry="3.8" fill={o.snoutC || sh(H, 0.3)} />
    <g fill={sh(H, -0.55)}>
      <ellipse cx="60" cy="37.6" rx=".9" ry="1.2" /><ellipse cx="62.4" cy="37.6" rx=".9" ry="1.2" />
    </g>
    {o.tusks && (
      <g fill="#f2ecd8">
        <path d="M56.4,42 Q55,46.6 57.4,47.4 Q58.4,44.6 58.2,41.6 Z" />
        <path d="M60.4,42.4 Q60,46.4 62.4,46.6 Q62.6,44 62,41.6 Z" />
      </g>
    )}
    <Eye x={52} y={32.6} r={1.7 * er} iris={o.iris || "#3a2a18"} />
  </g>
  );
};

// --- cattle, bison and the heavy bovids ---
const bovA = (o) => (er) => {
  const C = o.coat || "#6b5240";
  const g1 = gid("bvc", C), g2 = gid("bvl", C);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(C, -0.22)} /><stop offset=".55" stopColor={C} />
        <stop offset="1" stopColor={sh(C, 0.3)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(C, -0.14)} /><stop offset="1" stopColor={sh(C, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy="57.4" rx="20" ry="2.3" fill="#000" opacity=".15" />
    <path d="M12,32 Q8,38 9,44" stroke={sh(C, -0.1)} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M9,44 Q7,47 9,50" stroke={o.tuftC || sh(C, -0.4)} strokeWidth="3" fill="none" strokeLinecap="round" />
    <g stroke={`url(#${g2})`} strokeWidth="3.2" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".7">
      <polyline points="36,40 35.4,47 36.6,53" /><polyline points="20,39 20.6,46 19.4,52" />
    </g>
    {/* the shoulder hump a bison carries, and a deep brisket */}
    {o.hump && (
      <path d="M30,24 Q38,17 46,26 Q38,24 30,28 Z" fill={sh(C, -0.16)} />
    )}
    <path d="M44,27 Q51,30 50.6,36 Q50,43 44,46 Q31,50 19,46.6 Q12,43.6 12,36
             Q12,29.6 19,27 Q32,23.6 44,27 Z" fill={`url(#${g1})`} />
    {o.shag && (
      <g fill={sh(C, -0.2)} opacity=".65">
        <path d="M16,42 q4,4 9,3 q-4,4 -9,-3 Z" /><path d="M26,45 q4,4 9,2.6 q-4,4 -9,-2.6 Z" />
        <path d="M14,34 q-4,4 -3,9 q-3,-5 3,-9 Z" />
      </g>
    )}
    {o.patches && (
      <g fill={o.markC || "#f2ede0"} opacity=".9">
        <path d="M20,31 q7,-2 11,2 q-2,6 -8,6 q-5,-1 -3,-8 Z" />
        <path d="M34,38 q7,-1.6 10,2.4 q-2,5 -7,5 q-5,-1 -3,-7.4 Z" />
      </g>
    )}
    <g stroke={`url(#${g2})`} strokeWidth="3.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="40,40 39.4,47.6 40.6,54" /><polyline points="18,39 18.6,46.6 17.4,54" />
    </g>
    <g fill={sh(C, -0.6)}>
      <path d="M39,54 l1.6,0 l.4,2.4 l-1.6,0 Z" /><path d="M41.4,54 l1.6,0 l-.4,2.4 l-1.6,0 Z" />
      <path d="M16,54 l1.6,0 l.4,2.4 l-1.6,0 Z" /><path d="M18.4,54 l1.6,0 l-.4,2.4 l-1.6,0 Z" />
    </g>
    {/* short thick neck, head carried low */}
    <path d="M43,29 Q49,26 54,24 L57,29 Q52,31 48,35 Z" fill={`url(#${g1})`} />
    <path d="M52,22 Q60,21 62.6,26 Q64,31 60,33.6 Q54,35 51,31 Q49,26 52,22 Z" fill={C} />
    {o.woolly && (
      <path d="M50,20 Q57,15.6 62,20 Q56,20 51,24 Z" fill={sh(C, -0.24)} />
    )}
    <ellipse cx="62" cy="30.6" rx="3.4" ry="2.8" fill={o.muzzle || sh(C, 0.4)} />
    <g fill={sh(C, -0.55)}>
      <ellipse cx="61" cy="29.8" rx=".8" ry="1" /><ellipse cx="63.2" cy="29.8" rx=".8" ry="1" />
    </g>
    <path d="M50,22.6 Q47.4,19.6 46,19.4 Q48.4,18.6 51.4,21 Z" fill={sh(C, -0.2)} />
    {/* horns: the low sideways curve of a bison, or the tall sweep of cattle */}
    {o.horns && (
      <g fill="none" stroke={o.hornC || "#e8dcc3"} strokeWidth="2.2" strokeLinecap="round">
        {o.bisonHorn ? (
          <g><path d="M53,21 Q49,16.6 51.6,13.6" /><path d="M59,21.4 Q63,17 60.6,14" /></g>
        ) : o.longHorn ? (
          <g><path d="M52.6,21 Q44,15.6 40,18.6" /><path d="M59.4,21.4 Q68,16 71,19" /></g>
        ) : (
          <g><path d="M53,20.6 Q50,13.6 54,10.6" /><path d="M59,21 Q62.6,14 59,10.6" /></g>
        )}
      </g>
    )}
    <Eye x={54.6} y={26} r={1.85 * er} iris={o.iris || "#3a2a18"} />
  </g>
  );
};

// --- rhinoceroses ---
const rhinoA = (o) => (er) => {
  const H = o.hide || "#a8a396";
  const g1 = gid("rhc", H), g2 = gid("rhl", H);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.2)} /><stop offset=".55" stopColor={H} />
        <stop offset="1" stopColor={sh(H, 0.26)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.14)} /><stop offset="1" stopColor={sh(H, 0.12)} />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy="57.4" rx="21" ry="2.4" fill="#000" opacity=".16" />
    <path d="M11,34 Q6,38 7,43" stroke={sh(H, -0.12)} strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <g stroke={`url(#${g2})`} strokeWidth="4.6" fill="none" strokeLinecap="round" opacity=".7">
      <polyline points="36,42 35.6,48 36.4,53" /><polyline points="20,41 20.4,47 19.6,52" />
    </g>
    {/* massive barrel, head carried low, back dipped between shoulder and hip */}
    <path d="M44,28 Q52,31.6 51.6,38 Q51,45 44,48 Q30,52 18,48 Q11,45 11,38
             Q11,31 18,28 Q31,24 44,28 Z" fill={`url(#${g1})`} />
    {o.folds && (
      <g fill="none" stroke={sh(H, -0.28)} strokeWidth="1.4" opacity=".7">
        <path d="M24,26 Q22,38 25,50" /><path d="M38,26 Q36,38 39,50" />
      </g>
    )}
    {o.hair && (
      <g fill={o.hairC || sh(H, -0.3)} opacity=".8">
        <path d="M16,30 q-4,6 -2,12 q-3,-6 2,-12 Z" />
        <path d="M22,25 q4,-6 10,-4 q-6,1 -9,5 Z" />
      </g>
    )}
    <g stroke={`url(#${g2})`} strokeWidth="5.2" fill="none" strokeLinecap="round">
      <polyline points="41,42 40.6,48.6 41.4,55" /><polyline points="18,41 18.4,47.6 17.6,55" />
    </g>
    <g fill={sh(H, -0.4)}>
      <ellipse cx="41.4" cy="55.4" rx="3" ry="1.4" /><ellipse cx="17.6" cy="55.4" rx="3" ry="1.4" />
    </g>
    <g fill={sh(H, 0.34)} opacity=".7">
      <circle cx="39.4" cy="55" r=".7" /><circle cx="41.6" cy="55.2" r=".7" /><circle cx="43.6" cy="55" r=".7" />
      <circle cx="15.6" cy="55" r=".7" /><circle cx="17.8" cy="55.2" r=".7" /><circle cx="19.8" cy="55" r=".7" />
    </g>
    {/* the head, held low with the jaw near the ground */}
    <path d="M44,31 Q53,29 60,34 Q65,38 63,43 Q59,47 52,46 Q45,44.6 43,39 Z" fill={H} />
    {/* the mouth: square and wide for a grazer, hooked for a browser */}
    <path d={o.hookLip
      ? "M62,42 Q65.6,41.6 65.4,44 Q63.6,46 61.4,45 Z"
      : "M60,44 Q65,43.6 65,46 L59.6,46.4 Z"} fill={sh(H, 0.36)} />
    {/* the horns, which are keratin rather than bone */}
    <g fill={o.hornC || "#c9bca8"}>
      <path d={o.bigHorn
        ? "M60,33 Q65.6,20 68.6,32 Q65,32 61.6,35 Z"
        : "M60,33.6 Q64.6,25 66.6,33.4 Q63.6,33.4 61,35.6 Z"} />
      {o.twoHorn && <path d="M53,30.6 Q56,24.6 58,30.4 Q55.6,30.6 54,32.4 Z" />}
    </g>
    {/* small tubular ears set well back */}
    <g fill={sh(H, -0.2)}>
      <ellipse cx="46" cy="27.6" rx="2.2" ry="3.4" transform="rotate(-16 46 27.6)" />
      <ellipse cx="51.6" cy="26.6" rx="2.2" ry="3.4" transform="rotate(10 51.6 26.6)" />
    </g>
    <Eye x={53} y={34} r={1.6 * er} iris={o.iris || "#3a2a18"} />
  </g>
  );
};

// --- hippos ---
const hippoA = (o) => (er) => {
  const H = o.hide || "#8a6a72";
  const g1 = gid("hpc", H), g2 = gid("hpl", H);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.2)} /><stop offset=".55" stopColor={H} />
        <stop offset="1" stopColor={o.belly || sh(H, 0.3)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.14)} /><stop offset="1" stopColor={sh(H, 0.12)} />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy="55.6" rx="22" ry="2.4" fill="#000" opacity=".16" />
    <path d="M10,36 Q5,38 5,42" stroke={sh(H, -0.12)} strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* stubby legs - a hippo is a barrel that barely clears the ground */}
    <g stroke={`url(#${g2})`} strokeWidth="5" fill="none" strokeLinecap="round" opacity=".7">
      <polyline points="36,44 35.6,48 36.4,51" /><polyline points="20,43 20.4,47 19.6,50" />
    </g>
    <path d="M44,30 Q53,33.6 52.6,40 Q52,47 44,49.6 Q30,53 17,49.6 Q10,46.6 10,40
             Q10,33.6 17,30.6 Q31,27 44,30 Z" fill={`url(#${g1})`} />
    <g stroke={`url(#${g2})`} strokeWidth="5.6" fill="none" strokeLinecap="round">
      <polyline points="40,44 39.6,48.6 40.4,52.6" /><polyline points="17,43 17.4,47.6 16.6,52.6" />
    </g>
    <g fill={sh(H, -0.4)}>
      <ellipse cx="40.4" cy="53" rx="3" ry="1.3" /><ellipse cx="16.6" cy="53" rx="3" ry="1.3" />
    </g>
    {/* the enormous square head, most of which is jaw */}
    <path d="M42,32 Q52,28.6 60,33 Q66,36.6 64,43 Q60,48 51,47.6 Q42,46 41,39 Z" fill={H} />
    {/* eyes, ears and nostrils all sit on top, so it can submerge everything else */}
    <g fill={H}>
      <ellipse cx="49" cy="28.6" rx="3.4" ry="2.8" />
      <ellipse cx="57" cy="29.4" rx="3.2" ry="2.6" />
    </g>
    <g fill={sh(H, -0.28)}>
      <ellipse cx="45.6" cy="28" rx="2" ry="2.4" /><ellipse cx="53" cy="26.6" rx="2" ry="2.4" />
    </g>
    <g fill={sh(H, -0.5)}>
      <ellipse cx="62.4" cy="35.6" rx="1.4" ry="1.1" /><ellipse cx="65" cy="37.4" rx="1.4" ry="1.1" />
    </g>
    {/* the mouth line and the tusk-like canines */}
    <path d="M50,44 Q58,47.6 64.4,43.6" stroke={sh(H, -0.4)} strokeWidth="1.2" fill="none"
      strokeLinecap="round" />
    {o.tusks && (
      <g fill="#f2ecd8">
        <path d="M53,45.6 Q52,49.6 54.6,50 Q55.6,47.6 55.4,45.2 Z" />
        <path d="M60,45.6 Q59.6,49.4 62,49.4 Q62.6,47.2 62,44.8 Z" />
      </g>
    )}
    <Eye x={49} y={28} r={1.9 * er} iris={o.iris || "#3a2a18"} />
    <Eye x={57} y={28.8} r={1.7 * er} iris={o.iris || "#3a2a18"} />
  </g>
  );
};

// --- giraffe and okapi ---
const giraffeA = (o) => (er) => {
  const C = o.coat || "#d9a44a";
  const g1 = gid("gfc", C), g2 = gid("gfl", C);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(C, -0.18)} /><stop offset=".55" stopColor={C} />
        <stop offset="1" stopColor={sh(C, 0.3)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(C, -0.12)} /><stop offset="1" stopColor={sh(C, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="26" cy="57.6" rx="16" ry="2.2" fill="#000" opacity=".15" />
    <path d="M11,32 Q7,38 8,44" stroke={sh(C, -0.12)} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <path d="M8,44 Q6,47 8,50" stroke={o.tuftC || sh(C, -0.5)} strokeWidth="2.6" fill="none" strokeLinecap="round" />
    {/* very long legs - a giraffe stands more than half leg */}
    <g stroke={`url(#${g2})`} strokeWidth="2.6" fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".7">
      <polyline points="31,36 30.4,46 31.6,55" /><polyline points="17,35 17.6,45 16.4,55" />
    </g>
    {/* short deep body sloping down to the rump */}
    <path d="M36,26 Q42,29 41.6,34 Q41,39.6 36,42 Q26,45 17,42 Q11,39.4 11,34
             Q11,29 17,26.6 Q27,23.6 36,26 Z" fill={`url(#${g1})`} />
    {o.patches && (
      <g fill={o.markC || "#a8703a"} opacity=".85">
        <path d="M16,29 q5,-1.6 7.4,1.6 q-1,4 -4.6,4.2 q-3.6,-.4 -2.8,-5.8 Z" />
        <path d="M26,27.6 q5,-1 7,2 q-1.4,3.6 -5,3.4 q-3.4,-.8 -2,-5.4 Z" />
        <path d="M18,37 q4.6,-1 6.6,2 q-1.4,3.4 -4.6,3.2 q-3,-.8 -2,-5.2 Z" />
        <path d="M28,36.6 q4.8,-1 6.8,2 q-1.4,3.4 -4.8,3.2 q-3,-.8 -2,-5.2 Z" />
        <path d="M36,29 q4,-.8 5.4,2 q-1.2,3 -4,2.8 q-2.6,-.8 -1.4,-4.8 Z" />
      </g>
    )}
    {o.legStripes && (
      <g stroke={o.markC || "#3a2a1a"} strokeWidth="1.6" fill="none" opacity=".8" strokeLinecap="round">
        <path d="M30.6,46 L32,46 M30.8,49 L32.2,49 M31,52 L32.4,52" />
        <path d="M17.4,45 L18.8,45 M17.2,48 L18.6,48 M17,51 L18.4,51" />
      </g>
    )}
    <g stroke={`url(#${g2})`} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="34,34 33.4,45 34.6,55.6" /><polyline points="15,33 15.6,44 14.4,55.6" />
    </g>
    <g fill={sh(C, -0.55)}>
      <path d="M33.4,55.6 l2.4,0 l0,2 l-2.4,0 Z" /><path d="M13.4,55.6 l2.4,0 l0,2 l-2.4,0 Z" />
    </g>
    {/* THE NECK. This is the animal - it should dominate the frame. */}
    <path d="M35,28 Q44,20 49,8 L56,10 Q50,22 42,32 Z" fill={`url(#${g1})`} />
    <path d="M36,27 Q45,19 50,7.6 Q52,8 52.6,9 Q47,21 39,30 Z" fill={o.maneC || sh(C, -0.28)} />
    {o.neckPatches && (
      <g fill={o.markC || "#a8703a"} opacity=".8">
        <path d="M41,24 q3.4,-1.4 4.6,1 q-1,2.6 -3.4,2.6 q-2.2,-.6 -1.2,-3.6 Z" />
        <path d="M45,17 q3.2,-1.2 4.4,1 q-1,2.4 -3.2,2.4 q-2,-.6 -1.2,-3.4 Z" />
        <path d="M49,10.6 q3,-1 4,1 q-.8,2.2 -3,2.2 q-1.8,-.6 -1,-3.2 Z" />
      </g>
    )}
    {/* small head with the ossicones on top */}
    <path d="M49,8.6 Q55,4.6 60,6 Q63,8 62,11.4 Q60,14.6 55.6,14.6 Q50.6,14 49,11 Z" fill={C} />
    <ellipse cx="60.4" cy="11.6" rx="3" ry="2.2" fill={o.muzzle || sh(C, 0.4)} />
    <g fill={sh(C, -0.5)}>
      <ellipse cx="59.6" cy="10.8" rx=".7" ry=".9" /><ellipse cx="61.6" cy="11" rx=".7" ry=".9" />
    </g>
    {/* ossicones: bone cores under skin, not horns */}
    <g>
      <path d="M52,5.6 L51.4,1.6" stroke={C} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M56.6,5 L57,1" stroke={C} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="51.3" cy="0.9" r="1.4" fill={o.tuftC || sh(C, -0.5)} />
      <circle cx="57.1" cy="0.4" r="1.4" fill={o.tuftC || sh(C, -0.5)} />
    </g>
    <path d="M50.6,6.6 Q47.6,4 46.4,3.6 Q49,3 51.6,5.4 Z" fill={sh(C, -0.2)} />
    <Eye x={54} y={8.6} r={1.7 * er} iris={o.iris || "#3a2a18"} />
  </g>
  );
};

const crocA = (o) => (er) => {
  const H = o.hide || "#5d7a4a";
  const BE = o.belly || sh(H, 0.42);
  const SC = o.scuteC || sh(H, -0.3);
  const g1 = gid("cdc", H), g2 = gid("cdl", H);
  const E = o.erect;
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.24)} /><stop offset=".55" stopColor={H} />
        <stop offset="1" stopColor={BE} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.16)} /><stop offset="1" stopColor={sh(H, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy={E ? 55.4 : 50.6} rx="24" ry="2.2" fill="#000" opacity=".15" />

    {/* the tail: long, thick at the base, laterally flattened, with a raised
        keel of scutes along the top - it is the animal's whole engine */}
    <path d={E ? "M22,36 Q12,36 4,32 Q11,40 20,42 Z" : "M20,36 Q10,37 2,33 Q9,42 19,42 Z"}
      fill={`url(#${g1})`} />
    <g fill={SC}>
      {(E ? [[18,33],[13,32.4],[8,31.4]] : [[16,33.6],[11,33],[6,32]]).map(([x,y],i)=>(
        <path key={i} d={`M${x},${y} l2,-3.4 l2,3.4 Z`} />
      ))}
    </g>

    {/* far pair of limbs */}
    <g stroke={`url(#${g2})`} strokeWidth={E ? 3.6 : 2.8} fill="none" strokeLinecap="round"
      strokeLinejoin="round" opacity=".7">
      {E ? (
        <g><polyline points="36,42 35.4,48 36.6,53" /><polyline points="24,41 24.6,47 23.4,52" /></g>
      ) : (
        <g><polyline points="37,42 43,46 41,49" /><polyline points="26,41 20,45 22,48.6" /></g>
      )}
    </g>

    {/* long low body */}
    <path d={E
      ? "M44,29 Q51,32 50.6,37 Q50,42.6 44,45 Q32,48.6 22,46 Q15,43.4 15,37.4 Q15,31.6 22,29.4 Q33,26.4 44,29 Z"
      : "M46,33 Q53,35.4 52.6,39 Q52,43 46,45 Q32,48 20,45.6 Q13,43.4 13,39 Q13,35 20,33.4 Q33,30.6 46,33 Z"}
      fill={`url(#${g1})`} />

    {/* the armour: paired rows of raised scutes down the back */}
    <g fill={SC}>
      {(E ? [[26,27],[32,26.2],[38,26.6],[44,28]] : [[24,31.4],[30,30.6],[36,30.8],[42,31.6]])
        .map(([x,y],i)=>(<path key={i} d={`M${x},${y} l2.2,-3.6 l2.2,3.6 Z`} />))}
    </g>
    {o.armor && (
      <g fill="none" stroke={sh(SC, -0.24)} strokeWidth=".85" opacity=".75">
        <path d={E ? "M20,34 Q33,31 47,34" : "M18,37.6 Q33,35 49,37.6"} />
        <path d={E ? "M20,40 Q33,38 47,40" : "M18,42.4 Q33,40.6 49,42.4"} />
      </g>
    )}
    {o.spikes && (
      <g fill={o.spikeC || sh(SC, -0.2)}>
        {(E ? [[22,28],[28,27],[34,27],[40,27.6]] : [[22,32],[28,31],[34,31],[40,31.6]])
          .map(([x,y],i)=>(<path key={i} d={`M${x},${y} l1.6,-7 l3,6.4 Z`} />))}
        <path d={E ? "M18,31 l-6,-5 l6,-1 Z" : "M16,35 l-6,-5 l6,-1 Z"} />
      </g>
    )}
    {o.bands && (
      <g stroke={o.markC || sh(H, -0.4)} strokeWidth="2" fill="none" opacity=".6">
        <path d={E ? "M25,28.6 Q26,37 25,45.4 M33,26.8 Q34,37 33,47 M41,28 Q42,37 41,45.6"
                   : "M23,32.4 Q24,39 23,46.4 M31,31 Q32,39 31,47.6 M39,31.6 Q40,39 39,46.4"} />
      </g>
    )}

    {/* near limbs. Sprawled out to the sides for a modern crocodilian; tucked
        under the body for the Triassic forms, which walked upright. */}
    <g stroke={`url(#${g2})`} strokeWidth={E ? 4.2 : 3.2} fill="none" strokeLinecap="round"
      strokeLinejoin="round">
      {E ? (
        <g><polyline points="41,42 40.4,49 41.6,54.6" /><polyline points="21,41 21.6,48 20.4,54.6" /></g>
      ) : (
        <g><polyline points="42,43 49,47.6 46,50.6" /><polyline points="22,42 15,46.6 18,49.6" /></g>
      )}
    </g>
    <g stroke={sh(H, -0.5)} strokeWidth="1.1" fill="none" strokeLinecap="round">
      {E ? (
        <g><path d="M41.6,54.6 L38.6,56 M41.6,54.6 L42,57 M41.6,54.6 L44.6,56" />
           <path d="M20.4,54.6 L17.4,56 M20.4,54.6 L20.8,57 M20.4,54.6 L23.4,56" /></g>
      ) : (
        <g><path d="M46,50.6 L43,52.4 M46,50.6 L46.6,53 M46,50.6 L49,52" />
           <path d="M18,49.6 L15,51.4 M18,49.6 L18.6,52 M18,49.6 L21,51" /></g>
      )}
    </g>

    {/* skull and snout. Broad for an alligator, needle-thin for a gharial,
        deep and tall for the rauisuchians. */}
    {o.deepSkull ? (
      <g>
        <path d="M46,29 Q54,25.6 60,28.6 Q64,31.4 62.6,35.6 Q60,39.4 53,39.4
                 Q46.6,38.6 45,34 Z" fill={H} />
        <path d="M50,36.6 Q56,39.4 62.6,36.4 Q60.6,41 54.4,41 Q50.6,40.4 50,36.6 Z"
          fill={o.jaw || sh(H, 0.28)} />
      </g>
    ) : (
      <g>
        <path d={o.narrow
          ? "M46,34 Q54,32.6 66,34.4 Q66.4,36.4 65,36.8 Q54,37.6 46,38 Z"
          : "M46,33.4 Q56,32 63,34.4 Q65.4,36 64.4,38 Q55,39.6 46,39 Z"} fill={H} />
        {/* the interlocking teeth that show even with the mouth shut */}
        <g fill="#f4ecd8">
          {(o.narrow ? [50,54,58,62] : [50,54,58]).map((x,i)=>(
            <path key={i} d={`M${x},36.6 l1,0 l-.5,2.2 Z`} />
          ))}
          {(o.narrow ? [52,56,60] : [52,56,60]).map((x,i)=>(
            <path key={i} d={`M${x},36 l1,0 l-.5,-2 Z`} />
          ))}
        </g>
        {o.ghara && <ellipse cx="64" cy="33.4" rx="2.6" ry="2" fill={sh(H, 0.3)} />}
      </g>
    )}

    {/* eyes and nostrils ride on top of the skull, so the animal can float
        with everything else underwater */}
    {!o.deepSkull && (
      <g>
        <ellipse cx="49" cy="31.4" rx="3" ry="2.6" fill={H} />
        <ellipse cx="44.6" cy="31.6" rx="2.6" ry="2.4" fill={H} />
        <ellipse cx={o.narrow ? 65 : 63.4} cy="34" rx="1.4" ry="1" fill={sh(H, -0.5)} />
      </g>
    )}
    <Eye x={o.deepSkull ? 53 : 49} y={o.deepSkull ? 30.6 : 30.4} r={1.8 * er}
      iris={o.iris || "#c9a43a"} />
  </g>
  );
};

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
const sauroA = (o) => (er) => {
  const H = o.hide || "#7a7a5c";
  const B = o.belly || sh(H, 0.4);
  const mark = o.markC || sh(H, -0.45);
  const g1 = gid("sac", H), g2 = gid("sal", H);
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
    <ellipse cx="32" cy="57.4" rx="22" ry="2.4" fill="#000" opacity=".16" />
    {/* the long counterweight tail */}
    <path d="M18,34 Q9,33 2,27" stroke={sh(H, -0.1)} strokeWidth="4.6" fill="none" strokeLinecap="round" />
    <path d="M9,30.6 Q5,28.6 1.6,26" stroke={sh(H, -0.24)} strokeWidth="2.6" fill="none" strokeLinecap="round" />
    {/* far pillar legs */}
    <g stroke={`url(#${g2})`} strokeWidth="4.4" fill="none" strokeLinecap="round" opacity=".7">
      <polyline points="38,40 38.8,47 38.2,54" /><polyline points="23,39 22.2,46 22.8,54" />
    </g>
    {/* barrel body */}
    <ellipse cx="30" cy="36" rx="16" ry="9.6" fill={`url(#${g1})`} />
    {o.ridges && (
      <g fill={mark}>
        <path d="M20,27 L22,23.4 L24,27 Z" /><path d="M28,25.8 L30,21.8 L32,25.8 Z" />
        <path d="M36,26.6 L38,23 L40,26.6 Z" />
      </g>
    )}
    {o.fins && (
      <path d="M18,28 Q30,18 44,29 Q30,25 18,28 Z" fill={mark} opacity=".7" />
    )}
    {/* near pillar legs, thick as tree trunks */}
    <g stroke={`url(#${g2})`} strokeWidth="5.2" fill="none" strokeLinecap="round">
      <polyline points="41,39 41.9,47 41.2,55.4" /><polyline points="20,38 19.1,46 19.8,55.4" />
    </g>
    <g fill={sh(H, -0.4)}>
      <ellipse cx="41" cy="55.8" rx="3" ry="1.4" /><ellipse cx="20" cy="55.8" rx="3" ry="1.4" />
    </g>
    {/* the neck: what a sauropod actually is */}
    <path d="M40,29.4 Q48,20 54,10.6 L58.4,12.6 Q52.6,21.6 45.6,32 Z" fill={`url(#${g1})`} />
    {/* small head on the end of it */}
    <ellipse cx="57.4" cy="10.4" rx="4.6" ry="3.2" fill={H} transform="rotate(-24 57.4 10.4)" />
    <ellipse cx="60.4" cy="9" rx="2.2" ry="1.5" fill={B} transform="rotate(-24 60.4 9)" />
    <Eye x={56.6} y={8.8} r={1.4 * er} iris={"#3a2a18"} />
  </g>
  );
};
const ceratoA = (o) => (er) => {
  const H = o.hide || "#8a7a5c";
  const g1 = gid("cec", H), g2 = gid("cel", H);
  const FR = o.frillIn || sh(H, 0.28);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.26)} /><stop offset=".55" stopColor={H} />
        <stop offset="1" stopColor={sh(H, 0.36)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.16)} /><stop offset="1" stopColor={sh(H, 0.14)} />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy="56.6" rx="20" ry="2.4" fill="#000" opacity=".16" />
    <path d="M12,36 Q6,37.4 3,41" stroke={sh(H, -0.1)} strokeWidth="3.6" fill="none" strokeLinecap="round" />
    <g stroke={`url(#${g2})`} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".7">
      <polyline points="34,42 33,48 35,52.4" /><polyline points="18,41 20,47 17,52.4" />
    </g>
    <path d="M38,28 Q45,31 44.8,37.4 Q44.6,44 39,46.6 Q28,49.6 19,46.4
             Q11.6,43.4 11.6,36.6 Q11.6,30 19,27.6 Q29,24.6 38,28 Z" fill={`url(#${g1})`} />
    {o.crestBack && (
      <path d="M18,27 Q28,19.6 40,27.6 Q28,24.4 18,27 Z" fill={o.crestC || sh(H, -0.3)} />
    )}
    <g stroke={`url(#${g2})`} strokeWidth="4.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="38,42 37,49 39.4,54.4" /><polyline points="16,41 18.4,48 15,54.4" />
    </g>
    <g fill={sh(H, -0.4)}>
      <ellipse cx="39.4" cy="54.8" rx="2.6" ry="1.4" /><ellipse cx="15" cy="54.8" rx="2.6" ry="1.4" />
    </g>
    {/* the frill, the defining structure */}
    {o.frill && (
      <g>
        <path d="M42,30 Q52,15 60,22 Q62,31 56,38 Q48,41 42,37 Z" fill={sh(H, -0.16)} />
        <path d="M44.6,30.6 Q52.4,19.4 58,24.4 Q59.4,30.8 54.6,36 Q48,38 44.6,35.4 Z" fill={FR} />
        {o.frillSpikes && (
          <g fill={sh(H, -0.5)}>
            <path d="M50,16.4 L51,12.6 L53,16.8 Z" /><path d="M56.6,19.6 L59.4,16.6 L59,21 Z" />
            <path d="M60.4,27 L63.6,26.6 L61,29.6 Z" />
          </g>
        )}
      </g>
    )}
    {o.dome && (
      <ellipse cx="52" cy="26" rx="6.4" ry="5.4" fill={o.domeC || sh(H, -0.2)} />
    )}
    {/* head and beak */}
    <path d="M46,31 Q54,28.6 59.6,32 Q62.4,34 61.4,37.4 Q59.6,40.4 54,40.4
             Q47.6,40 45.6,36.4 Z" fill={H} />
    <path d="M58.4,35 Q62.4,35 62.6,37 Q62,39.4 58,39.2 Q56.4,37 58.4,35 Z"
      fill={sh(H, -0.5)} />
    {o.noseHorn && (
      <path d="M57.4,33.6 Q59.4,28.4 61,32.4 Q60.4,34.6 58.8,34.8 Z" fill={o.hornC || "#e8dcc3"} />
    )}
    {o.hornsLong && (
      <g fill="none" stroke={o.hornC || "#e8dcc3"} strokeWidth="2" strokeLinecap="round">
        <path d="M50,28.6 Q52,20.6 57.6,18.4" /><path d="M46.6,30 Q47.6,22.6 52.6,19.6" />
      </g>
    )}
    <Eye x={52} y={33.4} r={1.6 * er} iris={"#3a2a18"} />
  </g>
  );
};
const armorA = (o) => (er) => {
  const H = o.hide || "#7a6a4a";
  const SC = o.scuteC || sh(H, -0.3);
  const g1 = gid("ac", H), g2 = gid("al", H);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(SC, 0.24)} /><stop offset=".55" stopColor={SC} />
        <stop offset="1" stopColor={sh(SC, -0.28)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.14)} /><stop offset="1" stopColor={sh(H, 0.16)} />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="52.6" rx="19" ry="2.3" fill="#000" opacity=".16" />
    {/* stubby tail */}
    <path d="M14,38 Q9,40 8,44" stroke={sh(H, -0.1)} strokeWidth="3.2" fill="none" strokeLinecap="round" />
    {/* far pair of column legs */}
    <g stroke={`url(#${g2})`} strokeWidth="4" fill="none" strokeLinecap="round" opacity=".7">
      <polyline points="38,40 38.7,44 38.2,48" /><polyline points="22,40 21.3,44 21.8,48" />
    </g>
    {/* the shell: a high dome, which is the whole animal */}
    <path d="M13.6,38 Q13,24 30,21.4 Q47,19.6 49.6,32 Q50.6,38.8 46,40.4 Q30,43.4 17.6,41.4 Z"
      fill={`url(#${g1})`} />
    {o.scutes && (
      <g fill="none" stroke={sh(SC, -0.4)} strokeWidth=".85" opacity=".85">
        <path d="M22,21.8 Q22.6,31 21,40.8 M31,20.8 Q31.6,31 30,42.4 M40,22 Q40.4,31.4 39,41.8" />
        <path d="M14.4,31 Q31,27.6 49.6,30" />
        <path d="M15.4,36.4 Q31,33.8 49,35.4" />
      </g>
    )}
    {o.plates && (
      <g fill={o.plateC || sh(SC, 0.3)} opacity=".8">
        <path d="M18,25.6 q6,-2.6 10,.6 q-4,3.4 -9,2.4 Z" />
        <path d="M32,23.6 q6,-2.2 10,1 q-4.4,3.2 -9.4,2 Z" />
      </g>
    )}
    {o.spikes && (
      <g fill={sh(SC, -0.5)}>
        <path d="M20,21.6 L22,15.6 L24.6,21 Z" /><path d="M30,20.4 L32,14 L34.6,19.8 Z" />
        <path d="M40,22 L42.4,16.4 L44.4,22.8 Z" />
      </g>
    )}
    {/* near legs, then the head reaching out of the shell */}
    <g stroke={`url(#${g2})`} strokeWidth="4.6" fill="none" strokeLinecap="round">
      <polyline points="42,40 42.8,45 42.2,50" /><polyline points="19,40 18.2,45 18.8,50" />
    </g>
    <path d="M46.6,30.6 Q54,27.4 58.6,29.4 Q61.6,31 61,34.2 Q60,37.2 55.6,37.4
             Q49,37.4 46,34.6 Z" fill={H} />
    <path d="M57,32.4 Q61.4,32.2 61.6,34 Q61.2,36 57.4,36 Q55.6,34.2 57,32.4 Z"
      fill={o.beakC || sh(H, -0.44)} />
    {o.tusks && (
      <g fill="#f2ecd8">
        <path d="M55,36 L56.4,36 L55.6,39.4 Z" /><path d="M58.4,35.8 L59.8,35.8 L59.4,39 Z" />
      </g>
    )}
    <Eye x={52.4} y={31.6} r={1.7 * er} iris={o.iris || "#3a2a18"} />
  </g>
  );
};
const pteroA = (o) => (er) => {
  const H = o.hide || "#8a7a5c";
  const W = o.wingC || sh(H, -0.2);
  const g1 = gid("ptc", H), g2 = gid("ptw", W);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.24)} /><stop offset="1" stopColor={sh(H, 0.3)} />
      </linearGradient>
      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(W, 0.14)} /><stop offset="1" stopColor={sh(W, -0.24)} />
      </linearGradient>
    </defs>
    {/* far wing, swept back */}
    <path d="M30,28 Q16,16 3,20 Q14,26 20,34 Q26,33 30,28 Z" fill={`url(#${g2})`} opacity=".72" />
    {/* body, small between the wings */}
    <ellipse cx="33" cy="31" rx="8" ry="5" fill={`url(#${g1})`} transform="rotate(-10 33 31)" />
    {/* legs tucked under */}
    <g stroke={sh(H, -0.2)} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="30,35 28,40 31,43" /><polyline points="36,35 35,40 38,43" />
    </g>
    {/* near wing, the big membrane */}
    <path d="M34,28 Q22,12 6,13 Q18,22 24,33 Q30,34 34,28 Z" fill={`url(#${g2})`} />
    <g stroke={sh(W, -0.4)} strokeWidth=".6" fill="none" opacity=".6">
      <path d="M32,27 Q22,18 9,14.6" /><path d="M30,30 Q20,23 8,18" />
    </g>
    {/* neck and long toothed beak */}
    <path d="M39,29 Q45,25 49,22 L51.6,25.4 Q47,28 42.6,32 Z" fill={`url(#${g1})`} />
    <path d="M48,21.6 Q54,18.6 59,19.6 Q62.6,20.6 63.4,22.6 Q60,23.6 55.4,24.4
             Q50.6,25.2 47.6,24.4 Z" fill={H} />
    <path d="M55.4,22.4 Q60.6,21.8 63.4,22.6 Q60,23.8 55.6,24.4 Z" fill={o.beakC || sh(H, -0.4)} />
    {o.teeth && (
      <g stroke="#f4ecd8" strokeWidth=".55" strokeLinecap="round">
        <path d="M52,24.4 L52,25.8" /><path d="M55,24.4 L55,25.8" /><path d="M58,24 L58,25.4" />
      </g>
    )}
    {o.crestBack && (
      <path d="M49,20.6 Q52,12.6 58,14.6 Q54,17.4 51.6,21.6 Z" fill={o.crestC || sh(H, -0.3)} />
    )}
    {o.plume && (
      <path d="M46,22.6 Q47,15.6 52,14.6 Q49,18 47.6,23.6 Z" fill={o.plumeC || sh(H, -0.26)} />
    )}
    <Eye x={51.4} y={22} r={1.5 * er} iris={"#c9a43a"} />
  </g>
  );
};
const marineA = (o) => (er) => {
  const H = o.hide || "#4a6a7a";
  const BE = o.belly || sh(H, 0.46);
  const g1 = gid("mrc", H);
  return (
  <g>
    <defs>
      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sh(H, -0.24)} /><stop offset=".5" stopColor={H} />
        <stop offset="1" stopColor={BE} />
      </linearGradient>
    </defs>
    {/* marine reptiles: paddle limbs, long jaws, a tail that drives them */}
    <path d="M14,34 Q6,28 2,22 Q7,28 8,34 Q7,40 2,46 Q6,40 14,36 Z" fill={sh(H, -0.16)} />
    {o.tents ? (
      <g stroke={H} strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M22,42 Q16,52 10,58" /><path d="M30,44 Q28,54 26,60" /><path d="M38,43 Q42,53 46,59" />
      </g>
    ) : null}
    <path d="M48,28 Q56,31 55.6,35 Q55,39.6 47,42 Q33,46 22,42 Q14,39 14,35
             Q14,31 22,28 Q34,24 48,28 Z" fill={`url(#${g1})`} />
    {/* four paddles, which is what a plesiosaur swims with */}
    <path d="M38,40 Q34,50 26,54 Q31,45 34,39 Z" fill={o.finC || sh(H, -0.14)} />
    <path d="M24,40 Q18,49 10,51 Q16,43 20,38.6 Z" fill={o.finC || sh(H, -0.14)} />
    <path d="M38,30 Q34,20 26,17 Q31,26 34,31 Z" fill={o.finC || sh(H, -0.18)} opacity=".85" />
    {/* neck and long jaw */}
    <path d="M46,30 Q54,26 58,22 L61,26 Q56,29 52,34 Z" fill={`url(#${g1})`} />
    <path d="M56,22 Q64,22 66,26 Q60,28 54,27.6 Z" fill={o.jaw || sh(H, -0.1)} />
    {o.teeth && (
      <g fill="#f4ecd8">
        <path d="M58,26.6 L59,26.6 L58.5,28.6 Z" /><path d="M60.4,26.6 L61.4,26.6 L60.9,28.4 Z" />
        <path d="M62.6,26.4 L63.6,26.4 L63.1,28 Z" />
      </g>
    )}
    <Eye x={57} y={23.6} r={(o.bigEye ? 2.6 : 1.7) * er} iris={o.iris || "#c9a43a"} />
  </g>
  );
};

Object.assign(ART, {
  // Triassic
  coelophysis: theroA({ hide: "#8fae5c", jaw: "#6b8a44", stripes: true }),
  eoraptor: theroA({ hide: "#c9a05c", jaw: "#a3824a" }),
  herrerasaurus: theroA({ hide: "#a3684a", jaw: "#7a4c38", stripes: true }),
  plateosaurus: sauroA({ hide: "#9aa85c", belly: "#c9cf9a" }),
  postosuchus: crocA({ hide: "#7a6450", belly: "#c9b89a", scuteC: "#5c4a38", erect: true, armor: true, deepSkull: true, jaw: "#a89078", iris: "#c9a43a" }),
  desmatosuchus: crocA({ hide: "#8a7a5c", belly: "#c9bc9a", scuteC: "#6b5c40", erect: true, armor: true, spikes: true, spikeC: "#5c4c34", iris: "#c9a43a" }),
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


// The crocodile was one of the original hand-drawn heads. It goes through the
// crocodilian build now, alongside the alligator, caiman and gharial.
Object.assign(ART, {
  croc: crocA({ hide: "#5d7a4a", belly: "#c9c49a", scuteC: "#3f5433", armor: true,
    bands: true, markC: "#33452a", iris: "#c9a43a" }),
});


// ---------- two conversions that other species are built from ----------
// part7 defines camazotz and the jackalope as variations on ART.bat and
// ART.rabbit, and part12 and part13 do the same for two more bats. Those read
// the entry at definition time, so these two have to exist before part7 runs -
// hence here rather than with the rest of the converted species in part9.
Object.assign(ART, {
  bat: batA({ fur: "#5c4436", wingC: "#4a3830", muzzle: "#8a6f5c", hanging: true, bigEar: true, iris: "#3a2a18" }),
  rabbit: lagoA({ fur: "#b59a74", belly: "#f2ede0", inner: "#e8b8b0", tailC: "#f6f0e4", iris: "#5c3a2a" }),
});
