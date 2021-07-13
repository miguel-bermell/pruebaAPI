const express = require("express");
const router = express.Router();
const pkg = require("../package.json");

// health point
router.get("/", function (req, res, next) {
  res.send({ name: pkg.name, version: pkg.version });
});

module.exports = router;
