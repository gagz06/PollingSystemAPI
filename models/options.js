// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for options
const optionsSchema = mongoose.Schema({
    // Text of the option, which is required
    text: {
        type: String,
        required: true
    },
    // ID of the associated question, references the "question" model, and is required
    questionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'question',
        required:true
    },
    // Number of votes for this option with a default of 0
    votes:{
        type: Number,
        default:0
    },
    // A link related to voting for this option, which is optional
    link_to_vote: {
        type:String
    }
},{
    // Enable timestamps to automatically track document creation and update times
    timestamps: true
});

// Create a Mongoose model named "Options" using the schema
const Options = mongoose.model('options',optionsSchema);

// Export the "Options" model so it can be used in other parts of the application
module.exports = Options;
