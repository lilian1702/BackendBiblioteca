'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prestamos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.INTEGER

      },
      libro_id: {
        type: Sequelize.INTEGER
      },
      fecha_prestamo: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fecha_devolucion: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.ENUM('prestado', 'devuelto'),
        defaultValue: 'prestado'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prestamos');
  }
};