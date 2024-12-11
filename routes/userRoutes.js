const express = require('express')
const router = express.Router()
const {checkUserLogin, onlyUser} = require('../middlewares/auth')
const { getTokenuser, getTokenadmin } = require('../middlewares/dataStore')


router.get('/user',onlyUser,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render("../views/userhome",{role:user.role});
})

// Transactions
router.get('/transactions',checkUserLogin,(req,res) => {

    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render("../views/transactionUser",{role:user.role})
})

router.get('/transactions/available',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/userAvailable',{role:user.role})
})

router.get('/transactions/issue',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/userIssue',{role:user.role})
})

router.get('/transactions/return',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/userReturn',{role:user.role})
})

router.get('/transactions/fine',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/userFine',{role:user.role})
})

// Reports
router.get('/reports',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/userReports',{role:user.role})
})

router.get('/reports/masterBooks',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/masterListofBooks',{role:user.role})
})

router.get('/reports/masterMovies',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/masterListofMovies',{role:user.role})
})

router.get('/reports/masterMember',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/masterListofMember',{role:user.role})
})

router.get('/reports/activeIssues',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/activeIssues',{role:user.role})
})

router.get('/reports/overdueReturns',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/overdueReturn',{role:user.role})
})

router.get('/reports/pendingIssueRequests',checkUserLogin,(req,res) => {
    let user = getTokenuser(req.cookies.uid);
    if(!user){
        user = getTokenadmin(req.cookies.adminId);
    }
    res.render('../views/issueRequest',{role:user.role})
})


module.exports = router