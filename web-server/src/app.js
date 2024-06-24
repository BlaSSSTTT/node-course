const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello Express</h1>");
})
app.get("/help",(req,res)=>{
    res.send({
        name:"vlad",
        age:19
    });
})
app.get("/about",(req,res)=>{
    res.send("<h2>About page</h2>");
})
app.get("/weather",(req,res)=>{
    res.send({
        forecast:123,
        location:"Netishyn"
    });
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000.");
})