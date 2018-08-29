const express = require("express");
const userController = require("../controllers/user-controller");
const User = require("../models/user");

const router = express.Router();

router.get("/",function(req,res,next){
    res.status(200);
    res.send({"sathira":"umesh"});
});

router.post("/",userController.addUser());

module.exports = router;