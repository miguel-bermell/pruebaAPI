require("dotenv").config();
const Service = require("../models/Service");

const services = [
  {
    title: "Arreglar fuga de agua",
    price: 80,
    unitId: 2,
  },
  {
    title: "Arreglar aire",
    price: 87.9,
    unitId: 3,
  },
  {
    title: "Cambiar grifo",
    price: 50.1,
    unitId: 2,
  },
  {
    title: "Instalación electrica",
    price: 520,
    unitId: 2,
  },
  {
    title: "Reforma cocina",
    price: 1200,
    unitId: 3,
  },
  {
    title: "Azulejos baño",
    price: 200,
    unitId: 1,
  },
];

Unit.bulkCreate(services).then(() => console.log("¡Services loaded!"));
