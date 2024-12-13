// dominio/entidades/Task.js
const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Usuario extends Model {}

  Usuario.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      correo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: false,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 100], 
        },
      },
      amigos: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      mensaje: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuarios",
      createdAt: false,
      updatedAt: false,
    }
  );

  return Usuario;
};