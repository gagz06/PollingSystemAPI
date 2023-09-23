const express = require('express');
const router = express.Router();

const testAPicontroller= require('../../../controllers/v1/testapicontroller');

router.get('/',testAPicontroller.index);

module.exports = router;