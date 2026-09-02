// ---------- Part 75: SIX MORE FOR THE VIGIL ----------
// The six extinctions that take The Vigil to fifty. Decided 2026-08-25 when the
// Vigil / On the Brink split moved every still-living species out of the memorial
// - a living animal does not belong in one - leaving 44, and these six were named
// to finish it. They have been promises in design/PENDING_MOVES.txt since.
//
// A Vigil entry is not a field-guide entry. It carries four more fields, and the
// shape is part30's, unchanged:
//
//   f       what the animal was
//   lost    when, and how it is known
//   cause   what did it
//   better  what would have had to be different
//   back    whether anything was, or could be, done
//
// The mem flag is what files a species here, and every one of these is EX. None
// is a maybe: where a species is only PROBABLY gone, it belongs in On the Brink,
// and the Christmas Island forest skink is here because the last one died in a
// cage with a date on it.

const P75 = [];

Object.assign(DEX, (() => {
  const add = (k, n, t, b, c, org) => { P75.push(k); return { [k]: { n, art: k, t, b, c, org, mem: true } }; };
  return Object.assign({},
    add("bachmanswarbler", "Bachman's Warbler", ["Aerial", "Swift"], { h: 24, a: 28, d: 24, s: 66 }, 0.3, "EX"),
    add("alaotragrebe", "Alaotra Grebe", ["Aquatic", "Aerial"], { h: 30, a: 30, d: 30, s: 48 }, 0.3, "EX"),
    add("christmasislandforestskink", "Christmas Island Forest Skink", ["Wild", "Swift"], { h: 24, a: 26, d: 28, s: 54 }, 0.3, "EX"),
    add("tecopapupfish", "Tecopa Pupfish", ["Aquatic", "Ember"], { h: 22, a: 24, d: 24, s: 50 }, 0.3, "EX"),
    add("roundislandburrowingboa", "Round Island Burrowing Boa", ["Burrow", "Predator"], { h: 34, a: 42, d: 34, s: 38 }, 0.3, "EX"),
    add("littlemarianafruitbat", "Little Mariana Fruit Bat", ["Aerial", "Night"], { h: 28, a: 26, d: 26, s: 58 }, 0.3, "EX"),
  );
})());

const vnote75 = (k, o) => { if (DEX[k]) INFO[k] = Object.assign(INFO[k] || {}, o); };

vnote75("bachmanswarbler", {
  taxon: "Vermivora bachmanii · one of 3 Vermivora warblers, and the only one gone",
  d: "Insectivore — caterpillars gleaned from cane and undergrowth",
  h: "Bottomland swamp forest of the American southeast; wintered in Cuba", s: "EX",
  f: "A small warbler, black-bibbed and yellow-faced, that seems to have needed one specific and unglamorous thing: dense stands of cane in the gaps that floods and fallen trees tore in southern swamp forest. It was never seen in large numbers by anyone who wrote it down, and the one time it was found commonly — in the 1880s, when hundreds were collected — is also the last time anybody could reliably find it.",
  lost: "The last widely accepted sighting was in South Carolina in 1962, and a female was reported in Cuba in 1981. The United States formally declared it extinct in October 2023, alongside twenty other species.",
  cause: "Its breeding forest was logged and drained, and its wintering ground in Cuba was cleared for sugar cane. It needed both ends of a migration and lost both at once.",
  better: "Understood that a bird can be rare because its habitat is a temporary gap, not a place. Bottomland swamp was drained as worthless ground for a century before anyone asked what lived in it.",
  back: "No. There is no captive population and never was, and the last specimen was collected before anyone thought to keep one alive. What exists is skins in drawers, a few photographs from 1958, and a recording of the song made in 1954.",
});

vnote75("alaotragrebe", {
  taxon: "Tachybaptus rufolavatus · one of 5 Tachybaptus grebes",
  d: "Carnivore — small fish and invertebrates, taken on short dives",
  h: "Lake Alaotra, Madagascar. Nowhere else at all", s: "EX",
  f: "A small grebe with wings too short to fly any distance, which confined it to one lake in Madagascar and left it no way to leave when the lake changed. Its last stronghold was a body of water it shared with a common relative, the little grebe — and that turned out to matter more than anything else about it.",
  lost: "The last confirmed sighting was in 1985. It was declared extinct in 2010.",
  cause: "Three things at once. Carnivorous snakehead fish were introduced and ate the chicks, nylon gill nets drowned the adults, and the little grebe hybridised with it — so towards the end the species was being absorbed as well as killed. Genetic dilution is a quiet way to lose an animal and it leaves birds on the lake the whole time.",
  better: "Not stocked a lake with a predatory fish. Lake Alaotra is Madagascar's largest and its rice bowl, and the introductions were made to feed people, which is the hard part of this entry.",
  back: "No. It was flightless enough to be trapped on one lake and nobody ever held one in captivity. Lake Alaotra has since lost other endemics too, and it is now a Ramsar site — protection that arrived after the species it might have saved.",
});

