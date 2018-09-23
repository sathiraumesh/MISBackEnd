const express = require("express");
const drugInventoryController= require("../controllers/drug-inventory-controller")
const router = express.Router();

//api call for getting the list of drugs
router.get("/",drugInventoryController.getDrugs);
//api call for adding a drug
router.post("/",drugInventoryController.addDrug);

module.exports= router;