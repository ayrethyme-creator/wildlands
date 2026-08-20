// ---------- Part 65: THE WORK, PUT INTO THE WORLD ----------
// part58 wrote eleven more knots and four post-game ones - all the evidence,
// all the proposals, the pond levellers and turtle excluders and amber street
// lighting - and never placed a single person or finding on a map. The arcs
// existed as data and had no presence in the game at all. You could pitch them
// to Amara having found out nothing, because there was nothing to go and find.
//
// This puts them in. For each arc: the person who has the problem, who is also
// where a funded proposal gets built (part4 reads `builds`), and one findable
// thing per piece of evidence.
//
// The findings are generated from the arc's own data rather than rewritten.
// Each evidence entry already carries `how` - the thing you actually do to
// learn it - and `detail`, which is the note. So the scene is "You " + how, and
// the note is the detail verbatim. That keeps part58's writing as the writing,
// and means any arc added later is placed automatically by adding a cast entry.

// The person with the problem in each region. Their voice follows part47's
// rule: everyone is behaving reasonably and there is no villain anywhere.
const ARC_CAST = {
  millrace: {
    who: "Ada Oyelaran", em: "👩🏿‍🌾", find: "💧",
    line: "There is a family of beavers on that stretch and four hectares of my pasture under water "
        + "because of them. I have broken the dam open more times than I can count and it is back by "
        + "Thursday morning.\n\nI am not asking anybody to kill anything. The beavers are not doing it "
        + "at me. I am asking for it to stop.",
    build: "Amara signed it? Then let us get the pipe in before the next rain.",
  },
  granary: {
    who: "Ifeoma Balogun", em: "👩🏿‍🌾", find: "🌾",
    line: "We cleared the snakes out of the plantation. Everybody agreed, and I agreed loudest.\n\n"
        + "Now I lose a third of the store to rats every season, and a child was bitten in the yard "
        + "in April, which never once happened while the snakes were still in the trees.",
    build: "You have been to the clinic and you have been in my store. Show me what you want to try.",
  },
  tidewater: {
    who: "Skipper Rosa Delgado", em: "🧑🏽‍✈️", find: "🪝",
    line: "Every skipper on this water knows what comes up in the net and not one of us enjoys it.\n\n"
        + "But we are working on a margin you could lose in one bad week. So do not come and tell me "
        + "to fish less. Come and tell me something I can afford.",
    build: "If it costs me four percent, I can live with four percent. Show me.",
  },
  canopygap: {
    who: "Ranger Tomas Reyes", em: "🧑🏽‍🌾", find: "🌉",
    line: "The road takes ninety seconds to drive and it took about four metres of canopy.\n\n"
        + "The tamarins will not come down to cross it, and nothing else that lives up there will "
        + "either. So they do not cross. We have two troops now where there was one, and neither half "
        + "knows the other is still there.",
    build: "You have walked the gap and you have counted. Let us get the span up.",
  },
  sunfield: {
    who: "Surveyor Nadia Haddad", em: "👩🏽‍🔬", find: "🔆",
    line: "I want this field built. Clean power for the whole province, and I will not be the person "
        + "who stopped it.\n\nBut they have sited it on the best burrow ground in the desert, there is "
        + "dead ground a kilometre west, and nobody has sat down and done the sums.",
    build: "Right. Take me through it and I will take it to the developer myself.",
  },
  lowstrand: {
    who: "Mason Bram", em: "🧔🏽", find: "🔩",
    line: "The fence keeps my cattle in and it keeps the poachers out, and I am not taking it down "
        + "for you or anyone.\n\nBut I walked the boundary with a bucket last month and I filled it, "
        + "and I would rather not do that again.",
    build: "One strand? That is the whole of it? Show me and it is done by the weekend.",
  },
  highpasture: {
    who: "Ilse Brunner", em: "👩🏼‍🌾", find: "🐾",
    line: "They call me the wolf woman up here, and it is not meant kindly.\n\nMy grandfather cleared "
        + "them off this mountain. Now they are back and the shepherds are losing lambs. Both of those "
        + "are true at the same time, and I am tired of being asked to pick one.",
    build: "You have sat with old Petra and you have seen the flock. Let us get the dogs in.",
  },
  frostwatch: {
    who: "Mayor Silje Hansen", em: "👩🏼‍💼", find: "🗑️",
    line: "A bear came down the school route in September. Nobody was hurt and I have not slept "
        + "properly since.\n\nDo not tell me the bears were here first. I know they were. Tell me what "
        + "to do about the walk to school.",
    build: "Cover the tip and staff the patrol. Say it plainly and I will find the money.",
  },
  ashfields: {
    who: "Herder Tefo Molefe", em: "🧑🏿‍🌾", find: "🔥",
    line: "We burn to bring the new grass on. My father burned. His father burned.\n\nNow somebody "
        + "from the station tells me there is a rabbit that lives in the old grass and nowhere else on "
        + "earth. I believe them. I still have cattle to feed.",
    build: "A rotation. Not a ban. Say it that way to the others and they will listen.",
  },
  eyrie: {
    who: "Lineworker Dana Iyer", em: "👩🏽‍🔧", find: "⚡",
    line: "I find them under the poles. The same poles, over and over — I could tell you which ones "
        + "before I am out of the truck.\n\nThe line has to cross the ridge. The ridge is where the "
        + "eagles are. Neither of those facts is going to change.",
    build: "You have mapped the poles against the deaths. Good. The utility listens to maps.",
  },
  nightgrove: {
    who: "Councillor Bea Lindqvist", em: "👩🏼‍💼", find: "💡",
    line: "People asked for lighting on that road for fifteen years. I got it for them. They walk it "
        + "after dark now and they are glad of it.\n\nThen somebody tells me the air above it has gone "
        + "empty. I am not taking the lights out. Do not ask me for that.",
    build: "Warmer, lower, shielded. If that is genuinely all of it, I can carry it through the council.",
  },
  longline: {
    who: "Dr. Marisol Vega", em: "👩🏽‍💼", find: "🎣",
    line: "The albatross cross oceans. The rules stop at borders.\n\nI can get one fleet into a room "
        + "and the other three carry on exactly as before, and an albatross does not care whose flag "
        + "killed it.",
    build: "Four fleets, one room, one standard. It will take two years. Let us start.",
  },
  hearth: {
    who: "Rescue Lead Hana Okada", em: "👩🏻‍⚕️", find: "🏠",
    line: "We are full. We have been full since March.\n\nHalf of what comes through that door — the "
        + "pythons, the iguanas, the parrots that will outlive the person who bought them — was sold "
        + "as a thing that would stay small. They are not bad people. They were told a lie at the "
        + "point of sale, and the animal is what pays for it.",
    build: "A waiting period, and honest adult sizes at the point of sale. Let us write it.",
  },
  digsite: {
    who: "Dr. Yusuf Karim", em: "🧑🏽‍🔬", find: "🦴",
    line: "The bed is being stripped at night, and before you say it — the people doing it live here.\n\n"
        + "They are not villains. They are the only people for forty kilometres who can look at a slope "
        + "and tell you where the good rock is. That is the entire problem in one sentence.",
    build: "Put them on the payroll. Say it to Amara exactly like that.",
  },
  mythhub: {
    who: "Nomsa Dlamini", em: "👩🏿‍🏫", find: "📜",
    line: "The stories are doing real harm to real animals. That part is not in question.\n\nBut walk "
        + "in and tell people their grandmother's story is a lie and you will lose, and you will deserve "
        + "to. There is a way to do this and it is slower than you want it to be.",
    build: "With the practitioners, not against them. That is the whole plan. Let us go.",
  },
};

