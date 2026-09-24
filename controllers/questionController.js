const Question = require("../models/Question");
const Subject = require("../models/Subject");


/*
|--------------------------------------------------------------------------
| GET QUESTIONS BY SUBJECT
|--------------------------------------------------------------------------
| Example:
| GET /api/questions/python
|
| Default: 50 questions
|
*/

const getQuestionsBySubject = async (req, res) => {
  try {
    const { slug } = req.params;

    let limit = parseInt(req.query.limit) || 50;

    if (limit < 1) {
      limit = 50;
    }

    if (limit > 100) {
      limit = 100;
    }

    const subject = await Subject.findOne({
      slug: slug.toLowerCase(),
      isActive: true
    });

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found"
      });
    }

    const totalQuestions = await Question.countDocuments({
      subject: subject._id,
      isActive: true
    });

    if (totalQuestions === 0) {
      return res.status(404).json({
        success: false,
        message: "No questions available for this subject"
      });
    }

    const actualLimit = Math.min(limit, totalQuestions);

    const questions = await Question.aggregate([
      {
        $match: {
          subject: subject._id,
          isActive: true
        }
      },

      {
        $sample: {
          size: actualLimit
        }
      },

      {
        $project: {
          correctAnswer: 0,
          __v: 0
        }
      }
    ]);

    res.status(200).json({
      success: true,

      subject: {
        id: subject._id,
        name: subject.name,
        slug: subject.slug,
        description: subject.description,
        icon: subject.icon
      },

      totalQuestions,

      requestedQuestions: actualLimit,

      questions
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch questions",
      error: error.message
    });
  }
};


/*
|--------------------------------------------------------------------------
| CHECK ANSWER
|--------------------------------------------------------------------------
| POST /api/questions/check
|
| Body:
| {
|   "questionId": "...",
|   "answer": 2
| }
|
*/

const checkAnswer = async (req, res) => {
  try {
    const { questionId, answer } = req.body;

    if (!questionId) {
      return res.status(400).json({
        success: false,
        message: "questionId is required"
      });
    }

    if (answer === undefined || answer === null) {
      return res.status(400).json({
        success: false,
        message: "answer is required"
      });
    }

    const selectedAnswer = Number(answer);

    if (![0, 1, 2, 3].includes(selectedAnswer)) {
      return res.status(400).json({
        success: false,
        message: "Answer must be between 0 and 3"
      });
    }

    const question = await Question.findOne({
      _id: questionId,
      isActive: true
    });

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found"
      });
    }

    const isCorrect =
      selectedAnswer === question.correctAnswer;

    res.status(200).json({
      success: true,

      result: {
        correct: isCorrect,

        selectedAnswer,

        correctAnswer: question.correctAnswer,

        correctAnswerText:
          question.options[question.correctAnswer],

        explanation: question.explanation
      }
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to check answer",
      error: error.message
    });
  }
};


/*
|--------------------------------------------------------------------------
| GET SINGLE QUESTION
|--------------------------------------------------------------------------
*/

const getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await Question.findOne({
      _id: id,
      isActive: true
    })
      .select("-correctAnswer -__v")
      .populate("subject", "name slug");

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found"
      });
    }

    res.status(200).json({
      success: true,
      question
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch question",
      error: error.message
    });
  }
};


module.exports = {
  getQuestionsBySubject,
  checkAnswer,
  getQuestionById
};