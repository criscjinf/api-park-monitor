'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex(
      'station_monitor',
      ['date', 'station_id', 'type_passage'],
      {
        indexName: 'un_station_mon_date_station_type',
        indicesType: 'UNIQUE',
        unique: true
      }
    );
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('station_monitor', ['date', 'station_id', 'type_passage']);
  }
};
