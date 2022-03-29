var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
var a = Math.floor(Math.random()*10);
var b = Math.floor(Math.random()*10);
  res.render('bonus',{Calc:"Math.pow() applied to :("+a+","+b+")"+`\n`+
            "Result is :"+ Math.floor(Math.pow(a,b))});
});

module.exports = router;
