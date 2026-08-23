// ---------- Part 47: THE WORK ----------
// Each region has one knot: a conflict between people who are all behaving
// reasonably, and an animal caught in the middle of it. There is no villain and
// nothing to defeat. There is a thing to understand well enough to fix.
//
// The shape is always the same three stages:
//   LISTEN  — talk to both sides and go and look for yourself
//   PITCH   — take what you found to Amara, who funds evidence and not feelings
//   BUILD   — put the thing in, and find out whether it holds
//
// An arc can fail. A failed arc does not reset and does not lock: it changes
// what you try next. That is deliberate, and it is the vaquita lesson - when
// capturing the last vaquitas went wrong in 2017 the people involved stopped
// that approach and moved to net removal, they did not stop working.

const ARCS = {
  // ---------------- REGION 1: Beeloud Clearing ----------------
  beeloud: {
    region: 1,
    title: "The Beeloud Hives",
    where: "seg_m4",
    blurb: "Thabo Sithole keeps bees here, and something is tearing his hives apart at night. It is a honey badger — a low, heavy animal about the size of a big dog, built for digging, with claws that open a beehive the way a tin opener opens a tin. She is after the fat white grubs in the comb, not the honey. Thabo is not being sentimental about this: nine colonies gone is most of his year. The usual answer is to shoot her or cart her away, and neither of those works for long. Your job is to find out enough about how she is actually getting in to propose something that does.",

    // Everything the player can find out. Each is gathered somewhere specific,
    // and the pitch is graded on how much of it you actually did.
    //
    // Each finding has to stand on its own. A player who does not already know
    // what a honey badger is cannot be handed an observation and left to infer
    // the conservation point from it, so every detail says what was seen AND
    // what it means for the decision at the end.
    evidence: {
      loss: {
        label: "What a colony is worth to Thabo",
        detail: "Nine colonies lost since the rains, and he borrowed against them — eleven thousand still owed to the co-operative. A hive takes a season to build back up to strength, so this is not a bad month, it is most of a year's income. It matters because it rules out the answer conservationists reach for first: asking the person to simply put up with the loss. He cannot. Whatever you propose has to actually stop the raids, not ask him to absorb them.",
        how: "Ask Thabo about the money, not the badger.",
      },
      edges: {
        label: "Which hives she takes",
        detail: "Always the outer rows, the ones nearest the treeline. The old inner hives have never been touched. She is working from cover and will not cross open ground to reach the middle of the apiary — like most raiding animals she wants a short line back to somewhere safe. That is a weakness you can build against: the distance between her and the trees is doing some of the work already.",
        how: "Look at which hives are wrecked and which are not.",
      },
      history: {
        label: "How long she has been here",
        detail: "There are old claw marks on stands that are still standing, from seasons before this one. She did not move in on the apiary — the apiary was built in ground she already lived in. It matters because it changes who the newcomer is. Removing her would not be restoring the place to normal, it would be clearing an animal off her own territory, and territory that good does not stay empty.",
        how: "Look at the oldest stands.",
      },
      climbs: {
        label: "How she gets in",
        detail: "She climbs. The hives sit waist-high on stands, and the legs are rough-sawn timber — splintery, soft, full of grip for a claw built to dig. She goes up the leg, not over the ground. This is the single most useful thing you can learn here, because it means the raid depends on one thing she needs and cannot do without: something to hold on to.",
        how: "Watch the clearing after dark.",
      },
      nursing: {
        label: "Why she needs so much",
        detail: "She is nursing two cubs in a den under the marula roots. A female feeding cubs needs far more than she does alone, which explains both the timing — the raids started this season, not before — and why she keeps coming back through everything Thabo has tried. She is not raiding out of habit or boldness. She is short of food and the hives are the richest thing for miles.",
        how: "Follow her back from the hives.",
      },
    },

    // What you can propose. Each is a real thing people have tried.
    //
    // The three pitches are deliberately kept within a few words of each other,
    // and the correct one is not the longest. Every arc used to give itself
    // away: the answer that worked ran three to five times longer than the
    // ones that did not, so a player could skip the reading entirely and click
    // the biggest block of text. A wrong answer has to be argued as well as the
    // right one, or the choice is not a choice.
    proposals: {
      stands: {
        label: "Steel legs, and the outer hives moved in",
        needs: ["climbs", "edges"],
        cost: 0,
        works: true,
        pitch: "Take away the grip. She reaches the hives by climbing the timber legs, and smooth steel gives a digging claw nothing to hold; the stands are too tall for her to simply jump. Put every hive on steel, and move the outer rows in behind the old ones so she has open ground to cross before she can even try.",
      },
      relocate: {
        label: "Move the whole apiary out from the trees",
        needs: ["edges"],
        cost: 0,
        works: false,
        pitch: "Use the distance. She only ever takes the outer rows, the ones closest to the treeline she comes down through, and she will not cross open ground to reach the middle. Move the entire apiary further out into the clear, away from the trees, and the hives stop being a short safe stop on a night's foraging.",
        why: "She followed them. Of course she followed them — she is not stupid, she is hungry, and a hive is worth the walk to an animal feeding cubs. Moving food does not stop it being food. Within a month the outer rows were being opened again, only now Thabo had further to carry everything.",
      },
      remove: {
        label: "Trap her and release her out in the reserve",
        needs: [],
        cost: 0,
        works: false,
        pitch: "Separate them. Trap her cleanly and release her eighty kilometres out in the reserve, where there is plenty of wild food and nobody's livelihood depends on her leaving it alone. Thabo keeps his colonies, she keeps her life, and an argument that neither of them can win simply stops.",
        why: "Two cubs under the marula roots, and their mother eighty kilometres away. They starve, and she walks back or dies trying — they do that. And the clearing did not stay empty a fortnight: it is good ground she was living in first, so the next badger moved in and started on the outer rows.",
      },
    },

    // What actually happens on the ground, once it is built.
    outcome: {
      good: "Two hives down last night. Before you run here — it was the two I had not moved yet. The ones on your stands are untouched. She tried. There are scratches all the way up and she could not hold on. Come and help me move the rest.",
      bad: "It did not work. I am not angry with you — you tried something and it did not work, which is more than anyone else has done. What do we try next?",
    },
  },
};

