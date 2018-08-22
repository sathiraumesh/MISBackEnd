const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const isTokenEnsured = require("../handlers").isTokenEnsured;

const router = express.Router();




router.get("/", isTokenEnsured, (req, res) => {
    res.json("route is protected");
});


router.post("/", (req, res) => {
    userData = req.body;
    console.log(userData);


    User.findOne({ username: userData.username }, (err, user) => {
        if (err) {
            return err;
        }

        if (!user) {
            res.json({ success: false, message: "Invalid Username" });
        }

        else if (user) {
            if (user.password !== userData.password) {
                res.json({ success: false, message: "Wrong password" });
            }else{
                const token = jwt.sign(user.username, "sectertley");
                res.json({"token":token,
                            message:" "});
            }

           
        }



    });

});

module.exports = router;