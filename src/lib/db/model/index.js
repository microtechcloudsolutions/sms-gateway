const mongoose = require("mongoose");
const {PackageSchema,PurchaseSchema,SMSSchema,ContactsSchema}  = require("../methods");


const Package = mongoose.model("Packcages",PackageSchema);

const Purchase = mongoose.model("Purchases",PurchaseSchema);

const SMS = mongoose.model("SMSs",SMSSchema);

const Contact = mongoose.model("Contacts", ContactsSchema);

module.exports = {Package,Purchase,SMS,Contact};