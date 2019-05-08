const express  = require("express");
const router = express.Router();
const controller = require("./lib");

router.get("/", controller._get).post("/send", controller._post).put("/update",controller._put).delete("/remove", controller._delete);

module.exports = router;