const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Subject = require("../models/Subject");

const subjects = [
  {
    name: "Python",
    slug: "python",
    description: "Practice Python interview and programming questions.",
    icon: "🐍"
  },
  {
    name: "SQL",
    slug: "sql",
    description: "Practice SQL queries, database concepts and interview questions.",
    icon: "🗄️"
  },
  {
    name: "JavaScript",
    slug: "javascript",
    description: "Practice JavaScript fundamentals and interview questions.",
    icon: "🟨"
  },
  {
    name: "HTML",
    slug: "html",
    description: "Practice HTML concepts and interview questions.",
    icon: "🌐"
  },
  {
    name: "CSS",
    slug: "css",
    description: "Practice CSS concepts and frontend interview questions.",
    icon: "🎨"
  },
  {
    name: "React",
    slug: "react",
    description: "Practice React.js interview questions.",
    icon: "⚛️"
  },
  {
    name: "Node.js",
    slug: "nodejs",
    description: "Practice Node.js and backend interview questions.",
    icon: "🟢"
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    description: "Practice MongoDB and NoSQL database questions.",
    icon: "🍃"
  },
  {
    name: "Java",
    slug: "java",
    description: "Practice Java programming interview questions.",
    icon: "☕"
  },
  {
    name: "C",
    slug: "c",
    description: "Practice C programming questions.",
    icon: "©️"
  },
  {
    name: "C++",
    slug: "cpp",
    description: "Practice C++ programming and OOP questions.",
    icon: "💻"
  },
  {
    name: "Excel",
    slug: "excel",
    description: "Practice Microsoft Excel interview questions.",
    icon: "📊"
  },
  {
    name: "Power BI",
    slug: "power-bi",
    description: "Practice Power BI and data visualization questions.",
    icon: "📈"
  },
  {
  name: "Data Analytics",
  slug: "data-analytics",
  description: "Practice Data Analytics interview questions.",
  icon: "DA",
  isActive: true
},
  {
    name: "DBMS",
    slug: "dbms",
    description: "Practice DBMS concepts and interview questions.",
    icon: "🗃️"
  },
  {
    name: "Operating System",
    slug: "operating-system",
    description: "Practice Operating System interview questions.",
    icon: "🖥️"
  },
  {
    name: "Computer Networks",
    slug: "computer-networks",
    description: "Practice networking concepts and interview questions.",
    icon: "🌐"
  },
  {
    name: "Git & GitHub",
    slug: "git-github",
    description: "Practice Git and GitHub interview questions.",
    icon: "🔀"
  },
  {
    name: "HR Interview",
    slug: "hr-interview",
    description: "Practice common HR interview questions.",
    icon: "👔"
  }
];

const seedSubjects = async () => {
  try {
    await connectDB();

    await Subject.deleteMany({});

    await Subject.insertMany(subjects);

    console.log("Subjects seeded successfully!");
    console.log(`Total Subjects: ${subjects.length}`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Subject seed error:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedSubjects();