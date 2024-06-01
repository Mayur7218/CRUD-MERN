import mongoose from "mongoose";
import { userModel } from "../model/userModel.js";

export const create = async (req, resp) => {
  try {
    const newUser = new userModel(req.body)
    if (!newUser) {
      return resp.json({ success: false, msg: "User not added" })
    }
    const saveuser=await newUser.save();
    return resp.json({ success: true,msg:"User Created success" })

  } catch (error) {
    console.log(error);
    resp.json({ success: false, msg: "Error" })
  }
}
 
export const get=async(req,resp)=>{
  try {
    const checkuser=await userModel.findById(req.params.id);
    if(!checkuser){
      return resp.json({success:false,msg:"User not found"})
    }
    return resp.json({success:true,msg:checkuser})
  } catch (error) {
    console.log(error);
    resp.json({success:false,msg:"Error"})
  }
}

export const getAll=async(req,resp)=>{
  try {
    const getuser=await userModel.find();
    if(!getuser){
      resp.json({success:false,msg:"Users Not Found"})
    }
    resp.json({success:true,msg:getuser})
  } catch (error) {
    console.log(error);
    return resp.json({success:false,msg:"Error"})
  }
}

export const updateUser=async(req,resp)=>{
  try {
    const findUser=await userModel.findById(req.params.id)
    if(!findUser){
      return resp.json({success:false,msg:"User dont exists"})
    }
    const newUpdate=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!newUpdate){
      return resp.json({success:false,msg:"User not updated"})
    }
    return resp.json({success:true,msg:"User Updated success"})
  } catch (error) {
    console.log(error);
    return resp.json({success:false,msg:"Error"})
    
  }
}

export const deleteUser=async(req,resp)=>{
  try {
      const findUser=await userModel.findById(req.params.id);
      if(!findUser){
        return resp.json({success:false,msg:"User dont exist"})
      }
      const del=await userModel.deleteOne({_id:req.params.id});
      return resp.json({success:true,msg:"User Deleted success"})

  } catch (error) {
    console.log(error);
    return resp.json({success:false,msg:"Error"})
  }
} 