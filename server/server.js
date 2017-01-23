var express = require('express');

var app = express();
var port = process.env.PORT || 8000;

app.get('/', function(request, response) {
  response.render('client/index.html');
});

app.listen(port, function() {
  console.log('Node app is running on port ' + port);
});
