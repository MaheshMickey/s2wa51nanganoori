var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var rand;
  
  var random = Math.random();
  console.log(req.query.rand);
  x = req.query.rand;

  // checking if url has params
  if (rand == undefined) {
    rand = random;
  }
  
  let pow = Math.pow(rand,rand) 
  let sign =Math.sign(rand)
  let tanh = Math.tanh(rand)
  let atrun = Math.trunc(rand);
 
  res.render('bonus', {
    title: 'Mahesh Kumar Computation',
    Calculate: `applied to ` + rand  + ` is ` + pow ,
    c1: `applied to ` + rand + ` is ` + sign,
    c2: `applied to ` + rand + ` is ` + tanh,
    c3: `applied to ` + rand + ` is ` + atrun,
    
  });
});

module.exports = router;