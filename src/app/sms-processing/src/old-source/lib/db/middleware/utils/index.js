exports.compute_by_percent = function(template, price_class){
        switch(price_class){
            case "a":
                return ((Number(template.proposed_unit_price.a.units)/100)*Number(template.initial_bundle_price)) + Number(template.initial_bundle_price)
                break;
            case "b":
                return ((Number(template.proposed_unit_price.b.units)/100)*Number(template.initial_bundle_price)) + Number(template.initial_bundle_price)
                break;
            case "c":
                return ((Number(template.proposed_unit_price.c.units)/100)*Number(template.initial_bundle_price)) + Number(template.initial_bundle_price)
                default:
                    throw new Error("please provide template")
        }
}

exports.compute_by_units = function(template, price_class){
        switch(price_class){
            case "a":
                return Number(template.proposed_unit_price.a.units) * Number(template.initial_num_of_sms);
                break;
            case "b":
                return Number(template.proposed_unit_price.b.units) * Number(template.initial_num_of_sms);
                break;
            case "c":
                return Number(template.proposed_unit_price.b.units) * Number(template.initial_num_of_sms);
                default:
                    throw new Error("please provide template")
        }
};


exports.compute_unit_price = function(template){
    return Number(template.initial_bundle_price)/Number(template.initial_num_of_sms)
}