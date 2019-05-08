const {SMSStock} = require("../db/models");

exports.purchase_stock = async function(args){
    return new Promise((resolve,reject)=>{
        SMSStock.create(args).then(_Purchase=>resolve(_Purchase)).catch(err=>reject(err));
    })
};


exports.purchase_history = async function(args){
    return new Promise((resolve,reject)=>{
        SMSStock.find({}).then(stock=>{
            resolve(stock);
        }).catch(err=>reject(err));
    })
}