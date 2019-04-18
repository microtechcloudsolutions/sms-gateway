require("./lib/db/conn");

const express = require("express");
const app = express();

const config = require("./config");

const api_v1 = require("./api");

config.passport.configure_local_middleware({});
config.passport.configure_jwt_middleware({});

app.use("/api/v1",api_v1);

module.exports = app;