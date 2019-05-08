require("./lib/db/conn");

const express = require("express");
const logger = require("morgan");
const app = express();

const api_v1 = require("./api/v1");

app.use(logger("dev"));


app.use(express.json());

app.use("/api/v1",api_v1);

module.exports = app;