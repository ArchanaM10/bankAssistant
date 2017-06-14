var express = require('express');
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');

var app = express();
// require('./_routes')(app); // <-- or whatever you do to include your API
// endpoints and middleware

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

app.use('/groupPoll', routes);

app.set('port', 8080);
app.listen(app.get('port'), function() {
	// console.log('Group Poll app listening at http://%s:%s', host, port);
	console.log('Bank Assistant APP started');
});