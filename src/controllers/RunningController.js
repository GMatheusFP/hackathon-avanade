const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const ConfigDatabase = require('../config/database');

const Running = require('../models/Running');

const connection = new Sequelize(ConfigDatabase);

const RunningController = {
  async requestRunning(req, res) {
    const { id } = req.body;
  },
  async acceptRunning(req, res) {
    const { acepted } = req.query;
    // const [idUser, err] = await connection.query(
    // eslint-disable-next-line max-len
    //     'INSERT INTO users (status, date, source, destiny, client_id, driver_id) VALUES ($name, $email)',
    //     {
    //       bind: {
    //        ,
    //         createdAt: now,
    //         updatedAt: now,
    //       },
    //       raw: true,
    //     },
    //   );
  },
  driverRunningOptions(req, res) {
    const { id } = req.params;
    const { status } = res.body;
    const [updateDrive] = Running.update(
      {
        status,
      },
      { where: { id } },
    );

    if (!updateDrive) {
      return res.status(400).send();
    }

    return res.status(200).json();
  },
  clientRunningOptions(req, res) {
    const { id } = req.params;
    const { status } = res.body;
    const [updateDrive] = Running.update(
      {
        status,
      },
      { where: { id } },
    );

    if (!updateDrive) {
      return res.status(400).send();
    }

    return res.status(200).json();
  },
  async viewClientHistory(req, res) {
    const { userId } = req.params.id;

    const [getHistory, err] = await Running.find({ client_id: userId });

    if (!err) {
      return res.status(400).json({
        details:
          'Usuario não possui um historico de corridas ainda, tente novamente após realizar alguma!',
      });
    }

    return res.status(201).json({ getHistory });
  },
  async viewDriverHistory(req, res) {
    const { driverId } = req.params.id;

    const [getHistory, err] = await Running.find({ driver_id: driverId });

    if (!err) {
      return res.status(400).json({
        details:
          'Motorista não possui um historico de corridas ainda, tente novamente após realizar alguma!',
      });
    }

    return res.status(201).json({ getHistory });
  },
};

module.exports = RunningController;
