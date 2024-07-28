const mongoose = require('mongoose')
const {string} = require("zod");
const Schema = mongoose.Schema

const options = new Schema ({
    optionText: String,
    isCorrect: Boolean,
})
const questionSchema = new Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    quesText: {
        type: String,
        required: true,
        trim: true
    },
    quesOption: [options]
})

const Question = mongoose.model('Question', questionSchema)
module.exports = {
    Question
}