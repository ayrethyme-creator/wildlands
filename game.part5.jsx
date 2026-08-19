  // ---------- UI PIECES ----------
  const Chip = ({ t, small }) => (
    <span style={{ background: TYPE_COLORS[t] || "#5c5344", color: "#fff", borderRadius: 4, padding: small ? "1px 5px" : "2px 7px", fontSize: small ? 9 : 11, fontWeight: 700, letterSpacing: 0.5, marginRight: 4 }}>{t.toUpperCase()}</span>
  );
  const HPBar = ({ hp, max }) => {
    const pct = Math.max(0, (hp / max) * 100);
    const col = pct > 50 ? "#2ecc71" : pct > 20 ? "#f1c40f" : "#e74c3c";
    return (
      <div style={{ background: "#33302a", borderRadius: 11, height: 10, overflow: "hidden", border: "1px solid #1e1c18" }}>
        <div style={{ width: pct + "%", background: col, height: "100%", transition: "width .5s" }} />
      </div>
    );
  };
  const KEYFRAMES = (
    <style>{`
      @keyframes bobY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
      /* The resting breath every animal gets, everywhere it appears. Two pixels
         over two and a half seconds - small enough that you do not watch it,
         large enough that a screen full of creatures stops looking like a
         printed page. */
      @keyframes idleY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }

      /* Every button acknowledges being pressed. On a touchscreen there is no
         cursor and no hover, so without this a tap gives no sign it registered
         until the game reacts - which reads as lag even when it is instant. */
      button { transition: transform .09s ease, filter .09s ease; }
      button:active:not(:disabled) { transform: scale(.955); filter: brightness(1.12); }

      /* A hit you can feel. Two frames of shake is the whole trick - long
         enough to register, short enough that it never gets in the way. */
      @keyframes hitShake {
        0%,100% { transform: translate(0,0); }
        20% { transform: translate(-3px, 1px); }
        40% { transform: translate(3px, -1px); }
        60% { transform: translate(-2px, -1px); }
        80% { transform: translate(2px, 1px); }
      }
      .shake { animation: hitShake .26s ease-in-out; }

      /* Damage numbers rise and fade rather than simply appearing. */
      @keyframes popUp {
        0% { transform: translateY(6px) scale(.8); opacity: 0; }
        30% { transform: translateY(-2px) scale(1.08); opacity: 1; }
        100% { transform: translateY(-14px) scale(1); opacity: 0; }
      }
      /* Anyone who has asked not to be animated is left alone. */
      /* ---- the overworld moves a little ----
         The battle screen bobs and floats and shakes; the map did not move at
         all, which is most of why it read as flatter than the rest of the game.

         All four of these are one CSS animation on a tile that is already
         drawing a background image, so nothing new renders and no JavaScript
         runs per frame.

         Every one is staggered by tile position. Without that a field of grass
         sways in lockstep and reads as the whole screen sliding rather than as
         grass moving, which is worse than no motion at all. */

      /* Water: a slow band of light crossing the surface. */
      /* Two layers now: the shimmer band on top, the drawn surface underneath.
         Both positions have to be named or the single value applies to every
         layer and drags the ripples along with the highlight - which slides the
         surface off its own tile and shows the seam it was drawn to hide. The
         second pair pins the surface still. */
      @keyframes wlWater {
        0%   { background-position: 0% 50%, 0 0; }
        100% { background-position: 200% 50%, 0 0; }
      }
      .wl-water { animation: wlWater 9s linear infinite; }

      /* Grass: a small lean, not a wobble. Two percent of a tile is about half
         a pixel on a phone, which is what makes it read as air moving through
         it rather than as the tile itself shifting. */
      /* Absolute lengths, not percentages. A percentage background-position
         resolves against the difference between the element and the image, and
         with background-size 100% 100% that difference is zero - so every one
         of these animations was running and moving nothing at all. */
      @keyframes wlSway {
        0%, 100% { background-position: 0 0; }
        50%      { background-position: 0.7px 0; }
      }
      .wl-sway { animation: wlSway 4.5s ease-in-out infinite; }

      /* People: standing still is not standing frozen. */
      @keyframes wlIdle {
        0%, 100% { background-position: 0 0; }
        50%      { background-position: 0 -1.2px; }
      }
      .wl-idle { animation: wlIdle 2.6s ease-in-out infinite; }

      /* Anything with a flame in it. */
      @keyframes wlFlicker {
        0%, 100% { filter: brightness(1); }
        40%      { filter: brightness(1.13); }
        70%      { filter: brightness(0.95); }
      }
      .wl-flicker { animation: wlFlicker 1.7s ease-in-out infinite; }

      /* One footfall. Short, and slightly asymmetric so consecutive steps do
         not read as a bounce. */
      @keyframes wlStep {
        0%   { transform: translateY(0); }
        45%  { transform: translateY(-3.5%); }
        100% { transform: translateY(0); }
      }
      .wl-step { animation: wlStep 190ms ease-out; }

      /* Grass being walked through: a quick shove, then settling. */
      @keyframes wlRustle {
        0%   { background-position: 0 0; }
        18%  { background-position: -5px 1.5px; }
        44%  { background-position: 3.5px 0.5px; }
        68%  { background-position: -2px 1px; }
        86%  { background-position: 1px 0; }
        100% { background-position: 0 0; }
      }
      .wl-rustle { animation: wlRustle 560ms cubic-bezier(.22,.9,.3,1); }
      /* The tile just left settles rather than being struck. */
      .wl-wake { animation: wlRustle 640ms cubic-bezier(.22,.9,.3,1); opacity: .97; }

      /* ---- watercolour ----
         Ayr: "the colors are harsh and plain and everything is blocky."
         All three were true and all three came from the same place: every
         surface in the game was one flat fill, one 3px border and one corner
         radius, and the accent colours were saturated screen primaries that
         shared no pigment with the warm browns they sat on.

         Watercolour is three things, and none of them needs an image file.
         Pigment pools unevenly, so fills are gradients that gather at one
         corner rather than flat colour. Paper has tooth, so there is a grain
         over everything. And a wash has a soft edge that darkens where it
         dries, so borders are translucent and radii are uneven instead of a
         machined 16px on all four corners. */

      /* Paper tooth. feTurbulence is the grain itself - no asset, no request,
         and it scales to any screen because it is generated. Fixed to the
         viewport so it reads as the paper the game is painted on rather than
         as texture sliding around on top of it. */
      .wl-paper::after {
        content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 3;
        opacity: .055; mix-blend-mode: overlay;
        background-image: url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>\
<filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' stitchTiles='stitch'/>\
</filter><rect width='140' height='140' filter='url(%23g)'/></svg>");
      }

      /* Where a wash dries it leaves a darker rim. One inset shadow does it,
         and it is what stops a panel reading as a rectangle of flat colour. */
      .wl-wash {
        box-shadow:
          inset 0 1px 0 rgba(255,246,224,.10),
          inset 0 -18px 26px -22px rgba(38,26,14,.75),
          0 6px 18px -8px rgba(20,14,8,.55);
      }

      /* A bloom: pigment carried to the edge of the wet patch. Sits under the
         content and never intercepts a tap. */
      .wl-bloom { position: relative; isolation: isolate; }
      .wl-bloom::before {
        content: ""; position: absolute; inset: 0; pointer-events: none; z-index: -1;
        border-radius: inherit; opacity: .5;
        background:
          radial-gradient(120% 90% at 12% 8%, rgba(255,241,214,.16), transparent 58%),
          radial-gradient(100% 80% at 88% 96%, rgba(58,38,20,.30), transparent 62%);
      }

      /* Arriving somewhere new. Every map change was a hard cut: one screen
         replaced by another between two frames, which is what made walking
         through a door feel like a page turn rather than like continuing to
         walk. Short enough that it never delays control - the map is already
         live underneath and the fade is only on top of it. */
      @keyframes wlArrive {
        0%   { opacity: 1; }
        100% { opacity: 0; }
      }
      .wl-arrive {
        position: absolute; inset: 0; pointer-events: none; z-index: 5;
        background: #1a1510;
        animation: wlArrive 190ms ease-out forwards;
      }

      /* ---- things in the air ----
         One absolutely positioned speck per creature or flake, drifting on its
         own clock. Every one is a div with a background and a shadow, so the
         compositor carries them and no JavaScript runs per frame.

         Each kind moves the way the thing actually moves: a firefly wanders and
         pulses, a leaf falls while swinging, snow comes down almost straight,
         dust slides sideways, an ember rises. Getting that right is most of
         the difference between weather and confetti. */
      .amb {
        position: absolute; pointer-events: none;
        animation-iteration-count: infinite; animation-timing-function: linear;
        will-change: transform, opacity;
      }
      /* Fireflies: no fall at all. They wander a little and breathe. */
      @keyframes ambFly {
        0%   { transform: translate(0,0);        opacity: 0; }
        15%  {                                   opacity: .95; }
        50%  { transform: translate(14px,-10px); opacity: .35; }
        85%  {                                   opacity: .9; }
        100% { transform: translate(0,0);        opacity: 0; }
      }
      .amb-fly { animation-name: ambFly; animation-timing-function: ease-in-out; }

      /* Leaves fall and swing, and the swing is what stops them reading as
         rain. They also drift downwind rather than straight down. */
      @keyframes ambLeaf {
        0%   { transform: translate(0,-12%) rotate(0deg);      opacity: 0; }
        10%  {                                                 opacity: .85; }
        100% { transform: translate(34px,120%) rotate(320deg); opacity: 0; }
      }
      .amb-leaf { animation-name: ambLeaf; }

      @keyframes ambSnow {
        0%   { transform: translate(0,-12%);     opacity: 0; }
        10%  {                                   opacity: .9; }
        100% { transform: translate(12px,120%);  opacity: .15; }
      }
      .amb-snow { animation-name: ambSnow; }

      /* Dust does not fall, it blows past. */
      @keyframes ambDust {
        0%   { transform: translate(-8px,0);  opacity: 0; }
        20%  {                                opacity: .5; }
        80%  {                                opacity: .4; }
        100% { transform: translate(58px,-6px); opacity: 0; }
      }
      .amb-dust { animation-name: ambDust; }

      /* Embers rise, because heat does. */
      @keyframes ambEmber {
        0%   { transform: translate(0,0) scale(1);        opacity: 0; }
        20%  {                                            opacity: .95; }
        100% { transform: translate(10px,-70px) scale(.4); opacity: 0; }
      }
      .amb-ember { animation-name: ambEmber; }

      /* ---- what you leave behind ----
         Only where ground actually takes a print: snow and sand. On grass the
         blades already spring back behind you, which is the wake animation, and
         a footprint on rock would be a lie.

         It fades over about two seconds, which is long enough to look back and
         see where you came from and short enough that a field you have crossed
         twice does not turn into a diagram. */
      @keyframes wlPrint {
        0%   { opacity: .38; transform: scale(1); }
        70%  { opacity: .18; }
        100% { opacity: 0;   transform: scale(1.08); }
      }
      .wl-print { animation: wlPrint 2.1s ease-out forwards; pointer-events: none; }

      @media (prefers-reduced-motion: reduce) {
        * { animation: none !important; }
        .wl-arrive { display: none; }
        .amb { display: none; }
        .wl-print { display: none; }
      }
    `}</style>
  );

  // ---- pigments ----
  // The accent colours were screen primaries - #2471a3, #27ae60, #c9a227 -
  // dropped onto a warm brown ground they had nothing in common with, which is
  // most of what "harsh" was. These are the same hues mixed down to pigments
  // that share the paper's warmth: less chroma, a little ochre through all of
  // them, nothing at full saturation.
  //
  // Mapped rather than replaced at the call sites, because those colours are
  // written inline in well over a hundred places across the UI. One table here
  // retunes all of them, and any colour not listed passes through untouched.
  const WASH = {
    "#2471a3": "#4d7391", "#5dade2": "#7fa6c2", "#27ae60": "#5d8a5f",
    "#2d7d5a": "#527e66", "#2d8a6b": "#4f8570", "#8e44ad": "#7a6291",
    "#c9a227": "#c0a052", "#b7950b": "#a89043", "#5c8a3a": "#6b8a4c",
    "#c9457a": "#ab6180", "#e74c3c": "#c05c50", "#2ecc71": "#6faf76",
    "#f1c40f": "#d5b352", "#a0522d": "#9a5c3c", "#7d735f": "#7a7160",
    "#5c5344": "#5f5647", "#3a342b": "#3d372e",
  };
  const wash = (c) => WASH[String(c).toLowerCase()] || c;

  // Two stops rather than one flat fill: pigment settles toward the bottom of a
  // wet patch, so every surface is very slightly darker where it pooled.
  const pool = (c, lift = 0.10) =>
    `linear-gradient(168deg, rgba(255,248,232,${lift}) 0%, rgba(255,248,232,0) 42%), ` +
    `linear-gradient(184deg, ${c} 0%, ${c} 55%, rgba(28,19,10,.22) 100%), ${c}`;

  const frame = {
    maxWidth: 430, margin: "0 auto", minHeight: "100vh",
    // The ground was one flat near-black. Three washes laid over a warm base
    // give it somewhere to be lighter and somewhere to be deep, which is what
    // stops a screen of solid colour reading as a screen of nothing.
    background:
      "radial-gradient(120% 70% at 18% 0%, #33291f 0%, transparent 60%)," +
      "radial-gradient(100% 60% at 92% 12%, #2b2b26 0%, transparent 55%)," +
      "radial-gradient(140% 90% at 50% 108%, #1c1712 0%, transparent 62%)," +
      "#241f19",
    fontFamily: "'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#f2e8d5",
    display: "flex", flexDirection: "column",
  };

  // Uneven corners: a wash does not dry to a machined radius. Four different
  // values is the whole trick, and it is what takes the blockiness out.
  const panel = {
    background:
      "radial-gradient(120% 100% at 10% 0%, rgba(255,244,222,.07), transparent 55%)," +
      "linear-gradient(172deg, #443c31 0%, #3a3329 60%, #332c23 100%)",
    border: "2px solid rgba(122,110,90,.55)",
    borderRadius: "20px 15px 22px 16px",
    padding: 12,
    boxShadow: "inset 0 1px 0 rgba(255,246,224,.09), inset 0 -20px 30px -24px rgba(30,20,10,.8), 0 8px 22px -10px rgba(16,11,6,.6)",
  };
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

  const btn = (bg = "#5c8a3a") => {
    const c = wash(bg);
    return {
      background: pool(c), color: "#fff7ea", border: "1px solid rgba(24,16,8,.34)",
      // Same uneven-corner trick as the panels, at a smaller scale.
      borderRadius: "16px 12px 17px 13px",
      padding: "12px 14px",
      fontFamily: "inherit", fontWeight: 700, fontSize: 14, cursor: "pointer",
      // Two shadows and a highlight rather than one flat drop: a lifted edge, a
      // soft contact shadow, and a rim where the pigment dried at the bottom.
      boxShadow:
        "0 1px 0 rgba(255,248,232,.14) inset," +
        "0 -9px 14px -12px rgba(28,18,8,.9) inset," +
        "0 4px 12px -4px rgba(16,11,6,.5)",
      textShadow: "0 1px 1px rgba(30,20,10,.35)",
      touchAction: "none", userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none",
      WebkitTouchCallout: "none", WebkitTapHighlightColor: "transparent",
    };
  };
  const btnS = (bg) => ({ ...btn(bg), padding: "8px 10px", fontSize: 12 });

  // ---------- TITLE ----------
  if (S.screen === "title") {
    return (
      <div className="wl-paper" style={{ ...frame, justifyContent: "center", alignItems: "center", textAlign: "center", padding: 20 }}>
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
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 14, alignItems: "stretch", width: "100%", maxWidth: 340 }}>
          {saveStatus === "checking" ? (
            <div style={{ fontSize: 11, color: "#8a7f68", textAlign: "center", padding: 12 }}>Reading save files…</div>
          ) : (
            [1, 2, 3].map((n) => {
              const sm = slotSummary(saves[n]);
              return (
                <div key={n} style={{ ...panel, padding: 10, textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {sm && sm.leadSp ? <Sprite sp={sm.leadSp} size={34} /> : <span style={{ fontSize: 18, opacity: .4 }}>—</span>}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#e8c547" }}>File {n}</div>
                      {sm ? (
                        <div style={{ fontSize: 10, color: "#c9b88a", lineHeight: 1.5 }}>
                          {sm.lead} · {sm.badges} badge{sm.badges === 1 ? "" : "s"}
                          {sm.legends ? ` · ${sm.legends} guardian${sm.legends === 1 ? "" : "s"}` : ""}
                          <br />{sm.seen} species seen · {sm.where}
                        </div>
                      ) : (
                        <div style={{ fontSize: 10, color: "#8a7f68" }}>Empty</div>
                      )}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                    {sm ? (
                      <>
                        <button style={{ ...btnS("#27ae60"), flex: 2 }} onClick={() => continueGame(n)}>▶ Continue</button>
                        <button style={{ ...btnS("#4a7ba7"), flex: 1 }} onClick={() => exportSlot(n)}>⇪ Code</button>
                        <button style={{ ...btnS("#7d735f"), flex: 1 }}
                          onClick={() => setS((p) => ({ ...p, eraseAsk: p.eraseAsk === n ? null : n }))}>🗑️</button>
                      </>
                    ) : (
                      <>
                        <button style={{ ...btnS("#c0392b"), flex: 2 }} onClick={() => startNewIn(n)}>✦ New Game</button>
                        <button style={{ ...btnS("#4a7ba7"), flex: 1 }} onClick={() => openImport(n)}>⇩ Code</button>
                      </>
                    )}
                  </div>
                  {S.codePanel && S.codePanel.slot === n && (
                    <div style={{ marginTop: 8, borderTop: "1px solid #5c5344", paddingTop: 8 }}>
                      {S.codePanel.mode === "export" && (
                        <>
                          <div style={{ fontSize: 10, color: "#e8c547", marginBottom: 6, lineHeight: 1.5 }}>
                            This is File {n} written out as text. Keep it somewhere safe — pasting it
                            back restores this game on any device.
                          </div>
                          {S.codePanel.busy ? (
                            <div style={{ fontSize: 10, color: "#8a7f68", padding: "10px 0" }}>Building code…</div>
                          ) : (
                            <textarea readOnly value={S.codePanel.text}
                              onFocus={(e) => e.target.select()}
                              style={{ width: "100%", height: 76, resize: "vertical", background: "#241f19",
                                color: "#c9b88a", border: "1px solid #5c5344", borderRadius: 4,
                                fontSize: 9, fontFamily: "ui-monospace, Menlo, monospace",
                                padding: 6, lineHeight: 1.35, wordBreak: "break-all" }} />
                          )}
                          <div style={{ fontSize: 9, color: "#8a7f68", margin: "4px 0 6px" }}>
                            {S.codePanel.text ? `${S.codePanel.text.length.toLocaleString()} characters — copy all of it` : ""}
                          </div>
                          <div style={{ display: "flex", gap: 6 }}>
                            <button style={{ ...btnS("#4a7ba7"), flex: 2 }}
                              disabled={!S.codePanel.text}
                              onClick={() => {
                                const code = S.codePanel.text;
                                if (navigator.clipboard && navigator.clipboard.writeText) {
                                  navigator.clipboard.writeText(code)
                                    .then(() => setS((p) => ({ ...p, codePanel: { ...p.codePanel, copied: true } })))
                                    .catch(() => setS((p) => ({ ...p, codePanel: { ...p.codePanel,
                                      err: "Could not copy automatically — select the text and copy it by hand." } })));
                                } else {
                                  setS((p) => ({ ...p, codePanel: { ...p.codePanel,
                                    err: "Select the text above and copy it by hand." } }));
                                }
                              }}>{S.codePanel.copied ? "✓ Copied" : "Copy"}</button>
                            <button style={{ ...btnS("#7d735f"), flex: 1 }} onClick={closeCodePanel}>Done</button>
                          </div>
                        </>
                      )}
                      {S.codePanel.mode === "import" && (
                        <>
                          <div style={{ fontSize: 10, color: "#e8c547", marginBottom: 6, lineHeight: 1.5 }}>
                            Paste a save code to load it into File {n}.
                          </div>
                          <textarea value={S.codePanel.text || ""}
                            onChange={(e) => setCodeText(e.target.value)}
                            placeholder="WLD1.…"
                            style={{ width: "100%", height: 76, resize: "vertical", background: "#241f19",
                              color: "#c9b88a", border: "1px solid #5c5344", borderRadius: 4,
                              fontSize: 9, fontFamily: "ui-monospace, Menlo, monospace",
                              padding: 6, lineHeight: 1.35, wordBreak: "break-all" }} />
                          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                            <button style={{ ...btnS("#27ae60"), flex: 2 }}
                              onClick={() => importIntoSlot(n, S.codePanel.text)}>Load into File {n}</button>
                            <button style={{ ...btnS("#7d735f"), flex: 1 }} onClick={closeCodePanel}>Cancel</button>
                          </div>
                        </>
                      )}
                      {S.codePanel.mode === "done" && (
                        <>
                          <div style={{ fontSize: 10, color: "#8fce77", marginBottom: 6 }}>
                            Loaded into File {n}. Press Continue to pick it up.
                          </div>
                          <button style={{ ...btnS("#7d735f"), width: "100%" }} onClick={closeCodePanel}>OK</button>
                        </>
                      )}
                      {S.codePanel.err && (
                        <div style={{ fontSize: 10, color: "#e08e78", marginTop: 6, lineHeight: 1.5 }}>
                          {S.codePanel.err}
                        </div>
                      )}
                    </div>
                  )}
                  {S.eraseAsk === n && (
                    <div style={{ marginTop: 8, borderTop: "1px solid #5c5344", paddingTop: 8 }}>
                      <div style={{ fontSize: 10, color: "#e8c547", marginBottom: 6 }}>
                        Erase File {n}? Everything in it is lost for good.
                      </div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button style={{ ...btnS("#c0392b"), flex: 1 }}
                          onClick={() => { eraseSlot(n); setS((p) => ({ ...p, eraseAsk: null })); }}>Erase</button>
                        <button style={{ ...btnS("#7d735f"), flex: 1 }}
                          onClick={() => setS((p) => ({ ...p, eraseAsk: null }))}>Keep</button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
          {saveStatus === "error" && (
            <div style={{ fontSize: 10, color: "#c9773a", textAlign: "center" }}>
              ⚠️ Save storage couldn't be read.
              <button style={{ background: "#3a342b", color: "#c9b88a", border: "1px solid #5c5344", borderRadius: 11, padding: "4px 8px", fontFamily: "inherit", fontSize: 10, cursor: "pointer", marginLeft: 8 }}
                onClick={checkSave}>🔄 Retry</button>
            </div>
          )}
        </div>
        <p style={{ fontSize: 10, color: "#7d735f", marginTop: 18 }}>Save with 💾 or at any Care Center. Some animals only appear at night. Old saves carry your team forward.</p>
      </div>
    );
  }

  // ---------- FIRST MORNING ----------
  // This used to be a lineup of wild juveniles offered like pets, which was the
  // single loudest thing in the game arguing against everything after it. It is
  // now the station's own animals — the same three, the same stats, the same
  // growth at sixteen — introduced as what they actually are.
  if (S.screen === "starter") {
    const orphans = ["fennec_j", "otter_j", "kestrel_j"];
    return (
      <div className="wl-paper" style={{ ...frame, padding: 16, overflowY: "auto" }}>
        {KEYFRAMES}
        <div style={{ ...panel, marginBottom: 12 }}>
          <b>👩🏾‍🌾 Keeper Ruth:</b> "You're the new ranger. Good — I've got eleven animals and two hands.
          <br /><br />
          Before anything else: everything here is here because it can't be anywhere else. Not one of them
          was taken. They were dug out, knocked down, found alone, or handed over by somebody who'd
          stopped coping. We don't collect animals. We end up with them.
          <br /><br />
          These three came in as babies. Reared by people, which means they'll never be wild — a fox that
          comes when the kitchen door opens doesn't last a week out there.
          <br /><br />
          Pick one to work with. Not the one you like the look of. The one you think you can do the job with."
        </div>
        {orphans.map((sp) => {
          const d = DEX[sp];
          const adult = DEX[d.grows.to];
          const ind = individualOf(sp);
          return (
            <div key={sp} style={{ ...panel, marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <Sprite sp={sp} size={64} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#e8c547" }}>{ind.name}</div>
                  <div style={{ fontSize: 11, color: "#c9b88a" }}>
                    {d.n}{ind.sex ? ` · ${ind.sex === "F" ? "female" : "male"}` : ""} · {d.t.join(" / ")}
                  </div>
                  <div style={{ fontSize: 10, color: "#8a7f68" }}>
                    {ind.since} · grows into {adult.n} at 16
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#d9cbb0", whiteSpace: "pre-line",
                marginBottom: 9 }}>{ind.story}</div>
              <button style={{ ...btn("#27ae60"), width: "100%" }}
                onClick={() => setS((p) => {
                  const a2 = mk(sp, 5);
                  a2.indiv = ind.name;
                  return {
                    ...p, screen: "world", party: [a2],
                    rival: COUNTER[sp] || "otter_j",
                    dialog: { text: `🤝 ${ind.name} is yours to work with.\n\n👩🏾‍🌾 Ruth: "Right. Somebody's been waiting to meet you — she funds all of this, and she does not wait long."` },
                  };
                })}>
                Work with {ind.name}
              </button>
            </div>
          );
        })}
        <p style={{ fontSize: 10, color: "#7d735f", marginTop: 6, textAlign: "center" }}>
          None of them can be released. That is not a rule of this game — it is what hand-rearing does.
        </p>
      </div>
    );
  }


  // ---------- BATTLE ----------
  if (S.battle) {
    const b = S.battle;
    const my = S.party[0];
    const en = b.enemy;
    const busy = b.phase === "busy";
    const foeLabel = b.kind === "legend" ? "Guardian " : "";
    const arenaBg = b.kind === "legend" ? "linear-gradient(#4a3f6b,#8a7a5c)" : (ARENA[MAPS[S.map].zone] || ARENA.savanna);
    // Keying on the hit counter remounts the wrapper, which is what makes the
    // shake replay on every blow rather than only the first.
    const shakeKey = S.hitFlash || 0;
    return (
      <div key={shakeKey} className={shakeKey ? "wl-paper shake" : "wl-paper"} style={{ ...frame, padding: 10 }}>
        {KEYFRAMES}
        <div style={{ background: arenaBg, borderRadius: 14, border: "3px solid #5c5344", padding: 12, position: "relative", minHeight: 230 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ ...panel, padding: 8, width: "58%" }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{foeLabel}{DEX[en.sp].n}{b.kind === "wild" ? <span style={{ color: "#8a9a6a", fontWeight: 400, fontSize: 11 }}> · wild</span> : null}{en.sex ? <span style={{ color: en.sex === "M" ? "#5dade2" : "#e88ab5" }}> {en.sex === "M" ? "♂" : "♀"}</span> : null}{b.kind === "wild" && S.dex[en.sp] === 2 ? <span title="Already logged in your Guide"> 🍖</span> : null} <span style={{ color: "#c9b88a" }}>Lv {en.lvl}</span>{en.psn ? " ☠️" : ""}{en.slp ? " 💤" : ""}{en.fear ? " 😨" : ""}{en.chill ? " 🧊" : ""}</div>
              <div style={{ margin: "3px 0" }}>{DEX[en.sp].t.map((t) => <Chip key={t} t={t} small />)}</div>
              <HPBar hp={en.hp} max={en.maxHp} />
            </div>
            <Sprite sp={en.sp} size={b.kind === "legend" ? 96 : 86} anim="floatY" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 14 }}>
            <Sprite sp={my.sp} size={86} flip anim="bobY" />
            <div style={{ ...panel, padding: 8, width: "58%" }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{my.indiv || DEX[my.sp].n}{my.indiv ? <span style={{ fontWeight: 400, fontSize: 10, color: "#8a9a6a" }}> · {DEX[my.sp].n}</span> : null} <span style={{ color: "#c9b88a" }}>Lv {my.lvl}</span>{my.psn ? " ☠️" : ""}{my.slp ? " 💤" : ""}{my.fear ? " 😨" : ""}{my.chill ? " 🧊" : ""}</div>
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
                    {a.indiv || DEX[a.sp].n} Lv {a.lvl}
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
              <button disabled={busy || (S.items.prismberries ?? 0) <= 0} style={{ ...btn("#8e44ad"), opacity: busy || (S.items.prismberries ?? 0) <= 0 ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "prismberry" })}>💎 Prism Berry ({S.items.prismberries ?? 0})<div style={{ fontSize: 10, fontWeight: 400 }}>+200 HP</div></button>
              <button disabled={busy || (S.items.balms ?? 0) <= 0} style={{ ...btn("#2e8b57"), opacity: busy || (S.items.balms ?? 0) <= 0 ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "balm" })}>🌿 Soothe Balm ({S.items.balms ?? 0})<div style={{ fontSize: 10, fontWeight: 400 }}>Cures all</div></button>
              {(S.items.antidote ?? 0) > 0 && <button disabled={busy} style={{ ...btn("#7d3c98"), opacity: busy ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "antidote" })}>🧪 Antidote ({S.items.antidote})<div style={{ fontSize: 10, fontWeight: 400 }}>Cures ☠️</div></button>}
              {(S.items.freshair ?? 0) > 0 && <button disabled={busy} style={{ ...btn("#c0651a"), opacity: busy ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "freshair" })}>🩹 Burn Salve ({S.items.freshair})<div style={{ fontSize: 10, fontWeight: 400 }}>Cures 🔥</div></button>}
              {(S.items.coolbalm ?? 0) > 0 && <button disabled={busy} style={{ ...btn("#2980b9"), opacity: busy ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "coolbalm" })}>🧣 Warm Wrap ({S.items.coolbalm})<div style={{ fontSize: 10, fontWeight: 400 }}>Cures 🧊</div></button>}
              {(S.items.calmbalm ?? 0) > 0 && <button disabled={busy} style={{ ...btn("#16a085"), opacity: busy ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "calmbalm" })}>🍵 Calming Herb ({S.items.calmbalm})<div style={{ fontSize: 10, fontWeight: 400 }}>Cures 😨</div></button>}
              {(S.items.wakeberry ?? 0) > 0 && <button disabled={busy} style={{ ...btn("#d68910"), opacity: busy ? 0.45 : 1 }}
                onClick={() => takeTurn({ kind: "wakeberry" })}>⏰ Rouse Berry ({S.items.wakeberry})<div style={{ fontSize: 10, fontWeight: 400 }}>Cures 💤</div></button>}
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
                    {a.indiv || DEX[a.sp].n} Lv {a.lvl}<div style={{ fontSize: 10, fontWeight: 400 }}>→ {Math.floor(a.maxHp / 2)} HP</div>
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
                    {a.indiv || DEX[a.sp].n} Lv {a.lvl} · {a.hp}/{a.maxHp}
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
                    {a.indiv || DEX[a.sp].n} Lv {a.lvl} · {a.hp}/{a.maxHp}
                  </button>
                ))}
                <button disabled={busy} style={btn("#7d735f")} onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "main" } }))}>← Back</button>
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <button disabled={busy} style={{ ...btn("#c0392b"), opacity: busy ? 0.5 : 1, gridColumn: "1 / -1", fontSize: 16 }} onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "moves", confirmRun: false } }))}>⚔️ Fight</button>
              <button disabled={busy} style={{ ...btn("#b7950b"), opacity: busy ? 0.5 : 1 }} onClick={() => takeTurn({ kind: "treat" })}>🍖 Befriend ({S.items.treats})</button>
              {/* Only offered once the animal is actually unsettled, so it is a
                  response to something the player can see happening rather than
                  one more button to learn up front. */}
              {b.kind === "wild" && (b.wary || 0) > 0 && (
                <button disabled={busy || (S.items.berries ?? 0) <= 0}
                  style={{ ...btn("#5d8a5f"), opacity: busy || (S.items.berries ?? 0) <= 0 ? 0.45 : 1 }}
                  onClick={() => takeTurn({ kind: "calm" })}>
                  🫐 Settle it ({S.items.berries ?? 0})
                  <div style={{ fontSize: 10, fontWeight: 400 }}>
                    {(b.wary || 0) >= 2 ? "About to bolt" : "Wary of you"}
                  </div>
                </button>
              )}
              <button disabled={busy} style={{ ...btn("#8e44ad"), opacity: busy ? 0.5 : 1 }} onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "bag", confirmRun: false } }))}>🎒 Items</button>
              <button disabled={busy} style={{ ...btn("#2471a3"), opacity: busy ? 0.5 : 1 }} onClick={() => setS((p) => ({ ...p, battle: { ...p.battle, mode: "party", confirmRun: false } }))}>👥 Team</button>
              <button disabled={busy}
                style={{ ...btn(b.confirmRun ? "#e67e22" : "#7d735f"), opacity: busy ? 0.5 : 1 }}
                onClick={() => b.confirmRun ? takeTurn({ kind: "run" }) : setS((p) => ({ ...p, battle: { ...p.battle, confirmRun: true } }))}>
                {b.confirmRun ? "🏃 Tap to confirm!" : "🏃 Withdraw"}
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
    <div className="wl-paper" style={frame}>
      {KEYFRAMES}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px" }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: "#e8c547" }}>📍 {m.name} {phase === "night" ? "🌙" : phase === "dusk" ? "🌆" : phase === "dawn" ? "🌅" : "☀️"}</div>
        <div style={{ fontSize: 12 }}>{areaDex ? <span style={{ color: areaDex.got === areaDex.tot ? "#8fd94a" : "#e8c547", marginRight: 6 }} title="Species living in this area that you have studied">🐾{areaDex.got}/{areaDex.tot}</span> : null}🏅{S.badges}/{GYM_COUNT} ₡{S.items.coins ?? 0} 🍖{S.items.treats} 🫐{S.items.berries + (S.items.bigberries ?? 0) + (S.items.goldberries ?? 0)} ✨{S.items.revives ?? 0}{S.items.lantern ? " 🏮" : ""}{S.items.compass && S.compassOn ? " 🧭" : ""}</div>
      </div>

      <div style={{ padding: "0 10px" }}>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${W}, 1fr)`, border: "2px solid rgba(122,110,90,.6)", borderRadius: "18px 13px 20px 14px", boxShadow: "0 10px 26px -12px rgba(14,9,5,.65), inset 0 0 0 1px rgba(255,246,224,.05)", overflow: "hidden", filter: m.dark ? undefined : (phase === "night" ? (typeof NIGHT_FILTER !== "undefined" ? NIGHT_FILTER : "brightness(.52) saturate(.7) hue-rotate(205deg)") : phase === "dusk" || phase === "dawn" ? (typeof DUSK_FILTER !== "undefined" ? DUSK_FILTER : "brightness(.72) saturate(.85) hue-rotate(210deg)") : undefined), transition: "filter 1.2s ease" }}>
          {m.rows.map((row, y) => row.split("").map((ch, x) => {
            let ch2 = ch;
            const idKey = `${S.map}:${x},${y}`;
            if (ch === "X" && S.badges >= (GYMS[S.map]?.id ?? GYM_COUNT)) ch2 = ".";
            if ((ch === "R" || ch === "V") && S.trainersBeaten[idKey]) ch2 = ".";
            if (ch === "D" && o.solved) ch2 = ".";
            const t = TILE_STYLE(ch2, pal);
            let em = t.em, bg = t.bg;
            if (ch2 === "R" || ch2 === "V") {
              const tr = TRAINERS[idKey];
              if (tr && tr.em) em = tr.em;
              // A solved arc redresses its own tiles, so the payoff is visible
              // from the map rather than only inside a dialogue box.
              if (typeof beeloudSolvedText !== "undefined" && beeloudSolvedText[idKey]
                  && (S.arcs || {}).beeloud && S.arcs.beeloud.solved) {
                em = beeloudSolvedText[idKey].em;
              }
            }
            if (ch2 === "X") { const g = GYMS[S.map]; if (g && g.em) em = g.em; }
            if (ch2 === "t") {
              const ti = (m.torches || []).findIndex((tt) => tt.x === x && tt.y === y);
              em = o.lit.includes(ti) || o.solved ? "🔥" : "🪔";
            }
            if (o.boulders.some((bb) => bb.x === x && bb.y === y)) em = "🪨";
            let glow = false;
            if (ch2 === "¦") { em = lit ? "🏮" : "🔦"; glow = lit; }         // town lamp post
            // A fallen log stays a fallen log after dark. It used to turn into
            // a lit lantern at dusk, which was invisible while everything was
            // emoji and became 241 glowing logs scattered through the woods
            // the moment they were drawn. The 35 lamp posts are the lights.
            else if (ch2 === "¡") { em = "🪵"; }
            const isPlayer = x === S.x && y === S.y;
            const disturbed = isPlayer;
            const wake = x === S.px && y === S.py && !isPlayer;
            // Grass draws as a background filling the whole cell, so adjacent
            // grass tiles run together into one field instead of each being a
            // square with a character stamped in the middle of it.
            const hidden = dark && !isPlayer && Math.hypot(x - S.x, y - S.y) > 2.4;
            // Grass and the drawn map tiles arrive the same way: as one
            // background image. Whichever applies suppresses the emoji, because
            // a drawn tree with 🌳 stamped on top of it is worse than either.
            // What is on the other side of each edge. A grass tile draws its
            // neighbour's colour a little way across the join with a torn
            // profile, which is what stops the map reading as a grid of
            // squares - but it can only do that if it knows what it is next
            // to. Read off the raw rows rather than the overridden character,
            // because a beaten trainer becoming walkable does not change what
            // the ground under them is made of.
            //
            // Only sides whose colour actually differs are passed on: grass
            // meeting grass has no join to hide, and leaving those out is what
            // keeps interior tiles - most of any map - on the same four cached
            // images they have always used.
            const nbEdges = (!hidden && (ch2 === "G" || ch2 === "g" || ch2 === "W")) ? (() => {
              const at = (nx, ny) => {
                const r = m.rows[ny];
                if (!r || nx < 0 || nx >= r.length) return null;
                const nch = r[nx];
                const t = TILE_STYLE(nch, pal);
                return t ? { ch: nch, bg: t.bg } : null;
              };
              const out = {};
              [["n", x, y - 1], ["s", x, y + 1], ["w", x - 1, y], ["e", x + 1, y]]
                .forEach(([side, nx, ny]) => {
                  const n = at(nx, ny);
                  if (!n || n.bg === bg) return;
                  // One side tears per join, never both - two tears facing each
                  // other across a boundary cancel out and leave it straight
                  // again, just wider. Water wins every join it is part of,
                  // because a shoreline is the edge worth drawing: grass
                  // reaching into water reads as weed, water reaching into
                  // grass reads as a shore.
                  if (ch2 !== "W" && n.ch === "W") return;
                  out[side] = n.bg;
                });
              return Object.keys(out).length ? out : null;
            })() : null;
            const grassBgImg = hidden
              ? null : (typeof GRASS_TILE !== "undefined" ? GRASS_TILE(ch2, x, y, bg, nbEdges) : null);
            const artBgImg = (hidden || grassBgImg)
              ? null : (typeof TILE_ART !== "undefined" ? TILE_ART(ch2, x, y, pal) : null);
            // People are read after the trainer and gym overrides above, so a
            // trainer's own emoji is what gets drawn rather than the generic
            // figure the tile would otherwise carry.
            const personBgImg = (hidden || grassBgImg || artBgImg)
              ? null : (typeof PERSON_TILE !== "undefined" ? PERSON_TILE(em, bg) : null);
            const propBgImg = (hidden || grassBgImg || artBgImg || personBgImg)
              ? null : (typeof PROP_TILE !== "undefined" ? PROP_TILE(ch2, em, bg) : null);
            if (artBgImg || personBgImg || propBgImg) em = "";

            /* Which tiles move, and how much they are held back so a field does
               not move as one sheet. Water gets the longest spread because a
               lake is the largest continuous thing on screen. */
            // Grass the ranger is standing in rustles rather than sways, and
            // the tile is keyed on the step count so walking through a field
            // disturbs each clump as she reaches it rather than once on entry.
            let motion = null, delay = 0;
            if (!hidden) {
              const jitter = ((x * 7 + y * 13) % 20) / 10;
              if (ch2 === "W") { motion = "wl-water"; delay = ((x * 3 + y * 5) % 40) / 10; }
              else if (grassBgImg) { motion = "wl-sway"; delay = jitter; }
              else if (personBgImg) { motion = "wl-idle"; delay = jitter * 0.6; }
              else if (propBgImg && FLICKER_TILES.has(ch2)) { motion = "wl-flicker"; delay = jitter; }
            }
            // Water is two layers: the shimmer band that slides, over a drawn
            // surface that stays put. The band is transparent at both ends now
            // rather than fading back to the flat colour, because an opaque
            // band painted the ripples out as it passed over them.
            const waterSurface = (!hidden && ch2 === "W" && typeof WATER_TILE !== "undefined")
              ? WATER_TILE(ch2, x, y, bg, nbEdges) : null;
            const waterImg = (!hidden && ch2 === "W")
              ? `linear-gradient(100deg, rgba(255,255,255,0) 38%, ${sh(bg, 0.16)}80 50%, rgba(255,255,255,0) 62%)`
              : null;
            if (dark && !isPlayer && Math.hypot(x - S.x, y - S.y) > 2.4) { bg = "#0a0a12"; em = ""; }
            return (
              <div key={x + "," + y + ((disturbed || wake) && grassBgImg ? ":" + (S.step || 0) : "")}
                className={grassBgImg && !hidden
                  ? (disturbed ? "wl-rustle" : wake ? "wl-wake" : (motion || undefined))
                  : (motion || undefined)} style={{
                // All longhand. Mixing the background shorthand with
                // backgroundImage and backgroundSize on the same element means
                // React cannot tell which one won when only one of them
                // changes, and it warns because the result depends on the order
                // the properties happen to be applied in. Every tile bg here is
                // a flat colour, so the glow and the grass are both images over
                // it and the shorthand is not needed at all.
                backgroundColor: bg,
                // The lamp is drawn ON the glow, not replaced by it. Before
                // this the gradient won outright, so a lit lamp post rendered
                // as a dark olive circle on dark ground and read as a pit in
                // the road. The warm centre is also actually warm now.
                backgroundImage: [
                  waterImg,
                  grassBgImg || artBgImg || personBgImg || propBgImg || waterSurface,
                  glow ? `radial-gradient(circle, rgba(255,203,120,.55) 0%, rgba(255,190,96,.22) 42%, ${bg} 76%)` : null,
                ].filter(Boolean).join(", ") || undefined,
                // Water names both layers: the sliding band is oversized so it
                // has somewhere to travel, the surface under it is exactly one
                // tile and never moves.
                backgroundSize: waterImg ? "200% 100%, 100% 100%"
                  : (grassBgImg || artBgImg || personBgImg || propBgImg)
                    ? (glow ? "100% 100%, 100% 100%" : "100% 100%")
                    : undefined,
                // Without this a shifted background wraps and a second copy of
                // the tile slides in from the far edge.
                backgroundRepeat: (grassBgImg || artBgImg || personBgImg || propBgImg) ? "no-repeat" : undefined,
                animationDelay: motion ? `${delay}s` : undefined,
                aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: `min(${(67 / W).toFixed(2)}vw, 17px)`, lineHeight: 1,
                color: ch2 === "G" ? "rgba(0,0,0,.35)" : undefined,
                boxShadow: glow ? "0 0 8px 2px rgba(255,196,92,.45)" : undefined,
                position: (glow || isPlayer) ? "relative" : undefined,
                zIndex: glow ? 2 : isPlayer ? 3 : undefined }}>
                {grassBgImg ? "" : em}
              </div>
            );
          }))}

          {/* Keyed on the warp counter, so it remounts and replays on every
              arrival and never on an ordinary step. */}
          <div key={`arrive:${S.map}:${S.warp || 0}`} className="wl-arrive" aria-hidden="true" />

          {/* The tile just left, in country that holds a print. Keyed on the
              step count so each footfall remounts it and the fade replays;
              positioned exactly like the ranger so it lands where she was
              rather than where she is. */}
          {["alpine", "summit", "desert"].includes(m.zone) && S.px != null && !S.swimming && (
            <div key={`print:${S.step || 0}`} aria-hidden="true" className="wl-print"
              style={{
                position: "absolute", left: 0, top: 0, zIndex: 1,
                width: `${100 / W}%`, height: `${100 / m.rows.length}%`,
                transform: `translate(${S.px * 100}%, ${S.py * 100}%)`,
                display: "flex", alignItems: "flex-end", justifyContent: "center",
              }}>
              <svg viewBox="0 0 32 32" style={{ width: "62%", height: "62%", display: "block" }}>
                {/* Two prints side by side, pressed in rather than laid on, so
                    they take the shade of the ground and never an outline. */}
                <ellipse cx="12" cy="20" rx="2.6" ry="3.4" fill={m.zone === "desert" ? "#8a6f4a" : "#8fa0b5"} />
                <ellipse cx="20" cy="24" rx="2.6" ry="3.4" fill={m.zone === "desert" ? "#8a6f4a" : "#8fa0b5"} />
              </svg>
            </div>
          )}

          {/* Whatever is in the air here. Sits above the tiles and below the
              ranger, so a firefly can pass behind her but never over her face.
              Keyed on map and phase so the set is rebuilt when either changes
              and the specks do not carry their old positions across. */}
          {typeof ambientFor === "function" && !m.dark && (() => {
            const specks = ambientFor(m.zone, phase);
            if (!specks.length) return null;
            return (
              <div key={`amb:${S.map}:${phase}`} aria-hidden="true"
                style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2, overflow: "hidden" }}>
                {specks.map((s) => <div key={s.key} className={s.cls} style={s.style} />)}
              </div>
            );
          })()}

          {/* ---- light on the scene ----
              The tiles themselves are drawn well - blades, mottle, four
              variants each - and the map still read flat, because nothing was
              ever lit. Every cell was painted at exactly the same value from
              corner to corner, so a screen of grass was three hundred equally
              bright squares and the eye had nowhere to travel.

              This is one element over the whole grid: warm light falling from
              the top left, cool shade gathering bottom right, and a vignette
              pulling the corners down. It is deliberately weak - strong enough
              to give the scene a direction, far too weak to hide a tile - and
              it sits under the ranger's z-index so she is never washed over.

              Screen blend for the light, multiply for the shade, so both
              respond to whatever the day-phase filter is doing above rather
              than sitting on top as a grey film at night. */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
            background:
              "radial-gradient(120% 95% at 14% 6%, rgba(255,232,186,.16) 0%, rgba(255,232,186,0) 55%)",
            mixBlendMode: "screen",
          }} />
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
            background:
              "radial-gradient(115% 90% at 88% 96%, rgba(46,32,18,.34) 0%, rgba(46,32,18,0) 58%)," +
              "radial-gradient(150% 120% at 50% 50%, rgba(0,0,0,0) 52%, rgba(24,16,9,.30) 100%)",
            mixBlendMode: "multiply",
          }} />

          {/* The ranger lives above the grid rather than inside a cell.
              Rendered into a tile it had to be destroyed and recreated in a
              different cell on every step, so there was nothing for the browser
              to animate and the character teleported. As a single element
              positioned by transform, one CSS transition carries it between
              tiles and the walk becomes continuous. The duration matches the
              step timer, so running looks like running rather than like the
              same walk played twice. */}
          {/* Keyed on the map and on a warp counter. The transition above is
              what makes walking continuous, and it is also what made arriving
              somewhere look wrong: on a map change x and y jump to the entry
              tile, React reuses this element, and the browser dutifully
              animates the ranger sliding across the new map from wherever they
              had been standing on the old one.

              Changing the key gives the browser a new element with no previous
              position, so arrival is instant while ordinary steps still glide.
              The warp counter is there because no exit currently lands on the
              same map, but one added later would slide across the room. */}
          {typeof Avatar !== "undefined" && (
            <div key={`${S.map}:${S.warp || 0}`} style={{
              position: "absolute", left: 0, top: 0,
              width: `${100 / W}%`, height: `${100 / m.rows.length}%`,
              transform: `translate(${S.x * 100}%, ${S.y * 100}%)`,
              // Exactly the cadence the step loop is running at, read from the
              // same function that drives it. It used to be hardcoded at 100ms
              // against a running step of 85ms, so in the default mode - which
              // is running - every step was cut off fifteen milliseconds early
              // by the next one. The ranger never finished a stride and sat
              // permanently behind the input, which reads as lag however
              // quickly the game actually responds. Holding shift made it
              // worse: 165ms of animation over an 85ms step.
              transition: `transform ${typeof stepDelay === "function" ? stepDelay() : 165}ms linear`,
              pointerEvents: "none", zIndex: 4,
              display: "flex", alignItems: "flex-end", justifyContent: "center",
            }}>
              {/* Keyed on the step count so the animation restarts on every
                  footfall. Without it the ranger slid across the map like a
                  chess piece: the position moved but nothing about her did.
                  The bob is on this inner element rather than the wrapper
                  because the wrapper's transform is already carrying her
                  between tiles. */}
              <div key={S.step || 0}
                className={S.swimming ? undefined : "wl-step"}
                style={{ width: "128%", marginBottom: "-6%" }}>
                <Avatar dir={S.dir || "down"} swimming={S.swimming} size="100%" />
              </div>
            </div>
          )}
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
          <div style={{ background: "#3a342b", borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
            {S.run ? "🏃" : "🚶"}
          </div>
          <button style={btn("#5c5344")} ref={dpadRef(1, 0)}>{tri("right")}</button>
          <div />
          <button style={btn("#5c5344")} ref={dpadRef(0, 1)}>{tri("down")}</button>
          <div />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          <button style={btnS("#2471a3")} onClick={() => setS((p) => ({ ...p, menu: "party" }))}>👥 Team</button>
          <button style={btnS("#a0522d")} onClick={() => setS((p) => ({ ...p, menu: "bag", bagSel: null }))}>🎒 Bag</button>
          <button style={btnS("#27ae60")} onClick={() => setS((p) => ({ ...p, menu: "guide" }))}>📖 Guide</button>
          <button style={btnS("#2d7d5a")} onClick={() => setS((p) => ({ ...p, menu: "sanctuary", boxSel: null, relConfirm: null }))}>🏞️ Sanctuary</button>
          <button style={btnS("#5dade2")} onClick={() => {
            const st = SR.current;
            if (!canSoar(st)) say("🪽 To soar between towns you need Badge 3 and an Aerial teammate in your party.");
            else setS((p) => ({ ...p, menu: "soar" }));
          }}>🪽 Soar</button>
          <button style={btnS("#b7950b")} onClick={() => saveGame(false)}>💾 Save</button>
          <button style={btnS("#8e44ad")} onClick={() => setS((p) => ({ ...p, menu: "types" }))}>⚖️ Types</button>
          <button style={btnS("#c9a227")} onClick={() => setS((p) => ({ ...p, menu: "achievements" }))}>🏆 Achievements</button>
          {S.items.compass > 0 && (
            <button style={btnS(S.compassOn ? "#2d8a6b" : "#7d735f")} onClick={() => setS((p) => ({ ...p, compassOn: !p.compassOn }))}>
              {S.compassOn ? "🧭 Compass: On" : "🧭 Compass: Off"}
            </button>
          )}
          <button style={btnS("#7d735f")} onClick={() => setS((p) => ({ ...p, sound: !p.sound }))}>{S.sound ? "🔊 On" : "🔇 Off"}</button>
          <button style={btnS(S.run ? "#c0651a" : "#7d735f")} onClick={() => setS((p) => ({ ...p, run: !p.run }))}>{S.run ? "🏃 Withdraw" : "🚶 Walk"}</button>
        </div>
      </div>

      {S.storyOf && (() => {
        const a = [...S.party, ...(S.box || [])].find((x) => x.uid === S.storyOf);
        if (!a) return null;
        const ind = individualOf(a.sp);
        const info = INFO[a.sp];
        return (
          <div style={{ position: "fixed", inset: 0, background: "rgba(20,17,13,.93)", zIndex: 63,
            display: "flex", alignItems: "center", justifyContent: "center", padding: 14, overflowY: "auto" }}>
            <div style={{ ...panel, maxWidth: 430, width: "100%", padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <Sprite sp={a.sp} size={64} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#e8c547" }}>{a.indiv || ind.name}</div>
                  <div style={{ fontSize: 11, color: "#c9b88a" }}>
                    {DEX[a.sp].n}{ind.sex ? ` · ${ind.sex === "F" ? "female" : "male"}` : ""}
                  </div>
                  <div style={{ fontSize: 10, color: "#8a7f68" }}>{ind.since}</div>
                </div>
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.6, color: "#e0d4bb", whiteSpace: "pre-line",
                borderLeft: "3px solid #5c5344", paddingLeft: 10, marginBottom: 12 }}>{ind.story}</div>
              {info && (
                <>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#e8c547", marginBottom: 5 }}>
                    About {DEX[a.sp].n}s
                  </div>
                  <div style={{ fontSize: 11, lineHeight: 1.55, color: "#c9b88a" }}>
                    {info.h ? <div>🌍 {info.h}</div> : null}
                    {info.d ? <div>🍽️ {info.d}</div> : null}
                    {info.s && STATUS_NAME[info.s] ? <div>📊 {STATUS_NAME[info.s]}</div> : null}
                    {info.f ? <div style={{ marginTop: 6, color: "#e0d4bb" }}>{info.f}</div> : null}
                  </div>
                </>
              )}
              <button style={{ ...btnS("#7d735f"), width: "100%", marginTop: 12 }}
                onClick={() => setS((p) => ({ ...p, storyOf: null }))}>Close</button>
            </div>
          </div>
        );
      })()}

      {S.pitch && (() => {
        const A = ARCS[S.pitch.arc], st = S;
        const ev = Object.keys(A.evidence);
        const v = S.pitch.verdict;
        return (
          <div style={{ position: "fixed", inset: 0, background: "rgba(20,17,13,.93)", zIndex: 62,
            display: "flex", alignItems: "center", justifyContent: "center", padding: 14, overflowY: "auto" }}>
            <div style={{ ...panel, maxWidth: 440, width: "100%", padding: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#e8c547", marginBottom: 2 }}>
                Prof. Amara Okonjo-Reyes
              </div>
              <div style={{ fontSize: 10, color: "#8a7f68", marginBottom: 10 }}>{A.title}</div>

              {/* What you actually found out. The point of showing this is that
                  the player can see the shape of their own ignorance. */}
              <div style={{ fontSize: 11, color: "#c9b88a", marginBottom: 6 }}>
                What you can tell her ({arcEvidenceCount(st, S.pitch.arc)} of {ev.length}):
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
                {ev.map((k) => {
                  const got = arcFound(st, S.pitch.arc, k);
                  return (
                    <div key={k} style={{ display: "flex", gap: 7, alignItems: "flex-start",
                      fontSize: 11, lineHeight: 1.45, opacity: got ? 1 : .45 }}>
                      <span>{got ? "✔" : "○"}</span>
                      <span>
                        <b style={{ color: got ? "#e8dcc3" : "#8a7f68" }}>{A.evidence[k].label}</b>
                        {got ? <><br /><span style={{ color: "#a89880" }}>{A.evidence[k].detail}</span></>
                             : <><br /><span style={{ color: "#7d735f", fontStyle: "italic" }}>{A.evidence[k].how}</span></>}
                      </span>
                    </div>
                  );
                })}
              </div>

              {!v ? (
                <>
                  <div style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 9 }}>
                    “I have been pitched forty-one projects this year and funded six. What are you asking me to buy?”
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {Object.entries(A.proposals).map(([k, p]) => (
                      <button key={k} style={{ ...btn("#5c5344"), textAlign: "left", fontSize: 11.5,
                        lineHeight: 1.45, padding: "9px 11px", fontWeight: 400 }}
                        onClick={() => makePitch(S.pitch.arc, k)}>
                        <b style={{ color: "#e8dcc3" }}>{p.label}</b><br />
                        <span style={{ color: "#a89880" }}>{p.pitch}</span>
                      </button>
                    ))}
                  </div>
                  <button style={{ ...btnS("#7d735f"), width: "100%", marginTop: 10 }} onClick={closePitch}>
                    Not yet — go back out
                  </button>
                </>
              ) : (
                <>
                  <div style={{ fontSize: 12, lineHeight: 1.55, marginBottom: 10,
                    color: v.funded ? "#8fd694" : "#e8c547" }}>“{v.line}”</div>
                  <button style={{ ...btnS(v.funded ? "#27ae60" : "#7d735f"), width: "100%" }}
                    onClick={closePitch}>
                    {v.funded ? "Go and build it" : "Go and find out"}
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })()}

      {S.exam && (() => {
        const ex = S.exam, q = ex.qs[ex.i], failed = ex.wrong !== null;
        return (
          <div style={{ position: "fixed", inset: 0, background: "rgba(20,17,13,.92)", zIndex: 60,
            display: "flex", alignItems: "center", justifyContent: "center", padding: 14 }}>
            <div style={{ ...panel, maxWidth: 420, width: "100%", padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                <b style={{ fontSize: 13, color: "#e8c547" }}>{ex.title}</b>
                <span style={{ fontSize: 11, color: "#c9b88a" }}>{ex.i + 1} / {ex.qs.length}</span>
              </div>
              {/* progress pips, so five questions feel finite */}
              <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
                {ex.qs.map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 4, borderRadius: 2,
                    background: i < ex.i ? "#27ae60" : i === ex.i ? (failed ? "#c0392b" : "#e8c547") : "#3a342b" }} />
                ))}
              </div>

              {failed && q.subject && DEX[q.subject] && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Sprite sp={q.subject} size={40} />
                  <span style={{ fontSize: 11, color: "#c9b88a" }}>It was the {DEX[q.subject].n}.</span>
                </div>
              )}
              {q.sp && DEX[q.sp] && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Sprite sp={q.sp} size={40} />
                  <span style={{ fontSize: 11, color: "#c9b88a" }}>{DEX[q.sp].n}</span>
                </div>
              )}
              <div style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 10, whiteSpace: "pre-line" }}>{q.q}</div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {q.opts.map((o, i) => {
                  const isWrong = failed && i === ex.wrong;
                  const isRight = failed && o === q.a;
                  return (
                    <button key={i} disabled={failed}
                      style={{ ...btn(isWrong ? "#c0392b" : isRight ? "#27ae60" : "#5c5344"),
                        textAlign: "left", fontSize: q.long ? 11 : 12, lineHeight: 1.45,
                        padding: "9px 11px", fontWeight: 400,
                        opacity: failed && !isWrong && !isRight ? .45 : 1 }}
                      onClick={() => answerExam(i)}>{o}</button>
                  );
                })}
              </div>

              {failed ? (
                <div style={{ marginTop: 10, borderTop: "1px solid #5c5344", paddingTop: 9 }}>
                  <div style={{ fontSize: 11, color: "#e8c547", marginBottom: 8 }}>
                    Not quite — the exam ends here. Everything asked is in your Field Guide, under the
                    animals of this stretch of country. Read up and come back; the questions will be different.
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button style={{ ...btnS("#27ae60"), flex: 1 }} onClick={retryExam}>🔄 Try again</button>
                    <button style={{ ...btnS("#7d735f"), flex: 1 }} onClick={closeExam}>📖 Go read</button>
                  </div>
                </div>
              ) : (
                <button style={{ ...btnS("#7d735f"), width: "100%", marginTop: 10 }} onClick={closeExam}>
                  Step away
                </button>
              )}
            </div>
          </div>
        );
      })()}

      {S.critQuiz && (() => {
        const cq = S.critQuiz;
        const tier = CRIT_TIERS.find((t) => t.id === cq.tierId);
        if (!tier) return null;
        if (cq.done) {
          const payout = cq.correct * tier.reward;
          return (
            <div style={{ position: "fixed", inset: 0, background: "rgba(20,17,13,.92)", zIndex: 60,
              display: "flex", alignItems: "center", justifyContent: "center", padding: 14 }}>
              <div style={{ ...panel, maxWidth: 420, width: "100%", padding: 14, textAlign: "center" }}>
                <b style={{ fontSize: 14, color: "#e8c547" }}>{tier.name} — Assessment Complete</b>
                <div style={{ fontSize: 28, margin: "14px 0 4px" }}>{cq.correct === cq.qIdx.length ? "🎓" : "📋"}</div>
                <div style={{ fontSize: 13, marginBottom: 4 }}>{cq.correct} of {cq.qIdx.length} correct</div>
                <div style={{ fontSize: 16, color: "#e8c547", fontWeight: 700, marginBottom: 12 }}>₡{payout} in trade shells</div>
                <button style={{ ...btnS("#5c8a3a"), width: "100%" }} onClick={collectCritQuiz}>Collect</button>
              </div>
            </div>
          );
        }
        const q = tier.qs[cq.qIdx[cq.i]];
        const answered = cq.picked !== null;
        return (
          <div style={{ position: "fixed", inset: 0, background: "rgba(20,17,13,.92)", zIndex: 60,
            display: "flex", alignItems: "center", justifyContent: "center", padding: 14 }}>
            <div style={{ ...panel, maxWidth: 420, width: "100%", padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                <b style={{ fontSize: 13, color: "#e8c547" }}>{tier.name}</b>
                <span style={{ fontSize: 11, color: "#c9b88a" }}>{cq.i + 1} / {cq.qIdx.length} · ₡{cq.correct * tier.reward} so far</span>
              </div>
              <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
                {cq.qIdx.map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 4, borderRadius: 2,
                    background: i < cq.i ? "#27ae60" : i === cq.i ? "#e8c547" : "#3a342b" }} />
                ))}
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 10, whiteSpace: "pre-line" }}>{q.q}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {cq.order.map((origIdx, i) => {
                  const o = q.opts[origIdx];
                  const isPicked = answered && i === cq.picked;
                  const isRight = answered && origIdx === q.a;
                  return (
                    <button key={i} disabled={answered}
                      style={{ ...btn(isPicked && !isRight ? "#c0392b" : isRight && answered ? "#27ae60" : "#5c5344"),
                        textAlign: "left", fontSize: 11.5, lineHeight: 1.45, padding: "9px 11px", fontWeight: 400,
                        opacity: answered && !isPicked && !isRight ? .45 : 1 }}
                      onClick={() => answerCritQuiz(i)}>{o}</button>
                  );
                })}
              </div>
              {answered && (
                <div style={{ marginTop: 10, borderTop: "1px solid #5c5344", paddingTop: 9 }}>
                  <div style={{ fontSize: 11, color: cq.order[cq.picked] === q.a ? "#8fd94a" : "#e8853a", marginBottom: 8 }}>
                    {cq.order[cq.picked] === q.a ? "✅ Correct. " : "❌ Not quite. "}{q.explain}
                  </div>
                  <button style={{ ...btnS("#5c8a3a"), width: "100%" }} onClick={nextCritQuiz}>
                    {cq.i + 1 >= cq.qIdx.length ? "See results" : "Next question"}
                  </button>
                </div>
              )}
              {!answered && (
                <button style={{ ...btnS("#7d735f"), width: "100%", marginTop: 10 }} onClick={closeCritQuiz}>
                  Step away
                </button>
              )}
            </div>
          </div>
        );
      })()}

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
            {S.menu === "bag" && (() => {
              // Two steps: pick the item, then pick who it is for. Doing it the
              // other way round means opening an animal and finding out you own
              // nothing that would help it.
              const held = Object.keys(FIELD_ITEMS).filter((k) => (S.items[k] ?? 0) > 0);
              const sel = S.bagSel;
              return (
                <div>
                  <b>🎒 Bag</b> <span style={{ fontSize: 11, color: "#c9b88a" }}>
                    {sel ? `— ${FIELD_ITEMS[sel].n} on whom?` : "— tap something to use it"}</span>
                  {!held.length && (
                    <div style={{ fontSize: 12, color: "#c9b88a", marginTop: 10 }}>
                      Nothing usable in here yet. Berries and cures are sold at any Trading Post.
                    </div>
                  )}
                  {!sel && held.map((k) => (
                    <div key={k} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 4px", borderBottom: "1px solid #5c5344", fontSize: 12 }}>
                      <div style={{ flex: 1, fontWeight: 700 }}>{FIELD_ITEMS[k].n}
                        <span style={{ color: "#c9b88a", fontWeight: 400 }}> ×{S.items[k]}</span></div>
                      <button
                        disabled={!S.party.some((a) => fieldItemUseful(k, a))}
                        style={{ ...btn("#5c8a3a"), padding: "6px 12px", fontSize: 12,
                          opacity: S.party.some((a) => fieldItemUseful(k, a)) ? 1 : 0.4 }}
                        onClick={() => setS((p) => ({ ...p, bagSel: k }))}>Use</button>
                    </div>
                  ))}
                  {sel && S.party.map((a, i) => {
                    const ok = fieldItemUseful(sel, a);
                    return (
                      <button key={i} disabled={!ok}
                        style={{ ...btn(ok ? "#2471a3" : "#5c5344"), width: "100%", textAlign: "left",
                          padding: "8px 10px", marginTop: 6, fontSize: 12, opacity: ok ? 1 : 0.45 }}
                        onClick={() => { useFieldItem(sel, i); setS((p) => ({ ...p, menu: null, bagSel: null })); }}>
                        {a.indiv ? `${a.indiv} the ${DEX[a.sp].n}` : DEX[a.sp].n} — Lv{a.lvl} · {a.hp}/{a.maxHp} HP
                        {a.hp <= 0 ? " · worn out" : ""}
                        {a.psn ? " ☠️" : ""}{(a.slp ?? 0) > 0 ? " 💤" : ""}{(a.fear ?? 0) > 0 ? " 😨" : ""}
                        {(a.chill ?? 0) > 0 ? " 🧊" : ""}{(a.brn ?? 0) > 0 ? " 🔥" : ""}
                        {!ok ? " · no use for this" : ""}
                      </button>
                    );
                  })}
                  {sel && (
                    <button style={{ ...btn("#7d735f"), marginTop: 8, padding: "6px 12px", fontSize: 12 }}
                      onClick={() => setS((p) => ({ ...p, bagSel: null }))}>← Back</button>
                  )}
                </div>
              );
            })()}
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
                      <div style={{ fontSize: 13, fontWeight: 700 }}>
                        {a.indiv || DEX[a.sp].n}
                        {a.indiv ? <span style={{ fontWeight: 400, fontSize: 10, color: "#8a9a6a" }}> · {DEX[a.sp].n}</span> : null}
                        <span style={{ color: "#c9b88a" }}> Lv {a.lvl}</span> {i === 0 ? "⭐" : ""}
                      </div>
                      <div style={{ margin: "3px 0" }}>{DEX[a.sp].t.map((t) => <Chip key={t} t={t} small />)}</div>
                      <HPBar hp={a.hp} max={a.maxHp} />
                      <div style={{ fontSize: 10, color: "#c9b88a" }}>{a.hp}/{a.maxHp} HP · ATK {a.atk} DEF {a.def} SPD {a.spd}{DEX[a.sp].grows ? ` · grows up at Lv ${DEX[a.sp].grows.at}` : ""}</div>
                      <div style={{ fontSize: 10, color: "#a89a7d" }}>{a.moves.map((k) => MOVES[k].n).join(" · ")}</div>
                      {/* Their history was written and then had nowhere to be
                          read. Every animal you work with can now be asked
                          about, from the screen where you already look at them. */}
                      <button style={{ background: "#3a342b", color: "#c9b88a", border: "1px solid #5c5344",
                        borderRadius: 9, padding: "4px 9px", fontFamily: "inherit", fontSize: 10,
                        cursor: "pointer", marginTop: 5 }}
                        onClick={() => setS((p) => ({ ...p, storyOf: a.uid }))}>
                        📖 Their story
                      </button>
                    </div>
                  </div>
                ))}
                {S.box.length > 0 && (
                  <div style={{ marginTop: 12, borderTop: "1px solid #5c5344", paddingTop: 10 }}>
                    <button style={{ ...btn("#2d7d5a"), width: "100%", fontSize: 13 }}
                      onClick={() => setS((p) => ({ ...p, menu: "sanctuary", boxSel: null }))}>
                      🏞️ Sanctuary — {S.box.length} in care
                    </button>
                  </div>
                )}
                {S.party.length > 1 && (
                  <div style={{ fontSize: 10, color: "#a89a7d", marginTop: 8 }}>
                    Send a teammate to the Sanctuary from inside it.
                  </div>
                )}
              </div>
            )}
            {S.menu === "sanctuary" && (() => {
              // Enclosures are now a list of type-and-page keys rather than a
              // run of numbers, so the page index is a position in that list.
              const list = boxList(S.box);
              const pageIdx = Math.min(S.boxPage || 0, list.length - 1);
              const page = list[pageIdx];
              const nBoxes = list.length;
              const here = S.box.filter((a) => boxOf(a) === page);
              // What is in hand may have been picked up from the team as well
              // as from an enclosure, so both are searched.
              const sel = S.box.find((a) => a.uid === S.boxSel) || S.party.find((a) => a.uid === S.boxSel);
              const selInParty = !!sel && S.party.some((a) => a.uid === sel.uid);
              const go = (d) => setS((p) => ({ ...p, boxPage: ((pageIdx + d) % nBoxes + nBoxes) % nBoxes, relConfirm: null }));
              // Jump straight to a habitat rather than paging through nine of
              // them. With a large sanctuary the arrows alone are a long walk.
              // Deliberately does not clear boxSel. Walking to another
              // enclosure while carrying an animal is how you move an animal to
              // another enclosure; dropping it at the door made the strip look
              // like navigation and behave like a trapdoor.
              const jump = (t) => setS((p) => ({ ...p, boxPage: Math.max(0, list.indexOf(mkBoxKey(t, 0))), relConfirm: null }));
              const moveTo = (dest) => setS((p) => ({
                ...p, relConfirm: null,
                box: p.box.map((a) => (a.uid === sel.uid
                  ? { ...a, box: dest, slot: Math.max(0, freeSlot(p.box.filter((x) => x.uid !== a.uid), dest)) }
                  : a)),
              }));
              return (
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <b>🏞️ Sanctuary</b>
                    <span style={{ fontSize: 11, color: "#c9b88a" }}>{S.box.length} in care</span>
                  </div>
                  {S.box.some((a) => boxType(boxOf(a)) !== typeKeyFor(a.sp)) && (
                    <button style={{ ...btnS("#2d7d5a"), width: "100%", marginTop: 8 }}
                      onClick={() => setS((p) => ({ ...p, box: packSlots(sortByHabitat(p.box)), boxSel: null, relConfirm: null }))}>
                      🧭 Rehouse everyone by habitat
                    </button>
                  )}
                  {/* Orders each enclosure by level without moving anyone out of
                      it, so this and the rehouse above compose rather than
                      fight: rehouse decides which room, this decides the order
                      within the room. */}
                  {S.box.length > 1 && (
                    <button style={{ ...btnS("#4a7ba7"), width: "100%", marginTop: 6 }}
                      onClick={() => setS((p) => ({ ...p, box: sortByLevel(p.box), boxSel: null, relConfirm: null }))}>
                      🔢 Order each enclosure by level
                    </button>
                  )}

                  <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "10px 0 8px" }}>
                    <button style={{ ...btn("#5c5344"), padding: "6px 12px", fontSize: 13 }} onClick={() => go(-1)}>◀</button>
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#e8c547" }}>{boxNameFor(page)}</div>
                      <div style={{ fontSize: 10, color: "#c9b88a" }}>
                        {boxType(page)} · {here.length}/{BOX_SIZE}
                      </div>
                    </div>
                    <button style={{ ...btn("#5c5344"), padding: "6px 12px", fontSize: 13 }} onClick={() => go(1)}>▶</button>
                  </div>

                  {/* Nine habitats, each with however many pages it needs. The
                      strip is the way to reach one directly; the arrows walk
                      through the pages within and between them. */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 8 }}>
                    {BOX_TYPES.map((t) => {
                      const n = S.box.filter((a) => boxType(boxOf(a)) === t).length;
                      const pages = list.filter((k) => boxType(k) === t).length;
                      const on = boxType(page) === t;
                      return (
                        <button key={t} onClick={() => jump(t)}
                          style={{ ...btn(on ? "#2d7d5a" : "#3a342b"), padding: "3px 7px", fontSize: 10,
                            border: on ? "1px solid #e8c547" : "1px solid #5c5344", opacity: n ? 1 : .5 }}>
                          {t} {n}{pages > 1 ? ` · ${pages}p` : ""}
                        </button>
                      );
                    })}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
                    {Array.from({ length: BOX_SIZE }).map((_, i) => {
                      const a = inBoxAt(S.box, page, i);
                      const on = a && a.uid === S.boxSel;
                      const target = !!sel && !on;
                      return (
                        <div key={i}
                          onClick={() => setS((p) => {
                            const held = p.box.find((x) => x.uid === p.boxSel)
                              || p.party.find((x) => x.uid === p.boxSel);
                            // Nothing in hand: pick this one up.
                            if (!held) return a ? { ...p, boxSel: a.uid, relConfirm: null } : p;
                            // Tapping the one you are holding puts it back down.
                            if (held.uid === (a && a.uid)) return { ...p, boxSel: null, relConfirm: null };
                            // Holding one from the team: this is a deposit.
                            if (p.party.some((x) => x.uid === held.uid)) {
                              if (p.party.length <= 1) return p;
                              const displaced = a || null;
                              return {
                                ...p, relConfirm: null, boxSel: null,
                                party: displaced
                                  ? p.party.map((x) => (x.uid === held.uid ? { ...displaced, box: undefined, slot: undefined } : x))
                                  : p.party.filter((x) => x.uid !== held.uid),
                                box: [
                                  ...p.box.filter((x) => !displaced || x.uid !== displaced.uid),
                                  { ...held, box: page, slot: i },
                                ],
                              };
                            }
                            // Otherwise both are in the sanctuary: move or swap.
                            // Setting one down lets go of it, the way putting a
                            // thing on a shelf means you are no longer holding it.
                            return { ...p, box: moveToSlot(p.box, held.uid, page, i), boxSel: null, relConfirm: null };
                          })}
                          style={{ aspectRatio: "1", borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center",
                            border: on ? "2px solid #e8c547" : target ? "1px dashed #8a7f68" : "1px dashed #5c5344",
                            background: on ? "rgba(232,197,71,.16)" : a ? "rgba(255,255,255,.06)" : target ? "rgba(255,255,255,.03)" : "transparent",
                            cursor: a || sel ? "pointer" : "default" }}>
                          {a && <Sprite sp={a.sp} size={30} />}
                        </div>
                      );
                    })}
                  </div>

                  {sel && (
                    <div style={{ fontSize: 10, color: "#e8c547", marginTop: 6, textAlign: "center" }}>
                      Holding {sel.indiv || DEX[sel.sp].n} — tap a place to set it down, or tap it again to stop.
                    </div>
                  )}

                  {sel && (
                    <div style={{ ...panel, marginTop: 10, padding: 10 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <Sprite sp={sel.sp} size={44} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>{DEX[sel.sp].n} <span style={{ color: "#c9b88a" }}>Lv {sel.lvl}</span> {sel.sex === "F" ? "♀" : "♂"}</div>
                          <div style={{ margin: "3px 0" }}>{DEX[sel.sp].t.map((t) => <Chip key={t} t={t} small />)}</div>
                          <div style={{ fontSize: 10, color: "#c9b88a" }}>{sel.hp}/{sel.maxHp} HP · ATK {sel.atk} DEF {sel.def} SPD {sel.spd}</div>
                          {NATURES[sel.nat] && (
                            <div style={{ fontSize: 10, color: "#e8c547" }}>
                              {NATURES[sel.nat].n}
                              <span style={{ color: "#a89a7d" }}> — {NATURES[sel.nat].d}
                                {NATURES[sel.nat].up ? ` (+${NATURES[sel.nat].up.toUpperCase()}, −${NATURES[sel.nat].dn.toUpperCase()})` : " (no trade)"}
                              </span>
                            </div>
                          )}
                          <div style={{ fontSize: 10, color: "#a89a7d" }}>{sel.moves.map((k) => MOVES[k].n).join(" · ")}</div>
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
                        <button style={{ ...btnS(S.party.length < 6 ? "#27ae60" : "#5c5344"), opacity: S.party.length < 6 ? 1 : .5 }}
                          onClick={() => { if (S.party.length >= 6) return;
                            setS((p) => ({ ...p,
                              party: [...p.party, { ...p.box.find((a) => a.uid === sel.uid), box: undefined, slot: undefined }],
                              box: p.box.filter((a) => a.uid !== sel.uid), boxSel: null, relConfirm: null })); }}>
                          {S.party.length < 6 ? "➕ To Team" : "Team full"}
                        </button>
                        <button style={btnS("#7d735f")} onClick={() => moveTo(list[(pageIdx + 1) % nBoxes])}>📦 Move on ▶</button>
                      </div>

                      {S.relConfirm === sel.uid ? (
                        <div style={{ marginTop: 8 }}>
                          <div style={{ fontSize: 11, color: "#e8c547", marginBottom: 6 }}>
                            Release {DEX[sel.sp].n} back to the wild? It leaves your care for good — the Field Guide entry stays.
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                            <button style={btnS("#c0392b")} onClick={() => setS((p) => ({
                              ...p, box: p.box.filter((a) => a.uid !== sel.uid), boxSel: null, relConfirm: null }))}>🕊️ Release</button>
                            <button style={btnS("#7d735f")} onClick={() => setS((p) => ({ ...p, relConfirm: null }))}>Keep</button>
                          </div>
                        </div>
                      ) : (
                        <button style={{ ...btnS("#8a4b3a"), width: "100%", marginTop: 6 }}
                          onClick={() => setS((p) => ({ ...p, relConfirm: sel.uid }))}>🕊️ Release…</button>
                      )}
                    </div>
                  )}

                  <div style={{ marginTop: 12, borderTop: "1px solid #5c5344", paddingTop: 8 }}>
                    <div style={{ fontSize: 11, color: "#c9b88a", marginBottom: 5 }}>
                      {sel
                        ? "Your team — tap a place to set it down here"
                        : S.party.length > 1
                          ? "Your team — tap one to pick it up"
                          : "Your team — you must keep at least one companion"}
                    </div>
                    <div data-team-row="1" style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {S.party.map((a, idx) => {
                        const on = a.uid === S.boxSel;
                        const target = !!sel && !on;
                        return (
                          <div key={a.uid}
                            onClick={() => setS((p) => {
                              const held = p.box.find((x) => x.uid === p.boxSel)
                                || p.party.find((x) => x.uid === p.boxSel);
                              if (!held) {
                                if (p.party.length <= 1) return p;
                                return { ...p, boxSel: a.uid, relConfirm: null };
                              }
                              if (held.uid === a.uid) return { ...p, boxSel: null, relConfirm: null };
                              // Both in the team: reorder. Marching order is the
                              // order they go out in, so it is worth being able
                              // to set it.
                              if (p.party.some((x) => x.uid === held.uid)) {
                                const party = [...p.party];
                                const i = party.findIndex((x) => x.uid === held.uid);
                                const j = party.findIndex((x) => x.uid === a.uid);
                                [party[i], party[j]] = [party[j], party[i]];
                                return { ...p, party, boxSel: null, relConfirm: null };
                              }
                              // Holding one from the sanctuary: swap it in for
                              // this team member, who takes its place.
                              return {
                                ...p, relConfirm: null, boxSel: null,
                                party: p.party.map((x) => (x.uid === a.uid ? { ...held, box: undefined, slot: undefined } : x)),
                                box: p.box.map((x) => (x.uid === held.uid
                                  ? { ...a, box: boxOf(held), slot: slotOf(held) } : x)),
                              };
                            })}
                            style={{ ...panel, padding: "4px 7px", fontSize: 11, display: "flex", alignItems: "center", gap: 5,
                              border: on ? "2px solid #e8c547" : target ? "1px dashed #8a7f68" : undefined,
                              background: on ? "rgba(232,197,71,.16)" : undefined,
                              cursor: (sel || S.party.length > 1) ? "pointer" : "default",
                              opacity: (sel || S.party.length > 1) ? 1 : .5 }}>
                            <span style={{ fontSize: 9, color: "#8a7f68" }}>{idx + 1}</span>
                            <Sprite sp={a.sp} size={20} /> {a.indiv || DEX[a.sp].n} Lv{a.lvl}
                          </div>
                        );
                      })}
                      {sel && !selInParty && S.party.length < 6 && (
                        <div onClick={() => setS((p) => ({
                          ...p, boxSel: null, relConfirm: null,
                          party: [...p.party, { ...sel, box: undefined, slot: undefined }],
                          box: p.box.filter((x) => x.uid !== sel.uid),
                        }))}
                          style={{ ...panel, padding: "4px 10px", fontSize: 11, display: "flex", alignItems: "center",
                            border: "1px dashed #8a7f68", cursor: "pointer", color: "#c9b88a" }}>
                          ＋ empty place
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
            {S.menu === "guide" && (
              <div>
                <b>📖 Field Guide</b>
                <div style={{ fontSize: 11, color: "#c9b88a", marginBottom: 8 }}>
                  Seen {Object.values(S.dex).filter((v) => v >= 1).length} · Befriended {Object.values(S.dex).filter((v) => v === 2).length} of {Object.keys(DEX).length}
                </div>

                {/* The record, saved out as something that is not a save file.
                    Lives here rather than on the title screen because this is
                    the screen it is a record of, and because it has to be
                    reachable mid-game without stopping to save. */}
                {typeof fieldRecord !== "undefined" && (
                  <div style={{ marginBottom: 10 }}>
                    <button style={{ ...btnS("#4a7ba7"), width: "100%" }}
                      onClick={() => setS((p) => ({ ...p, recPanel: !p.recPanel }))}>
                      🗒️ Save my field record
                    </button>
                    {S.recPanel && (() => {
                      const rec = fieldRecord(S);
                      const text = fieldRecordText(S);
                      return (
                        <div style={{ ...panel, marginTop: 6, padding: 8 }}>
                          <div style={{ fontSize: 10, color: "#c9b88a", marginBottom: 6 }}>
                            {rec.totals.befriended} befriended of {rec.totals.speciesInGuide} ·
                            {" "}{rec.totals.arcsResolved} pieces of work finished.
                            <br />
                            A plain record of what you have met and learned, with no save
                            data in it. Keep it somewhere that is not this phone.
                          </div>
                          <textarea readOnly value={text}
                            onFocus={(e) => e.target.select()}
                            style={{ width: "100%", height: 90, fontSize: 9, fontFamily: "monospace",
                              background: "#1e1b17", color: "#c9b88a", border: "1px solid #5c5344",
                              borderRadius: 6, padding: 6 }} />
                          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                            <button style={{ ...btnS("#2d7d5a"), flex: 1 }}
                              onClick={() => { if (saveFieldRecord(S)) SFX.run(); }}>
                              ⇩ Download
                            </button>
                            <button style={{ ...btnS("#7d735f"), flex: 1 }}
                              onClick={() => {
                                try { navigator.clipboard.writeText(text); SFX.run(); } catch (e) {}
                              }}>
                              ⧉ Copy
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
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
                          <div style={{ background: "#2e2921", borderRadius: 15, padding: 4 }}><Sprite sp={sp} size={72} /></div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 17, fontWeight: 700, color: "#f2ede0" }}>{d.n}</div>
                            <div style={{ margin: "4px 0" }}>{d.t.map((t) => <Chip key={t} t={t} small />)}</div>
                            {iu && <div style={{ display: "inline-block", fontSize: 10, fontWeight: 700, color: "#1a1713", background: iu[1], borderRadius: 4, padding: "1px 6px" }}>{st} · {iu[0]}</div>}
                          </div>
                        </div>
                        {/* How this species is doing in THIS world, as opposed
                            to everything else on this card, which is true of the
                            animal everywhere and always.

                            Without this the per-run ecology is invisible: a
                            player meeting a scarce animal has no way to tell
                            scarce from unlucky, and a system you cannot see is
                            indistinguishable from the game being broken. Held
                            to species that actually live somewhere in the
                            world, so a fossil or a myth is never told it is
                            having a quiet season. */}
                        {typeof ecologyNote === "function" && spots.length > 0 && (() => {
                          const note = ecologyNote(S.runSeed, sp);
                          if (!note) return null;
                          return (
                            <div style={{ marginTop: 10, background: "#26221c", border: "1px solid #4a4438",
                              borderLeft: "3px solid #7fa6c2", borderRadius: 4, padding: "7px 9px",
                              fontSize: 11.5, lineHeight: 1.45, color: "#cfc6b6" }}>
                              <b style={{ color: "#7fa6c2" }}>This season </b>{note}
                            </div>
                          );
                        })()}
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
                          <div style={{ marginTop: 10, fontSize: 11.5, color: "#8a7f68", lineHeight: 1.5, background: "#2e2921", borderRadius: 11, padding: 8 }}>
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
                {[["🌍 Wildlands", (sp) => !DEX[sp].t.includes("Fossil") && !DEX[sp].t.includes("Mythic") && DEX[sp].t[0] !== "Bug" && !DEX[sp].mem], ["🐝 Small Life", (sp) => DEX[sp].t[0] === "Bug" && !DEX[sp].mem], ["🦴 Fossils", (sp) => DEX[sp].t.includes("Fossil")], ["🌀 Myths", (sp) => DEX[sp].t.includes("Mythic")], ["🕯️ The Vigil", (sp) => DEX[sp].mem]].map(([label, fits]) => {
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
                              style={{ background: "#2e2921", borderRadius: 13, padding: "6px 2px", textAlign: "center", cursor: v > 0 ? "pointer" : "default", border: `1px solid ${DEX[sp].legend && v > 0 ? "#e8c547" : v === 2 ? TYPE_COLORS[DEX[sp].t[0]] : "#4a4438"}` }}>
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
                {(() => {
                  const locked = SHOP_STOCK.filter((it) => (S.badges ?? 0) < it.badge);
                  if (!locked.length) return null;
                  const next = locked.reduce((a2, b2) => (a2.badge <= b2.badge ? a2 : b2));
                  return (
                    <div style={{ fontSize: 10, color: "#8a7f68", marginTop: 3 }}>
                      The good stock travels with the badges — {next.n} arrives at Badge {next.badge}.
                    </div>
                  );
                })()}
                {SHOP_STOCK.filter((it) => (S.badges ?? 0) >= it.badge)
                  .concat(S.items.lantern ? [] : [{ key: "lantern", n: "🏮 Lantern", price: LANTERN_PRICE, badge: 0, desc: "Lights dark caves — permanent" }])
                  .map((it) => (
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
                    <button
                      disabled={(S.items[it.key] ?? 0) <= 0}
                      style={{ ...btn("#7d735f"), padding: "8px 10px", fontSize: 11, opacity: (S.items[it.key] ?? 0) <= 0 ? 0.35 : 1 }}
                      onClick={() => { SFX.buy(); setS((p) => ({ ...p, items: { ...p.items, coins: (p.items.coins ?? 0) + sellPrice(it.key), [it.key]: Math.max(0, (p.items[it.key] ?? 0) - 1) } })); }}>
                      Sell ₡{sellPrice(it.key)}</button>
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
            {S.menu === "achievements" && (
              <div>
                <b>🏆 Achievements</b>
                <div style={{ fontSize: 11, color: "#c9b88a", marginBottom: 8 }}>
                  {ACHIEVEMENTS.filter((a) => S.achv?.[a.id]).length} of {ACHIEVEMENTS.length} unlocked
                </div>
                {["gold", "silver", "bronze"].map((tier) => {
                  const list = ACHIEVEMENTS.filter((a) => a.tier === tier);
                  if (!list.length) return null;
                  const tierColor = tier === "gold" ? "#e8c547" : tier === "silver" ? "#c9d4de" : "#c98a5c";
                  return (
                    <div key={tier} style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: tierColor, margin: "6px 0 4px", textTransform: "uppercase" }}>{tier}</div>
                      {list.map((a) => {
                        const got = !!S.achv?.[a.id];
                        return (
                          <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 4px", borderBottom: "1px solid #3a342b", opacity: got ? 1 : 0.5 }}>
                            <div style={{ fontSize: 20, width: 26, textAlign: "center" }}>{got ? a.icon : "🔒"}</div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontWeight: 700, fontSize: 12, color: got ? tierColor : "#c9b88a" }}>{a.name}</div>
                              <div style={{ fontSize: 10, color: "#8a7f68" }}>{a.desc}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
            {S.menu === "quizhouse" && (
              <div>
                <b>🔎 The Naturalist's Archive</b>
                <div style={{ fontSize: 11, color: "#c9b88a", marginBottom: 8 }}>
                  Five reasoning questions per tier. Right answers pay out on the spot — a wrong one just doesn't, so there's no penalty for trying.
                </div>
                {(() => {
                  const locked = CRIT_TIERS.filter((t) => (S.badges ?? 0) < t.badge);
                  if (!locked.length) return null;
                  const next = locked.reduce((a2, b2) => (a2.badge <= b2.badge ? a2 : b2));
                  return (
                    <div style={{ fontSize: 10, color: "#8a7f68", marginBottom: 6 }}>
                      {next.name} opens at Badge {next.badge}.
                    </div>
                  );
                })()}
                {CRIT_TIERS.filter((t) => (S.badges ?? 0) >= t.badge).map((t) => (
                  <div key={t.id} style={{ padding: "8px 4px", borderBottom: "1px solid #5c5344" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontWeight: 700, fontSize: 12 }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "#e8c547" }}>up to ₡{t.reward * 5}</div>
                    </div>
                    <div style={{ fontSize: 10, color: "#c9b88a", margin: "3px 0 6px" }}>{t.blurb}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 10, color: "#8a7f68" }}>
                        Passed {S.quizWins?.[t.id] || 0}×{S.quizPerfect?.[t.id] ? " · perfect run ★" : ""}
                      </span>
                      <button style={btn("#5c8a3a")} onClick={() => startCritQuiz(t.id)}>Sit the assessment</button>
                    </div>
                  </div>
                ))}
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
              <button style={{ ...btn("#7d735f"), width: "100%", marginTop: 12 }} onClick={() => setS((p) => ({ ...p, menu: null, pick: null, bagSel: null }))}>Close</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


/* ---------- MOUNT ---------- */
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Wildlands));
