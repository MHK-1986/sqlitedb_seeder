'use strict';

const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('business_users', {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING(100),
        field: 'username',
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(255),
        field: 'password',
        allowNull: false
      }
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('business_users');
  },
};
