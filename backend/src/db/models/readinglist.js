'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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