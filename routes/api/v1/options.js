// Import the Express.js framework
const express = require("express");

// Create a router instance to define option-related routes
const router = express.Router();

// Import the optionsController, which  contains route handling functions
const optionsController = require("../../../controllers/v1/optionsController");

// Route to delete an option by ID
router.delete("/:id/delete", optionsController.deleteOption);

// Route to increment the vote count for an option by ID
router.post("/:id/add_vote", optionsController.addVoteToOption);

// Export the router so it can be used in other parts of the application
module.exports = router;
