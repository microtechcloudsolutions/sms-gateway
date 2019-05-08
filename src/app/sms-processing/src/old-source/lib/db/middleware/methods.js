const {SMSBundleSchema} = require("../schema");


SMSBundleSchema.methods.getBalance = function(id){
    let self = this;
    // console.log(this);
    return new Promise((resolve,reject)=>{
            // console.log("get balance",self);
            resolve(self);
    })  
};

SMSBundleSchema.methods.update_balance = function(){

};

SMSBundleSchema.methods.find_available_balance = function(){

};


module.exports = {SMSBundleSchema};