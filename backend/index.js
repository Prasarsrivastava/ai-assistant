import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import authcontroller from "./controllers/auth.controller.js";
import cors from "cors";
dotenv.config()

const app=express()
app.use(cors({
    origin:["http://localhost:5173"],
  
    credentials:true
}))

const port=process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
// app.get("/",(req,res)=>{
//     res.send("Hello 2783 World")
// })

app.listen(port,()=>{
    connectDB()
    console.log(`Server is running on port `);
})