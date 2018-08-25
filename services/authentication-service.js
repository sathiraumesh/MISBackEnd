const User = require("../models/user");
const jwt = require("jsonwebtoken");



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
                    res.send("error");
                    return next(err);
                }

                if (isMatch) {
                    const token = jwt.sign(user.username, "sectertley");
                    res.status(200);
                    res.send({ token: token });

                } else {
                    res.status(403);
                    res.send({ errors: ["invalid username or password"] });
                }
            });
        }



    });
}

module.exports.authenticateUsers = authenticateUsers;



