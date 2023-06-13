const express = require("express");
var cors = require('cors')
require("./dbs/Config")
const User = require("./dbs/User")
const Product = require("./dbs/Product")

const jwt = require('jsonwebtoken');
var privateKey = 'private.key';

const app = express()
app.use(express.json());
app.use(cors())

app.post("/register", async (req, res) => {
    let data = new User(req.body);
    let userData = await data.save()
    // console.log(userData)
    userData = userData.toObject();
    delete data.password
    jwt.sign({ userData }, privateKey, { expiresIn: '24h' }, function (err, token) {
        if (err) {
            res.send({ result: "Something wrong" })
        }
        res.send({ userData, auth: token })
    });
    // res.send(userData)
})

app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {
            jwt.sign({ user }, privateKey, { expiresIn: '24h' }, function (err, token) {
                if (err) {
                    res.send({ result: "Something wrong" })
                }
                res.send({ user, auth: token })
            });
        } else {
            res.send({ data: "data Not found" })
        }
    } else {
        res.send({ data: "data Not found" })
    }
})
app.post("/add-product", tokenVerify,async (req, res) => {
    let productData = new Product(req.body);
    let data = await productData.save();
    res.send(data)
})
app.get("/products", tokenVerify,async (req, res) => {
    const products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ data: "No Data Found" })
    }
})
app.delete("/product/:id",tokenVerify, async (req, res) => {
    // res.send("app is working")
    let data = await Product.deleteOne({ _id: req.params.id })
    res.send(req.params)
})
app.get("/product/:id",tokenVerify, async (req, res) => {
    let data = await Product.findOne({ _id: req.params.id })
    if (data) {
        res.send(data)
    } else {
        res.send({ "data": "data not found" })
    }
})
app.put("/product/:id", tokenVerify, async (req, res) => {
    let data = await Product.updateOne({ _id: req.params.id },
        { $set: req.body })
    res.send(data)
})

app.get("/search/:key", tokenVerify, async (req, res) => {
    let data = await Product.find({
        "$or": [
            {
                name: { $regex: req.params.key }
            },
            {
                category: { $regex: req.params.key }
            },
            {
                company: { $regex: req.params.key }
            }
        ]
    })
    res.send(data)
})

function tokenVerify(req, res, next) {
    let token = req.headers["authorization"]
    if (token) {
        token = token.split(" ")[1]
        console.log("Middler ware Called", token)
        jwt.verify(token, privateKey, (err, valid) => {
            if (err) {
                res.status(401).send({ result: "Please add valid Token" })
            } else {
                next()
            }
        })
    } else {
        res.status(403).send({ result: "Please add Tokken With header" })
    }

}

app.listen(5000)