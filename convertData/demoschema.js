const mongoose=require('mongoose')

const demoSchema=mongoose.Schema({
    modelno:{
        type:String,
        required:true
    },
    configid:{
        type:String,
        required:true
    },
    fileurl:{
        type:String,
        required:true
    },
    archivepath:{
        type:String,
        required:true
    },
    filetype:{
        type:String,
        required:true

    }
})

const demodatas=mongoose.model("demodatas",demoSchema)

module.exports=demodatas