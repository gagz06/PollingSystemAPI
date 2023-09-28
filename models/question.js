// Import the Mongoose library
const mongoose = require('mongoose');

// Define the Mongoose schema for the "question" document
const questionSchema = new mongoose.Schema({
    // ID field, which is a Number
    id: {
        type: Number
    },
    // Title field, a required String that must be unique
    title: {
        type: String,
        required: true,
        unique: true
    },
    // Options field, an array of ObjectIds that reference the 'options' collection
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'options'
    }]
}, {
    // Enable timestamps to automatically track document creation and updates
    timestamps: true
});

// Create a Mongoose model named "Question" based on the schema
const Question = mongoose.model('question', questionSchema);

// Export the "Question" model to use it in other parts of the application
module.exports = Question;
