var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/test');

app.use(express.static('./client'));

app.listen(port, function() {
  console.log('Node app is running on port ' + port)
});