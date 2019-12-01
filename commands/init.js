//imports
var fs = require('fs');
var path = require('path')
var sxconfig = require('../sxconfig.json')


function init() {


	var a = path.join(__dirname,'..','sxconfig.json');
	console.log(sxconfig)

}




module.exports = init;
