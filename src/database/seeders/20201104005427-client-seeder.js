'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clients', [
      {
        name: 'Luis Silva',
        email: 'luis.silva@domain.com',
      },
      {
        name: 'Ana Souza',
        email: 'ana.souza@domain.com',
      },
      {
        name: 'Douglas Santos',
        email: 'douglas.santos@domain.com',
      },
      {
        name: 'Vitor Ferreira',
        email: 'vitor.ferreira@domain.com',
      },
      {
        name: 'Paula Borges',
        email: 'paula.borges@domain.com',
      },
      {
        name: 'Silvia Lins',
        email: 'silvia.lins@domain.com',
      },
      {
        name: 'Maria Gomes',
        email: 'maria.gomes@domain.com',
      },
      {
        name: 'Vilma Gama',
        email: 'vilma.gama@doain.com',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
