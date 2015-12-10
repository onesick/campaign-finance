<<<<<<< HEAD
var env = require( "../env" );
var request=require('request');

// request('http://api.nytimes.com/svc/elections/us/v3/finances/2016/president/totals.json?api-key='+env.api_key,
// function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body); // Show the HTML for the Google homepage.
//   }
// })

var Candidate = function(info){
  this.name = info.name;
}


// var candidates = [];
//
// $.getJSON( url, function(data){
//
//   $.each(data, candidates.push(new Candidates(data.name)));
// });
