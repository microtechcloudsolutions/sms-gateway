module.exports.getMessage = function create_query(args){
    let q;

    q = {};

    let keys = Object.keys(args);

    if(keys.length){
        keys.map((key,index)=>{
            if(key === "id" && args["id"] !== undefined){
                q["_id"] = args.id;
            }
            if(key === "sent_by" && args["sent_by"] !== undefined){
                q["sent_by"] = args.sent_by;
            };
    
            if(key === "message_type" && args["message_type"] !== undefined){
                q["message_type"] = args.message_type
            }
    
            if(key === "message" && args["message"] !== undefined){
                q["message"] = args.message
            }
    
            if(key === "sent_to" && args["sent_to"] !== undefined){
                q["sent_to"] = args.sent_to
            }
        });

        return q
    }
   

    return q

    
}



module.exports.setUrlParameters = function(args){
    // console.log(args);
    return `message=${args.message}&key=${args.key}&contacts=${args.contacts}`
}