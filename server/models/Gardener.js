const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Shashank:4EuFgWLruiNSpfnb@synergy.z9xy6vh.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connection Successfull");
}).catch(()=>{
    console.log("Oops! Connection Failure!");
})

const GardenerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  age:{
    type:Number,
    required:true
  },
  gender:{
    type:String,
    required:true
  },
  mobileNumber: {
    type: Number,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  gardenSize: {
    type: Number,
    required: true
  },
  plants:[
    {type:String}
  ],
  joinDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Gardener", GardenerSchema);