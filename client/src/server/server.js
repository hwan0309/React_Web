       
const express = require('express');    
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);

app.use(cors());

app.get("/", (req,res)=>{
    res.send("")
    console.log("")
});

server.listen(3000, ()=>{
  console.log('serve on 3000');
});