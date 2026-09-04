// ---------- Part 81: A FISH, A BIRD, AND ONE ALREADY HERE ----------
// Ayr, 2026-09-04, asked for art, a guide entry and a badge entry where
// applicable for the Garibaldi, the Marine Iguana and the "Lily Trodder".
//
// THE MARINE IGUANA WAS ALREADY IN THE GAME. It has a DEX row, a sprite in art/
// and a field guide entry about diving thirty metres, sneezing salt and
// reabsorbing its own bone in a bad El Nino year. Nothing was owed, so nothing
// here touches it - re-adding it would have overwritten a good entry with a
// worse one. It gets no badge either, for the reason given at the bottom.
//
// THE NAME. Ayr wrote "Lily Trodder". The bird is the jacana, and the nickname
// the whole family carries is LILY-TROTTER, for feet that spread its weight
// across floating leaves. This goes in as "Lily Trotter" - one letter from what
// Ayr wrote, and the name the bird is actually known by - with the species named
// in the taxon line so the guide is not asserting anything untrue. Rename it in
// one string here if Ayr wants the other spelling.
//
// THE CAP. Ayr, 2026-09-02: the 1000 ceiling applies to Terrane now, not to this
// game. These two take it to 1185.
//
// Learnsets and placement follow part69, unchanged.

const P81 = [];

Object.assign(DEX, (() => {
  const add = (k, n, t, b, c) => { P81.push(k); return { [k]: { n, art: k, t, b, c } }; };
  return Object.assign({},
    // ---- The Kelp Cathedral: kelpz ----
    // Stout and stubborn rather than quick: a male holds one patch of rock for
    // years and wins arguments by refusing to leave it.
    add("garibaldi", "Garibaldi", ["Aquatic", "Wild"], { h: 42, a: 46, d: 48, s: 40 }, 0.4),

    // ---- Reedwater Fen: wetland ----
    // Light, fast on its feet, no fighter at all.
    add("lilytrotter", "Lily Trotter", ["Aerial", "Aquatic"], { h: 36, a: 32, d: 32, s: 60 }, 0.45),
  );
})());

Object.assign(INFO, {
  garibaldi: { taxon: "Hypsypops rubicundus · the only member of its genus, in a family of several hundred damselfishes", d: "Omnivore — sponges and bryozoans mostly, with algae and small invertebrates", h: "Rocky reef and kelp forest off southern California and Baja California, down to about 30 m", s: "LC",
    f: "The orange is the least interesting thing about it. A male clears a patch of rock and then GARDENS it — he grows one particular red seaweed into a fuzzy nest and weeds out every other species that tries to settle there, trimming the patch all year round. He thumps to call females in, and they inspect several nests before choosing, preferring one that already holds another female's eggs, so his first clutch is what helps him get the next. Then he guards it, and will charge a diver many times his size. The young are a different animal to look at: orange scattered with electric blue spots that fade as they grow up. It is California's state marine fish, and taking one in California waters is illegal." },

  lilytrotter: { taxon: "Actophilornis africanus · the African jacana, one of 8 jacanas — the birds called lily-trotters", d: "Carnivore — insects and other small invertebrates picked off floating leaves", h: "Freshwater wetlands with floating vegetation, across sub-Saharan Africa", s: "LC",
    f: "Its toes are about as long as its legs, which spreads its weight across lily pads that would sink anything else its size — that is the whole of the name. The family also turns the usual bird arrangement around. The female is the bigger bird, she holds the territory, and she mates with several males; the MALE builds the nest, sits the eggs and raises the chicks entirely alone. When he moves them he tucks them up under his wings and walks off with several pairs of thin legs dangling below him, which looks like an accident and is not." },
});

// Photographic sprites for both. The matching PNGs are in art/.
//
// THIS IS NOT OPTIONAL FOR A NEW SPECIES. part2 renders a sprite as
// PHOTO_ART[sp] ? <img src={`art/${sp}.png`} /> : ART[d.art](er), and ART holds
// about eighteen hand-drawn vector animals - all of them cats and dogs. A new
// species with no PNG does not fall back to something generic; ART[d.art] is
// undefined and calling it takes the sprite down. So the art and the row have to
// arrive together, which is why this part waited for the pictures.
Object.assign(PHOTO_ART, Object.fromEntries(P81.map((k) => [k, true])));

