const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "sathira";

// autheticate users 
authenticateUsers = function (req, res, next) {
    userData = req.body;

    User.findOne({ username: userData.username }, function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.status(403);
            res.send({ errors: ["invalid username or password"] });
        }

        if (user) {
            user.checkPassword(userData.password, function (err, isMatch) {
                if (err) {
                    res.send({errors:["internal server error"]});
                    return next(err);
                }

                if (isMatch) {
                    const token = jwt.sign({ username: user.username,role:user.role,id:user._id }, SECRET_KEY);
                    res.status(200);
                    res.send({token:token});

                } else {
                    res.status(403);
                    res.send({ errors: ["invalid username or password"] });
                }
            });
        }



    });
}

module.exports.authenticateUsers = authenticateUsers;


// function for ensuring the token is recidved as with the header of authorization and the token prefixed with the bearer

isTokenEnsured = function (req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.status(403);
        res.send({ error: "unauthorized" });
    }
}

module.exports.isTokenEnsured = isTokenEnsured;

//function for verification of the token
authorizeUser = function (req, res, next) {
    jwt.verify(req.token, SECRET_KEY, function (err, data) {
        if (err) {
            res.status(403);
            res.send({ "error": "unauthorized" })
        }
        else {
            next();
        }
    });

}

module.exports.authorizeUser = authorizeUser;



userRoles={
    guest:1,
    admin:2
}

accessLevels={
    guest:userRoles.guest|userRoles.admin,
    admin:userRoles.admin
}





module.exports.userRoles=userRoles;




