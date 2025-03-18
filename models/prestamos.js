'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prestamos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prestamos.init({
    usuario_id: {
      type: DataTypes.INTEGER

    },
    libro_id: {
      type: DataTypes.INTEGER
    },
    ffecha_prestamo: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_devolucion: {
      type: DataTypes.DATE
    },
    estado: {
      type: DataTypes.ENUM('prestado', 'devuelto'),
      defaultValue: 'prestado'
    }
  }, {
    sequelize,
    modelName: 'Prestamos',
  });
  return Prestamos;
};