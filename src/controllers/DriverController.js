const { Driver } = require('../models');

const DriverController = {
  async index(req, res) {
    const drivers = await Driver.findAll();

    return res.status(200).json(drivers);
  },

  store(req, res) {
    const { name, email, board, model } = res.body;
    const [idDriver] = Driver.create({ name, email, board, model });

    if (!idDriver) {
      return res.status(400).send();
    }

    return res.status(200).json();
  },

  async show(req, res) {
    const driver = await Driver.findOne({
      where: {
        id: req.id,
      },
    });

    return res.status(200).json(driver);
  },

  update(req, res) {
    const { id } = req.params;
    const { name, email, board, model } = res.body;
    const [driverUpdate] = Driver.update(
      { name, email, board, model },
      { where: { id } },
    );

    if (!driverUpdate) {
      return res.status(400).send();
    }

    return res.status(200).json();
  },

  async delete(req, res) {
    const { id } = req.params;

    const driverDestroy = await Driver.destroy({
      where: {
        id,
      },
    });

    return res.status(200).json(driverDestroy);
  },
};

module.exports = DriverController;
