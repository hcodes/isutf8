#!/usr/bin/env node

var fs = require('fs'),
    isUtf8 = require('../lib/isutf8'),
    program = require('commander'),
    exitCode = 0;

program
    .version(require('../package.json').version)
    .usage('<file ...>')
    .parse(process.argv);

if(!program.args.length) {
    program.help();
}

program.args.forEach(function(file) {
    if(fs.existsSync(file) && fs.statSync(file).isFile()) {
        if(isUtf8(fs.readFileSync(file))) {
            console.log(file + ' is utf-8');
        } else {
            console.error(file + ' is not utf-8');
            exitCode = 1;
        }
    } else {
        console.error(file + ': No such file');
        exitCode = 1;
    }
});

process.exit(exitCode);
