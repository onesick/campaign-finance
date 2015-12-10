$(document).ready(function() {

  // $(".money-number").function() {
  //   Candidates.fetch().then(function(candidates){
  //       console.log(candidates.total_receipts)
  //       text.append("$" + candidate.total_receipts + "</p>")
  //     }
  //   )
  // };


  $(function() {
      $(".financials").hide();
      $("#flag").hide();
      $(".animals").hide();
      $("#flag-2").hide();
  });

  $(".faces img").click(function() {
    var self = this
    var text = $(".financials")
      text.show("slow")
      Candidate.fetch().then(function(candidates){
        console.log(candidates)
        candidates.forEach(function(candidate){
          if (candidate.name == self.id){
            $(".info").remove()
            $(".candidate-name").remove()
            text.append("<p class='info'>" + "<div class='candidate-name'>" + candidate.name + "</div>" + "</p>")
            text.append("<p class='info'> Total Reciepts: $" + candidate.total_receipts + "</p>")
            text.append("<p class='info'> Total Spent: $" + candidate.total_spent + "</p>")
            text.append("<p class='info'> Cash on Hand: $" + candidate.cash_on_hand + "</p>")
            text.append("<p class='info'> Contributions under $200: $" + candidate.contrib_less_200 + "</p>")
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
