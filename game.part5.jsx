  // ---------- UI PIECES ----------
  const Chip = ({ t, small }) => (
    <span style={{ background: TYPE_COLORS[t] || "#5c5344", color: "#fff", borderRadius: 4, padding: small ? "1px 5px" : "2px 7px", fontSize: small ? 9 : 11, fontWeight: 700, letterSpacing: 0.5, marginRight: 4 }}>{t.toUpperCase()}</span>
  );
  const HPBar = ({ hp, max }) => {
    const pct = Math.max(0, (hp / max) * 100);
    const col = pct > 50 ? "#2ecc71" : pct > 20 ? "#f1c40f" : "#e74c3c";
    return (
      <div style={{ background: "#33302a", borderRadius: 6, height: 10, overflow: "hidden", border: "1px solid #1e1c18" }}>
        <div style={{ width: pct + "%", background: col, height: "100%", transition: "width .5s" }} />
      </div>
    );
  };
  const KEYFRAMES = (
    <style>{`
      @keyframes bobY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
    `}</style>
  );

  const frame = {
    maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#231f1a",
    fontFamily: "'Courier New', ui-monospace, monospace", color: "#f2e8d5",
    display: "flex", flexDirection: "column",
  };
  const panel = { background: "#3a342b", border: "3px solid #5c5344", borderRadius: 12, padding: 12 };
  // Hold a direction to keep moving; release (or slide off) to stop.
  //
  // This deliberately does NOT use React's synthetic touch events: React
  // registers touchstart passively, so preventDefault() inside onTouchStart is
  // silently ignored, and on Chrome for Android that is what lets the long-press
  // text-selection UI appear. Native listeners registered with {passive:false}
  // are the only reliable way to suppress it.
  //
  // Preventing the default on touchstart also stops the browser synthesising
  // mouse events afterwards, so there is no double-firing between the two.
  const dpadRef = (dx, dy) => (el) => {
    if (!el || el.__wired) return;
    el.__wired = true;
    const start = (e) => { e.preventDefault(); e.stopPropagation(); holdStart(dx, dy); };
    const end = (e) => { if (e.cancelable) e.preventDefault(); holdEnd(); };
    el.addEventListener("touchstart", start, { passive: false });
    el.addEventListener("touchend", end, { passive: false });
    el.addEventListener("touchcancel", end, { passive: false });
    el.addEventListener("contextmenu", (e) => e.preventDefault());
    el.addEventListener("mousedown", start);
    el.addEventListener("mouseup", end);
    el.addEventListener("mouseleave", end);
  };

  // Arrows are drawn as SVG rather than written as ▲ ◀ ▶ ▼, because a text
  // glyph is selectable and an SVG path is not. No text node, nothing to select.
  const ARROW = { up: "M12 5 L20 18 L4 18 Z", down: "M12 19 L4 6 L20 6 Z",
                  left: "M5 12 L18 4 L18 20 Z", right: "M19 12 L6 20 L6 4 Z" };
  const tri = (dir) => (
    <svg width="20" height="20" viewBox="0 0 24 24" style={{ pointerEvents: "none", display: "block", margin: "0 auto" }}>
      <path d={ARROW[dir]} fill="#fff" />
    </svg>
  );

  const btn = (bg = "#5c8a3a") => ({
    background: bg, color: "#fff", border: "none", borderRadius: 10, padding: "12px 14px",
    fontFamily: "inherit", fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: "0 3px 0 rgba(0,0,0,.35)",
    touchAction: "none", userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none",
    WebkitTouchCallout: "none", WebkitTapHighlightColor: "transparent",
  });
  const btnS = (bg) => ({ ...btn(bg), padding: "8px 10px", fontSize: 12 });

  // ---------- TITLE ----------
  if (S.screen === "title") {
    return (
      <div style={{ ...frame, justifyContent: "center", alignItems: "center", textAlign: "center", padding: 20 }}>
        {KEYFRAMES}
        <div style={{ display: "flex", gap: 4, marginBottom: 4, filter: "brightness(0) opacity(.8)" }}>
          <Sprite sp="qilin" size={54} /><Sprite sp="thunderbird" size={54} /><Sprite sp="phoenix" size={54} />
        </div>
        <h1 style={{ fontSize: 34, margin: "6px 0 2px", letterSpacing: 3, color: "#e8c547" }}>WILDLANDS</h1>
        <div style={{ fontSize: 14, color: "#c9b88a", marginBottom: 2 }}>— Safari Saga —</div>
        <div style={{ fontSize: 11, color: "#8a7f68", marginBottom: 6 }}>Chapter V: Beyond the Summit</div>
        <p style={{ fontSize: 12, color: "#b8ab90", maxWidth: 320, lineHeight: 1.6 }}>
          Eight arenas across eight wild lands. The Elite Four at the Summit. Behind ancient seals, three guardians wait. And beyond the Summit — fossil canyons and myth-rifts, for Champions only.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14, alignItems: "center" }}>
          {hasSave && (
            <button style={{ ...btn("#27ae60"), fontSize: 18, padding: "14px 34px" }} onClick={continueGame}>▶ CONTINUE</button>
          )}
          <button style={{ ...btn("#c0392b"), fontSize: hasSave ? 13 : 18, padding: hasSave ? "10px 24px" : "14px 34px" }}
            onClick={() => setS((p) => ({ ...p, screen: "starter" }))}>{hasSave ? "NEW GAME" : "▶ START"}</button>
          {!hasSave && (
            <div style={{ fontSize: 10, color: "#8a7f68", display: "flex", alignItems: "center", gap: 8 }}>
              <span>
                {saveStatus === "checking" ? "Checking for saved game..."
                  : saveStatus === "none" ? "No saved game found in storage."
                  : saveStatus === "error" ? "⚠️ Save storage couldn't be read."
                  : ""}
              </span>
              {saveStatus !== "checking" && (
                <button style={{ background: "#3a342b", color: "#c9b88a", border: "1px solid #5c5344", borderRadius: 6, padding: "4px 8px", fontFamily: "inherit", fontSize: 10, cursor: "pointer" }}
                  onClick={checkSave}>🔄 Check again</button>
              )}
            </div>
          )}
        </div>
        <p style={{ fontSize: 10, color: "#7d735f", marginTop: 18 }}>Save with 💾 or at any Care Center. Some animals only appear at night. Old saves carry your team forward.</p>
      </div>
    );
  }

  // ---------- STARTER ----------
  if (S.screen === "starter") {
    const starters = ["fennec_j", "otter_j", "kestrel_j"];
    return (
      <div style={{ ...frame, padding: 16, justifyContent: "center" }}>
        {KEYFRAMES}
        <div style={{ ...panel, marginBottom: 12 }}>
          <b>⛺ Prof. Acacia:</b> "Welcome to the Wildlands — though I wish the timing were better. Every ranger raises their first companion from a youngster. Choose, and choose well. Eight arenas stand between you and the Summit."
        </div>
        {starters.map((sp) => {
          const d = DEX[sp];
          const adult = DEX[d.grows.to];
          return (
            <button key={sp} style={{ ...panel, display: "flex", alignItems: "center", gap: 12, marginBottom: 10, cursor: "pointer", width: "100%", textAlign: "left", fontFamily: "inherit", color: "#f2e8d5" }}
              onClick={() => setS((p) => ({
                ...p, party: [mk(sp, 5)], rival: COUNTER[sp],
                dex: { ...p.dex, [sp]: 2 }, visited: { ...p.visited, town1: true },
                screen: "world",
                dialog: { text: `⛺ Prof. Acacia: "A fine choice — ${d.n} suits you. Bump into my tent before you leave; the Wildlands are unwell, and you should hear the whole story. The Acacia Trail is north. Oh — and Zuri's around town somewhere, probably itching to test you."` },
              }))}>
              <Sprite sp={sp} size={52} />
              <span>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{d.n} <span style={{ color: "#c9b88a", fontSize: 12 }}>Lv 5</span></div>
                <div style={{ margin: "4px 0" }}>{d.t.map((t) => <Chip key={t} t={t} />)}</div>
                <div style={{ fontSize: 10, color: "#c9b88a" }}>Grows into {adult.n} at Lv {d.grows.at}</div>
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  // ---------- BATTLE ----------
  if (S.battle) {
    const b = S.battle;
    const my = S.party[0];
    const en = b.enemy;
    const busy = b.phase === "busy";
    const foeLabel = b.kind === "wild" ? "Wild " : b.kind === "legend" ? "Guardian " : "";
    const arenaBg = b.kind === "legend" ? "linear-gradient(#4a3f6b,#8a7a5c)" : (ARENA[MAPS[S.map].zone] || ARENA.savanna);
    return (
      <div style={{ ...frame, padding: 10 }}>
        {KEYFRAMES}
        <div style={{ background: arenaBg, borderRadius: 14, border: "3px solid #5c5344", padding: 12, position: "relative", minHeight: 230 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ ...panel, padding: 8, width: "58%" }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{foeLabel}{DEX[en.sp].n}{en.sex ? <span style={{ color: en.sex === "M" ? "#5dade2" : "#e88ab5" }}> {en.sex === "M" ? "♂" : "♀"}</span> : null}{b.kind === "wild" && S.dex[en.sp] === 2 ? <span title="You've already befriended one of these"> 🍖</span> : null} <span style={{ color: "#c9b88a" }}>Lv {en.lvl}</span>{en.psn ? " ☠️" : ""}{en.slp ? " 💤" : ""}{en.fear ? " 😨" : ""}{en.chill ? " 🧊" : ""}</div>
              <div style={{ margin: "3px 0" }}>{DEX[en.sp].t.map((t) => <Chip key={t} t={t} small />)}</div>
              <HPBar hp={en.hp} max={en.maxHp} />
            </div>
            <Sprite sp={en.sp} size={b.kind === "legend" ? 96 : 86} anim="floatY" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 14 }}>
            <Sprite sp={my.sp} size={86} flip anim="bobY" />
            <div style={{ ...panel, padding: 8, width: "58%" }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{DEX[my.sp].n} <span style={{ color: "#c9b88a" }}>Lv {my.lvl}</span>{my.psn ? " ☠️" : ""}{my.slp ? " 💤" : ""}{my.fear ? " 😨" : ""}{my.chill ? " 🧊" : ""}</div>
              <div style={{ margin: "3px 0" }}>{DEX[my.sp].t.map((t) => <Chip key={t} t={t} small />)}</div>
              <HPBar hp={my.hp} max={my.maxHp} />
              <div style={{ fontSize: 10, color: "#c9b88a", marginTop: 2 }}>{my.hp}/{my.maxHp} HP · XP {my.xp}/{xpNeed(my.lvl)}</div>
            </div>
          </div>
        </div>

        <div style={{ ...panel, marginTop: 10, minHeight: 74, fontSize: 12, lineHeight: 1.5 }}>
          {b.log.map((l, i) => <div key={i} style={{ opacity: i === b.log.length - 1 ? 1 : 0.55 }}>{l}</div>)}
        </div>

        <div style={{ marginTop: 10 }}>
          {b.phase === "switch" ? (
            <div>
              <div style={{ fontSize: 13, marginBottom: 6 }}>Choose your next animal:</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {S.party.map((a, i) => i !== 0 && a.hp > 0 ? (
                  <button key={a.uid} style={btn("#2471a3")} onClick={() => forcedSwitch(i)}>
                    {DEX[a.sp].n} Lv {a.lvl}
                  </button>
                ) : null)}
              </div>
            </div>
          ) : b.mode === "moves" ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {my.moves.every((k, i) => (my.pp?.[i] ?? 0) <= 0) && (
                <button disabled={busy} style={{ ...btn("#27ae60"), opacity: busy ? 0.5 : 1, gridColumn: "1 / -1" }}
                  onClick={() => takeTurn({ kind: "flail" })}>
                  Flail<div style={{ fontSize: 10, fontWeight: 400 }}>Out of PP! Wild · PWR 30</div>
                </button>
              )}
              {my.moves.map((mk2, i) => {
                const mv = MOVES[mk2];
                const out = (my.pp?.[i] ?? 0) <= 0;
                return (
                  <button key={mk2} disabled={busy || out} style={{ ...btn(TYPE_COLORS[mv.t]), opacity: busy || out ? 0.45 : 1 }}
                    onClick={() => takeTurn({ kind: "move", i })}>
                    {mv.n}<div style={{ fontSize: 10, fontWeight: 400 }}>{mv.t} · {mv.p > 0 ? `PWR ${mv.p}` : "STATUS"}{mv.pri ? " · FIRST" : ""} · PP {my.pp?.[i] ?? 0}/{maxPP(mv)}</div>
                  </button>
                );
              })}
              <button disabled={busy} style={{ ...btn("#7d735f"), opacity: busy ? 0.5 : 1 }}
                onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "main" } }))}>← Back</button>
            </div>
          ) : b.mode === "bag" ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <button disabled={busy || S.items.berries <= 0} style={{ ...btn("#8e44ad"), opacity: busy || S.items.berries <= 0 ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "berry" })}>🫐 Berry Snack ({S.items.berries})<div style={{ fontSize: 10, fontWeight: 400 }}>+30 HP</div></button>
              <button disabled={busy || (S.items.bigberries ?? 0) <= 0} style={{ ...btn("#6c3483"), opacity: busy || (S.items.bigberries ?? 0) <= 0 ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "bigberry" })}>🍇 Big Berry ({S.items.bigberries ?? 0})<div style={{ fontSize: 10, fontWeight: 400 }}>+70 HP</div></button>
              <button disabled={busy || (S.items.goldberries ?? 0) <= 0} style={{ ...btn("#b7950b"), opacity: busy || (S.items.goldberries ?? 0) <= 0 ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "goldberry" })}>🍯 Golden Berry ({S.items.goldberries ?? 0})<div style={{ fontSize: 10, fontWeight: 400 }}>+150 HP</div></button>
              <button disabled={busy || (S.items.balms ?? 0) <= 0} style={{ ...btn("#2e8b57"), opacity: busy || (S.items.balms ?? 0) <= 0 ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "balm" })}>🌿 Soothe Balm ({S.items.balms ?? 0})<div style={{ fontSize: 10, fontWeight: 400 }}>Cures ☠️💤😨🧊</div></button>
              <button disabled={busy || (S.items.honeycombs ?? 0) <= 0} style={{ ...btn("#d4880b"), opacity: busy || (S.items.honeycombs ?? 0) <= 0 ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "honeycomb" })}>🍯 Honeycomb ({S.items.honeycombs ?? 0})<div style={{ fontSize: 10, fontWeight: 400 }}>Restores all PP</div></button>
              <button disabled={busy || (S.items.revives ?? 0) <= 0 || !S.party.some((a, i) => i !== 0 && a.hp <= 0)} style={{ ...btn("#c9457a"), opacity: busy || (S.items.revives ?? 0) <= 0 || !S.party.some((a, i) => i !== 0 && a.hp <= 0) ? 0.45 : 1 }}
                onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "reviveAsk" } }))}>✨ Revive ({S.items.revives ?? 0})<div style={{ fontSize: 10, fontWeight: 400 }}>Choose who wakes</div></button>
              <button disabled={busy} style={{ ...btn("#7d735f"), opacity: busy ? 0.5 : 1, gridColumn: "1 / -1" }}
                onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "main" } }))}>← Back</button>
            </div>
          ) : b.mode === "reviveAsk" ? (
            <div>
              <div style={{ fontSize: 12, marginBottom: 6 }}>✨ Revive which friend? <span style={{ color: "#c9b88a" }}>(returns at ½ HP)</span></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {S.party.map((a, i) => (a.hp > 0 || i === 0) ? null : (
                  <button key={a.uid} disabled={busy} style={{ ...btn("#c9457a"), opacity: busy ? 0.5 : 1 }}
                    onClick={() => takeTurn({ kind: "revive", idx: i })}>
                    {DEX[a.sp].n} Lv {a.lvl}<div style={{ fontSize: 10, fontWeight: 400 }}>→ {Math.floor(a.maxHp / 2)} HP</div>
                  </button>
                ))}
                <button disabled={busy} style={{ ...btn("#7d735f"), gridColumn: "1 / -1" }}
                  onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "bag" } }))}>← Back</button>
              </div>
            </div>
          ) : b.mode === "switchAsk" ? (
            <div>
              <div style={{ fontSize: 12, marginBottom: 6 }}>
                {b.trainerName} sent out <b>{DEX[b.enemy.sp].n}</b> (Lv {b.enemy.lvl} · {DEX[b.enemy.sp].t.join("/")}). Switch first? <span style={{ color: "#8fd94a" }}>This one's free.</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {S.party.map((a, i) => (
                  <button key={a.uid} disabled={busy || i === 0 || a.hp <= 0}
                    style={{ ...btn("#2471a3"), opacity: busy || i === 0 || a.hp <= 0 ? 0.45 : 1 }}
                    onClick={() => takeTurn({ kind: "freeSwitch", idx: i })}>
                    {DEX[a.sp].n} Lv {a.lvl} · {a.hp}/{a.maxHp}
                  </button>
                ))}
                <button disabled={busy} style={{ ...btn("#7d735f"), gridColumn: "1 / -1" }}
                  onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "main" } }))}>
                  Stay with {DEX[S.party[0].sp].n} →
                </button>
              </div>
            </div>
          ) : b.mode === "party" ? (
            <div>
              <div style={{ fontSize: 12, marginBottom: 6 }}>Switch in (uses your turn):</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {S.party.map((a, i) => (
                  <button key={a.uid} disabled={busy || i === 0 || a.hp <= 0}
                    style={{ ...btn("#2471a3"), opacity: busy || i === 0 || a.hp <= 0 ? 0.45 : 1 }}
                    onClick={() => takeTurn({ kind: "switch", idx: i })}>
                    {DEX[a.sp].n} Lv {a.lvl} · {a.hp}/{a.maxHp}
                  </button>
                ))}
                <button disabled={busy} style={btn("#7d735f")} onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "main" } }))}>← Back</button>
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <button disabled={busy} style={{ ...btn("#c0392b"), opacity: busy ? 0.5 : 1, gridColumn: "1 / -1", fontSize: 16 }} onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "moves", confirmRun: false } }))}>⚔️ Fight</button>
              <button disabled={busy} style={{ ...btn("#b7950b"), opacity: busy ? 0.5 : 1 }} onClick={() => takeTurn({ kind: "treat" })}>🍖 Befriend ({S.items.treats})</button>
              <button disabled={busy} style={{ ...btn("#8e44ad"), opacity: busy ? 0.5 : 1 }} onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "bag", confirmRun: false } }))}>🎒 Items</button>
              <button disabled={busy} style={{ ...btn("#2471a3"), opacity: busy ? 0.5 : 1 }} onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "party", confirmRun: false } }))}>👥 Team</button>
              <button disabled={busy}
                style={{ ...btn(b.confirmRun ? "#e67e22" : "#7d735f"), opacity: busy ? 0.5 : 1 }}
                onClick={() => b.confirmRun ? takeTurn({ kind: "run" }) : setS((p) => ({ ...p, battle: { ...p.battle, confirmRun: true } }))}>
                {b.confirmRun ? "🏃 Tap to confirm!" : "🏃 Run"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ---------- WORLD ----------
  const m = MAPS[S.map];
  const pal = PALS[m.zone] || PALS.savanna;
  // how many species live here, and how many have you befriended?
  const areaDex = (() => {
    const here = new Set();
    ["pool", "poolN", "poolWater"].forEach((p) => (m[p] || []).forEach(([sp, w]) => { if (w > 0 && DEX[sp]) here.add(sp); }));
    if (m.legend) here.add(m.legend);
    if (!here.size) return null;
    return { tot: here.size, got: [...here].filter((sp) => S.dex[sp] === 2).length };
  })();
  const W = m.rows[0].length;
  const o = objsFor(S, S.map);
  const night = isNight();
  const phase = (typeof dayPhase === "function") ? dayPhase() : (night ? "night" : "day");
  const lit = phase === "night" || phase === "dusk" || phase === "dawn";
  const dark = m.dark && !(S.items.lantern > 0);
  const learner = S.party.find((a) => a.pending?.length);

  return (
    <div style={frame}>
      {KEYFRAMES}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px" }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: "#e8c547" }}>📍 {m.name} {phase === "night" ? "🌙" : phase === "dusk" ? "🌆" : phase === "dawn" ? "🌅" : "☀️"}</div>
        <div style={{ fontSize: 12 }}>{areaDex ? <span style={{ color: areaDex.got === areaDex.tot ? "#8fd94a" : "#e8c547", marginRight: 6 }} title="Species living in this area that you have befriended">🐾{areaDex.got}/{areaDex.tot}</span> : null}🏅{S.badges}/{GYM_COUNT} ₡{S.items.coins ?? 0} 🍖{S.items.treats} 🫐{S.items.berries + (S.items.bigberries ?? 0) + (S.items.goldberries ?? 0)} ✨{S.items.revives ?? 0}{S.items.lantern ? " 🏮" : ""}</div>
      </div>

      <div style={{ padding: "0 10px" }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${W}, 1fr)`, border: "3px solid #5c5344", borderRadius: 10, overflow: "hidden", filter: m.dark ? undefined : (phase === "night" ? (typeof NIGHT_FILTER !== "undefined" ? NIGHT_FILTER : "brightness(.52) saturate(.7) hue-rotate(205deg)") : phase === "dusk" || phase === "dawn" ? (typeof DUSK_FILTER !== "undefined" ? DUSK_FILTER : "brightness(.72) saturate(.85) hue-rotate(210deg)") : undefined), transition: "filter 1.2s ease" }}>
          {m.rows.map((row, y) => row.split("").map((ch, x) => {
            let ch2 = ch;
            const idKey = `${S.map}:${x},${y}`;
            if (ch === "X" && S.badges >= (GYMS[S.map]?.id ?? GYM_COUNT)) ch2 = ".";
            if ((ch === "R" || ch === "V") && S.trainersBeaten[idKey]) ch2 = ".";
            if (ch === "D" && o.solved) ch2 = ".";
            const t = TILE_STYLE(ch2, pal);
            let em = t.em, bg = t.bg;
            if (ch2 === "R" || ch2 === "V") { const tr = TRAINERS[idKey]; if (tr && tr.em) em = tr.em; }
            if (ch2 === "X") { const g = GYMS[S.map]; if (g && g.em) em = g.em; }
            if (ch2 === "t") {
              const ti = (m.torches || []).findIndex((tt) => tt.x === x && tt.y === y);
              em = o.lit.includes(ti) || o.solved ? "🔥" : "🪔";
            }
            if (o.boulders.some((bb) => bb.x === x && bb.y === y)) em = "🪨";
            let glow = false;
            if (ch2 === "¦") { em = lit ? "🏮" : "🔦"; glow = lit; }         // town lamp post
            else if (ch2 === "¡") { em = lit ? "🏮" : "🪵"; glow = lit; }    // wild lantern
            const isPlayer = x === S.x && y === S.y;
            if (dark && !isPlayer && Math.hypot(x - S.x, y - S.y) > 2.4) { bg = "#0a0a12"; em = ""; }
            return (
              <div key={x + "," + y} style={{ background: glow ? "radial-gradient(circle, #6b5a2e 0%, " + bg + " 78%)" : bg, aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: `min(${(67 / W).toFixed(2)}vw, 17px)`, lineHeight: 1, color: ch2 === "G" ? "rgba(0,0,0,.35)" : undefined, boxShadow: glow ? "0 0 8px 2px rgba(255,196,92,.45)" : undefined, position: glow ? "relative" : undefined, zIndex: glow ? 2 : undefined }}>
                {isPlayer ? (S.swimming ? "🏊" : "🚶") : em}
              </div>
            );
          }))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 6, padding: "8px 12px", overflowX: "auto" }}>
        {S.party.map((a, i) => (
          <div key={a.uid} style={{ ...panel, padding: "3px 8px", fontSize: 11, borderColor: i === 0 ? "#e8c547" : "#5c5344", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5 }}>
            <Sprite sp={a.sp} size={22} />
            Lv{a.lvl} <span style={{ color: a.hp / a.maxHp > 0.5 ? "#2ecc71" : a.hp > 0 ? "#f1c40f" : "#e74c3c" }}>{a.hp}/{a.maxHp}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 16px 18px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 52px)", gridTemplateRows: "repeat(3, 52px)", gap: 4 }}>
          <div />
          <button style={btn("#5c5344")} ref={dpadRef(0, -1)}>{tri("up")}</button>
          <div />
          <button style={btn("#5c5344")} ref={dpadRef(-1, 0)}>{tri("left")}</button>
          <div style={{ background: "#3a342b", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
            {S.run ? "🏃" : "🚶"}
          </div>
          <button style={btn("#5c5344")} ref={dpadRef(1, 0)}>{tri("right")}</button>
          <div />
          <button style={btn("#5c5344")} ref={dpadRef(0, 1)}>{tri("down")}</button>
          <div />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          <button style={btnS("#2471a3")} onClick={() => setS((p) => ({ ...p, menu: "party" }))}>👥 Team</button>
          <button style={btnS("#27ae60")} onClick={() => setS((p) => ({ ...p, menu: "guide" }))}>📖 Guide</button>
          <button style={btnS("#5dade2")} onClick={() => {
            const st = SR.current;
            if (!canSoar(st)) say("🪽 To soar between towns you need Badge 3 and an Aerial teammate in your party.");
            else setS((p) => ({ ...p, menu: "soar" }));
          }}>🪽 Soar</button>
          <button style={btnS("#b7950b")} onClick={() => saveGame(false)}>💾 Save</button>
          <button style={btnS("#8e44ad")} onClick={() => setS((p) => ({ ...p, menu: "types" }))}>⚖️ Types</button>
          <button style={btnS("#7d735f")} onClick={() => setS((p) => ({ ...p, sound: !p.sound }))}>{S.sound ? "🔊 On" : "🔇 Off"}</button>
          <button style={btnS(S.run ? "#c0651a" : "#7d735f")} onClick={() => setS((p) => ({ ...p, run: !p.run }))}>{S.run ? "🏃 Run" : "🚶 Walk"}</button>
        </div>
      </div>

      {S.dialog && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.55)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 10 }}
          onClick={() => !S.dialog.options && setS((p) => ({ ...p, dialog: null }))}>
          <div style={{ ...panel, margin: 14, maxWidth: 400, width: "100%", fontSize: 13, lineHeight: 1.6 }} onClick={(e) => e.stopPropagation()}>
            {S.dialog.text}
            <div style={{ display: "flex", gap: 8, marginTop: 10, justifyContent: "flex-end" }}>
              {S.dialog.options
                ? S.dialog.options.map((op) => <button key={op.label} style={btn(op.label.includes("!") ? "#c0392b" : "#7d735f")} onClick={op.act}>{op.label}</button>)
                : <button style={btn("#7d735f")} onClick={() => setS((p) => ({ ...p, dialog: null }))}>OK</button>}
            </div>
          </div>
        </div>
      )}

      {S.menu && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.65)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
          <div style={{ ...panel, margin: 14, maxWidth: 400, width: "100%", maxHeight: "80vh", overflowY: "auto" }}>
            {S.menu === "party" && (
              <div>
                <b>Your Team</b> <span style={{ fontSize: 11, color: "#c9b88a" }}>{S.pick != null ? "— tap a team member to swap them out" : "(tap to make lead)"}</span>
                {S.party.map((a, i) => (
                  <div key={a.uid} onClick={() => setS((p) => {
                    if (p.pick != null && p.box[p.pick]) {
                      const party = [...p.party]; const box = [...p.box];
                      const incoming = box[p.pick];
                      box[p.pick] = party[i]; party[i] = incoming;
                      return { ...p, party, box, pick: null };
                    }
                    const party = [...p.party]; const t = party[i]; party[i] = party[0]; party[0] = t;
                    return { ...p, party };
                  })}
                    style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 6px", borderBottom: "1px solid #5c5344", cursor: "pointer", background: i === 0 ? "rgba(232,197,71,.12)" : "none" }}>
                    <Sprite sp={a.sp} size={40} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700 }}>{DEX[a.sp].n} <span style={{ color: "#c9b88a" }}>Lv {a.lvl}</span> {i === 0 ? "⭐" : ""}</div>
                      <div style={{ margin: "3px 0" }}>{DEX[a.sp].t.map((t) => <Chip key={t} t={t} small />)}</div>
                      <HPBar hp={a.hp} max={a.maxHp} />
                      <div style={{ fontSize: 10, color: "#c9b88a" }}>{a.hp}/{a.maxHp} HP · ATK {a.atk} DEF {a.def} SPD {a.spd}{DEX[a.sp].grows ? ` · grows up at Lv ${DEX[a.sp].grows.at}` : ""}</div>
                      <div style={{ fontSize: 10, color: "#a89a7d" }}>{a.moves.map((k) => MOVES[k].n).join(" · ")}</div>
                    </div>
                  </div>
                ))}
                {S.box.length > 0 && (
                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontSize: 11, color: "#c9b88a", marginBottom: 4 }}>
                      🏞️ Sanctuary — tap an animal to {S.party.length < 6 ? "add it to your team" : "swap it onto your team"}:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {S.box.map((a, bi) => (
                        <div key={a.uid} onClick={() => setS((p) => {
                          const animal = p.box[bi];
                          if (!animal) return p;
                          if (p.party.length < 6) {
                            const box = [...p.box]; box.splice(bi, 1);
                            return { ...p, box, party: [...p.party, animal], pick: null };
                          }
                          return { ...p, pick: bi };
                        })}
                          style={{ ...panel, padding: "4px 8px", fontSize: 11, display: "flex", alignItems: "center", gap: 5, cursor: "pointer", borderColor: S.pick === bi ? "#e8c547" : "#5c5344" }}>
                          <Sprite sp={a.sp} size={22} />
                          {DEX[a.sp].n} Lv{a.lvl}
                        </div>
                      ))}
                    </div>
                    {S.pick != null && (
                      <button style={{ ...btn("#7d735f"), marginTop: 8, fontSize: 12, padding: "6px 10px" }}
                        onClick={() => setS((p) => ({ ...p, pick: null }))}>Cancel swap</button>
                    )}
                  </div>
                )}
              </div>
            )}
            {S.menu === "guide" && (
              <div>
                <b>📖 Field Guide</b>
                <div style={{ fontSize: 11, color: "#c9b88a", marginBottom: 8 }}>
                  Seen {Object.values(S.dex).filter((v) => v >= 1).length} · Befriended {Object.values(S.dex).filter((v) => v === 2).length} of {Object.keys(DEX).length}
                </div>
                {S.guideSel && (() => {
                  const sp = S.guideSel, d = DEX[sp], nfo = INFO[sp], seen = S.dex[sp] || 0;
                  const spots = (WHERE[sp] || []).filter((w) => !w.k.startsWith("shrine_"));
                  const zones = [...new Set(spots.map((w) => ZONE_NAME[w.z] || w.z))];
                  const st = nfo?.s || (d.mem ? (String(d.org).startsWith("†") ? "EX" : String(d.org).startsWith("EW") ? "EW" : "CR") : d.dom || d.breed ? "DOM" : null);
                  const iu = st && IUCN[st];
                  return (
                    <div onClick={() => setS((p) => ({ ...p, guideSel: null }))}
                      style={{ position: "fixed", inset: 0, background: "rgba(12,10,8,.88)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: 12 }}>
                      <div onClick={(e) => e.stopPropagation()} style={{ background: "#241f19", border: "2px solid #5c5344", borderRadius: 14, padding: 14, maxWidth: 430, width: "100%", maxHeight: "88vh", overflowY: "auto" }}>
                        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                          <div style={{ background: "#2e2921", borderRadius: 10, padding: 4 }}><Sprite sp={sp} size={72} /></div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 17, fontWeight: 700, color: "#f2ede0" }}>{d.n}</div>
                            <div style={{ margin: "4px 0" }}>{d.t.map((t) => <Chip key={t} t={t} small />)}</div>
                            {iu && <div style={{ display: "inline-block", fontSize: 10, fontWeight: 700, color: "#1a1713", background: iu[1], borderRadius: 4, padding: "1px 6px" }}>{st} · {iu[0]}</div>}
                          </div>
                        </div>
                        {nfo ? (
                          <div style={{ marginTop: 10, fontSize: 12, lineHeight: 1.5, color: "#d9cfc0" }}>
                            <div style={{ marginBottom: 6 }}><b style={{ color: "#e8c547" }}>Eats </b>{nfo.d}</div>
                            <div style={{ marginBottom: 6 }}><b style={{ color: "#e8c547" }}>Lives </b>{nfo.h}</div>
                            <div style={{ background: "#2e2921", borderLeft: "3px solid #8fb35c", borderRadius: 4, padding: "6px 8px", marginTop: 8, fontStyle: "italic" }}>{nfo.f}</div>
                            {nfo.lost && <div style={{ marginTop: 10 }}><b style={{ color: "#c98a5c" }}>🕯️ Lost </b>{nfo.lost}</div>}
                            {nfo.cause && <div style={{ marginTop: 6 }}><b style={{ color: "#c98a5c" }}>Root cause </b>{nfo.cause}</div>}
                            {nfo.better && <div style={{ marginTop: 6, color: "#c9b88a" }}><b style={{ color: "#e8c547" }}>What we could have done </b>{nfo.better}</div>}
                            {nfo.back && <div style={{ marginTop: 10, background: "#1e2a1c", borderLeft: "3px solid #4c9a3c", borderRadius: 4, padding: "6px 8px" }}><b style={{ color: "#8fe85c" }}>🧬 Bringing it back </b>{nfo.back}</div>}
                          </div>
                        ) : (
                          <div style={{ marginTop: 10, fontSize: 11.5, color: "#8a7f68", lineHeight: 1.5, background: "#2e2921", borderRadius: 6, padding: 8 }}>
                            📓 Field notes for this one haven't been written yet — and I'd rather leave the page blank than make something up. What's below is measured from the world itself, so it's true.
                          </div>
                        )}
                        {d.legend && LORE[sp] && <div style={{ marginTop: 8, fontSize: 11.5, color: "#c9b88a", lineHeight: 1.5 }}>{LORE[sp]}</div>}
                        <div style={{ marginTop: 12, fontSize: 11, fontWeight: 700, color: "#e8c547" }}>🗺️ WHERE TO FIND IT</div>
                        {spots.length ? (
                          <>
                            <div style={{ margin: "5px 0 6px" }}>{zones.map((z) => (
                              <span key={z} style={{ display: "inline-block", fontSize: 10, background: "#3c4c34", color: "#c9e8a8", borderRadius: 4, padding: "2px 6px", margin: "0 4px 4px 0" }}>{z}</span>
                            ))}</div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                              {spots.map((w) => (
                                <div key={w.k} style={{ fontSize: 10, background: S.map === w.k ? "#4c6b3c" : "#2e2921", color: S.map === w.k ? "#f2ede0" : "#c9b88a", borderRadius: 4, padding: "3px 6px" }}>
                                  {S.map === w.k ? "📍 " : ""}{w.n}{w.lvl ? <span style={{ color: "#8a7f68" }}> · Lv{w.lvl[0]}–{w.lvl[1]}</span> : null}
                                </div>
                              ))}
                            </div>
                          </>
                        ) : <div style={{ fontSize: 11, color: "#8a7f68", marginTop: 4 }}>Not found in the wild — this one is given, bred, or hatched.</div>}
                        {seen === 1 && <div style={{ marginTop: 10, fontSize: 11, color: "#e8853a" }}>You've seen this animal but haven't befriended one yet.</div>}
                        <button style={{ ...btn("#7d735f"), width: "100%", marginTop: 12 }} onClick={() => setS((p) => ({ ...p, guideSel: null }))}>Close</button>
                      </div>
                    </div>
                  );
                })()}
                {[["🌍 Wildlands", (sp) => !DEX[sp].t.includes("Fossil") && !DEX[sp].t.includes("Mythic") && !DEX[sp].mem], ["🦴 Fossils", (sp) => DEX[sp].t.includes("Fossil")], ["🌀 Myths", (sp) => DEX[sp].t.includes("Mythic")], ["🕯️ The Vigil", (sp) => DEX[sp].mem]].map(([label, fits]) => {
                  const keys = Object.keys(DEX).filter(fits);
                  if (!keys.length) return null;
                  return (
                    <div key={label} style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#e8c547", margin: "6px 0 4px" }}>
                        {label} <span style={{ color: "#c9b88a", fontWeight: 400 }}>· seen {keys.filter((sp) => (S.dex[sp] || 0) >= 1).length} · ★ {keys.filter((sp) => S.dex[sp] === 2).length} / {keys.length}</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
                        {keys.map((sp) => {
                          const v = S.dex[sp] || 0;
                          return (
                            <div key={sp} onClick={() => v > 0 && setS((p) => ({ ...p, guideSel: sp }))}
                              style={{ background: "#2e2921", borderRadius: 8, padding: "6px 2px", textAlign: "center", cursor: v > 0 ? "pointer" : "default", border: `1px solid ${DEX[sp].legend && v > 0 ? "#e8c547" : v === 2 ? TYPE_COLORS[DEX[sp].t[0]] : "#4a4438"}` }}>
                              {v === 0
                                ? <div style={{ fontSize: 22, height: 38, display: "flex", alignItems: "center", justifyContent: "center", color: "#5c5344" }}>?</div>
                                : <div style={{ filter: v === 1 ? "grayscale(1) brightness(.8)" : "none", display: "flex", justifyContent: "center" }}><Sprite sp={sp} size={38} /></div>}
                              <div style={{ fontSize: 8.5, color: v === 0 ? "#5c5344" : "#c9b88a", marginTop: 2 }}>
                                {v === 0 ? "???" : DEX[sp].n}{v === 2 ? " ★" : ""}
                              </div>
                              {v > 0 && DEX[sp].org && <div style={{ fontSize: 7, color: "#8a7f68" }}>{DEX[sp].org}</div>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {S.menu === "soar" && (
              <div>
                <b>🪽 Soar</b>
                <div style={{ fontSize: 11, color: "#c9b88a", marginBottom: 8 }}>Your Aerial companion can carry you to any town you've visited.</div>
                {TOWN_LIST.filter(([k]) => S.visited[k]).map(([k, nm]) => (
                  <button key={k} disabled={k === S.map}
                    style={{ ...btn("#5dade2"), width: "100%", marginBottom: 8, opacity: k === S.map ? 0.45 : 1 }}
                    onClick={() => { SFX.run(); setS((p) => ({ ...p, map: k, x: 7, y: 8, swimming: false, menu: null })); }}>
                    {nm}{k === S.map ? " (here)" : ""}
                  </button>
                ))}
              </div>
            )}
            {S.menu === "shop" && (
              <div>
                <b>🛒 Trading Post</b> <span style={{ fontSize: 11, color: "#c9b88a" }}>— you have ₡{S.items.coins ?? 0}</span>
                {[
                  { key: "treats", n: "🍖 Trail Treat", price: 25, desc: "Befriend wild animals" },
                  { key: "berries", n: "🫐 Berry Snack", price: 15, desc: "+30 HP in battle" },
                  { key: "bigberries", n: "🍇 Big Berry", price: 40, desc: "+70 HP in battle" },
                  { key: "goldberries", n: "🍯 Golden Berry", price: 90, desc: "+150 HP in battle" },
                  { key: "balms", n: "🌿 Soothe Balm", price: 50, desc: "Cures poison, sleep, fear and chill" },
                  { key: "honeycombs", n: "🍯 Honeycomb", price: 70, desc: "Restores all PP of your active friend" },
                  { key: "revives", n: "✨ Revive", price: 200, desc: "Wakes a fainted bench friend at half HP" },
                  ...(S.items.lantern ? [] : [{ key: "lantern", n: "🏮 Lantern", price: 150, desc: "Lights dark caves — permanent" }]),
                ].map((it) => (
                  <div key={it.key} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 4px", borderBottom: "1px solid #5c5344", fontSize: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700 }}>{it.n} <span style={{ color: "#c9b88a" }}>(own {S.items[it.key] ?? 0})</span></div>
                      <div style={{ fontSize: 10, color: "#c9b88a" }}>{it.desc}</div>
                    </div>
                    <button
                      disabled={(S.items.coins ?? 0) < it.price}
                      style={{ ...btn("#5c8a3a"), padding: "8px 12px", fontSize: 12, opacity: (S.items.coins ?? 0) < it.price ? 0.45 : 1 }}
                      onClick={() => { SFX.buy(); setS((p) => ({ ...p, items: { ...p.items, coins: (p.items.coins ?? 0) - it.price, [it.key]: (p.items[it.key] ?? 0) + 1 } })); }}>
                      Buy ₡{it.price}
                    </button>
                  </div>
                ))}
                <div style={{ fontSize: 10, color: "#c9b88a", marginTop: 8 }}>Earn ₡ by winning battles — wild animals drop trade shells, and rangers pay up when they lose.</div>
              </div>
            )}
            {S.menu === "types" && (
              <div>
                <b>Type Matchups</b>
                <div style={{ fontSize: 11, color: "#c9b88a", marginBottom: 8 }}>2× = super effective · ½× = resisted</div>
                {Object.keys(CHART).map((t) => {
                  const strong = Object.entries(CHART[t]).filter(([, v]) => v === 2).map(([k]) => k);
                  const weak = Object.entries(CHART[t]).filter(([, v]) => v === 0.5).map(([k]) => k);
                  return (
                    <div key={t} style={{ padding: "6px 0", borderBottom: "1px solid #5c5344", fontSize: 12 }}>
                      <Chip t={t} />
                      <div style={{ marginTop: 4 }}>
                        {strong.length > 0 && <span>2× vs {strong.join(", ")}. </span>}
                        {weak.length > 0 && <span style={{ color: "#c9b88a" }}>½× vs {weak.join(", ")}.</span>}
                        {strong.length === 0 && weak.length === 0 && <span style={{ color: "#c9b88a" }}>Neutral against everything.</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {S.menu === "learn" && learner && (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Sprite sp={learner.sp} size={44} />
                  <div>
                    <b>{DEX[learner.sp].n}</b> wants to learn <b style={{ color: TYPE_COLORS[MOVES[learner.pending[0]].t] }}>{MOVES[learner.pending[0]].n}</b>
                    <div style={{ fontSize: 11, color: "#c9b88a" }}>
                      {MOVES[learner.pending[0]].t} · {MOVES[learner.pending[0]].p > 0 ? `PWR ${MOVES[learner.pending[0]].p}` : "STATUS"} · ACC {MOVES[learner.pending[0]].acc}
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 12, margin: "10px 0 6px" }}>Choose a move to forget:</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {learner.moves.map((k, i) => {
                    const mv = MOVES[k];
                    return (
                      <button key={k} style={btn(TYPE_COLORS[mv.t])} onClick={() => resolveLearn(learner.uid, i)}>
                        {mv.n}<div style={{ fontSize: 10, fontWeight: 400 }}>{mv.t} · {mv.p > 0 ? `PWR ${mv.p}` : "STATUS"}</div>
                      </button>
                    );
                  })}
                  <button style={{ ...btn("#7d735f"), gridColumn: "1 / -1" }} onClick={() => resolveLearn(learner.uid, -1)}>
                    Don't learn {MOVES[learner.pending[0]].n}
                  </button>
                </div>
              </div>
            )}
            {S.menu !== "learn" && (
              <button style={{ ...btn("#7d735f"), width: "100%", marginTop: 12 }} onClick={() => setS((p) => ({ ...p, menu: null, pick: null }))}>Close</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


/* ---------- MOUNT ---------- */
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Wildlands));
