const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router()

router.get('/getblogs',async (req,res)=>{
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Internal Server error occured")
    }
})

router.post('/addblogs',async (req,res)=>{
    try {
        let newBlog = await Blog.create({
            title:req.body.title,
            desc:req.body.desc,
            tags:req.body.tags,
            author:req.body.author,
        });
        return res.json({"success":"true"})
    } catch (err) {
        console.log(err);
    }
})

module.exports = router