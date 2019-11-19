/*var express = require('express');
var router = express.Router();


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Express - Michel' });
});

module.exports = router;*/

var http = require('http'),
    fs = require('fs');


fs.readFile('michel-leonardo-lopez-avendao.rstudio.cloud.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
