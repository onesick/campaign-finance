var Candidate = function(info){
  this.name = info.name;
  this.total_receipts= info.total_receipts;
  this.total_spent=info.total_disbursements;
  this.cash_on_hand=info.cash_on_hand;
  this.contrib_less_200=info.contributions_less_than_200;
}

Candidate.fetch = function(){
 var url="http://localhost:3000/data";
  // saving the ajax request to a local variable
  var request = $.getJSON(url)
  // the promise function on a successful ajax call.
  .then(function(response) {
    // local variable in the promise callback instantiated as an empty array
    var candidates = [];
    // loop over each element in the response
    for(var i = 0; i < response.length; i++){

      // create a new JS candidate object for each element in the response
      candidates.push(new Candidate(response[i]));
    }
    // returns candidates in the promise so that it can be passed in as an argument to future promises
    return candidates;
  })
  .fail(function(response){
    console.log("candidates fetch fail")
  })
  // explicit return of the fetch function that returns the json request with artists available an argument for future promises
  return request
};
