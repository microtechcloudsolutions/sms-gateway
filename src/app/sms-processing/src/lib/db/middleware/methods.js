const {MessageSchema} = require("./hooks");


/**
 * @method Stock
 */

MessageSchema.methods.getBalance = function(done){
    done()
}

/**
 * @method Bundle
 */

MessageSchema.methods.getBalance = function(done){
    done();
 }

module.exports = {MessageSchema};