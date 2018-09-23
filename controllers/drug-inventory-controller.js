const Drug = require("../models/drug");

// function for getting the entire drug list
getDrugs=function(req,res,next){
    Drug.find({},{drugId:1,drugName:1,dosage:1},function(err,drugs){
        if(err){
            res.status(400).send(err);
        }
        if(drugs){
            res.status(200).send(drugs);
        }
    })
}

module.exports.getDrugs=getDrugs;

// function for adding the drug list of the application

addDrug=function(req,res,next){
    var drugInfo=req.body;
    console.log(drugInfo);
    var drug = new Drug(drugInfo);

    drug.save(function(err){
        if(err){
            res.status(404);
            res.send(err)
        }else{
            res.status(201);
            res.send({success:"Drug Registerd"});
        }
    })
    
}

module.exports.addDrug=addDrug;
