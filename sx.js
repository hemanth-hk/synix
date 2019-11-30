#!/usr/bin/env node


// command imports form ./command
var ls = require('./commands/ls');
var pwd = require('./commands/pwd');





// argument parsing
passedArgs = process.argv.slice(2);
if (passedArgs.length ==0){
    console.error(`No arguments parsed`);
}
else if (passedArgs.length == 1 && passedArgs[0] == 'ls'){
    ls('./');
}
else if (passedArgs.length == 1 && passedArgs[0] == 'pwd'){
    pwd();
}
else {
    console.error(`Argument(s) ${passedArgs} cannot be parsed`);
}