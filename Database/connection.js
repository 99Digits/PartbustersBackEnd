const mongoose=require('mongoose')

const DB=process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('partbusters MongoDB database Connected Successfully');
}).catch((err)=>{
    console.log(err);
})
