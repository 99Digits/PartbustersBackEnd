const users=require('../users/userschema/userschema')


exports.DecrementCartItems=async(req,res)=>{
    const {email}=req.headers
    const {title}=req.body
    
    try{
        const user=await users.findOne({email})
        if(user){
            const cartitems=user.cart.findIndex((item)=>item.title===title)
            if(cartitems!==-1){
                if(user.cart[cartitems].quantity>1){
                    user.cart[cartitems].quantity-=1
                }
                else{
                    user.cart.splice(cartitems,1)
                }
      
               
                await user.markModified('cart')
                await user.save()
                res.status(200).json(user.cart)
            }
            else{
                return res.status(401).json("not matched")
            }
          

        }
        else{
            return res.status(404).json("user nnot foound")
        }

    }
    catch(err){
        return res.status(404).json(err)
    }


}