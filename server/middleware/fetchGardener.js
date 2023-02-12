const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
require("dotenv").config()

const fetchGardener= (req,res,next)=>{
    //Get user from jwt token and add id to req object
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token,JWT_SECRET)
        req.user = data.user;
        next()
    } catch (err) {
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
}

module.exports = fetchGardener;
