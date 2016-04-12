var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/MaterialX - HTML v1.1/materialx/index.html'))});


var port = 3000;

app.listen(port, function() {
    console.log("lisenting on port:" + port);
});