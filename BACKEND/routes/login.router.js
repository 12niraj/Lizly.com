import express from 'express'
import User from '../models/user.model.js'
import bcrypt from "bcrypt";


const loginRouter= express.Router()

loginRouter.post('/login',async(req,res)=>{

    const{email ,password}=req.body
    console.log(email, password);
    
    const curruser= await User.findOne({email})
    if(!curruser){
        return res.status(401).send({
            field: "email",
            message:"Email not Exist"
        })
    }
    const passmatch = await bcrypt.compare(password, curruser.password)
    
    if(!passmatch){
        return res.status(401).send({
            field: "password",
            message:"Password not match"
        })
    }
     
    req.session.userId=curruser._id        //----------SESSION ID STORE
    console.log("LOGIN SESSION:", req.session);
    console.log("LOGIN SESSION id:", req.session.userId);

    res.status(200).send("login successful")
})
export default loginRouter