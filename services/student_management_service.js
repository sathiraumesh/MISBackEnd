const express = require("express");
const authController = require("../controllers/authentication-controller");
const studentController = require("../controllers/student_management_controller");

const route = express.Router();

route.post("/", studentController.addStudent);
route.get("/", studentController.getStudent);

module.exports = route;