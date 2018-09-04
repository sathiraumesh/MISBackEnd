const Patient = require("../models/patient");

// funstions that is used to add a patient

addPatient = function (req, res, next) {

    var patientData = req.body;
    Patient.findOne({ patientName: patientData.patientName }, function (err, patient) {
        if (err) {
            res.status(500);
            res.send({ errors: "Error when creating the patient record." });
            return;
        }
        if (patient) {
            res.status(500);
            res.send({ errors: "Patient is already exist." });
            return;
        }

        var newPatient = new Patient(patientData);
        newPatient.save();
        res.status(201);
        res.send(newPatient);

    });
}

module.exports.addPatient = addPatient;
// function that is used to get the patients information

getPatient = function (req, res, next) {
    patientData = req.body;
    Patient.find({}, { _id: 1, patientName: 1, patientFaculty: 1, patientAge: 1 }, function (err, patient) {
        if (err) {
            res.status(500);
            res.send({ errors: "Error when finding the patient record." });
            return;
        }
        if (patient) {
            res.status(200);
            res.send(patient);
            return;
        }
    });
}



module.exports.getPatient = getPatient;