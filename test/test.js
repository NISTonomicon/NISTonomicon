process.env.NODE_ENV = 'unit_test';
assert = require('assert')
control_tester = require('../index.js')

var passing = function(done) {
    done()
}
var failing = function(done) {
    throw new Error("if you see this it means it passed the test!");
}

startTests = function() {
    before(function() {
        overlay = ['SI_8_1', 'SI_8_2', 'PM_6', 'SC_8_1', 'cr_213']
        inherited_dict = {
            'SI_8_1': passing
        }
        implemented_dict = {
            'PM_6': failing,
            'SI_8_2': passing
        }
    });
    it('should pass in an overlay of 4, with 2 passing, 1 failing and 1 pending', function(done) {
        control_tester([], inherited_dict, implemented_dict, function(failures) {
            assert(failures === 1)
            done()
        })
    });
    it('should pass in an overlay of 4, with 1 passing, 2 failing and 1 pending', function(done) {
        inherited_dict['SI_8_1'] = failing
        control_tester([], inherited_dict, implemented_dict, function(failures) {
            assert(failures === 1)
            done()
        })
    });
    it('should pass in a blank overlay', function(done) {
        control_tester([], inherited_dict, implemented_dict, function(failures) {
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