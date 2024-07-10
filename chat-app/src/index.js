const express = require("express");
const path = require("path");
const app = express();

const publicDir = path.join(__dirname,"../public");
const port = process.env.PORT || 3000;
app.use(express.static(publicDir));


app.listen(port,()=>{
    console.log("Server is running on port "+ port);
});