const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Conversacion extends Model {}

  Conversacion.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true,
      },
      usuario1Id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        }},
        usuario2Id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: "usuarios",
              key: "id",
            }},
      conversacionId: {
        type: DataTypes.UUID, 
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Conversacion",
      tableName: "mensajes",
      timestamps: true, 
    }
  );

  return Conversacion;
};
