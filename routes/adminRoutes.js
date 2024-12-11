const express = require('express')
const routerAdmin = express.Router()


routerAdmin.get("/",(req,res) => {
    const user = req.cookies.uid;
    res.render('../views/adminHome',{role:user.role})
})

//Maintainance
routerAdmin.get('/maintainance',(req,res) => {
    res.render('../views/maintainance')
})

routerAdmin.get('/maintainance/addMembership',(req,res) => {
    res.render('../views/addMembership')
})

routerAdmin.get('/maintainance/updateMembership',(req,res) => {
    res.render('../views/updateMembership')
})

routerAdmin.get('/maintainance/addbm',(req,res) => {
    res.render('../views/addBook')
})

routerAdmin.get('/maintainance/updatebm',(req,res) => {
    res.render('../views/updateBook')
})

routerAdmin.get('/maintainance/userManagement',(req,res) => {
    res.render('../views/userManagement')
})


module.exports = routerAdmin