var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/rpg-character-generator');

app.listen(8000);

app.get('/', function(req, res) {
  res.end();
});

modules.exports = app;