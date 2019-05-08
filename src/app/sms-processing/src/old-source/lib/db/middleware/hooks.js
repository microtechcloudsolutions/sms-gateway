const utils = require("./utils");

function sms_pricing_temp(next){
    let self = this;

    if(self.templates.length){
        self.templates.map((template,index)=>{
                template.initial_unit_price = utils.compute_unit_price(template);

                template.revenue_of_proposed.a.units = template.proposed_unit_price.a.incremental_type === "percent" ? utils.compute_by_percent(template, "a") : utils.compute_by_units(template, "a")

                template.revenue_of_proposed.b.units = template.proposed_unit_price.b.incremental_type === "percent" ? utils.compute_by_percent(template, "b") : utils.compute_by_units(template,"b");

                template.revenue_of_proposed.c.units = template.proposed_unit_price.c.incremental_type === "percent" ? utils.compute_by_percent(template, "c") : utils.compute_by_units(template,"c")
        });

        next();
    }
    
}

function post_sms_pricing_temp(next){
    console.log("saved", this)
    // next();
}



module.exports = {
    sms_pricing_temp,
    post_sms_pricing_temp
}