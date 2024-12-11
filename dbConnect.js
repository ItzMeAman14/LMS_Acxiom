const mongoose = require('mongoose')


const connect = mongoose.connect("mongodb://localhost:27017/LMS")

if(connect){
    console.log("Database Connected Successfully");
}
else{
    console.log("Database Connection Failed");
}

