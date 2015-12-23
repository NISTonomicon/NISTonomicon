var passing = function(done) {
    done()
}
var failing = function(done) {
    throw new Error("error");
}
module.exports.overlay = ['SI_8_1', 'SI_8_2', 'PM_6', 'SC_8_1', 'cr_213']

org_provided_list_1 = {
    'SI_8_1': passing
}
org_provided_list_2 = {
    'SI_8_1': passing
}

module.exports.inherited_dict = {
    'org1': org_provided_list_1,
    'org2': org_provided_list_2
}
module.exports.implemented_dict = {
    'PM_6': failing,
    'SI_8_2': passing
}