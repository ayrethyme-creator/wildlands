/* Run whole battles through the game's OWN battle code.

   This exists because the browser I test in cannot reach a fight: real key
   events do not get through to the game's handler, so every claim about the
   move overhaul has so far been "the arithmetic is right" rather than "a battle
   plays". doAttack, dmgCalc and enemyMove are lifted out of part4 AS SOURCE and
   run against real animals built by the game's own mk(), with real MOVES, DEX
   and the real type chart. The only things stubbed are the things that draw:
   snapBusy collects log lines instead of animating them.

   What it is for:
     - does the engine survive thousands of turns without crashing, NaN-ing,
       or looping for ever
     - HOW LONG IS A FIGHT NOW. The overhaul added STAB, crits and a ±6 stage
       curve, and I flagged that fights looked about a third shorter without
       being able to check. This measures it.
     - do the status moves actually get used, and do they change anything

   HOW TO RUN IT. Serve the repo, open gallery.html, then in that page:

       var s = document.createElement('script');
       s.src = 'design/tools/battle_sim.js'; document.head.appendChild(s);
       // then
       await __sim({ battles: 400, lvl: 30 })

   It must be the GALLERY page, not index.html: the gallery exports mk, MOVES,
   DEX, CHART and DMG_SCALE onto window, and the fetches below resolve against
   the page rather than this file, so the repo root is where it expects to be.

   Options: { battles, lvl, scale, stab, noCrit, flatStages } - the last three
   model the engine as it was BEFORE the 2026-09-04 overhaul, which is how the
   before/after comparison in part85's header was measured. */
