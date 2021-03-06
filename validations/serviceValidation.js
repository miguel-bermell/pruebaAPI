const Joi = require("joi");

exports.insertServiceSchema = Joi.array()
  .items(
    Joi.object({
      title: Joi.string().required().max(20),
      price: Joi.number().required(),
      unitId: Joi.number(),
    })
  )
  .min(1)
  .required();
