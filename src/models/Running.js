/* eslint-disable no-unused-expressions */
module.exports = (sequelize, dataTypes) => {
  const Running = sequelize.define(
    'Running',
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      status: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      source: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      destiny: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'running',
    },
  );

  Running.associate = (models) => {
    Running.belongsTo(models.Client, { foreignKey: 'id' });
    Running.belongsTo(models.Driver, { foreignKey: 'id' });
  };

  return Running;
};
