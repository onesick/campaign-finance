
//using express as frame work
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var candidatesController = require("./controllers/candidatesController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//setting a view handler
app.set("view engine", "hbs");


app.get('/', candidatesController.index);
app.get('/candidates', candidatesController.index);

app.get('/candidates/:id', candidatesController.show);

//port listening at local hosting 3000
app.listen(3000, function(){
  console.log("app listening on port 3000");
});
