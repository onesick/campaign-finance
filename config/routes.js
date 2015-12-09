var express = require('express');
var passport = require('passport');
var router = express.Router();
var usersController = require('../controllers/usersController');
var candidatesController = require('../controllers/candidatesController');


router.route('/')
  .get(candidatesController.index);

router.route('/candidates/:id')
  .get(candidatesController.show);

router.route('/signup')
  .get(usersController.getSignup);
  
module.exports = router;
