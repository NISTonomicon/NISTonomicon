var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');
// Instantiate a Mocha instance.
var mocha = new Mocha();
mocha.addFile('./util/controlTestRunner.js');
if(process.env.NODE_ENV === 'unit_test') { //unit testing of this module requires specific modification to test
    module.exports = function(overlayParameter, inherited_dictParameter, implemented_dictParemeter, callback) {
        //overlay = overlayParameter;
        module.exports.overlay = overlayParameter
        module.exports.inherited_dict = inherited_dictParameter;
        module.exports.implemented_dict = implemented_dictParemeter;
        defaultConsolelog = console.log
        console.log = function() {}
        //defining mocha behavior
        //http://stackoverflow.com/questions/29050720/run-mocha-programatically-and-pass-results-to-variable-or-function
        var resultCount = {
            pending: 0,
            passing: 0,
            failing: 0
        }
        // Run the tests.
        mocha.run(function(failures) {
            console.log = defaultConsolelog
            callback(resultCount);
        }).on('pass', function(test) {
            resultCount.passing++
        }).on('fail', function(test, err) {
            resultCount.failing++
        }).on('pending', function() {
            resultCount.pending++
        });;
    }
} else {
    module.exports = function(overlayParameter, inherited_dictParameter, implemented_dictParemeter, callback) {
        var overlay = overlayParameter;
        var inherited_dict = inherited_dictParameter;
        var implemented_dict = implemented_dictParemeter;
        // Run the tests.
        mocha.run(function(failures) {
            callback(failures);
        });
    }
}