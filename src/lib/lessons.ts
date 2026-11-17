export type Virtue =
  | "Prudence"
  | "Justice"
  | "Fortitude"
  | "Temperance"
  | "Faith"
  | "Hope"
  | "Charity"
  | "Humility"
  | "Self-Knowledge"
  | "Self-Mastery";

export interface Lesson {
  id: number;
  grade: number;
  title: string;
  /** Short one-line summary shown under the title */
  description: string;
  /** Virtues this session forms */
  virtues: Virtue[];
  /** Catholic Social Teaching lens */
  cstLens: string;
  keyPoints: string[];
  pptxFile: string;
  audioFile?: string;
}

export interface GradeInfo {
  grade: number;
  theme: string;
  summary: string;
}

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/Eggmanaa/FORGE-II/main/public/lessons";

export const grades: GradeInfo[] = [
  {
    grade: 9,
    theme: "Knowing the Heart",
    summary:
      "Freshmen begin with self-knowledge: learning to name the passions of the heart and to govern them with reason and grace.",
  },
  {
    grade: 10,
    theme: "Courage & Charity",
    summary:
      "Sophomores practice fortitude in the face of fear and charity in the way they speak to and listen to one another.",
  },
  {
    grade: 11,
    theme: "Gifts & Temperament",
    summary:
      "Juniors discover how God has uniquely made them, and how to put their gifts at the service of others.",
  },
  {
    grade: 12,
    theme: "Mature Character",
    summary:
      "Seniors build the structures of mature character: responsibility, healthy boundaries, and the humility to face reality with hope.",
  },
];

export const getGradeInfo = (grade: number): GradeInfo | undefined =>
  grades.find((g) => g.grade === grade);

