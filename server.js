const express = require("express");
const bodyParser = require("body-parser");
const drugService= require("./services/drug-service");
const authService = require("./services/authentication-service");
const mongoose = require("mongoose")
const cors = require("cors");



mongoose.connect("mongodb://localhost:27017/test",err=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("connected to the data base sucessfully");
    }

});



const app = express();



app.use(bodyParser.json());

// routing the services
app.use("/api/drugs",drugService);
app.use("/api/authenticate",authService);



app.listen(3000,function(){
    console.log("app is listning on port 3000");
});