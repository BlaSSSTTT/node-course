const path = require("path");
const express = require("express");
const hbs = require('hbs');

const app = express();

//Define paths for Express config
const publicDir = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


//Setup handlevars engine and views location
app.set('view engine', 'hbs');
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDir));


app.get("/",(req,res)=>{
    res.render("index",{
        title:"Weather app",
        name: 'Vlad'
    })
})
app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About me",
        name: 'Vlad'
    })
})
app.get("/help",(req,res)=>{
    res.render("help",{
        title:"Help me",
        name: 'Vlad'
    })
})
app.get("/weather",(req,res)=>{
    res.send({
        forecast:123,
        location:"Netishyn"
    });
})

app.get('/help/*',(req,res)=>{
    res.render("404",{
        title: '404',
        text: "help article not found",
        name: 'Vlad'
    })
})

app.get("*",(req,res)=>{
    res.render("404",{
        title: '404',
        text: "help article not found",
        name: 'Vlad'
    })
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000.");
})