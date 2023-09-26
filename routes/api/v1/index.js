const express = require('express');
const router = express.Router();

router.use('/question',require('./question'));
router.use('/options',require('./options'));
module.exports = router;