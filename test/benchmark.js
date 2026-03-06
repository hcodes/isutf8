const fs = require('node:fs');
const Benchmark = require('benchmark');
const isutf8 = require('../dist/index.js');
const isValidUTF8 = require('utf-8-validate');

const buffer = fs.readFileSync('./war.txt');

var suite = new Benchmark.Suite;

// add tests
suite.add('isUtf8', function() {
  isutf8(buffer);
})
.add('isValidUTF8', function() {
    isValidUTF8(buffer);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });