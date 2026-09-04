// ---------- Part 46: THE RANGER ----------
// The player was the emoji 🚶. Against a flat colour square that was legible;
// against drawn grass it vanishes, because it is a small dark figure on a busy
// dark-green field with no outline to separate it.
//
// Two things fix that, and both matter:
//
// 1. CONTRAST. The sprite carries a pale outline and a soft dark halo behind
//    it, so there is always a value break between the ranger and whatever is
//    underneath. That is what lets a small figure sit on top of texture without
//    dissolving into it, and it is why the character in a Pokémon route reads
//    at a glance on grass, sand or stone alike.
//
// 2. FACING. The ranger turns to face the way you last moved. It costs one
//    piece of state and it is most of what makes a figure feel like a person
//    rather than a token.

const AV_SKIN = "#e8c9a5";
const AV_HAT = "#c0392b";
const AV_COAT = "#3d6b8a";
const AV_TROUSER = "#3a3f48";
const AV_BOOT = "#2a2620";
const AV_OUTLINE = "#f6f2e8";
const AV_HAIR = "#4a3628";

// The halo is drawn first and slightly larger than the figure, so it reads as a
// soft shadow on the ground rather than an outline in the air.
const avHalo = () => (
  <ellipse cx="16" cy="27" rx="9" ry="3.2" fill="#000" opacity=".28" />
);

