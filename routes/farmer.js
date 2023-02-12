const express = require('express');
const Farmer = require('../models/Farmer');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const fetchFarmer = require('../middleware/fetchFarmer')
require("dotenv").config()

const JWT_SECRET = process.env.JWT_SECRET


//Create a user using POST : api/auth/createUser
router.post('/createFarmer',[
    // body('email',"Enter a valid email").isEmail(),
    body('mobileNumber',"Enter a valid Phone number").isMobilePhone(),
    body('name',"Enter a valid name").isLength({min:3}),
    body('password',"Password must be atleast 6 characters").isLength({min:6})
],async (req,res)=>{
    let success = false;
    //If there are errors , return Bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try{
    //Check if email exists already
    let user = await Farmer.findOne({mobileNumber:req.body.mobileNumber})
    if(user){
        return res.status(400).json({success,error:"Sorry this mobile NUmber is already in use"})
    }
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password,salt)
    user = await Farmer.create({
        name: req.body.name,
        mobileNumber: req.body.mobileNumber,
        password:secPass,
        // password: req.body.password,
        age:req.body.age,
        gender:req.body.gender,
        annualIncome:req.body.annualIncome,
        location:req.body.location,
        crops:req.body.crops,
    });
    const data = {
        user:{
            id:user.id
        }
    }
    const authToken = jwt.sign(data,JWT_SECRET);
    success = true;
    res.json({success,authToken})
    }catch(err){
        // console.error(err.message);
        res.status(500).send({"err":err.message})
    }
    //   .then(user => res.json(user))
    //   .catch((err)=>{
    //     // res.json(err);
    //     res.json({error:"Email already exists",message:err.message})
    //   })
})


//Authenticate a User using POST: /api/auth/login
router.post('/login',[
    body('mobileNumber',"Enter a valid phone Number"),
    body('password',"Password Can't be Blank").exists()
],async (req,res)=>{
    //Check for errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    const {mobileNumber,password} = req.body;
    try {
        let user = await Farmer.findOne({mobileNumber});
        if(!user){
            return res.status(400).json({success,error:"Please try to login with correct credentials"})
        }
        const passwordCompare =await bcrypt.compare(password,user.password);
        if(!passwordCompare){   
            return res.status(400).json({success,error:"Please try to login with correct credentials"})
        }
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        success = true;
        res.json({success,authToken});


    } catch (err) {
        console.error(err.message);
        res.status(500).send("Internal server error occured")
    }


})

//Get User details in POST /api/auth/getuser
router.post('/getuser',fetchFarmer,async (req,res)=>{
    try {
        const userId = req.user.id;
        const user = await Farmer.findById(userId).select("-password")
        res.send(user)
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error occured")
    }
})

module.exports = router