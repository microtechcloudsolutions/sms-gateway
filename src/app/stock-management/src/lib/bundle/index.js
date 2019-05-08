const {Stock,Bundle} = require("../db/models");
const create_query = require("./utils/create_query");

/**
 * @class BundleManager
 */

class BundleManager{

    constructor(){

    }

    async addBundle(args){
        return new Promise((resolve,reject)=>{
            if(Array.isArray(args.bundle) === true){
                Bundle.insertMany(args.bundle).then(bundle=>!bundle ? reject("Operation Not Successfull") : resolve(bundle)).catch(err=>reject(err));
                return;
            }
        
            Bundle.create(args || {}).then(bundle=>!bundle ? reject("Operation Not Successfull") : resolve(bundle)).catch(err=>reject(err));
            return;
        });
    }

    updateBundle(){

    }

   async getBundle(args){
        args = args || {};
        return new Promise((resolve,reject)=>{
                console.log("query",create_query(args))
            Bundle.find(create_query(args)).limit(args.limit || 10).sort(args.sort)
                .then(bundle=>!bundle ? reject("No Records") : resolve(bundle)).catch(err=>reject(err))
                return;
        })
    }

    changeBundle(){

    }
}


module.exports = BundleManager;