'use strict';

const fs = require('fs');
const isUtf8 = require('../index');
const assert = require('chai').assert;

function getText(id) {
    return fs.readFileSync('./test/texts/' + id + '.txt');
}

describe('Examples', function() {
    it('windows1251', function() {
        assert.notOk(isUtf8(getText('win1251')));
    });

    it('koi8r', function() {
        assert.notOk(isUtf8(getText('koi8r')));
    });

    it('utf8', function() {
        assert.ok(isUtf8(getText('utf8')));
    });

    it('ansi', function() {
        assert.ok(isUtf8(getText('ansi')));
    });

    it('null, undefined', function() {
        assert.notOk(isUtf8(null));
        assert.notOk(isUtf8());
    });
});
