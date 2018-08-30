const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({

    patientName: { type: "String", required: [true, 'Name is required.'] },
    patientFaculty: { type: "String", required: [true, 'Faculty is required.'] },
    patientAge: { type: "Number", required: [true, 'Age is required.'] }
});

const Patient = mongoose.model('patient', patientSchema);
module.exports = Patient;
