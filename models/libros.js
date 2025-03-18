'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Libros.init({
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    anio_publicacion: {
      type: DataTypes.INTEGER
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Libros',
  });
  return Libros;
};