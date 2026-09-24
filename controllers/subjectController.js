const Subject = require("../models/Subject");

const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.aggregate([
      {
        $match: {
          isActive: true
        }
      },

      {
        $lookup: {
          from: "questions",
          let: {
            subjectId: "$_id"
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    {
                      $eq: ["$subject", "$$subjectId"]
                    },
                    {
                      $eq: ["$isActive", true]
                    }
                  ]
                }
              }
            }
          ],
          as: "questions"
        }
      },

      {
        $addFields: {
          questionCount: {
            $size: "$questions"
          }
        }
      },

      {
        $project: {
          questions: 0,
          __v: 0
        }
      },

      {
        $sort: {
          name: 1
        }
      }
    ]);

    res.status(200).json({
      success: true,
      count: subjects.length,
      subjects
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch subjects",
      error: error.message
    });
  }
};


const getSubjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const subject = await Subject.findOne({
      slug: slug.toLowerCase(),
      isActive: true
    }).lean();

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found"
      });
    }

    const Question = require("../models/Question");

    const questionCount = await Question.countDocuments({
      subject: subject._id,
      isActive: true
    });

    res.status(200).json({
      success: true,
      subject: {
        ...subject,
        questionCount
      }
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch subject",
      error: error.message
    });
  }
};


module.exports = {
  getSubjects,
  getSubjectBySlug
};