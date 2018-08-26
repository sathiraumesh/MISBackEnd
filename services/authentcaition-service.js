const express = require("express");
const authControll= require("../controllers/authentication-controller");

const router = express.Router();

// router.get("/", isTokenEnsured, function(req, res){
//     res.json("route is protected");
// });

// authenticating users
router.post("/", authControll.authenticateUsers);



module.exports = router;