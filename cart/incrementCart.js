const users=require('../users/userschema/userschema')

exports.IncrementCart=async(req,res)=>{

    const {email}=req.headers
    try{
        const user=await users.findOne({email})
        if(user){

            const cartitem=user.cart.findIndex((item)=>item.title)

            if(cartitem !==-1){
                    user.cart[cartitem].quantity+=1
                    
                    await user.markModified('cart')
                    await user.save()
                    res.status(200).json(user.cart)


            }
            else{
                return res.status(401).json("perticular data not found")
            }

        }
        else{
            res.status(401).json("user not found")
        }

    }
    catch(err){
        res.status(404).json(err)
    }
}

exports.ViewAllCart=async(req,res)=>{
    const {email}=req.headers
    try{
        const user=await users.findOne({email})
        if(user){
            
            return res.status(200).json(user.cart)

        }
        else{
          return  res.statu(404).json("user not Found")
        }

    }
    catch(err){
       return res.status(500).json(err)
    }

}