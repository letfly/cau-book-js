'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: '未借阅'
      },
      date_created: {
        type: Sequelize.BIGINT
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('books');
  }
};
