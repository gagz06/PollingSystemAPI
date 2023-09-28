// Import the Express.js framework
const express = require('express');

// Create a router instance to define top-level routes
const router = express.Router();

// Import the homepageController
const homepageController = require('../controllers/v1/homePageController');

// Mount routes for the "/api" prefix
router.use('/api', require('./api'));

// Define a route for the root path ("/") and associate it with the 'home' function from the homepageController
router.get('/', homepageController.home);

// Export the router so it can be used in other parts of the application
module.exports = router;
