
const passwordGenrator = require("generate-password");
const PASSWORD_LENGTH = 8;


// functio that genrates passwords of the user
function genratePassword() {
    return passwordGenrator.generate({
        length: PASSWORD_LENGTH,
        numbers: true
    });
}

module.exports.genratePassword = genratePassword;


