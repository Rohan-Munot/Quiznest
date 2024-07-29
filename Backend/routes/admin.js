const {Router, response} = require('express');
const zod = require('zod')
const router = Router();
const jwt =require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const Admin = require("../models/adminModel");
const {Quiz} = require("../models/quizModel");
const adminMiddleware = require('../middlewares/admin')
const {Question} = require("../models/questionModel");
const {mongo} = require("mongoose");
const mongoose = require("mongoose");

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
        const newAdmin = await Admin.create({
            username: req.body.username,
            password: req.body.password,
            fullname: req.body.fullname,
        });
        await newAdmin.save();
        const userId = newAdmin._id;
        const token = jwt.sign({
            userId
        }, JWT_SECRET);

        res.json({
            message: "User created successfully",
            token: token
        })
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

const quizSchema = zod.object({
    title: zod.string(),
    difficultyLevel: zod.string(),
    quizAt: zod.date()
})
router.post('/quiz/create',adminMiddleware, async (req, res)=>{
    try {
        const date = new Date(req.body.quizAt).toString()
        req.body.quizAt = new Date(date)
        const {title, difficultyLevel, quizAt} = quizSchema.parse(req.body)
        const newQuiz = await Quiz.create({
            title,
            difficultyLevel,
            quizAt
        })
        const quizId = newQuiz._id
        res.json({
            message: "Quiz Created successfully",
            quizId
        })
    }catch (err) {
        if (err instanceof zod.ZodError) {
            res.status(403).json({msg: 'Invalid Inputs', errors: err.errors})
        }
        res.status(403).json({msg: 'Error Creating Quiz',errors: err.message})
    }
})
// const questionSchema = zod.object({
//     quesText: zod.string(),
//     quesOption: zod.array(object)
// })
router.post('/quiz/create/:quizId/questions',adminMiddleware, async (req, res)=>{
    try {
        const quizId = req.params.quizId
        const question = await Question.create({
            quizId,
            quesText: req.body.quesText,
            quesOption: req.body.quesOption
        })
        res.json({
            msg: "question added successfully",
            question
        })
    }catch (err) {
        res.status(403).json({msg: 'Error Creating Question'})
    }
})
router.get('/quiz/upcoming',adminMiddleware,async (req,res)=>{
    try {
        const now = new Date()
        const upcomingQuizzes =  await Quiz.find({quizAt: {$gt: now}})
        res.json({
            upcomingQuizzes
        })
    }catch (err) {
        res.status(403).json({msg:"error fetching quizzes", err})
    }
})
module.exports = router;