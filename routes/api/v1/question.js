const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/v1/questionController');

//Creating new question
router.post('/create',questionController.createQuestion);
// creating new option for question
router.post('/:id/options/create',questionController.createOption);
//delete question
router.delete('/:id/delete',questionController.deleteQuestion);
// to view question and its options
router.get('/:id',questionController.fetchQuestionAndOptions);
module.exports = router;