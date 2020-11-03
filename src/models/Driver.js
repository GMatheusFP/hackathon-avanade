const Drivers = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'Driver',
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: dataTypes.STRING,
      email: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      board: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'driver',
    },
  );

  return model;
};

module.exports = Driver;
