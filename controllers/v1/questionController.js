const quest = require('../../models/question');

module.exports.questHome = function (req,res) {
    res.status(200).json({
        message: "Reached question"
    });
}

module.exports.createQuestion = async function(req,res){
try {
    if(req.body.question){
        quest.create({title:req.body.question})
        .then((quest)=>{
            return res.status(200).json({
                question: quest,
                message:"question created successfully"
            });
        })
        .catch((err)=>{
            return res.status(422).json({
                error: err,
                message:"error while creating question"
            });
        })
    }
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: error.message
    });
}
};