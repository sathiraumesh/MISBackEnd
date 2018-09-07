const Student = require("../models/student");

addStudent = function (req, res, next) {

    var studentData = req.body;
    Student.findOne({ studentName: studentData.studentName }, function (err, student) {
        if (err) {
            res.status(500);
            res.send({ errors: "Error when creating the student record." });
            return;
        }
        if (student) {
            res.status(500);
            res.send({ errors: "Student is already exist." });
            return;
        }

        var newStudent = new Student(studentData);
        newStudent.save();
        res.status(201);
        res.send(newStudent);

    });
}

getStudent = function (req, res, next) {
    studentData = req.body;
    Student.find({}, { _id: 1, studentName: 1, studentFaculty: 1, studentAge: 1 }, function (err, student) {
        if (err) {
            res.status(500);
            res.send({ errors: "Error when finding the student record." });
            return;
        }
        if (student) {
            res.status(200);
            res.send(student);
            return;
        }
    });
}



module.exports.addStudent = addStudent;
module.exports.getStudent = getStudent;