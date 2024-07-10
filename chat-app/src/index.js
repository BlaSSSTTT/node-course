const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDir = path.join(__dirname,"../public");
const port = process.env.PORT || 3000;
app.use(express.static(publicDir));

io.on("connection",(socket)=>{
    console.log("New connection");

    socket.emit("message", "Welcome");

    socket.broadcast.emit("message","New user connected")

    socket.on("sendLocation",({latitude,longitude}, callback)=>{
        io.emit("locationMessage",`https://google.com/maps?q=${latitude},${longitude}`);
        callback();
    })

    socket.on("sendMessage",(message, callback)=>{
        io.emit("message",message);
        callback();
    })
    socket.on("disconnect",()=>{
        io.emit("message","User was disconnected")
    })
})

server.listen(port,()=>{
    console.log("Server is running on port "+ port);
});