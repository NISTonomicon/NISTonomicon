var passing = function(done) {
    done()
}
var failing = function(done) {
    throw new Error("error");
}
module.exports.overlay = []
module.exports.inherited_dict = {
    'SI_8_1': passing
}
module.exports.implemented_dict = {
    'PM_6': failing,
    'SI_8_2': passing
}