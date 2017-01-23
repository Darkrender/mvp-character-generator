var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 8000;
app.use(express.static('./client'));

app.get('/', function(req, res) {
  res.send();
});

app.listen(port, function() {
  console.log('Node app is running on port ' + port);
});