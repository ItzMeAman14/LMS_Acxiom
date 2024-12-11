
let userMap = new Map();
let adminMap = new Map();

function setTokenuser(token,user){
    userMap.set(token,{
        userid:user.userid,
        role:user.role
    });
}

function getTokenuser(id){
    const user = userMap.get(id);
    if(user === undefined){
        return null;
    }
    else{
        return user;
    }
}

function removeTokenuser(id){
    if(userMap.has(id)){
        userMap.delete(id);
    }
    else{
        return null;
    }
}  



function setTokenadmin(token,user){
    adminMap.set(token,{
        userid:user.userid,
        role:user.role
    });
}

function getTokenadmin(id){
    const user = adminMap.get(id);
    if(user === undefined){
        return null;
    }
    else{
        return user;
    }
}

function removeTokenadmin(id){
    if(adminMap.has(id)){
        adminMap.delete(id);
    }
    else{
        return null;
    }
}  

module.exports = {
    setTokenuser,
    getTokenuser,
    removeTokenuser,
    setTokenadmin,
    getTokenadmin,
    removeTokenadmin
}