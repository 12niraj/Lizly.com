import express from 'express'

import User from '../models/user.model.js'

const profileRouter=  express.Router()

profileRouter.get("/profile", async(req,res)=>{
    
  console.log("inside profile");
  

    if(!req.session.userId)
    {
        return res.status(401).send({
          message: "please login "
        })
    }
    
   

    const curruser = await User.findById(req.session.userId)


  if (!curruser) {
    return res.status(404).send({
      message: "User not found"
    });
  }
    res.status(200).send({
          message: "Succesful login ",
          name:curruser.fullname,
          email:curruser.email,
        
        })
    
})
profileRouter.patch("/profile", async (req, res) => {

  if (!req.session.userId) {
    return res.status(401).send({
      message: "Please login"
    });
  }

  const { name, email } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    req.session.userId,
    {
      fullname: name,
      email: email
    },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(404).send({
      message: "User not found"
    });
  }

  res.status(200).send({
    message: "Profile updated successfully",
    name: updatedUser.fullname,
    email: updatedUser.email
  });

});

export default profileRouter