// ---- arc state helpers ----
// Kept flat and small so it drops into the existing save payload without
// changing its shape.
const arcState = (st, id) => (st.arcs && st.arcs[id]) || { stage: "listen", found: {}, tried: [] };
const arcFound = (st, id, key) => !!arcState(st, id).found[key];

// The order the proposals are offered in.
//
// Every arc was written with the funded answer first, all seventeen of them,
// so the correct choice was always the top button. That is exactly as
// reliable a tell as the old one where the right answer was also the longest
// paragraph, and Ayr spotted it the moment the lengths stopped giving it away.
//
// Shuffled against the save's own seed rather than at random on each render:
// the order is stable within a save, so the buttons never move under the
// player's hand and re-opening the panel cannot be used to re-roll, but it
// differs between playthroughs, so no walkthrough can just name a position.
const pitchOrder = (seed, id) => {
  const ks = Object.keys((ARCS[id] && ARCS[id].proposals) || {});
  let h = ((seed | 0) ^ 0x9e3779b9) || 0x6d2b79f5;
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 0x85ebca6b) | 0;
  const rnd = () => {
    h ^= h << 13; h |= 0;
    h ^= h >>> 17;
    h ^= h << 5;  h |= 0;
    return (h >>> 0) / 4294967296;
  };
  for (let i = ks.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const t = ks[i]; ks[i] = ks[j]; ks[j] = t;
  }
  return ks;
};

// A case is open once you have met the person whose problem it is. Before
// that its findings are objects on the ground rather than evidence, because
// a clue you cannot place is not a clue - it is scenery that files itself
// into a casebook you have never opened.
//
// Saves written before `met` existed do not carry it, so anything already
// under way counts as met: any evidence recorded, or any stage past
// listening. Without that, loading an old save would lock a player out of
// findings for a case they are halfway through.
const arcMet = (st, id) => {
  const a = arcState(st, id);
  return !!a.met || a.stage !== "listen" || Object.keys(a.found || {}).length > 0;
};
const arcEvidenceCount = (st, id) => Object.keys(arcState(st, id).found).length;
const arcTotalEvidence = (id) => Object.keys(ARCS[id].evidence).length;

// Amara funds what is argued, not what is felt. A proposal needs its own
// supporting evidence before she will hear it at all, and she needs a majority
// of everything available before she believes you have understood the place.
const canPitch = (st, id, propKey) => {
  const A = ARCS[id], p = A.proposals[propKey];
  if (!p) return { ok: false, missing: [] };
  const missing = p.needs.filter((k) => !arcFound(st, id, k));
  return { ok: missing.length === 0, missing };
};

const amaraVerdict = (st, id, propKey) => {
  const A = ARCS[id], p = A.proposals[propKey];
  const { ok, missing } = canPitch(st, id, propKey);
  const total = arcTotalEvidence(id), have = arcEvidenceCount(st, id);

  if (!ok) {
    return {
      funded: false,
      line: `No. And not because you are wrong — you may well be right. You have brought me a feeling and I cannot sign a feeling. ${
        missing.map((k) => A.evidence[k].how).join(" ")} Come back when you know.`,
    };
  }
  if (have < Math.ceil(total * 0.6)) {
    return {
      funded: false,
      line: "Not yet. You have enough to be confident and not enough to be right. I have funded confident before and I have the receipts in a drawer. Go and look at the rest of it.",
    };
  }
  return {
    funded: true,
    line: p.works
      ? "Good. That is an argument. Now the part everybody forgets — who maintains it? ... Fine. He has a reason to. Go and build it."
      : "Alright. I am not certain, and neither are you, and that is allowed. Go and try it. If it fails we will know something we do not know now.",
  };
};

console.log("[part47] arcs loaded:", Object.keys(ARCS).length,
  "| beeloud evidence:", arcTotalEvidence("beeloud"),
  "| proposals:", Object.keys(ARCS.beeloud.proposals).length);
