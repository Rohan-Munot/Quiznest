const mongoose = require('mongoose');
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/Quiznest').then(r => console.log('Connected to the Database!'));

const adminSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
})

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;