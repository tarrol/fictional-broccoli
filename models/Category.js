const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    id: { //defining category table column named 'id' so that we can create expected behaviors like whether or not we're expecting an integer, whether it can be blank, etc
      type: DataTypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: { //above, but for category_name
      type: DataTypes.STRING,
      allowNULL: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
