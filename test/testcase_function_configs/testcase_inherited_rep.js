var passing = function(done) {
    done()
}
var failing = function(done) {
    throw new Error("error");
}
module.exports.overlay = ['AU_8']
var ntptest = require('nistonomicon-ntp')
module.exports.inherited_dict = {
    'github ntp test': ntptest
}
module.exports.implemented_dict = {}