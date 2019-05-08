const {SMSPricingTemplateSchema}  = require("../schema");
const {sms_pricing_temp,post_sms_pricing_temp} = require("./hooks");

SMSPricingTemplateSchema.pre("save",sms_pricing_temp);
SMSPricingTemplateSchema.post("save",post_sms_pricing_temp);

module.exports = {SMSPricingTemplateSchema};