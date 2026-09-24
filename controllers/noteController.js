const Subject = require("../models/Subject");
const Note = require("../models/Note");

/*
|--------------------------------------------------------------------------
| GET ALL NOTE SUBJECTS
|--------------------------------------------------------------------------
| Returns subjects that have at least one active note.
|
| GET /api/notes
|--------------------------------------------------------------------------
*/

const getNoteSubjects = async (req, res) => {
  try {
    const notes = await Note.find({
      isActive: true,
    })
      .populate("subject", "name slug description icon")
      .sort({
        "subject.name": 1,
      });

    const subjectMap = new Map();

    notes.forEach((note) => {
      if (!note.subject) return;

      const subjectId = note.subject._id.toString();

      if (!subjectMap.has(subjectId)) {
        subjectMap.set(subjectId, {
          _id: note.subject._id,
          name: note.subject.name,
          slug: note.subject.slug,
          description: note.subject.description || "",
          icon: note.subject.icon || "",
          topicCount: 0,
        });
      }

      subjectMap.get(subjectId).topicCount += 1;
    });

    const subjects = Array.from(subjectMap.values());

    res.json({
      success: true,
      total: subjects.length,
      subjects,
    });
  } catch (error) {
    console.error("Get note subjects error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/*
|--------------------------------------------------------------------------
| GET NOTES BY SUBJECT
|--------------------------------------------------------------------------
| Returns all topics for one subject.
|
| GET /api/notes/:subjectSlug
|--------------------------------------------------------------------------
*/

const getNotesBySubject = async (req, res) => {
  try {
    const { subjectSlug } = req.params;

    const subject = await Subject.findOne({
      slug: subjectSlug,
      isActive: true,
    }).select("name slug description icon");

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    const notes = await Note.find({
      subject: subject._id,
      subjectSlug,
      isActive: true,
    })
      .select("-__v")
      .sort({
        order: 1,
        createdAt: 1,
      });

    res.json({
      success: true,

      subject: {
        _id: subject._id,
        name: subject.name,
        slug: subject.slug,
        description: subject.description || "",
        icon: subject.icon || "",
      },

      total: notes.length,

      notes,
    });
  } catch (error) {
    console.error("Get notes by subject error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/*
|--------------------------------------------------------------------------
| GET SINGLE NOTE TOPIC
|--------------------------------------------------------------------------
| Returns content of one topic.
|
| GET /api/notes/:subjectSlug/:topicSlug
|--------------------------------------------------------------------------
*/

const getNoteByTopic = async (req, res) => {
  try {
    const { subjectSlug, topicSlug } = req.params;

    const subject = await Subject.findOne({
      slug: subjectSlug,
      isActive: true,
    }).select("name slug description icon");

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    const note = await Note.findOne({
      subject: subject._id,
      subjectSlug,
      slug: topicSlug,
      isActive: true,
    }).select("-__v");

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note topic not found",
      });
    }

    res.json({
      success: true,

      subject: {
        _id: subject._id,
        name: subject.name,
        slug: subject.slug,
        description: subject.description || "",
        icon: subject.icon || "",
      },

      note,
    });
  } catch (error) {
    console.error("Get note topic error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  getNoteSubjects,
  getNotesBySubject,
  getNoteByTopic,
};