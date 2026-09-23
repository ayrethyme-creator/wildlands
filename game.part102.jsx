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
 * WHY BOTH ARE ODD. An even window has no middle tile, so the ranger would sit
 * half a tile off centre forever.
 *
 * WHY NINE ACROSS. The frame is 430px wide with 10px of padding and a 2px
 * border, so 406px of room. Nine tiles is 45px each, nearly twice the 25px a
 * 16-wide map used to get, and the first size at which the drawn tiles read as
 * pictures rather than icons. Eleven drops them to 36px and thirteen to 31px,
 * which is back to where this started.
 *
 * WHY ONLY SEVEN DOWN, WHICH IS THE PART THAT IS NOT OBVIOUS. The window is
 * deliberately not square, because the maps are not: they run 16-20 wide but
 * only 10-16 TALL, so height is the binding constraint and a square window
 * wastes it. Measured as the share of standing positions with no void on
 * screen at all, on the largest map (20x14) and the smallest (16x10):
 *
 *     7x7    40%   25%      tiles 58px - least void, but you see very little
 *     9x7    34%   20%      tiles 45px - this
 *     9x9    26%   10%      tiles 45px - the square version, two tiles worse
 *     11x9   21%    7%      tiles 36px
 *     13x11  11%    0%      tiles 31px - taller than a short map, always void
 *
 * Going from 9x9 to 9x7 costs nothing at all - the tiles stay 45px - and buys
 * back most of the vertical void. Bigger windows are worse on BOTH counts here,
 * more void AND smaller tiles, and their only gain is seeing more of a map that
 * was nearly all on screen to begin with. That stops being true once the maps
 * are larger, at which point this is one number to revisit.
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
const CAM_H = 7;
const CAM_CX = (CAM_W - 1) / 2;
const CAM_CY = (CAM_H - 1) / 2;
const CAM_TILE_MAX = 45;
