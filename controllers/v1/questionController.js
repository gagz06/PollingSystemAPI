const questSchema = require("../../models/question");
const optionSchema = require("../../models/options");

module.exports.showAllQuestionsAndOptions = async function (req, res) {
  try {
    const quest = await questSchema
      .find({})
      .populate("options")
      .select("_id title options");
    if (quest) {
      return res.status(200).json(quest);
    } else {
      return res.status(404).json({
        message: "No Question found in DB ",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.fetchQuestionAndOptions = async function (req, res) {
  try {
    if (req.params.id) {
      const quest = await questSchema
        .findOne({ _id: req.params.id })
        .populate("options", "_id  text votes link_to_vote")
        .select("_id title options _id  text votes link_to_vote");
      if (quest) {
        return res.status(200).json(quest);
      } else {
        return res.status(404).json({
          message: "Inavalid Question Id / Question not found",
        });
      }
    } else {
      return res.status(403).json({
        message: "Question id cannot be blank",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports.deleteQuestion = async function (req, res) {
  try {
    if (req.params.id) {
      const quest = await questSchema
        .findOne({ _id: req.params.id })
        .populate("options");
      if (quest) {
        let voteCount = false;
        if (quest.options.length > 0) {
          for (let option of quest.options) {
            if (option.votes > 0) {
              voteCount = true;
            }
          }
        }
        if (voteCount == true) {
          return res.status(405).json({
            message: "Question can not be deleted as options has been voted",
          });
        }
        await optionSchema.deleteMany({ questionId: quest._id });
        await questSchema.deleteOne(quest._id);
        return res.status(200).json({
          message: "Question deleted successfully",
        });
      } else {
        return res.status(404).json({
          message: "Inavalid Question Id / Question not found",
        });
      }
    } else {
      return res.status(403).json({
        message: "Question id cannot be blank",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports.createQuestion = function (req, res) {
  try {
    if (req.body.title) {
      questSchema
        .create({
          title: req.body.title,
        })
        .then((quest) => {
          return res.status(200).json({
            question: quest,
            message: "question created successfully",
          });
        })
        .catch((err) => {
          return res.status(422).json({
            error: err,
            message: "error while creating question",
          });
        });
    } else {
      return res.status(403).json({
        message: "Question can not be empty",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.createOption = async function (req, res) {
  try {
    if (req.params.id) {
      if (req.body.text) {
        const questionId = req.params.id;
        const question = await questSchema.findById(questionId);
        if (question) {
          const option = await optionSchema.create({
            text: req.body.text,
            questionId: questionId,
          });

          let link_to_vote =
            req.protocol +
            "://" +
            req.headers.host +
            "api/v1/options/" +
            option._id +
            "/add_vote";
          option.link_to_vote = link_to_vote;
          await option.save();
          question.options.push(option._id);
          await question.save();
          return res.status(200).json({
            option: option,
            message: "Option created successfully",
          });
        } else {
          return res.status(404).json({
            message: "Inavalid Question Id / Question not found",
          });
        }
      } else {
        return res.status(403).json({
          message: "Option cannot be blank",
        });
      }
    } else {
      return res.status(403).json({
        message: "Question id cannot be blank",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
