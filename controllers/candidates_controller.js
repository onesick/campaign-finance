// AM: Know I'm sounding like a broken record here, but if you're not using this file, you should not keep it (especially because you have another file of the same name that does the job).

// var env = require( "../env" );
// var candidates = [];
//
// url = "http://api.nytimes.com/svc/elections/us/v3/finances/2016/president/totals.json?api-key="+env.api_key;
// $.getJSON( url, function(data){
//
//   $.each(data, candidates.push(new Candidates(data.name)));
// });
var Candidate = require("../models/candidate");
Candidate.fetch();


var candidatesController = {
  index: function(req,res){
    res.render("candidates/index.hbs", {candidate: Candidate.all()});
  }
}

// module.exports={
//   index;
// }
