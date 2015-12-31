var passing = function(done) {
    done()
}
var failing = {
    f: function(done) {
        throw new Error("error");
    },
    metadata: {
        status: 'green'
    }
}
module.exports.overlay = ['SI_8_1', 'SI_8_2', 'PM_6', 'SC_8_1', 'cr_213']
var PM_6 = {
    f: passing,
    metadata: {}
}
PM_6.metadata['status'] = 'green'
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