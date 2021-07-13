const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Unit = dbConnection.define("unit", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.TINYINT,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Unit;
