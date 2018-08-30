const User = require("../models/user");

addUser=function (req,res,next){
   
        var userData=req.body;
        User.findOne({username:userData.username},function(err,user){
            if(err){
                res.status(500);
                res.send({errors:"error when saving the user"});
                return;
            }
            if(user){
                res.status(500);
                res.send({errors:"user already exsits"});
                return;
            }
            
            var newUser = new User(userData);
            newUser.save();
            res.status(201);
            res.send({success:"user created"});
    
        });
    
}

module.exports.addUser=addUser;

getUsers=function(req,res,next){
    
        User.find({},{_id:1,username:1,firstName:1,lastName:1,age:1,email:1,role:1},function(err,users){
            if(err){
                res.status(500);
                res.send({errors:"internal serve error"});
            }
            if(users){
                res.status(200);
                res.send({users});
            }
        });
}

module.exports.getUsers=getUsers;

getUser = function(req,res,next){
    User.findOne({},function(err,user){
        if(err){
            res.status(500);
            res.send({error:"intenal serve error"});
        }
        if(user){
            rse.status(200);
            res.send({user});
        }
    });
}
