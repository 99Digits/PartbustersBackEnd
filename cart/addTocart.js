const users=require('../users/userschema/userschema')

exports.AddToCart=async(req,res)=>{
    const {email,image,title,quantity,price}=req.body
    const qty=quantity
   

   try{
    const user=await users.findOne({email})

    if(user){
   const cartItemIndex = user.cart.findIndex((item) => item.title === title);

      if (cartItemIndex !== -1) {
        user.cart[cartItemIndex].quantity += quantity;
       
      } else {
        user.cart.push({ image, title, quantity, price });
     
      }
      await user.markModified('cart');
       await user.save();
        return res.status(200).json(user.cart);

      
      
    }
    else{
        res.status(401).json("user deoes not exists")
    }
   }
   catch(err){
    res.status(401).json(err)
   }
       

}