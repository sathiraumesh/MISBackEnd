const Patient = require("../models/patient");

addPatient = function (req, res, next) {

    var patientData = req.body;
    Patient.findOne({ patientName: patientData.patientName }).then(function (err, patient) {
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