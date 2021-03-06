const express = require("express");
const userController = require("../controllers/user-controller");
const serviceProtector=require("./helpers/service-protectors")

const router = express.Router();



// api call for getting the list of users of the system
router.get("/",userController.getUsers);
// api call for getting a single user of the system
router.get("/:id",userController.getUser);
// api cal for creating a user
router.post("/",userController.addUser);
//api call for validating the emailaddress
router.post("/email/check",userController.validateEmail);
// api call for deleting a user
router.delete("/:id",userController.deleteUser);
// api call for updating the the users of the sytem
router.put("/:id",userController.updateUser);
//api call for resteing the password
router.put("/reset/:id",userController.resetPassword);





module.exports = router;