var candidates = [
  ["Hillary Clinton", "D"],
  ["Bernie Sanders", "D"],
  ["Martin O'Malley", "D"],
  ["Donald Trump", "R"],
  ["Ben Carson", "R"],
  ["Jeb Bush", "R"],
  ["Marco Rubio", "R"],
  ["Carly Fiorina", "R"],
  ["Ted Cruz", "R"],
  ["Rand Paul", "R"],
  ["Chris Christie", "R"],
  ["John Kasich", "R"],
  ["Mike Huckabee", "R"]
];

function Candidate(){
};

Candidate.all = function(){
  return candidates;
};

module.exports = Candidate
