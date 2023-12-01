'use strict';
const DataTypes = require('sequelize').DataTypes
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('business_reviews', {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      business_id: {
        type: DataTypes.INTEGER,
        field: 'business_id',
        allowNull: true,
        default: null
      },
      user_id: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: true,
        default: null
      },
      review: {
        type: DataTypes.TEXT,
        field: 'review',
        allowNull: true,
        default: null,
        
      }
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('business_reviews');
  },
};
