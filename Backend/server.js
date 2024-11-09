import express from "express";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js"
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";
import connectToDb from "./db/connectToDb.js";
import {app,server} from "./socket/socket.js"


dotenv.config();
const PORT=process.env.PORT;

app.use(cookieParser());
app.use(express.json());


app.use('/api/auth',authRoute)
app.use('/api/message',messageRoute)
app.use('/api/user',userRoute)

server.listen(PORT,()=>{
    connectToDb();
    console.log(`server running on port ${PORT}`)
})