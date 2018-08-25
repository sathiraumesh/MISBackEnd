const express = require("express");
const authenticationService= require("../services/authentication-service");

const router = express.Router();

// router.get("/", isTokenEnsured, function(req, res){
//     res.json("route is protected");
// });

// authenticating users
router.post("/", authenticationService.authenticateUsers);



module.exports = router;