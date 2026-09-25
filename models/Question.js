const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true
    },

    question: {
      type: String,
      required: true,
      trim: true
    },

    options: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length === 4;
        },
        message: "Every question must have exactly 4 options."
      }
    },

    // 0 = A
    // 1 = B
    // 2 = C
    // 3 = D
    correctAnswer: {
      type: Number,
      required: true,
      min: 0,
      max: 3
    },

    explanation: {
      type: String,
      default: ""
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy"
    },

    topic: {
      type: String,
      default: ""
    },

    // interview / practice-set / mock-test / topic-practice
    practiceType: {
      type: String,
      enum: [
        "interview",
        "practice-set",
        "mock-test",
        "topic-practice"
      ],
      default: "interview"
    },

    // Useful for Practice Set 1, Set 2, Set 3...
    setNumber: {
      type: Number,
      default: 1,
      min: 1
    },

    tags: {
      type: [String],
      default: []
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Question", questionSchema);