export const lessons: Lesson[] = [
  // Grade 9
  {
    id: 1,
    grade: 9,
    title: "Living Life in Color",
    description: "The passions as gifts to be rightly ordered",
    virtues: ["Self-Knowledge", "Temperance"],
    cstLens: "Dignity of the Human Person",
    keyPoints: [
      "The passions (anger, sadness, fear, joy) are morally neutral movements of the heart, given by God to move us toward the good",
      "Learning to name what we feel so reason can guide what we do",
      "How each passion signals something worth paying attention to",
      "Using the Zones framework as a practical tool for self-mastery",
    ],
    pptxFile: `${GITHUB_RAW_BASE}/Session 1 Grade 9 Living Life in Color.pptx`,
    audioFile: `${GITHUB_RAW_BASE}/Session 1 Grade 9 Living Life in Color.mp3`,
  },
  {
    id: 2,
    grade: 9,
    title: "The Time-Traveling Emotional Brain",
    description: "How memory shapes our reactions, and how prudence redeems them",
    virtues: ["Self-Knowledge", "Prudence"],
    cstLens: "Healing Community",
    keyPoints: [
      "How the brain links present experiences to past memories, creating \"triggers\"",
      "Recognizing when we are \"flooded\" and our reactions outrun our reason",
      "How unhealed \"core memories\" can shape present choices and habits",
      "Rightly remembering the past, an integral part of prudence, so we can act well today",
    ],
    pptxFile: `${GITHUB_RAW_BASE}/Session 2 Grade 9 The Time Traveling Emotional Brain.pptx`,
    audioFile: `${GITHUB_RAW_BASE}/Session 2 Grade 9 The Time Traveling Emotional Brain.mp3`,
  },
  // Grade 10
  {
    id: 3,
    grade: 10,
    title: "Understanding and Managing Anxiety",
    description: "A Bring It On approach: fortitude in the face of fear",
    virtues: ["Fortitude", "Hope"],
    cstLens: "Option for the Vulnerable",
    keyPoints: [
      "What anxiety is, and how it differs from fear and stress",
      "Recognizing how anxiety shows up in the body",
      "How avoidance and \"safety behaviors\" feed the anxiety cycle",
      "\"Palm Tree\" practices for standing firm, the way fortitude bends without breaking",
    ],
    pptxFile: `${GITHUB_RAW_BASE}/Session 3 Grade 10 Understanding and Managing Anxiety.pptx`,
    audioFile: `${GITHUB_RAW_BASE}/Session 3 Grade 10 Understanding and Managing Anxiety.mp3`,
  },
  {
    id: 4,
    grade: 10,
    title: "Verbal Villains & Empathy",
    description: "Charity in speech: replacing words that wound with words that build up",
    virtues: ["Charity", "Justice"],
    cstLens: "Call to Community",
    keyPoints: [
      "Recognizing \"Verbal Villains,\" habits of speech that wound and divide",
      "The \"1, 2, 3's of Empathy\": Mirroring, Validation, and Empathy",
      "Listening as an act of charity that gives others the attention they are due",
      "Practicing speech that builds up (Ephesians 4:29)",
    ],
    pptxFile: `${GITHUB_RAW_BASE}/Session 4 Grade 10 Verbal Villains and Empathy.pptx`,
    audioFile: `${GITHUB_RAW_BASE}/Session 4 Grade 10 Verbal Villains and Empathy.mp3`,
  },
  // Grade 11
  {
    id: 5,
    grade: 11,
    title: "Relating Through Differences",
    description: "The 7 Gifts of the Father from Romans 12:6-8",
    virtues: ["Charity", "Humility"],
    cstLens: "Solidarity",
    keyPoints: [
      "The 7 Motivational Gifts of the Father, grounded in Romans 12:6-8",
      "Discovering your own gifts: Prophecy, Service, Teaching, Encouragement, Giving, Leadership, and Mercy",
      "Why different gifts lead to different ways of seeing and communicating",
      "Humbly honoring the gifts of others and building bridges across differences",
    ],
    pptxFile: `${GITHUB_RAW_BASE}/Session 5 Grade 11 Relating Through Differences (7 Motivational Giftings of the Father).pptx`,
    audioFile: `${GITHUB_RAW_BASE}/Session 5 Grade 11 Relating Through Differences (7 Motivational Giftings of the Father).mp3`,
  },
  {
    id: 6,
    grade: 11,
    title: "9 Temperaments",
    description: "Knowing how you are made in order to govern yourself well",
    virtues: ["Self-Knowledge", "Prudence"],
    cstLens: "Subsidiarity",
    keyPoints: [
      "The nine dimensions of temperament as the \"how\" of personality",
      "Our natural ways of reacting to the world around us",
      "Identifying your own temperament profile",
      "Using self-knowledge to make prudent choices and grow in self-governance",
    ],
    pptxFile: `${GITHUB_RAW_BASE}/Session 6 Grade 11 9 Temperaments.pptx`,
    audioFile: `${GITHUB_RAW_BASE}/Session 6 Grade 11 9 Temperaments.mp3`,
  },
  // Grade 12
  {
    id: 7,
    grade: 12,
    title: "Healthy Character I: Boundaries",
    description: "The Character Structure of Separation",
    virtues: ["Justice", "Fortitude"],
    cstLens: "Rights & Responsibilities",
    keyPoints: [
      "Character defined as the capacity to face reality",
      "The Character Structure of Separation: being distinct from others",
      "The courage to say \"no\" and set healthy boundaries",
      "Taking ownership of your own choices, limits, and reactions",
    ],
    pptxFile: `${GITHUB_RAW_BASE}/Session 7 Grade 12 Healthy Character Structure Boundaries.pptx`,
    audioFile: `${GITHUB_RAW_BASE}/Session 7 Grade 12 Healthy Character Structure Boundaries.mp3`,
  },
  {
    id: 8,
    grade: 12,
    title: "Healthy Character II: Facing Reality",
    description: "The Character Structure of Integration",
    virtues: ["Hope", "Humility"],
    cstLens: "Hope & Redemption",
    keyPoints: [
      "The Character Structure of Integration",
      "Embracing both the good and the broken in ourselves and in life",
      "Moving beyond an \"all-or-nothing\" mindset",
      "Receiving painful experiences in light of redemption, with hope and mercy toward oneself",
    ],
    pptxFile: `${GITHUB_RAW_BASE}/Session 8 Grade 12 Healthy Character II Facing Reality.pptx`,
    audioFile: `${GITHUB_RAW_BASE}/Session 8 Grade 12 Healthy Character II Facing Reality.mp3`,
  },
];

export interface VirtueInfo {
  name: Virtue;
  kind: "Cardinal" | "Theological" | "Foundational";
  definition: string;
}

export const virtueGuide: VirtueInfo[] = [
  { name: "Prudence", kind: "Cardinal", definition: "Right reason in action. Seeing clearly and choosing well." },
  { name: "Justice", kind: "Cardinal", definition: "Giving God and neighbor what is their due." },
  { name: "Fortitude", kind: "Cardinal", definition: "Firmness in difficulty and constancy in doing good." },
  { name: "Temperance", kind: "Cardinal", definition: "Ordering the passions and desires toward the good." },
  { name: "Faith", kind: "Theological", definition: "Trusting God and all He has revealed." },
  { name: "Hope", kind: "Theological", definition: "Confident desire for God's promises, even in suffering." },
  { name: "Charity", kind: "Theological", definition: "Loving God above all, and neighbor as oneself." },
  { name: "Humility", kind: "Foundational", definition: "Seeing ourselves truthfully, as God sees us." },
  { name: "Self-Knowledge", kind: "Foundational", definition: "Understanding how we are made, the first step of growth." },
  { name: "Self-Mastery", kind: "Foundational", definition: "Governing ourselves so we are free to love." },
];

export const getLessonsByGrade = (grade: number): Lesson[] =>
  lessons.filter((lesson) => lesson.grade === grade);

export const getLessonById = (id: number): Lesson | undefined =>
  lessons.find((lesson) => lesson.id === id);

export const getLessonsForVirtue = (virtue: Virtue): Lesson[] =>
  lessons.filter((l) => l.virtues.includes(virtue));
