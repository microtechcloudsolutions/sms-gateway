require("./lib/db/conn");
const express = require("express");
const morgan = require("morgan");

const APIV1Router = require("./api/v1");

const app = express();

/**
 * REGISTER API Routes
 */

 app.use("/api/v1",APIV1Router);


module.exports = app;