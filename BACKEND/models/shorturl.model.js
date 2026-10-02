
import moongoos from 'mongoose'

const shorturlSchema= new moongoos.Schema({

full_url:{
  type:String,
  required:true
},
short_url:{
  type:String,
  required:true,
  index:true,
  unique:true
},
click:{
  type:Number,
  required:true,
  default:0,
},
user:{
  type:moongoos.Schema.Types.ObjectId,
  ref:"User",
}
},{ timestamps: true })

const Shorturlschema = moongoos.model("Shorturl", shorturlSchema )

export default Shorturlschema;