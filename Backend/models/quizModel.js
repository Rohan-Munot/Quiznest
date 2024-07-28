const mongoose = require('mongoose');
const Schema = mongoose.Schema

const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    difficultyLevel: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
    }
},{timestamps: true})

const Quiz = mongoose.model('Quiz', quizSchema)

module.exports = {
    Quiz
};