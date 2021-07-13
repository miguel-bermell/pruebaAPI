const Unit = require("../models/Unit");

exports.findAll = async () => {
  return await Unit.findAll({ order: [["createdAt", "ASC"]] });
};

exports.findById = async (id) => {
  return await Unit.findByPk(id);
};

exports.insert = async (unitDetails) => {
  return await Unit.create(unitDetails);
};
