const path = require("path");

const express = require("express");
const app = express();

//  console.log(__dirname);
//  console.log(path.join(__dirname,"../public"));

const publicDir = path.join(__dirname,"../public");

app.use(express.static(publicDir));

app.get("/weather",(req,res)=>{
    res.send({
        forecast:123,
        location:"Netishyn"
    });
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000.");
})