const questions = [
  // =====================================================
  // NUMBER SERIES
  // =====================================================

  {
    question: "Find the next number: 2, 4, 8, 16, ?",
    options: ["24", "30", "32", "36"],
    correctAnswer: 2,
    explanation: "Each number is multiplied by 2. Therefore, 16 × 2 = 32.",
    difficulty: "Easy",
    topic: "Number Series",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["number-series", "basic-reasoning"]
  },

  {
    question: "Find the next number: 5, 10, 15, 20, ?",
    options: ["22", "24", "25", "30"],
    correctAnswer: 2,
    explanation: "Each number increases by 5. Therefore, 20 + 5 = 25.",
    difficulty: "Easy",
    topic: "Number Series",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["number-series"]
  },

  {
    question: "Find the next number: 3, 6, 12, 24, ?",
    options: ["36", "42", "48", "54"],
    correctAnswer: 2,
    explanation: "Each number is multiplied by 2. Therefore, 24 × 2 = 48.",
    difficulty: "Easy",
    topic: "Number Series",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["number-series"]
  },

  {
    question: "Find the next number: 1, 4, 9, 16, ?",
    options: ["20", "25", "27", "30"],
    correctAnswer: 1,
    explanation: "These are squares of consecutive numbers: 1², 2², 3², 4². The next is 5² = 25.",
    difficulty: "Easy",
    topic: "Number Series",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["number-series", "squares"]
  },

  {
    question: "Find the next number: 10, 20, 40, 80, ?",
    options: ["120", "140", "160", "180"],
    correctAnswer: 2,
    explanation: "Each number is multiplied by 2. Therefore, 80 × 2 = 160.",
    difficulty: "Easy",
    topic: "Number Series",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["number-series"]
  },

  // =====================================================
  // CODING - DECODING
  // =====================================================

  {
    question: "If CAT is coded as DBU, how is DOG coded?",
    options: ["EPH", "EOG", "DPH", "FPH"],
    correctAnswer: 0,
    explanation: "Each letter is shifted one position forward: D→E, O→P, G→H. So DOG becomes EPH.",
    difficulty: "Easy",
    topic: "Coding-Decoding",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["coding-decoding"]
  },

  {
    question: "If PEN is coded as QFO, how is BOOK coded?",
    options: ["CPPL", "CQQM", "APPL", "DPPL"],
    correctAnswer: 0,
    explanation: "Each letter is shifted one position forward: B→C, O→P, O→P, K→L. Therefore BOOK becomes CPPL.",
    difficulty: "Easy",
    topic: "Coding-Decoding",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["coding-decoding"]
  },

  {
    question: "If A = 1, B = 2, C = 3, then what is the value of BAD?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 1,
    explanation: "B = 2, A = 1 and D = 4. Therefore, 2 + 1 + 4 = 7.",
    difficulty: "Easy",
    topic: "Coding-Decoding",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["coding-decoding", "alphabet"]
  },

  // =====================================================
  // ODD ONE OUT
  // =====================================================

  {
    question: "Find the odd one out.",
    options: ["Apple", "Mango", "Banana", "Carrot"],
    correctAnswer: 3,
    explanation: "Apple, Mango and Banana are fruits, while Carrot is a vegetable.",
    difficulty: "Easy",
    topic: "Odd One Out",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["odd-one-out"]
  },

  {
    question: "Find the odd one out.",
    options: ["Dog", "Cat", "Cow", "Rose"],
    correctAnswer: 3,
    explanation: "Dog, Cat and Cow are animals, while Rose is a flower.",
    difficulty: "Easy",
    topic: "Odd One Out",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["odd-one-out"]
  },

  // =====================================================
  // ANALOGY
  // =====================================================

  {
    question: "Book is related to Reading in the same way as Pen is related to:",
    options: ["Writing", "Drawing", "Speaking", "Walking"],
    correctAnswer: 0,
    explanation: "A book is used for reading, while a pen is used for writing.",
    difficulty: "Easy",
    topic: "Analogy",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["analogy"]
  },

  {
    question: "Bird is related to Nest in the same way as Lion is related to:",
    options: ["Den", "Stable", "Kennel", "Burrow"],
    correctAnswer: 0,
    explanation: "A bird lives in a nest, while a lion lives in a den.",
    difficulty: "Easy",
    topic: "Analogy",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["analogy"]
  },

  // =====================================================
  // BLOOD RELATION
  // =====================================================

  {
    question: "A is the brother of B. B is the sister of C. How is A related to C?",
    options: ["Father", "Brother", "Uncle", "Cousin"],
    correctAnswer: 1,
    explanation: "A is the brother of B, and B is the sister of C. Therefore, A is also the brother of C.",
    difficulty: "Easy",
    topic: "Blood Relation",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["blood-relation"]
  },

  {
    question: "Rahul is the son of Amit. Amit is the father of Neha. How is Rahul related to Neha?",
    options: ["Brother", "Father", "Uncle", "Cousin"],
    correctAnswer: 0,
    explanation: "Rahul and Neha are children of Amit. Therefore, Rahul is Neha's brother.",
    difficulty: "Easy",
    topic: "Blood Relation",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["blood-relation"]
  },

  // =====================================================
  // DIRECTION SENSE
  // =====================================================

  {
    question: "Ravi walks 10 meters north and then turns right and walks 10 meters. In which direction is he from his starting point?",
    options: ["North-West", "North-East", "South-East", "South-West"],
    correctAnswer: 1,
    explanation: "Ravi first moves north and then east. Therefore, he is in the North-East direction from his starting point.",
    difficulty: "Easy",
    topic: "Direction Sense",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["direction-sense"]
  },

  {
    question: "A person walks 5 km east and then 5 km north. In which direction is he from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    correctAnswer: 0,
    explanation: "Moving east and then north places the person in the North-East direction.",
    difficulty: "Easy",
    topic: "Direction Sense",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["direction-sense"]
  },

  // =====================================================
  // ALPHABET
  // =====================================================

  {
    question: "Which letter comes next? A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    correctAnswer: 1,
    explanation: "The sequence skips one letter each time: A, C, E, G, I.",
    difficulty: "Easy",
    topic: "Alphabet Series",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["alphabet-series"]
  },

  {
    question: "Which letter comes next? B, E, H, K, ?",
    options: ["L", "M", "N", "O"],
    correctAnswer: 2,
    explanation: "The letters increase by 3 positions: B, E, H, K, N.",
    difficulty: "Easy",
    topic: "Alphabet Series",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["alphabet-series"]
  },

  // =====================================================
  // CLASSIFICATION
  // =====================================================

  {
    question: "Which number does not belong to the group?",
    options: ["2", "4", "8", "15"],
    correctAnswer: 3,
    explanation: "2, 4 and 8 are even numbers. 15 is an odd number.",
    difficulty: "Easy",
    topic: "Classification",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["classification"]
  },

  {
    question: "Which number is different from the others?",
    options: ["9", "16", "25", "30"],
    correctAnswer: 3,
    explanation: "9, 16 and 25 are perfect squares, while 30 is not.",
    difficulty: "Easy",
    topic: "Classification",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["classification"]
  },

  // =====================================================
  // SIMPLE LOGICAL REASONING
  // =====================================================

  {
    question: "If all roses are flowers and some flowers are red, which statement is definitely true?",
    options: [
      "All roses are red",
      "All flowers are roses",
      "Roses are flowers",
      "No roses are red"
    ],
    correctAnswer: 2,
    explanation: "The first statement directly tells us that all roses are flowers.",
    difficulty: "Medium",
    topic: "Logical Reasoning",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["logical-reasoning"]
  },

  {
    question: "If Monday is the first day of the week, what day comes after Wednesday?",
    options: ["Tuesday", "Thursday", "Friday", "Saturday"],
    correctAnswer: 1,
    explanation: "The day after Wednesday is Thursday.",
    difficulty: "Easy",
    topic: "Logical Reasoning",
    practiceType: "practice-set",
    setNumber: 1,
    tags: ["logical-reasoning", "days"]
  }
];

module.exports = questions;