// AM: You make use of your model's fetch method in your application, but you don't actually use it to store and represent candidate data.
// AM: A big refactoring step would be to make it so that ALL of your Javascript utilizes an OOJS approach.
// AM: That means taking all the JS you run in `javascript/script.js` and moving that functionality into your model and view.

var Candidate = function(info){
  this.name = info.name;
  this.total_receipts= info.total_receipts;
  this.total_spent=info.total_disbursements;
  this.cash_on_hand=info.cash_on_hand;
  this.contrib_less_200=info.contributions_less_than_200;
  this.contrib_less_500=info.contributions_200_499;
  this.contrib_less_1500=info.contributions_500_1499;
  this.contrib_less_2700=info.contributions_1500_2699;
  this.contrib_more_2700=info.contributions_2700;
}

Candidate.fetch = function(){
  // AM: You don't need a `.` in the relative path for an AJAX call. In fact, this might break it.
 var url="./data";
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
