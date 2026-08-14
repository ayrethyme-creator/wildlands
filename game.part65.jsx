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
  const candidateMaps = (home) => {
    const b = bucketOf(home), home0 = band(home);
    if (!b || home0 === null) return [home];
    const near = REGION_MAPS[b].filter((m) => {
      if (m === home || !MAPS[m]) return false;
      const x = band(m);
      return x !== null && Math.abs(x - home0) <= 10;
    });
    return [home, ...near];
  };

  // One map, one arc. Two arcs in the same region share a bucket and so get the
  // same candidate list, and the first version of this let them interleave:
  // beaver clues and cat clues on the same four maps of the fen, granary and
  // canopygap over the same jungle, and three separate ocean arcs all sitting
  // on kelp, openocean, polarsea and abyss together. Reading two investigations
  // off one screen is not a harder puzzle, it is an unreadable one.
  //
  // Seeded from whatever is already placed, so the hand-built beeloud and
  // reedwater arcs own their ground before this file starts handing any out.
  const claimed = {};
  Object.keys(TRAINERS).forEach((k) => {
    const t = TRAINERS[k];
    if (t.arc && t.learns) {
      const m = k.split(":")[0];
      if (!claimed[m]) claimed[m] = t.arc;
    }
  });
  // Every arc keeps its own home map.
  Object.keys(ARC_CAST).forEach((arcId) => {
    const h = ARCS[arcId] && ARCS[arcId].where;
    if (h && !claimed[h]) claimed[h] = arcId;
  });

  // Deal the rest out a map at a time rather than letting the first arc in a
  // bucket take everything. Four separate arcs live off bucket 6 - turtles,
  // solar, bears and albatross - so first-come left three of them stranded on
  // one map each, which is the same "all the clues in one place" problem in a
  // different shape. Round-robin gives each a share, and each arc is only
  // offered maps that suit its own level, so the desert arc cannot be handed
  // the abyss.
  const ALLOC = {};
  Object.keys(ARC_CAST).forEach((a) => { ALLOC[a] = [ARCS[a] ? ARCS[a].where : null].filter(Boolean); });
  const wants = Object.keys(ARC_CAST).filter((a) => ARCS[a]);
  const eligible = {};
  wants.forEach((a) => {
    eligible[a] = candidateMaps(ARCS[a].where).filter((m) => m !== ARCS[a].where);
  });
  for (let round = 0; round < 6; round++) {
    wants.forEach((a) => {
      if (ALLOC[a].length > round + 1) return;      // already has enough this round
      const pick = eligible[a].find((m) => !claimed[m]);
      if (pick) { claimed[pick] = a; ALLOC[a].push(pick); }
    });
  }

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

  Object.entries(ARC_CAST).forEach(([arcId, cast]) => {
    const A = ARCS[arcId];
    if (!A) { skipped.push(arcId + ":no-arc"); return; }
    const home = A.where;
    if (!MAPS[home]) { skipped.push(arcId + ":no-map:" + home); return; }

    const ev = Object.entries(A.evidence || {});
    const maps = ALLOC[arcId] && ALLOC[arcId].length ? ALLOC[arcId] : [home];
    scatter.push(arcId + ":" + maps.length);

    // The person with the problem stays where the problem is.
    if (!placeOn(home, ev.length + 1, {
      name: cast.who, em: cast.em, line: cast.line,
      arc: arcId, builds: arcId, buildLine: cast.build,
    })) { skipped.push(arcId + ":no-room-for-" + cast.who); return; }
    placedPeople++;

    // One findable thing per piece of evidence, dealt round-robin across the
    // region so gathering an arc is a walk rather than one screen. Deterministic
    // - the same species lands on the same map every load.
    ev.forEach(([key, e], i) => {
      const def = {
        name: e.label, em: cast.find,
        line: "You " + lower(e.how),
        arc: arcId,
        learns: { key, text: "📓 " + e.label + " — " + e.detail },
      };
      // Walk the region from the offset, and fall back to the home map if a
      // particular map has no room left rather than dropping the finding.
      let done = false;
      for (let t = 0; t < maps.length && !done; t++) {
        done = placeOn(maps[(i + 1 + t) % maps.length], 2, def);
      }
      if (!done) done = placeOn(home, 2, def);
      if (done) placedFindings++;
      else skipped.push(arcId + ":" + key + ":no-room");
    });
  });

  console.log("[part65] arcs put into the world: " + placedPeople + " people who can build, "
    + placedFindings + " findings across the regions (" + scatter.join(" ") + ")"
    + (skipped.length ? " | SKIPPED: " + skipped.join(", ") : ""));
})();
