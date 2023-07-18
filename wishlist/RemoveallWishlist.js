const users=require('../users/userschema/userschema')

exports.DeleteAllwishlist=async(req,res)=>{
    const {email,title}=req.body
    try{
        const user=await users.findOne({email})
        if(user){

            user.wishlist=[]
            await user.markModified('wishlist')
            await user.save()
            res.status(200).json(user.wishlist)

            
        }
        else{
            res.status(401).json("user does not exists")
        }
           
    }
    catch(err){
        res.status(401).json(err)
    }
}