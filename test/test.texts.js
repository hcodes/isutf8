var fs = require('fs'),
    isUtf8 = require('../lib/isutf8'),
    assert = require('chai').assert;

function getText(id) {
    return fs.readFileSync('./test/texts/' + id + '.txt');
}

describe('Examples', function() {
    it('file windows1251', function() {
        assert.notOk(isUtf8(getText('win1251')));
    });

    it('file koi8r', function() {
        assert.notOk(isUtf8(getText('koi8r')));
    });

    it('file utf8', function() {
        assert.ok(isUtf8(getText('utf8')));
    });

    it('file ansi', function() {
        assert.ok(isUtf8(getText('ansi')));
    });
});