// The animal at the centre of each knot, named out loud.
//
// part58 writes the situation beautifully and then, in most of these, never
// says what the animal actually is: "the predators", "the animals that live
// above the ground", "a rabbit that lives in the old grass". A player who
// cannot name the animal cannot look it up in the Field Guide, cannot go and
// catch one, and has no way to connect the person's problem to a thing they
// have actually met in the grass. So every introduction now names it.
//
// `sp` is the DEX key, which keeps this honest - if a species is ever renamed
// or retired the check below says so in the console instead of silently
// introducing an animal that no longer exists.
const ARC_ANIMAL = {
  // beeloud and reedwater are not listed here on purpose: their people are
  // hand-written and hand-placed by part48 and part52, not dealt out from
  // ARC_CAST, so an entry here would never be read. Both name their animal in
  // their own opening lines instead - Thabo says honey badger, Beatrix names
  // the ground-nesters and the cats.
  millrace:    { sp: "beaver",              says: "Beavers. A family of them, dam and all." },
  granary:     { sp: "python",              says: "Ball pythons. That is what we cleared out of the trees." },
  tidewater:   { sp: "greenseaturtle",      says: "Green sea turtles. That is what comes up in the net." },
  canopygap:   { sp: "tamarin",             says: "Golden tamarins. They live up there and they will not come down." },
  sunfield:    { sp: "nakedmolerat",        says: "Naked mole-rats. The whole colony is under that site." },
  lowstrand:   { sp: "pangolin",            says: "Pangolins. They walk into the bottom wire and they do not get out." },
  highpasture: { sp: "wolf",                says: "Wolves. I will say it plainly, since nobody else up here will." },
  frostwatch:  { sp: "polarbear",           says: "Polar bears. One came down the school route in September." },
  ashfields:   { sp: "volcanorabbit",       says: "Volcano rabbits. They live in the old grass and nowhere else on earth." },
  eyrie:       { sp: "goldeneagle",         says: "Golden eagles. I find them under the poles." },
  nightgrove:  { sp: "greaterhorseshoebat", says: "Greater horseshoe bats. They used that road and now they do not." },
  longline:    { sp: "albatross",           says: "Wandering albatross. They cross oceans; the rules stop at borders." },
  hearth:      { sp: "python",              says: "Ball pythons, mostly. Sold as something that would stay small." },
  digsite:     { sp: "archaeopteryx",        says: "Archaeopteryx, and what is in the rock around it." },
  mythhub:     { sp: "pangolin",            says: "Pangolins, more than anything else. The scales are the trade." },
};

