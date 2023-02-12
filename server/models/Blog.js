const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Shashank:4EuFgWLruiNSpfnb@synergy.z9xy6vh.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connection Successfull");
}).catch(()=>{
    console.log("Oops! Connection Failure!");
})

const BlogSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    required:true
  },
  tag:{
    type:String
  },
  date:{
    type:Date,
    default:Date.now
  },
  author:{
    type:String,
    required:true
  }

});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;