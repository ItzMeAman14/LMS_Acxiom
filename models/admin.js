const mongoose = require('mongoose')


const adminSchema = mongoose.Schema({
    userid:String,
    password:String,
    role:String
})

const admin = mongoose.model("admins",adminSchema)

module.exports = admin