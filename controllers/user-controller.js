const User = require("../models/user");
function addUser(){
    return function(req,res,next){

        var userData = req.body;
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
}

module.exports.addUser=addUser