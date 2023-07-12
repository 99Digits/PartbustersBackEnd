const users= require('../users/userschema/userschema')

exports.RemoveAllcart=async(req,res)=>{
    const {email}=req.headers
    try{
        const user=await users.findOne({email})
        if(user){
            user.cart=[]
            await user.markModified('cart')
            await user.save()
            res.status(200).json(user.cart)

        }
        else{
            res.status(404).json("user not Found")
        }

    }
    catch(err){
        res.status(500).json(err)
    }
}