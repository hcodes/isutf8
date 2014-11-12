var fs = require('fs'),
    isUtf8 = require('../lib/isutf8').isUtf8,
    //otherIsUtf8 = require('is-utf8');
    assert = require('chai').assert,
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

/*var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite
.add('isUtf8', function() {
    isUtf8(utf8);
    isUtf8(win1251);
    isUtf8(koi8r);
    isUtf8(ansi);
})
.add('otherIsUtf8', function() {
    otherIsUtf8(utf8);
    otherIsUtf8(win1251);
    otherIsUtf8(koi8r);
    otherIsUtf8(ansi);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ 'async': true });
*/