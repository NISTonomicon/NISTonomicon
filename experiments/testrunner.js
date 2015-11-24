process.env.NODE_ENV = 'test';
var control_list = require('../util/testGenerator.js')
var placeholder = function(done) {
    this.skip('works', function() {
        // nothing yet
    });
}
var t1 = function(done) {
    done()
}
var t2 = function(done) {
    done()
}
//this is a dictionary where all of the tests will be stored
test_dict = {}
//this function takes the
var assembleTestDict = function(overlay, inheritedTests, implementedTests, callback) {
    for(control in overlay) {
        
        control_name = overlay[control]
       
        if(inheritedTests.hasOwnProperty(control_name)) { //checks first for inherited tests
            test_dict[control_name] = inheritedTests[control_name];
        } else if(implementedTests.hasOwnProperty(control)) { //checks for implemented tests
            test_dict[control_name] = implementedTests[control_name];
        } else {
            test_dict[control_name] = placeholder //adds in pending for potential new tests
        }
    }
    callback()
}
var executeTest = function(test_name) {
    console.log(test_dict)
    console.log(test_dict[test_name])
    return test_dict[test_name]
}
startTests = function(overlay, inheritedTests, implementedTests) {
    before(function(done) {
        assembleTestDict(overlay, inheritedTests, implementedTests,done)
        console.log(test_dict)
    });
    it('should', executeTest('t1'))
    //     for(family in control_list) { //for each of the 18 families in the controls 
    //         describe(family, function() { //create a sub catagory
    //             for(control in control_list[family]) { //for all of the controls in each family
    //                 control_title = control_list[family][control].title
    //                 //TODO CHECK if in overlay here, if not skip! 
    //                 /////////
    //                 if(control_list[family][control].hasOwnProperty('enhancements')) { //checking to see if there are any enhancements
    //                     describe(control + " " + control_title, function() {
    //                         it(control, executeTest('t1',test_dict)) //this is the base control
    //                         describe('enhancements', function() {
    //                             for(enhancement in control_list[family][control]['enhancements']) {
    //                                 //TODO CHECK if in overlay here, if not skip! 
    //                                 enhancement_title = control_list[family][control]['enhancements'][enhancement]
    //                                 it(enhancement + " " + enhancement_title, executeTest('t1',test_dict))
    //                             }
    //                         });
    //                     });
    //                 } else {
    //                     it(control, executeTest('t1',test_dict)) //this is the base control
    //                 }
    //             }
    //         });
    //     }
};
overlay = ['t1', 't2', 't4']
inherited_dict = {
    't1': t1
}
implemented_dict = {
    't2': t1
}
startTests(overlay, inherited_dict, implemented_dict);