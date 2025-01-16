const express=require('express')
const app=express()
const router=require("./routes/userRegisterRoutes")
const cors = require("cors");

const dotenv=require("dotenv").config()
const connectDb=require("./db/config.js")
const PORT=process.env.PORT||6000
app.use(cors({
    origin: "https://statuesque-froyo-cf4ea9.netlify.app/", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
connectDb()
app.use(express.json())
app.use("/api/app",router) // goes to Router
app.listen(PORT,()=>{
    console.log(`App running in port ${PORT}`)

})