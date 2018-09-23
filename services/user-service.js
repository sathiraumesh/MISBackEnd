const express = require("express");
const userController = require("../controllers/user-controller");
const serviceProtector=require("./helpers/service-protectors")

const router = express.Router();



// api call for getting the list of users of the system
router.get("/",serviceProtector.isTokenEnsured,userController.getUsers);
// api call for getting a single user of the system
router.get("/:id",serviceProtector.isTokenEnsured,userController.getUser);
// api cal for creating a user
router.post("/",serviceProtector.isTokenEnsured,userController.addUser);
//api call for validating the emailaddress
router.post("/email/check",serviceProtector.isTokenEnsured,userController.validateEmail);
// api call for deleting a user
router.delete("/:id",serviceProtector.isTokenEnsured,userController.deleteUser);
// api call for updating the the users of the sytem
router.put("/:id",serviceProtector.isTokenEnsured,userController.updateUser);





module.exports = router;