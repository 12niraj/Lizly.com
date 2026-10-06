import  express from 'express'
import Shorturlschema from '../models/shorturl.model.js'
import generateNanoid from '../utils/generateNano.js'
import User from '../models/user.model.js'


const createurlConroller= async(req,res)=>{
   
    const{full_url}=req.body

    console.log("full url is", full_url);
    
    const short_url= generateNanoid(5)                   

    const newshorturl= new Shorturlschema({full_url, short_url, user:req.session.userId})       //------save to database
    
    await newshorturl.save()
    
    res.send(short_url)

}

export default createurlConroller