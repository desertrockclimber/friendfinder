var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 4000;

// var jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({extended: true}));

var app = express();
app.use(bodyParser.json({type: 'application/++json'}))

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))

require("./routing/apiRoutes.js")(app);

require("./routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
	console.log("App listening on Port: " + PORT);
	console.log("localhost:"+ PORT + "/");

});

