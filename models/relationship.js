const dbConnection = require("../config/db");
const Service = require("./Service");
const Unit = require("./Unit");

const loadModels = () => {
  Unit.hasMany(Service, {
    sourceKey: "id",
    foreignKey: {
      allowNull: false,
    },
  });
  Service.belongsTo(Unit);

  dbConnection.sync({}).then(() => {
    console.log("All models loaded 🔥");
  });
};

module.exports = loadModels;
