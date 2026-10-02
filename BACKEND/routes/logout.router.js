import express from 'express'

const logoutRouter = express.Router()

logoutRouter.post('/logout',(req, res)=>{

req.session.destroy((err)=>{

    if(err){
      return res.status(500).send({
        message: "Logout failed"
      });
    }
     
    res.clearCookie("connect.sid");

        res.status(200).send({
      message: "Logged out successfully!"
    });

})

})

export default logoutRouter