const express = require("express");
const userController = require("../controllers/user-controller");

const router = express.Router();


// api call for getting the list of users of the system
router.get("/",userController.getUsers);
// api call for getting a single user of the system
router.get("/:id",userController.getUser);
// api cal for creating a user
router.post("/",userController.addUser);
// api call for deleting a user
router.delete("/:id",userController.deleteUser);
// api call for updating the the users of the sytem
router.put("/:id",userController.updateUser);


module.exports = router;