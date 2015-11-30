process.env.NODE_ENV = 'unit_test';
assert = require('assert');
control_tester = require('../index.js');

var clearRequire = require('clear-require');
 
 

var should = require('should')

var passing = function(done) {
    done()
}
var failing = function(done) {
    throw new Error("error");
}
var overlay = ['SI_8_1', 'SI_8_2', 'PM_6', 'SC_8_1', 'cr_213']
var inherited_dict = {
    'SI_8_1': passing
}
var implemented_dict = {
    'PM_6': failing,
    'SI_8_2': passing
}
startTests = function() {
    beforeEach(function(){
        clearRequire('../index.js');
        control_tester = require('../index.js');
    })
    it('should pass in an overlay of 4, with 2 passing, 1 failing and 1 pending', function(done) {
        control_tester(overlay, inherited_dict, implemented_dict, function(resultCount) {
            console.log(resultCount)
            resultCount.passing.should.equal(2)
            done()
        })
    });
    it('should have 2 failing after one passing was changed to failing', function(done) {
        inherited_dict['SI_8_1'] = failing
        control_tester(overlay, inherited_dict, implemented_dict, function(resultCount) {
            console.log(resultCount)
            resultCount.failing.should.equal(2)
            done()
        })
    });
    it('should pass in a blank overlay', function(done) {
        control_tester([], inherited_dict, implemented_dict, function(resultCount) {
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