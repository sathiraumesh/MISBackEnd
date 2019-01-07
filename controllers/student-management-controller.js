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

module.exports.addStudent = addStudent;

getStudents = function (req, res, next) {
    //studentData = req.body;
    Student.find({}, { _id: 1, studentRegistrationNumber: 1, studentName: 1, studentDOB: 1, studentAge: 1, gender: 1, studentFaculty: 1, marritalStatus: 1, studentNationality: 1, studentPositionOfFamily: 1, studentAddress: 1, studentTermAddress: 1, studentParentGuardian: 1, studentBoardingRelative: 1, studentAmountPaid: 1, studentOccupationFather: 1, studentOccupationMother: 1, studentBursary: 1, studentSchool: 1, gamesPlayed: 1 }, function (err, student) {
        if (err) {
            res.status(500);
            res.send({ errors: "Error when finding the student record." });
            //return;
        }
        if (student) {
            res.status(200);
            res.send(student);
            //return;
        }
    });

}

module.exports.getStudents = getStudents;

getStudent = function (req, res, next) {
    var studentId = req.params.id;
    Student.findOne({ _id: studentId }, { studentRegistrationNumber: 1, studentName: 1, studentDOB: 1, studentAge: 1, gender: 1, studentFaculty: 1, marritalStatus: 1, studentNationality: 1, studentPositionOfFamily: 1, studentAddress: 1, studentTermAddress: 1, studentParentGuardian: 1, studentBoardingRelative: 1, studentAmountPaid: 1, studentOccupationFather: 1, studentOccupationMother: 1, studentBursary: 1, studentSchool: 1, gamesPlayed: 1 }, function (err, student) {
        if (err) {
            res.status(400);
            res.send({ errors: "Error when finding the student record." });
        }
        if (!student) {
            res.status(400);
            res.send({ errors: "Unabale to find the student record." });
        }
        if (student) {
            res.status(200);
            res.send(student);
        }
    });
}

module.exports.getStudent = getStudent;

updateStudent = function (req, res, next) {
    var studentData = req.body;
    var studentId = req.params.id;
    Student.findOneAndUpdate({ _id: studentId }, studentData, function (err, student) {
        if (err) {
            res.status(400);
            res.send({ errors: "Error occured when updating the student." });
        }
        if (student) {
            res.status(200);
            Student.findOne({ _id: studentId }).then(function (student) {
                res.send(student);
            });
            //res.send(student);
        }
    });
}

module.exports.updateStudent = updateStudent;

deleteStudent = function (req, res, next) {
    var studentId = req.params.id;
    Student.deleteOne({ _id: studentId }, function (err, student) {
        if (err) {
            res.status(400);
            res.send({ errors: "Error occured when deleting the student record." });
        }
        if (student) {
            res.status(200);
            // res.send(student);
            res.send({ success: "successfully deleted." });
        }
    });
}

module.exports.deleteStudent = deleteStudent;