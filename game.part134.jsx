// ---------- Part 134: TIDEWATER OASIS, AND THE WAY TO THE SEA ----------
// 2026-09-26. Ayr: "Turn tide water cove into a desert oasis. And get rid of
// the door that leads to it from the ocean area. Also, [when] you get to the
// volcano area where the entrance to the ocean area is make it very obvious
// that is the next zone and you have to go right to get to it."
//
// The maps are in the forges (forge_desert.py, forge_sea.py,
// forge_volcanic.py; data in parts 113, 123, 119). This part is what the
// forges cannot say: the cove's name, zone and palette, its landmark, the
// banners at Cinder Town's east gate, and the signs' new words.
//
// THE ZONE. The cove was "reefz", so reef animals turned up on the desert
// road. It is "desert" now. Nothing is lost by that: every reefz animal still
// lives on the Coral Reef Shallows and in the Aquarium, which are reefz too.

// A map may name its own palette (m.pal) over its zone's. Only the oasis does:
// desert encounters, desert weather, but palms round the water, not cactus.
PALS.oasis = {
  ground: "#e0cba8", grass: "#b3b87a", grass2: "#c6c690",
  tree: { bg: "#5f8a4a", em: "🌴" }, mount: { bg: "#b8956a", em: "🏜️" },
  water: "#3f8fa8", flower: "🌼",
};
if (MAPS.tidewater) {
  MAPS.tidewater.name = "Tidewater Oasis";
  MAPS.tidewater.zone = "desert";
  MAPS.tidewater.pal = "oasis";
}

Object.assign(LANDMARKS, {
  lm_sandgrouse: {
    kind: "sandgrouse", name: "The water carrier",
    text: "🐦 Sandgrouse nest far out in the open desert, a long way from any water, where there is little to find their eggs. But their chicks cannot fly to a drink.\n\nSo in the morning the father flies to a waterhole - sometimes thirty kilometres or more - wades in, and soaks his belly feathers, which are built to hold water like a sponge. Then he flies home, and the chicks drink from his feathers. One spring like this can be the water for every bird for miles around, which is why nobody here fouls it.",
  },
});

Object.assign(LM_SHAPES, {
  // A sandgrouse standing at the edge of the water, belly feathers dark and wet.
  sandgrouse: (bg) => propWrap(bg,
    `<ellipse cx="16" cy="26" rx="13" ry="4" fill="#3f8fa8" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<ellipse cx="12" cy="25.4" rx="4" ry="1" fill="#8fc6d6" opacity=".7"/>` +
    `<path d="M8,18 Q9,11 16,11 Q22,11 24,15 L28,14 L25,18 Q22,22 15,22 Q9,22 8,18 Z" fill="#c9a86a" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M10,19 Q15,22.4 21,20" stroke="#6e5236" stroke-width="2" fill="none"/>` +
    `<g fill="#8a6a45"><circle cx="13" cy="15" r=".8"/><circle cx="16" cy="14" r=".8"/><circle cx="19" cy="15.4" r=".8"/></g>` +
    `<circle cx="8.6" cy="13" r="3" fill="#d9b878" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<path d="M5.8,13.4 L4,14 L5.8,14.4 Z" fill="#6e5236"/>` +
    `<circle cx="8" cy="12.4" r=".6" fill="${PROP_DARK}"/>` +
    `<path d="M13,22 L12.4,25 M17,22 L17.6,25" stroke="#8a6a45" stroke-width=".9"/>`),
});

// Cinder Town's east gate: a tall pole with a blue sea banner, three white waves
// on it. Black and red is the whole town; this is the one cold colour,
// and there is one either side of the gate.
Object.assign(DECOR_SHAPES, {
  seabanner: (bg) => propWrap(bg,
    `<rect x="7" y="2" width="2" height="27" fill="#5a4a3c" stroke="${PROP_OUT}" stroke-width=".6"/>` +
    `<circle cx="8" cy="2.4" r="1.6" fill="#e8c547" stroke="${PROP_OUT}" stroke-width=".5"/>` +
    `<path d="M9,4 L27,4 L27,21 L18,17.6 L9,21 Z" fill="#2f7fc0" stroke="${PROP_OUT}" stroke-width="1"/>` +
    [8, 12.4, 16.8].map((y) => `<path d="M11,${y} Q13.5,${y - 2.4} 16,${y} Q18.5,${y + 2.4} 21,${y} Q23.5,${y - 2.4} 25.4,${y - 0.4}" stroke="#e8f4ff" stroke-width="1.4" fill="none" stroke-linecap="round"/>`).join("")),
});
Object.assign(DECOR_SCALE, { seabanner: [1.5, 2.3] });

Object.assign(SIGNS, {
  "tidewater:3,2": "🪧 'TIDEWATER OASIS - a spring in the dunes, and the last sure water before the Wash. Rest, drink, fill every bottle.'",
  "tidewater:11,1": "🪧 'Where the water comes from: under the Sahara lies rain that fell thousands of years ago, when the desert was green. Its oases are the places where that old water reaches the surface - and almost none of it is being refilled. Every oasis is living on savings.'",
  "tidewater:4,7": "🪧 'A date palm wants its feet in the water and its head in the fire, the saying goes. In its shade grow fruit trees, and in theirs, vegetables: three layers of garden, each keeping the sun off the next. That is how an oasis feeds a town.'",
  "tidewater:11,7": "🪧 'Oasis rule: take what you need and not a cupful more. The water here has to last everyone - and everything - that comes after you.'",
  "tidewater:boats": "🪧 'No boats here - just sand, all the way down. The boats to the open sea sail from EMBERGLASS SHORE, east of Cinder Town, when you are ready for deep water.'",
  "shore:west": "🪧 '⟵ CINDER TOWN.'",
  "town8:gate2": "🪧 'EMBERGLASS SHORE ⟶  THE WAY ON. Black sand, the Aquarium, and the boats out to the four seas.'",
  "town8:next": "🪧 'NEXT: EMBERGLASS SHORE ➡  Go EAST - across the square and out through the gate between the blue banners. The sea is waiting.'",
});
