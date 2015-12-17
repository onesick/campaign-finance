// AM: Not sure what these files are -- remnants of a merge conflict? -- but they should not be pushed to your repo.

//using express as frame work
var express = require("express");
var app = express();
<<<<<<< HEAD
var request=require('request');
var mongoose=require('mongoose');
var passport=require('passport');
var env=require('./env');

// establish database connection to mongoDB
mongoose.connect('mongodb://localhost/project3');
=======
var bodyParser = require('body-parser');
var candidatesController = require("./controllers/candidatesController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
>>>>>>> 4d4cb1db14ae70aec06dca03bf588900414bd825

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

<<<<<<< HEAD
// var candidates_controller=require("./controllers/candidates_controller");
//
//
// app.get("/", candidates_controller.index);
//
=======

app.get('/', candidatesController.index);
app.get('/candidates', candidatesController.index);

app.get('/candidates/:id', candidatesController.show);

>>>>>>> 4d4cb1db14ae70aec06dca03bf588900414bd825
//port listening at local hosting 3000
app.listen(3000, function(){
  console.log("app listening on port 3000");
});
