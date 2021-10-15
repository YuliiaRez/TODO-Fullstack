"use strict";
const { Model } = require("sequelize");
// const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
    }
  }
  Task.init(
    {
      toDoTask: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,39}$/,
        },
      },
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
