var should = require('should');
var sinon = require("sinon");
var authController = require("../../controllers/authentication-controller");
describe("Authentication-Controller",function(){

    describe("AuthenticateUsers",function(){
        it("should throw and error if the function doesn't exsist",function(){
            authController.authenticateUsers.should.be.a.Function;
        });
    });

    describe("isTokenEnsure",function(){
        it("should throw an error if the function doesnt exsits",function(){
            authController.isTokenEnsured.should.be.a.Function;
        });
    });
    describe("authorizeUser",function(){
        it("should throe an error if the method doesnt exsist",function(){
            authController.authorizeUser.should.be.a.Function;
        });
    });
   
});
