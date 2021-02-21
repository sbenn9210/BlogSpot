'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingList extends Model {
    static associate(models) {
      ReadingList.hasMany(models.Story, {
        foreignKey: "id",
      });
     
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
