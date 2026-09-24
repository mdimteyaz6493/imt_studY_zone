const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    columns: [
      {
        name: {
          type: String,
          required: true
        },

        type: {
          type: String,
          required: true
        }
      }
    ],

    rows: {
      type: mongoose.Schema.Types.Mixed,
      default: []
    }
  },
  { _id: false }
);

const practicalQuestionSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true
    },

    title: {
      type: String,
      default: ""
    },

    question: {
      type: String,
      required: true,
      trim: true
    },

        code: {
      type: String,
      default: ""
    },

    tables: {
      type: [tableSchema],
      default: []
    },

    options: {
      type: [String],
      required: true,

      validate: {
        validator: function (value) {
          return value.length === 4;
        },
        message: "Exactly 4 options are required."
      }
    },

    correctAnswer: {
      type: Number,
      required: true,
      min: 0,
      max: 3
    },

    explanation: {
      type: String,
      required: true
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy"
    },

    topic: {
      type: String,
      required: true
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

module.exports = mongoose.model(
  "PracticalQuestion",
  practicalQuestionSchema
);