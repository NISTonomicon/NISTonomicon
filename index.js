var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');
// Instantiate a Mocha instance.
//var mocha = new Mocha();
if(process.env.NODE_ENV === 'test') {
    var mocha = new Mocha({
        reporter: 'dot'
    });
} else {
    var mocha = new Mocha();
}
var testDir = 'some/dir/test'
mocha.addFile('./util/controlTestRunner.js');
module.exports = function(overlay, inherited_dict, implemented_dict, callback) {
    // Run the tests.
    mocha.run(function(failures) {
        callback(failures);
    });
    process.on('uncaughtException', function(err) {
        console.log('Caught exception: ' + err);
    });
}