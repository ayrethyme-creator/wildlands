/* A whole gym match, rather than one exchange.

   battle_sim.js answers "how long is a fight and does the engine hold up". This
   answers the question that actually matters before somebody starts a new game:
   CAN YOU BEAT THE FIRST GYM. A gym is four or five animals against your party,
   and a 1v1 average says nothing about whether you can get through that.

   It runs the real thing: your lead against theirs, the next one in when
   somebody faints, you lose when your whole party is down. No healing items and
   no switching for type advantage, which makes every number here the PESSIMISTIC
   answer - a real player has berries and can read a matchup.

   Load it from gallery.html, after battle_sim.js or on its own:

       var s = document.createElement('script');
       s.src = 'design/tools/gym_sim.js'; document.head.appendChild(s);
       await __gauntlet({ gymMap: 'town2', partyLevel: 14, partySize: 3, runs: 200 })

   gymMap is the town the leader stands in - town2 is the first gym. */
window.__gauntlet = async function gauntlet(o) {
  const opts = o || {};
  const G = window.__GYMS, mk = window.__MK, MOVES = window.__MOVES,
        DEX = window.__DEX, CHART = window.__CHART;
  if (!G || !mk) return 'open gallery.html first: it exports GYMS and mk';
  const eff = (at, dts) => dts.reduce((m, t) => m * ((CHART[at] || {})[t] ?? 1), 1);
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

  const src = await (await fetch('game.part4.jsx?b=' + Date.now(), { cache: 'no-cache' })).text();
  const dmgSrc = (() => {
    const a = src.indexOf('const dmgCalc = (att, dfn, mv) => {');
    return src.slice(a, src.indexOf('\n  };', a) + 4);
  })();
  const doSrc = (() => {
    const a = src.indexOf('const doAttack = (attIsMe, mv) => {');
    const b = src.indexOf('return dfn.hp <= 0;', a);
    return src.slice(a, src.indexOf('};', b) + 2);
  })();
  const aiSrc = (() => {
    const a = src.indexOf('const enemyMove = () => {');
    return src.slice(a, src.indexOf('\n    };', a) + 6);
  })();

  const gym = G[opts.gymMap || 'town2'];
  if (!gym) return 'no gym on map ' + (opts.gymMap || 'town2');
  const wanted = (opts.party || ['fennec_j', 'otter_j', 'pangolin_j']).filter((k) => DEX[k]);
  const fresh = (a) => Object.assign(a, {
    stg: { a: 0, d: 0, s: 0, acc: 0 },
    psn: false, brn: 0, slp: 0, fear: 0, chill: 0, para: false, guard: false,
  });

  const engine = (my, en) => {
    const env = {
      MOVES, DEX, eff, rnd,
      stageMul: (s) => (s >= 0 ? (2 + s) / 2 : 2 / (2 - s)),
      STAGE_CAP: 6, STAB: 1.5, CRIT_MULT: 1.5,
      critChance: (mv) => (mv && mv.crit ? 1 / 6 : 1 / 16),
      DMG_SCALE: (typeof window.__DMG_SCALE === 'number') ? window.__DMG_SCALE : 1,
      PARA_SKIP: 0.25, PARA_SPD: 0.5,
      // opts.dull drops the leader to ordinary-trainer AI: no guaranteed best
      // move, no opening setup. Used to tell "the gym is too strong" apart from
      // "the gym's brain is too strong", which are different fixes.
      b: { kind: 'trainer', gym: opts.dull ? null : gym, elite: false },
    };
    const pre = [
      'const SM = (s) => stageMul(s);',
      'const effSpd = (x) => x.spd * SM(x.stg?.s || 0) * (x.chill ? 0.5 : 1) * (x.para ? PARA_SPD : 1);',
      'const foeName = () => DEX[en.sp].n;',
      'const snapBusy = (t) => log.push(t);',
    ].join('\n');
    const f = new Function(...Object.keys(env), 'my', 'en', 'log',
      pre + '\n' + dmgSrc + '\n' + doSrc + '\n' + aiSrc + '\n'
      + 'return { doAttack, enemyMove, effSpd };');
    return f(...Object.values(env), my, en, []);
  };

  const runs = opts.runs || 200;
  let wins = 0, turnsTotal = 0, survivors = 0, foesFelled = 0;
  for (let r = 0; r < runs; r++) {
    const party = wanted.slice(0, opts.partySize || 3)
      .map((k) => fresh(mk(k, opts.partyLevel || 14)));
    const foes = gym.team().map((a) => fresh(a));
    let pi = 0, fi = 0, turns = 0;

    while (pi < party.length && fi < foes.length && turns < 500) {
      const my = party[pi], en = foes[fi];
      const E = engine(my, en);
      while (my.hp > 0 && en.hp > 0 && turns < 500) {
        turns++;
        const mine = my.moves
          .map((k, i) => ((my.pp && (my.pp[i] ?? 0) <= 0) ? null : MOVES[k]))
          .filter(Boolean);
        const mv = mine.filter((m) => m.p > 0)
          .sort((x, y) => eff(y.t, DEX[en.sp].t) * y.p - eff(x.t, DEX[en.sp].t) * x.p)[0]
          || mine[0] || { n: 'Flail', t: 'Wild', p: 30, acc: 100 };
        const eMv = E.enemyMove();
        const pIdx = my.moves.findIndex((k) => MOVES[k] === mv);
        if (pIdx >= 0 && my.pp) my.pp[pIdx] = Math.max(0, (my.pp[pIdx] ?? 0) - 1);
        const eIdx = en.moves.findIndex((k) => MOVES[k] === eMv);
        if (eIdx >= 0 && en.pp) en.pp[eIdx] = Math.max(0, (en.pp[eIdx] ?? 0) - 1);
        const meFirst = (mv.pri || 0) !== (eMv.pri || 0)
          ? (mv.pri || 0) > (eMv.pri || 0) : E.effSpd(my) >= E.effSpd(en);
        if (meFirst) { if (!E.doAttack(true, mv) && en.hp > 0) E.doAttack(false, eMv); }
        else { if (!E.doAttack(false, eMv) && my.hp > 0) E.doAttack(true, mv); }
        [en, my].forEach((x) => {
          if (x.hp > 0 && x.psn) x.hp = Math.max(0, x.hp - Math.max(1, Math.floor(x.maxHp / 8)));
          if (x.hp > 0 && x.brn) x.hp = Math.max(0, x.hp - Math.max(1, Math.floor(x.maxHp / 10)));
          if (x.chill > 0 && x.hp > 0) x.chill -= 1;
        });
      }
      if (my.hp <= 0) pi++; else fi++;
    }
    foesFelled += fi;
    turnsTotal += turns;
    if (fi >= foes.length) { wins++; survivors += party.filter((a) => a.hp > 0).length; }
  }

  const team = gym.team();
  return {
    leader: gym.leader, type: gym.type,
    gymTeam: team.map((a) => DEX[a.sp].n + ' L' + a.lvl),
    yourParty: wanted.slice(0, opts.partySize || 3).map((k) => DEX[k].n),
    partyLevel: opts.partyLevel || 14, runs,
    winRate: Math.round((wins / runs) * 100) + '%',
    avgFoesBeaten: +(foesFelled / runs).toFixed(2) + ' of ' + team.length,
    avgTurns: +(turnsTotal / runs).toFixed(1),
    avgSurvivorsWhenWinning: wins ? +(survivors / wins).toFixed(2) : 0,
  };
};
