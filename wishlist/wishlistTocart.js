const users=require('../users/userschema/userschema')

exports.WishlistToCart=async(req,res)=>{
    const {email}=req.headers
    const {title}=req.body
    try{
        const user=await users.findOne({email})
        if(user){
            const wishlistArray=user.wishlist

            wishlistArray.forEach((item)=>{
                const exist=user.cart.find((data)=>item.title===data.title)
                if(exist){
                    exist.quantity+=1
                }else{
                    user.cart.push(item)
                }
            })
        
          
          
           
           user.wishlist=[]
           
            await user.markModified('cart')
            await user.markModified('wishlist')
            await user.save()
            return res.status(200).json(user.cart)

        }
        else{
            res.status(404).json("user not found")
        }

    }
    catch(err){
        return res.status(401).json(err)
    }

}

