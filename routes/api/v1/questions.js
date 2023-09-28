// Import the Express.js framework
const express = require("express");

// Create a router instance to define question-related routes
const router = express.Router();

// Import the questionController, which likely contains route handling functions
const questionController = require("../../../controllers/v1/questionController");

// Route to get a list of all questions and their options
router.get("/", questionController.showAllQuestionsAndOptions);

// Route to create a new question
router.post("/create", questionController.createQuestion);

// Route to create a new option for a question (identified by :id)
router.post("/:id/options/create", questionController.createOption);

// Route to delete a question (identified by :id)
router.delete("/:id/delete", questionController.deleteQuestion);

// Route to view a question and its options (identified by :id)
router.get("/:id", questionController.fetchQuestionAndOptions);

// Export the router so it can be used in other parts of the application
module.exports = router;
