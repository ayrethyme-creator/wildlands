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
    items: { treats: 8, berries: 4, bigberries: 0, goldberries: 0, prismberries: 0, antidote: 0, freshair: 0, coolbalm: 0, calmbalm: 0, wakeberry: 0, revives: 1, balms: 2, honeycombs: 1, coins: 120, lantern: 0, compass: 0 },
    badges: 0, profGift: false, houseIdx: 0,
    legends: {}, dex: {}, objects: {}, visited: { town1: true }, trainersBeaten: {}, rival: "otter_j",
    dialog: null, menu: null, battle: null, pick: null,
    sound: true, soundReady: false, run: true,
    slot: null, quiz: {}, dir: "down", arcs: {},
    compassOn: false, achv: {}, achvQueue: [], quizWins: { notes: 0, trials: 0, masters: 0 }, quizPerfect: {}, critQuiz: null,
  });
  const SR = useRef(S);
  useEffect(() => { SR.current = S; }, [S]);
  const timers = useRef([]);
  useEffect(() => () => { timers.current.forEach(clearTimeout); stopBGM(); }, []);

  // ----- save / load -----
  // Three independent slots, so a finished game can sit untouched while another
  // runs from the start. The original single-slot key is migrated into slot 1
  // the first time this build loads, so nobody loses a game in progress.
  const SLOTS = [1, 2, 3];
  const slotKey = (n) => `wildlands-save-${n}`;
  const LEGACY_KEY = "wildlands-save";

  const [saves, setSaves] = useState({});          // slot -> payload
  const [saveStatus, setSaveStatus] = useState("checking");
  const slotRef = useRef(null);                    // which slot this session writes to

  // A short description of a save, so the title screen shows what is in a slot
  // rather than three identical buttons.
  const slotSummary = (p) => {
    if (!p) return null;
    const lead = (p.party || []).find((a) => DEX[a.sp]);
    const seen = Object.keys(p.dex || {}).length;
    const where = (MAPS[p.map] && MAPS[p.map].name) || "the Wildlands";
    return {
      lead: lead ? `${DEX[lead.sp].n} Lv${lead.lvl}` : "no companions yet",
      leadSp: lead ? lead.sp : null,
      badges: typeof p.badges === "number" ? p.badges : 0,
      seen, where,
      legends: Object.keys(p.legends || {}).length,
      when: p.savedAt ? new Date(p.savedAt).toLocaleDateString() : null,
    };
  };

  const checkSave = async () => {
    setSaveStatus("checking");
    const found = {};
    // migrate the old single save into slot 1 if slot 1 is empty
    try {
      const legacy = await storage.get(LEGACY_KEY);
      if (legacy?.value) {
        let slot1 = null;
        try { const r1 = await storage.get(slotKey(1)); slot1 = r1?.value || null; } catch (e) {}
        if (!slot1) {
          await storage.set(slotKey(1), legacy.value);
        }
      }
    } catch (e) { /* no legacy save, which is fine */ }
    for (const n of SLOTS) {
      try {
        const r = await storage.get(slotKey(n));
        if (r?.value) found[n] = JSON.parse(r.value);
      } catch (e) { /* empty slot */ }
    }
    setSaves(found);
    setSaveStatus(Object.keys(found).length ? "found" : "none");
  };
  useEffect(() => { checkSave(); }, []);

  const saveGame = async (silent) => {
    const n = slotRef.current;
    if (!n) { if (!silent) setS((p) => ({ ...p, dialog: { text: "⚠️ No save slot selected." } })); return; }
    try {
      const st = SR.current;
      const payload = {
        v: 4, uid: UID, slot: n, savedAt: Date.now(),
        map: st.map, x: st.x, y: st.y, swimming: st.swimming,
        party: st.party, box: st.box, items: st.items,
        badges: st.badges, profGift: st.profGift, houseIdx: st.houseIdx,
        legends: st.legends, dex: st.dex, objects: st.objects, visited: st.visited,
        trainersBeaten: st.trainersBeaten, rival: st.rival, sound: st.sound, run: st.run,
        quiz: st.quiz, arcs: st.arcs,
        compassOn: st.compassOn, achv: st.achv, quizWins: st.quizWins, quizPerfect: st.quizPerfect,
      };
      const r = await storage.set(slotKey(n), JSON.stringify(payload));
      setSaves((prev) => ({ ...prev, [n]: payload }));
      if (!silent) setS((p) => ({ ...p, dialog: { text: r ? `💾 Saved to File ${n}.` : "⚠️ Save failed — storage unavailable." } }));
    } catch (e) {
      if (!silent) setS((p) => ({ ...p, dialog: { text: "⚠️ Save failed — storage unavailable." } }));
    }
  };

  const eraseSlot = async (n) => {
    try { await storage.delete(slotKey(n)); } catch (e) {}
    if (n === 1) { try { await storage.delete(LEGACY_KEY); } catch (e) {} }
    setSaves((prev) => { const c = { ...prev }; delete c[n]; return c; });
  };

  const startNewIn = (n) => {
    slotRef.current = n;
    setS((p) => ({ ...p, screen: "starter", slot: n }));
  };

  // ----- save codes -----
  // The panel lives in game state so the title screen can show it under the
  // slot it belongs to, the same way the erase confirmation does.
  const closeCodePanel = () => setS((p) => ({ ...p, codePanel: null }));

  const exportSlot = async (n) => {
    const p = saves[n];
    if (!p) return;
    setS((s) => ({ ...s, codePanel: { slot: n, mode: "export", text: "", busy: true, err: null } }));
    try {
      const code = await encodeSaveCode(p);
      setS((s) => ({ ...s, codePanel: { slot: n, mode: "export", text: code, busy: false, err: null } }));
    } catch (e) {
      setS((s) => ({ ...s, codePanel: { slot: n, mode: "export", text: "", busy: false,
        err: "Could not build a code for this file." } }));
    }
  };

  const openImport = (n) =>
    setS((s) => ({ ...s, codePanel: { slot: n, mode: "import", text: "", busy: false, err: null } }));

  const setCodeText = (t) =>
    setS((s) => ({ ...s, codePanel: { ...(s.codePanel || {}), text: t, err: null } }));

  const importIntoSlot = async (n, text) => {
    let payload;
    try {
      payload = await decodeSaveCode(text);
    } catch (e) {
      setS((s) => ({ ...s, codePanel: { ...(s.codePanel || {}), slot: n, mode: "import",
        busy: false, err: e.message } }));
      return;
    }
    // The code remembers which slot it came from; where it lands is this
    // player's choice, so the slot is rewritten rather than trusted.
    payload.slot = n;
    try {
      await storage.set(slotKey(n), JSON.stringify(payload));
      setSaves((prev) => ({ ...prev, [n]: payload }));
      setS((s) => ({ ...s, codePanel: { slot: n, mode: "done", text: "", busy: false, err: null } }));
    } catch (e) {
      setS((s) => ({ ...s, codePanel: { ...(s.codePanel || {}), slot: n, mode: "import", busy: false,
        err: `Could not write to File ${n} — storage is full or unavailable.` } }));
    }
  };

  const continueGame = (n) => {
    const p = saves[n]; if (!p) return;
    slotRef.current = n;
    UID = Math.max(UID, p.uid || 1000);
    const badges = typeof p.badges === "number" ? p.badges : (p.badge ? 1 : 0) + (p.badge2 ? 1 : 0);
    let map = MAPS[p.map] && typeof p.badges === "number" ? p.map : "town1";
    let x = p.x ?? 7, y = p.y ?? 8, swimming = !!p.swimming;
    const ch = MAPS[map].rows[y]?.[x];
    const ok = ch && ("gGp.nsecXRVD*¦¡".includes(ch) || (ch === "W" && swimming));
    if (!ok) { map = "town1"; x = 7; y = 8; swimming = false; }
    const party = (p.party || []).filter((a) => DEX[a.sp]);
    const box = (p.box || []).filter((a) => DEX[a.sp]);
    // Animals recruited before the naming change were stored without an
    // individual name, so the roster fell back to the species name and a save
    // in progress looked like a list of animals rather than a list of someone.
    // individualOf is a pure function of the species key, so backfilling gives
    // each of them exactly the name they would have had. Legends are skipped on
    // purpose: they are not station animals and have never carried a name.
    [...party, ...box].forEach((a) => {
      if (!a.indiv && !BEFRIEND_LEGEND[a.sp] && typeof individualOf !== "undefined") {
        const ind = individualOf(a.sp);
        if (ind && ind.name) a.indiv = ind.name;
      }
      // Animals from before natures existed get one derived from their uid, so
      // it is the same temperament on every load rather than a fresh roll each
      // time. Their stats are then rebuilt to match, because a stored stat
      // block computed without a nature would disagree with the label shown
      // beside it and with what the next level-up produces.
      if (!a.nat || !NATURES[a.nat]) {
        a.nat = natureFor(a.uid);
        const d = DEX[a.sp];
        if (d) {
          a.atk = withNature(statAt(d.b.a, a.lvl), a.nat, "atk");
          a.def = withNature(statAt(d.b.d, a.lvl), a.nat, "def");
          a.spd = withNature(statAt(d.b.s, a.lvl), a.nat, "spd");
        }
      }
    });
    // Boxed animals used to have no slot: the grid drew them in array order, so
    // an animal had a position on screen but nowhere to actually be. Moving one
    // needs a place to move it to, so each is given the slot it already appears
    // to occupy and keeps it from then on.
    {
      const used = {};
      box.forEach((a) => {
        // boxOf now returns a type-and-page key and converts old numeric
        // enclosures on the way through, so writing it back here is what
        // actually migrates the save off the annex scheme.
        a.box = boxOf(a);
        const b = a.box;
        used[b] = used[b] || new Set();
        if (typeof a.slot === "number" && a.slot >= 0 && a.slot < BOX_SIZE && !used[b].has(a.slot)) {
          used[b].add(a.slot);
        } else {
          let s = 0;
          while (used[b].has(s)) s++;
          a.slot = s;
          used[b].add(s);
        }
      });
    }
    let dex = {};
    Object.entries(p.dex || {}).forEach(([k, v]) => { if (DEX[k]) dex[k] = v; });
    [...party, ...box].forEach((a) => { dex[a.sp] = 2; });
    setS((s) => ({
      ...s, screen: "world", map, x, y, swimming,
      party, box,
      items: { treats: 8, berries: 4, bigberries: 0, goldberries: 0, prismberries: 0, antidote: 0, freshair: 0, coolbalm: 0, calmbalm: 0, wakeberry: 0, revives: 1, balms: 2, honeycombs: 1, coins: 120, lantern: 0, compass: 0, ...(p.items || {}) },
      badges, profGift: !!p.profGift, houseIdx: p.houseIdx || 0,
      legends: p.legends || {}, dex,
      objects: typeof p.badges === "number" ? (p.objects || {}) : {},
      visited: { town1: true, ...(typeof p.badges === "number" ? p.visited || {} : {}) },
      trainersBeaten: typeof p.badges === "number" ? (p.trainersBeaten || {}) : {},
      rival: p.rival || COUNTER[party[0]?.sp] || "otter_j",
      sound: p.sound !== false,
      run: p.run !== false,
      slot: n,
      quiz: p.quiz || {},
      arcs: p.arcs || {},
      compassOn: !!p.compassOn, achv: p.achv || {}, achvQueue: [],
      quizWins: { notes: 0, trials: 0, masters: 0, ...(p.quizWins || {}) },
      quizPerfect: p.quizPerfect || {}, critQuiz: null,
    }));
  };

  // ----- conservation arcs -----
  // A finding is recorded once and stays recorded. There is no way to lose
  // evidence, because the point is understanding a place, and you do not
  // un-understand it.
  const learn = (arcId, key, text) => {
    const st = SR.current;
    if (arcFound(st, arcId, key)) { if (text) say(text); return; }
    setS((p) => {
      const cur = (p.arcs && p.arcs[arcId]) || { stage: "listen", found: {}, tried: [] };
      return { ...p, dialog: text ? { text } : null,
        arcs: { ...(p.arcs || {}), [arcId]: { ...cur, found: { ...cur.found, [key]: true } } } };
    });
    SFX.learn?.();
  };

  // Studying a species in the field is what qualifies you to work with an
  // animal of that species who is already here and cannot go back. The wild one
  // you studied is still out there; this is a different animal entirely, and
  // the game says so.
  const meetIndividual = (sp) => {
    const st = SR.current;
    const ind = individualOf(sp);
    if (!st.dex[sp]) {
      say(`📋 "${ind.name}? Not yet. Go and study a wild ${DEX[sp].n} first — properly, in the field. `
        + `I am not handing an animal to somebody who has only seen one in a book."`);
      return;
    }
    if (st.party.some((a) => a.sp === sp) || (st.box || []).some((a) => a.sp === sp)) {
      say(`🏠 ${ind.name} is already with you.`);
      return;
    }
    say(`🏠 ${ind.name} — ${DEX[sp].n}${ind.sex ? `, ${ind.sex === "F" ? "female" : "male"}` : ""}\n${ind.since}\n\n${ind.story}`, [
      { label: `Work with ${ind.name}`, act: () => {
          const a = mk(sp, Math.max(5, Math.floor((SR.current.party[0]?.lvl || 5) * 0.85)));
          a.indiv = ind.name;
          setS((p) => {
            const full = p.party.length >= 6;
            return {
              ...p,
              party: full ? p.party : [...p.party, a],
              box: full ? [...(p.box || []), a] : (p.box || []),
              dialog: { text: full
                ? `🏞️ ${ind.name} goes to the Sanctuary — your six are full.`
                : `🤝 ${ind.name} joins you.` },
            };
          });
          SFX.befriend?.();
        } },
      { label: "Not today", act: () => setS((p) => ({ ...p, dialog: null })) },
    ]);
  };

  const openPitch = (arcId) => setS((p) => ({ ...p, dialog: null, pitch: { arc: arcId, choice: null, verdict: null } }));
  const closePitch = () => setS((p) => ({ ...p, pitch: null }));

  const makePitch = (arcId, propKey) => {
    const st = SR.current;
    const v = amaraVerdict(st, arcId, propKey);
    setS((p) => {
      const cur = (p.arcs && p.arcs[arcId]) || { stage: "listen", found: {}, tried: [] };
      return {
        ...p,
        pitch: { ...p.pitch, choice: propKey, verdict: v },
        arcs: v.funded
          ? { ...(p.arcs || {}), [arcId]: { ...cur, stage: "build", funded: propKey,
              tried: [...(cur.tried || []), propKey] } }
          : p.arcs,
      };
    });
    SFX[v.funded ? "puzzle" : "miss"]?.();
  };

  // Building it, and finding out. A proposal that does not work does not end
  // the arc - it closes one door and the arc stays open with one fewer thing
  // left to try.
  const buildSolution = (arcId) => {
    const st = SR.current;
    const cur = arcState(st, arcId);
    const A = ARCS[arcId];
    const p = A.proposals[cur.funded];
    if (!p) return;
    if (p.works) {
      // Paid once. `solved` is the guard - a solved arc cannot be rebuilt, so
      // this cannot be farmed, and re-reading the good ending pays nothing.
      const reward = ARC_REWARD(arcId);
      setS((prev) => {
        const items = { ...prev.items, coins: (prev.items.coins ?? 0) + reward.coins };
        Object.keys(reward.items).forEach((k) => { items[k] = (items[k] ?? 0) + reward.items[k]; });
        return { ...prev, items,
          dialog: { text: `📗 ${A.outcome.good}\n\n${rewardLine(reward)}` },
          arcs: { ...(prev.arcs || {}), [arcId]: { ...cur, stage: "done", solved: true } } };
      });
      SFX.badge?.();
    } else {
      setS((prev) => ({ ...prev, dialog: { text: `📕 ${p.why}\n\n${A.outcome.bad}` },
        arcs: { ...(prev.arcs || {}), [arcId]: { ...cur, stage: "listen", funded: null } } }));
      SFX.miss?.();
    }
  };

  // ----- field exams -----
  // Five questions, drawn only from the ground between the last gym and this
  // one. One wrong answer ends the attempt; retrying reshuffles both the
  // questions and the order of the options, so the exam rewards having read the
  // guide rather than having failed it once.
  const startExam = (kind, gymId, key, title, legendKey) => {
    const seed = (Date.now() ^ (gymId * 7919)) >>> 0;
    const qs = buildExam(gymId, seed);
    if (!qs.length) {
      // Never let a missing question pool block progress.
      setS((p) => ({ ...p, dialog: null, quiz: { ...(p.quiz || {}), [key]: true } }));
      return;
    }
    setS((p) => ({ ...p, dialog: null, exam: { kind, key, title, legendKey, qs, i: 0, wrong: null } }));
  };

  const answerExam = (idx) => {
    const st = SR.current;
    const ex = st.exam; if (!ex || ex.wrong !== null) return;
    const q = ex.qs[ex.i];
    const chosen = q.opts[idx];
    if (chosen !== q.a) { SFX.miss(); setS((p) => ({ ...p, exam: { ...p.exam, wrong: idx } })); return; }
    if (ex.i + 1 >= ex.qs.length) {
      SFX.puzzle();
      setS((p) => ({
        ...p, exam: null,
        quiz: { ...(p.quiz || {}), [ex.key]: true },
        dialog: { text: "✅ Five for five. \"Then you have been looking after all. Let's begin.\"" },
      }));
      return;
    }
    SFX.learn();
    setS((p) => ({ ...p, exam: { ...p.exam, i: p.exam.i + 1 } }));
  };

  const closeExam = () => setS((p) => ({ ...p, exam: null }));
  const retryExam = () => {
    const ex = SR.current.exam; if (!ex) return;
    const gymId = ex.kind === "gym" ? Number(ex.key.replace("gym", "")) : GYM_COUNT;
    startExam(ex.kind, gymId, ex.key, ex.title, ex.legendKey);
  };

  // ----- the Naturalist's Archive: critical-thinking quizzes -----
  // Deliberately not the gym-exam engine: a wrong answer here doesn't end the
  // attempt, it just doesn't pay. Every question answered correctly pays out
  // on the spot, so this is grindable income scaled to difficulty rather than
  // a one-time gate.
  // `order` maps displayed slot -> original option index, reshuffled per
  // question so the correct answer isn't always the first option printed in
  // the data.
  const shuffledOrder = (n) => {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // `qIdx` is a random draw of 5 questions out of the tier's whole pool (now
  // 100 deep per tier), redrawn every sitting - the pool being far bigger
  // than any one sitting is what actually makes memorising it pointless.
  const SITTING_LEN = 5;
  const startCritQuiz = (tierId) => {
    const tier = CRIT_TIERS.find((t) => t.id === tierId);
    if (!tier) return;
    const qIdx = shuffledOrder(tier.qs.length).slice(0, Math.min(SITTING_LEN, tier.qs.length));
    setS((p) => ({ ...p, menu: null, critQuiz: { tierId, qIdx, i: 0, correct: 0, picked: null, done: false, order: shuffledOrder(tier.qs[qIdx[0]].opts.length) } }));
  };

  const answerCritQuiz = (idx) => {
    const st = SR.current;
    const cq = st.critQuiz; if (!cq || cq.picked !== null) return;
    const tier = CRIT_TIERS.find((t) => t.id === cq.tierId);
    const q = tier.qs[cq.qIdx[cq.i]];
    const right = cq.order[idx] === q.a;
    if (right) SFX.learn(); else SFX.miss();
    setS((p) => ({ ...p, critQuiz: { ...p.critQuiz, picked: idx, correct: p.critQuiz.correct + (right ? 1 : 0) } }));
  };

  const nextCritQuiz = () => {
    const st = SR.current;
    const cq = st.critQuiz; if (!cq) return;
    const tier = CRIT_TIERS.find((t) => t.id === cq.tierId);
    if (cq.i + 1 >= cq.qIdx.length) {
      setS((p) => ({ ...p, critQuiz: { ...p.critQuiz, done: true } }));
    } else {
      const nextI = cq.i + 1;
      setS((p) => ({ ...p, critQuiz: { ...p.critQuiz, i: nextI, picked: null, order: shuffledOrder(tier.qs[cq.qIdx[nextI]].opts.length) } }));
    }
  };

  const collectCritQuiz = () => {
    const st = SR.current;
    const cq = st.critQuiz; if (!cq || !cq.done) return;
    const tier = CRIT_TIERS.find((t) => t.id === cq.tierId);
    const payout = cq.correct * tier.reward;
    SFX.buy();
    setS((p) => ({
      ...p,
      items: { ...p.items, coins: (p.items.coins ?? 0) + payout },
      quizWins: { ...p.quizWins, [cq.tierId]: (p.quizWins[cq.tierId] || 0) + 1 },
      quizPerfect: cq.correct === cq.qIdx.length ? { ...p.quizPerfect, [cq.tierId]: true } : p.quizPerfect,
      critQuiz: null,
      dialog: { text: `📋 ${cq.correct} of ${cq.qIdx.length} correct — collected ₡${payout} in trade shells.` },
    }));
  };

  const closeCritQuiz = () => setS((p) => ({ ...p, critQuiz: null }));

  // ----- achievements -----
  // Every achievement is a pure function of state that already exists, so
  // nothing new has to be tracked to know whether one is earned — only
  // whether the player has already been told. `achv` remembers that; the
  // queue lets several unlocked in the same tick surface one at a time rather
  // than fighting over the single dialog box.
  useEffect(() => {
    if (SR.current.screen !== "world") return;
    const st = SR.current;
    const already = st.achv || {};
    const queued = new Set(st.achvQueue || []);
    const newly = ACHIEVEMENTS.filter((a) => !already[a.id] && !queued.has(a.id) && a.check(st));
    if (!newly.length) return;
    setS((p) => {
      const achv = { ...(p.achv || {}) };
      newly.forEach((a) => { achv[a.id] = true; });
      return { ...p, achv, achvQueue: [...(p.achvQueue || []), ...newly.map((a) => a.id)] };
    });
  }, [S.dex, S.badges, S.legends, S.trainersBeaten, S.quiz, S.items?.coins, S.items?.compass, S.visited, S.quizWins, S.quizPerfect, S.screen, S.party]);

  useEffect(() => {
    const st = SR.current;
    if (st.screen !== "world" || st.dialog || st.menu || st.battle || st.exam || st.critQuiz) return;
    if (!st.achvQueue || !st.achvQueue.length) return;
    const id = st.achvQueue[0];
    const a = ACHIEVEMENTS.find((x) => x.id === id);
    SFX.badge?.();
    setS((p) => ({ ...p, achvQueue: p.achvQueue.slice(1),
      dialog: { text: `🏆 Achievement unlocked: ${a ? a.name : id}!${a ? "\n" + a.desc : ""}` } }));
  }, [S.achvQueue, S.dialog, S.menu, S.battle, S.exam, S.critQuiz, S.screen]);

  // ----- retroactive Champion's Compass -----
  // Saves that beat the Champion before the Compass existed had that grant
  // fire and find nothing to hand over. This catches them the next time
  // they're standing free in the world and quietly runs the same grant.
  useEffect(() => {
    const st = SR.current;
    if (st.screen !== "world" || st.dialog || st.menu || st.battle || st.exam || st.critQuiz) return;
    if (!st.trainersBeaten?.["summit:7,1"] || st.items?.compass) return;
    setS((p) => ({
      ...p,
      items: { ...p.items, compass: 1 },
      dialog: { text: "🧭 Prof. Acacia catches up with you on the trail. \"I never did get this to you properly.\" She presses something into your hand: a Champion's Compass. \"Point it anywhere and it'll pull your notice toward whatever you haven't met yet. Toggle it off whenever you'd rather the land surprise you.\"" },
    }));
  }, [S.screen, S.trainersBeaten, S.items?.compass, S.dialog, S.menu, S.battle, S.exam, S.critQuiz]);

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
    // The Champion's Compass steers wild encounters toward species not yet
    // in the Field Guide, but never toward an empty pool — if everything
    // living here is already befriended, it quietly falls back to normal.
    let usePool = pool;
    const st = SR.current;
    if (st.items.compass > 0 && st.compassOn) {
      const undiscovered = pool.filter(([sp]) => (st.dex[sp] || 0) < 2);
      if (undiscovered.length) usePool = undiscovered;
    }
    startBattle({ kind: "wild", enemy: mk(pickPool(usePool), rnd(lv[0], lv[1])) });
  };

  // ----- world movement -----
  const move = (dx, dy) => {
    const st = SR.current;
    if (st.screen !== "world" || st.dialog || st.menu || st.battle) return;
    // Face the way we are trying to go, even if the step is blocked - walking
    // into a wall should still turn you toward it, the way it does in every
    // game of this shape.
    const facing = dy < 0 ? "up" : dy > 0 ? "down" : dx < 0 ? "left" : "right";
    if (st.dir !== facing) setS((p) => ({ ...p, dir: facing }));
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
        // warp increments on every transition so the avatar element is rebuilt
        // rather than animated into place. See the note beside it in part5.
        ...p, map: exit.map, x: exit.x, y: exit.y, swimming: false, warp: (p.warp || 0) + 1,
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
      // step counts every completed footfall. The avatar and the grass both
      // key an animation on it, which is what turns a smooth slide into a walk
      // and makes the grass react to being walked through.
      // px,py is the tile just left. The grass there is disturbed as well as
      // the grass arrived in, which is what makes walking a field leave a wake
      // through it rather than a single clump twitching under your feet.
      setS((p) => ({ ...p, px: p.x, py: p.y, x: nx, y: ny,
        swimming: ch === "W", step: ((p.step || 0) + 1) % 1000 }));
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
      if (st.badges >= g.id) {
        const c2 = (typeof CERTS !== "undefined" && CERTS[g.id]) || null;
        say(`📋 ${g.leader}: "You're signed off for ${c2 ? c2.title.toLowerCase() : "this district"}. `
          + `${c2 ? c2.grants : ""} Don't make me regret it."`);
      }
      else if (!(st.quiz || {})[`gym${g.id}`]) {
        // The leader will not fight a ranger who has not been paying attention
        // to the ground they walked in on.
        const c = (typeof CERTS !== "undefined" && CERTS[g.id]) || null;
        say(`📋 ${g.leader}: "You're here for ${c ? c.title.toLowerCase() : "assessment"}. Two parts — written, then practical.\n\n`
          + `The written is five questions about the country between here and the last station. I want to know you've been looking, not just walking.\n\n`
          + `${c ? c.note : ""}"`, [
          { label: "Sit the written", act: () => startExam("gym", g.id, `gym${g.id}`, `${g.leader}'s Field Exam`) },
          { label: "Not yet", act: () => setS((p) => ({ ...p, dialog: null })) },
        ]);
      }
      else say(`📋 ${g.leader}: "Written's done. Practical now — ${g.type} work, four animals, and I want to see how you handle a bad matchup as much as a good one.\n\nReady when you are."`, [
        { label: "Begin the practical", act: () => startBattle({ kind: "trainer", trainerName: g.leader, gym: g, team: g.team(), ti: 0, enemy: null }) },
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
        { label: "Approach!", act: () => {
            if ((SR.current.quiz || {})[`legend_${key}`]) {
              startBattle({ kind: "legend", enemy: mk(key, LEGEND_LVL[key]) }); return;
            }
            // The guardians ask before they answer.
            say("🗿 The altar does not warm to your hand. A voice that is not quite a voice asks five things of you — about the land you crossed to stand here.", [
              { label: "Answer", act: () => startExam("legend", GYM_COUNT, `legend_${key}`, "The Altar's Question", key) },
              { label: "Step back", act: () => setS((p) => ({ ...p, dialog: null })) },
            ]);
          } },
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
      if (tr.quizHouse) { setS((p) => ({ ...p, dialog: null, menu: "quizhouse" })); return; }
      // Story people are chat NPCs too, so they have to be handled BEFORE the
      // generic chat line - otherwise every one of them just recites its
      // opening speech forever and nothing can be learned, pitched or built.
      const isStory = tr.learns || tr.builds || tr.pitchArc || tr.station
        || (typeof beeloudSolvedText !== "undefined" && beeloudSolvedText[idKey]);
      if (!isStory && (tr.chat || !tr.team)) { say(`${tr.em || "🧍"} ${tr.name}: "${tr.line}"`); return; }
      // Once an arc is solved its people and places change what they say, and
      // the emoji on the tile changes with them. The payoff has to be visible
      // from the map rather than buried in a menu.
      if (typeof beeloudSolvedText !== "undefined" && beeloudSolvedText[idKey]
          && arcState(st, "beeloud").solved) {
        const after = beeloudSolvedText[idKey];
        say(`${after.em} ${after.name}: "${after.line}"`);
        return;
      }

      // Whoever is marked `builds` for this arc is where a funded proposal gets
      // put in. This has to sit OUTSIDE the tr.learns branch: Thabo happens to
      // carry a finding as well, but the fifteen people part65 places do not,
      // and while this check lived inside tr.learns none of them could ever
      // accept the work - they recited their opening line forever, exactly the
      // failure the isStory comment above warns about. Ada Oyelaran could not
      // be given the beaver dam back however many times you talked to her.
      if (tr.builds && tr.arc && tr.builds === tr.arc
          && arcState(st, tr.arc).stage === "build") {
        say(`${tr.em || "🧍"} ${tr.name}: "${tr.buildLine
          || "You came back with something. Alright. Show me."}"`, [
          { label: "Put it in together", act: () => buildSolution(tr.arc) },
          { label: "Soon", act: () => setS((p) => ({ ...p, dialog: null })) },
        ]);
        return;
      }

      // Story people and examinable things. A finding is recorded once; after
      // that they say the same thing without re-announcing it, so the clearing
      // does not shout at you every time you cross it.
      if (tr.learns) {
        const already = arcFound(st, tr.arc, tr.learns.key);
        if (already) { say(`${tr.em || "📓"} ${tr.name}: "${tr.line}"`); return; }
        say(`${tr.em || "📓"} ${tr.line}`, [
          { label: "Write it down", act: () => learn(tr.arc, tr.learns.key, tr.learns.text) },
          { label: "Leave it", act: () => setS((p) => ({ ...p, dialog: null })) },
        ]);
        return;
      }
      // The station keeper lists who is living here.
      if (tr.station) {
        const st2 = SR.current;
        say(`👩🏾‍🌾 ${tr.name}: "${tr.line}"`,
          tr.station.filter((sp) => DEX[sp]).slice(0, 8).map((sp) => {
            const ind = individualOf(sp);
            const known = !!st2.dex[sp];
            return { label: `${known ? "" : "🔒 "}${ind.name} — ${DEX[sp].n}`,
                     act: () => meetIndividual(sp) };
          }).concat([{ label: "Another time", act: () => setS((p) => ({ ...p, dialog: null })) }]));
        return;
      }
      if (tr.pitchArc) {
        // She works whichever arc is still open, in order — so one benefactor
        // serves all twelve regions without needing twelve copies of her.
        const list = tr.pitchArcs || [tr.pitchArc];
        // Four arcs do not open until the summit is behind you. Same gate the
        // Vigil uses, so the game has one idea of "finished" rather than two.
        const champion = !!st.trainersBeaten["summit:7,1"];
        const open = list.filter((id) => ARCS[id] && !(ARCS[id].postgame && !champion));
        const live = open.find((id) => arcState(st, id).stage !== "done")
          || open[open.length - 1] || list[list.length - 1];
        const A = ARCS[live];
        const cur = arcState(st, live);
        if (cur.stage === "done") { say(`👩🏿‍🏫 ${tr.name}: "The hives are holding. Write down what you did and when — in three years neither of us will remember."`); return; }
        if (cur.stage === "build") {
          say(`👩🏿‍🏫 ${tr.name}: "It is funded. Go and put it in — I do not pay people to plan things."`);
          return;
        }
        say(`👩🏿‍🏫 ${tr.name}: "${tr.line}"`, [
          { label: `Pitch: ${A.title}`, act: () => openPitch(live) },
          { label: "Not yet", act: () => setS((p) => ({ ...p, dialog: null })) },
        ]);
        return;
      }
      if (tr.elite && !(st.quiz || {})[`elite_${idKey}`]) {
        say(`⚜️ ${tr.name}: "${tr.line}" — but first, five questions. The Summit does not seat a ranger who cannot name what they have walked past.`, [
          { label: "Answer", act: () => startExam("elite", GYM_COUNT, `elite_${idKey}`, `${tr.name}'s Examination`) },
          { label: "Later", act: () => setS((p) => ({ ...p, dialog: null })) },
        ]);
        return;
      }
      // The battle line is theirs; a field note, if they carry one, is a
      // separate beat underneath rather than a second clause of the same
      // sentence.
      say(`${tr.elite ? "⚜️ " : ""}${tr.specialist ? "🌿 " : ""}${tr.name}${tr.homage ? ` (${tr.homage})` : ""}: "${tr.line}"`
        , [
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
    else intro = `A ${DEX[enemy.sp].n} breaks cover — Lv ${enemy.lvl}. Hold still.`;
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
      // moves deferred from an earlier evolution come due one milestone at a time
      if (my.catchup && my.catchup.length) {
        my.catchup = my.catchup.filter(([L, k]) => {
          if (L > my.lvl) return true;
          learnMove(my, k, logs);
          return false;
        });
        if (!my.catchup.length) delete my.catchup;
      }
      const st = DEX[my.sp];
      if (st.grows && my.lvl >= st.grows.at) {
        const g = st.grows;
        const to = g.to || (my.sex === "M" ? g.toM : g.toF);
        const gated = g.needs === "night" && !isNight();
        if (to && to !== my.sp && !gated) {
          logs.push(`✨ ${st.n} ${DEX[to].meta || "grew up into"} ${DEX[to].n}!`);
          my.sp = to;
          // An evolving animal used to be handed every starting move of its new
          // form plus every level-up move it had "missed" — up to nine at once,
          // which buried the moment under a stack of prompts and churned a
          // carefully chosen moveset. It now learns the single best new move on
          // the spot, and grows into the rest over the levels that follow.
          const known = new Set([...my.moves, ...(my.pending || [])]);
          const fresh = [...new Set([
            ...(DEX[to].m || []),
            ...(DEX[to].l || []).filter(([L]) => L <= my.lvl).map(([, k]) => k),
          ])].filter((k) => MOVES[k] && !known.has(k));
          // strongest first, so the transformation itself feels like a step up
          fresh.sort((a, b) => (MOVES[b].p || 0) - (MOVES[a].p || 0));
          if (fresh.length) {
            learnMove(my, fresh[0], logs);
            const rest = fresh.slice(1, 5);   // at most four more, spaced out
            if (rest.length) {
              my.catchup = [
                ...(my.catchup || []),
                ...rest.map((k, i) => [my.lvl + (i + 1) * 3, k]),
              ];
            }
          }
        }
      }
      const d = DEX[my.sp];
      const nm = statAt(d.b.h, my.lvl, true);
      my.hp += Math.max(0, nm - my.maxHp); my.maxHp = nm;
      // The nature has to be reapplied here. Without it a level-up quietly
      // recalculates back to the base numbers and the temperament stops
      // meaning anything the moment the animal grows.
      my.atk = withNature(statAt(d.b.a, my.lvl), my.nat, "atk");
      my.def = withNature(statAt(d.b.d, my.lvl), my.nat, "def");
      my.spd = withNature(statAt(d.b.s, my.lvl), my.nat, "spd");
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

    // A landed blow bumps a counter the battle screen watches, and the counter
    // doubles as a React key so a second hit restarts the shake instead of
    // being swallowed by the animation already running.
    const HITSOUNDS = new Set(["hit", "crit", "super", "weak"]);

    const snapBusy = (text, extras = {}, snd) => {
      const P = party.map((a) => ({ ...a })); P[0] = { ...my };
      const E = { ...en };
      steps.push((prev) => { if (snd) SFX[snd]?.(); return prev.battle ? {
        hitFlash: HITSOUNDS.has(snd) ? (prev.hitFlash || 0) + 1 : (prev.hitFlash || 0),
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
        else if (mv.fx === "lowerDef") { dfn.stg.d = Math.max(-2, dfn.stg.d - 1); txt += ` ${tgt}'s defense fell!`; snapBusy(txt, {}, "weak"); }
        else if (mv.fx === "raiseAtk") { att.stg.a = Math.min(2, att.stg.a + 1); txt += " Its attack rose!"; snapBusy(txt, {}, "learn"); }
        else if (mv.fx === "raiseSpd") { att.stg.s = Math.min(2, (att.stg.s || 0) + 1); txt += " Its speed rose!"; snapBusy(txt, {}, "learn"); }
        else if (mv.fx === "lowerSpd") { dfn.stg.s = Math.max(-2, (dfn.stg.s || 0) - 1); txt += ` ${tgt}'s speed fell!`; snapBusy(txt, {}, "weak"); }
        else if (mv.fx === "chill") { if (dfn.chill) txt += ` But ${tgt} is already chilled!`; else { dfn.chill = 3; txt += ` ${tgt} was chilled — its speed halves!`; } snapBusy(txt, {}, "weak"); }
        else if (mv.fx === "sleep") { if (dfn.slp) txt += ` But ${tgt} is already asleep!`; else { dfn.slp = rnd(2, 3); txt += ` ${tgt} drifted off to sleep!`; } snapBusy(txt, {}, "sleep"); }
        else if (mv.fx === "fear") { if (dfn.fear) txt += ` But ${tgt} is already shaken!`; else { dfn.fear = 2; txt += ` ${tgt} shudders with dread!`; } snapBusy(txt, {}, "fear"); }
        else if (mv.fx === "burn") { if (dfn.brn) txt += ` But ${tgt} is already burned!`; else { dfn.brn = 1; txt += ` ${tgt} was burned!`; } snapBusy(txt, {}, "weak"); }
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
      if (mv.fx === "burn" && dfn.hp > 0 && !dfn.brn && Math.random() < (mv.fxc || 0)) { dfn.brn = 1; txt += ` ${tgt} was burned!`; }
      if (mv.fx === "fear" && dfn.hp > 0 && !dfn.fear && Math.random() < (mv.fxc || 0)) { dfn.fear = 2; txt += ` ${tgt} flinched!`; }
      if (mv.fx === "lowerDef" && dfn.hp > 0 && Math.random() < (mv.fxc || 0)) { dfn.stg.d = Math.max(-2, dfn.stg.d - 1); txt += ` ${tgt}'s defense fell!`; }
      if (mv.fx === "lowerSpd" && dfn.hp > 0 && Math.random() < (mv.fxc || 0)) { dfn.stg.s = Math.max(-2, (dfn.stg.s || 0) - 1); txt += ` ${tgt}'s speed fell!`; }
      if (mv.fx === "raiseAtk" && Math.random() < (mv.fxc || 0)) { att.stg.a = Math.min(2, att.stg.a + 1); txt += ` ${who}'s attack rose!`; }
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
      snapBusy(`${foeName()} has had enough and withdraws.`, {}, "faint");
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
            const firstCompass = !items.compass;
            items.compass = 1;
            snapBusy("Zuri: \"...Okay. Okay! Champion. Say it out loud. SAY IT!\"", {}, "victory");
            snapEnd("🏆 " + EPILOGUE + (firstCompass
              ? "\n\n🧭 Prof. Acacia presses something into your hand: a Champion's Compass. \"Point it anywhere and it'll pull your notice toward whatever you haven't met yet. Toggle it off whenever you'd rather the land surprise you.\""
              : ""));
          } else {
            const won = trainerPrize(b.team, b.prize);
            items.coins = (items.coins ?? 0) + won;
            snapBusy(`${b.trainerName}: "Well fought, ranger!"`, {}, "victory");
            snapEnd(`You won ₡${won}!`);
          }
        }
      } else if (b.kind === "legend") {
        legends[en.sp] = "calmed";
        snapEnd(CALM[en.sp]);
      } else {
        // A wild animal has no purse. What you pick up is whatever the scuffle
        // shook loose, which keeps grinding grass from being an income.
        const c = Math.max(1, Math.floor(en.lvl / 3));
        items.coins = (items.coins ?? 0) + c;
        snapBusy(`Picked up ₡${c} in trade shells.`, {}, "buy");
        snapEnd(null);
      }
    };

    const onMyFaint = () => {
      snapBusy(`${DEX[my.sp].n} is worn out and needs to rest.`, {}, "faint");
      const alive = party.some((a, i) => i !== 0 && a.hp > 0);
      if (alive) {
        const P = party.map((a) => ({ ...a })); P[0] = { ...my };
        steps.push((prev) => prev.battle ? {
          ...prev, party: P,
          battle: { ...prev.battle, enemy: { ...en }, phase: "switch", mode: "main" },
        } : prev);
      } else {
        party.forEach((a) => { a.hp = a.maxHp; a.pp = a.moves.map((k) => maxPP(MOVES[k])); a.psn = false; a.slp = 0; a.fear = 0; a.chill = 0; a.brn = 0; });
        my.hp = my.maxHp;
        my.pp = my.moves.map((k) => maxPP(MOVES[k]));
        my.psn = false; my.slp = 0; my.fear = 0; my.chill = 0; my.brn = 0;
        const lost = blackoutLoss(items.coins, badges);
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
      if (en.hp > 0 && en.brn) {
        const d = Math.max(1, Math.floor(en.maxHp / 10));
        en.hp = Math.max(0, en.hp - d);
        snapBusy(`${foeName()} is seared by its burn! (-${d})`, {}, "poison");
        if (en.hp <= 0) { onEnemyFaint(); return; }
      }
      if (my.hp > 0 && my.brn) {
        const d = Math.max(1, Math.floor(my.maxHp / 10));
        my.hp = Math.max(0, my.hp - d);
        snapBusy(`${DEX[my.sp].n} is seared by its burn! (-${d})`, {}, "poison");
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
    } else if (action.kind === "prismberry") {
      if ((items.prismberries ?? 0) <= 0) return;
      items.prismberries -= 1;
      my.hp = Math.min(my.maxHp, my.hp + 200);
      snapBusy(`You fed ${DEX[my.sp].n} a Prism Berry. (+200 HP)`, {}, "heal");
      if (!enemyActs()) finishRound();
    } else if (action.kind === "antidote") {
      if ((items.antidote ?? 0) <= 0) return;
      if (!my.psn) { snapBusy(`${DEX[my.sp].n} isn't poisoned.`); backToChoose(); }
      else { items.antidote -= 1; my.psn = false;
        snapBusy(`You gave ${DEX[my.sp].n} an Antidote. The poison is gone!`, {}, "heal");
        if (!enemyActs()) finishRound(); }
    } else if (action.kind === "freshair") {
      if ((items.freshair ?? 0) <= 0) return;
      if (!my.brn) { snapBusy(`${DEX[my.sp].n} isn't burned.`); backToChoose(); }
      else { items.freshair -= 1; my.brn = 0;
        snapBusy(`You dressed ${DEX[my.sp].n}'s burn with Burn Salve. The searing stops!`, {}, "heal");
        if (!enemyActs()) finishRound(); }
    } else if (action.kind === "coolbalm") {
      if ((items.coolbalm ?? 0) <= 0) return;
      if (!my.chill) { snapBusy(`${DEX[my.sp].n} isn't chilled.`); backToChoose(); }
      else { items.coolbalm -= 1; my.chill = 0;
        snapBusy(`You warmed ${DEX[my.sp].n} with a Warm Wrap. The chill lifts!`, {}, "heal");
        if (!enemyActs()) finishRound(); }
    } else if (action.kind === "calmbalm") {
      if ((items.calmbalm ?? 0) <= 0) return;
      if (!my.fear) { snapBusy(`${DEX[my.sp].n} isn't shaken.`); backToChoose(); }
      else { items.calmbalm -= 1; my.fear = 0;
        snapBusy(`You soothed ${DEX[my.sp].n} with a Calming Herb. Its nerve returns!`, {}, "heal");
        if (!enemyActs()) finishRound(); }
    } else if (action.kind === "wakeberry") {
      if ((items.wakeberry ?? 0) <= 0) return;
      if (!my.slp) { snapBusy(`${DEX[my.sp].n} is wide awake.`); backToChoose(); }
      else { items.wakeberry -= 1; my.slp = 0;
        snapBusy(`You woke ${DEX[my.sp].n} with a Rouse Berry. It's alert again!`, {}, "heal");
        if (!enemyActs()) finishRound(); }
    } else if (action.kind === "balm") {
      if ((items.balms ?? 0) <= 0) return;
      if (!my.psn && !my.slp && !my.fear && !my.chill) { snapBusy(`${DEX[my.sp].n} is already feeling fine.`); backToChoose(); }
      else {
        items.balms -= 1;
        my.psn = false; my.slp = 0; my.fear = 0; my.chill = 0; my.brn = 0;
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
      if (b.kind === "trainer") { snapBusy("That animal is already someone's partner — study it another time."); backToChoose(); }
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
          // The wild animal goes back to what it was doing. What joins you is
          // the station's own non-releasable animal of that species, who has a
          // name and a history — so the party carries a person, not a specimen.
          const ind = (typeof individualOf !== "undefined" && b.kind !== "legend")
            ? individualOf(en.sp) : null;
          if (ind) friend.indiv = ind.name;
          let dest;
          if (party.length < 6) {
            party.push(friend);
            dest = ind ? `${ind.name} will work with you.` : "It joined your team!";
          } else {
            // A new arrival needs a place in the enclosure, not only the
            // enclosure. Without a slot it lands on top of whoever holds slot 0.
            const spot = placeSlotFor(friend.sp, box);
            friend.box = spot.box; friend.slot = spot.slot;
            box.push(friend);
            dest = ind
              ? `${ind.name} is waiting at the Sanctuary (${boxNameAt(friend.box)}) — your six are full.`
              : `Your team is full — it headed to the Sanctuary (${boxNameAt(friend.box)}).`;
          }
          // Three separate beats, so none of them scrolls past before it can be
          // read. The middle one is the whole thesis of the game and it was
          // going by too fast to notice.
          snapBusy(b.kind === "legend" ? `🌟 ${BEFRIEND_LEGEND[en.sp]}` : `📖 The ${DEX[en.sp].n} lets you close enough. Notes, measurements, photographs.`, {}, "befriend");
          if (b.kind !== "legend") {
            snapBusy(`🌿 It goes back to what it was doing. Nothing wild leaves this place with you.`);
            snapBusy(`📔 ${DEX[en.sp].n} logged in your Field Guide — open it to read what you now know about them.`);
            if (ind) snapBusy(`🏠 At the station there is a ${DEX[en.sp].n} who cannot go back.\n\n${ind.name} — ${ind.since}`);
          }
          snapEnd(b.kind === "legend"
            ? `Field study complete — ${DEX[en.sp].n} logged. The land settles; the guardian chose you.`
            : dest);
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

  // ----- using things outside a battle -----
  // Every healing item in the game could only be used with something in front
  // of you trying to knock you over. Walk out of a fight with a poisoned animal
  // and a bag full of antidote and there was nothing you could do about it but
  // start another fight, which is exactly backwards. The bag opens on the map
  // now and reaches the whole team, bench included.
  //
  // Nothing here is a battle turn: no enemy acts, nothing is spent unless the
  // use actually does something. Feeding a berry to an animal already at full
  // health returns the berry.
  const FIELD_ITEMS = {
    berries:      { n: "🫐 Berry Snack",  heal: 30 },
    bigberries:   { n: "🍇 Big Berry",    heal: 70 },
    goldberries:  { n: "🍯 Golden Berry", heal: 150 },
    prismberries: { n: "💎 Prism Berry",  heal: 200 },
    revives:      { n: "✨ Revive",       revive: true },
    antidote:     { n: "🧪 Antidote",     cures: ["psn"] },
    wakeberry:    { n: "⏰ Rouse Berry",  cures: ["slp"] },
    calmbalm:     { n: "🍵 Calming Herb", cures: ["fear"] },
    coolbalm:     { n: "🧣 Warm Wrap",    cures: ["chill"] },
    freshair:     { n: "🩹 Burn Salve",   cures: ["brn"] },
    balms:        { n: "🌿 Soothe Balm",  cures: ["psn", "slp", "fear", "chill", "brn"] },
    honeycombs:   { n: "🍯 Honeycomb",    pp: true },
  };

  // Whether an item would actually change this animal. Drives both the button
  // state and the guard, so a greyed button and a refused use never disagree.
  const fieldItemUseful = (key, a) => {
    const F = FIELD_ITEMS[key];
    if (!F || !a) return false;
    if (F.revive) return a.hp <= 0;
    if (a.hp <= 0) return false;                       // the rest need it awake
    if (F.heal) return a.hp < a.maxHp;
    if (F.cures) return F.cures.some((c) => (c === "slp" ? (a.slp ?? 0) > 0 : c === "psn" ? !!a.psn : (a[c] ?? 0) > 0));
    if (F.pp) return a.moves.some((k, i) => (a.pp[i] ?? 0) < maxPP(MOVES[k]));
    return false;
  };

  const useFieldItem = (key, idx) => {
    const F = FIELD_ITEMS[key];
    if (!F) return;
    setS((prev) => {
      if ((prev.items[key] ?? 0) <= 0) return prev;
      const party = prev.party.map((a) => ({ ...a }));
      const a = party[idx];
      if (!fieldItemUseful(key, a)) return prev;
      let msg;
      if (F.revive) {
        a.hp = Math.max(1, Math.floor(a.maxHp / 2));
        a.psn = false; a.slp = 0; a.fear = 0; a.chill = 0; a.brn = 0;
        msg = `✨ ${DEX[a.sp].n} is back on its feet. (half HP)`;
      } else if (F.heal) {
        const before = a.hp;
        a.hp = Math.min(a.maxHp, a.hp + F.heal);
        msg = `🫐 ${DEX[a.sp].n} recovered ${a.hp - before} HP.`;
      } else if (F.cures) {
        F.cures.forEach((c) => { if (c === "psn") a.psn = false; else a[c] = 0; });
        msg = `${F.n.split(" ")[0]} ${DEX[a.sp].n} is feeling better.`;
      } else {
        a.pp = a.moves.map((k) => maxPP(MOVES[k]));
        msg = `🍯 ${DEX[a.sp].n} has its moves back.`;
      }
      return { ...prev, party,
        items: { ...prev.items, [key]: (prev.items[key] ?? 0) - 1 },
        dialog: { text: msg } };
    });
    SFX.heal?.();
  };

