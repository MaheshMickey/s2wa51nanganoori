var express = require('express');
const { param } = require('./users');
var router = express.Router();
var rand = Math.random().toFixed(2);


console.log(rand);
/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.rand != undefined) {
    rand = req.query.rand;
  } 
  res.render('bonus',
   { Calc: 'Tanh of (' +rand+') is \n'+Math.tanh(rand)});
});
module.exports = router;