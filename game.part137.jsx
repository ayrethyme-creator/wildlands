// ---------- Part 137: WINDWARD EYRIE'S LANDMARK, AND THE POLES ----------
// Windward Eyrie reopened and rebuilt 2026-09-26 (forge_sides.py; its animals
// are in part136) as the home of The Poles on the Ridge. Same rules as the
// other landmark parts: the landmark is the animal, the story stays the story.

Object.assign(LANDMARKS, {
  lm_golden_eagle: {
    kind: "goldeneagle", name: "The watcher on the ridge",
    text: "🦅 A golden eagle hunts over open mountains and plains. It folds its wings to dive on its prey at more than 240 kilometres an hour, which makes it one of the fastest animals alive, and its eyes are built for distance: it can pick out a hare moving far below.\n\nWhen it is not flying, it sits and watches from the highest point it can find. On a bare ridge like this one, with no tall trees for miles, the highest point is very often something people put there.",
  },
});

Object.assign(LM_SHAPES, {
  // A golden eagle perched on a rock, wings folded, the gold on its nape.
  goldeneagle: (bg) => propWrap(bg,
    `<path d="M5,29 L8,22 Q16,19 24,22 L27,29 Z" fill="#8a8f96" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M11,22 Q9,15 12,9 Q15,5 19,7 Q22,10 21,16 Q21,20 19,22 Z" fill="#5a3f28" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M13,9 Q16,6 19,7 Q20,9 18,10 Q15,10 13,11 Z" fill="#c9962e"/>` +
    `<path d="M19,8 L23,9 L20,10.6 Z" fill="#e8c547" stroke="${PROP_OUT}" stroke-width=".5"/>` +
    `<circle cx="18" cy="8.4" r=".7" fill="${PROP_DARK}"/>` +
    `<path d="M14,13 Q13,18 15,21" stroke="#3f2a18" stroke-width="1" fill="none"/>` +
    `<path d="M14,22 L13,24 M18,22 L19,24" stroke="#e8c547" stroke-width="1.1"/>`),
});

// A wooden power pole with its crossarm and three insulators: the one high
// perch on the ridge.
Object.assign(DECOR_SHAPES, {
  powerpole: (bg) => propWrap(bg,
    `<rect x="14.8" y="4" width="2.4" height="25" fill="#7a5a3c" stroke="${PROP_OUT}" stroke-width=".6"/>` +
    `<rect x="5" y="7" width="22" height="2" fill="#6a4a2e" stroke="${PROP_OUT}" stroke-width=".5"/>` +
    `<g fill="#c8d4dc" stroke="${PROP_OUT}" stroke-width=".4">` +
    [7, 16, 25].map((x) => `<rect x="${x - 1}" y="4" width="2" height="3"/>`).join("") + `</g>` +
    `<path d="M0,4.6 L32,4.6" stroke="#3a3a3a" stroke-width=".5" opacity=".8"/>`),
});
Object.assign(DECOR_SCALE, { powerpole: [1.2, 1.9] });

// The sign was the falconry gym's, and the gym is gone (part107).
SIGNS["eyrie:7,3"] = "🪧 'WINDWARD EYRIE - the high ridge where the golden eagles hunt, and the power line across it. Look at the poles.'";
