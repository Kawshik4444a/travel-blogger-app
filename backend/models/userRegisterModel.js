
const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    username:{
 type:String,
 required:[true,"required"],
    },
    email:{
        type:String,
        required:[true,"required"],
        unique:[true,"Email address already taken"]
    },
    password:{
        type:String,
        required:[true,"required"],
        
    },
},{
    timestamps:true,
});

module.exports=mongoose.model("User",userSchema);