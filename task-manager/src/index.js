const express = require("express");
require('./db/mongoose.js');
const User = require("./models/user.js");
const Task = require("./models/task.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users",(req,res)=>{
    const user = new User(req.body)

    user.save().then((body)=>{
        res.status(201).send(body);
    }).catch((error)=>{
        res.status(400).send(error);
    })
})

app.get("/users",(req,res)=>{
    User.find({}).then((data)=>{
        res.send(data);
    }).catch((error)=>{
        res.status(500).send();
    })
})

app.get("/users/:id",(req,res)=>{
    const _id = req.params.id;
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send();
        }
        res.send(user);
    }).catch((error)=>{
        res.status(500).send();
    })
})



app.post("/tasks",(req,res)=>{
    const task = new Task(req.body);

    task.save().then((data)=>{
        res.status(201).send(data)
    }).catch((error)=>{
        res.status(400).send(error);
    })
})

app.get("/tasks",(req,res)=>{
    Task.find({}).then((data)=>{
        res.send(data);
    }).catch((error)=>{
        res.status(500).send();
    })
})

app.get("/tasks/:id",(req,res)=>{
    const _id = req.params.id;
    Task.findById(_id).then((task)=>{
        if(!task){
            return res.status(404).send()
        }
        res.send(task);
    }).catch((error)=>{
        res.status(500).send();
    })
})

app.listen(port, ()=>{
    console.log("Server is running on port "+ port);
})