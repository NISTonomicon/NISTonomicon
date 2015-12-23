var passing = function(done) {
    done()
}
var failing = function(done) {
    throw new Error("error");
}

module.exports.overlay = ['SI_8_1', 'SI_8_2', 'PM_6', 'SC_8_1', 'cr_213']

module.exports.inherited_dict = {
    'SI_8_1': failing
}
module.exports.implemented_dict = {
    'PM_6': failing,
    'SI_8_2': passing
}