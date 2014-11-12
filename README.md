[![Build Status](https://travis-ci.org/hcodes/isutf8.png?branch=master)](https://travis-ci.org/hcodes/isutf8)
[![Coverage Status](https://img.shields.io/coveralls/hcodes/isutf8.svg?branch=master)](https://coveralls.io/r/hcodes/isutf8)
[![NPM Version](http://img.shields.io/npm/v/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)
[![NPM Downloads](https://img.shields.io/npm/dm/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)

isutf8
======

Check if a data is utf-8.

## Install
`npm install isutf8`

## Usage
```JavaScript
var fs = require('fs'),
    isUtf8 = require('isutf8');

console.log(isUtf8(fs.readFileSync('text.txt')));

```

## CLI
`npm install isutf8 -g`

`isutf8 mytext.txt`


## License
MIT License
