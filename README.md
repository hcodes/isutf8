[![NPM Version](https://img.shields.io/npm/v/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)
[![NPM Downloads](https://img.shields.io/npm/dm/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)
[![install size](https://packagephobia.com/badge?p=isutf8)](https://packagephobia.com/result?p=isutf8)

isutf8
======

> **Deprecated:** Use [`isUtf8` from `node:buffer`](https://nodejs.org/api/buffer.html#bufferisutf8input)
> in Node.js, or [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode)
> with `{ fatal: true }` in browsers. See the migration examples below.

Quick check if a Node.js Buffer or Uint8Array is valid UTF-8.

## Advantages

- Ultra-small package size
- No runtime dependencies
- No native compilation required

## Migration to built-in APIs

For modern Node.js applications, prefer the built-in
[`isUtf8` from `node:buffer`](https://nodejs.org/api/buffer.html#bufferisutf8input),
available since Node.js 18.14.0 and 19.4.0:

```js
import { isUtf8 } from 'node:buffer';

console.log(isUtf8(Buffer.from([0xd0, 0x90]))); // true
```

In modern browsers, use
[`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode)
with `fatal: true` to reject invalid UTF-8:

```js
function isUtf8(input) {
  if (input === undefined) return false;

  try {
    new TextDecoder('utf-8', { fatal: true }).decode(input);
    return true;
  } catch (error) {
    if (error instanceof TypeError) return false;
    throw error;
  }
}

console.log(isUtf8(new Uint8Array([0xd0, 0x90]))); // true
console.log(isUtf8(new Uint8Array([0xc3]))); // false
```

Unlike a byte-only validator, `TextDecoder` also produces a decoded string.
This package mainly remains useful for older environments without these APIs
(it supports Node.js 12 or later), or for retaining its existing API.
When migrating, note that this package returns `false` for a missing argument,
while Node.js's built-in `isUtf8` throws a `TypeError`.

## Install

```sh
npm install isutf8
```

## Usage

### CommonJS

```js
const isUtf8 = require('isutf8');

const buf = Buffer.from([0xd0, 0x90]);
console.log(isUtf8(buf)); // true

// or

const arr = new Uint8Array([0xd0, 0x90]);
console.log(isUtf8(arr)); // true
```

### ES Modules or TypeScript

```js
import isUtf8 from 'isutf8';

const buf = Buffer.from([0xd0, 0x90]);
console.log(isUtf8(buf)); // true

// or

const arr = new Uint8Array([0xd0, 0x90]);
console.log(isUtf8(arr)); // true
```

## API

`isUtf8(input?: Buffer | Uint8Array): boolean`

Returns `true` for valid UTF-8 byte sequences, including ASCII and empty input.
Returns `false` for invalid or incomplete sequences, or a missing argument.
It validates bytes; it does not detect the original encoding or decode text.

```js
const isUtf8 = require('isutf8');

console.log(isUtf8(new Uint8Array())); // true
console.log(isUtf8(new Uint8Array([0xc3]))); // false: incomplete sequence
console.log(isUtf8()); // false
```

## Development

Use Node.js 22.13.0 or later in the Node.js 22 line, or Node.js 24 or later,
for the development tools.

```sh
npm ci
npm test
npm run build
```

TypeScript is kept on 6.0.x because the current `typescript-eslint` and `ts-jest`
releases do not support TypeScript 7 yet.

## License

[MIT License](./LICENSE)
