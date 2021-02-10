'use strict';
let stories = require('./seedfiles/story');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Stories', stories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stories', null, {});
  },
};
