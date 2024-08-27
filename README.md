[![NPM Version](https://img.shields.io/npm/v/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)
[![NPM Downloads](https://img.shields.io/npm/dm/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/isutf8)](https://bundlephobia.com/result?p=isutf8)
[![install size](https://packagephobia.com/badge?p=isutf8)](https://packagephobia.com/result?p=isutf8)

isutf8
======

Quick check if a Node.js Buffer or Uint8Array is valid UTF-8.

## Advantages
- Ultra-small package size
- No dependencies
- No pre-compilation

## Install
`npm install isutf8`

## Usage

### CommonJS
```js
const isUtf8 = require('isutf8');

const buf = Buffer.from([0xd0, 0x90]);
console.log(isUtf8(buf)); // => boolean

// or 

const arr = new Uint8Array([0xd0, 0x90]);
console.log(isUtf8(arr)); // => boolean

```

### ES Modules or TypeScript
```js
import isUtf8 from 'isutf8';

const buf = Buffer.from([0xd0, 0x90]);
console.log(isUtf8(buf)); // => boolean

// or 

const arr = new Uint8Array([0xd0, 0x90]);
console.log(isUtf8(arr)); // => boolean
```

## License
[MIT License](./LICENSE)