/* Learnsets and placement — the part69 pattern. */
{
  let built = 0; const thin = [];
  P81.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

  /* Where they live, and where they deliberately do not.

     The garibaldi goes in the KELP and nowhere else. It is a cold-temperate
     rocky-reef fish of the California coast, and this game's reef is a tropical
     coral one - Coral Reef Shallows, with the clownfish and the angelfish in it.
     Putting the garibaldi there would double its encounter rate and make the
     game wrong about where it lives, which is the trade part76 refused to make.
     It goes in poolWater rather than pool because it is a fish: the kelp surface
     pool is otters, sea lions and porpoises.

     The lily-trotter goes in the wetland pool with the kingfisher, the stork and
     the shoebill. It belongs on the surface among floating leaves, not in the
     water pool underneath them. */
  const BY_ZONE = [
    { zone: "kelpz", pool: "poolWater", list: ["garibaldi"] },
    { zone: "wetland", pool: "pool", list: ["lilytrotter"] },
  ];

  const usable = (m, pool) => MAPS[m] && Array.isArray(MAPS[m][pool]) && MAPS[m][pool].length
    && !m.startsWith("vig") && !m.startsWith("arc") && !m.startsWith("town")
    && m !== "aquarium" && !m.startsWith("aqua_");
  const placed = new Set();
  let added = 0;
  const drop = (m, pool, k) => {
    MAPS[m][pool] = [...MAPS[m][pool], [k, 2]];
    const places = WHERE[k] || (WHERE[k] = []);
    if (!places.some((place) => place.k === m)) {
      places.push({ k: m, n: MAPS[m].name, z: MAPS[m].zone,
        lvl: pool === "poolWater" ? (MAPS[m].lvlWater || MAPS[m].lvl) : MAPS[m].lvl });
    }
    added++;
    placed.add(k);
  };

  BY_ZONE.forEach(({ zone, pool, list }) => {
    const maps = Object.keys(MAPS).filter((m) => usable(m, pool) && MAPS[m].zone === zone);
    list.forEach((k) => maps.forEach((m) => drop(m, pool, k)));
  });

  /* ---- The badge ----

     ONE of the three earns one, and the other two do not. From part77's own
     rules: "The badge is the reward. The concept is the payload." A member that
     does not actually belong does not dilute a list, it teaches the concept
     wrongly, so the honest count here is one.

     GARIBALDI -> The Largest. The badge is "biggest of its kind, right across
     the tree of life" - the capybara for rodents, the goliath beetle, the
     goliath frog. The garibaldi is the biggest of the damselfishes, and it sits
     well beside the clownfish that most people picture when they hear the family
     name.

     LILY TROTTER -> nothing, and it is the near miss worth recording. Its
     headline is sex-role reversal: a polyandrous female and a male who incubates
     and raises the brood alone. The closest badge is Dad's Turn, and that badge
     is MALE PREGNANCY - three seahorses and seadragons carrying eggs in a pouch
     on their own bodies. A bird sitting on a nest is a different thing, and
     dropping it in would blur the one idea the badge exists to teach. If Ayr
     wants it covered, it wants its own badge, and that is a Terrane decision:
     BADGES.txt is over there and this file cannot invent one without the two
     games disagreeing about what the fiftieth badge is.

     MARINE IGUANA -> nothing, for the same discipline. It is a spectacular
     animal with no badge-shaped hook: The Island Rule is dwarfism and gigantism
     against a mainland ancestor, and inter-island size variation is not that;
     Grow It Back is regrowing lost parts, and shrinking your own skeleton in a
     famine is not that either.

     This membership is added HERE rather than in BADGES.txt because the
     garibaldi is a species of this game only - Terrane's roster closed at 1000
     and does not contain it - so it could never come back through
     make_badge_part.py. A regeneration of part77 will not carry it, and that is
     correct rather than a bug. */
  const BADGE = "The Largest", MEMBER = "Garibaldi";
  let badgeAdded = 0;
  {
    const b = (typeof BADGES_BOOK !== "undefined")
      ? BADGES_BOOK.find((x) => x.n === BADGE) : null;
    if (b && DEX.garibaldi && !b.keys.some(([k]) => k === "garibaldi")) {
      b.keys.push(["garibaldi", MEMBER]);
      badgeAdded = 1;
    }
    if (typeof BADGE_CARDS !== "undefined") {
      BADGE_CARDS[BADGE + "||" + MEMBER] = "At up to about 35 cm it is the largest of "
        + "the damselfishes — a family whose most familiar member, the clownfish, is a "
        + "fraction of its size. The size is doing a job rather than setting a record. A male "
        + "holds one patch of rock for years, gardens a nest on it and defends it against "
        + "anything that comes near, including divers, and being the biggest damselfish on a "
        + "temperate reef is most of how he keeps winning that argument.";
    }
  }

  const homeless = P81.filter((k) => !placed.has(k));
  const hiddenFromGuide = P81.filter((k) => !(WHERE[k] || []).length);

  console.log(`[part81] a fish and a bird: ${P81.length} species | learnsets: ${built}`
    + ` | pool entries added: ${added} | reachable: ${placed.size}/${P81.length}`
    + ` | guide locations: ${P81.length - hiddenFromGuide.length}/${P81.length}`
    + ` | badge memberships added: ${badgeAdded}`
    + ` | marine iguana left alone: ${INFO.marineiguana ? "already had an entry" : "MISSING"}`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : "")
    + (homeless.length ? ` | NOWHERE TO LIVE: ${homeless.join(", ")}` : "")
    + (hiddenFromGuide.length ? ` | HIDDEN FROM GUIDE: ${hiddenFromGuide.join(", ")}` : ""));
}
