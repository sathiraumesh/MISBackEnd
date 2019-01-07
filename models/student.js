const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({


    studentRegistrationNumber: { type: "String", required: true, unique: true },
    studentName: { type: "String", required: [true, 'Name is required.'] },
    studentDOB: { type: "Date", required: [true, 'Date pf Birth is required.'] },
    studentAge: { type: "Number", required: [true, 'Age is required.'] },
    gender: { type: "String", required: [true, 'Gender is required.'] },
    studentFaculty: { type: "String", required: [true, 'Faculty is required.'] },
    marritalStatus: { type: "String", required: [true, 'Marrital Status is required.'] },
    studentNationality: { type: "String", required: [true, 'Nationality is required.'] },
    studentPositionOfFamily: { type: "Number", required: [true, 'Position of Family is required.'] },
    studentAddress: { type: "String", required: [true, "Address is required."] },
    studentTermAddress: { type: "String", required: [true, 'Address is required.'] },
    studentParentGuardian: { type: "String", required: [true, 'Parent or guardian is required.'] },
    studentBoardingRelative: { type: "String", required: false },
    studentAmountPaid: { type: "Number", required: false },
    studentOccupationFather: { type: "String", required: [true, 'Occupation is required.'] },
    studentOccupationMother: { type: "String", required: [true, 'Occupation is required.'] },
    studentBursary: { type: "String", required: [true, 'Required.'] },
    studentSchool: { type: "String", required: [true, 'School is required.'] },
    // studentSportActivities: { type: "String", required: false },
    gamesPlayed: { type: "String", required: false }
    // studentMedicalHisOfFamily: {
    //     Father: {
    //         ifaliveAge: { type: "String", required: false },
    //         ifDeadAge: { type: "String", require: false },
    //         causeOfDeath: { type: "String", require: false }
    //     },
    //     Mother: {
    //         ifaliveAge: { type: "String", required: false },
    //         ifDeadAge: { type: "String", require: false },
    //         causeOfDeath: { type: "String", require: false }
    //     },
    //     Brothers: {
    //         ifaliveAge: { type: "String", required: false },
    //         ifDeadAge: { type: "String", require: false },
    //         causeOfDeath: { type: "String", require: false }
    //     },
    //     Sisters: {
    //         ifaliveAge: { type: "String", required: false },
    //         ifDeadAge: { type: "String", require: false },
    //         causeOfDeath: { type: "String", require: false }
    //     }
    // },
    // studentDiet: { type: "String", required: false },
    // noOfInmated: { type: "Number", required: [true, 'Required.'] },
    // noOfRooms: { type: "Number", required: false },

});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;

