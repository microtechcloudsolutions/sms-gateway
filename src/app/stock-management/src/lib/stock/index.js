const {Stock,Bundle} = require("../db/models");
const create_query = require("./utils/create_query");
/**
 * @class StockManager
 */

class StockManager{

    constructor(args){
        this.limit = function(){};
        this.sort = function(){}
    }

    async addStock(args){
        return new Promise((resolve,reject)=>{
            if(Array.isArray(args.stock) === true){
                Stock.insertMany(args.stock).then(stock=>!stock ? reject("Operation Not Successfull") : resolve(stock)).catch(err=>reject(err));
                return;
            }
        
            Stock.create(args || {}).then(stock=>!stock ? reject("Operation Not Successfull") : resolve(stock)).catch(err=>reject(err));
            return;
        });
    }

    updateStock(){

    }
    /**
     * 
     * @param {*} args 
     * @returns Promise
     * @description full object {id:ObjectId,limit:Number}
     */
    async getStock(args){ 
        args = args || {};
        return new Promise((resolve,reject)=>{
                // console.log("query",create_query(args))
            Stock.find(create_query(args)).limit(args.limit || 10).sort(args.sort)
                .then(stock=>!stock ? reject("No Records") : resolve(stock)).catch(err=>reject(err))
                return;
        })
    }

    changeState(){

    }
}

module.exports = StockManager;