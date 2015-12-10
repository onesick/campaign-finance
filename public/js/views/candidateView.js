var CandidateView= function(candidate){
  this.candidate=candidate;

  this.$el=$("<div class='candidate'></div>");
  this.render();

  $(".candidates").append(this.$el);
};

CandidateView.prototype={
  render: function(){
    var self=this;
    self.$el.html(self.candidateTemplate(self.candidate));

    var showButton = self.$el.find(".showCandidates");
    // var candidatesDiv= self.$(".candidate");
    // candidatesDiv.hide();

    // showButton.on("click", function(){
    //   self.toggleCandidates(candidatesDiv);
    // })
  },

  candidateTemplate: function(){
    var html = $("<div>");
    html.append("<h3>" + this.candidate.name + "</h3>");
    html.append("<h3> total receipts:" + this.candidate.total_receipts + "</h3>");
    html.append("<h3> total spent:" + this.candidate.total_spent + "</h3>");
    html.append("<h3> total cash on hands:" + this.candidate.cash_on_hand+ "</h3>");
    html.append("<h3> total contrib less than 200:" + this.candidate.contrib_less_200 + "</h3>");

    return(html);
  }
};
