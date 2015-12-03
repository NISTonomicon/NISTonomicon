process.env.NODE_ENV = 'unit_test';
assert = require('assert');
var control_tester = require('../index.js');


var should = require('should')

startTests = function() {
    beforeEach(function(){
    })
    it('should pass in an overlay of 4, with 2 passing, 1 failing and 1 pending', function(done) {
        control_tester('.././test/testcase_function_configs/testcase_2passing_1failing_1pending.js', function(resultCount) {
            console.log(resultCount)
            resultCount.passing.should.equal(2)
            done()
        })
    });
    it('should have 2 failing after one passing was changed to failing', function(done) {
        control_tester('.././test/testcase_function_configs/testcase_1passing_2failing_1pending.js', function(resultCount) {
            console.log(resultCount)
            resultCount.failing.should.equal(2)
            done()
        })
    });
    it('should pass in a blank overlay', function(done) {
        control_tester('./test/testcase_blank_overlay.js', function(resultCount) {
            console.log(resultCount)
            resultCount.passing.should.equal(0)
            done()
        })
    });
    it('should download the latest version of the NIST 800-53 Controls', function(done) {
        this.skip()
    });
    it('should correctly convert the XML to JSON', function(done) {
        this.skip()
    });
};
startTests();
