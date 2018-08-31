const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const SALT_FACTOR = 10;

const userSchema = new mongoose.Schema({

    username: { type: String },
    password: { type: String  },
    role: { type: String  },
    firstName: { type: String, default: "First Name" },
    lastName: { type: String, default: "Last Name" },
    dateOfBirth: { type: String,  default: "date" },
    email: { type: String, unique:true,default: "your@example.com" },
    telePhoneNumber:{type:Number},
    createdAt: { type: Date, default: Date.now }

});


userSchema.pre("save", function (done) {
    var user = this;
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if (err) {
            return done(err);
        }
        bcrypt.hash(user.password,salt, null, function (err, hashedPassword) {
            console.log(user.password);
            console.log(hashedPassword);
            if (err) {
                return done(err);
            }
            user.password = hashedPassword;
            done();
        });
    });
});


userSchema.methods.checkPassword = function (guess, done) {
    bcrypt.compare(guess, this.password, function (err, isMAtch) {
        done(err, isMAtch);
    });
};

module.exports = mongoose.model("User", userSchema, "users");