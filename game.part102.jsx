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
 * many as the screen holds. The chrome is 398px on every phone width measured
 * - header 40, party strip 48, controls 310 - and does not rewrap, so the only
 * variable is the screen. The controls were checked for space to reclaim and
 * there is nothing worth taking: the D-pad and the button column sit SIDE BY
 * SIDE, so the 146px of blank beside the buttons is to their left and costs no
 * height at all.
 *
 * WHY THIRTEEN ROWS AND NOT EIGHTEEN. Eighteen is what fits if you measure the
 * screen and stop there. You cannot: `viewport-fit=cover` puts the page under
 * the notch and the home indicator, and the frame now pads that back (see
 * part5). THIS IS SIZED FOR A PACKAGED APP, NOT A BROWSER TAB - Ayr, 2026-09-23,
 * on a store release: "I have to move the screen down to see the top bar,
 * because it's in a browser. That won't be the case, so make sure the sizing
 * you make accounts for that fact now." So the budget is the whole screen less
 * the hardware insets, with nothing held back for a URL bar.
 *
 * Measured in the running game, on each device with the insets that device
 * actually has - the pairing matters, since no phone has a mini's screen and a
 * Pro's Dynamic Island:
 *
 *     366x814  Android    24/34   tile 22.4px   73px clear
 *     375x812  13 mini    50/34   tile 23.4px   22px clear   <- the binding one
 *     393x852  iPhone 15  59/34   tile 24.6px   37px clear
 *     430x932  Pro Max    59/34   tile 27.1px  117px clear
 *
 * None of them scroll. Thirteen is not a cautious number, it is the largest
 * that fits every one: a fourteenth row costs 23.4px on the 13 mini, which has
 * 22px, so fourteen misses by a pixel on the smallest screen worth shipping
 * to. Thirteen is still three rows more than Fire Red shows.
 *
 * AN EVEN COUNT IS FINE, contrary to what this file said when it was written.
 * Fire Red's ten rows are even, so it has no true centre row and the player
 * rides about half a tile low - and nobody has ever noticed. Odd is tidier,
 * not required.
 *
 * THE EXISTING MAPS DO NOT FIT THIS AND ARE NOT MEANT TO. Ayr, 2026-09-23:
 * "Don't worry about fitting the current maps. We're going to have to re do
 * the maps anyway. Focus on what has the same feel as fire red but sized for
 * the modern vertical phone." So this window is sized to the PHONE, and the
 * maps are now what has to meet it.
 *
 * WHAT THE MAPS MUST BE, since that is this file's real output. A window is
 * only a window if the map is comfortably bigger than it in both directions.
 * The share of standing positions showing no void is (MW-14)/MW by (MH-12)/MH,
 * so for roughly half the map to be void-free a map wants to be about 28x24.
 * Today's largest is 20x14 - SMALLER THAN THIS WINDOW in one direction - which
 * is why every map currently shows void on all sides. That is expected and is
 * not a fault in this file. For reference at the target: Fire Red's Route 1 is
 * 20x36 and Viridian City 40x36, so 28x24 is unremarkable for the genre.
 *
 * CAM_TILE_MAX is a ceiling, not the size. The actual tile is
 * min(CAM_TILE_MAX, (min(430px, 100vw) - 24px) / CAM_W): the frame is capped
 * at 430px regardless of window width, so the room comes from the FRAME and
 * not the viewport. At CAM_W 9 that distinction never showed, because the
 * ceiling bound first on anything wider than the frame.
 */
const CAM_W = 15;
const CAM_H = 13;
const CAM_CX = (CAM_W - 1) / 2;
const CAM_CY = (CAM_H - 1) / 2;
const CAM_TILE_MAX = 45;
