const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "sathira";


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
                    const token = jwt.sign({ username: user.username, type: user.type }, SECRET_KEY);
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



module.exports.authenticateUsers = authenticateUsers;
module.exports.isTokenEnsured = isTokenEnsured;
module.exports.authorizeUser = authorizeUser;



