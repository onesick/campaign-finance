$(document).ready(function() {



  //
  // $(".money-number").click(function() {
  //   Candidate.fetch().then(function(candidates){
  //     text.append(candidates.total_receipts)
  //     })
  //   });


  $(function() {
    $(".financials").hide();
    $("#flag").hide();
    $(".animals").hide();
    $("#flag-2").hide();
  });


    Candidate.fetch().then(function(candidates){
      var candidates_budget_sum=0;
      candidates.forEach(function(candidate){
          candidates_budget_sum += candidate.total_receipts;
      });
      console.log(candidates_budget_sum);
      $(".money-number").html("$"+candidates_budget_sum+"");
    });


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
