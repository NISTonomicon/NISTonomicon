// TODO Fix the output to load dynamically
var controlJSON = require("../output/saved_800-53_rev4.json");
for (i in controlJSON["controls:controls"]["controls:control"]){
    if (controlJSON["controls:controls"]["controls:control"].hasOwnProperty(i)) {
        control = controlJSON["controls:controls"]["controls:control"][i]
        console.log(control.family, control.number, control.title );
    }
        
}