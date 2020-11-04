const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const ConfigDatabase = require('../config/database');

const Client = require('../models/Client');

const connection = new Sequelize(ConfigDatabase);

const ClientController = {
  async store(req, res) {
    const { name, email } = req.body;
    const now = new Date();
    const [idUser, err] = await connection.query(
      'INSERT INTO users (name, email) VALUES ($name, $email)',
      {
        bind: {
          name,
          email,
          createdAt: now,
          updatedAt: now,
        },
        raw: true,
      },
    );

    if (!err) {
      return res
        .status(400)
        .json({ details: 'Usuario não criado, tente novamente!' });
    }

    return res.status(201).json({ id: idUser, name, email });
  },
  update(req, res) {
    const { id } = req.params;
    const { name, email } = res.body;
    const [clientUpdate] = Client.update(
      {
        name,
        email,
      },
      { where: { id } },
    );

    if (!clientUpdate) {
      return res.status(400).send();
    }

    return res.status(200).json();
  },

  async delete(req, res) {
    const { id } = req.params;

    const clientDestroy = await Client.destroy({
      where: {
        id,
      },
    });

    return res.status(200).json(clientDestroy);
  },
};

module.exports = ClientController;
