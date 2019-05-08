const {StockSchema,BundleSchema} = require("../middleware");

const mongoose = require("mongoose");

const Bundle = mongoose.model("Bundles", BundleSchema);

const Stock = mongoose.model("Stock", StockSchema);

module.exports = {Bundle,Stock};