const express = require("express");
const app = express()
app.get("/", (req,res)=>{
    res.send("App is running")
});
app.listen(5000)
