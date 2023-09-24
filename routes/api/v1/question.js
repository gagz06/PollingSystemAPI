const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/v1/questionController');

router.get('/',questionController.questHome);
router.post('/create',questionController.createQuestion);

module.exports = router;