// Facing down: the default, and the one that reads most clearly as a person.
const avDown = (er) => (
  <g>
    {avHalo()}
    <path d="M11,26 L11,20 L21,20 L21,26 Z" fill={AV_TROUSER} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <rect x="10.5" y="25" width="4.5" height="2.6" rx="1" fill={AV_BOOT} stroke={AV_OUTLINE} strokeWidth=".8" />
    <rect x="17" y="25" width="4.5" height="2.6" rx="1" fill={AV_BOOT} stroke={AV_OUTLINE} strokeWidth=".8" />
    <path d="M10,20 Q10,12 16,12 Q22,12 22,20 Z" fill={AV_COAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <circle cx="10.4" cy="17" r="2" fill={AV_SKIN} stroke={AV_OUTLINE} strokeWidth=".8" />
    <circle cx="21.6" cy="17" r="2" fill={AV_SKIN} stroke={AV_OUTLINE} strokeWidth=".8" />
    <circle cx="16" cy="9" r="5.6" fill={AV_SKIN} stroke={AV_OUTLINE} strokeWidth="1" />
    <path d="M10.6,7.6 Q16,1.6 21.4,7.6 Q16,6 10.6,7.6 Z" fill={AV_HAIR} />
    {/* the hat is the single loudest thing on the sprite, on purpose */}
    <path d="M9.4,7 Q16,0.6 22.6,7 Q16,4.6 9.4,7 Z" fill={AV_HAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <path d="M8,7 L24,7 Q24,9 16,9 Q8,9 8,7 Z" fill={AV_HAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <circle cx="13.8" cy="10.6" r={1.15 * er} fill="#2a2620" />
    <circle cx="18.2" cy="10.6" r={1.15 * er} fill="#2a2620" />
  </g>
);

// Facing up: the back of the head and hat, no face.
const avUp = (er) => (
  <g>
    {avHalo()}
    <path d="M11,26 L11,20 L21,20 L21,26 Z" fill={AV_TROUSER} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <rect x="10.5" y="25" width="4.5" height="2.6" rx="1" fill={AV_BOOT} stroke={AV_OUTLINE} strokeWidth=".8" />
    <rect x="17" y="25" width="4.5" height="2.6" rx="1" fill={AV_BOOT} stroke={AV_OUTLINE} strokeWidth=".8" />
    <path d="M10,20 Q10,12 16,12 Q22,12 22,20 Z" fill={AV_COAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <circle cx="10.4" cy="17" r="2" fill={AV_SKIN} stroke={AV_OUTLINE} strokeWidth=".8" />
    <circle cx="21.6" cy="17" r="2" fill={AV_SKIN} stroke={AV_OUTLINE} strokeWidth=".8" />
    <circle cx="16" cy="9" r="5.6" fill={AV_HAIR} stroke={AV_OUTLINE} strokeWidth="1" />
    <path d="M9.4,7 Q16,0.6 22.6,7 Q16,4.6 9.4,7 Z" fill={AV_HAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <path d="M8,7 L24,7 Q24,9 16,9 Q8,9 8,7 Z" fill={AV_HAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
  </g>
);

// Facing sideways: narrower, one visible arm, one eye. Mirrored for the other way.
const avSide = (er) => (
  <g>
    {avHalo()}
    <path d="M12.4,26 L12.4,20 L19.6,20 L19.6,26 Z" fill={AV_TROUSER} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <rect x="12" y="25" width="5.4" height="2.6" rx="1" fill={AV_BOOT} stroke={AV_OUTLINE} strokeWidth=".8" />
    <path d="M11.6,20 Q11.6,12 16,12 Q20.4,12 20.4,20 Z" fill={AV_COAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <circle cx="19.4" cy="17.4" r="2" fill={AV_SKIN} stroke={AV_OUTLINE} strokeWidth=".8" />
    <circle cx="16" cy="9" r="5.4" fill={AV_SKIN} stroke={AV_OUTLINE} strokeWidth="1" />
    <path d="M10.8,8 Q13,2.6 17,4 Q14,5.4 12.4,9 Z" fill={AV_HAIR} />
    <path d="M10.2,7 Q16,0.8 22,7 Q16,4.8 10.2,7 Z" fill={AV_HAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <path d="M9.4,7 L23.4,7 Q23.4,9 16,9 Q9.4,9 9.4,7 Z" fill={AV_HAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <circle cx="18.6" cy="10.4" r={1.15 * er} fill="#2a2620" />
  </g>
);

// Swimming: only head and shoulders above the surface, with a wake.
const avSwim = (er) => (
  <g>
    <g stroke="#dff0f8" strokeWidth="1.1" fill="none" opacity=".8" strokeLinecap="round">
      <path d="M6,22 q4,-2 8,0 q4,2 8,0 q4,-2 6,0" />
      <path d="M8,25.6 q4,-2 8,0 q4,2 8,0" opacity=".55" />
    </g>
    <path d="M9.6,21.6 Q16,16.6 22.4,21.6 Q16,23.6 9.6,21.6 Z" fill={AV_COAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <circle cx="16" cy="13" r="5.4" fill={AV_SKIN} stroke={AV_OUTLINE} strokeWidth="1" />
    <path d="M10.6,11.6 Q16,5.6 21.4,11.6 Q16,10 10.6,11.6 Z" fill={AV_HAIR} />
    <path d="M9.6,11 Q16,4.6 22.4,11 Q16,8.6 9.6,11 Z" fill={AV_HAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <path d="M8.4,11 L23.6,11 Q23.6,13 16,13 Q8.4,13 8.4,11 Z" fill={AV_HAT} stroke={AV_OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    <circle cx="13.9" cy="14.4" r={1.1 * er} fill="#2a2620" />
    <circle cx="18.1" cy="14.4" r={1.1 * er} fill="#2a2620" />
  </g>
);

// The component the map renders. `dir` is one of down/up/left/right.
const Avatar = ({ dir, swimming, size }) => {
  const er = 1;
  const inner = swimming ? avSwim(er)
    : dir === "up" ? avUp(er)
    : (dir === "left" || dir === "right") ? avSide(er)
    : avDown(er);
  // The drawn ranger, once all five facings exist. All-or-nothing on purpose:
  // a rendered front view next to a vector side view would change who she is as
  // she turns. part78 carries the flag and the files.
  //
  // No scaleX(-1) here - left and right are two separate drawings, so mirroring
  // one of them would flip the second and put her binoculars on the wrong side.
  // Swimming is the front drawing clipped at the chest by the wrapper, which is
  // what puts her IN the water rather than standing on it.
  if (typeof RANGER_ART_READY !== "undefined" && RANGER_ART_READY) {
    const file = swimming ? "ranger_swim"
      : dir === "up" ? "ranger_up"
      : dir === "left" ? "ranger_left"
      : dir === "right" ? "ranger_right"
      : "ranger_down";
    if (!swimming) {
      return (
        <div style={{ width: size, height: size, overflow: "hidden", display: "block" }}>
          <img src={`art/${file}.png`} width={size} height={size} alt=""
            style={{ display: "block", objectFit: "contain" }} />
        </div>
      );
    }
    /* SWIMMING. Ayr, 2026-09-04: "it's funny, but not accurate."
       Half of that was the drawing - the old ranger_swim.png was her STANDING,
       the same front view as ranger_down with the bottom 38% hidden, arms
       hanging at her sides. The other half is here: a hard horizontal cut across
       a person does not read as water, it reads as a person who has been cut in
       half. Clipping alone was always going to look like clipping.
       So the cut now has a surface on it - a soft ellipse of brightness across
       her waterline, sitting slightly proud of the crop on both sides, which is
       what the eye needs to read "she is IN this" rather than "she stops here". */
    const h = size * 0.62;
    return (
      <div style={{ position: "relative", width: size, height: h, display: "block" }}>
        <div style={{ width: size, height: h, overflow: "hidden" }}>
          <img src={`art/${file}.png`} width={size} height={size} alt=""
            style={{ display: "block", objectFit: "contain" }} />
        </div>
        <div style={{
          position: "absolute", left: -size * 0.08, right: -size * 0.08,
          bottom: -size * 0.05, height: size * 0.17, borderRadius: "50%",
          background: "radial-gradient(ellipse at 50% 34%,"
            + " rgba(255,255,255,.42) 0%, rgba(255,255,255,.16) 45%, rgba(255,255,255,0) 72%)",
          pointerEvents: "none",
        }} />
      </div>
    );
  }
  return (
    // width only, with the height following the viewBox, so the sprite scales
    // with the tile instead of being squashed into a square.
    // No CSS filter here, deliberately. The wrapper in part5 carries a
    // transform with a transition on it, which promotes the ranger to her own
    // composited layer; a filter on top of that gets rasterised into the layer
    // and on a phone that raster is what was going soft. Contrast is already
    // carried properly - every shape is stroked in AV_OUTLINE and the halo
    // ellipse is drawn underneath - so the drop-shadow was the least of the
    // three and the only one costing sharpness.
    <svg viewBox="0 0 32 30" width={size} style={{ display: "block",
      transform: dir === "left" ? "scaleX(-1)" : undefined }}>
      {inner}
    </svg>
  );
};

console.log("[part46] ranger avatar ready | 4 facings + swim");
