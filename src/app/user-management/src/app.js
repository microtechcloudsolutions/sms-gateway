require("./lib/db/conn");

const express = require("express");
const logger = require("morgan");
const app = express();

const config = require("./config");

const api_v1 = require("./api");
const home_route = require("./api/home");

app.use(logger("dev"));


app.use(express.json());
app.use("/",home_route);
app.use("/api/v1",api_v1);




app.use(config.passport.configure_passport_middleware())
config.passport.configure_local_middleware({});
config.passport.configure_jwt_middleware({});

module.exports = app;