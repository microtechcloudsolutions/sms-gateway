const agenda = require("../../config/agenda");
const Moment = require("moment");

class jobDefinition{

    constructor(args){
        
    }
  
    once(args,fn,cb){
  

         if(!(Object.keys(arguments).length === 3)){
            throw new Error("method expects two arguments");
         }
         
        if((typeof args !== "object") || (typeof cb !== "function")){
                throw new Error("provide valid args types");
        }

        switch(args.run_type){

            case "at":
                    _run_at(args,fn,cb);
                return
                break;
            case "between":
                return {success:true, message:"run job once between 12:30 & 13:30"}
                break;
            default:
                return {success:true, message:"run job once failed. specify when to run job"}
        }   
       
    }

    every_after(){
        return {success:true, message:"run job every after some time"}
    }

    /**
     * 
     * @param {*} args 
     * @param {*} fn function to run functio(job,done){/* task /* done()}
     * @param {*} cb callback function
     */
    every_day_at(args,fn,cb){
            _run_every_day(args,fn,(err,_jobDef)=>{
                cb(err,_jobDef);
            });
    }
}



function _normalize_incremental_input_at(args, moment){
    switch(args.type){
        case "years":
            
            if(Number(args.years) > 0){
                // console.log("Years Added ===================*** ", args.years)
                return Number(args.years);
            }
            // console.log("Years Not Changed=============***")
            return false; //@TODO validate years

            break;

        case "months":

                if(Number(args.months) > 0){
                    // console.log("Months greater than 0=================***")
                    // console.log("Months Added ===================*** ", args.months)
                    return Number(args.months);
                }
                // console.log("Months Not Changed=============***")
                return false;

            break
        case "days":
                if(Number(args.days) > 0){
                    // console.log("Days Added ===================***", args.days);
                    return Number(args.days);
                }
                // console.log("Days Not Changed ======================***")
                return false;
                break;
        case "hours":
                if(Number(args.hours) > 0){
                    // console.log("Hours Added ==============***", args.hours);
                    return Number(args.hours);
                }
                // console.log("Hours Not Changed ======================***")
                return false;
                break;
        case "minutes":
                if(Number(args.minutes) > 0){
                    // console.log("Minutes Added ==============***", args.minutes);
                    return Number(args.minutes);
                }
                // console.log("Minutes Not Changed ======================***")
                return false;
                break
        case "seconds":
                if(Number(args.seconds) > 0){
                    // console.log("Seconds Added ==============***", args.seconds);
                    return Number(args.seconds);
                }
                // console.log("Seconds Not Changed ======================***")
                return false;
                break
        default:
        // console.log("undtermined period")
            return false;
    }
}

function _normalize_datetime_input(args,moment){
    // console.log("_normalize",args)
    let _propose_moment = Moment({
        year:args.year || moment().get("year"),
        month:args.month || moment().get("month"),
        date:args.date || moment().get("date"),
        hours:args.hour || moment().get("hour"),
        minutes:args.minutes || moment().get("minutes"),
        // seconds:args.seconds || moment().get("seconds")
    })

    let _moment_now = moment();
    // console.log("proposed", _propose_moment.isValid());
    // console.log("now", _moment_now.isValid());
    // console.log(_propose_moment.diff(_moment_now))

    if(!_propose_moment.isValid() || !_moment_now.isValid()){
        throw new Error("Provided DateTime is invalid")
    }

    if(_propose_moment.diff(_moment_now) < 0){
        throw new Error("Cannot schedule for time past")
    }

    return _propose_moment.toDate();
}

function _run_at(args,fn,cb){

    switch(args.run_time.input_type){
        case "incremental_input":
            let _unix_timestamp = Moment().add(_normalize_incremental_input_at({type:"years",years:args.run_time.years},Moment()),"years").add(_normalize_incremental_input_at({type:"months",months:args.run_time.months},Moment()),"months").add(_normalize_incremental_input_at({type:"days",days:args.run_time.days},Moment()),"days").add(_normalize_incremental_input_at({type:"hours",hours:args.run_time.hours},Moment()),"hours").add(_normalize_incremental_input_at({type:"minutes",minutes:args.run_time.minutes},Moment()),"minutes").add(_normalize_incremental_input_at({type:"seconds",seconds:args.run_time.seconds},Moment()),"seconds").toDate(); 

            agenda.define(args.job_name,fn);


            agenda.schedule(new Date(_unix_timestamp), args.job_name,args.job_payload);

            cb();

            break;
        case "datetime_input":
            agenda.define(args.job_name,fn);

            agenda.schedule(_normalize_datetime_input(args.run_time, Moment),args.job_name,args.job_payload);

            cb()

            break;
        default:
            return cb(new Error("Input Type Not Supported"));
    }
}

function _run_every_day(args,fn,cb){

        let _invalid_dates;

        if(!args.run_time){
          cb(new Error("provide a valid run time"))
          return;
        }

        args.run_time.days.map((_day,index)=>{
            _day.freq.map((_times,index)=>{
                    let _schedule = Moment({year:_day.year || Moment().get("year"),month:_day.month || Moment().get("month"), date:_day.date || Moment().get("date"), hour:_times.time.hour || Moment().get("hour"), minutes:_times.time.minutes || Moment().get("minutes")});

                    let _now_moment = Moment();
                    
                    _invalid_dates = [];
                
                    _schedule.diff(_invalid_dates) > 0 ? _run_job(_schedule,args,fn): _invalid_dates.push(_schedule.toDate());
            })
        })

        args._invalid_dates = _invalid_dates;

        cb(null,args)
        
}

function _run_job(schedule,args,fn){
    agenda.define(args.job_name,fn);
    agenda.schedule(schedule.toDate(),args.job_name,args);
    return; 
}



module.exports = jobDefinition;