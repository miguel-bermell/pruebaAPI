const express = require("express");
const router = express.Router();
const unitService = require("../services/unit");

router.get("/", async (_, res, next) => {
  try {
    const units = await unitService.getAll();
    res.status(200).json(units);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const unit = await unitService.getById(id);
    res.status(200).json(unit);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const unit = await unitService.create(req.body);
    res.status(200).json(unit);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
