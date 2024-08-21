const mongoose = require('mongoose');
const Schema = mongoose.Schema

const questionBankSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        trim: true,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'Admin',
    },
    questions:{
        type: Schema.Types.ObjectId,
        ref: 'Question',

    }
},{timestamps: true})

const QuestionBank = mongoose.model('QuestionBank', questionBankSchema)

module.exports = {
    QuestionBank
};