const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const SALT_FACTOR = 10;

const userSchema = new mongoose.Schema({

    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique:true },
    role: { type: Number, required: true, min: 0, max: 3, default: 0 },
    firstName: { type: String, default: "First Name" },
    lastName: { type: String, default: "Last Name" },
    age: { type: Number, min: 0, max: 100, default: 0 },
    email: { type: String, unique:true,default: "your@example.com" },
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