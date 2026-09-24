const express = require("express");

const {
  getNoteSubjects,
  getNotesBySubject,
  getNoteByTopic,
} = require("../controllers/noteController");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Notes Routes
|--------------------------------------------------------------------------
*/

// All subjects that have notes
router.get("/", getNoteSubjects);

// Single topic
router.get("/:subjectSlug/:topicSlug", getNoteByTopic);

// All topics of a subject
router.get("/:subjectSlug", getNotesBySubject);

module.exports = router;