// Where each investigation is introduced.
//
// One per road, and no more. The rule this enforces is Ayr's: by the time you
// walk into Town 2 you should have met exactly one person with a problem, not
// three. Meeting three at once is not a richer game, it is an unreadable one.
//
// The arithmetic does not fit on its own. There are thirteen main-line
// investigations and only nine roads, because five of the gym stretches have no
// country of their own at all - the apiary and Delta Town share an approach,
// and so do three later pairs, so those stretches come out empty and cannot
// hold anybody. Four investigations therefore have no road to stand on.
//
// Those four move to the champion-gated hubs, which is where they belong
// anyway: they are the longest and least forgiving of the knots, and they read
// better as work you take on after the Citadel than as one more person stopping
// you on the way to a gym. Each hub already holds one post-game arc and now
// holds a second, which is comfortable because a hub is somewhere you travel to
// deliberately and stand still in, not a road you are trying to walk down.
//
// Anything not listed here falls back to the derived placement below.
const INTRO_AT = {
  // --- the main line: one per road, in the order you walk them ---
  beeloud:     "route1",   // honey badger and the hives
  reedwater:   "route2",   // the fen cats  (already hand-placed here by part52)
  granary:     "route3",   // the cleared pythons
  tidewater:   "route4",   // turtles in the prawn nets
  lowstrand:   "route5",   // pangolins and the bottom wire
  highpasture: "route6",   // wolves back on the mountain
  ashfields:   "route7",   // volcano rabbits and the burning
  nightgrove:  "route8",   // horseshoe bats and the new lights
  frostwatch:  "route9",   // polar bears at the edge of town

  // --- the four with no road, moved past the Elite Four ---
  millrace:    "rescue",   // Hearthside: the beaver dam and the flooded pasture
  canopygap:   "mythhub",  // Rift Crossroads: the tamarins and the severed canopy
  sunfield:    "digsite",  // Fossil Rift: mole-rat burrows under the solar field
  eyrie:       "vigil",    // the Vigil: golden eagles dying on the poles

  // --- already post-game, left where they are ---
  hearth:      "rescue",
  digsite:     "digsite",
  mythhub:     "mythhub",
  longline:    "openocean",
};

