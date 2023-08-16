var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/newEndpoint', function(req, res, next) {
  res.send('this is a new enpoint for users');
});

module.exports = router;
