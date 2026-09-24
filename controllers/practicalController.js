const Subject = require("../models/Subject");
const PracticalQuestion = require("../models/PracticalQuestion");

// GET /api/practical/sql
const getPracticalQuestions = async (req, res) => {
  try {
    const { slug } = req.params;

    const subject = await Subject.findOne({
      slug,
      isActive: true
    });

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found"
      });
    }

    const questions = await PracticalQuestion.find({
      subject: subject._id,
      isActive: true
    })
      .select("-correctAnswer")
      .sort({ createdAt: 1 });

    res.json({
      success: true,
      subject: {
        name: subject.name,
        slug: subject.slug
      },
      total: questions.length,
      questions
    });
  } catch (error) {
    console.error("Get practical questions error:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// POST /api/practical/check
const checkPracticalAnswer = async (req, res) => {
  try {
    const { questionId, answer } = req.body;

    if (!questionId) {
      return res.status(400).json({
        success: false,
        message: "Question ID is required"
      });
    }

    if (![0, 1, 2, 3].includes(Number(answer))) {
      return res.status(400).json({
        success: false,
        message: "Answer must be between 0 and 3"
      });
    }

    const question = await PracticalQuestion.findById(questionId);

    if (!question || !question.isActive) {
      return res.status(404).json({
        success: false,
        message: "Question not found"
      });
    }

    const selectedAnswer = Number(answer);
    const isCorrect = selectedAnswer === question.correctAnswer;

    res.json({
      success: true,
      correct: isCorrect,
      selectedAnswer,
      correctAnswer: question.correctAnswer,
      correctAnswerText: question.options[question.correctAnswer],
      explanation: question.explanation
    });
  } catch (error) {
    console.error("Check practical answer error:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

module.exports = {
  getPracticalQuestions,
  checkPracticalAnswer
};