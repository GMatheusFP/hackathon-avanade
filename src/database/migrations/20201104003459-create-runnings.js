'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('runnings', {
      id: {
        primaryKey: true,
        type: Sequelize.BIGINTEGER,
        autoIncrement: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATETIME,
      },
      source: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      destiny: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      client_id: {
        allowNull: false,
        type: Sequelize.BIGINTEGER,
        references: {
          model: 'Clients',
          key: 'id',
        },
      },
      driver_id: {
        allowNull: false,
        type: Sequelize.BIGINTEGER,
        references: {
          model: 'Drivers',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('runnings');
  },
};
