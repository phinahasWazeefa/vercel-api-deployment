const express = require('express');

const server = express();

server.use('/test',(req,res,next)=>{
    res.send({message:"server listening"})
})

server.listen(8080,()=>{
    console.log('listening on port');
})