require('dotenv').config()
const router=require('./router/router')
const express=require('express')
const cors=require('cors')
require('./Database/connection')
const server=express()

server.use(cors())
server.use(express.json())
server.use(router)



const PORT= 4000 || process.env.PORT

server.listen(PORT,()=>{
    console.log(`server is listening to portnumber ${PORT}`);
})
