'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    static associate({ ReadingList }) {
      //this.belongsTo(ReadingList, { foreignKey: 'story_id' });
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
