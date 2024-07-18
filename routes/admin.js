const {Router} = require('express');
const adminMiddleware = require('../middlewares/admin');
const zod = require('zod')
const router = Router();
const jwt =require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

const signupSchema = zod.object({
    username: zod.string().email().trim(),
    password: zod.string().min(6),
    firstname: zod.string().trim(),
    lastname: zod.string().trim(),
})

router.post('/signup', async (req, res) => {
    const {username, password, lastname, firstname} = signupSchema.safeParse(req.body);
})



module.exports = router;