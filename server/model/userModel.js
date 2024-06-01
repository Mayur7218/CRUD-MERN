import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  fname:{
    type:String,
    required:true
  },
  lname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

const userModel=mongoose.model('mayurdata',userSchema)
export {userModel};