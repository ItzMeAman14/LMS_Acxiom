const express = require('express')
const app = express()
const PORT = 4112


app.set('view engine','ejs')


app.use("/user",require('./routes/userRoutes'))
app.use("/admin",require('./routes/adminRoutes'))


app.get("/login",(req,res) => {
    res.render("../views/login")
})




app.listen(PORT,() => {
    console.log("Listening on Port: http://localhost:4112");
})

