module.exports = (sequelize, dataTypes) => {
  const Driver = sequelize.define(
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

  Driver.associate = (models) => {
    Driver.hasMany(models.Running, { foreignKey: 'driver_id' });
  };

  return Driver;
};
