
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
var request=require('request');
var env=require('./env');

mongoose.connect('mongodb://localhost/local-authentication-with-passport');

var candidatesController = require("./controllers/candidatesController");
var usersController = require("./controllers/usersController");



// establish database connection to mongoDB
// mongoose.connect('mongodb://localhost/project3');

=======

var request=require('request');
var mongoose=require('mongoose');
var passport=require('passport');
var env=require('./env');

// establish database connection to mongoDB
mongoose.connect('mongodb://localhost/project3');


>>>>>>> 1cfb43b9b0febd83bbacf10148dcfc5422ee7da8

//setting a view handler
app.set("view engine", "hbs");


<<<<<<< HEAD
app.use(session({secret: 'wazzup'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

=======
>>>>>>> 1cfb43b9b0febd83bbacf10148dcfc5422ee7da8
app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res){
  res.render("index.html");
});

<<<<<<< HEAD
require('./config/passport')(passport);


var routes = require('./config/routes');
app.use(routes);


=======
var routes=require('./config/routes');
app.use(routes);


// app.get("/", function(req, res){
//   res.render("index.html");
// });

// var candidates_controller=require("./controllers/candidates_controller");
//
//
// app.get("/", candidates_controller.index);
//
>>>>>>> 1cfb43b9b0febd83bbacf10148dcfc5422ee7da8

//port listening at local hosting 3000
app.listen(3000, function(){
  console.log("app listening on port 3000");
});
