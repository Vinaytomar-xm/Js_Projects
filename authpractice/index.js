import express from "express";
import dotenv from "dotenv";
dotenv.config()

import mongodbConnected from "./config/db.js"
import userRouter from "./routes/user.js"


const app = express();
const Port = process.env.PORT 

mongodbConnected();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user", userRouter)

app.listen(Port, ()=>(console.log(`server is running on ${Port}`)));