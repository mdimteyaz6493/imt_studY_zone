const express = require("express");

const {
  getQuestionsBySubject,
  checkAnswer,
  getQuestionById
} = require("../controllers/questionController");

const router = express.Router();


/*
|--------------------------------------------------------------------------
| CHECK ANSWER
|--------------------------------------------------------------------------
*/

router.post("/check", checkAnswer);


/*
|--------------------------------------------------------------------------
| SINGLE QUESTION
|--------------------------------------------------------------------------
*/

router.get("/single/:id", getQuestionById);


/*
|--------------------------------------------------------------------------
| QUESTIONS BY SUBJECT
|--------------------------------------------------------------------------
*/

router.get("/:slug", getQuestionsBySubject);


module.exports = router;