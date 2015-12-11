
$(document).ready(function(){
  Candidate.fetch().then(function(candidates){
    candidates.forEach(function(candidate){
      var view = new CandidateView(candidate);
    });
  });

});
