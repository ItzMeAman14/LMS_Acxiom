const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.render("../views/home");
})


// Transactions
router.get('/transactions',(req,res) => {
    res.render("../views/transactionUser")
})

router.get('/transactions/available',(req,res) => {
    res.render('../views/userAvailable')
})

router.get('/transactions/issue',(req,res) => {
    res.render('../views/userIssue')
})

router.get('/transactions/return',(req,res) => {
    res.render('../views/userReturn')
})

router.get('/transactions/fine',(req,res) => {
    res.render('../views/userFine')
})

// Reports
router.get('/reports',(req,res) => {
    res.render('../views/userReports')
})

router.get('/reports/masterBooks',(req,res) => {
    res.render('../views/masterListofBooks')
})

router.get('/reports/masterMovies',(req,res) => {
    res.render('../views/masterListofMovies')
})

router.get('/reports/masterMember',(req,res) => {
    res.render('../views/masterListofMember')
})




module.exports = router