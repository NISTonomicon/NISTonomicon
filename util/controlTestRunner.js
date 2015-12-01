var control_list = require('./controlListParser.js')
//this function takes the overlay, inherited tests and implemented tests and builds a dictionary 
var assembleTestDict = function(overlay, inheritedTests, implementedTests) {
    var test_dict = {}
    for(control in overlay) {
        control_name = overlay[control]
        if(inheritedTests.hasOwnProperty(control_name)) { //checks first for inherited tests
            test_dict[control_name] = inheritedTests[control_name];
        } else if(implementedTests.hasOwnProperty(control_name)) { //checks for implemented tests
            test_dict[control_name] = implementedTests[control_name];
        } else {
            test_dict[control_name] = test_pending //adds in pending for potential new tests
        }
    }
    return test_dict
}
var executeTest = function(test_name, test) {
    if(undefined !== test) {
        it(test_name, test)
    }
}
var executeEnhancements = function(enhancements, test_dict) {
    for(enhancement in enhancements) {
        enhancement_title = enhancements[enhancement]
        executeTest(enhancement + " " + enhancement_title, test_dict[enhancement])
    }
}
var executeControl = function(control, control_number, test_dict) {
    if(control.hasOwnProperty('enhancements')) { //checking to see if there are any enhancements
        executeTest(control_number + " " + control.title, test_dict[control_number]) //this is the base control
        executeEnhancements(control['enhancements'], test_dict)
    } else {
        executeTest(control_number + " " + control.title, test_dict[control_number]) //this is the base control
    }
}
var executeFamily = function(family, test_dict) {
    for(control in family) { //for all of the controls in each family
        control_title = family[control].title
        describe(control_title, function() {
            executeControl(family[control], control, test_dict)
        });
    }
}
var startTests = function(control_list, test_dict) {
    for(family in control_list) { //for each of the 18 families in the controls 
        describe(family, function() {
            executeFamily(control_list[family], test_dict)
        })
    }
};
var test_pending = function(done) {
    this.skip('works', function() {
        // nothing yet
    });
}
var overlay = require('../index.js').overlay
var inherited_dict = require('../index.js').inherited_dict
var implemented_dict = require('../index.js').implemented_dict
var test_dict = assembleTestDict(overlay, inherited_dict, implemented_dict)
startTests(control_list, test_dict);
