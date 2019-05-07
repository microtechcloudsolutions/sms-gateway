const {SMSStock} = require("../db/models");


exports.SMSStock = function(args){
    return new Promise((resolve,reject)=>{
        SMSStock.find({_status:args.status},{}).then(stock=>resolve(stock)).catch(err=>reject(err));
    });
}