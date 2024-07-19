const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema



const adminSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'Please enter fullname'],
        trim: true,
    },
    username: {
        type: String,
        required: [true, 'Please enter username'],
        trim: true,
        unique: [true, 'Email already exists'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Password must be at least 6 characters'],
    }
}, { timestamps: true });

adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch (error) {
        next(error);
    }
})

adminSchema.methods.comparePassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    }catch (error) {
        throw new Error('Error comparing passwords');
    }
}

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;