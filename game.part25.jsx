// ---------- Part 25: THE OTTERS ----------
// Both otters were coming out of mustA — a front-facing cute-mammal-face
// generator with round ears — which is exactly why they read as rodents.
//
// A correction worth making, because it changes the target: the sea otter is
// NOT a pinniped. It's a mustelid — the largest member of the weasel family,
// and the only one that took to the sea without ever growing blubber. So it
// shouldn't look like a seal either. It should look like a weasel that went to
// sea and solved the cold a completely different way: fur. Up to a million
// hairs per square inch, the densest coat on earth.

// --- Sea Otter: floating on its back, which is where it lives ---
// It eats, sleeps, grooms and raises a pup up there. Drawing it any other way
// would be drawing a river otter.
ART.seaotter = (er) => (
  <g>
    {/* water line it lies in */}
    <path d="M2,46 Q16,43 32,46 Q48,49 62,45" stroke="#4a8ab5" strokeWidth="1.6" fill="none" opacity=".45" strokeLinecap="round" />
    {/* body: long mustelid barrel lying on its back, low in the water */}
    <path d="M10,44 Q14,34 26,32 Q40,30 50,33 Q57,35 58,40 Q57,46 48,48 Q30,51 16,49 Q10,48 10,44 Z" fill="#6b5240" />
    {/* the pale chest and throat, uppermost because it's on its back */}
    <path d="M20,36 Q32,32 46,34 Q52,36 52,40 Q44,37 30,38 Q22,39 20,36 Z" fill="#a3866b" opacity=".9" />
    {/* hind flippers — webbed, held out of the water. mustelid, not pinniped:
        they're feet, not a fused fluke. */}
    <path d="M9,44 Q3,40 1,34 Q2,42 4,45 Q6,47 9,46 Z" fill="#4c3c2e" />
    <path d="M12,47 Q7,50 4,55 Q10,52 14,49 Z" fill="#4c3c2e" />
    {/* tail: flat, short, trailing — not a rodent's rope */}
    <path d="M14,48 Q9,52 5,57 Q12,54 17,50 Z" fill="#5c4636" />
    {/* head, tipped back, resting on the surface */}
    <ellipse cx="52" cy="34" rx="8" ry="7" fill="#7a6048" />
    <ellipse cx="52" cy="30" rx="7.5" ry="4" fill="#d9c4a8" />
    {/* small round ears, set low and back — barely there on a sea otter */}
    <ellipse cx="46" cy="29" rx="1.8" ry="1.4" fill="#5c4636" />
    {/* blunt muzzle and nose pad */}
    <ellipse cx="58" cy="33" rx="4" ry="3.4" fill="#e8dcc3" />
    <path d="M57,31 Q59.5,29.5 61,31.5 Q59.5,33.5 58.5,33.5 Q57.5,33 57,31 Z" fill="#3c2e22" />
    <g stroke="#f2ede0" strokeWidth=".55" strokeLinecap="round" opacity=".85">
      <path d="M56,34 L63,33 M56,35 L63,37 M55,36 L61,39" />
    </g>
    {/* forepaws on the chest, holding the rock. It keeps a favourite one in a
        pocket of loose skin under the arm — that is real. */}
    <ellipse cx="38" cy="34" rx="3.4" ry="2.8" fill="#5c4636" />
    <ellipse cx="31" cy="35" rx="3.4" ry="2.8" fill="#5c4636" />
    <ellipse cx="34.5" cy="31" rx="4.6" ry="3.4" fill="#8a8578" />
    <ellipse cx="33" cy="30" rx="1.8" ry="1.2" fill="#a8a396" opacity=".8" />
    <Eye x={49} y={32} r={2 * er} iris="#2a2018" />
  </g>
);

// --- River Otter: sleek and swimming, the same animal doing a different job ---
ART.otter = (er) => (
  <g>
    {/* body: one long low path, nose to tail, no gaps */}
    <path d="M6,46 Q10,42 16,41 Q26,34 38,33 Q50,32 56,27 Q59,23 62,25 Q64,28 61,32 Q58,37 50,41 Q36,49 20,50 Q10,50 6,46 Z" fill="#6b5240" />
    {/* pale throat */}
    <path d="M52,32 Q58,30 61,28 Q60,33 54,36 Q51,35 52,32 Z" fill="#c9b08a" />
    {/* thick tapering tail — an otter's tail is a rudder, thick at the base */}
    <path d="M8,45 Q4,47 1,52 Q6,50 10,48 Z" fill="#5c4636" />
    {/* hind foot, webbed */}
    <path d="M20,49 Q17,54 13,57 Q21,54 25,50 Z" fill="#4c3c2e" />
    {/* forepaw */}
    <path d="M42,45 Q41,51 36,54 Q35,48 38,44 Z" fill="#4c3c2e" />
    {/* head */}
    <ellipse cx="57" cy="28" rx="6.5" ry="5.5" fill="#7a6048" />
    <ellipse cx="52" cy="24" rx="1.7" ry="1.4" fill="#5c4636" />
    <ellipse cx="62" cy="29" rx="3.4" ry="2.8" fill="#e8dcc3" />
    <path d="M61,27 Q63,26 64,28 Q63,30 62.5,30 Q61.5,29.5 61,27 Z" fill="#3c2e22" />
    <g stroke="#f2ede0" strokeWidth=".5" strokeLinecap="round" opacity=".85">
      <path d="M60,30 L66,29 M60,31 L66,33" />
    </g>
    <Eye x={55} y={26} r={1.9 * er} iris="#2a2018" />
  </g>
);

// The sea otter's field note already says it has no blubber; make the rock and
// the pocket explicit, since the sprite is now holding one.
if (typeof INFO !== "undefined" && INFO.seaotter) {
  INFO.seaotter.f = "It has up to a million hairs per square inch — the densest fur on earth, and it needs every one, because unlike a seal it has no blubber at all. It is a weasel, not a pinniped: the largest of the mustelids, and the only one to take to open sea. It uses a rock as an anvil to crack urchins on its chest, and keeps a favourite under a loose pocket of skin in its armpit. Remove otters and urchins eat the kelp forest down to a desert. That actually happened, and it reversed when they came back.";
}
