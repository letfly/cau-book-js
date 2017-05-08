const Sequelize = require('sequelize');

const config = require('../settings');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
});

module.exports = sequelize;
