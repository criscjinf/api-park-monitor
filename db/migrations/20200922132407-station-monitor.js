'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('station_monitor', {
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

      station_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      type_passage: {
        type: Sequelize.ENUM(['INPUT', 'OUTPUT']),
        allowNull: false
      },

      passages: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      canceled: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      min_passage_time: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      max_passage_time: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      avg_passage_time: {
        type: Sequelize.DECIMAL(4),
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
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('station-monitor');
  }
};
