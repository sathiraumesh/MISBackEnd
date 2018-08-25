const express = require("express");
const authenticationService= require("../services/authentication-service");
const isTokenEnsured = require("../handlers").isTokenEnsured;

const router = express.Router();

// router.get("/", isTokenEnsured, function(req, res){
//     res.json("route is protected");
// });

// authenticating users
router.post("/", authenticationService.authenticateUsers);

router.use(function(req, res){

});

module.exports = router;