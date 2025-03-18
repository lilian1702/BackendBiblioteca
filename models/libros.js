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
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    anio_publicacion: DataTypes.INTEGER,
    stock: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Libros',
  });
  return Libros;
};