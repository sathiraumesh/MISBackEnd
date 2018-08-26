const express = require("express");
const authContoller=require("../controllers/authentication-controller");
const durgInController=require("../controllers/drug-inventory-controller")

const router = express.Router();


router.get("/",authContoller.isTokenEnsured,authContoller.authorizeUser,durgInController.getDrugs);

module.exports= router;