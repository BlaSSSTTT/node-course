const express = require("express");
require('./db/mongoose.js');
const userRouter = require("./routers/user.js")
const taskRouter = require("./routers/task.js")

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next)=>{
//     console.log(req.path);
//     if(req.method === "GET"){
//         res.send("NONONO");
//     }else{
//        next(); 
//     }


    
// })

// app.use((req,res,next)=>{
//     res.status(503).send("server don`t work");
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, ()=>{
    console.log("Server is running on port "+ port);
})

const jwt = require("jsonwebtoken");

const myF = async ()=>{
    
}

myF();