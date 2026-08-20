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
    blurb: "Thabo Sithole is losing beehives. A honey badger is feeding two cubs.",

    // Everything the player can find out. Each is gathered somewhere specific,
    // and the pitch is graded on how much of it you actually did.
    evidence: {
      loss: {
        label: "What a colony is worth to Thabo",
        detail: "Nine colonies lost since the rains. He owes the co-operative eleven thousand.",
        how: "Ask Thabo about the money, not the badger.",
      },
      edges: {
        label: "Which hives she takes",
        detail: "Always the outer rows, nearest the treeline. The old inner hives are untouched.",
        how: "Look at which hives are wrecked and which are not.",
      },
      history: {
        label: "How long she has been here",
        detail: "There are old claw marks on stands still standing. She did not arrive this year — the hives came to her.",
        how: "Look at the oldest stands.",
      },
      climbs: {
        label: "How she gets in",
        detail: "She climbs the stands. The legs are rough-sawn timber and she can grip them.",
        how: "Watch the clearing after dark.",
      },
      nursing: {
        label: "Why she needs so much",
        detail: "She is nursing two cubs in a den under the marula roots.",
        how: "Follow her back from the hives.",
      },
    },

    // What you can propose. Each is a real thing people have tried.
    proposals: {
      stands: {
        label: "Smooth steel stands, and move the outer hives in",
        needs: ["climbs", "edges"],
        cost: 0,
        works: true,
        pitch: "She climbs timber. She cannot climb smooth steel, and she cannot jump the height. Move the outer rows in behind the old ones and put every hive on a stand.",
      },
      relocate: {
        label: "Move the hives further from the treeline",
        needs: ["edges"],
        cost: 0,
        works: false,
        pitch: "She takes the outer rows. Move them away from the trees and she may lose interest.",
        why: "She followed them. Of course she followed them. She is not stupid, she is hungry.",
      },
      remove: {
        label: "Trap her and release her somewhere far away",
        needs: [],
        cost: 0,
        works: false,
        pitch: "Take her off the land entirely and let Thabo keep his hives.",
        why: "Two cubs under the marula roots, and a mother eighty kilometres away. And the clearing did not stay empty a fortnight.",
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
