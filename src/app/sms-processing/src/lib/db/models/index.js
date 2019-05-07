const {MessageSchema} = require("../middleware");

const mongoose = require("mongoose");

const Message = mongoose.model("Messages",MessageSchema);

module.exports = {Message};