'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients', {
      id: {
        primaryKey: true,
        type: Sequelize.BIGINTEGER,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('clients');
  },
};
