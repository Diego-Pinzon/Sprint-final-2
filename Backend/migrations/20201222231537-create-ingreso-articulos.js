'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('IngresoArticulos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingresoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Ingresos',
          key: 'id'
        }
      }, 
      articuloId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Articulos',
          key: 'id'
        }
      },
      articulo: {
        type: Sequelize.STRING
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      descuento: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('IngresoArticulos');
  }
};