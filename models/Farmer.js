const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Shashank:4EuFgWLruiNSpfnb@synergy.z9xy6vh.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connection Successfull");
}).catch(()=>{
    console.log("Oops! Connection Failure!");
})

const FarmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobileNumber:{
    type:Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  annualIncome: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  crops: [{type:String}],
  joinDate:{
    type:Date,
    default:Date.now
  }
});

const Farmer = mongoose.model("Farmer", FarmerSchema);

module.exports = Farmer;