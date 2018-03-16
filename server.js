var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({ extended: true }));

// var jsonParser = bodyParser.json()
var app = express();

app.use(express.static("./app/public"))

app.use(bodyParser.json({type: 'application/*+json'}))

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))

require("./app/routing/apiRoutes.js")(app);

require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
	console.log("App listening on Port: " + PORT);
	console.log("localhost:"+ PORT + "/");

});

