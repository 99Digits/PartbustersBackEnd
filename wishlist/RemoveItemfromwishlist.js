const users=require('../users/userschema/userschema')


exports.RemoveItemfromWishList=async(req,res)=>{
    const {email,title}=req.body
    try{
        const user=await users.findOne({email})

        if(user){
            const itemIndex=user.wishlist.findIndex((item)=>item.title===title)
            console.log(itemIndex);
            if(itemIndex!==-1){
              console.log("fsfsed");               
                user.wishlist.splice(itemIndex,1)
                await user.markModified('wishlist')
                await user.save()
                return res.status(200).json(user.wishlist)
            }
            else{
               return res.status(401).json("something went wrong")
            }

        }
        else{
           return res.status(401).json("user not found")
        }

    }
    catch(err){
       return res.status(401).json(err)
    }
}