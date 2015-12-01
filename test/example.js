process.env.NODE_ENV = 'eval';
var control_tester = require('../index.js');
overlay = ['SI_8_1', 'SI_8_2', 'PM_6', 'SC_8_1', 'cr_213']


var passing = function(done) {
    done()
}

var failing = function(done) {
    throw new Error("There are no security measure for this performance measure");
}


var inherited_dict = {
    'SI_8_1': passing
}
var implemented_dict = {
    'PM_6': failing,
    'SI_8_2': passing
}
var overlay = ['SI_8_1', 'SI_8_2', 'PM_6', 'SC_8_1']
control_tester(overlay, inherited_dict, implemented_dict, function(resultCount) {
    console.log(resultCount)
    
})