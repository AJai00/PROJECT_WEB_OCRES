var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var path = require("path");


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
//var sensorsRouter = require("./routes/sensors");
//var measuresRouter = require("./routes/measures");
//var kapiRouter = require("./routes/kapi");

var app = express();
/*
//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
s  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});
*/

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
//app.use("/sensors", sensorsRouter);
//app.use("/measures", measuresRouter);
//app.use("/kapi", kapiRouter);

module.exports = app;
