const Sequelize = require('sequelize');

const sequelize = require('../core/extensions');

const Book = sequelize.define('book', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  author: Sequelize.STRING(100),
  status: Sequelize.STRING(100),
  date_created: Sequelize.BIGINT,
}, {
  timestamps: false
});

module.exports = Book;
