const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    email:{
        required:true,
        unique:true,
        type:String
    },
    psw:{
        required:true,
        type:String
    },
    cpsw:{
        required:true,
        type:String
    },
    cart:[],
    wishlist:[]

})

const users=mongoose.model("users",userSchema)

module.exports=users