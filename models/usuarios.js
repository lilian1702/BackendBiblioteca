'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.hasMany(models.Prestamos,{foreignkey:'usuario_id', as:'prestamos' });
    }
  }
  Usuarios.init({
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    telefono:{  
      type: DataTypes.STRING(20)}
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};