var validator = require('validator');
var extend = require('lodash').extend;
var customValidator = extend({}, validator);



customValidator.validate = function (method) {
    if (!customValidator[method]) {
        throw new Error('validator method does not exist');

    }
    var args = Array.prototype.slice.call(arguments, 1);

    return function (value) {
        return customValidator[method].apply(customValidator,
            Array.prototype.concat(value, args));
    };
};

module.exports = customValidator;


