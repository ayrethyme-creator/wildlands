// ---------- Part 21: THE ORCA ----------
// The generic cetacean generator gave the orca a recoloured whale body and a
// smudge for an eye patch. An orca has some of the most specific markings of
// any animal alive, so this one is drawn by hand:
//
//   · jet-black cape, hard-edged against a white ventral field
//   · the post-ocular patch — an angled white oval BEHIND and above the eye,
//     not on it. Individually shaped; researchers ID whales by it.
//   · the saddle patch — grey, tucked behind the dorsal fin. Also individual.
//   · a tall triangular dorsal (males reach 1.8m — the tallest of any animal)
//   · white lower jaw running back into the throat
//   · paddle-shaped pectoral flipper, rounded, not swept
//   · white underside to the fluke
//
// ART.orca is looked up at render time, so the Orca Calf follows automatically.

ART.orca = (er) => (
  <g>
    {/* body — heavy chest, tapering the whole way to a narrow tail stock so the
        fluke is part of the animal instead of a shape parked next to it */}
    <path d="M9,43 Q13,41 17,40 Q24,30 36,27 Q50,25 57,32 Q61,36 60,39 Q57,45 45,49 Q28,53 16,48 Q11,46 9,43 Z" fill="#15181c" />
    {/* fluke — a swept crescent off the tail stock, upper and lower lobe */}
    <path d="M12,42 Q7,35 2,28 Q6,29 10,34 Q13,38 15,41 Z" fill="#15181c" />
    <path d="M12,44 Q7,51 3,58 Q7,56 11,51 Q14,47 15,44 Z" fill="#15181c" />
    <path d="M12,44 Q8,49 5,54 Q9,50 13,45 Z" fill="#dedad0" opacity=".8" />

    {/* ventral field — white rides high on the flank behind the flipper */}
    <path d="M16,47 Q28,52 44,49 Q54,46 59,40 Q60,43 57,45 Q48,51 34,52 Q23,52 16,47 Z" fill="#f7f5ee" />
    {/* white lower jaw and throat */}
    <path d="M50,43 Q57,43 60,39 Q60,44 56,46 Q52,47 49,46 Z" fill="#f7f5ee" />

    {/* saddle patch — grey, tucked behind the dorsal. individual to each whale. */}
    <path d="M31,31 Q38,29 42,32 Q37,34 31,34 Z" fill="#6b7079" opacity=".85" />

    {/* dorsal — tall, raked, the tallest of any animal on a big male */}
    <path d="M29,30 Q32,10 35,6 Q37,16 39,31 Z" fill="#15181c" />

    {/* pectoral flipper — broad rounded paddle, attached at the chest */}
    <path d="M40,45 Q41,52 35,58 Q31,53 33,46 Q36,44 40,45 Z" fill="#0e1115" />

    {/* post-ocular patch — angled white oval BEHIND the eye */}
    <ellipse cx="52" cy="34" rx="4.6" ry="2.5" fill="#f7f5ee" transform="rotate(-18 52 34)" />

    {/* mouth line */}
    <path d="M50,41 Q55,42 60,39" stroke="#0b0d10" strokeWidth="1.2" fill="none" strokeLinecap="round" />

    {/* eye — small and dark, just forward of the patch */}
    <Eye x={48.5} y={35.5} r={1.9 * er} iris="#0b0d10" />
  </g>
);

// A calf's patches are peach-tinted for the first months, not white — real,
// and a nice tell that you're looking at a young one.
if (DEX.orca_c) {
  ART.orca_c = (er) => (
    <g transform="translate(32,40) scale(0.62) translate(-32,-36)">
      <g>
        <path d="M9,43 Q13,41 17,40 Q24,30 36,27 Q50,25 57,32 Q61,36 60,39 Q57,45 45,49 Q28,53 16,48 Q11,46 9,43 Z" fill="#1a1e24" />
        <path d="M12,42 Q7,35 2,28 Q6,29 10,34 Q13,38 15,41 Z" fill="#1a1e24" />
        <path d="M12,44 Q7,51 3,58 Q7,56 11,51 Q14,47 15,44 Z" fill="#1a1e24" />
        <path d="M16,47 Q28,52 44,49 Q54,46 59,40 Q60,43 57,45 Q48,51 34,52 Q23,52 16,47 Z" fill="#f2d9c4" />
        <path d="M50,43 Q57,43 60,39 Q60,44 56,46 Q52,47 49,46 Z" fill="#f2d9c4" />
        <path d="M31,31 Q38,29 42,32 Q37,34 31,34 Z" fill="#7a808a" opacity=".8" />
        {/* a calf's dorsal is short and flops over — it stiffens as it grows */}
        <path d="M30,30 Q33,21 35,18 Q37,24 38,31 Z" fill="#1a1e24" />
        <path d="M40,45 Q41,51 36,57 Q32,52 34,46 Q37,44 40,45 Z" fill="#141820" />
        <ellipse cx="52" cy="34" rx="4.4" ry="2.4" fill="#f2d9c4" transform="rotate(-18 52 34)" />
        <path d="M50,41 Q55,42 60,39" stroke="#0b0d10" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <Eye x={48.5} y={35.5} r={1.9 * er} iris="#0b0d10" />
      </g>
    </g>
  );
  DEX.orca_c.org = "patches are peach, not white";
}

// While we're here — the orca's field note deserves the whole truth.
if (typeof INFO !== "undefined") {
  INFO.orca = {
    d: "Carnivore — and it depends entirely on the culture. Resident orcas eat only fish, and will starve beside a seal rather than touch it. Transients eat only mammals. Offshores specialise in sharks, and their teeth are worn to the gums by shark skin.",
    h: "Every ocean on earth, pole to pole — the second-most widely distributed mammal after us",
    s: "DD",
    f: "Not one species so much as many nations. Pods have their own dialects, diets and hunting methods, taught across generations, and they do not interbreed even where they share water. Females live decades past menopause to lead — something almost no animal but us does. The tall dorsal on a male can reach 1.8m, and the white patch behind each eye is shaped differently on every individual, which is how researchers tell them apart.",
  };
}
