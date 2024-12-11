const express = require('express')
const postRouter = express.Router()
const books = require('../models/books')
const memberships = require('../models/membership')

postRouter.post("/addBook",async(req,res) => {
    try{
        const book = {
            name:req.body.name,
            quantities:req.body.quantity
        }
        await books.create(book)
        res.send("<script>alert('Book added Successfully'); location.assign('http://localhost:4112/admin/maintainance/addbm');</script>");
    }
    catch(err){
        console.error(err);
        res.send("<script>alert('Some Error Occured'); history.go(-1);</script>")
    }
})

postRouter.post('/addMembership',async(req,res) => {
    try{    
        const membership = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            contactName:req.body.contactName,
            contactAddress:req.body.contactAddress,
            AadharCard:req.body.aadharNo,
            StartDate:req.body.startDate,
            EndDate:req.body.endDate,
            Duration:req.body.duration
        }
        
        await memberships.create(membership)
        res.send("<script>alert('Membership added Successfully'); location.assign('http://localhost:4112/admin/maintainance/addMembership');</script>");

    }
    catch(err){
        console.error(err);
        res.send("<script>alert('Some Error Occured'); history.go(-1);</script>")
    }
})

module.exports = postRouter