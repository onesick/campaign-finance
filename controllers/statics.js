var request=require('request');
var env=(process.env.api_key || require('../env'));
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

// AM: +1 using the back-end as a middleman for your app and a 3rd-party API.
function fetchData(req, res){
  request("http://api.nytimes.com/svc/elections/us/v3/finances/2016/president/totals.json?api-key="+env.api_key+"", function(error, response, body){
    if(!error && response.statusCode ==200){
      var candidates=JSON.parse(body).results;
      res.json(candidates);
    }
  });
};

function home(req, res){
  var candidates=req.fetchData;
  res.redirect('./candidates/index');
};

function index(req, res){
  res.send('index.html');
};

module.exports = {
  fetchData: fetchData,
  home: home,
  index: index
}