window.__sim = async function sim(opts) {
  const N = (opts && opts.battles) || 400;
  const LVL = (opts && opts.lvl) || 30;

  const src = await (await fetch('game.part4.jsx?b=' + Date.now(), { cache: 'no-cache' })).text();
  const cut = (startMark, endMark, after) => {
    const a = src.indexOf(startMark, after || 0);
    const b = src.indexOf(endMark, a);
    return src.slice(a, b + endMark.length);
  };
  const dmgSrc = cut('const dmgCalc = (att, dfn, mv) => {', '\n  };');
  const doSrc = (() => {
    const a = src.indexOf('const doAttack = (attIsMe, mv) => {');
    const b = src.indexOf('return dfn.hp <= 0;', a);
    return src.slice(a, src.indexOf('};', b) + 2);
  })();
  const aiSrc = (() => {
    const a = src.indexOf('const enemyMove = () => {');
    return src.slice(a, src.indexOf('\n    };', a) + 6);
  })();

  const mk = window.__MK, MOVES = window.__MOVES, DEX = window.__DEX, CHART = window.__CHART;
  const eff = (at, dts) => dts.reduce((m, t) => m * ((CHART[at] || {})[t] ?? 1), 1);
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

  const keys = Object.keys(DEX).filter((k) => DEX[k].l && DEX[k].l.length && !DEX[k].legend);
  const fresh = (a) => Object.assign(a, {
    stg: { a: 0, d: 0, s: 0, acc: 0 },
    psn: false, brn: 0, slp: 0, fear: 0, chill: 0, para: false, guard: false,
  });

  let crashes = 0, nan = 0, stalls = 0;
  const turns = [];
  const chosen = { attack: 0, status: 0 };
  const usedMove = {};
  let sample = null;

  for (let n = 0; n < N; n++) {
    const my = fresh(mk(keys[Math.floor(Math.random() * keys.length)], LVL));
    const en = fresh(mk(keys[Math.floor(Math.random() * keys.length)], LVL));
    const log = [];
    let over = false;
    const env = {
      MOVES, DEX, eff, rnd,
      stageMul: (opts && opts.flatStages)
        ? ((s) => 1 + 0.25 * Math.max(-2, Math.min(2, s || 0)))
        : ((s) => (s >= 0 ? (2 + s) / 2 : 2 / (2 - s))),
      STAGE_CAP: (opts && opts.cap) || 6,
      STAB: (opts && opts.stab !== undefined) ? opts.stab : 1.5,
      CRIT_MULT: (opts && opts.critMult !== undefined) ? opts.critMult : 1.5,
      critChance: (mv) => ((opts && opts.noCrit) ? 0 : (mv && mv.crit ? 1 / 6 : 1 / 16)),
      // Defaults to the game's OWN constant, so an unqualified run measures
      // what will actually ship rather than a hypothetical.
      DMG_SCALE: (opts && opts.scale !== undefined) ? opts.scale
        : (typeof window.__DMG_SCALE === 'number' ? window.__DMG_SCALE : 1),
      PARA_SKIP: 0.25, PARA_SPD: 0.5,
      b: { kind: 'trainer', gym: null, elite: false },
    };
    let doAttack, enemyMove, effSpdF;
    try {
      const factory = new Function(...Object.keys(env), 'my', 'en', 'log',
        'const SM = (s) => stageMul(s);\n'
        + 'const effSpd = (x) => x.spd * SM(x.stg?.s || 0) * (x.chill ? 0.5 : 1) * (x.para ? PARA_SPD : 1);\n'
        + 'const foeName = () => DEX[en.sp].n;\n'
        + 'const snapBusy = (t) => log.push(t);\n'
        + dmgSrc + '\n' + doSrc + '\n' + aiSrc + '\n'
        + 'return { doAttack, enemyMove, effSpd };');
      const built = factory(...Object.values(env), my, en, log);
      doAttack = built.doAttack; enemyMove = built.enemyMove; effSpdF = built.effSpd;
    } catch (e) { crashes++; continue; }

    let t = 0;
    try {
      for (; t < 200 && my.hp > 0 && en.hp > 0; t++) {
        // The player picks the way a person actually plays: mostly the best
        // attack, sometimes the status move, which is the behaviour the
        // overhaul is meant to make worth having.
        const mine = my.moves
          .map((k, i) => ((my.pp && (my.pp[i] ?? 0) <= 0) ? null : MOVES[k]))
          .filter(Boolean);
        if (!mine.length) { // out of everything: flail, as the real UI offers
          const flail = { n: 'Flail', t: 'Wild', p: 30, acc: 100 };
          doAttack(true, flail); if (en.hp <= 0) break; }
        const atks = mine.filter((m) => m.p > 0)
          .sort((x, y) => eff(y.t, DEX[en.sp].t) * y.p - eff(x.t, DEX[en.sp].t) * x.p);
        const stat = mine.filter((m) => m.p <= 0);
        const useStatus = stat.length && t === 0 && Math.random() < 0.5;
        const mv = useStatus ? stat[0] : (atks[0] || mine[0]);
        if (!mv) break;
        chosen[mv.p > 0 ? 'attack' : 'status']++;
        usedMove[mv.n] = (usedMove[mv.n] || 0) + 1;
        const eMv = enemyMove();
        // Spend PP on BOTH sides, the way part4's enemyActs and takeTurn do.
        // Without this the harness lets either animal repeat a move for ever,
        // which is what made three level-50 battles run to the 200-turn cap.
        const pi = my.moves.indexOf(my.moves.find((k) => MOVES[k] === mv));
        if (pi >= 0 && my.pp) my.pp[pi] = Math.max(0, (my.pp[pi] ?? 0) - 1);
        const ei = en.moves.findIndex((k) => MOVES[k] === eMv);
        if (ei >= 0 && en.pp) en.pp[ei] = Math.max(0, (en.pp[ei] ?? 0) - 1);
        const meFirst = (mv.pri || 0) !== (eMv.pri || 0)
          ? (mv.pri || 0) > (eMv.pri || 0) : effSpdF(my) >= effSpdF(en);
        if (meFirst) { if (!doAttack(true, mv) && en.hp > 0) doAttack(false, eMv); }
        else { if (!doAttack(false, eMv) && my.hp > 0) doAttack(true, mv); }
        // end of round, matching part4's own tick
        [[en, 'en'], [my, 'my']].forEach(([o]) => {
          if (o.hp > 0 && o.psn) o.hp = Math.max(0, o.hp - Math.max(1, Math.floor(o.maxHp / 8)));
          if (o.hp > 0 && o.brn) o.hp = Math.max(0, o.hp - Math.max(1, Math.floor(o.maxHp / 10)));
          if (o.chill > 0 && o.hp > 0) o.chill -= 1;
        });
        if (!Number.isFinite(my.hp) || !Number.isFinite(en.hp)) { nan++; break; }
        if (my.hp < 0 || en.hp < 0) { nan++; break; }
      }
    } catch (e) { crashes++; continue; }
    if (t >= 200) stalls++;
    turns.push(t);
    if (!sample && t > 3) sample = { a: DEX[my.sp].n, b: DEX[en.sp].n, turns: t, log: log.slice(0, 10) };
  }

  turns.sort((x, y) => x - y);
  const top = Object.entries(usedMove).sort((a, b) => b[1] - a[1]).slice(0, 8);
  return {
    battles: turns.length, level: LVL,
    crashes, nanOrNegativeHp: nan, neverEnded: stalls,
    turnsToKO: {
      median: turns[Math.floor(turns.length / 2)],
      mean: +(turns.reduce((s, v) => s + v, 0) / turns.length).toFixed(2),
      p10: turns[Math.floor(turns.length * 0.1)],
      p90: turns[Math.floor(turns.length * 0.9)],
      shortest: turns[0], longest: turns[turns.length - 1],
    },
    playerChoices: chosen,
    mostUsedMoves: top,
    sample,
  };
};
