const _StockManager = require("../../../../lib/stock");
const _BundleManager = require("../../../../lib/bundle");

// const StockManager = new _StockManager();

const BundleManager = new _BundleManager();


module.exports.get = function(args,cb){
    // console.log("[Get] bundle") 
    args = args || {};
    BundleManager.getBundle(args).then(bundle=>cb(null,bundle)).catch(err=>cb(err));
    return;
};

module.exports.add = function(args,cb){
    // console.log("[Add] Bundle");
    BundleManager.addBundle(args).then(bundle=>cb(null,bundle)).catch(err=>cb(err));
    return;
}