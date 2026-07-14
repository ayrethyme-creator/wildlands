# Wildlands: Safari Saga

A creature-collecting RPG featuring real animals - eight biomes, eight gyms, an Elite Four, and three mythic guardians.

**Play:** https://ayrethyme-creator.github.io/wildlands/

## About

Built collaboratively as an original homage to classic handheld creature-collector RPGs. No copyrighted characters, sprites, or audio - every animal is hand-drawn vector art defined in code, and all music and sound effects are synthesized in the browser with the Web Audio API.

### Features

- ~115 species of real animals, most with juvenile forms that grow up as they level
- 9 ecological types (Predator, Aerial, Aquatic, Burrow, Venom, Armor, Swift, Wild, Ember) with a biology-flavored matchup chart
- 8 gyms across savanna, wetland, jungle, desert, highveld, alpine, volcanic, and grove zones
- Elite Four + Champion gauntlet at the Summit Citadel
- Three mythic guardians - Qilin, Thunderbird, Phoenix - gated behind badges and puzzles
- Field abilities (Swim, Soar, Strength), boulder and torch puzzles, a dark cave needing a lantern
- Day/night cycle with different spawns, a recurring rival, and a Field Guide tracking what you have seen and befriended
- Chiptune soundtrack with per-zone tracks

## Saves

Saves use browser localStorage and persist across sessions on this domain. Save with the disk button or by visiting any Care Center.

## Files

| File | Purpose |
|------|---------|
| index.html | Loader page - pulls React from a CDN and transpiles the game in-browser |
| game.jsx | The entire game: data, sprites, audio, maps, and UI |

No build step. Edit game.jsx, commit, and the live site updates.

## Local development

Because the browser fetches game.jsx, opening index.html directly from disk will fail CORS. Serve it instead:

    python3 -m http.server 8000
    # then open http://localhost:8000

## Deploying

Settings -> Pages -> Source: "Deploy from a branch" -> Branch: main, folder / (root) -> Save.
