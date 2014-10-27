var express = require('express');
var passport = require('passport');
var querystring = require('querystring');
var router = express.Router();


/* Make sure that a user is logged in before accessing potentially private pages */

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index' , {loginMessage: req.flash('loginMessage') });
});

module.exports = router;
