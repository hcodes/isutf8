#!/usr/bin/env node

var fs = require('fs'),
    isUtf8 = require('../lib/isutf8'),
    program = require('commander');

program
    .usage('<file ...>')
    .parse(process.argv);

var resource = process.argv[2];

if(!resource) {
    program.help();
}

var exitCode = 0;
for(var i = 2; i < process.argv.length; i++) {
    var file = process.argv[i];
    
    if(fs.existsSync(file)) {
        if(isUtf8(fs.readFileSync(file))) {
            console.log(file + ' is UTF-8.');
        } else {
            console.log(file + ' is NOT UTF-8.');
            exitCode = 1;
        }
    } else {
        console.log(resource + ': No such file');
        exitCode = 1;
    }
}

process.exit(exitCode);
