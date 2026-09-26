// ---------- Part 130: HEARTHSIDE'S LANDMARKS, AND THE ESTATE'S THINGS ----------
// Hearthside rebuilt full size (design/tools/forge_hearth.py, data in part131),
// 2026-09-26. Same rules as the other landmark parts. The people here tell
// stories about the pet trade and about beavers; nothing here touches them.

Object.assign(LANDMARKS, {
  lm_first_dog: {
    kind: "dogstatue", name: "The oldest friend",
    text: "🐕 A statue of a young dog. In a grave at Oberkassel in Germany, about fourteen thousand years old, two people were buried with a dog. The dog had been very ill with distemper as a puppy - an illness it could only have survived for as long as it did if someone kept it warm, cleaned it and fed it for weeks.\n\nIt was of no use to anyone as a working animal. They looked after it anyway. That is how old this friendship is.",
  },
  lm_cyprus_cat: {
    kind: "catstatue", name: "The Cyprus cat",
    text: "🐈 On Cyprus, in a grave about 9,500 years old, a person was buried with a cat lying close beside them.\n\nThere have never been wild cats on Cyprus. Somebody brought that cat, or its parents, across the sea in a boat - which means people were already carrying cats with them at the very beginning of farming.",
  },
  lm_fel_d_1: {
    kind: "catstatue", name: "Why cats make you sneeze",
    text: "🐈 Most people who are allergic to cats are allergic to one protein, called Fel d 1, that cats make in their saliva and skin and spread over their fur when they wash.\n\nEvery cat makes it. Some make less than others - which is where the idea of \"hypoallergenic\" breeds comes from - but no cat is free of it.",
  },
  lm_serval: {
    kind: "catstatue", name: "The serval's leap",
    text: "🐆 A serval has the longest legs for its size of any cat, and huge ears. It finds prey by listening for it in long grass, then springs - and can leap high enough to knock a bird out of the air.\n\nIt is one of the most successful hunters there is: around half of its pounces end in a meal, far more than a lion manages. It was built for a life of doing exactly that.",
  },
  lm_ship_cats: {
    kind: "catstatue", name: "The ship's cat",
    text: "🐈 DNA from ancient cats shows how they spread around the world: first with early farmers from the Near East, and later from Egypt along the trade routes - on ships, where a cat that kept the rats off the grain was worth its keep.\n\nBy the time of the Vikings, cats had reached ports in northern Europe. The plain, sturdy shorthair is the closest thing here to those working cats.",
  },
  lm_dog_nose: {
    kind: "dogstatue", name: "The nose",
    text: "🐕 A dog's nose has up to three hundred million scent receptors. Ours has about six million. A dog breathing in can smell out to the side through slits in its nostrils while it breathes out, so the air it is sniffing is never mixed with the air it has finished with.\n\nWhere we see the world, a dog reads it - who walked here, how long ago, and how they were feeling.",
  },
  lm_scent_dogs: {
    kind: "dogstatue", name: "The scent dogs",
    text: "🐕 Some working dogs now work for wild animals. Conservation detection dogs are trained to find the droppings of rare animals - which tell scientists where the animals live, what they eat and how many there are, without anyone having to catch one.\n\nOne dog, riding in the bow of a research boat off the coast of Washington State, could smell floating orca droppings from over a kilometre and a half away.",
  },
  lm_serum_run: {
    kind: "dogstatue", name: "The serum run",
    text: "🛷 In January 1925 diphtheria broke out in Nome, Alaska, and the only medicine was over a thousand kilometres away, in the middle of winter. Twenty mushers and about 150 dogs carried it in a relay, through blizzards, in under six days.\n\nThe dog called Balto led the last stretch into Nome and got a statue in New York. A dog called Togo ran the longest and most dangerous part of the whole journey, and most people have never heard of him.",
  },
  lm_guardian_dogs: {
    kind: "dogstatue", name: "The guardians",
    text: "🐕 Big, calm dogs raised among sheep and goats from puppyhood, so they think of the flock as their family. They do not herd it. They guard it.\n\nIn Namibia, farmers shot cheetahs to protect their livestock - until a conservation group began giving them Anatolian shepherd guardian dogs in 1994. Farms with the dogs lose far fewer animals, so they shoot far fewer cheetahs. A dog bred for a very old job is saving one of the fastest animals alive.",
  },
  lm_old_dogs: {
    kind: "dogstatue", name: "The old dogs",
    text: "🐕 In most of the animal world, bigger kinds live longer: an elephant outlives a mouse. Dogs are the other way round. A Great Dane is old at eight; a little terrier can reach fifteen or more.\n\nThe big breeds grow very fast and seem to age fast too. Which is one more reason to be kind to an old dog - it has had less time than it should.",
  },
  lm_mixed_breed: {
    kind: "dogstatue", name: "What breed tells you",
    text: "🐕 A big study of more than eighteen thousand dogs, published in 2022, compared their DNA with how they actually behaved. Breed explained only about a tenth of the differences between one dog and another.\n\nA dog's breed tells you something about what it will look like, and not much about who it will be. Every dog in Rescue Row is its own dog.",
  },
});

