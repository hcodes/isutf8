var fs = require('fs'),
    isUtf8 = require('../lib/isutf8');
    console.log(isUtf8);
    var assert = require('chai').assert,
    getText = function(id) {
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
});
