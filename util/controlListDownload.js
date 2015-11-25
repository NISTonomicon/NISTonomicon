var xml2json = require('xml-to-json');
var request = require('request');
var http = require('http');
var fs = require('fs');

function download(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        var r = request(uri).pipe(fs.createWriteStream(filename));
        r.on('close', callback);
    });
};
// TODO Make these configurable from command line
var NISTURL = "https://nvd.nist.gov/static/feeds/xml/sp80053/rev4/800-53-controls.xml"
var DOCNAME = "../800_53_controls/800-53_rev4.xml"
// If I do var newImgName = "imageName.jpg", it works.
download(NISTURL, DOCNAME, xml2json({
    input: '../800_53_controls/800-53_rev4.xml',
    output: '../800_53_controls/800-53_rev4.json'
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
}));