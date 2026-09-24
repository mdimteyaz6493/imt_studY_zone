const mongoose = require("mongoose");

const connectDB = require("../config/db");

const Subject = require("../models/Subject");
const Question = require("../models/Question");

const questionsBySubject = require("./questions");


const seedQuestions = async () => {
  try {
    await connectDB();

    console.log("Starting question seeding...\n");

    let totalInserted = 0;

    for (const [slug, questions] of Object.entries(questionsBySubject)) {

      if (!questions || questions.length === 0) {
        console.log(`⚠️ ${slug}: No questions found`);
        continue;
      }

      const subject = await Subject.findOne({
        slug
      });

      if (!subject) {
        console.log(`⚠️ ${slug}: Subject not found`);
        continue;
      }

      // Remove existing questions for this subject
      await Question.deleteMany({
        subject: subject._id
      });

      const questionsWithSubject = questions.map((question) => ({
        ...question,
        subject: subject._id,
        isActive: true,
        tags: [slug, "interview"]
      }));

      await Question.insertMany(questionsWithSubject);

      console.log(
        `✅ ${subject.name}: ${questionsWithSubject.length} questions`
      );

      totalInserted += questionsWithSubject.length;
    }

    console.log("\n=================================");
    console.log("Question seeding completed!");
    console.log(`Total Questions: ${totalInserted}`);
    console.log("=================================");

    await mongoose.connection.close();

    process.exit(0);

  } catch (error) {

    console.error("Question seed error:", error.message);

    await mongoose.connection.close();

    process.exit(1);
  }
};


seedQuestions();