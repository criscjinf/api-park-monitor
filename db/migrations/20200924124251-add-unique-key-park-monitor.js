'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex(
      'park_monitor',
      ['date','pms_park_id'],
      {
        indexName: 'un_park_mon_date_pms_park',
        indicesType: 'UNIQUE',
        unique: true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('park_monitor', ['date', 'pms_park_id']);
  }
};
