const mongoose = require('mongoose');

const optionsSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    questionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'question',
        required:true
    },
    votes:{
        type: Number,
        default:0
    },
    link_to_vote: {
        type:String
    }
},{
    timestamps: true
});


const Options = mongoose.model('options',optionsSchema);

module.exports = Options;