// HOW TO GET THE REAL SPECIES NUMBERS.
//
// Do NOT parse the .jsx files. Three separate regex attempts on 2026-08-26 returned
// 461, 516 and 465 species in the twelve biomes. All three were wrong. The answer is
// 519, and it came from running the game and asking it.
//
// Why parsing fails: DEX entries come in two completely different shapes, and any
// pattern that catches one misses the other --
//
//     fennec:   { n: "Fennec Fox", art: "fennec", ... }    object literal
//     aardvark: A("Aardvark", ...)                          constructor call
//
// The original roster - every starter, much of the savanna, the fennec, the hedgehog,
// the cheetah - is written as object literals. A constructor-only parser finds 861 of
// 1000 species and says nothing about the ones it dropped.
//
// ---------------------------------------------------------------------------------
// THE METHOD
//
//   1.  cd C:/Claude/wildlands
//   2.  python -m http.server 8009 &
//   3.  open http://localhost:8009/gallery.html   (it evaluates every game part and
//       re-exports DEX, INFO, BIOME_RULES, BIOME_BY_HAND, BIOME_MERGE, NOT_A_SPECIES,
//       BIOME_FIX, BIOME_MOVE and FR onto window)
//   4.  paste the snippet below into the console, or run it with the browser tool
//   5.  write the result to design/GROUND_TRUTH.txt
//   6.  kill the server
// ---------------------------------------------------------------------------------

(() => {
  const D = window.__DEX, I = window.__INFO, R = window.__RULES, M = window.__MERGE;
  if (!D) return 'not loaded yet - wait for the gallery to finish';

  const NA = {};
  (window.__NA || []).forEach(k => NA[k] = 1);

  // biome_assign.js holds FOUR assignment blocks, applied in file order with later
  // winning. Reading only __HAND throws away every correction Ayr has made.
  const H = Object.assign({}, window.__HAND, BIOME_FIX, BIOME_MOVE, FR);

  const g = {};
  Object.keys(D).forEach(k => {
    const d = D[k], name = d.n || k;
    let key;
    // group membership mirrors groupOf() in game.part59.jsx
    if (d.mem) key = 'vigil';
    else if (d.t && d.t.includes('Fossil')) key = 'fossil';
    else if (d.t && d.t.includes('Mythic')) key = 'mythic';
    else if (d.dom || d.breed) key = 'kept';
    else if (d.juv || d.grows || NA[k]) key = 'lifestage';
    else {
      let b = H[k];
      if (!b) {
        const h = (I[k] && I[k].h) || '';
        for (const [nm, re] of R) { if (re.test(h)) { b = nm; break; } }
      }
      key = b ? (M[b] || b) : 'unplaced';
    }
    (g[key] = g[key] || []).push(name);
  });

  Object.keys(g).forEach(k => g[k].sort());
  return Object.keys(g).sort().map(k => k + '=' + g[k].join('|')).join('\n');
})()
