require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const unitsRouter = require("./routes/units");
const servicesRouter = require("./routes/services");

const loadModels = require("./models/relationship");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
loadModels();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/units", unitsRouter);
app.use("/services", servicesRouter);

app.use(errorHandler);
module.exports = app;
