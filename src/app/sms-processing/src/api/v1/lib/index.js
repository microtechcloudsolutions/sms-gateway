const Send = require("./send");
const History = require("./history");

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
    Send.retrieve(req.query,(err,messages)=>{
        if(err){
            next(err);
            return;
        }
        res.json({success:true,messages});
        return;
    })
}

function _post(req,res,next){
    Send.sendMessage(req.body,(err,delivery)=>{
        if(err){
            next(err);
            return;
        }

        res.json({success:true,delivery})
    })
}

function _delete(){

}

function _put(){

}