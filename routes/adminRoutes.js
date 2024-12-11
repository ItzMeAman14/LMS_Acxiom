const express = require('express');
const { getTokenadmin } = require('../middlewares/dataStore');
const routerAdmin = express.Router()


routerAdmin.get("/",(req,res) => {
    const user = getTokenadmin(req.cookies.adminId);
    res.render('../views/adminHome',{role:user.role})
})

//Maintainance
routerAdmin.get('/maintainance',(req,res) => {
    const user = getTokenadmin(req.cookies.adminId);
    res.render('../views/maintainance',{role:user.role})
})

routerAdmin.get('/maintainance/addMembership',(req,res) => {
    const user = getTokenadmin(req.cookies.adminId);
    res.render('../views/addMembership',{role:user.role})
})

routerAdmin.get('/maintainance/updateMembership',(req,res) => {
    const user = getTokenadmin(req.cookies.adminId);
    res.render('../views/updateMembership',{role:user.role})
})

routerAdmin.get('/maintainance/addbm',(req,res) => {
    const user = getTokenadmin(req.cookies.adminId);
    res.render('../views/addBook',{role:user.role})
})

routerAdmin.get('/maintainance/updatebm',(req,res) => {
    const user = getTokenadmin(req.cookies.adminId);
    res.render('../views/updateBook',{role:user.role})
})

routerAdmin.get('/maintainance/userManagement',(req,res) => {
    const user = getTokenadmin(req.cookies.adminId);
    res.render('../views/userManagement',{role:user.role})
})


module.exports = routerAdmin