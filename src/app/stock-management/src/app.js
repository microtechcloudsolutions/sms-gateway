require("./lib/db/conn");
const express = require('express');
const API_V1 = require("./api/v1");
const app = express()

app.use(express.json());
app.use("/api/v1",API_V1);

module.exports = app;