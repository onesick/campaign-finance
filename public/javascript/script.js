$(document).ready(function() {

  // AM: Please remove commented-out code and console.log statements from your final submission. Helps with readability.
  // AM: If you really want to keep it, create a separate branch where you can save them.

  //
  // $(".money-number").click(function() {
  //   Candidate.fetch().then(function(candidates){
  //     text.append(candidates.total_receipts)
  //     })
  //   });

  // AM: Does this block of code do anything - doesn't look like you invoke it with `()`? Is there a reason it is preceded by a `$`?
  // AM: If you just want to run these four lines of code whenever the application is loaded, you don't need to surround it with a function.
  $(function() {
    $(".financials").hide();
    $("#flag").hide();
    $(".animals").hide();
    $("#flag-2").hide();
  });

    // AM: It looks like you make multiple fetch calls to the same source in this file.
    // AM: Great refactoring goal would be to call fetch ONCE and then save/extract whatever information you need from that call.
    Candidate.fetch().then(function(candidates){
      var candidates_budget_sum=0;
      candidates.forEach(function(candidate){
          candidates_budget_sum += candidate.total_receipts;
      });
      console.log(candidates_budget_sum);
      $(".money-number").html("$"+candidates_budget_sum+"");
    });

  // AM: Encourage you to refactor this in a way that does not require you to iterate through all candidates after each click.
  // AM: If you manage to refactor this so only one fetch call is made upon page load, you could save and reference that response object to get the information you need based on the name of the candidate the user clicks.
  $(".faces img").click(function() {
    var self = this
    var text = $(".financials")
    text.show("slow")
    Candidate.fetch().then(function(candidates){
      candidates.forEach(function(candidate){
        if (candidate.name == self.id){
          $(".info").remove()
          $(".candidate-name").remove()
          text.append("<p class='info'>" + "<div class='candidate-name'>" + candidate.name + "</div>" + "</p>")
          text.append("<p class='info'> Total Reciepts: $" + candidate.total_receipts + "</p>")
          text.append("<p class='info'> Total Spent: $" + candidate.total_spent + "</p>")
          text.append("<p class='info'> Cash on Hand: $" + candidate.cash_on_hand + "</p>")
          text.append("<p class='info'> Contributions under $200: $" + candidate.contrib_less_200 + "</p>")
          text.append("<p class='info'> Contributions under $500: $" + candidate.contrib_less_500 + "</p>")
          text.append("<p class='info'> Contributions under $1500: $" + candidate.contrib_less_1500 + "</p>")
          text.append("<p class='info'> Contributions under $2700: $" + candidate.contrib_less_2700 + "</p>")
          text.append("<p class='info'> Contributions more than $2700: $" + candidate.contrib_more_2700 + "</p>")
        }
      })
    })
  });

  // Do the below event listeners do anything? If I'm not mistaken, they reference elements that are not currently used in your application. If so, should remove them.
  // If you were to use the, however, you could probably consolidate the below three listeners into one. (HINT: It would require using $(this))
  $("#button-1").click(function() {
    $(".animals").hide();
    $("#flag-2").hide();
  });

  $("#button-2").click(function() {
    $("#flag").hide();
    $("#flag-2").hide();
    $(".animals").show("slow");
  });

  $("#button-3").click(function() {
    $("#flag").hide();
    $(".animals").hide();
    $("#flag-2").show("slow");
  });



});
