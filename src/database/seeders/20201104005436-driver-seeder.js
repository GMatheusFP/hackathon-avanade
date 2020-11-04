'use strict';

const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('drivers', [
      {
        name: 'Tom Moreira',
        email: 'tom.moreira@domain.com',
        board: 'dft3456',
        model: 'Corsa',
      },
      {
        name: 'Norma Melo',
        email: 'norma.melo@domain.com',
        board: 'per5473',
        model: 'Palio',
      },
      {
        name: 'Mauro Feranndes',
        email: 'mauro.fernandes@domain.com',
        board: 'lop3658',
        model: 'Onix',
      },
      {
        name: 'Vitoria Garcia',
        email: 'vitoria.garcia@domain.com',
        board: 'dio5478',
        model: 'Up',
      },
      {
        name: 'Eduardo Lemos',
        email: 'eduardo.lemos@domain.com',
        board: 'tes6325',
        model: 'Mobi',
      },
      {
        name: 'Nelson Paz',
        email: 'nelson.paz@domain.com',
        board: 'kyop0it',
        model: 'Sentra',
      },
      {
        name: 'Ricardo Filho',
        email: 'ricardo.filho@domain.com',
        board: 'jgp5896',
        model: 'Versa',
      },
      {
        name: 'Mara Alonso',
        email: 'mara.alonso@domain.com',
        board: 'lgtdk4t',
        model: 'Uno',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Drivers', null, {});
  },
};
