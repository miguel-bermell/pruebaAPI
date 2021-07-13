require("dotenv").config();
const Unit = require("../models/Unit");

const measurementUnit = [
  {
    description: "Metro",
  },
  {
    description: "Hora",
  },
  {
    description: "Unidad",
  },
];

Unit.bulkCreate(measurementUnit).then(() =>
  console.log("¡Unit of measure created!")
);
