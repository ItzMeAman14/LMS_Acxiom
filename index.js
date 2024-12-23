const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const { setTokenuser, removeTokenuser, setTokenadmin, removeTokenadmin, getTokenuser, getTokenadmin } = require('./middlewares/dataStore')
const { v4: uuidv4 } = require('uuid');
const PORT = 4112
require('./dbConnect');
const user = require('./models/user');
const admin = require('./models/admin');
const {checkAdminLogin} = require("./middlewares/auth")
const userRoute = require("./routes/userRoutes")

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/",userRoute)
app.use("/admin",checkAdminLogin,require('./routes/adminRoutes'))
app.use('/',require('./routes/postRoutes'))

app.get("/login",(req,res) => {
    res.render("../views/login")
})

app.post("/login",async(req,res) => {
    const {userid,password,role} = req.body;
    
    if(role === "User"){
        const data = await user.find({userid:userid});
        if(data.length !== 0){
            if(data[0].password === password){
                const token = uuidv4();
                res.cookie("uid",token);
                setTokenuser(token,data[0]);
                res.redirect('/user');
            }
            else{
                res.send("<script>alert('Wrong Password'); history.go(-1)</script>")
            }
        }
        else{
            res.send("<script>alert('User Not Found'); history.go(-1)</script>")
        }
    }
    else{
        const data = await admin.find({userid:userid});
        if(data.length !== 0){
            if(data[0].password === password){
                const token = uuidv4();
                res.cookie("adminId",token);
                setTokenadmin(token,data[0]);
                res.redirect('/admin');
            }
            else{
                res.send("<script>alert('Wrong Password'); history.go(-1)</script>")
            }
        }
        else{
            res.send("<script>alert('Admin Not Found'); history.go(-1)</script>")
        }
    }

})


app.post("/logout",(req,res) => {
    const user = getTokenuser(req.cookies.uid);
    const admin = getTokenadmin(req.cookies.adminId);
    if(admin){
        removeTokenadmin(req.cookies.adminId);
        res.clearCookie('adminId');
        res.redirect('/login');
    }
    if(user){
        removeTokenuser(req.cookies.uid);
        res.clearCookie('uid');
        res.redirect('/login');
    }
})

app.listen(PORT,() => {
    console.log("Listening on Port: http://localhost:4112");
})

