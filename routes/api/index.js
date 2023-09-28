// Import the Express.js framework
const express = require('express');

// Create a router instance to define top-level routes
const router = express.Router();

// Mount routes for API version 'v1'
router.use('/v1', require('./v1'));

// Export the router so it can be used in other parts of the application
module.exports = router;
