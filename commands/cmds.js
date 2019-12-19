// A file to import every command and make an object which can then be imported from sx.js

module.exports = {

	init : require("./init"),
	ls : require("./ls"),
	pwd : require("./pwd"),
	open : require("./open"),
	mkdir : require("./mkdir"),
	cat : require("./cat"),
	rm : require("./rm"),
	mv: require("./mv")

}

