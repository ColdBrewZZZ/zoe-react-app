var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('these are the users');
});

router.get('/user', function(req, res, next) {
  res.send('this is just one user');
});

module.exports = router;
