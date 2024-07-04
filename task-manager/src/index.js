const express = require("express");
require('./db/mongoose.js');
const userRouter = require("./routers/user.js")
const taskRouter = require("./routers/task.js")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, ()=>{
    console.log("Server is running on port "+ port);
})

// const Task = require("./models/task.js");
// const User = require("./models/user.js");


// const main = async()=>{
//     // const task = await Task.findById("6686751a716c4755ad5665a6");
    
//     // await task.populate('owner');
//     // console.log(task.owner);


//     const user = await User.findById("66867465ccf69a5ed8f30d42");
//     await user.populate('tasks');
//     console.log(user.tasks);
// }
// main();