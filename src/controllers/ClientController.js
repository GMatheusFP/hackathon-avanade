const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const ConfigDatabase = require('../config/database');

const connection = new Sequelize(ConfigDatabase);

const ClientController = {
  index() {},
  show(req, res) {},
  store(req, res) {},
  update(req, res) {},
  delele(req, res) {},
};

module.exports = ClientController;
