const Joi = require("joi");

exports.insertServiceSchema = Joi.object({
  title: Joi.string().required().max(20),
  price: Joi.number().required(),
});
