module.exports.home = function (req, res) {
  try {
    return res.status(200).json({
      message: "Reached API home page",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
