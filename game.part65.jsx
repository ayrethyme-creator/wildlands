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
    line: "Four hectares under water and my culvert stopped solid. I have broken that dam open more "
        + "times than I can count and it is back by Thursday morning.\n\nI am not asking anybody to "
        + "kill anything. I am asking for this to stop.",
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
        + "Everything that lives up there will not come down to cross it. So they do not cross. We "
        + "have two populations now where there was one, and neither half knows it.",
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
    line: "The birds cross oceans. The rules stop at borders.\n\nI can get one fleet into a room and "
        + "the other three carry on exactly as before, and the birds do not care whose flag killed them.",
    build: "Four fleets, one room, one standard. It will take two years. Let us start.",
  },
  hearth: {
    who: "Rescue Lead Hana Okada", em: "👩🏻‍⚕️", find: "🏠",
    line: "We are full. We have been full since March.\n\nHalf of what comes through that door was "
        + "sold to somebody as a thing that would stay small. They are not bad people. They were told "
        + "a lie at the point of sale and the animal is what pays for it.",
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
      return row && WALKABLE.includes(row[x] || "");
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

  let placedPeople = 0, placedFindings = 0, skipped = [];

  Object.entries(ARC_CAST).forEach(([arcId, cast]) => {
    const A = ARCS[arcId];
    if (!A) { skipped.push(arcId + ":no-arc"); return; }
    const mapKey = A.where, M = MAPS[mapKey];
    if (!M) { skipped.push(arcId + ":no-map:" + mapKey); return; }

    const ev = Object.entries(A.evidence || {});

    const place = (x, y, def) => {
      M.rows[y] = M.rows[y].slice(0, x) + "R" + M.rows[y].slice(x + 1);
      TRAINERS[mapKey + ":" + x + "," + y] = { chat: true, ...def };
    };

    // Each person placed becomes a wall, so the map has to be re-read between
    // placements. Doing it once up front let a later finding wall off an
    // earlier one into a pocket nobody could walk to - which is exactly what
    // happened on the Glacier Tongue.
    // Everyone standing on this map, mine and everyone else's. A new person must
    // not wall any of them off - placing a finding beside Dr. Biruta Galdis on
    // the canopy walk sealed her into a two-tile pocket, which is how this check
    // came to exist.
    const peopleHere = () => Object.keys(TRAINERS)
      .filter((k) => k.indexOf(mapKey + ":") === 0)
      .map((k) => k.split(":")[1].split(",").map(Number));

    const everyoneStillReachable = (cx, cy) => {
      const row = M.rows[cy];
      const saved = row;
      M.rows[cy] = row.slice(0, cx) + "R" + row.slice(cx + 1);
      const live = reachable(mapKey);
      const ok = peopleHere().concat([[cx, cy]]).every(([x, y]) =>
        [[1, 0], [-1, 0], [0, 1], [0, -1]]
          .some(([dx, dy]) => live.has((x + dx) + "," + (y + dy))));
      M.rows[cy] = saved;
      return ok;
    };

    const taken = [];
    const nextSpot = () => {
      const free = freeTiles(mapKey).filter(([x, y]) =>
        !taken.some(([tx, ty]) => Math.abs(tx - x) + Math.abs(ty - y) <= 1));
      if (!free.length) return null;
      // Try the spread-out candidates in order and take the first that leaves
      // the map intact for everybody already on it.
      const ordered = spread(free, Math.max(1, ev.length + 1 - taken.length))
        .concat(free);
      const pick = ordered.find(([x, y]) => everyoneStillReachable(x, y));
      if (pick) taken.push(pick);
      return pick || null;
    };

    // The person with the problem goes first, and is the one who builds.
    const first = nextSpot();
    if (!first) { skipped.push(arcId + ":no-room"); return; }
    place(first[0], first[1], {
      name: cast.who, em: cast.em, line: cast.line,
      arc: arcId, builds: arcId, buildLine: cast.build,
    });
    placedPeople++;

    // One findable thing per piece of evidence.
    ev.forEach(([key, e]) => {
      const spot = nextSpot();
      if (!spot) { skipped.push(arcId + ":" + key + ":no-room"); return; }
      place(spot[0], spot[1], {
        name: e.label, em: cast.find,
        line: "You " + lower(e.how),
        arc: arcId,
        learns: { key, text: "📓 " + e.label + " — " + e.detail },
      });
      placedFindings++;
    });
  });

  console.log("[part65] arcs put into the world: " + placedPeople + " people who can build, "
    + placedFindings + " findings"
    + (skipped.length ? " | SKIPPED: " + skipped.join(", ") : ""));
})();
