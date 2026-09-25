const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Subject = require("../models/Subject");

const subjects = [
  // =====================================================
  // 💻 TECHNICAL
  // =====================================================

  {
    name: "Python",
    slug: "python",
    description: "Practice Python interview and programming questions.",
    category: "technical",
    icon: "🐍"
  },

  {
    name: "SQL",
    slug: "sql",
    description:
      "Practice SQL queries, database concepts and interview questions.",
    category: "technical",
    icon: "🗄️"
  },

  {
    name: "JavaScript",
    slug: "javascript",
    description:
      "Practice JavaScript fundamentals and interview questions.",
    category: "technical",
    icon: "🟨"
  },

  {
    name: "HTML",
    slug: "html",
    description: "Practice HTML concepts and interview questions.",
    category: "technical",
    icon: "🌐"
  },

  {
    name: "CSS",
    slug: "css",
    description:
      "Practice CSS concepts and frontend interview questions.",
    category: "technical",
    icon: "🎨"
  },

  {
    name: "React",
    slug: "react",
    description: "Practice React.js interview questions.",
    category: "technical",
    icon: "⚛️"
  },

  {
    name: "Node.js",
    slug: "nodejs",
    description:
      "Practice Node.js and backend interview questions.",
    category: "technical",
    icon: "🟢"
  },

  {
    name: "MongoDB",
    slug: "mongodb",
    description:
      "Practice MongoDB and NoSQL database questions.",
    category: "technical",
    icon: "🍃"
  },

  {
    name: "Java",
    slug: "java",
    description:
      "Practice Java programming interview questions.",
    category: "technical",
    icon: "☕"
  },

  {
    name: "C",
    slug: "c",
    description: "Practice C programming questions.",
    category: "technical",
    icon: "©️"
  },

  {
    name: "C++",
    slug: "cpp",
    description:
      "Practice C++ programming and OOP questions.",
    category: "technical",
    icon: "💻"
  },

  {
    name: "Excel",
    slug: "excel",
    description:
      "Practice Microsoft Excel interview questions.",
    category: "technical",
    icon: "📊"
  },

  {
    name: "Power BI",
    slug: "power-bi",
    description:
      "Practice Power BI and data visualization questions.",
    category: "technical",
    icon: "📈"
  },

  {
    name: "Data Analytics",
    slug: "data-analytics",
    description:
      "Practice Data Analytics interview questions.",
    category: "technical",
    icon: "📊"
  },

  {
    name: "DBMS",
    slug: "dbms",
    description:
      "Practice DBMS concepts and interview questions.",
    category: "technical",
    icon: "🗃️"
  },

  {
    name: "Operating System",
    slug: "operating-system",
    description:
      "Practice Operating System interview questions.",
    category: "technical",
    icon: "🖥️"
  },

  {
    name: "Computer Networks",
    slug: "computer-networks",
    description:
      "Practice networking concepts and interview questions.",
    category: "technical",
    icon: "🌐"
  },

  {
    name: "Git & GitHub",
    slug: "git-github",
    description:
      "Practice Git and GitHub interview questions.",
    category: "technical",
    icon: "🔀"
  },

  {
    name: "HR Interview",
    slug: "hr-interview",
    description:
      "Practice common HR interview questions.",
    category: "technical",
    icon: "👔"
  },

  // =====================================================
  // 🧠 REASONING
  // =====================================================

  {
    name: "Reasoning",
    slug: "reasoning",
    description:
      "Practice logical reasoning questions for competitive exams.",
    category: "reasoning",
    icon: "🧠"
  },

  // =====================================================
  // 🔢 QUANTITATIVE APTITUDE
  // =====================================================

  {
    name: "Quantitative Aptitude",
    slug: "quantitative-aptitude",
    description:
      "Practice quantitative aptitude and advanced mathematics questions.",
    category: "quantitative",
    icon: "🔢"
  },

  // =====================================================
  // 📖 ENGLISH
  // =====================================================

  {
    name: "English",
    slug: "english",
    description:
      "Practice English grammar, vocabulary and competitive exam questions.",
    category: "english",
    icon: "📖"
  },

  // =====================================================
  // 🌍 GENERAL AWARENESS
  // =====================================================

  {
    name: "General Awareness",
    slug: "general-awareness",
    description:
      "Practice general knowledge, current affairs and general awareness questions.",
    category: "general-awareness",
    icon: "🌍"
  },

  // =====================================================
  // 💻 COMPUTER AWARENESS
  // =====================================================

  {
    name: "Computer Awareness",
    slug: "computer-awareness",
    description:
      "Practice computer fundamentals and computer awareness questions.",
    category: "computer-awareness",
    icon: "💻"
  }
];

const seedSubjects = async () => {
  try {
    await connectDB();

    await Subject.deleteMany({});

    await Subject.insertMany(subjects);

    console.log("========================================");
    console.log("Subjects seeded successfully!");
    console.log(`Total Subjects: ${subjects.length}`);
    console.log("========================================");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Subject seed error:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedSubjects();