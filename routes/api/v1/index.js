// Import the Express.js framework
const express = require("express");

// Create a router instance to define routes
const router = express.Router();

// Mount the "questions" routes by requiring the "./questions" module
router.use("/questions", require("./questions"));

// Mount the "options" routes by requiring the "./options" module
router.use("/options", require("./options"));

// Export the router so it can be used in the main Express application
module.exports = router;
