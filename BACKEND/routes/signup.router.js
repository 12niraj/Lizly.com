import express from 'express'
import User from '../models/user.model.js'
import bcrypt from "bcrypt";
const signupRouter= express.Router()



signupRouter.post("/signup",async (req,res)=>{

    const {fullname, email, password, confirmpassword,terms}= req.body
    console.log("1hit form");
    
  // console.log("user detail",fullname, email, password, confirmpassword);
  
  const curruser= await User.findOne({email})
  if(curruser)
  {
    return res.status(409).send({
      field:"email",
      message: "Email already register"
    })
  }
  if(password!=confirmpassword){
    return res.status(401).send({
      field:"password",
      message:"Password not match"
    })
  }
if (!terms) {
  return res.status(400).send({
    message: "Please accept the Terms of Service and Privacy Policy"
  });
}
  
  const hashpass= await bcrypt.hash(password,10)
    const newuser= new User({fullname, email, password:hashpass})
    await newuser.save()

    req.session.userId=newuser._id
    res.status(201).send({
      message:"User register successfully"
    })
    
    
})
export default signupRouter