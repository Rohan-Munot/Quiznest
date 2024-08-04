const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")
const { UnauthenticatedError } = require('../errors')

// Middleware for handling auth

const auth = async(req,res,next)=>{
    const authHeader=req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
throw new UnauthenticatedError('Authentication Invalid')
    }
      
    const token=authHeader.split(' ')[1]

    try{
        const payload=jwt.verify(token,JWT_SECRET)
        req.admin={adminID:payload.adminID,name:payload.username}
        next()
    }  catch(error){
       throw new UnauthenticatedError('Authentication invalid')
    }
}

module.exports=auth