const mongoose = require('mongoose');

const optionsSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'question'
    },
    votes:{
        type: Int32Array,
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