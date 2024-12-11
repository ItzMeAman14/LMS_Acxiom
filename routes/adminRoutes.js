const express = require('express')
const routerAdmin = express.Router()


routerAdmin.get("/",(req,res) => {
    res.send("Admin Home Page")
})


module.exports = routerAdmin