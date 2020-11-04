'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('runnings', [
      {
        status: 'finalizado',
        date: '2020-11-02 15:35:25',
        source: 'Rua A, 24 - Bairro C - City - SP',
        destiny: 'Rua C, 224 - Bairro Z - City - SP',
        client_id: 3,
        driver_id: 2,
      },
      {
        status: 'finalizado',
        date: '2020-11-01 18:48:45',
        source: 'Rua Y, 56 - Bairro A - City - SP',
        destiny: 'Rua R, 1204 - Bairro P - City - SP',
        client_id: 1,
        driver_id: 4,
      },
      {
        status: 'cancelado',
        date: '2020-10-31 10:30:00',
        source: 'Rua S, 236 - Bairro L - City - SP',
        destiny: 'Rua Q, 2240 - Bairro V - City - SP',
        client_id: 6,
        driver_id: 1,
      },
      {
        status: 'cancelado',
        date: '2020-10-30 08:52:02',
        source: 'Rua G, 76 - Bairro W - City - SP',
        destiny: 'Rua J, 365 - Bairro C - City - SP',
        client_id: 8,
        driver_id: 5,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('runnings', null, {});
  },
};
