const dbConnection = require("../config/db");
const Service = require("../models/Service");
const Unit = require("../models/Unit");

exports.findAllServices = async () => {
  return await Service.findAll(
    {
      attributes: ["id", "title", "price"],
      include: {
        model: Unit,
        attributes: [["description", "unitDesc"]],
      },
    },
    {
      raw: true,
    }
  );
};

exports.findServiceById = async (id) => {
  return await Service.findByPk(id);
};

exports.insertService = async (service) => {
  return await Service.create(service);
};
