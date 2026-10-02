
import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const connectDB= async ()=>{
    try{
         await mongoose.connect(process.env.MONGO_URL)
         console.log("Database connected succesfully");  
    }
    catch(error){
      console.log("connection fail",error);
      console.log(error.message);
        process.exit(1);
    }
}
export default connectDB