process.env.NODE_ENV = 'unit_test';
//var control_tester = require('../index.js');
var should = require('should');
var spawn = require('child_process').spawn;
var spawnTest = function(test_file,callback){
    var controlTest = spawn('node', ['./index.js',test_file]);
    var last_data = ''
    controlTest.stdout.on('data', function(data) {
        //console.log(data.toString('ascii'))
        last_data = data
    });
    controlTest.stderr.on('data', function(data) {
        //console.log(data.toString('ascii'))
    });
    controlTest.on('close', function(code) {
        resultString = (last_data.toString('ascii')).slice(1,-2);
        resultCount = {
            pending: parseInt(resultString.split(',')[0].split(':')[1].replace(/ /g,'')),
            passing: parseInt(resultString.split(',')[1].split(':')[1].replace(/ /g,'')),
            failing: parseInt(resultString.split(',')[2].split(':')[1].replace(/ /g,''))
        }          
        callback(resultCount)
    });   
}

startTests = function() {
    it('should pass in an overlay of 4, with 2 passing, 1 failing and 1 pending', function(done) {
        spawnTest('./test/testcase_function_configs/testcase_2passing_1failing_1pending.js', function(resultCount) {
            resultCount.passing.should.equal(2)
            done();
        })
    });
    it('should have 2 failing after one passing was changed to failing', function(done) {
        spawnTest('./test/testcase_function_configs/testcase_1passing_2failing_1pending.js', function(resultCount) {
            resultCount.failing.should.equal(2)           
            done();
        })
    });
    it('should pass in a blank overlay', function(done) {
        spawnTest('./test/testcase_function_configs/testcase_blank_overlay.js', function(resultCount) {
            resultCount.passing.should.equal(0);
            done();
        })
    });
//     it('should pass an example of lists of inheritable dictionaries', function(done) {
//         spawnTest('./test/testcase_function_configs/testcase_multiple_inherited_lists.js', function(resultCount) {
            
//         })
//     });
    it('should download the latest version of the NIST 800-53 Controls', function(done) {
        this.skip()
    });
    it('should correctly convert the XML to JSON', function(done) {
        this.skip()
    });
};
startTests();
