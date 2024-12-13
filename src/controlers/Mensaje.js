const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Mensaje extends Model {}

  Mensaje.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      conversacionId: {
        type: DataTypes.UUID, 
        allowNull: false,
        references: {
          model: "conversaciones",
          key: "id", 
        },
      },
    },
    {
      sequelize,
      modelName: "Mensaje",
      tableName: "mensajes",
      timestamps: true, 
    }
  );

  return Mensaje;
};
