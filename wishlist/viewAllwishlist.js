const users=require('../users/userschema/userschema')


exports.ViewAllwishlist=async(req,res)=>{
    const {email}=req.headers

       
    try{
        const user=await users.findOne({email})

        if(user){
            res.status(200).json(user.wishlist)

        }
        else{
            return res.status(401).json("user not find")
        }
       


    }
    catch(err){
        res.status(401).json(err)
    }
}