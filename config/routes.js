var express = require('express');
var passport = require('passport');
var router = express.Router();
var usersController = require('../controllers/usersController');
var candidatesController = require('../controllers/candidatesController');
var staticsController = require('../controllers/statics');


router.route('/')
  .get(candidatesController.index);

router.route('/candidates/:id')
  .get(candidatesController.show);

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route('/logout')
  .get(usersController.getLogout);

router.route('/secret')
  .get(usersController.secret);

router.route('/data')
  .get(staticsController.fetchData);



module.exports=router;
