const express = require("express");
const bodyParser = require("body-parser");
const drugService= require("./services/drugservice");

const app = express();


app.use(bodyParser.json());

app.use("/api/drugs",drugService);



app.listen(3000,function(){
    console.log("app is listning on port 3000");
});