const express = require("express");
const router = express.Router();
const optionsController = require("../../../controllers/v1/optionsController");
//deleting the option
router.delete("/:id/delete", optionsController.deleteOption);
//increment the vote count
router.post("/:id/add_vote", optionsController.addVoteToOption);

module.exports = router;
