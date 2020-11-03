const Client = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'Client',
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: dataTypes.STRING,
      email: {
        type: dataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'client'
    }
  );

  return model;
};

module.exports = Client;
