import express from 'express'
import User from '../models/user.model.js';

const checkloginRouter= express.Router()

checkloginRouter.get("/checklogin",async (req,res)=>{

      console.log("🔥 CHECKLOGIN ROUTE HIT");
  console.log("SESSION is :", req.session);
  console.log("USER ID:", req.session.userId);

 
    if(!req.session.userId)
    {
      return  res.status(401).send ({
            message: "Login please",
        })
    }
    const curruser = await User.findById(req.session.userId);

     res.status(200).send ({
            message: "User is logged in",
            name: curruser.fullname,
            email:curruser.email,
        })
})
export default checkloginRouter