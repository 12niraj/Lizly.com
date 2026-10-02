import express from 'express'
import User from '../models/user.model.js'

const countQrRouter= express.Router()

//--------------------------WRITE QR COUNT FROM MONGOOSE------------

countQrRouter.patch("/countqr", async(req,res)=>{
  
    if(!req.session.userId){
        return res.status(401).send({
            message:"please login first"
        })
    }

        // req.session.userId=curruser._id  -----------session id store

    const userId=req.session.userId

    await User.findByIdAndUpdate(userId, {$inc: { qrcount: 1 } })

    res.status(200).send({
        message:" Qr count updted"
    })
})
export default countQrRouter;