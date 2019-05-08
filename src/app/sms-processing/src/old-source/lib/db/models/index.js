const mongoose = require("mongoose");
const {SMSStockSchema,SMSBundleTemplateSchema}  = require("../schema");
const {SMSPricingTemplateSchema} = require("../middleware")
const {SMSBundleSchema} = require("../middleware/methods");
const SMSStock = mongoose.model("SMSStock",SMSStockSchema);
const SMSBundle = mongoose.model("SMSBundle",SMSBundleSchema);
const SMSBundleTemplate = mongoose.model("SMSBundleTemplate",SMSBundleTemplateSchema);

const SMSPricingTemplate = mongoose.model("SMSPricingTemplate", SMSPricingTemplateSchema);

module.exports = {SMSStock,SMSBundle,SMSBundleTemplate, SMSPricingTemplate};