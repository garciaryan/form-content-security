var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//secure homepage
router.get('/csp', function(req, res, next) {
  res.header('Content-Security-Policy', `form-action 'self';`);
  res.render('index');
});

module.exports = router;
