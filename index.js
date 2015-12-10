
//using express as frame work
var express = require("express");
var app = express();
<<<<<<< HEAD
var bodyParser = require('body-parser');
var passport = require("passport");
var flash = require("connect-flash");
var hbs = require("hbs");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/local-authentication-with-passport');

var candidatesController = require("./controllers/candidatesController");
var usersController = require("./controllers/usersController");
=======
<<<<<<< HEAD
var request=require('request');
var mongoose=require('mongoose');
var passport=require('passport');
var env=require('./env');

// establish database connection to mongoDB
mongoose.connect('mongodb://localhost/project3');
>>>>>>> 282e6dcd0c7a2ffead376acd8a397ec23f5eeea4


//setting a view handler
app.set("view engine", "hbs");

<<<<<<< HEAD
app.use(session({secret: 'wazzup'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);


var routes = require('./config/routes');
app.use(routes);
=======
app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res){
  res.render("index.html");
});

var routes=require('./config/routes');
app.use(routes);


// app.get("/", function(req, res){
//   res.render("index.html");
// });

<<<<<<< HEAD
// var candidates_controller=require("./controllers/candidates_controller");
//
//
// app.get("/", candidates_controller.index);
//
>>>>>>> 282e6dcd0c7a2ffead376acd8a397ec23f5eeea4

//port listening at local hosting 3000
app.listen(3000, function(){
  console.log("app listening on port 3000");
});
