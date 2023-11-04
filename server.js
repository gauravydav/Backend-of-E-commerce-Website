import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js             '

//configure.env
dotenv.config();
connectDB();
//test object
const app=express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


const PORT=process.env.PORT ||8000;

app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} on ${PORT}` )
})