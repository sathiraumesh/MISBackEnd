const express = require("express");
const authController = require("../controllers/authentication-controller");
const patientController = require("../controllers/patient_management_controller");

const route = express.Router();

route.post("/", patientController.addPatient);

module.exports = route;