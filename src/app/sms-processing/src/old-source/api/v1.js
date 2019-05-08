const express = require("express");
const router = express.Router();
const {stock,bundle} = require("../lib/purchase");
const {stock_balance} = require("../lib/balance");
const {pricing} = require("../lib/pricing");
const {single} = require("../lib/send");

router.get("/balance",(req,res,next)=>{
    stock_balance.SMSStock({status:true}).then(balance=>res.json(balance)).catch(err=>res.json(err));
});

router.get("/create-senderid",(req,res,next)=>res.json({success:true}));

router.get("/send-sms",(req,res,next)=>res.json({success:true}));

router.get("/purchase",(req,res,next)=>{
    stock.purchase_history({}).then(history=>res.json(history)).catch(err=>res.json(err));
});

router.post("/purchase",(req,res,next)=>{
    // let _stock = req.body;
    // _stock.expire_at = new Date(Date.now(+40000))

    switch(req.body.purchase_type){
        case "stock":
            stock.purchase_stock({
                purchase_price:req.body.purchase_price,
                bought_at:new Date(),
                expire_at:new Date(Date.now()+40000),
                total_balance:req.body.total_balance,
                stock_allocated:{
                    microtech:req.body.stock_allocated.microtech,
                    partners:req.body.stock_allocated.partners,
                    clients:req.body.stock_allocated.clients
                },
                allocated_bundles:[],
                max_per_user:{
                    microtech:req.body.max_per_user.microtech,
                    partners:req.body.max_per_user.partners,
                    clients:req.body.max_per_user.clients
                },
                min_per_user:{
                    microtech:req.body.min_per_user.microtech,
                    partners:req.body.min_per_user.partners,
                    clients:req.body.min_per_user.clients
                }
            }).then(purchase=>res.json(purchase)).catch(err=>res.json(err));
            break;
        case "bundle":
            bundle.purchase_bundle(req.body).then(bundle=>res.json(bundle)).catch(err=>res.json(err));
            break;
        default:
            res.json({success:false,message:"Invalid request"})
    }

    // console.log(_stock)
   
})


router.get("/pricing-template",(req,res,next)=>{
    pricing.get_pricing_template({}).then(template=>res.json(template)).catch(err=>res.json(err))
});

router.post("/pricing-template",(req,res,next)=>{
   pricing.create_pricing_template(req.body).then(template=>res.json(template)).catch(err=>res.json(err));
})


router.post("/send",(req,res,next)=>{
    single.send_single(req.body).then(_response=>res.json(_response)).catch(err=>res.json(err))
})

module.exports = router;