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
var t3 = function(done) {
    done()
}
var t4 = function(done) {
    done()
}
//this is a dictionary where all of the tests will be stored
var test_dict = {}

//this function takes the
var assembleTestDict = function(overlay, inheritedTests, implementedTests) {
    for(control in overlay) {
        if(inheritedTests.hasOwnProperty(control)) { //checks first for inherited tests
            test_dict[control] = inheritedTests[control];
        } else if(implementedTests.hasOwnProperty(control)) { //checks for implemented tests
            test_dict[control] = implementedTests[control];
        } else {
            test_dict[control] = placeholder//adds in pending for potential new tests
        } 
    }
}
// var execute_test = function(test_name) {
//     return test_dict[test_name]
// }
startTests = function(overlay, inheritedTests, implementedTests) {
    before(function(done) {
        var test_dict = assembleTestDict(overlay, inheritedTests, implementedTests)
        done()
    });
    for(family in control_list){
        describe(family,function(){
            for (control in control_list[family]){
                control_title = control_list[family][control].title
                describe(control+" "+control_title,function(){
                    it (control,t1)
                    if (control_list[family][control].hasOwnProperty('enhancements')){
                        describe('enhancements',function(){
                            for (enhancement in control_list[family][control]['enhancements']){
                                enhancement_title = control_list[family][control]['enhancements'][enhancement]
                                it(enhancement+" "+enhancement_title,t1)
                            }                        
                        })
                    }
                })
            }
        });
    }
};
overlay = ['t1', 't2', 't4']
inherited_dict = {
    't1': t1
}
implemented_dict = {
    't2': t2
}

startTests(overlay,inherited_dict,implemented_dict);