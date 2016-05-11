'use strict';

var assert = require('assert');
var timeSafeCompare = require('../lib/index');

assert.ok(timeSafeCompare('127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935',
													'127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935'),
													'equal strings not equal');
assert.ok(!timeSafeCompare('alpha', 'beta'), 'inequal strings considered equal');
console.log('Success: all tests complete.')