import express from 'express'
import Shorturlschema from '../models/shorturl.model.js'
import Clickdate from '../models/clickdate.model.js'



const shortController= async (req,res)=>{
    const {id}= req.params
    const currurl= await Shorturlschema.findOneAndUpdate
    ({short_url:id},{$inc:{click:1}})

    

    if(currurl)
    {
        const clickdate1= new Clickdate ({
  date: Date.now(),
  shorturl: currurl._id
})

        await clickdate1.save()
        console.log("click date", clickdate1);
        
        res.redirect(currurl.full_url)
        
    }
    else{
        res.status(400).send("not found")
    }
}

export default shortController