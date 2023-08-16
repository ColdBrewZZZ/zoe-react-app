var express = require('express');
var router = express.Router();

/* this is to get orders */
router.get('/', function(req, res, next) {
  res.send('this is the orders');
});



module.exports = router;
