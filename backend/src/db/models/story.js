'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    static associate({ ReadingList }) {
     this.hasOne(ReadingList, { foreignKey: 'story_id'});
     //hasOne will allow duplicates
     //hasMany will NOT allow duplicates
    }
  }
  Story.init(
    {
      author: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      body: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Story',
    }
  );
  return Story;
};
