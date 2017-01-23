var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 8000;
app.use(express.static('./../client'));

app.listen(port, function() {
  console.log('Node app is running on port ' + port);
});