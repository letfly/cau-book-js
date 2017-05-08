const Sequelize = require('sequelize');

const sequelize = require('../core/extensions');

const Book = sequelize.define('book', {
  id: { type: Sequelize.STRING(50), primaryKey: true },
  name: Sequelize.STRING(100),
  author: Sequelize.STRING(100),
  status: { type: Sequelize.STRING(100), defaultValue: '未借阅' },
  date_created: Sequelize.BIGINT,
}, {
  timestamps: false
});

module.exports = Book;
