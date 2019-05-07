const {SMSBundle} = require("../db/models");

exports.send_single = function(args){ 
        self = this;
        self.max_single_msg_char = 70;
        self.message_char_consumed = function(msg,freq){
            let _main = String(msg.length/self.max_single_msg_char).split(".")[0];

            return (Number(_main) + 1)*(!Number(freq) ? 1 : Number(freq));
        }
    return new Promise((resolve,reject)=>{

        SMSBundle.find({bundle_owner:args.user_id,is_active:true}).then(bundles=>{
                if(bundles.length <= 0){
                    throw new Error("No Bundle Records Found")
                };
            
                send_messages(args, bundles,self.max_single_msg_char);

        }).catch(err=>{
            reject(err);
            return;
        })
           
    })
    
}
/**
 * 
 * @param {*} msg message instance
 * @param {*} max_single_msg_char maximum characters for a single message instance
 * @param {*} freq 
 * @returns number
 */
function max_consumable_msgs(message,max_single_msg_char,freq){

    return Number(String(message.length/max_single_msg_char).split(".")[0]) + 1;
}

/**
 * 
 * @param {*} payload user payload to process 
 * @param {*} bundles active bundles
 * @param {*} max_single_msg_char Maximum Characters for a single message instance 
 */

function send_messages(payload, bundles, max_single_msg_char){
    let total_contacts = payload.length;
    let message = payload.message;
    
    let total_bundles_to_consume_from = bundles.length;
    let current_bundle_being_consumed;

    let state_of_bundle;

    let state_of_sms;

        //state of the sms being processed

    state_of_bundle = {
        index:0,
        balance:bundles[0].available_balance
    } || {};
    //todo add get method to prototype
    state_of_sms = {
        contact:0,
        max_units:max_consumable_msgs(payload.message,max_single_msg_char), //maximum sms units for a single message instance
        current_unit:0, //current message unit
    } || {}

        compute_next_sms_send()


};

function compute_next_bundle_to_consume(){

}

function compute_next_sms_send(payload,state_of_bundle,state_of_sms,bundles){
    let errors;
    errors = {};
    return new Promise((resolve,reject)=>{

        if((state_of_bundle.balance > 0 && (total_bundles_to_consume_from -1) >= state_of_bundle.index) && (state_of_sms.max_units >= state_of_sms.current_unit) ){
         
            send_single_message(payload.message[state_of_sms.current_unit],payload.contacts[state_of_sms.contact]).then(_delivery=>{

                        if(!_delivery.success){
                            errors[payload.contacts[state_of_sms.contact]] = _delivery;
                            return;
                        }
                        state_of_sms.max_units = state_of_sms.current_unit + 1;
                      
                        compute_next_sms_send(payload,state_of_bundle,state_of_sms,bundles)

            }).catch(err=>{
                reject()
                return;
            })

            return;
        };


    })
    
}

function send_single_message(msg,contact){
    return new Promise((resolve,reject)=>{
        resolve({message:"successful"});
    })
}