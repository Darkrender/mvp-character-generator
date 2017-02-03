var express = require('express');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8000;
var db = require('../database/schemas.js');

app.use(express.static('./client'));
app.use(bodyParser());

app.post('/characterlist', function(req, res) {
  console.log('request: ', req.body);
  console.log('Got the post!');

  db.Character.create({
    name: req.body.name,
    class: req.body.class,
    race: req.body.race,
    trait: req.body.trait,
    flaw: req.body.flaw,
    alignment: req.body.alignment,
    notes: req.body.notes
  });
});

app.get('/characterlist', function(req, res) {
  console.log('I see you\'re trying to get something...');

  db.Character.findAll()
    .then( function(characters) {
      res.send(characters);
    });
});

app.listen(port, function() {
  console.log('Node app is running on port ' + port)
});
