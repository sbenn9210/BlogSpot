'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ReadingList}) {
      this.belongsTo(ReadingList, { foreignKey: 'story_id' });
    }
  }
  Story.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Story',
    }
  );
  return Story;
};
