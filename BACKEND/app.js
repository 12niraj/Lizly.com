import express from 'express'
import { nanoid } from 'nanoid'
import "dotenv/config";
import connectDB from './config/mongodb.js';
import cors from "cors";
import shotnerRouter from './routes/shortner.route.js';
import createShorturl from './routes/createshortUrl.router.js';
import signupRouter from './routes/signup.router.js';
import loginRouter from './routes/login.router.js';
import session from 'express-session';
import MongoStore from "connect-mongo";
import userdashRouter from './routes/userdash.router..js';
import countQrRouter from './routes/countQr.router.js';
import deletelinkRouter from './routes/deletelink.route.js';
import checkloginRouter from './routes/checklogin.router.js';
import profileRouter from './routes/profile.router.js';
import logoutRouter from './routes/logout.router.js';

const app= express()

app.use(express.json())

app.use(cors({
   origin: [
    "http://localhost:5173",
    "https://lizly-com-wz23.vercel.app"
  ],
  credentials: true
}));

app.set("trust proxy", 1);

app.use(session({
    secret:"my-session",
    resave:false,
    saveUninitialized:false,

store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
    }),

 cookie: {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 1000 * 60 * 60 * 24
}
    }
 ))

app.get("/home",(req,res)=>{
    res.send("short url working")
})
connectDB()

app.use(createShorturl)
app.use(userdashRouter)
app.use(checkloginRouter)
app.use(profileRouter)       // ✅ BEFORE shotnerRouter
app.use(shotnerRouter)
app.use(signupRouter)
app.use(loginRouter)
app.use(countQrRouter)
app.use(deletelinkRouter)
app.use(logoutRouter)

const PORT=3001
app.listen(PORT,()=>{
    console.log("app listen on port:",PORT);
    
})