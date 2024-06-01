import express from 'express'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import route from './routes/userRoute.js'

const app=express();
dotenv.config();
app.use(bodyParser.json())
app.use(cors())

const port=process.env.PORT;
const URL=process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
  console.log("db connected");
}).catch((error)=>{
  console.log("not connected");
  console.log(error);
})

app.listen(port,()=>{
  console.log("Listening to port :"+port);  
})

app.use('/api',route)
