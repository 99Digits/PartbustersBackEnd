const users=require('../users/userschema/userschema')

exports.AddTowishList=async(req,res)=>{
    const {email,image,title,quantity,price}=req.body
    // const file=req.file.filename

    try{

        const user=await users.findOne({email})

        if(user){

            const itemIndex=await user.wishlist.findIndex((item)=>item.title===title)
            if(itemIndex!==-1){
              return  res.status(401).json("item is already exist in your wishList")
            }
            else{
                user.wishlist.push({image,title,quantity,price})
            }
            await user.markModified('wishlist')
            await user.save()
           return res.status(200).json(user.wishlist)
            
            

        }
        else{
           return res.status(401).json("user  not found")
        }
            
    }
    catch(err){
       return res.status(500).json(err)
    }
}