// ---------- Part 91: SOMEBODY IS FOLLOWING YOU ----------
// Ayr: "it would be cool to have an animal follow you around like in pokemon
// yellow. Just for the old game. more about fun, less about message."
//
// So this one is not about anything. Your lead animal walks a step behind you,
// bobs along, and now and then has a feeling about it. That is the whole
// feature and it does not need a reason.
//
// PURELY DRAWN, NEVER IN THE MAP. This is the one decision worth writing down.
// The obvious way to do a follower is part80's trick - put it in the map row
// and let collision come free - and that is exactly wrong here. A follower that
// exists in the rows is solid: it can pin you against a wall, seal a doorway,
// or wedge in a gap the way two independently placed things once did in part4
// and cost Ayr a save she could not move in. A follower is a picture of an
// animal, so it is drawn as a picture and nothing else in the game can feel it.
//
// AND IT COSTS NO STATE. part4 already records the tile you have just left as
// px,py - the footprints and the grass wake both use it - and the tile you have
// just left is precisely where a follower goes. So the whole thing is a layer
// reading two numbers that were already there. The only fix needed was that
// px,py survived a map change, which meant they briefly pointed at a tile on
// the map you had walked out of.

/* The animal doing the following, and how it feels about today.

   Yellow gave Pikachu a mood you could turn round and check. There is nowhere
   to press here, so the mood surfaces on its own, rarely, as one character over
   its head - and it is never a status readout. It is what an animal walking
   behind you would actually be doing. */
const FOLLOW_EMOTES = [
  { k: "hurt",  em: "💧", when: (a) => a.hp / a.maxHp <= 0.25 },
  { k: "tired", em: "💤", when: (a) => a.hp / a.maxHp <= 0.5 },
  { k: "keen",  em: "❤️", when: (a) => a.hp === a.maxHp },
  { k: "spot",  em: "✨", when: () => true },
];

// How often one appears at all: about one step in forty, and then only if the
// animal has something to say. Rare on purpose - a bubble every few steps is a
// notification, and a notification is the opposite of a pet.
const followEmote = (st) => {
  const a = st && st.party && st.party[0];
  if (!a || a.hp <= 0) return null;
  const step = st.steps || 0;
  if (step % 40 > 6) return null;               // a short window, then quiet again
  const pick = FOLLOW_EMOTES.find((e) => e.when(a));
  return pick ? pick.em : null;
};

/* Who is walking behind you, and which way they are facing.

   Null in every case where a follower would be wrong rather than absent: no
   party, a fainted lead, before you have taken a step, or standing on the tile
   you are standing on - which happens for exactly one frame after a warp and
   would draw the animal on top of the ranger. */
const followerOf = (st) => {
  if (!st || st.screen !== "world") return null;
  if (st.buddy === false) return null;
  const a = st.party && st.party[0];
  if (!a || a.hp <= 0 || !DEX[a.sp]) return null;
  if (st.px == null || st.py == null) return null;
  if (st.px === st.x && st.py === st.y) return null;
  return {
    sp: a.sp,
    x: st.px, y: st.py,
    // It has just walked into the tile you left, so it is heading the way you
    // are heading. Sprites are drawn facing right, so only leftward travel
    // flips; up and down keep whatever it had.
    flip: st.dir === "left",
    em: followEmote(st),
  };
};

/* The art, sized to whatever cell it is put in.

   part2's <Sprite> takes a size in pixels, and a map cell is a fraction of a
   grid whose width depends on the map and the screen - 22px is right on a
   phone and a postage stamp on a desktop. Same art, told to fill its box. */
function FollowSprite({ sp, flip }) {
  const d = DEX[sp];
  if (!d) return null;
  const er = d.juv ? 1.35 : 1;
  const style = {
    width: "100%", height: "100%", display: "block",
    filter: "drop-shadow(1px 2px 2px rgba(0,0,0,.4))",
    transform: flip ? "scaleX(-1)" : undefined,
  };
  if (typeof PHOTO_ART !== "undefined" && PHOTO_ART[sp]) {
    return <img src={"art/" + sp + ".png"} alt="" style={{ ...style, objectFit: "contain" }} />;
  }
  return (
    <svg viewBox="0 0 64 64" style={style}>
      {d.juv ? <g transform="translate(6.4, 9) scale(.8)">{ART[d.art](er)}</g> : ART[d.art](er)}
    </svg>
  );
}

console.log("[part91] somebody is following you: the lead animal walks a step behind"
  + " | drawn only, never in the map rows, so it can never block or trap anything"
  + " | " + FOLLOW_EMOTES.length + " things it might feel about it");
