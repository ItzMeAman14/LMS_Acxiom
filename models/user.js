const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    userid:String,
    password:String,
    role:String
})

const user = mongoose.model("users",userSchema)

module.exports = user