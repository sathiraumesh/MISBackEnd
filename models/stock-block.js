const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockBlockSchema = new Schema({

    items:[],
    createdAt: { type: Date, default: Date.now }
});

userSchema.pre("save", function(done){
    var user = this;
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if (err) {
            return done(err);
        }
        bcrypt.hash(user.password, salt, null, function (err, hashedPassword) {
            // console.log(user.password);
            console.log(user);
            if (err) {
                return done(err);
            }
            user.password = hashedPassword;
            done();
        });
    });
});


module.exports = mongoose.model("stocks", stockBlockSchema);