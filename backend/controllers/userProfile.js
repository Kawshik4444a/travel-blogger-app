const User = require("../models/userRegisterModel");
const asyncHandler=require("express-async-handler")
const Post = require("../models/postModel"); 
const profile=asyncHandler(async(req,res)=>{
 const   userId=req.user//this is from middleware we get

   const users=await User.findById(userId)
   if(!users){
    res.status(400).json({message:"no user found"})
   }
   const postCount = await Post.countDocuments({ user: userId });//counts noof posts
   const allPost=await Post.find({user:userId})  // to display the post uploaded of the user
   res.status(200).json({username:users.username,
                        email:users.email,
                        Posts:postCount,
                        MyPosts:allPost,
   })
    
})
module.exports={profile}