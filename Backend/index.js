const express = require("express");
const app = express();
const adminRouter =require('./routes/admin')
const cors = require('cors')


app.use(cors())
app.use(express.json());


app.use('/admin', adminRouter)

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Quiznest')
        console.log('MongoDB Connected');
    }catch (error) {
        console.error('Database Connection Error: ',error);
    }
}
connectDB().then(r => 'connected db');

app.listen(3000, () => console.log("Server running on port 3000"));