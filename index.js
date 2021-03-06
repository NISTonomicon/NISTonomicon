#!/usr/bin/env node

var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');
var mocha = new Mocha({
    //reporter:'json'
});
mocha.addFile(__dirname+'/util/controlTestRunner.js');

var reportBuilder = require(__dirname+'/util/reportBuilder.js');

var runTests = function(overlay, inherited_dict, implemented_dict, callback) {
    module.exports.overlay = overlay
    module.exports.inherited_dict = inherited_dict;
    module.exports.implemented_dict = implemented_dict;
    
    // Run the tests.
    var resultCount = {
        "pending": 0,
        "passing": 0,
        "failing": 0
    }
    // Run the tests.
    mocha.run(function(failures) {
        callback(resultCount,reportBuilder.buildReportVerbose());
    }).on('pass', function(test) {
        reportBuilder.addPassing(test.title,test)
        resultCount['passing']++
    }).on('fail', function(test, err) {
        reportBuilder.addFailing(test.title,test,err)
        resultCount['failing']++
    }).on('pending', function(test) {
        reportBuilder.addPending(test.title)
        resultCount['pending']++
    });;
}
if(require.main === module) { //called directly as an executable
    tests_file = process.argv[2];
    var overlay = require(tests_file).overlay
    var inherited_dict = require(tests_file).inherited_dict
    var implemented_dict = require(tests_file).implemented_dict
    runTests(overlay,inherited_dict,implemented_dict,function(result,report){
        console.log(report)
        console.log(result)
        
    })
} else {//required as a module
    module.exports = runTests;
}
