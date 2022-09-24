const { application } = require("express");
const express = require("express");
const auth = require("./route/auth")
const server = express();
server.use('/auth',auth)


server.get('/',(req,res)=>{
  res.send("It is Working")
})

server.listen(5000,()=>{
console.log("Server is working")
})