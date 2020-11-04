'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drivers', {
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
      board: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('drivers');
  },
};
