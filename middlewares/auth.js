const { getTokenadmin, getTokenuser } = require('./dataStore')

async function onlyUser(req,res,next){
    const token = req.cookies.uid;
    const user = getTokenuser(token);

    if(!token){
        return res.redirect('/login');
    }
    if(!user){
        return res.redirect('/login');
    }

    next()
}


async function checkUserLogin(req,res,next){

    const token = req.cookies.uid;
    const adminToken = req.cookies.adminId;
    const user = getTokenuser(token);
    const admin = getTokenadmin(adminToken);

    if(!token){
        if(!adminToken){
            return res.redirect('/login');
        }
        else{
            next()
        }
    }
    if(!user){
        if(!admin){
            return res.redirect('/login');
        }
        else{
            next()
        }
    }
    
    next()
}

async function checkAdminLogin(req,res,next){

    const token = req.cookies.adminId;
    const user = getTokenadmin(token);

    if(!token){
        return res.redirect('/login');
    }

    
    if(!user){
        return res.redirect('/login');
    }
    

    next();
}


module.exports = {
    checkAdminLogin,
    checkUserLogin,
    onlyUser
}