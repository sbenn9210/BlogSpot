'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   static associate({ReadingList}) {
      this.hasOne(ReadingList, {foreignKey:'user_id'})
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};