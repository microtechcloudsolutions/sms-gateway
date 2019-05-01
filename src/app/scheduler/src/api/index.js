const express = require("express");
const Router = express.Router();
const jobDefinition = require("../lib/job");
const sms_job = require("../utils/sms");

const _job = new jobDefinition();

Router.post("/assign-job",(req,res,next)=>{

        if(req.body.job_type.length){

            req.body.job_type.map((job_type,index)=>{
                
                switch(job_type){
                    case "bulk_sms":

                        send_bulk_sms(req.body,(err,results)=>{
                            if(err){
                                next(err);
                                return;
                            }
                            res.json({success:true,results});
                        });

                        break;
                    default:
                        next();
                }
            });
        }

})


function send_bulk_sms(args,cb){
    /**
     * SET JONB HERE
     */

     switch(args.schedule_type){
        case "every_day_at":
            _job.every_day_at(args,sms_job,cb);
            break;
        case "once_at":
            _job.once(args,sms_job,cb);
            break;
        default:
            cb(new Error("No Schedule Type Provided"))
     }  
   
}

module.exports = Router;
