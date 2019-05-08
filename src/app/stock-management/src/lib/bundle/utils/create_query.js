module.exports = function create_query(args){
    let q;

    q = {};

    let keys = Object.keys(args);

    if(keys.length){
        keys.map((key,index)=>{
            if(key === "id" && args["id"] !== undefined){
                q["_id"] = args.id;
            }
            if(key === "status" && args["status"] !== undefined){
                q["status"] = args.status;
            };
    
            if(key === "price_eq_to" && args["price_eq_to"] !== undefined){
                q["price"] = {$eq:Number(args.price_eq_than)}
            }
    
            if(key === "price_gt_than" && args["price_gt_than"] !== undefined){
                q["price"] = {$gt:Number(args.price_gt_than)}
            }
    
            if(key === "price_lt_than" && args["price_lt_than"] !== undefined){
                q["price"] = {$lt:Number(args.price_lt_than)}
            }
    
            if(key === "bought_by" && args["bought_by"] !== undefined){
                q["bought_by"] = args.bought_by;
            }
    
            if(key === "original_balance_gt_than" && args["original_balance_gt_than"] !== undefined){
                q["original_balance"] = {$gt:Number(args.original_balance_gt_than)}
            }
    
            if(key === "original_balance_lt_than" && args["original_balance_lt_than"] !== undefined){
                q["original_balance"] = {$lt:Number(args.original_balance_lt_than)}
            }
    
            if(key === "original_balance_eq_than" && args["original_balance_eq_than"] !== undefined){
                q["original_balance"] = {$eq:Number(args.original_balance_eq_than)}
            }
        });

        return q
    }
   

    return q

    
}