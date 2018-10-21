const Drug = require("../models/drug");
const Stock = require("../models/stocks");
// function for getting the entire drug list
getDrugs = function (req, res, next) {
    Drug.find({}, { drugId: 1, drugName: 1, dosage: 1 ,quantity:1}, function (err, drugs) {
        if (err) {
            res.status(400).send(err);
        }
        if (drugs) {
            res.status(200).send(drugs);
        }
    })
}

module.exports.getDrugs = getDrugs;

// function for adding the drug list of the application

addDrug = function (req, res, next) {
    var drugInfo = req.body;
    console.log(drugInfo);
    var drug = new Drug(drugInfo);

    drug.save(function (err) {
        if (err) {
            res.status(404);
            res.send(err)
        } else {
            res.status(201);
            res.send({ success: "Drug Registerd" });
        }
    })

}

module.exports.addDrug = addDrug;

deleteDrug = function (req, res, next) {
    var drugData = req.params;
    console.log(drugData);


    Drug.deleteOne({ drugId: drugData.id}, function (err) {
        if (err) {
            res.status(500);
            res.send({ errors: "internal server errors" });
        }
        else {
            res.status(200);
            res.send({ success: "successfully deleted the drug" });
        }
    });

}

module.exports.deleteDrug=deleteDrug;


getDrug= function(req,res,next){
    var drugData = req.params;
    console.log(drugData);
    Drug.findOne({drugId: drugData.id},function(err,drug){
        if(err){
            res.status(500);
            res.send({ errors: "internal server errors" });
        }else{
            res.status(200);
            res.send(drug);
        }
    });

}

module.exports.getDrug=getDrug;


updateDrug = function (req, res, next) {
    var id = req.params.id;
    var drugData = req.body;
    
    Drug.findOneAndUpdate({ drugId: id }, req.body, function (err, drug) {
        if (err) {
            res.status(400);
            res.send({ error: "internal server error" });
        }
        if (drug) {
            res.status(200);
            res.send(drug);

        }
    });
}

module.exports.updateDrug = updateDrug;

saveStocks=function(req,res,next){
    
       
         var stockList=req.body.items;
         console.log(stockList);
         var stock=new Stock({items:stockList});
         stock.save(function(err){
            if (err) {
                res.status(404);
                res.send(err)
            } else {
                stockList.forEach(function(item){
                    var amount =parseInt(item.quantity);
                    Drug.findOneAndUpdate({ drugId: item.drugId }, {$inc:{quantity:amount}}, function (err, drug) {
                       
                        
                    });
                });
              res.send({success:"drugsupdated"});
            }
         });

        
       
        
}

module.exports.saveStocks=saveStocks;