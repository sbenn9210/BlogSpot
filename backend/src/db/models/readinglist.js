'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingList extends Model {
    static associate({ User, Story }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
     
    }
  }
  ReadingList.init(
    {
      user_id: DataTypes.INTEGER,
      story_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ReadingList',
    }
  );
  return ReadingList;
};
