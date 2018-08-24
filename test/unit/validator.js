var should = require('should');
var validator = require('../../lib/validator');
var sinon = require("sinon");


describe('validator', function () {
    describe('validate', function () {
        it("should throw an error if the delegated method doesn't exist", function () {
            delete validator.unknownMethod;
            (function () {
                validator.validate('unknownMethod');
            }).should.throw(/validator method does not exist/i);
        });
        it("should return a function", function() {
            validator.noop = function(){};
            validator.validate('noop').should.be.a.Function;
       });
    });
});

describe("inner function", function() {
    it("should call the delegated method with the arguments inorder", function() {
      var method = sinon.spy();
      validator.myCustomValidationMethod = method;
      validator.validate('myCustomValidationMethod', 1, 2,3)("str");
      method.calledWith("str", 1, 2, 3).should.be.true;
    });
});
