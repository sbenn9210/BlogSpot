'use strict';
const { Model } = require('sequelize');
const {v4: uuid} = require("uuid")
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    static associate(models) {
      Story.belongsTo(models.ReadingList, {
        foreignKey: "id", targetKey:'story_id'
      });
    }
  }
  Story.init(
    {
      author: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      published: DataTypes.BOOLEAN,
      body: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Story',
    }
  );
  Story.beforeCreate((story, _) => {
    return (story.id = uuid());
  });
  return Story;
};
