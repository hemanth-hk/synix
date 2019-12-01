const exec = require("child_process").exec;

function open(pathArray) {
  // remove open from the array
  pathArray = pathArray.slice(1);
  // generate a open string
  cdString = ".";
  pathArray.forEach(dir => {
    cdString = cdString + "/" + dir;
  });
  // execute the open command
  exec(`cd ${cdString} && code .`,{cwd: process.cwd()}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log("Opening VScode.....");
  });

}

module.exports = open;
