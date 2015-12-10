
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


var routes=require('./config/routes');
app.use(routes);


app.get("/", function(req, res){
  res.render("index.html");
});
request("http://api.nytimes.com/svc/elections/us/v3/finances/2016/president/totals.json?api-key="+env.api_key+"", function(error, response, body){
  if(!error && response.statusCode ==200){
    var info=JSON.parse(body);
    console.log(info.results[0].name);
  }
});

// var candidates_controller=require("./controllers/candidates_controller");
//
//
// app.get("/", candidates_controller.index);
//
//port listening at local hosting 3000
app.listen(3000, function(){
  console.log("app listening on port 3000");
});
