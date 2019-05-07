const {BundleSchema,StockSchema} = require("./hooks");


/**
 * @method Stock
 */

StockSchema.methods.getBalance = function(done){
    done()
}

/**
 * @method Bundle
 */

 BundleSchema.methods.getBalance = function(done){
    done();
 }

module.exports = {StockSchema,BundleSchema};