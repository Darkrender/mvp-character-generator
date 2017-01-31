var Sequelize = require('sequelize');
var db = require('./database.js');

var Character = db.define('character', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING
  },

  race: {
    type: Sequelize.STRING
  },

  class: {
    type: Sequelize.STRING
  },
  trait: {
    type: Sequelize.STRING
  },
  flaw: {
    type: Sequelize.STRING
  },
  alignment: {
    type: Sequelize.STRING
  },
  notes: {
    type: Sequelize.STRING
  }

});

Character.sync({});

module.exports.Character = Character;