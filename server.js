const express = require("express");
const bodyParser = require("body-parser");
const drugInService = require("./services/drug-inventory-service")
const authService = require("./services/authentcaition-service");
const userService = require("./services/user-service");
const studentService = require("./services/student-management-service");
const db = require("./lib/db");
const app = express();
const config = require("./config.json")[app.get("env")];



db.connect(config.mongoUrl);

app.use(bodyParser.json());

// routing to services services
app.use("/api/drugs", drugInService);
app.use("/api/authenticate", authService);
app.use("/api/users", userService);
app.use("/api/student", studentService);



app.listen(3000, function () {
    console.log("app is listning on port 3000");
});