const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
firstname : {
    type:String,
    required:true
},
email : {
    type:String,
    required:true,
    unique:true
},
lastname : {
    type:String,
    required:true
},
phone : {
    type:Number,
    required:true,
    unique:true
},
password : {
    type:String,
    required:true
},
age : {
    type:Number,
    required:true
},

confirmpassword : {
    type:String,
    required:true
},
gender : {
    type:String,
    required:true,
},




})

// creating a collection
const Register = new mongoose.model("Register",employeeSchema);
module.exports = Register;