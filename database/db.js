const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Quiznest')
        console.log('MongoDB Connected');
    }catch (error) {
        console.error('Database Connection Error: ',error);
    }
}

module.exports = connectDB;