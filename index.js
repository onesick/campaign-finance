
//using express as frame work
var express = require("express");
var app = express();
var request=require('request');
var mongoose=require('mongoose');
var passport=require('passport');
var env=require('./env');

// establish database connection to mongoDB
mongoose.connect('mongodb://localhost/project3');


//setting a view handler
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res){
  res.render("index.html");
});

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

//port listening at local hosting 3000
app.listen(3000, function(){
  console.log("app listening on port 3000");
});
