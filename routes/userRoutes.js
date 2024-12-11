const express = require('express')
const router = express.Router()
const checkUserLogin = require('../middlewares/auth')
const { getTokenuser } = require('../middlewares/dataStore')


router.get('/user',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render("../views/userhome",{role:user.role});
})

// Transactions
router.get('/transactions',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render("../views/transactionUser",{role:user.role})
})

router.get('/transactions/available',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/userAvailable',{role:user.role})
})

router.get('/transactions/issue',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/userIssue',{role:user.role})
})

router.get('/transactions/return',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/userReturn',{role:user.role})
})

router.get('/transactions/fine',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/userFine',{role:user.role})
})

// Reports
router.get('/reports',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/userReports',{role:user.role})
})

router.get('/reports/masterBooks',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/masterListofBooks',{role:user.role})
})

router.get('/reports/masterMovies',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/masterListofMovies',{role:user.role})
})

router.get('/reports/masterMember',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/masterListofMember',{role:user.role})
})

router.get('/reports/activeIssues',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/activeIssues',{role:user.role})
})

router.get('/reports/overdueReturns',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/overdueReturn',{role:user.role})
})

router.get('/reports/pendingIssueRequests',checkUserLogin,(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    res.render('../views/issueRequest',{role:user.role})
})


module.exports = router