Object.assign(LM_SHAPES, {
  dogstatue: (bg) => propWrap(bg,
    `<rect x="7" y="23" width="18" height="6" rx="1" fill="#a39a8e" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<path d="M11,23 Q10,16 13,13 Q12,9 14,6 L16,8 L18,6 Q20,9 19,13 Q22,16 21,23 Z" fill="#8a7a6a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<path d="M14,6 L13.4,3 L15.4,5.6 M18,6 L18.6,3 L16.6,5.6" fill="#8a7a6a" stroke="${PROP_OUT}" stroke-width=".6"/>` +
    `<ellipse cx="16" cy="11" rx="1.8" ry="1.2" fill="#6a5a4a"/>` +
    `<g fill="${PROP_DARK}"><circle cx="14.6" cy="8.6" r=".5"/><circle cx="17.4" cy="8.6" r=".5"/></g>` +
    `<path d="M21,21 Q25,19 24,15" stroke="#8a7a6a" stroke-width="1.6" fill="none" stroke-linecap="round"/>`),
  catstatue: (bg) => propWrap(bg,
    `<rect x="7" y="23" width="18" height="6" rx="1" fill="#a39a8e" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<path d="M12,23 Q11,15 14,12 L14,10 Q14,7 16,7 Q18,7 18,10 L18,12 Q21,15 20,23 Z" fill="#7a7068" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<path d="M14,8 L13.6,4.6 L15.6,7 M18,8 L18.4,4.6 L16.4,7" fill="#7a7068" stroke="${PROP_OUT}" stroke-width=".6"/>` +
    `<g fill="#c8b870"><ellipse cx="15" cy="9.4" rx=".6" ry=".8"/><ellipse cx="17" cy="9.4" rx=".6" ry=".8"/></g>` +
    `<path d="M20,22 Q26,22 25,16 Q24,13 22,14" stroke="#7a7068" stroke-width="1.4" fill="none" stroke-linecap="round"/>`),
});

// The estate's own things: kennels in the yards, cat trees in the cattery.
Object.assign(DECOR_SHAPES, {
  doghouse: (bg) => propWrap(bg,
    `<path d="M5,15 L16,6 L27,15 Z" fill="#a0442a" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
    `<rect x="7" y="15" width="18" height="12" fill="#c9a068" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M12.6,27 L12.6,21 Q16,17.4 19.4,21 L19.4,27 Z" fill="${PROP_DARK}"/>` +
    `<path d="M7,19 L25,19 M7,23 L25,23" stroke="#a88050" stroke-width=".6"/>` +
    `<ellipse cx="23.6" cy="28" rx="2.4" ry=".9" fill="#8a8a90"/>`),
  cattree: (bg) => propWrap(bg,
    `<rect x="14.6" y="8" width="2.8" height="20" fill="#c9b48a" stroke="${PROP_OUT}" stroke-width=".6"/>` +
    `<g stroke="#8a6a45" stroke-width=".5">` + [11, 15, 19, 23].map((y) => `<path d="M14.6,${y} L17.4,${y + 1}"/>`).join("") + `</g>` +
    `<rect x="6" y="26" width="20" height="3" rx="1" fill="#8a6f9a" stroke="${PROP_OUT}" stroke-width=".7"/>` +
    `<rect x="8" y="16" width="9" height="2.6" rx="1" fill="#8a6f9a" stroke="${PROP_OUT}" stroke-width=".7"/>` +
    `<rect x="15" y="6" width="11" height="3" rx="1.2" fill="#8a6f9a" stroke="${PROP_OUT}" stroke-width=".7"/>` +
    `<path d="M19,6 Q18,3 20,2.6 L20.6,4 L22,2.6 Q23.6,3 22.6,6 Z" fill="#e8a33a" stroke="${PROP_OUT}" stroke-width=".4"/>`),
});
Object.assign(DECOR_SCALE, { doghouse: [1.2, 1.2], cattree: [1.0, 1.5] });

Object.assign(SIGNS, {
  "hearth:west": "🪧 '⟵ THE CATTERY. The Sunroom, Long Coats, Shorthairs.'",
  "hearth:east": "🪧 'THE KENNELS ⟶  The Yard, the Working Line, the Snow Yard.'",
  "hearth:nw": "🪧 '⬆ THE WILD LINE.'",
  "hearth:ne": "🪧 '⬆ THE LONG FENCE. The Retired. Rescue Row.'",
});
