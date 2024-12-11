const { getTokenadmin, getTokenuser } = require('./dataStore')


async function checkUserLogin(req,res,next){

    const token = req.cookies.uid;
    const user = getTokenuser(token);

    if(!token){
        return res.redirect('/login');
    }

    
    if(!user){
        return res.redirect('/login');
    }
    

    next();
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
    checkUserLogin
}