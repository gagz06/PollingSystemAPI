const questSchema = require("../../models/question");
const optionSchema = require("../../models/options");

module.exports.deleteOption = async function (req, res) {
  try {
    if (req.params.id) {
      const options = await optionSchema.findById(req.params.id);
      if (options) {
        if (options.votes == 0) {
          await optionSchema.deleteOne(options._id);
          res.status(200).json({
            message: "Option deleted successfully",
          });
        } else {
          return res.status(405).json({
            message:
              "Options can not be deleted as voting is greater than zero",
          });
        }
      } else {
        return res.status(404).json({
          message: "Inavalid Question Id / Question not found",
        });
      }
    } else {
      return res.status(403).json({
        message: "Options id cannot be blank",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.addVoteToOption = async function (req, res) {
  try {
    if (req.params.id) {
      const option = await optionSchema.findById(req.params.id);
      if (option) {
        option.votes = option.votes + 1;
        option.save();
        return res.status(200).json({
          message: "Vote added successfully",
          option,
        });
      } else {
        return res.status(404).json({
          message: "Inavalid Question Id / Question not found",
        });
      }
    } else {
      return res.status(403).json({
        message: "Options id cannot be blank",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
