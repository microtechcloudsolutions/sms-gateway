const _StockManager = require("../../../../lib/stock");
const _BundleManager = require("../../../../lib/bundle");

const StockManager = new _StockManager();


module.exports.get = function(args,cb){
    args = args || {};
    StockManager.getStock(args)
        .then(stock=>cb(null,stock)).catch(err=>cb(err));
    return;
};

module.exports.add = function(args,cb){
    console.log(args)
    StockManager.addStock(args).then(stock=>cb(null,stock)).catch(err=>cb(err));
    return;
}