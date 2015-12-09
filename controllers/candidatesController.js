

// GET /
function home(req, res) {
  res.render('index');
}
//
function index(req, res) {
  res.render('index');
}

module.exports = {
  home: home
  index: index
};
