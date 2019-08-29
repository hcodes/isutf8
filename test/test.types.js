'use strict';

const isUtf8 = require('../index');
const assert = require('chai').assert;

describe('Types', () => {
    it('Buffer', () => {
        assert.ok(isUtf8(Buffer.from([0xd0, 0x90])));
    });
    
    it('Uint8Array', () => {
        assert.ok(isUtf8(new Uint8Array([0xd0, 0x90])));
    });
});
