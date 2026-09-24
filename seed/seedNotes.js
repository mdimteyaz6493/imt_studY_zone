const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("../config/db");

const Subject = require("../models/Subject");
const Note = require("../models/Note");

const notes = require("./notes");

dotenv.config();

const seedNotes = async () => {
  try {
    await connectDB();

    let totalInserted = 0;

    for (const [slug, subjectNotes] of Object.entries(notes)) {
      console.log(`\nProcessing notes: ${slug}`);

      const subject = await Subject.findOne({
        slug,
        isActive: true,
      });

      if (!subject) {
        console.log(`Subject not found: ${slug}`);
        continue;
      }

      await Note.deleteMany({
        subject: subject._id,
      });

      const notesWithSubject = subjectNotes.map((note) => ({
        ...note,
        subject: subject._id,
        subjectSlug: slug,
        isActive: true,
      }));

      await Note.insertMany(notesWithSubject);

      console.log(
        `${slug}: ${notesWithSubject.length} notes inserted`
      );

      totalInserted += notesWithSubject.length;
    }

    console.log("\n--------------------------------");
    console.log("Notes seeded successfully!");
    console.log(`Total topics: ${totalInserted}`);
    console.log("--------------------------------");

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Notes seed error:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedNotes();