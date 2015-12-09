var express = require('express');
var passport = require('passport');
var router = express.Router();
var usersController = require('../controllers/usersController');
var candidatesController = require('../controllers/candidatesController');


router.route('/')
  .get(candidatesController.home);


module.exports = router;