(() => {
  // Tiles another map sends the player onto. Standing a person there means the
  // player arrives inside them, which part48 hit with Amara and had to move.
  const arrivals = {};
  Object.values(MAPS).forEach((M) => {
    Object.values(M.exits || {}).forEach((e) => {
      if (e && e.map) (arrivals[e.map] = arrivals[e.map] || new Set()).add(e.x + "," + e.y);
    });
  });

  // A person stands on an "R" tile, and part4 only lets you walk onto an R once
  // that trainer is beaten - which never happens for a chat NPC. So a person is
  // a permanent wall. Two things follow: they must never sit somewhere with no
  // walkable tile beside them (you could not reach them to talk), and two of
  // them must never sit side by side (they can wall each other in). The reef has
  // fourteen free tiles for six people, so this is not hypothetical.
  const WALKABLE = ".gGp*W";

  // Which floor the player can actually get to, flooding out from the tiles the
  // world drops them on. A map can have a walled-off pocket of perfectly good
  // floor in it, and a finding hidden in one is a finding nobody can collect.
  const reachable = (mapKey) => {
    const M = MAPS[mapKey], seen = new Set();
    const starts = [...(arrivals[mapKey] || [])];
    const ok = (x, y) => {
      const row = M.rows[y];
      // `row[x] || ""` past the end of a row gives "", and includes("") is
      // true for every string - so every tile off the edge of the map tested
      // as walkable and the flood fill escaped into open space. It still
      // returned a plausible-looking set, which is why this survived: the
      // reachable region was right in the middle and wrong at the borders, so
      // findings could be placed against an edge the player cannot get to.
      if (!row || x < 0 || x >= row.length) return false;
      const c = row[x];
      return !!c && WALKABLE.includes(c);
    };
    starts.forEach((s) => {
      const [sx, sy] = s.split(",").map(Number);
      // The arrival tile itself is often a door in the border, so seed from the
      // floor beside it as well.
      [[sx, sy], [sx + 1, sy], [sx - 1, sy], [sx, sy + 1], [sx, sy - 1]]
        .forEach(([x, y]) => { if (ok(x, y)) { seen.add(x + "," + y); } });
    });
    const q = [...seen].map((k) => k.split(",").map(Number));
    while (q.length) {
      const [x, y] = q.pop();
      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
        const nx = x + dx, ny = y + dy, k = nx + "," + ny;
        if (!seen.has(k) && ok(nx, ny)) { seen.add(k); q.push([nx, ny]); }
      });
    }
    return seen;
  };

  // Free floor on a map, in a fixed order so placement is identical every load
  // and a saved position never lands on a tile that moved.
  const freeTiles = (mapKey) => {
    const M = MAPS[mapKey], out = [];
    const arrive = arrivals[mapKey] || new Set();
    const live = reachable(mapKey);
    for (let y = 1; y < M.rows.length - 1; y++) {
      for (let x = 1; x < M.rows[y].length - 1; x++) {
        const at = x + "," + y;
        if (M.rows[y][x] !== ".") continue;
        if (arrive.has(at) || (M.exits && M.exits[at])) continue;
        if (TRAINERS[mapKey + ":" + at]) continue;
        // Stand only where the player can walk up to them.
        if (![[1, 0], [-1, 0], [0, 1], [0, -1]]
              .some(([dx, dy]) => live.has((x + dx) + "," + (y + dy)))) continue;
        out.push([x, y]);
      }
    }
    return out;
  };

  // Spread them across the map rather than clumping them in one corner, while
  // refusing any tile orthogonally touching one already taken.
  const spread = (list, n) => {
    const picked = [], touching = ([x, y]) =>
      picked.some(([px, py]) => Math.abs(px - x) + Math.abs(py - y) <= 1);
    const step = Math.max(1, list.length / n);
    for (let i = 0; i < n; i++) {
      let idx = Math.min(list.length - 1, Math.floor(i * step)), found = null;
      for (let off = 0; off < list.length && !found; off++) {
        const c = list[(idx + off) % list.length];
        if (!touching(c)) found = c;
      }
      if (found) picked.push(found);
    }
    return picked;
  };

  const lower = (s) => s.charAt(0).toLowerCase() + s.slice(1);

  // ---- which maps an arc may scatter across ----
  // Findings all sitting on one screen is not an investigation, it is a queue.
  // part42 already carves the world into the ground before each gym, by walking
  // the exit graph, and the field exams use it - so it is the honest definition
  // of "this region" and it is reused here rather than inventing another.
  //
  // Two traps. The arc's own `region` number is the author's numbering and does
  // NOT index REGION_MAPS: canopygap is region 6, and REGION_MAPS[6] is the open
  // ocean. So the bucket is found by asking which one actually contains the
  // arc's home map. And a bucket is "everything reachable before the next gym",
  // which sweeps in high-level side branches - bucket 2 holds Reedwater Fen at
  // level 10 and the level 50-60 kennels both. Scattering into those would
  // repeat the Mr Adeyemi mistake exactly, so candidates are also held to within
  // ten levels of the arc's home map.
  const bucketOf = (mapKey) => {
    for (const n in REGION_MAPS) if (REGION_MAPS[n].indexOf(mapKey) >= 0) return n;
    return null;
  };
  const band = (mapKey) => {
    const M = MAPS[mapKey], l = M && (M.lvl || M.lvlWater);
    return l ? (l[0] + l[1]) / 2 : null;
  };
  // The screens within a few doors of an anchor, nearest first. Used only for
  // the champion hubs, which are not on any road and so have no walk of their
  // own - the Vigil, the Rift, Hearthside and the Fossil Rift each sit in a
  // little cluster of their own maps.
  const neighbourhood = (anchor, hops) => {
    const seen = new Set([anchor]);
    const out = [];
    let frontier = [anchor];
    for (let d = 0; d < hops; d++) {
      const next = [];
      frontier.forEach((cur) => {
        Object.values((MAPS[cur] || {}).exits || {}).forEach((e) => {
          if (e && e.map && MAPS[e.map] && !seen.has(e.map)) {
            seen.add(e.map); out.push(e.map); next.push(e.map);
          }
        });
      });
      frontier = next;
    }
    return out;
  };

  // ---- the walk out of each town, in order ----
  //
  // part11 does not scatter the world about: it chains each road into a fixed
  // sequence of screens you walk through, road first, then its segments in
  // order, then the next town. Leaving Baobab Base that reads
  //
  //   town1 -> route1 Acacia Trail -> seg_m1 Fernhollow Path
  //         -> seg_m2 Sunmote Meadow -> seg_m3 The Old Fence Line
  //         -> seg_m4 Beeloud Clearing -> seg_m5 Marula Approach -> town2
  //
  // and that sequence is the answer to where an investigation's clues belong:
  // the person on the road, then their findings spread one per screen along the
  // walk that follows, all of it gathered before the next town.
  //
  // Everything before this dealt findings out of REGION_MAPS buckets instead,
  // which are flood-filled catchments rather than a route - they know that
  // Beeloud Clearing is somewhere in region 1, but nothing about it being the
  // fourth screen out of town. That is why all four of Thabo's clues landed on
  // that one map: the bucket offered it, and nothing said the walk had five
  // screens in it that a player passes in a known order.
  const ROAD_CHAIN = {};
  (typeof ROADS !== "undefined" ? ROADS : []).forEach(([routeKey, , , segs]) => {
    ROAD_CHAIN[routeKey] = segs
      .map(([k]) => "seg_" + k)
      .filter((m) => MAPS[m]);
  });

  // One map, one investigation. On the roads this comes free - a road carries
  // exactly one arc, so its chain cannot be contested. In the champion hubs it
  // does not: two arcs share each hub, and without a claim they interleave, so
  // the beaver clues and the rescue clues end up on the same kennel screens.
  // Seeded from what is already on the map, so the hand-placed beeloud and
  // reedwater findings hold their ground before this file hands any out.
  const mapClaim = {};
  Object.keys(TRAINERS).forEach((k) => {
    const t = TRAINERS[k];
    if (t && t.arc && t.learns) {
      const m = k.split(":")[0];
      if (!mapClaim[m]) mapClaim[m] = t.arc;
    }
  });

  // The champion hubs are not on any road, so they have no chain of their own -
  // but each one does sit in a themed cluster of its own screens, and those are
  // the walk. Written out rather than found by flooding outward, because
  // flooding wanders: from the Fossil Rift it reaches Dune Town and the reef
  // inside three doors, and the solar-field clues went out into country that has
  // nothing to do with the dig.
  //
  // Two hubs carry two investigations each. There is room - nine rift screens
  // and ten at the Vigil - and the claim below keeps them off each other.
  const HUB_WALK = {
    // The cattery is not one chain. Sunroom -> Long Coats -> Shorthairs runs
    // off one door of Hearthside, and The Wild Line is a door of its own - so
    // a player reaches Shorthairs before ever seeing The Wild Line. Listing
    // them in key order put clue three on The Wild Line and clue four on
    // Shorthairs, which is the walk doubling back on itself.
    rescue:    ["kennel5", "kennel4", "kennel1", "kennel2", "kennel3",
                "cattery1", "cattery2", "cattery4", "cattery3"],
    mythhub:   ["rift1", "rift2", "rift3", "rift4", "rift5",
                "rift6", "rift7", "rift8", "rift9", "rift10"],
    digsite:   ["dig1", "dig2", "dig3", "dig1b", "dig2b",
                "dig3b", "dig1c", "dig2c", "dig3c", "dig3d"],
    vigil:     ["vig1", "vig2", "vig3", "vig4", "vig5",
                "vig6", "vig7", "vig8", "vig9", "vig10"],
    // The two marine arcs are handled by SEA_WALK below rather than here. Dealt
    // exclusively out of this table, as every other cluster is, they starved
    // each other - see the note there.
  };
  Object.keys(HUB_WALK).forEach((h) => {
    HUB_WALK[h] = HUB_WALK[h].filter((m) => MAPS[m]);
  });

  // Filled in below, once introMapFor exists: arcId -> the screens its findings
  // may use, in the order the player walks them.
  const WALK_OF = {};
  const clueWalk = (arcId, intro) => WALK_OF[arcId] || neighbourhood(intro, 2);

  let placedPeople = 0, placedFindings = 0, skipped = [], scatter = [];

  // Placement is per-map: each person becomes a wall, so the map has to be
  // re-read between placements, and nobody already standing there - mine or
  // anyone else's - may be walled in.
  const takenBy = {};
  const placeOn = (mapKey, want, def) => {
    const M = MAPS[mapKey];
    if (!M) return false;
    const taken = takenBy[mapKey] = takenBy[mapKey] || [];

    const peopleHere = () => Object.keys(TRAINERS)
      .filter((k) => k.indexOf(mapKey + ":") === 0)
      .map((k) => k.split(":")[1].split(",").map(Number));

    const everyoneStillReachable = (cx, cy) => {
      const saved = M.rows[cy];
      M.rows[cy] = saved.slice(0, cx) + "R" + saved.slice(cx + 1);
      const live = reachable(mapKey);
      const ok = peopleHere().concat([[cx, cy]]).every(([x, y]) =>
        [[1, 0], [-1, 0], [0, 1], [0, -1]]
          .some(([dx, dy]) => live.has((x + dx) + "," + (y + dy))));
      M.rows[cy] = saved;
      return ok;
    };

    const free = freeTiles(mapKey).filter(([x, y]) =>
      !taken.some(([tx, ty]) => Math.abs(tx - x) + Math.abs(ty - y) <= 1));
    if (!free.length) return false;
    const ordered = spread(free, Math.max(1, want)).concat(free);
    const pick = ordered.find(([x, y]) => everyoneStillReachable(x, y));
    if (!pick) return false;
    taken.push(pick);
    const [x, y] = pick;
    M.rows[y] = M.rows[y].slice(0, x) + "R" + M.rows[y].slice(x + 1);
    TRAINERS[mapKey + ":" + x + "," + y] = { chat: true, ...def };
    return true;
  };

  // ---- where the player is introduced to the animal ----
  //
  // The person used to stand on the arc's home map, which is where the problem
  // physically is - the fen with the dam in it, the ridge with the poles. That
  // is tidy and it is also why you could walk past three investigations without
  // meeting any of them: the home map is somewhere in the middle of a region,
  // and nothing sends you to it.
  //
  // Every region begins with exactly one road out of a town, so that road is
  // the one tile of ground every player crosses on the way in. The person with
  // the problem stands there now. You leave town, you meet them, you are told
  // what the animal is, and then you go and find the rest.
  const isRoute = (m) => /^route\d+$/.test(m);
  const routeOfRegion = (mapKey) => {
    const b = bucketOf(mapKey);
    return b ? (REGION_MAPS[b] || []).find(isRoute) || null : null;
  };
  // The four ocean arcs sit in open water, and no town road reaches a region
  // made of reef and abyss, so they need a road chosen for them.
  //
  // Walking the map graph outward for the nearest road is the obvious way and
  // it is wrong: every ocean map connects back through the same shallow water,
  // so all four came out on route4 - the polar bears introduced in the tropics
  // immediately after Town 4, one road carrying four separate investigations.
  //
  // Matching on level band instead puts each one on the road whose country is
  // the same difficulty as the water it concerns. The abyss and the polar sea
  // are late-game water and land on late-game roads; the reef is mid and stays
  // mid. Ties break toward the earlier road so an arc is never introduced after
  // the point the player could already have finished it.
  const allRoutes = Object.keys(MAPS).filter(isRoute)
    .sort((a, b) => (parseInt(a.slice(5), 10) || 0) - (parseInt(b.slice(5), 10) || 0));
  const routeByBand = (home) => {
    const h = band(home);
    if (h === null) return null;
    let best = null, bestGap = Infinity;
    allRoutes.forEach((r) => {
      const x = band(r);
      if (x === null) return;
      const gap = Math.abs(x - h);
      if (gap < bestGap) { bestGap = gap; best = r; }
    });
    return best;
  };
  // Each arc also carries its own `region` number, which is the order the
  // player is meant to meet them in, and that is a better signal than distance
  // for the ocean arcs: the reef work belongs to the stretch after Town 4 even
  // though the reef itself is a swim away. Walking back from the arc's own
  // number finds the last road laid before it, which is the road the player was
  // on when that stretch began. Band matching stays as the final fallback for
  // the post-game arcs whose numbers run past the end of the gym ladder.
  const routeOfArcRegion = (arcId) => {
    const n = ARCS[arcId] && ARCS[arcId].region;
    if (!n) return null;
    for (let i = Math.min(n, GYM_ORDER.length); i >= 1; i--) {
      const r = (REGION_MAPS[i] || []).find(isRoute);
      if (r) return r;
    }
    return null;
  };
  // The pinned assignment wins. It encodes a pacing decision that no amount of
  // graph-walking can work out on its own, and it fails loudly rather than
  // silently drifting if a map is ever renamed.
  const introMapFor = (arcId, home) => {
    const pinned = INTRO_AT[arcId];
    if (pinned) {
      if (MAPS[pinned]) return pinned;
      skipped.push(arcId + ":pinned-map-missing:" + pinned);
    }
    return routeOfRegion(home) || routeOfArcRegion(arcId) || routeByBand(home) || home;
  };

  // ---- hand out the walks, roads first ----
  //
  // Roads have to go first and claim their whole chain. A hub arc's
  // neighbourhood spills several doors in every direction and will happily eat
  // segments of a road belonging to somebody else: the albatross work reached
  // inland as far as the Dry Riverbed, and the polar bears took a screen of the
  // Gloam road out from under the bats. Claiming the roads first leaves the hubs
  // only what is genuinely spare.
  const arcsToPlace = Object.keys(ARC_CAST).filter((a) => ARCS[a]);
  const introOf = {};
  arcsToPlace.forEach((a) => { introOf[a] = introMapFor(a, ARCS[a].where); });
  // A person's own screen belongs to them. Without this the hub arcs wander onto
  // each other's doorsteps - the polar bears put a finding on the floor of the
  // Rift Crossroads, and the albatross one in the middle of the Fossil Rift camp.
  arcsToPlace.forEach((a) => { if (!mapClaim[introOf[a]]) mapClaim[introOf[a]] = a; });

  arcsToPlace.forEach((a) => {
    const road = ROAD_CHAIN[introOf[a]];
    if (!road || !road.length) return;
    WALK_OF[a] = road;
    road.forEach((m) => { if (!mapClaim[m]) mapClaim[m] = a; });
  });
  // The sea is the one case the road/hub split does not cover, and both marine
  // investigations were wrecked by being forced through it.
  //
  // It is neither a road nor a cluster. Tidewater Cove is a town with four
  // doors off it - reef, kelp, open ocean, polar ice - and the Midnight Zone
  // hangs off the open ocean. Five screens of water in total, and two
  // investigations wanting five findings each.
  //
  // Dealt exclusively, the way every other walk is dealt, they starved each
  // other: the polar work claimed the ice and the deep, the albatross work was
  // left the reef and the kelp, and each then had to lay five findings across
  // two screens. Ice Floe, the deep, Ice Floe, the deep, Ice Floe. Three of the
  // five clues on one screen and the walk turning round twice - which is the
  // same fault as all four of Thabo's clues on Beeloud Clearing, arrived at
  // from the opposite direction.
  //
  // So these two share the water, and each walks it in its own order, starting
  // where its animal actually is. Sharing is much the lesser problem: the
  // screens are wide, placeOn keeps findings well apart, and a clue about
  // longlines has never been mistakable for a clue about sea ice. Neither list
  // includes the open ocean, because that is where the albatross woman stands
  // and nobody's findings belong on a person's own screen.
  const SEA_WALK = {
    frostwatch: ["polarsea", "abyss", "kelp", "reef"],   // out from the ice
    longline:   ["reef", "kelp", "polarsea", "abyss"],   // out from the shallows
  };
  arcsToPlace.forEach((a) => {
    if (WALK_OF[a] || !SEA_WALK[a]) return;
    WALK_OF[a] = SEA_WALK[a].filter((m) => MAPS[m]);
    // Deliberately claims nothing. These two are the only arcs allowed onto
    // each other's ground, and claiming would put us straight back to two
    // screens apiece.
  });

  // Then the hubs, each off its own cluster, taking only screens no road and no
  // earlier hub arc has taken - and taking only as many as it has findings for.
  // Without that cap the first arc dealt swallows the whole cluster and the one
  // sharing the hub with it gets nothing: the tamarins took all ten rift screens
  // and the Rift's own investigation fell back to dumping five findings on the
  // floor of Gloam Town.
  arcsToPlace.forEach((a) => {
    if (WALK_OF[a]) return;
    const cluster = HUB_WALK[introOf[a]];
    if (!cluster || !cluster.length) return;
    const need = Object.keys((ARCS[a] && ARCS[a].evidence) || {}).length || 5;
    WALK_OF[a] = cluster
      .filter((m) => !mapClaim[m] || mapClaim[m] === a)
      .slice(0, need);
    WALK_OF[a].forEach((m) => { if (!mapClaim[m]) mapClaim[m] = a; });
  });
  // Anything still without ground falls back to flooding outward, which is
  // worse but never leaves an arc unplaceable.
  arcsToPlace.forEach((a) => {
    if (WALK_OF[a] && WALK_OF[a].length) return;
    skipped.push(a + ":no-cluster-for:" + introOf[a]);
    WALK_OF[a] = neighbourhood(introOf[a], 4)
      .filter((m) => !mapClaim[m] || mapClaim[m] === a);
    WALK_OF[a].forEach((m) => { if (!mapClaim[m]) mapClaim[m] = a; });
  });

  // ---- and finally, put every walk in the order it is actually walked ----
  //
  // The lists above are written by hand, and a hand-written list encodes where
  // the writer thinks the story starts rather than where the player comes in
  // from. SEA_WALK had the polar bear findings running "out from the ice" -
  // polar sea, the deep, kelp, reef - which reads beautifully and is backwards,
  // because nobody arrives at the ice. Every route into that water is a door
  // off Tidewater Cove, so a player walking out of the cove met finding four on
  // the reef before finding one out on the floes. That is exactly the fault
  // Ayr reported, and I had already seen it in a diagnostic and talked myself
  // out of it as a branch being walked in a sensible order. It was not.
  //
  // Sorting by real distance from the person makes the fault unrepresentable
  // rather than fixed: a later finding can never sit closer to the quest-giver
  // than an earlier one, whatever anybody writes in the tables above. Roads
  // already run outward so this changes nothing there; it only straightens the
  // hubs and the sea, where the walk is a set of doors rather than a corridor.
  //
  // The sort is stable, so screens the same distance out keep the order they
  // were written in - which is where the thematic ordering still lives.
  const hopsFrom = (start) => {
    const d = { [start]: 0 };
    let front = [start];
    while (front.length) {
      const next = [];
      front.forEach((k) => {
        const M = MAPS[k];
        if (!M || !M.exits) return;
        Object.values(M.exits).forEach((e) => {
          if (!e || e.map == null || !MAPS[e.map] || d[e.map] !== undefined) return;
          d[e.map] = d[k] + 1;
          next.push(e.map);
        });
      });
      front = next;
    }
    return d;
  };

  arcsToPlace.forEach((a) => {
    const walk = WALK_OF[a];
    if (!walk || walk.length < 2) return;
    const d = hopsFrom(introOf[a]);
    // Anything the flood cannot reach sorts to the back rather than to the
    // front, so an unreachable screen never becomes finding number one.
    WALK_OF[a] = walk.slice().sort((p, q) => (d[p] == null ? 99 : d[p]) - (d[q] == null ? 99 : d[q]));
  });

  Object.entries(ARC_CAST).forEach(([arcId, cast]) => {
    const A = ARCS[arcId];
    if (!A) { skipped.push(arcId + ":no-arc"); return; }
    const home = A.where;
    if (!MAPS[home]) { skipped.push(arcId + ":no-map:" + home); return; }

    const ev = Object.entries(A.evidence || {});
    // The introduction road is not a place to hide findings: it is where the
    // player is told what they are looking for. Findings stay on the rest of
    // the arc's own ground, so two investigations never share a screen.
    const intro = introMapFor(arcId, home);
    // The screens after the person, before the next town, in walking order.
    const maps = clueWalk(arcId, intro).filter((m) => m !== intro);
    scatter.push(arcId + ":" + maps.length);

    // The person with the problem stands on the road out of town, and names the
    // animal before anything else. Everything after that sentence is part58's
    // writing, untouched.
    const animal = ARC_ANIMAL[arcId];
    const named = animal && DEX[animal.sp];
    if (animal && !named) skipped.push(arcId + ":unknown-species:" + animal.sp);
    const line = named ? animal.says + "\n\n" + cast.line : cast.line;

    if (!placeOn(intro, ev.length + 1, {
      name: cast.who, em: cast.em, line,
      arc: arcId, builds: arcId, buildLine: cast.build,
      animal: named ? animal.sp : undefined,
    })) { skipped.push(arcId + ":no-room-for-" + cast.who); return; }
    placedPeople++;

    // One findable thing per piece of evidence, laid out along the walk in the
    // order the player will meet them: first finding on the first screen after
    // the person, second on the next, and so on to the town at the end.
    //
    // Where there are more findings than screens they are dealt in contiguous
    // blocks rather than round-robin. This is the difference between a
    // checklist that fills top to bottom and one that fills 1, 4, 2, 5, 3.
    // Five findings on a three-screen road used to go 0,1,2 then wrap to 0,1 -
    // so the first screen carried findings one and four, and the casebook, which
    // lists evidence in the order it is written down, ticked itself in a
    // jumbled order all the way along the road. Proportional dealing puts
    // findings one and two on the first screen, three and four on the second,
    // five on the third, and the list fills in the order the player walks.
    ev.forEach(([key, e], i) => {
      const def = {
        name: e.label, em: cast.find,
        line: "You " + lower(e.how),
        arc: arcId,
        learns: { key, text: "📓 " + e.label + " — " + e.detail },
      };
      // Start at this finding's own screen and walk forward from there, so a
      // full screen pushes the finding further along the road rather than back
      // to the start of it or all the way home.
      const start = Math.floor((i * maps.length) / ev.length);
      let done = false;
      for (let t = 0; t < maps.length && !done; t++) {
        done = placeOn(maps[(start + t) % maps.length], 2, def);
      }
      if (!done) done = placeOn(intro, 2, def);
      if (done) placedFindings++;
      else skipped.push(arcId + ":" + key + ":no-room");
    });
  });

  console.log("[part65] arcs put into the world: " + placedPeople + " people who can build, "
    + placedFindings + " findings across the regions (" + scatter.join(" ") + ")"
    + (skipped.length ? " | SKIPPED: " + skipped.join(", ") : ""));
})();
