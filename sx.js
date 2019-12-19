#!/usr/bin/env node

// command imports form ./commands/cmds.js
var { init ,ls, pwd, open, mkdir, cat, rm, mkpro
} = require("./commands/cmds.js");



// argument parsing
passedArgs = process.argv.slice(2);
if (passedArgs.length == 0) {
  console.error(`No arguments passed`);
} else if (passedArgs.length == 1 && passedArgs[0] == "ls") {
  ls("./");
} else if (passedArgs.length == 1 && passedArgs[0] == "pwd") {
  pwd();
} else if (passedArgs.length >= 1 && passedArgs[0] == "open") {
  open(passedArgs);
} else if (passedArgs.length == 1 && passedArgs[0] == "init") {
  init();
} else if (passedArgs.length >= 1 && passedArgs[0] == "mkdir") {
  mkdir("./", passedArgs[1]);
} else if (passedArgs.length >= 1 && passedArgs[0] == "cat") {
  cat("./", passedArgs[1]);
} else if (passedArgs.length >= 1 && passedArgs[0] == "rm") {
<<<<<<< HEAD
  rm("./", passedArgs[1]);
} else if (passedArgs.length >= 1 && passedArgs[0] == "mkpro") {
  mkpro(passedArgs[1]);
=======
  rm("./",passedArgs[1]);
} else if (passedArgs.length >= 1 && passedArgs[0] == "mv") {
  mv(passedArgs[1],passedArgs[2]);
>>>>>>> 748a731cb86ca7025a432dbd5b0211b9cdf135fe
} else {
  console.error(`Argument(s) ${passedArgs} cannot be parsed`);
}
