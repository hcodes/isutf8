'use strict';

const fs = require('fs');
const isUtf8 = require('../index');
const assert = require('chai').assert;

function getText(id) {
    return fs.readFileSync(`./test/texts/${id}.txt`);
}

describe('Examples', () => {
    it('windows1251', () => {
        assert.notOk(isUtf8(getText('win1251')));
    });

    it('koi8r', () => {
        assert.notOk(isUtf8(getText('koi8r')));
    });

    it('utf8', () => {
        assert.ok(isUtf8(getText('utf8')));
    });

    it('ansi', () => {
        assert.ok(isUtf8(getText('ansi')));
    });

    it('null, undefined', () => {
        assert.notOk(isUtf8(null));
        assert.notOk(isUtf8());
    });
});
