var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 8000;

mongoose.connect('mongodb://heroku_jwgf93cf:mvf9vhou2n0balvoeivp6319et@ds127439.mlab.com:27439/heroku_jwgf93cf');

app.use(express.static('./client'));

app.listen(port, function() {
  console.log('Node app is running on port ' + port)
});