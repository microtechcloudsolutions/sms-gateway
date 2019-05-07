const MessagesModel = require("../../../../lib/message");

let _secret = process.env.API_SECRET  || "248RG3YGRF3RFG73FG3G37FG37FG"

const Message = new MessagesModel({url:`http://bulksms.zamatel.co.zm/api/sms/send/batch?` ,key:_secret});

module.exports.retrieve = function(args,cb){
    Message.getMessages(args).then(messages=>cb(null,messages)).catch(err=>cb(err))
};


module.exports.sendMessage = function(args,cb){
    Message.sendBulk(args).then(delivery=>cb(null,delivery)).catch(err=>cb(err));
};


module.exports.deleteMessage = function(args,cb){

}