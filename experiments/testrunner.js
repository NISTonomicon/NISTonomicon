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
// 

startTests = function(overlay, inheritedTests, implementedTests) {
    before(function(done) {
        var test_dict = assembleTestDict(overlay, inheritedTests, implementedTests)
        done()
    });
    
    for(family in control_list){ //for each of the 18 families in the controls 
        describe(family,function(){ //create a sub catagory
            for (control in control_list[family]){ //for all of the controls in each family
                control_title = control_list[family][control].title
                //TODO CHECK if in overlay here, if not skip! 
                describe(control+" "+control_title,function(){ 
                    it (control,t1) //this is the base control
                /////////
                    if (control_list[family][control].hasOwnProperty('enhancements')){ //checking to see if there are any enhancements
                        describe('enhancements',function(){
                            for (enhancement in control_list[family][control]['enhancements']){
                                //TODO CHECK if in overlay here, if not skip! 
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
    't2': t1
}

startTests(overlay,inherited_dict,implemented_dict);