const unitRepository = require("../repositories/unit");
const { ERRORS } = require("../utils/constants");
const HttpError = require("../utils/httpError");

exports.getAll = async () => {
  return await unitRepository.findAll();
};

exports.getById = async (id) => {
  if (!id) {
    throw new HttpError(400, ERRORS.NONE_ID);
  }
  const unitDetails = await unitRepository.findById(id);
  if (!unitDetails) throw new HttpError(400, ERRORS.NO_UNIT_EXIST + id);
  return unitDetails.toJSON();
};

exports.create = async (unit) => {
  if (!unit) throw new HttpError(400, ERRORS.NO_UNIT);
  return await unitRepository.insert(unit);
};
