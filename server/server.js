var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8000;

mongoose.connect('mongodb://heroku_jwgf93cf:mvf9vhou2n0balvoeivp6319et@ds127439.mlab.com:27439/heroku_jwgf93cf');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Successfully connected to database');
});

var characterSchema = mongoose.Schema({
    name: String,
    race: String,
    class: String
  });
var Character = mongoose.model('Character', characterSchema);


app.use(express.static('./client'));
app.use(bodyParser());

app.post('/characterlist', function(req, res) {
  console.log('request: ', req.body);
  console.log('Got the post!');

  var c = new Character({
      name: req.body.name,
      class: req.body.class,
      race: req.body.race
  });

  c.save(function(err) {
      if (err)
          throw err;
      else
          console.log('save user successfully...');
  });
});

app.get('/characterlist', function(req, res) {
  console.log('I see you\'re trying to get something...');
  Character.find({}, function(err, characters) {
    if (err) {
      throw err;
    } else {
      res.send(characters);
    }
  });
});

app.listen(port, function() {
  console.log('Node app is running on port ' + port)
});