// Export the "home" function as part of the module's exports
module.exports.home = function (req, res) {
  try {
    // Send a JSON response with a 200 (OK) status code and a success message
    return res.status(200).json({
      message: "API running successfully",
    });
  } catch (error) {
    // If an error occurs, log it to the console and send a JSON response with a 500 (Internal Server Error) status code
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
