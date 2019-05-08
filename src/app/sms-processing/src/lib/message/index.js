const {Message} = require("../db/models");
const create_query = require("./utils/create_query");
const request = require("request");


class MessageModelClass{
    constructor(args){
        this.url = args.url;
        this.key = args.key;
    }

    async sendSingle(args){
            args.key = this.key;
        return new Promise((resolve,reject)=>{
            request.post(this.url+create_query.setUrlParameters(args)).then(response=>{
                resolve(response);
                return;
            }).catch(err=>reject(err));
        });
    }

    async sendBulk(args){
        // console.log("[args] ", args)
        args.key = this.key;
        console.log("[url] ",this.url+create_query.setUrlParameters(args))
        return new Promise((resolve,reject)=>{
            args.sent_to = args.contacts
           Message.create(args).then(message=>{
                request.post(this.url+create_query.setUrlParameters(args),function(error,response,body){
                    if(error){
                            message.status = "failed";
                            message.save(function(err){
                                reject(error)
                            });
                        return;
                    };

                    resolve({response,body})
                }); 
           }).catch(err=>reject(err));
        });
    }

    async getMessages(args){
        console.log(create_query.setUrlParameters(args));
        return new Promise((resolve,reject)=>{
            Message.find(create_query.getMessage(args)).then(messages=>typeof messages === undefined ? reject("No Records Found") : resolve(messages)).catch(err=>reject(err));
        });
    }
}

module.exports = MessageModelClass;