vnote75("christmasislandforestskink", {
  taxon: "Emoia nativitatis · the only species of its kind on the island",
  d: "Insectivore — small invertebrates on the forest floor",
  h: "The forest floor and clearings of Christmas Island, Indian Ocean", s: "EX",
  f: "A slim brown skink that basked on logs in the open, common enough in the early 1980s that surveys describe it as everywhere. Within twenty years it was almost impossible to find. It has the bleakest distinction available: it is the first Australian reptile known to have gone extinct since European arrival, and the collapse happened while people were watching and taking notes.",
  lost: "The last individual, a captive female called Gump, died on 31 May 2014. She had been alone for years.",
  cause: "Not certain, which is part of why it happened. Yellow crazy ants, introduced snakes, and possibly an introduced disease all arrived on a small island; the decline was rapid and no single cause was ever pinned down. By the time anyone acted, a species that had been abundant was down to a handful.",
  better: "Taken it into captivity when it was still common. Everyone could see the crash; the debate about which cause to address ran while the numbers fell, and only three animals were ever brought in — in 2009, too late to breed a population from.",
  back: "No. Gump was the last one, and she left no offspring. Two related Christmas Island reptiles were caught in time and survive only in captivity, which is the whole argument for acting early, made twice on one island.",
});

vnote75("tecopapupfish", {
  taxon: "Cyprinodon nevadensis calidae · a subspecies of the Amargosa pupfish",
  d: "Omnivore — algae and small invertebrates in hot spring outflow",
  h: "The outflow of two hot springs at Tecopa, in the Mojave Desert of California", s: "EX",
  f: "A pupfish an inch long, living in water up to about 42°C — hot enough that almost nothing else could be in it with them, which is exactly why they were there. Its whole world was the run-off channels of two hot springs in the Mojave, and it had adapted to that one narrow, scalding, isolated stretch of desert water.",
  lost: "Declared extinct in 1981, and formally removed from the endangered species list in 1982 — the first animal ever delisted because it had gone extinct rather than recovered.",
  cause: "The two spring outflows were channelled together in the 1960s to serve bathhouses. Joining them changed the temperature and flow, and it let the neighbouring subspecies in, which promptly interbred with it. The habitat was not destroyed so much as rearranged, and rearranging was enough.",
  better: "Left the two channels apart. The alteration was a small piece of plumbing for a modest bathhouse development, and the fish only existed because those two streams had been separate for a very long time.",
  back: "No. It went before the Endangered Species Act could do anything for it. Its listing is now a piece of administrative history — the case that established what delisting an extinct species even means.",
});

vnote75("roundislandburrowingboa", {
  taxon: "Bolyeria multocarinata · one of 2 species in a family found nowhere else",
  d: "Carnivore — lizards, which is nearly all there was to eat",
  h: "Round Island, a 1.5 km² volcanic cone off Mauritius", s: "EX",
  f: "A small burrowing snake from a family, the Bolyeriidae, that exists nowhere on earth but two islets off Mauritius — and it had a feature no other vertebrate has: its upper jaw is hinged in the middle, split into two halves that move independently, thought to help it hold hard, smooth lizards. There were only ever two species in the family. This was one of them.",
  lost: "The last one was seen in 1975. It was declared extinct in 1994.",
  cause: "Goats and rabbits, put ashore by sailors as a food supply. They stripped Round Island of its vegetation, the topsoil the snake burrowed in blew and washed away, and the palm forest went with it. Nobody hunted this animal or wanted anything from it; it was removed by grazing.",
  better: "Taken the goats off sooner. They were finally cleared in 1979 and the rabbits in 1986, and the island has been recovering ever since — four years and eleven years respectively after the last sighting of the snake.",
  back: "No, but the island came back. Round Island is now one of the more successful restorations anywhere: the palms are regenerating, and its other endemic reptiles — including the second bolyeriid, the Round Island keel-scaled boa — have been bred up and returned. The habitat was saved. The snake was not.",
});

vnote75("littlemarianafruitbat", {
  taxon: "Pteropus tokudae · one of some 60 Pteropus flying foxes",
  d: "Frugivore — fruit and nectar, and a pollinator of forest trees",
  h: "The limestone forest of Guam, and only Guam", s: "EX",
  f: "A flying fox small enough to fit in two hands, roosting in the limestone forest of Guam with its larger relative the Mariana fruit bat. It was scarce in every account anyone left of it: even in the 1930s, when it was first described, collectors called it uncommon. Fruit bats plant forests — they carry seeds and pollen further than anything else on an island — so losing one takes more than the animal.",
  lost: "A single female was shot in 1968. Another was taken in 1974, and that was the last. It is now listed as extinct.",
  cause: "Hunting, for a long time, on an island where fruit bat is a traditional food and a commercial import trade kept demand high. Then the brown tree snake, which arrived with military cargo after the war and worked its way through Guam's forest animals, and habitat clearance on top of both.",
  better: "Regulated the hunt while there were still bats to regulate. Guam's fruit bats were being taken commercially and shipped in from other islands to meet demand, and by the time protection came the smaller of the two species was already effectively gone.",
  back: "No. None was ever held in captivity and there is very little material to work from. Its larger relative survives on Guam in the low hundreds, still eaten, still hunted by snakes — the same story, running slower.",
});

// Photographic sprites for all six. Each matching PNG is present in art/.
Object.assign(PHOTO_ART, Object.fromEntries(P75.map((k) => [k, true])));

/* Learnsets only. The Vigil is a memorial, not a place to catch anything, and
   its species are reached through that system rather than a wild pool. */
{
  let built = 0; const thin = [];
  P75.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

  const full = P75.filter((k) => INFO[k] && INFO[k].lost && INFO[k].cause
    && INFO[k].better && INFO[k].back);

  console.log(`[part75] six more for the vigil: ${P75.length} species`
    + ` | learnsets: ${built} | complete memorials: ${full.length}/${P75.length}`
    + ` | wild placement: none, deliberately`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : ""));
}
