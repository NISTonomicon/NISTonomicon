var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');
// Instantiate a Mocha instance.
var mocha = new Mocha();


//defining mocha behavior
//http://stackoverflow.com/questions/29050720/run-mocha-programatically-and-pass-results-to-variable-or-function
//
// mocha.run()
//     .on('test', function(test) {
//         console.log('Test started: '+test.title);
//     })
//     .on('test end', function(test) {
//         console.log('Test done: '+test.title);
//     })
//     .on('pass', function(test) {
//         console.log('Test passed');
//         console.log(test);
//     })
//     .on('fail', function(test, err) {
//         console.log('Test fail');
//         console.log(test);
//         console.log(err);
//     })
//     .on('end', function() {
//         console.log('All done');
//     });


mocha.addFile('./util/controlTestRunner.js');
module.exports = function(overlay, inherited_dict, implemented_dict, callback) {
    // Run the tests.
    if(process.env.NODE_ENV === 'unit_test') {
        defaultConsolelog = console.log
        console.log = function() {}
    }
    mocha.run(function(failures) {
        if(process.env.NODE_ENV === 'unit_test') {
            console.log = defaultConsolelog
        }
        console.log = defaultConsolelog
        callback(failures);
    });
    process.on('uncaughtException', function(err) {
        console.log('Caught exception: ' + err);
    });
}