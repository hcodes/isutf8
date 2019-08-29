[![NPM Version](https://img.shields.io/npm/v/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)
[![NPM Downloads](https://img.shields.io/npm/dm/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)
[![Dependency Status](https://img.shields.io/david/hcodes/isutf8.svg?style=flat)](https://david-dm.org/hcodes/isutf8)
[![Build Status](https://img.shields.io/travis/hcodes/isutf8.svg?style=flat)](https://travis-ci.org/hcodes/isutf8)
[![Coverage Status](https://img.shields.io/coveralls/hcodes/isutf8.svg?branch=master)](https://coveralls.io/r/hcodes/isutf8)

isutf8
======

Quick check if a Node.js Buffer or Uint8Array is UTF-8.

## Install
`npm install isutf8`

## Usage
```js
'use strict';

const isUtf8 = require('isutf8');

const buf = Buffer.from([0xd0, 0x90]);
console.log(isUtf8(buf)); // => true

// or 

const arr = new Uint8Array([0xd0, 0x90]);
console.log(isUtf8(arr)); // => true

```

## License
[MIT License](./LICENSE)
