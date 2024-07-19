const {Router} = require('express');
const zod = require('zod')
const router = Router();
const jwt =require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const Admin = require("../models/adminModel");

const signupSchema = zod.object({
    username: zod.string().email().trim(),
    password: zod.string().min(6),
    fullname: zod.string().trim()
})

router.post('/signup', async (req, res) => {
    try {
        const {fullname, username, password} = signupSchema.parse(req.body);
        const existingAdmin = await Admin.findOne({username})
        if (existingAdmin) {
            return res.status(400).json({msg: 'Admin already exists'})
        }
        const newAdmin = await Admin.create(req.body);
        await newAdmin.save();
        res.status(201).json({msg:"Signup successfully"})
    }catch (error) {
        if (error instanceof zod.ZodError) {
            res.status(403).json({msg: 'Invalid Inputs'})
        }
        res.status(403).json({msg: 'Error Creating Admin'})
    }
})
const signinSchema = zod.object({
    username: zod.string().email().trim(),
    password: zod.string().min(6),
})
router.post('/signin', async (req, res) => {
    try {
        const {username, password} = signinSchema.parse(req.body);

        // Find Admin
        const admin = await Admin.findOne({username})
        if (!admin) {
            res.status(401).json({
                msg: 'Invalid username or password'
            })
        }

        // Check password
        const isMatch = await admin.comparePassword(password)
        if (!isMatch) {
            res.status(401).json({msg: 'Invalid username or password (two)'})
        }

        // generate JWT token
        const token = jwt.sign({
            adminID: admin._id,
            username: admin.username
        },JWT_SECRET)

    //     On successful authentication
        res.json({
            msg: 'Successfully logged in' ,
            token: token
        })
    }catch (error) {
        if (error instanceof zod.ZodError) {
            res.status(403).json({msg: 'Invalid Inputs'})
        }
        res.status(403).json({msg: 'Error Signing In'})
    }
})


module.exports = router;