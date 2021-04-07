'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('park_monitor', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      date: {
        type: Sequelize.DATE,
        allowNull: false
      },

      pms_park_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      inputs: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      outputs: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      canceled: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      access: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      min_input_time: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      max_input_time: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      avg_input_time: {
        type: Sequelize.DECIMAL(12,4),
        defaultValue: 0
      },

      min_output_time: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      max_output_time: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      avg_output_time: {
        type: Sequelize.DECIMAL(12,4),
        defaultValue: 0
      },

      min_amount_due: {
        type: Sequelize.DECIMAL(12,4),
        defaultValue: 0
      },

      max_amount_due: {
        type: Sequelize.DECIMAL(12,4),
        defaultValue: 0
      },

      avg_amount_due: {
        type: Sequelize.DECIMAL(12,4),
        defaultValue: 0
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('park-monitor');
  }
};
