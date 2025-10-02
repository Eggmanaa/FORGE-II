export interface Lesson {
  id: number;
  grade: number;
  title: string;
  caselFocus: string[];
  cstLens: string;
  description: string;
  keyPoints: string[];
  pptxFile: string;
  audioFile?: string;
}

export const lessons: Lesson[] = [
  // Grade 9
  {
    id: 1,
    grade: 9,
    title: "Living Life in Color",
    caselFocus: ["Self-Awareness", "Self-Management"],
    cstLens: "Dignity of the Human Person",
    description: "Understanding Emotions Theory",
    keyPoints: [
      "Introduces the foundational concept that emotions are non-judgmental signals that lead to adaptive actions",
      "Students learn to identify core emotions (anger, sadness, fear, joy)",
      "Understanding emotional signals and their functions",
      "Introduction to the Zones of Regulation framework"
    ],
    pptxFile: "/lessons/Session 1 Grade 9 Living Life in Color.pptx",
    audioFile: "/lessons/Session 1 Grade 9 Living Life in Color.mp3"
  },
  {
    id: 2,
    grade: 9,
    title: "The Time-Traveling Emotional Brain",
    caselFocus: ["Self-Awareness", "Social Awareness"],
    cstLens: "Healing Community",
    description: "How emotional triggers connect present experiences to past memories",
    keyPoints: [
      "Explains how the emotional brain connects present sensory experiences to the past",
      "Understanding emotional 'triggers' and being 'flooded' by past emotions",
      "Exploring how unresolved 'core memories' impact present behavior",
      "Developing awareness of past-present emotional connections"
    ],
    pptxFile: "/lessons/Session 2 Grade 9 The Time Traveling Emotional Brain.pptx",
    audioFile: "/lessons/Session 2 Grade 9 The Time Traveling Emotional Brain.mp3"
  },
  // Grade 10
  {
    id: 3,
    grade: 10,
    title: "Understanding and Managing Anxiety",
    caselFocus: ["Self-Management", "Responsible Decision-Making"],
    cstLens: "Option for the Vulnerable",
    description: "A Bring It On Approach",
    keyPoints: [
      "Provides psychoeducation on anxiety, distinguishing it from fear and stress",
      "Students identify the physical sensations of anxiety",
      "Learn about the anxiety cycle and safety behaviors",
      "Practice 'Palm Tree Coping' skills to respond to triggers without avoidance"
    ],
    pptxFile: "/lessons/Session 3 Grade 10 Understanding and Managing Anxiety.pptx",
    audioFile: "/lessons/Session 3 Grade 10 Understanding and Managing Anxiety.mp3"
  },
  {
    id: 4,
    grade: 10,
    title: "Verbal Villains & Empathy",
    caselFocus: ["Social Awareness", "Relationship Skills"],
    cstLens: "Call to Community",
    description: "Recognizing communication patterns that block empathy and practicing the '1, 2, 3's of Empathy'",
    keyPoints: [
      "Equips students to recognize and replace communication patterns that block empathy ('Verbal Villains')",
      "Introduction to the '1, 2, 3's of Empathy'—Mirroring, Validation, and Empathy",
      "Practice fostering deeper connection and understanding",
      "Building empathetic communication skills"
    ],
    pptxFile: "/lessons/Session 4 Grade 10 Verbal Villains and Empathy.pptx",
    audioFile: "/lessons/Session 4 Grade 10 Verbal Villains and Empathy.mp3"
  },
  // Grade 11
  {
    id: 5,
    grade: 11,
    title: "Relating Through Differences",
    caselFocus: ["Social Awareness", "Responsible Decision-Making"],
    cstLens: "Solidarity",
    description: "The 7 Gifts of the Father framework based on Romans 12:6-8",
    keyPoints: [
      "Explores the 7 Motivational Gifts of the Father framework",
      "Understanding personal communication styles grounded in Romans 12:6-8",
      "Identify personality-based gifts: Prophecy, Service, Teaching, Encouragement, Giving, Leadership, and Mercy",
      "Learn to bridge communication gaps with others"
    ],
    pptxFile: "/lessons/Session 5 Grade 11 Relating Through Differences (7 Motivational Giftings of the Father).pptx",
    audioFile: "/lessons/Session 5 Grade 11 Relating Through Differences (7 Motivational Giftings of the Father).mp3"
  },
  {
    id: 6,
    grade: 11,
    title: "9 Temperaments",
    caselFocus: ["Self-Awareness", "Responsible Decision-Making"],
    cstLens: "Subsidiarity",
    description: "Understanding the nine dimensions of temperament",
    keyPoints: [
      "Explains the nine dimensions of temperament as the 'how' of personality",
      "Understanding natural ways of reacting to environmental stimuli",
      "Students identify their unique temperament profile",
      "Better understanding of internal reactions and personal patterns"
    ],
    pptxFile: "/lessons/Session 6 Grade 11 9 Temperaments.pptx",
    audioFile: "/lessons/Session 6 Grade 11 9 Temperaments.mp3"
  },
  // Grade 12
  {
    id: 7,
    grade: 12,
    title: "Healthy Character I: Boundaries",
    caselFocus: ["Relationship Skills", "Responsible Decision-Making"],
    cstLens: "Rights & Responsibilities",
    description: "The Character Structure of Separation and establishing healthy boundaries",
    keyPoints: [
      "Defines character as the capacity to face reality",
      "Introduces the Character Structure of Separation—the ability to be distinct from others",
      "Learn to establish healthy boundaries and say 'no'",
      "Taking responsibility for own emotions, choices, and limits"
    ],
    pptxFile: "/lessons/Session 7 Grade 12 Healthy Character Structure Boundaries.pptx",
    audioFile: "/lessons/Session 7 Grade 12 Healthy Character Structure Boundaries.mp3"
  },
  {
    id: 8,
    grade: 12,
    title: "Healthy Character II: Facing Reality",
    caselFocus: ["Self-Management", "Social Awareness"],
    cstLens: "Hope & Redemption",
    description: "The Character Structure of Integration and embracing both positive and negative realities",
    keyPoints: [
      "Focuses on the Character Structure of Integration",
      "Ability to embrace both positive and negative realities about oneself and life",
      "Moving beyond an 'all-or-nothing' mindset",
      "Integrating painful and redemptive experiences with hope and self-compassion"
    ],
    pptxFile: "/lessons/Session 8 Grade 12 Healthy Character II Facing Reality.pptx",
    audioFile: "/lessons/Session 8 Grade 12 Healthy Character II Facing Reality.mp3"
  }
];

export const getLessonsByGrade = (grade: number): Lesson[] => {
  return lessons.filter(lesson => lesson.grade === grade);
};

export const getLessonById = (id: number): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};
