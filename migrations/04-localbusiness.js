'use strict';

const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('localbusiness', {
      id: {
        type: DataTypes.INTEGER,
        field: 'ID',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: true,
        default: null
      },
      type: {
        type: DataTypes.STRING(100),
        field: 'type',
        allowNull: true,
        default: null
      },
      country: {
        type: DataTypes.STRING(100),
        field: 'country',
        allowNull: true,
        default: null
      },
      region: {
        type: DataTypes.STRING(100),
        field: 'region',
        allowNull: true,
        default: null
      },
      lon: {
        type: DataTypes.FLOAT,
        field: 'lon',
        allowNull: true,
        default: null
      },
      lat: {
        type: DataTypes.FLOAT,
        field: 'lat',
        allowNull: true,
        default: null
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
        default: null
        
      },
      recommendations: {
        type: DataTypes.INTEGER,
        field: 'recommendations',
        allowNull: true,
        default: 0
      }
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('localbusiness');
  },
};
