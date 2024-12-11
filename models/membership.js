const mongoose = require('mongoose')


const membershipSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    contactName:String,
    contactAddress:String,
    AadharCard:String,
    StartDate:Date,
    EndDate:Date,
    Duration:String
})

const memberships = mongoose.model("memberships",membershipSchema)

module.exports = memberships