var express = require('express');
var path = require('path');
var app = express();

// var middleware = require('express-middleware');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
	res.sendFile(process.cwd() + '/public/index.html')});


var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("lisenting on port:" + PORT);
});