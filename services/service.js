const serviceRepository = require("../repositories/service");
const { ERRORS } = require("../utils/constants");
const HttpError = require("../utils/httpError");

exports.getAllServices = async () => {
  return await serviceRepository.findAllServices();
};

exports.getServiceById = async (id) => {
  if (!id) {
    throw new HttpError(400, ERRORS.NONE_ID);
  }
  const service = await serviceRepository.findServiceById(id);

  if (!service) throw new HttpError(400, ERRORS.SERVICE_NOT_FOUND + id);

  return service.toJSON();
};

exports.createService = async (service) => {
  if (!service) throw new HttpError(400, ERRORS.NO_SERVICE);

  return await serviceRepository.insertService(service);
};
