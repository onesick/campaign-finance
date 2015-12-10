

$(document).ready(function() {

  $(function() {
      $(".financials").hide();
      $("#flag").hide();
      $(".animals").hide();
      $("#flag-2").hide();
  });

  $(".faces img").click(function() {
    $(".financials").show("slow")
      console.log(this)
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
