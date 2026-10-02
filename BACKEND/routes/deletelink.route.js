import express from 'express'
import Shorturlschema from '../models/shorturl.model.js'

const deletelinkRouter=  express.Router()

deletelinkRouter.delete("/deletelink/:id", async(req,res)=>{
   
     if (!req.session.userId) {
    return res.status(401).send({
      message: "Please login first"
    });
  }

    const id = req.params.id;

     const deletedLink =  await Shorturlschema.findByIdAndDelete(id)
   console.log("DELETE ROUTE HIT");
  console.log("ID RECEIVED:", req.params.id);
  if (!deletedLink) {
    return res.status(404).send({
      message: "Link not found"
    });
  }

  res.status(200).send({
    message: "Link deleted successfully"
  });
})

export default deletelinkRouter