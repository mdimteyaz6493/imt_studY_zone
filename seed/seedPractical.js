const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("../config/db");

const Subject = require("../models/Subject");
const PracticalQuestion = require("../models/PracticalQuestion");

const practicalQuestions = require("./practical");

dotenv.config();

const seedPracticalQuestions = async () => {
  try {
    await connectDB();

    let totalInserted = 0;

    for (const [slug, questions] of Object.entries(practicalQuestions)) {
      console.log(`\nProcessing: ${slug}`);

      const subject = await Subject.findOne({
        slug
      });

      if (!subject) {
        console.log(`Subject not found: ${slug}`);
        continue;
      }

      await PracticalQuestion.deleteMany({
        subject: subject._id
      });

      const questionsWithSubject = questions.map((question) => ({
        ...question,
        subject: subject._id,
        isActive: true,
        tags: question.tags || [slug, "practical"]
      }));

      await PracticalQuestion.insertMany(
        questionsWithSubject
      );

      console.log(
        `${slug}: ${questionsWithSubject.length} practical questions inserted`
      );

      totalInserted += questionsWithSubject.length;
    }

    console.log("\n--------------------------------");
    console.log("Practical questions seeded successfully!");
    console.log(`Total: ${totalInserted}`);
    console.log("--------------------------------");

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Practical seed error:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedPracticalQuestions();