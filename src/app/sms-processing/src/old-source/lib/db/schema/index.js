const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const SMSStockSchema = new Schema({
    owner:{type:Schema.Types.ObjectId},
    tags:[],
    _status:{type:Boolean,default:false},
    purchase_price:{type:Number,required:true},
    bought_at:{type:Date,default:Date.now()},
    expire_at:{type:Date,required:true},
    total_balance:{type:Number,required:true},
    stock_allocated:{
        microtech:{type:Number,required:true},
        partners:{type:Number,required:true},
        clients:{type:Number,required:true}
    },
    allocated_bundles:[{type:Schema.Types.ObjectId, ref:"SMSBundles"}],
    max_per_user:{
        microtech:{type:Number,required:true},
        partners:{type:Number,required:true},
        clients:{type:Number,required:true}
    },
    min_per_user:{
        microtech:{type:Number,min:0,required:true},
        partners:{type:Number,min:0,required:true},
        clients:{type:Number,min:0,required:true}
    }
});

const SMSBundleSchema = new Schema({
    owner:{type:Schema.Types.ObjectId},
    _status:{type:String,enums:["pending","active","rejected"], default:"pending"},
    bundle_owner:{type:String, required:true},
    parent_stock:{type:Schema.Types.ObjectId, ref:"SMSStock"},
    bought_at:{type:Date, default:Date.now()},
    expire_at:{type:Date,default:Date.now()},
    is_active:{type:Boolean, default:false},
    initial_balance:{type:Number,required:true},
    available_balance:{type:Number},
    total_balance:{type:Number}
});


const SMSBundleTemplateSchema = new Schema({
    name:{type:String,required:true},
    bundles:[]
});

const SMSPricingTemplateSchema = new Schema({
    tags:[],
    created_at:{type:Date, default:Date.now()},
    create_by:{type:Schema.Types.ObjectId},
    aproved_by:{type:Schema.Types.ObjectId},
    status:{type:String,enumbs:["pending","approved", "rejected"], default:"pending"},
    templates:[{
        initial_num_of_sms:{type:Number, required:true},
        initial_bundle_price:{type:Number, required:true},
        initial_unit_price:{type:Number},
        proposed_unit_price:{
            a:{
                incremental_type:{type:String,enums:["percent","kwacha"], required:true},
                units:{type:Number,required:true}
            },
            b:{
                incremental_type:{type:String,enums:["percent","kwacha"], required:true},
                units:{type:Number,required:true}
            },
            c:{
                incremental_type:{type:String,enums:["percent","kwacha"], required:true},
                units:{type:Number,required:true}
            }
        },
        revenue_of_proposed:{
            a:{
                incremental_type:{type:String,enums:["percent","kwacha"]},
                units:{type:Number}
            },
            b:{
                incremental_type:{type:String,enums:["percent","kwacha"]},
                units:{type:Number}
            },
            c:{
                incremental_type:{type:String,enums:["percent","kwacha"]},
                units:{type:Number}
            }
        }
    }]
});


const SMSSchema = new Schema({
    sender:{type:Schema.Types.ObjectId},
    message:{type:String},
    to:[],
    consumed_bundle:{type:Schema.Types.ObjectId, ref:"SMSBundles"},
    started_job_at:{type:Date,default:Date.now()},
    ended_job_at:{type:Date}
});


module.exports = {SMSStockSchema,SMSBundleSchema,SMSBundleTemplateSchema,SMSPricingTemplateSchema}