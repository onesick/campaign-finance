var express = require('express');
<<<<<<< HEAD
var passport = require('passport');
var router = express.Router();
var usersController = require('../controllers/usersController');
var candidatesController = require('../controllers/candidatesController');
var staticsController = require('../controllers/statics');
var env=require("../env");

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
=======
var router = express.Router();
var staticsController = require('../controllers/statics');
var env=require("../env");

// var usersController = require('../controllers/users');


// router.route('/')
// .get(staticsController.index);

router.route('/data').get(staticsController.fetchData);

>>>>>>> 1cfb43b9b0febd83bbacf10148dcfc5422ee7da8

module.exports=router;
