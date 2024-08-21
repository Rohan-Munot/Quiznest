const mongoose = require('mongoose')
const {string} = require("zod");
const Schema = mongoose.Schema

const options = new Schema ({
    optionText: String,
    isCorrect: Boolean,
})
const questionSchema = new Schema({
    questionBankId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionBank'
    },
    quesText: {
        type: String,
        required: true,
        trim: true
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    quesOption: [options]
},{timestamps: true})

const Question = mongoose.model('Question', questionSchema)
module.exports = {
    Question
}