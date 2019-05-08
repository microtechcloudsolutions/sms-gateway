const {SMSPricingTemplate} = require("../db/models");

exports.get_pricing_template = function(args){
    return new Promise((resolve,reject)=>{
            SMSPricingTemplate.find(args || {}).then(_temp=>resolve(_temp)).catch(err=>reject(err))

    });
}


exports.create_pricing_template = function(args){
    return new Promise((resolve,reject)=>{
            SMSPricingTemplate.create(args).then(_temp=>{
                console.log(_temp);
                !_temp ? reject({message:"No Template Created",_temp}) : resolve(_temp)
            } ).catch(err=>{
                console.log(err);
                reject(err)
            });
    });
}