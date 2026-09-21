/* THE CAMERA'S SHAPE.
 *
 * Ayr, 2026-09-20: "In Pokemon Red, the player avatar stays in the center of
 * the screen at all times, with the map and world behind it moving. This is
 * what I want my game to do."
 *
 * So the ranger is pinned to one tile of the window and never leaves it, and
 * the map slides underneath. That is the whole rule, and the part of it that
 * costs something is "at all times".
 *
 * WHY THE WINDOW IS ODD-SIZED. An even one has no middle tile, so the ranger
 * would sit half a tile off centre forever. Nine across gives a true centre at
 * index 4 with four tiles of warning in every direction.
 *
 * WHY NINE AND NOT MORE. The frame is 430px wide with 10px of padding and a
 * 2px border, so 406px of room. Nine tiles is 45px each, which is nearly twice
 * the 25px a 16-wide map used to get and the first size at which the drawn
 * tiles read as pictures rather than icons. Eleven would drop them back to
 * 36px and show more of a map that is already nearly all on screen.
 *
 * WHAT THIS DOES NOT SOLVE, AND IT IS THE REAL PROBLEM. The maps are 16-20
 * wide by 10-16 tall. A nine-tile window on a sixteen-tile map is most of the
 * map, so there is barely anything to scroll into, and a ranger standing
 * anywhere near an edge puts the window off the map - four tiles past it in
 * the corners. There are only two ways to answer that:
 *
 *   clamp the window to the map -> the ranger drifts off centre near edges
 *   let it run off             -> she stays centred and the overflow is void
 *
 * The first is what most games do and is what Ayr ruled out by saying "at all
 * times", so this does the second and the void is drawn as flat dark ground.
 * It is not a bug to be fixed in this file. Red does not have it because Red's
 * maps are large and stitched into one continuous world; these are small rooms
 * joined by doorways that teleport, with no notion of which map lies north of
 * which. The fix is bigger maps, which is its own job.
 *
 * CAM_TILE_MAX is a ceiling, not the size: the actual tile is
 * min(CAM_TILE_MAX, (100vw - 24px) / CAM_W), so a phone narrower than the
 * frame shrinks the tiles instead of cutting the window down to eight.
 */
const CAM_W = 9;
const CAM_H = 9;
const CAM_CX = (CAM_W - 1) / 2;
const CAM_CY = (CAM_H - 1) / 2;
const CAM_TILE_MAX = 45;
