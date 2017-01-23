var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/rpg-character-generator');


app.get('/', function(request, response) {
  response.render('client/index.html');
});

app.listen(8000, function() {
  console.log('Node app is running on port 8000');
});
