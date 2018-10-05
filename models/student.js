const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    studentIndexNumber: { type: "String", required: [true, "Index number is required."] },
    studentName: { type: "String", required: [true, 'Name is3 required.'] },
    studentDOB: { type: "Date", required: [true, 'Date of Birth is required.'] },
    studentAge: { type: "Number", required: [true, 'Age is required.'] },
    studentSex: { type: "String", required: [true, 'Sex is required.'] },
    studentFaculty: { type: "String", required: [true, 'Faculty is required.'] },
    studentMarritalSstatus: { type: "String", required: [true, 'Marrital status is required.'] },
    studentNationality: { type: "String", required: [true, 'Nationality is required.'] },
    studentPositionOfFamily: { type: "Number", required: [true, 'Position of family is required.'] },
    studentAddress: { type: "String", required: [true, "Address is required."] },
    studentDuringTermAddress: { type: "String", required: [true, 'Address is required.'] },
    StudentParentGuardian: { type: "String", required: [true, 'Parent or guardian is required.'] },
    studentBoadingRelative: { type: "String", required: false },
    studentAmountPaid: { type: "Number", required: false },
    studentOccupationFatherMother: {
        type: "String", required: [true, 'Occupation is required.']
    },
    studentBursary: { type: "String", required: [true, 'Required.'] },
    studentSchool: { type: "String", required: [true, 'School is required.'] },
    studentSportActivities: { type: "String", required: false },
    studetGamesPlayed: { type: "String", required: false },
    studentMedicalHisOfFamily: {
        Father: {
            ifaliveAge: { type: "String", required: false },
            ifDeadAge: { type: "String", require: false },
            causeOfDeath: { type: "String", require: false }
        },
        Mother: {
            ifaliveAge: { type: "String", required: false },
            ifDeadAge: { type: "String", require: false },
            causeOfDeath: { type: "String", require: false }
        },
        Brothers: {
            ifaliveAge: { type: "String", required: false },
            ifDeadAge: { type: "String", require: false },
            causeOfDeath: { type: "String", require: false }
        },
        Sisters: {
            ifaliveAge: { type: "String", required: false },
            ifDeadAge: { type: "String", require: false },
            causeOfDeath: { type: "String", require: false }
        }
    },
    studentDiet: { type: "String", required: false },

});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;

