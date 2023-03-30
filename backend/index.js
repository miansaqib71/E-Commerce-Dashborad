const express = require("express");
require("./dbs/Config")
const User = require("./dbs/User")

const app = express()
app.use(express.json());

app.post("/register", async(req, res) => {
    let data = new User(req.body);
    let userData = await data.save()
    console.log(userData)
    res.send(userData)
})
app.listen(5000)
