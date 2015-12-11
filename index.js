
//using express as frame work
var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var passport = require("passport");
var flash = require("connect-flash");
var hbs = require("hbs");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require("mongoose");
var request=require('request');


// mongoose.connect(process.env.MONGOLAB_URL ||'mongodb://localhost/local-authentication-with-passport');

var candidatesController = require("./controllers/candidatesController");
var usersController = require("./controllers/usersController");


//setting a view handler
app.set("view engine", "hbs");

// app.use(session({secret: 'wazzup'}));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res){
  res.render("index.html");
});


// require('./config/passport')(passport);


var routes = require('./config/routes');
app.use(routes);




//port listening at local hosting 3000
app.listen(process.env.PORT || 3000, function(){
  console.log("app listening on port 3000");
});
