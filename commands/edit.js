// modules
const path = require("path");
const exec = require("child_process").exec;

// imports
var filePath = path.join(__dirname, "..", "sxconfig.json");
var sxconfig = require(filePath);


function edit() {
  exec(`${sxconfig.Text_editor[1]['command']} ${filePath}`, error => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`Opening Config file...`);
  });
}

module.exports = edit;
