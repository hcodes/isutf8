#!/usr/bin/env node

var fs = require('fs'),
    isUtf8 = require('../lib/isutf8'),
    program = require('commander'),
    exitCode = 0;

program
    .usage('<file ...>')
    .parse(process.argv);

if(!process.argv[2]) {
    program.help();
}

for(var i = 2; i < process.argv.length; i++) {
    var file = process.argv[i];

    if(fs.existsSync(file)) {
        if(isUtf8(fs.readFileSync(file))) {
            console.log(file + ' is UTF-8');
        } else {
            console.log(file + ' is NOT UTF-8');
            exitCode = 1;
        }
    } else {
        console.log(file + ': No such file');
        exitCode = 1;
    }
}

process.exit(exitCode);
