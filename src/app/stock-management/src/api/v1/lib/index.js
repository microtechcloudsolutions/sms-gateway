const StockManager = require("./stock");
const BundleManager = require("./bundle");

module.exports = {
    _get,
    _post,
    _delete,
    _put
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function _get(req,res,next){

    let {type,id,limit,sort} = req.query;

    if(typeof type === "undefined"){
         next(new Error("Please provide a query type"))
       return 
    }

    switch(type){
        case "stock":
            StockManager.get(req.query,(err,stock)=>{
                if(err){
                        next(err);
                    return
                }

                res.json({success:true,stock})
            })
            break;
        case "bundle":
            BundleManager.get(req.query,(err,bundle)=>{
                if(err){
                        next(err);
                    return
                }

                res.json({success:true,bundle})
            });
            break;
        default:
            next("Not A Valid Type")
    }
}

function _post(req,res,next){

    let {type,id,limit,sort} = req.query;
    // console.log(req.body)
    req.body.original_balance = Number(req.body.original_balance);
    if(typeof type === "undefined"){
        next(new Error("Please provide a query type"))
      return 
   }

   switch(type){
       case "stock":
           StockManager.add(req.body,(err,stock)=>{
               if(err){
                       next(err);
                   return
               }

               res.json({success:true,stock})
           })
           break;
       case "bundle":
            BundleManager.add(req.body,(err,stock)=>{
                if(err){
                        next(err);
                    return
                }

                res.json({success:true,stock})
            })
           break;
       default:
            next("No Valid Type")
   }
}

function _delete(){

}

function _put(){

}