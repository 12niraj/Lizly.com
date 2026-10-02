
import mongoose from 'mongoose'

const clickdateSchema = new mongoose.Schema({

    date:{
        type: Date,
        default: Date.now
    },

    shorturl:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Shorturl"
    }
})

const Clickdate = new mongoose.model("Clickdate", clickdateSchema)
export default Clickdate