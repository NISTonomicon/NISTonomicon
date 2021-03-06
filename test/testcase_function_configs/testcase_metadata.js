var passing = {
    f: function(done) {
        done();
    },
    metadata: {
        implementation: 'This is a test implementation that automatically passes'
    }
}
var failing = {
    f: function(done) {
        throw new Error("This is an error thrown by the package!");
    },
    metadata: {
        implementation: 'This is a test implementation that throws an error'
    }
}
module.exports.overlay = ['SI_8_1', 'SI_8_2', 'PM_6', 'SC_8_1', 'cr_213']
var PM_6 = passing

org_provided_list_1 = {
    'PM_6': PM_6
}
org_provided_list_2 = {
    'SI_8_1': failing
}
module.exports.inherited_dict = {
    'org1': org_provided_list_1,
}
module.exports.implemented_dict = {
    'PM_6': passing,
    'SI_8_2': failing
}