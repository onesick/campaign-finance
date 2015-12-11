<<<<<<< HEAD
$(document).ready(function(){
  Candidate.fetch().then(function(candidates){
    candidates.forEach(function(candidate){
      var view = new CandidateView(candidate);
    });
  });

});
=======
// $(document).ready(function(){
//   Candidate.fetch().then(function(candidates){
//     candidates.forEach(function(candidate){
//       var view = new CandidateView(candidate);
//     });
//   });
//
// });
>>>>>>> 1cfb43b9b0febd83bbacf10148dcfc5422ee7da8
