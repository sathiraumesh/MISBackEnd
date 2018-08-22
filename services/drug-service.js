const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const isTokenEnsured = require("../handlers").isTokenEnsured;

const router = express.Router();


router.get("/",isTokenEnsured,(req,res)=>{
    jwt.verify(req.token,"sectertley",(err,data)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.sendStatus(200);
            res.json("hi");
        }
    });
   
});

module.exports= router;