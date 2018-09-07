const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    studentName: { type: "String", required: [true, 'Name is required.'] },
    studentFaculty: { type: "String", required: [true, 'Faculty is required.'] },
    studentAge: { type: "Number", required: [true, 'Age is required.'] }
});

const Student = mongoose.model('student', studentSchema);
module.exports = student;

