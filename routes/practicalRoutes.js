const express = require("express");

const {
  getPracticalQuestions,
  checkPracticalAnswer
} = require("../controllers/practicalController");

const router = express.Router();

router.post("/check", checkPracticalAnswer);

router.get("/:slug", getPracticalQuestions);

module.exports = router;