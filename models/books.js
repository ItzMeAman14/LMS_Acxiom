const mongoose = require('mongoose')


const booksSchema = mongoose.Schema({
    name:String,
    quantities:String,
    dop:{
        type:Date,
        default: new Date().getTime()
    },
    status:String

})

const books = mongoose.model("books",booksSchema)

module.exports = books