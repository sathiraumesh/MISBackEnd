const mongoose = require("mongoose");
const bcrypt= require("bcrypt-nodejs");

const userSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

userSchema.methods.checkPassword=function(guess,done){
    bcrypt.compare(guess,this.password,function(err,isMAtch){
        done(err,isMAtch);
    });
};

module.exports=mongoose.model("User",userSchema,"users");