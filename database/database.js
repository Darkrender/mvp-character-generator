var Sequelize = require('sequelize');

var db = new Sequelize('test_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

db.authenticate()
  .then(function(err) {
  console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.log('Unable to connect to the database: ', err);
  });




module.exports = db;