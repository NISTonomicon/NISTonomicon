
//This is responsible for building the reporting mechanism out

var buildReport = {} //object to export
var report_results ={}
var report_metadata = {}
buildReport.addMetadata = function(name,metadata){
    report_metadata[name] = metadata;
}

buildReport.addFailing = function(name,results,err){
    report_results[name] = {};
    report_results[name].status = 'failing';
    report_results[name].error = err;
}

buildReport.addPending = function(name){
    report_results[name] = {};
    report_results[name].status = 'pending';
}
buildReport.addPassing = function(name,results){
    report_results[name] = {};
    report_results[name].status = 'passing';
}

//This consolidates the metadata and report status into one document
buildReport.returnReport = function(){
    var consolidated_report = {}
    for (result in report_results){
        consolidated_report[result] = {}
        if (report_metadata.hasOwnProperty(result)){
            consolidated_report[result].metadata = report_metadata[result];
        }     
        consolidated_report[result].result = report_results[result]
    }
    return( consolidated_report)
}

buildReport.buildReportVerbose = function(){
    var consolidated_report = buildReport.returnReport();
    var control_list = require('./controlListParser.js')
    for (test in consolidated_report){
        control_number = test.split(' ')[0]
     
    }
}

module.exports = buildReport