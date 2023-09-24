const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    options:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'options'
    }]
},{
    timestamps: true
});

const Question = mongoose.model('question',questionSchema);

module.exports=Question;