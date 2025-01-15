const mongoose=require("mongoose")
const connectDb=async()=>{
    try{
    const connect=await mongoose.connect(process.env.CONNECTION_URL)
    console.log("Database connected!")
}
catch(error)

{
console.log(error)
}}
module.exports=connectDb;