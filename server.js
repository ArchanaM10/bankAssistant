var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var indexFile = require('./server/index.js');
app.use('/', indexFile);

app.set('port', 8080);
app.listen(app.get('port'), function() {
	console.log('Bank Assistant APP started');
});