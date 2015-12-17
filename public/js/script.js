// AM: You have a lot of OOJS code but it doesn't look like you ever use it!

$(document).ready(function(){
  Candidate.fetch().then(function(candidates){
    candidates.forEach(function(candidate){
      var view = new CandidateView(candidate);
    });
  });

});
