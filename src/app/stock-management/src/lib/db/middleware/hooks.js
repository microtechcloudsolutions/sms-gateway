const {StockSchema,BundleSchema} = require("../schema");

/**
 * @hooks StockSchema
 */

 StockSchema.pre("save",function(done){
    done();
 })

 StockSchema.post("save",function(done){
   //  done();
 })

 /**
  * @hooks BundleSchema
  */

  BundleSchema.pre("save",function(done){
    done()
  })

//   BundleSchema.post("save",function(done){
//     done()
// })


module.exports = {StockSchema,BundleSchema}