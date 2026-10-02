import express from 'express'
import User from '../models/user.model.js';
import Shorturlschema from '../models/shorturl.model.js';
import Clickdate from '../models/Clickdate.model.js';

const userdashRouter= express.Router()
 
//--------------------------READ QR COUNT FROM MONGOOSE------------

userdashRouter.get("/dashboard", async (req,res)=>{

   console.log("DASHBOARD ROUTE HIT");
 

    if(!req.session.userId){
      return  res.status(402).send({
        message:"User login first"
     })
    
    }

   //  await User.findByIdAndUpdate({_id: req.session.userId },{ $inc})

     const user = await User.findById(req.session.userId);
     
     const total_link= await Shorturlschema.countDocuments({
      user:req.session.userId
     })
     console.log("rcurret user ", user);
  const alluser= await Shorturlschema.find({user: req.session.userId})

     console.log("all uer ", alluser);
     
    const totalclicks= alluser.reduce((total, link)=> total + link.click,0)

  const allusermap= await Shorturlschema.find({user: req.session.userId})
  .sort({createdAt: -1 })
 
const allclickdate = await Clickdate.find({
  shorturl: { $in: allusermap.map(link => link._id) }
}); 

     res.status(200).send({
        message:"succesful",
        qrcount: user.qrcount,  //------- TAKE QRCOUNT FROM MONGOOSE
        total_link: total_link,   
        totalclicks:totalclicks,
        allusermap:allusermap,
        allclickdate:allclickdate
     

      })


}
)
export default userdashRouter