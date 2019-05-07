const express = require("express");
const router = express.Router();

const controller = require("./lib");

router.get("/", controller._get).post("/add",controller._post).delete("/delete",controller._delete) //v1

module.exports = router;