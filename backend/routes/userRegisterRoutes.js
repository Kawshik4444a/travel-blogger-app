const express=require("express")
const router=express.Router()
const {userRegisterController,userLoginController}=require("../controllers/userRegisterController")
const protect=require("../middleware/protect")
const upload = require("../middleware/upload"); 
const {getAllPosts}=require("../controllers/allpostsController")
const {createPost}=require('../controllers/postController')
const {searchPosts}=require("../controllers/searchplaceController")
const {profile}=require("../controllers/userProfile")

router.post('/register',userRegisterController) //register page
router.post('/login',userLoginController)     //login page
router.post("/post", protect, upload.single("image"), createPost);  // to upload the post
router.get("/allpost", protect, getAllPosts);  //to see all the post
router.get("/search", protect,searchPosts);  //to search the post   //http://localhost:6000/api/app/search?location=mumbai
router.get("/profiles",protect,profile)     // to get deatils of the post
router.get('/next',protect,(req,res)=>{     //simpe demo to test the middlwware
 res.status(200).json({message:"middleware working"})
})

module.exports=router
 
