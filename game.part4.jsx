const objsFor = (st, mapKey) =>
  st.objects[mapKey] || { boulders: (MAPS[mapKey].boulders || []).map((b) => ({ ...b })), lit: [], solved: false };
const canSwim = (st) => st.badges >= SWIM_AT && st.party.some((a) => a.hp > 0 && DEX[a.sp].t.includes("Aquatic"));
const canSoar = (st) => st.badges >= SOAR_AT && st.party.some((a) => a.hp > 0 && DEX[a.sp].t.includes("Aerial"));
const canPush = (st) => st.badges >= PUSH_AT && st.party.some((a) => a.hp > 0 && (DEX[a.sp].t.includes("Armor") || DEX[a.sp].t.includes("Predator")));
const legendsDone = (st) => ["qilin", "thunderbird", "phoenix"].filter((k) => st.legends[k]).length;
const TOWN_LIST = [["town1", "Baobab Base"], ["town2", "Marula Town"], ["town3", "Delta Town"], ["town4", "Canopy Town"], ["town5", "Dune Town"], ["town6", "Crag Town"], ["town7", "Frost Town"], ["town8", "Cinder Town"], ["town9", "Gloam Town"], ["digsite", "Fossil Rift Camp"], ["mythhub", "Rift Crossroads"]];

