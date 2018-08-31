const User = require("../models/user");


// function to add new users to the system


addUser = function (req, res, next) {

    var userData = req.body;
    // User.findOne({username:userData.username},function(err,user){
    //     if(err){
    //         res.status(500);
    //         res.send({errors:"error when saving the user"});
    //         return;
    //     }
    //     if(user){
    //         res.status(500);
    //         res.send({errors:"user already exsits"});
    //         return;
    //     }

    //     var newUser = new User(userData);
    //     newUser.save(function(err){
    //         if(err){
    //             res.status(400);
    //             res.send(err);
    //         }else{
    //             res.status(201);
    //             res.send({success:"user created"});
    //         }
    //     });


    // });

    var newUser = new User(userData);
    newUser.save(function (err) {
        if (err) {
            res.status(400);
            res.send(err);
        } else {
            res.status(201);
            res.send({ success: "user created" });
        }
    });

}

module.exports.addUser = addUser;

// function to get the users of  the system

getUsers = function (req, res, next) {

    User.find({}, { _id: 1, username: 1, firstName: 1, lastName: 1, age: 1, email: 1, role: 1 }, function (err, users) {
        if (err) {
            res.status(500);
            res.send({ errors: "internal serve error" });
        }
        if (users) {
            res.status(200);
            res.send({ users });
        }
    });
}

module.exports.getUsers = getUsers;

// function to get a single user



getUser = function (req, res, next) {
    var id = req.params.id;
    User.findById(id, { firstName: 1, lastName: 1, age: 1, role: 1, email: 1 }, function (err, user) {
        if (err) {
            res.status(400);
            res.send({ error: "no user can be found" });
        }
        if (user) {
            res.status(200);
            res.send(user);

        }
    });
}


module.exports.getUser = getUser;


deleteUser = function (req, res, next) {
    var userData = req.params.id;
    User.deleteOne({ _id: userData._id }, function (err) {
        if (err) {
            res.status(500);
            res.send({ errors: "internal server errors" });
        }
        else {
            res.status(200);
            res.send({ success: "successfully deleted the user" });
        }
    });
}

module.exports.deleteUser = deleteUser;

updateUser = function (req, res, next) {
    var id = req.params.id;
    var userData = req.body;
    User.findOneAndUpdate({ _id: id }, req.body, function (err, user) {
        if (err) {
            res.status(400);
            res.send({ error: "internal server error" });
        }
        if (user) {
            res.status(200);
            res.send(user);

        }
    });
}

module.exports.updateUser = updateUser;