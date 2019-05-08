const {MessageSchema} = require("../schema");

/**
 * @hooks StockSchema
 */

MessageSchema.pre("save",function(done){
    done();
 })

 MessageSchema.post("save",function(done){
   //  done();
 })

 /**
  * @hooks BundleSchema
  */

 MessageSchema.pre("save",function(done){
    done()
  })

//   BundleSchema.post("save",function(done){
//     done()
// })


module.exports = {MessageSchema}