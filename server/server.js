var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.render('client/index.html');
});

app.listen(8000, function() {
  console.log('Node app is running on port 8000');
});