// ---------- COMPONENT ----------
function Wildlands() {
  const [S, setS] = useState({
    screen: "title",
    map: "town1", x: 7, y: 8, swimming: false,
    party: [], box: [],
    items: { treats: 8, berries: 4, bigberries: 0, goldberries: 0, revives: 1, balms: 2, honeycombs: 1, coins: 120, lantern: 0 },
    badges: 0, profGift: false, houseIdx: 0,
    legends: {}, dex: {}, objects: {}, visited: { town1: true }, trainersBeaten: {}, rival: "otter_j",
    dialog: null, menu: null, battle: null, pick: null,
    sound: true, soundReady: false, run: true,
  });
  const SR = useRef(S);
  useEffect(() => { SR.current = S; }, [S]);
  const timers = useRef([]);
  useEffect(() => () => { timers.current.forEach(clearTimeout); stopBGM(); }, []);

  // ----- save / load -----
  const [hasSave, setHasSave] = useState(false);
  const saveRef = useRef(null);
  const [saveStatus, setSaveStatus] = useState("checking");
  const checkSave = async () => {
    setSaveStatus("checking");
    try {
      const r = await storage.get("wildlands-save");
      if (r?.value) { saveRef.current = JSON.parse(r.value); setHasSave(true); setSaveStatus("found"); return; }
    } catch (e) { /* key may not exist */ }
    try {
      const l = await storage.list("");
      const keys = l?.keys || [];
      if (keys.includes("wildlands-save")) setSaveStatus("error");
      else setSaveStatus("none");
    } catch (e2) { setSaveStatus("error"); }
  };
  useEffect(() => { checkSave(); }, []);

  const saveGame = async (silent) => {
    try {
      const st = SR.current;
      const payload = {
        v: 3, uid: UID, map: st.map, x: st.x, y: st.y, swimming: st.swimming,
        party: st.party, box: st.box, items: st.items,
        badges: st.badges, profGift: st.profGift, houseIdx: st.houseIdx,
        legends: st.legends, dex: st.dex, objects: st.objects, visited: st.visited,
        trainersBeaten: st.trainersBeaten, rival: st.rival, sound: st.sound,
      };
      const r = await storage.set("wildlands-save", JSON.stringify(payload));
      saveRef.current = payload; setHasSave(true);
      if (!silent) setS((p) => ({ ...p, dialog: { text: r ? "💾 Game saved!" : "⚠️ Save failed — storage unavailable." } }));
    } catch (e) {
      if (!silent) setS((p) => ({ ...p, dialog: { text: "⚠️ Save failed — storage unavailable." } }));
    }
  };

  const continueGame = () => {
    const p = saveRef.current; if (!p) return;
    UID = Math.max(UID, p.uid || 1000);
    const badges = typeof p.badges === "number" ? p.badges : (p.badge ? 1 : 0) + (p.badge2 ? 1 : 0);
    let map = MAPS[p.map] && typeof p.badges === "number" ? p.map : "town1";
    let x = p.x ?? 7, y = p.y ?? 8, swimming = !!p.swimming;
    const ch = MAPS[map].rows[y]?.[x];
    const ok = ch && ("gGp.nsecXRVD*¦¡".includes(ch) || (ch === "W" && swimming));
    if (!ok) { map = "town1"; x = 7; y = 8; swimming = false; }
    const party = (p.party || []).filter((a) => DEX[a.sp]);
    const box = (p.box || []).filter((a) => DEX[a.sp]);
    let dex = {};
    Object.entries(p.dex || {}).forEach(([k, v]) => { if (DEX[k]) dex[k] = v; });
    [...party, ...box].forEach((a) => { dex[a.sp] = 2; });
    setS((s) => ({
      ...s, screen: "world", map, x, y, swimming,
      party, box,
      items: { treats: 8, berries: 4, bigberries: 0, goldberries: 0, revives: 1, balms: 2, honeycombs: 1, coins: 120, lantern: 0, ...(p.items || {}) },
      badges, profGift: !!p.profGift, houseIdx: p.houseIdx || 0,
      legends: p.legends || {}, dex,
      objects: typeof p.badges === "number" ? (p.objects || {}) : {},
      visited: { town1: true, ...(typeof p.badges === "number" ? p.visited || {} : {}) },
      trainersBeaten: typeof p.badges === "number" ? (p.trainersBeaten || {}) : {},
      rival: p.rival || COUNTER[party[0]?.sp] || "otter_j",
      sound: p.sound !== false,
      run: p.run !== false,
    }));
  };

  // ----- hold-to-move -----
  // A tap still steps one tile, but holding a direction now repeats. Walking
  // and running are just two repeat cadences; nothing about the step itself
  // changes, so encounters, exits and boulder pushes behave exactly as before.
  const HELD = useRef(null);        // {dx,dy} while a direction is held
  const SHIFT = useRef(false);      // shift = run for as long as it is held
  const TIMER = useRef(null);

  const stepDelay = () => {
    const running = SHIFT.current || SR.current.run;
    return running ? 85 : 165;
  };
  const stepLoop = () => {
    const d = HELD.current;
    const st = SR.current;
    // an encounter, dialog or menu ends the run rather than letting it idle
    if (!d || st.screen !== "world" || st.dialog || st.menu || st.battle) {
      HELD.current = null; TIMER.current = null; return;
    }
    move(d.dx, d.dy);
    TIMER.current = setTimeout(stepLoop, stepDelay());
  };
  const holdStart = (dx, dy) => {
    HELD.current = { dx, dy };
    move(dx, dy);                                     // first step is immediate
    if (TIMER.current) clearTimeout(TIMER.current);
    TIMER.current = setTimeout(stepLoop, 250);        // pause before it repeats
  };
  const holdEnd = () => {
    HELD.current = null;
    if (TIMER.current) { clearTimeout(TIMER.current); TIMER.current = null; }
  };
  useEffect(() => () => { if (TIMER.current) clearTimeout(TIMER.current); }, []);

  // ----- keyboard -----
  useEffect(() => {
    const dirOf = (k) =>
      (k === "arrowup" || k === "w") ? [0, -1] :
      (k === "arrowdown" || k === "s") ? [0, 1] :
      (k === "arrowleft" || k === "a") ? [-1, 0] :
      (k === "arrowright" || k === "d") ? [1, 0] : null;
    const down = (e) => {
      if (e.key === "Shift") { SHIFT.current = true; return; }
      const st = SR.current;
      if (st.screen !== "world" || st.dialog || st.menu || st.battle) return;
      const d = dirOf(e.key.toLowerCase());
      if (!d) return;
      e.preventDefault();
      if (e.repeat) return;                           // our loop handles repeats
      holdStart(d[0], d[1]);
    };
    const up = (e) => {
      if (e.key === "Shift") { SHIFT.current = false; return; }
      const d = dirOf(e.key.toLowerCase());
      if (!d) return;
      const h = HELD.current;
      if (h && h.dx === d[0] && h.dy === d[1]) holdEnd();
    };
    const blur = () => { holdEnd(); SHIFT.current = false; };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
  }, []);

  // ----- audio wiring -----
  useEffect(() => { SOUND_ON = S.sound; if (!S.sound) stopBGM(); }, [S.sound]);
  useEffect(() => {
    const h = () => { ac(); setS((p) => (p.soundReady ? p : { ...p, soundReady: true })); };
    window.addEventListener("pointerdown", h);
    return () => window.removeEventListener("pointerdown", h);
  }, []);
  useEffect(() => {
    if (!S.soundReady || !S.sound) { stopBGM(); return; }
    if (S.battle) playBGM(S.battle.kind === "legend" ? "legend" : S.battle.elite ? "elite" : "battle");
    else if (S.screen === "world") playBGM(MAPS[S.map].music || "route");
    else stopBGM();
  }, [!!S.battle, S.battle?.kind, S.battle?.elite, S.screen, S.map, S.sound, S.soundReady]);

  // ----- pending move-learn prompts -----
  useEffect(() => {
    if (S.screen !== "world" || S.battle || S.dialog || S.menu) return;
    if (S.party.some((a) => a.pending?.length)) setS((p) => ({ ...p, menu: "learn" }));
  }, [S.screen, S.battle, S.dialog, S.menu, S.party]);

  const resolveLearn = (uid, slot) => {
    SFX.learn();
    setS((p) => {
      const party = p.party.map((a) => {
        if (a.uid !== uid || !a.pending?.length) return a;
        const pending = [...a.pending];
        const k = pending.shift();
        if (slot >= 0) {
          const moves = [...a.moves]; const pp = [...a.pp];
          moves[slot] = k; pp[slot] = maxPP(MOVES[k]);
          return { ...a, moves, pp, pending };
        }
        return { ...a, pending };
      });
      return { ...p, party, menu: null };
    });
  };

  const say = (text, options = null) => setS((p) => ({ ...p, dialog: { text, options } }));

  const rollEncounter = (mapKey, kind) => {
    const m = MAPS[mapKey];
    const water = kind === "water";
    const chance = water ? 0.15 : 0.2;
    const pool = water ? m.poolWater : (isNight() && m.poolN ? m.poolN : m.pool);
    const lv = water ? m.lvlWater : m.lvl;
    if (!pool || Math.random() > chance) return;
    startBattle({ kind: "wild", enemy: mk(pickPool(pool), rnd(lv[0], lv[1])) });
  };

  // ----- world movement -----
  const move = (dx, dy) => {
    const st = SR.current;
    if (st.screen !== "world" || st.dialog || st.menu || st.battle) return;
    const m = MAPS[st.map];
    const nx = st.x + dx, ny = st.y + dy;
    if (ny < 0 || ny >= m.rows.length || nx < 0 || nx >= m.rows[0].length) return;
    const ch = m.rows[ny][nx];
    const o = objsFor(st, st.map);
    if (o.boulders.some((bb) => bb.x === nx && bb.y === ny)) { tryPush(st, m, o, nx, ny, dx, dy); return; }
    const exit = m.exits?.[`${nx},${ny}`];
    if (exit && "nsec".includes(ch)) {
      if (exit.req === "champion" && !st.trainersBeaten["summit:7,1"]) {
        say(exit.reqMsg || "🚧 A ranger barricade blocks the way. \"Champions only past this point!\"");
        return;
      }
      setS((p) => ({
        ...p, map: exit.map, x: exit.x, y: exit.y, swimming: false,
        visited: (exit.map.startsWith("town") || TOWN_LIST.some(([k]) => k === exit.map)) ? { ...p.visited, [exit.map]: true } : p.visited,
      }));
      return;
    }
    const idKey = `${st.map}:${nx},${ny}`;
    const walk =
      ch === "." || ch === "g" || ch === "G" || ch === "p" || ch === "*" ||
      (ch === "X" && st.badges >= (GYMS[st.map]?.id ?? GYM_COUNT)) ||
      (ch === "D" && o.solved) ||
      ((ch === "R" || ch === "V") && st.trainersBeaten[idKey]) ||
      (ch === "W" && st.swimming);
    if (walk) {
      setS((p) => ({ ...p, x: nx, y: ny, swimming: ch === "W" }));
      if (ch === "G") rollEncounter(st.map, "grass");
      else if (ch === "W") rollEncounter(st.map, "water");
      return;
    }
    if (ch === "W" && !st.swimming) {
      if (canSwim(st)) {
        say("The water is deep and slow-moving. Your Aquatic companion nudges you toward it, eyes bright.", [
          { label: "Swim! 🏊", act: () => { SFX.run(); setS((p) => ({ ...p, dialog: null, swimming: true, x: nx, y: ny })); rollEncounter(st.map, "water"); } },
          { label: "Stay dry", act: () => setS((p) => ({ ...p, dialog: null })) },
        ]);
      } else say("The water is deep. With Badge 1 and an Aquatic teammate in your party, you could swim across.");
      return;
    }
    interact(ch, nx, ny, idKey);
  };

  const tryPush = (st, m, o, nx, ny, dx, dy) => {
    if (!canPush(st)) { say("🪨 It won't budge an inch. With Badge 5 and a strong Armor or Predator teammate, you could shift it."); return; }
    const bx = nx + dx, by = ny + dy;
    if (by < 0 || by >= m.rows.length || bx < 0 || bx >= m.rows[0].length) return;
    const tch = m.rows[by][bx];
    const free = ".gGp*".includes(tch) && !o.boulders.some((b2) => b2.x === bx && b2.y === by);
    if (!free) { say("🪨 The boulder is wedged against something."); return; }
    SFX.push();
    const boulders = o.boulders.map((b2) => (b2.x === nx && b2.y === ny ? { x: bx, y: by } : b2));
    const plates = m.plates || [];
    const solvedNow = plates.length > 0 && plates.every((pl) => boulders.some((b2) => b2.x === pl.x && b2.y === pl.y));
    const newly = !o.solved && solvedNow;
    if (newly) SFX.puzzle();
    setS((p) => ({
      ...p,
      objects: { ...p.objects, [p.map]: { ...o, boulders, solved: o.solved || solvedNow } },
      dialog: newly ? { text: "⛩️ With a deep grind of ancient stone, the sealed gate crumbles open!" } : p.dialog,
    }));
  };

  // ----- interactions -----
  const interact = (ch, nx, ny, idKey) => {
    const st = SR.current;
    const m = MAPS[st.map];
    if (ch === "C") {
      SFX.heal();
      setS((p) => ({
        ...p,
        party: p.party.map((a) => ({ ...a, hp: a.maxHp, pp: a.moves.map((k) => maxPP(MOVES[k])) })),
        dialog: { text: "🏥 Care Center: Your team was rested, fed, and checked over. HP and PP fully restored! (Progress saved)" },
      }));
      const t = setTimeout(() => saveGame(true), 250);
      timers.current.push(t);
    } else if (ch === "P") {
      const done = legendsDone(st);
      if (!st.profGift) {
        setS((p) => ({
          ...p, profGift: true,
          items: { ...p.items, treats: p.items.treats + 5 },
          dialog: { text: "⛺ Prof. Acacia: \"Good, you're here. Something is wrong with the Wildlands — grass dying in rings, storms knotted over the peaks, embers rising off the water. The old tablets speak of three guardians, and of a ranger proven in the arenas. There are twelve now — the old eight, and four the Wildlands grew into. Walk the whole trail: twelve badges, then the Summit Citadel. And take these 5 Trail Treats — you'll need friends out there.\"" },
        }));
      } else if (st.trainersBeaten["summit:7,1"]) {
        say(done === 3
          ? "⛺ Prof. Acacia: \"Champion — and peacemaker to all three guardians. And since your victory, the land itself has opened: a fossil canyon east of the Singing Dunes, and shimmering rifts above the Summit. Old bones and older stories are walking, ranger. Go see.\""
          : `⛺ Prof. Acacia: "Champion of the Wildlands! But the old unrest lingers — ${3 - done} guardian${done === 2 ? "" : "s"} still stir${done === 2 ? "s" : ""} behind their seals. A champion could settle them. Oh — and rangers report a fossil canyon east of the Singing Dunes, and strange rifts above the Summit. Champions only."`);
      } else if (st.badges >= 8) {
        say("⛺ Prof. Acacia: \"Twelve badges. The Summit Citadel is open to you — the Elite Four, and whoever waits above them. Rest, stock up, and climb, ranger.\"");
      } else {
        const nextTown = Object.keys(GYMS).find((k) => GYMS[k].id === st.badges + 1);
        say(`⛺ Prof. Acacia: "Badge ${st.badges + 1} waits with ${GYMS[nextTown].leader} in ${MAPS[nextTown].name}. ${done > 0 ? `${done} of 3 guardians settled — the land breathes easier. ` : "The guardians' shrines will only answer a proven ranger — badges first. "}Keep walking the trail."`);
      }
    } else if (ch === "H") {
      setS((p) => ({ ...p, houseIdx: p.houseIdx + 1, dialog: { text: "🛖 " + HOUSE_LINES[st.houseIdx % HOUSE_LINES.length] } }));
    } else if (ch === "M") {
      setS((p) => ({ ...p, menu: "shop" }));
    } else if (ch === "X") {
      const g = GYMS[st.map];
      say(`💂 Guard: "The road north opens for Badge ${g ? g.id : 8} holders. ${g ? g.leader + "'s arena is right here in town — prove yourself there first." : ""}"`);
    } else if (ch === "!") {
      say(SIGNS[st.map + ":" + nx + "," + ny] || SIGNS[st.map] || "🪧 The letters have long worn away.");
    } else if (ch === "Y") {
      const g = GYMS[st.map];
      if (!g) return;
      if (st.badges >= g.id) say(`🏟️ ${g.leader} salutes you from the stands. Badge ${g.id} shines on your collar.`);
      else say(`🏟️ ${m.name} Arena — ${g.leader}'s ${g.type}-type gauntlet awaits. Challenge?`, [
        { label: "Challenge!", act: () => startBattle({ kind: "trainer", trainerName: g.leader, gym: g, team: g.team(), ti: 0, enemy: null }) },
        { label: "Not yet", act: () => setS((p) => ({ ...p, dialog: null })) },
      ]);
    } else if (ch === "L") {
      const key = m.legend;
      if (!key) return;
      if (st.legends[key]) { say("🗿 The altar is quiet now. The air here is deeply calm."); return; }
      if (st.badges < LEGEND_REQ[key]) {
        say(`🗿 The altar is cold and silent. Faint script surfaces: 'Return bearing ${LEGEND_REQ[key]} proofs of mastery.' (You carry ${st.badges} badge${st.badges === 1 ? "" : "s"}.)`);
        return;
      }
      say(LORE[key], [
        { label: "Approach!", act: () => startBattle({ kind: "legend", enemy: mk(key, LEGEND_LVL[key]) }) },
        { label: "Step back", act: () => setS((p) => ({ ...p, dialog: null })) },
      ]);
    } else if (ch === "t") {
      const o = objsFor(st, st.map);
      const ts = m.torches || [];
      if (o.solved) { say("🔥 The four flames burn steady. The seal stands open."); return; }
      const idx = ts.findIndex((t2) => t2.x === nx && t2.y === ny);
      if (idx < 0) return;
      if (o.lit.includes(idx)) { say("🔥 This torch already burns."); return; }
      if (idx === o.lit.length) {
        const lit = [...o.lit, idx];
        const solved = lit.length === ts.length;
        if (solved) SFX.puzzle(); else SFX.learn();
        setS((p) => ({
          ...p,
          objects: { ...p.objects, [p.map]: { ...o, lit, solved } },
          dialog: solved ? { text: "⛩️ The four flames roar as one — and the sealed gate melts open like wax!" } : null,
        }));
      } else {
        SFX.miss();
        setS((p) => ({
          ...p,
          objects: { ...p.objects, [p.map]: { ...o, lit: [] } },
          dialog: { text: "💨 All the flames gutter out at once. The order matters — the tablet spoke of the sun's path." },
        }));
      }
    } else if (ch === "R") {
      const tr = TRAINERS[idKey];
      if (!tr) return;
      if (tr.chat || !tr.team) { say(`${tr.em || "🧍"} ${tr.name}: "${tr.line}"`); return; }
      say(`${tr.elite ? "⚜️ " : ""}${tr.specialist ? "🌿 " : ""}${tr.name}${tr.homage ? ` (${tr.homage})` : ""}: "${tr.line}"`, [
        { label: "Battle!", act: () => startBattle({ kind: "trainer", trainerName: tr.name, elite: !!tr.elite, team: tr.team(), ti: 0, enemy: null, tid: idKey, prize: tr.prize }) },
        { label: "Later", act: () => setS((p) => ({ ...p, dialog: null })) },
      ]);
    } else if (ch === "V") {
      const stage = RIVAL_TILES[idKey];
      if (!stage) return;
      if (stage === 5) {
        if (st.trainersBeaten[idKey]) { say("🏆 Zuri: \"Champion. ...I want a rematch someday. Obviously.\""); return; }
        say("🏃 Zuri: \"Of course it's you at the top. Of COURSE it's you! Eight badges, four Elites — and one last wall. Me. Champion match, ranger — everything we've both got!\"", [
          { label: "Final Battle!", act: () => startBattle({ kind: "trainer", trainerName: "Champion Zuri", champion: true, elite: true, team: rivalTeam(5, st.rival), ti: 0, enemy: null, tid: idKey }) },
          { label: "Not yet", act: () => setS((p) => ({ ...p, dialog: null })) },
        ]);
      } else {
        say(RIVAL_LINES[stage], [
          { label: "Battle!", act: () => startBattle({ kind: "trainer", trainerName: "Rival Zuri", team: rivalTeam(stage, st.rival), ti: 0, enemy: null, tid: idKey, prize: 100 * stage * stage }) },
        ]);
      }
    }
  };

  // ----- battle core -----
  const startBattle = (cfg) => {
    let enemy = cfg.enemy;
    let intro;
    if (cfg.kind === "trainer") { enemy = cfg.team[0]; intro = `${cfg.trainerName} wants to battle! ${DEX[enemy.sp].n} steps up!`; }
    else if (cfg.kind === "legend") { intro = `⚡ The ${DEX[enemy.sp].n} descends! The air itself trembles!`; }
    else intro = `A wild ${DEX[enemy.sp].n} (Lv ${enemy.lvl}) appeared!`;
    if (cfg.kind === "legend") SFX.legend(); else SFX.encounter();
    setS((p) => ({
      ...p, dialog: null, menu: null,
      dex: { ...p.dex, [enemy.sp]: Math.max(p.dex[enemy.sp] || 0, 1) },
      battle: { ...cfg, enemy, phase: "busy", log: [intro], mode: "main", confirmRun: false },
    }));
    const t = setTimeout(() => setS((p) => (p.battle ? { ...p, battle: { ...p.battle, phase: "choose" } } : p)), 900);
    timers.current.push(t);
  };

  const effSpd = (x) => x.spd * (1 + 0.25 * (x.stg?.s || 0)) * (x.chill ? 0.5 : 1);

  const dmgCalc = (att, dfn, mv) => {
    const aS = 1 + 0.25 * (att.stg?.a || 0);
    const dS = 1 + 0.25 * (dfn.stg?.d || 0);
    const base = ((2 * att.lvl / 5 + 2) * mv.p * ((att.atk * aS) / Math.max(1, dfn.def * dS))) / 20 + 2;
    const mult = eff(mv.t, DEX[dfn.sp].t);
    return { dmg: Math.max(1, Math.floor(base * mult * (0.85 + Math.random() * 0.15))), mult };
  };

  const runSteps = (steps) => {
    steps.forEach((fn, i) => {
      const t = setTimeout(() => setS((prev) => fn(prev)), i * 700);
      timers.current.push(t);
    });
  };

  const applyLevelUps = (my, logs) => {
    while (my.xp >= xpNeed(my.lvl)) {
      my.xp -= xpNeed(my.lvl);
      my.lvl += 1;
      logs.push(`${DEX[my.sp].n} grew to Lv ${my.lvl}!`);
      (DEX[my.sp].l || []).filter(([L]) => L === my.lvl).forEach(([, k]) => learnMove(my, k, logs));
      const st = DEX[my.sp];
      if (st.grows && my.lvl >= st.grows.at) {
        const g = st.grows;
        const to = g.to || (my.sex === "M" ? g.toM : g.toF);
        const gated = g.needs === "night" && !isNight();
        if (to && to !== my.sp && !gated) {
        logs.push(`✨ ${st.n} ${DEX[to].meta || "grew up into"} ${DEX[to].n}!`);
        my.sp = to;
        DEX[to].m.forEach((k) => learnMove(my, k, logs));
        (DEX[to].l || []).filter(([L]) => L <= my.lvl).forEach(([, k]) => learnMove(my, k, logs));
        }
      }
      const d = DEX[my.sp];
      const nm = statAt(d.b.h, my.lvl, true);
      my.hp += Math.max(0, nm - my.maxHp); my.maxHp = nm;
      my.atk = statAt(d.b.a, my.lvl); my.def = statAt(d.b.d, my.lvl); my.spd = statAt(d.b.s, my.lvl);
    }
  };

  const takeTurn = (action) => {
    const st = SR.current;
    if (!st.battle || st.battle.phase !== "choose") return;
    const b = st.battle;
    const my = { ...st.party[0], stg: { ...(st.party[0].stg || { a: 0, d: 0, s: 0 }) } };
    const en = { ...b.enemy, stg: { ...(b.enemy.stg || { a: 0, d: 0, s: 0 }) } };
    const party = st.party.map((a) => ({ ...a }));
    const items = { ...st.items };
    const box = [...st.box];
    let badges = st.badges;
    const legends = { ...st.legends };
    const tb = { ...st.trainersBeaten };
    const dex = { ...st.dex };
    const steps = [];
    const foeName = () => (b.kind === "wild" ? "Wild " : b.kind === "legend" ? "Guardian " : "") + DEX[en.sp].n;
    const clean = (a) => { const { stg, psn, slp, fear, chill, ...r } = a; return { ...r }; };

    const snapBusy = (text, extras = {}, snd) => {
      const P = party.map((a) => ({ ...a })); P[0] = { ...my };
      const E = { ...en };
      steps.push((prev) => { if (snd) SFX[snd]?.(); return prev.battle ? {
        ...prev, party: P, items: { ...items }, box: [...box], badges,
        legends: { ...legends }, trainersBeaten: { ...tb }, dex: { ...dex },
        battle: { ...prev.battle, enemy: E, phase: "busy", log: [...prev.battle.log, text].slice(-4), mode: "main", ...extras },
      } : prev; });
    };
    const snapEnd = (text, opts = {}) => {
      const P = party.map(clean); P[0] = clean(my);
      steps.push((prev) => ({
        ...prev, party: P, items: { ...items }, box: [...box], badges,
        legends: { ...legends }, trainersBeaten: { ...tb }, dex: { ...dex },
        battle: null, screen: "world",
        map: opts.blackout ? "town1" : prev.map,
        x: opts.blackout ? 7 : prev.x, y: opts.blackout ? 8 : prev.y,
        swimming: opts.blackout ? false : prev.swimming,
        dialog: text ? { text } : null,
      }));
    };
    const backToChoose = () => {
      const P = party.map((a) => ({ ...a })); P[0] = { ...my };
      const E = { ...en };
      steps.push((prev) => prev.battle ? {
        ...prev, party: P, items: { ...items },
        battle: { ...prev.battle, enemy: E, phase: "choose", mode: "main" },
      } : prev);
    };

    const enemyMove = () => {
      const all = en.moves.map((k) => MOVES[k]);
      const dmgOpts = all.filter((m2) => m2.p > 0).sort((a2, b2) => eff(b2.t, DEX[my.sp].t) - eff(a2.t, DEX[my.sp].t));
      const status = all.filter((m2) => m2.p <= 0 && !((m2.fx === "sleep" && my.slp) || (m2.fx === "fear" && my.fear) || (m2.fx === "chill" && my.chill) || (m2.fx === "poison" && my.psn)));
      if (status.length && Math.random() < 0.18) return status[rnd(0, status.length - 1)];
      if (dmgOpts.length === 0) return all[0];
      return Math.random() < 0.75 ? dmgOpts[0] : dmgOpts[rnd(0, dmgOpts.length - 1)];
    };

    const doAttack = (attIsMe, mv) => {
      const att = attIsMe ? my : en, dfn = attIsMe ? en : my;
      const who = attIsMe ? DEX[my.sp].n : foeName();
      const tgt = attIsMe ? foeName() : DEX[my.sp].n;
      if (att.slp > 0) {
        att.slp -= 1;
        if (att.slp > 0) { snapBusy(`${who} is fast asleep!`, {}, "sleep"); return false; }
        snapBusy(`${who} woke up!`);
      }
      if (att.fear > 0) {
        att.fear -= 1;
        if (Math.random() < 0.4) { snapBusy(`${who} is too shaken to move!`, {}, "fear"); return false; }
      }
      if (Math.random() * 100 > mv.acc) { snapBusy(`${who} used ${mv.n}... but it missed!`, {}, "miss"); return false; }
      if (mv.p <= 0) {
        let txt = `${who} used ${mv.n}!`;
        if (mv.fx === "heal") { const h = Math.floor(att.maxHp * 0.45); att.hp = Math.min(att.maxHp, att.hp + h); txt += ` It recovered ${h} HP!`; snapBusy(txt, {}, "heal"); }
        else if (mv.fx === "raiseDef") { att.stg.d = Math.min(2, att.stg.d + 1); txt += " Its defense rose!"; snapBusy(txt, {}, "learn"); }
        else if (mv.fx === "lowerAtk") { dfn.stg.a = Math.max(-2, dfn.stg.a - 1); txt += ` ${tgt}'s attack fell!`; snapBusy(txt, {}, "weak"); }
        else if (mv.fx === "raiseSpd") { att.stg.s = Math.min(2, (att.stg.s || 0) + 1); txt += " Its speed rose!"; snapBusy(txt, {}, "learn"); }
        else if (mv.fx === "lowerSpd") { dfn.stg.s = Math.max(-2, (dfn.stg.s || 0) - 1); txt += ` ${tgt}'s speed fell!`; snapBusy(txt, {}, "weak"); }
        else if (mv.fx === "chill") { if (dfn.chill) txt += ` But ${tgt} is already chilled!`; else { dfn.chill = 3; txt += ` ${tgt} was chilled — its speed halves!`; } snapBusy(txt, {}, "weak"); }
        else if (mv.fx === "sleep") { if (dfn.slp) txt += ` But ${tgt} is already asleep!`; else { dfn.slp = rnd(2, 3); txt += ` ${tgt} drifted off to sleep!`; } snapBusy(txt, {}, "sleep"); }
        else if (mv.fx === "fear") { if (dfn.fear) txt += ` But ${tgt} is already shaken!`; else { dfn.fear = 2; txt += ` ${tgt} shudders with dread!`; } snapBusy(txt, {}, "fear"); }
        else if (mv.fx === "poison") {
          if (dfn.psn) txt += ` But ${tgt} is already poisoned!`;
          else { dfn.psn = true; txt += ` ${tgt} was poisoned!`; }
          snapBusy(txt, {}, "poison");
        } else snapBusy(txt);
        return false;
      }
      const { dmg, mult } = dmgCalc(att, dfn, mv);
      dfn.hp = Math.max(0, dfn.hp - dmg);
      let txt = `${who} used ${mv.n}! (-${dmg})`;
      if (mult > 1) txt += " It's super effective!";
      else if (mult < 1) txt += " Not very effective...";
      if (mv.fx === "poison" && dfn.hp > 0 && !dfn.psn && Math.random() < (mv.fxc || 0)) {
        dfn.psn = true; txt += ` ${tgt} was poisoned!`;
      }
      if (mv.fx === "chill" && dfn.hp > 0 && !dfn.chill && Math.random() < (mv.fxc || 0)) { dfn.chill = 3; txt += ` ${tgt} was chilled!`; }
      if (mv.fx === "sleep" && dfn.hp > 0 && !dfn.slp && Math.random() < (mv.fxc || 0)) { dfn.slp = rnd(2, 3); txt += ` ${tgt} fell asleep!`; }
      snapBusy(txt, {}, mult > 1 ? "super" : mult < 1 ? "weak" : "hit");
      return dfn.hp <= 0;
    };

    const onEnemyFaint = () => {
      if (b.kind === "legend" && en.sp === "phoenix" && !en.reborn) {
        en.reborn = true; en.hp = Math.floor(en.maxHp / 2);
        snapBusy("🔥 The Phoenix erupts into a pillar of flame — and is REBORN from its own ashes!", {}, "grow");
        backToChoose();
        return;
      }
      snapBusy(`${foeName()} fainted!`, {}, "faint");
      const gain = Math.floor(en.lvl * 15 * (b.kind === "trainer" ? 1.5 : b.kind === "legend" ? 1.6 : 1));
      my.xp += gain;
      const logs = [];
      applyLevelUps(my, logs);
      snapBusy(`${DEX[my.sp].n} gained ${gain} XP!`);
      logs.forEach((l) => snapBusy(l, {}, logSnd(l)));
      const share = Math.floor(gain / 2);
      if (share > 0 && party.length > 1) {
        const benchLogs = [];
        for (let bi = 1; bi < party.length; bi++) {
          party[bi].xp += share;
          applyLevelUps(party[bi], benchLogs);
        }
        snapBusy(`Your bench shared ${share} XP.`);
        benchLogs.forEach((l) => snapBusy(l, {}, logSnd(l)));
      }
      if (b.kind === "trainer") {
        const ni = b.ti + 1;
        if (ni < b.team.length) {
          const next = { ...b.team[ni] };
          const P = party.map((a) => ({ ...a })); P[0] = { ...my };
          steps.push((prev) => prev.battle ? {
            ...prev, party: P,
            dex: { ...prev.dex, [next.sp]: Math.max(prev.dex[next.sp] || 0, 1) },
            battle: { ...prev.battle, ti: ni, enemy: next, phase: "choose",
              mode: P.filter((a) => a.hp > 0).length > 1 ? "switchAsk" : "main",
              log: [...prev.battle.log, `${b.trainerName} sends out ${DEX[next.sp].n}!`].slice(-4) },
          } : prev);
        } else {
          if (b.tid) tb[b.tid] = true;
          if (b.gym) {
            badges = Math.max(badges, b.gym.id);
            const c = 200 + b.gym.id * 100;
            items.coins = (items.coins ?? 0) + c; items.treats += 5; items.berries += 3;
            items.revives = (items.revives ?? 0) + 1; items.balms = (items.balms ?? 0) + 2; items.honeycombs = (items.honeycombs ?? 0) + 1;
            snapBusy(`${b.gym.leader}: "${b.gym.quote}"`, {}, "badge");
            snapEnd(`🏅 BADGE ${b.gym.id} of ${GYM_COUNT} earned! (+₡${c}, +5 Treats, +3 Berries)${b.gym.perk ? " " + b.gym.perk : ""}`);
          } else if (b.champion) {
            items.coins = (items.coins ?? 0) + 5000;
            snapBusy("Zuri: \"...Okay. Okay! Champion. Say it out loud. SAY IT!\"", {}, "victory");
            snapEnd("🏆 " + EPILOGUE);
          } else {
            items.coins = (items.coins ?? 0) + (b.prize || 100);
            snapBusy(`${b.trainerName}: "Well fought, ranger!"`, {}, "victory");
            snapEnd(`You won ₡${b.prize || 100}!`);
          }
        }
      } else if (b.kind === "legend") {
        legends[en.sp] = "calmed";
        snapEnd(CALM[en.sp]);
      } else {
        const c = en.lvl * 3;
        items.coins = (items.coins ?? 0) + c;
        snapBusy(`Picked up ₡${c} in trade shells.`, {}, "buy");
        snapEnd(null);
      }
    };

    const onMyFaint = () => {
      snapBusy(`${DEX[my.sp].n} fainted!`, {}, "faint");
      const alive = party.some((a, i) => i !== 0 && a.hp > 0);
      if (alive) {
        const P = party.map((a) => ({ ...a })); P[0] = { ...my };
        steps.push((prev) => prev.battle ? {
          ...prev, party: P,
          battle: { ...prev.battle, enemy: { ...en }, phase: "switch", mode: "main" },
        } : prev);
      } else {
        party.forEach((a) => { a.hp = a.maxHp; a.pp = a.moves.map((k) => maxPP(MOVES[k])); a.psn = false; a.slp = 0; a.fear = 0; a.chill = 0; });
        my.hp = my.maxHp;
        my.pp = my.moves.map((k) => maxPP(MOVES[k]));
        my.psn = false; my.slp = 0; my.fear = 0; my.chill = 0;
        const lost = Math.floor((items.coins ?? 0) * 0.25);
        items.coins = (items.coins ?? 0) - lost;
        snapEnd(`You blacked out and woke at Baobab Base. Your team was healed, but you dropped ₡${lost} on the trail.`, { blackout: true });
      }
    };

    const enemyActs = (eMv) => {
      const fainted = doAttack(false, eMv || enemyMove());
      if (fainted) { onMyFaint(); return true; }
      return false;
    };

    const finishRound = () => {
      if (en.hp > 0 && en.psn) {
        const d = Math.max(1, Math.floor(en.maxHp / 8));
        en.hp = Math.max(0, en.hp - d);
        snapBusy(`${foeName()} is hurt by poison! (-${d})`, {}, "poison");
        if (en.hp <= 0) { onEnemyFaint(); return; }
      }
      if (my.hp > 0 && my.psn) {
        const d = Math.max(1, Math.floor(my.maxHp / 8));
        my.hp = Math.max(0, my.hp - d);
        snapBusy(`${DEX[my.sp].n} is hurt by poison! (-${d})`, {}, "poison");
        if (my.hp <= 0) { onMyFaint(); return; }
      }
      if (en.chill > 0 && en.hp > 0) { en.chill -= 1; if (!en.chill) snapBusy(`${foeName()} shook off the chill.`); }
      if (my.chill > 0 && my.hp > 0) { my.chill -= 1; if (!my.chill) snapBusy(`${DEX[my.sp].n} shook off the chill.`); }
      backToChoose();
    };

    if (action.kind === "move" || action.kind === "flail") {
      let mv;
      if (action.kind === "flail") { mv = { n: "Flail", t: "Wild", p: 30, acc: 100 }; }
      else {
        if ((my.pp?.[action.i] ?? 0) <= 0) return;
        my.pp = [...my.pp];
        my.pp[action.i] -= 1;
        mv = MOVES[my.moves[action.i]];
      }
      const eMv = enemyMove();
      const meFirst = (mv.pri || 0) !== (eMv.pri || 0) ? (mv.pri || 0) > (eMv.pri || 0) : effSpd(my) >= effSpd(en);
      if (meFirst) {
        if (doAttack(true, mv)) onEnemyFaint();
        else if (!enemyActs(eMv)) finishRound();
      } else {
        if (!enemyActs(eMv)) {
          if (doAttack(true, mv)) onEnemyFaint();
          else finishRound();
        }
      }
    } else if (action.kind === "berry") {
      if (items.berries <= 0) return;
      items.berries -= 1;
      my.hp = Math.min(my.maxHp, my.hp + 30);
      snapBusy(`You fed ${DEX[my.sp].n} a Berry Snack. (+30 HP)`, {}, "heal");
      if (!enemyActs()) finishRound();
    } else if (action.kind === "goldberry") {
      if ((items.goldberries ?? 0) <= 0) return;
      items.goldberries -= 1;
      my.hp = Math.min(my.maxHp, my.hp + 150);
      snapBusy(`You fed ${DEX[my.sp].n} a Golden Berry. (+150 HP)`, {}, "heal");
      if (!enemyActs()) finishRound();
    } else if (action.kind === "balm") {
      if ((items.balms ?? 0) <= 0) return;
      if (!my.psn && !my.slp && !my.fear && !my.chill) { snapBusy(`${DEX[my.sp].n} is already feeling fine.`); backToChoose(); }
      else {
        items.balms -= 1;
        my.psn = false; my.slp = 0; my.fear = 0; my.chill = 0;
        snapBusy(`You rubbed Soothe Balm on ${DEX[my.sp].n}. It shook everything off!`, {}, "heal");
        if (!enemyActs()) finishRound();
      }
    } else if (action.kind === "honeycomb") {
      if ((items.honeycombs ?? 0) <= 0) return;
      items.honeycombs -= 1;
      my.pp = my.moves.map((k) => maxPP(MOVES[k]));
      snapBusy(`${DEX[my.sp].n} ate the Honeycomb — every move is fresh again!`, {}, "heal");
      if (!enemyActs()) finishRound();
    } else if (action.kind === "revive") {
      if ((items.revives ?? 0) <= 0) return;
      const fi = typeof action.idx === "number" ? action.idx : party.findIndex((a, i) => i !== 0 && a.hp <= 0);
      if (fi < 0 || !party[fi] || party[fi].hp > 0) { snapBusy("Nobody on your bench needs reviving."); backToChoose(); }
      else {
        items.revives -= 1;
        party[fi] = { ...party[fi], hp: Math.floor(party[fi].maxHp / 2), psn: false, slp: 0, fear: 0, chill: 0 };
        snapBusy(`✨ You revived ${DEX[party[fi].sp].n}! (half HP)`, {}, "grow");
        if (!enemyActs()) finishRound();
      }
    } else if (action.kind === "bigberry") {
      if ((items.bigberries ?? 0) <= 0) return;
      items.bigberries -= 1;
      my.hp = Math.min(my.maxHp, my.hp + 70);
      snapBusy(`You fed ${DEX[my.sp].n} a Big Berry. (+70 HP)`, {}, "heal");
      if (!enemyActs()) finishRound();
    } else if (action.kind === "treat") {
      if (b.kind === "trainer") { snapBusy("You can't befriend another ranger's partner!"); backToChoose(); }
      else if (items.treats <= 0) { snapBusy("You're out of Trail Treats!"); backToChoose(); }
      else {
        items.treats -= 1;
        snapBusy(`You offered a Trail Treat to the ${b.kind === "legend" ? "Guardian" : "wild " + DEX[en.sp].n}...`, {}, "treat");
        const isLeg = !!DEX[en.sp].legend;
        const eased = isLeg ? DEX[en.sp].c * 1.3 : DEX[en.sp].c * 1.8 + 0.12;
        const chance = Math.min(isLeg ? 0.6 : 0.95, eased * (1.7 - en.hp / en.maxHp));
        if (Math.random() < chance) {
          const friend = clean({ ...en, hp: Math.max(1, en.hp) });
          dex[en.sp] = 2;
          if (b.kind === "legend") legends[en.sp] = "befriended";
          let dest;
          if (party.length < 6) { party.push(friend); dest = "It joined your team!"; }
          else { box.push(friend); dest = "Your team is full — it headed to the Sanctuary."; }
          snapBusy(b.kind === "legend" ? `🌟 ${BEFRIEND_LEGEND[en.sp]}` : `🎉 The ${DEX[en.sp].n} nuzzles your hand!`, {}, "befriend");
          snapEnd(`You befriended ${DEX[en.sp].n} (Lv ${en.lvl})! ${dest}` + (b.kind === "legend" ? " The land settles — the guardian chose you." : ""));
        } else {
          snapBusy(b.kind === "legend" ? "The Guardian regards the treat... and you. Not yet, its eyes say." : "It sniffed the treat... and darted back, wary!", {}, "miss");
          if (!enemyActs()) finishRound();
        }
      }
    } else if (action.kind === "run") {
      if (b.kind === "trainer") { snapBusy("No backing out of this match!"); backToChoose(); }
      else {
        const ok = Math.random() < (effSpd(my) >= effSpd(en) ? 0.9 : 0.55);
        if (ok) { snapBusy(b.kind === "legend" ? "You back away slowly. The Guardian watches you go — it will wait." : "You slipped away safely!", {}, "run"); snapEnd(null); }
        else { snapBusy("Couldn't get away!"); if (!enemyActs()) finishRound(); }
      }
    } else if (action.kind === "freeSwitch") {
      const t = party[action.idx];
      snapBusy(`Come back, ${DEX[my.sp].n}! Go, ${DEX[t.sp].n}!`);
      const tmp = party[action.idx];
      party[action.idx] = { ...my };
      Object.assign(my, tmp);
      my.stg = { a: 0, d: 0, s: 0 };
      backToChoose();
    } else if (action.kind === "switch") {
      const t = party[action.idx];
      snapBusy(`Come back, ${DEX[my.sp].n}! Go, ${DEX[t.sp].n}!`);
      const tmp = party[action.idx];
      party[action.idx] = { ...my };
      Object.assign(my, tmp);
      my.stg = { a: 0, d: 0, s: 0 };
      if (!enemyActs()) finishRound();
    }

    setS((p) => p.battle ? { ...p, battle: { ...p.battle, phase: "busy", mode: "main", confirmRun: false } } : p);
    runSteps(steps);
  };

  const forcedSwitch = (idx) => {
    setS((prev) => {
      if (!prev.battle) return prev;
      const party = prev.party.map((a) => ({ ...a }));
      const tmp = party[idx]; party[idx] = party[0]; party[0] = tmp;
      return {
        ...prev, party,
        battle: { ...prev.battle, phase: "choose", mode: "main", log: [...prev.battle.log, `Go, ${DEX[tmp.sp].n}!`].slice(-4) },
      };
    });
  };

