const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Service = dbConnection.define("service", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
  },
  unitId: {
    type: DataTypes.TINYINT(),
    defaultValue: 2,
  },
});

module.exports = Service;
