var express = require('express');

//Create our app
var app = express();

// folder to serve
app.use(express.static('public'));
// run server
app.listen(3000, function() {
	console.log('Express server is up on port 3000')
});