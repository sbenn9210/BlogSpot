'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingList extends Model {
    static associate({User, Story}) {
      this.belongsTo(User, {foreignKey:'ReadingListId'})
      this.hasMany(Story, {foreignKey:'story_id'})
    }
  };
  ReadingList.init({
    story_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReadingList',
  });
  return ReadingList;
};