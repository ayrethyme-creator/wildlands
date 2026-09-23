/* THE CAMERA'S SHAPE.
 *
 * Ayr, 2026-09-20: "In Pokemon Red, the player avatar stays in the center of
 * the screen at all times, with the map and world behind it moving. This is
 * what I want my game to do."
 *
 * So the ranger is pinned to one tile of the window and never leaves it, and
 * the map slides underneath.
 *
 * WHAT FIRE RED ACTUALLY DOES, measured off a screenshot Ayr sent rather than
 * recalled. Its grass texture repeats every 288px in that image, which is one
 * 16px tile upscaled 18x; 4320px of width is therefore EXACTLY 15 tiles and
 * 2880px of content height exactly 10. So the window is 15x10, and the
 * player's cap sits 8px off the centre line - three hundredths of a tile.
 *
 * THE RULE IS NOT "15x10". IT IS A TILE ABOUT 4mm WIDE, FILLING THE SCREEN.
 * The GBA screen is 61mm across and shows 15 tiles, so a tile is ~4.1mm. A
 * phone is ~64mm across at 375 CSS px, so 15 tiles is 23px, or ~3.9mm. The
 * same tile, physically, in the hand. That is why Fire Red's small-looking
 * tiles never feel cramped, and why 15 across is right on a phone too.
 *
 * WHERE PORTRAIT DIFFERS: a GBA screen is wider than tall and a phone is much
 * taller than wide, so the faithful portrait window is not ten rows but as
 * many as the screen holds. Measured on a 375x812 phone with the real chrome -
 * header 40px, party strip 48px, controls 310px - a 15x15 window ends 59px
 * clear of the bottom. Fifteen rows, not ten. The controls were checked for
 * space to reclaim and there is nothing worth taking: the D-pad and the button
 * column sit SIDE BY SIDE, so the 146px of blank beside the buttons is to
 * their left and costs no height at all.
 *
 * AN EVEN COUNT IS FINE, contrary to what this file said when it was written.
 * Fire Red's ten rows are even, so it has no true centre row and the player
 * rides about half a tile low - and nobody has ever noticed. Odd is tidier,
 * not required.
 *
 * WHAT THIS STILL DOES NOT SOLVE, AND 15x15 MAKES LOUDER. The maps are 16-20
 * wide by 10-16 tall, so a fifteen-tile window is the whole of most of them
 * and then some: the ranger cannot approach an edge without the window running
 * off the map, which draws as void. Share of standing positions with no void
 * at all, on the largest map (20x14) and the smallest (16x10):
 *
 *     9x7     34%   20%      tile 45px   the interim setting
 *     15x10    8%    0%      tile 27px   Fire Red's own shape
 *     15x15    0%    0%      tile 27px   this - taller than every map there is
 *
 * That last row is not a mistake and not a regression to fix here. 15x15 is
 * the size the game is AIMED at; it reads as void today because the maps have
 * not been built yet. For the window to be a window rather than the whole map,
 * maps want to be around 28x24, which is ordinary Fire Red territory - its
 * Route 1 is 20x36 and Viridian City 40x36. Until those exist, CAM_W/CAM_H
 * back at 9/7 is the more playable setting, and it is two numbers.
 *
 * CAM_TILE_MAX is a ceiling, not the size. The actual tile is
 * min(CAM_TILE_MAX, (min(430px, 100vw) - 24px) / CAM_W): the frame is capped
 * at 430px regardless of window width, so the room comes from the FRAME and
 * not the viewport. At CAM_W 9 that distinction never showed, because the
 * ceiling bound first on anything wider than the frame.
 */
const CAM_W = 15;
const CAM_H = 15;
const CAM_CX = (CAM_W - 1) / 2;
const CAM_CY = (CAM_H - 1) / 2;
const CAM_TILE_MAX = 45;
