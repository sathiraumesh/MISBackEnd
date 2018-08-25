const express = require("express");
const authenticationService=require("../services/authentication-service");
const durgService=require("../services/drug-service")

const router = express.Router();


router.get("/",
authenticationService.isTokenEnsured,
authenticationService.authorizeUser,
durgService
);

module.exports= router;