const serviceRepository = require("../repositories/service");
const { ERRORS } = require("../utils/constants");
const HttpError = require("../utils/httpError");
const Service = require("../models/Service");
const { insertServiceSchema } = require("../validations/serviceValidation");

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

exports.createService = async ({ services }) => {
  if (!services) throw new HttpError(400, ERRORS.NO_SERVICE);

  const validationData = insertServiceSchema.validate(services);

  Service.bulkCreate(validationData.value, { returning: true }).then(
    (result) => {
      console.log(result);
    }
  );
};
