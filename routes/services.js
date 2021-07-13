const express = require("express");
const router = express.Router();
const serviceService = require("../services/service");

router.get("/", async (_, res, next) => {
  try {
    const services = await serviceService.getAllServices();
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await serviceService.getServiceById(id);
    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const service = await serviceService.createService(req.body);
    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
