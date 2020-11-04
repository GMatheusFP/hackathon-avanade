module.exports = (sequelize, dataTypes) => {
  const Client = sequelize.define(
    'Client',
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
    },
    {
      tableName: 'client',
    },
  );

  Client.associate = (models) => {
    Client.hasMany(models.Running, { foreignKey: 'client_id' });
  };

  return Client;
};
