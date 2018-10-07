const express = require("express");
const drugInventoryController= require("../controllers/drug-inventory-controller")
const router = express.Router();

//api call for getting the list of drugs
router.get("/",drugInventoryController.getDrugs);
//api call for just geting a drug
router.get("/:id",drugInventoryController.getDrug);
//api call for adding a drug
router.post("/",drugInventoryController.addDrug);
//api call for deleting drugs
router.delete("/:id",drugInventoryController.deleteDrug);
// api call for updating the the users of the sytem
router.put("/:id",drugInventoryController.updateDrug);





module.exports= router;