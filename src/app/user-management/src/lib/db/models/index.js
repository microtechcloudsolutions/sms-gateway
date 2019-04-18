const mongoose = require("mongoose");
const {UserSchema}  = require("../methods");

const User = mongoose.model("Users",UserSchema);


module.exports = {User}