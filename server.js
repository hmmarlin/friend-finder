// Dependencies
var cool = require('cool-ascii-faces');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// Links to html routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
