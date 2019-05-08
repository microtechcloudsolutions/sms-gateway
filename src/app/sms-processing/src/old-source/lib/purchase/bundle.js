const {SMSBundle} = require("../db/models")

exports.purchase_bundle = function(args){
    return new Promise((resolve,reject)=>{
        SMSBundle.create(args || {}).then(bundle=>!bundle ? reject(new Error("Could not purchase bundle")) : resolve(bundle)).catch(err=>reject(err));
    })
};

exports.purchase_bundle_history = function(){
    return new Promise((resolve,reject)=>{
        SMSBundle.find(args || {}).then(bundles=>!bundles ? reject(new Error("No bundles Found")) : resolve(bundles)).catch(err=>reject(err));
    })
}