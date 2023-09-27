const express = require('express');
const router = express.Router();
const homepageController= require('../controllers/v1/homePageController');
router.use('/api',require('./api'));
router.use('/',homepageController.home);
module.exports = router;