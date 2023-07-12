const user=require('../userschema/userschema')
const jwt=require('jsonwebtoken')

exports.userLogin=async(req,res)=>{
    const {email,psw}=req.body
    try{

        const userdata=await user.findOne({email,psw})
        if(userdata){
          const token=  jwt.sign({
                loginacno:email
            },"super")
            return res.status(200).json({data:userdata,token:token})
        }
        else{
            return res.status(401).json('User notfound please register')
        }

    }
    catch(err){
        return res.status(405).json(err)
    }
}