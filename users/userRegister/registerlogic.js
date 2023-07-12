const user=require('../userschema/userschema')

exports.Register=async(req,res)=>{
    const {email,psw,cpsw}=req.body
    try{

        const userdata=await user.findOne({email})
        if(userdata){
            return res.status(400).json("user already exists")
        }
        else{
             const newuser=await new user({
                email,psw,cpsw
                
            })
            await newuser.save()
            return res.status(200).json(newuser)
        }

    }catch(err){
        console.log(err);
    }
}