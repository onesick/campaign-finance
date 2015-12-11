

// GET /
function index(req, res) {
  res.render('./candidates/index');
}

function show(req,res) {
  res.render('./candidates/show');
}
module.exports = {
  index: index,
  show: show
};
