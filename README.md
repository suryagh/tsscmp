# Timing safe string compare using double hmac
[![Node.js Version][node-version-image]][node-version-url]
[![npm][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]


[travis-image]: https://travis-ci.org/suryagh/tsscmp.svg?branch=master
[travis-url]: https://travis-ci.org/suryagh/tsscmp
[npm-image]: https://img.shields.io/npm/v/tsscmp.svg?style=flat
[npm-url]: https://npmjs.org/package/tsscmp
[node-version-image]: https://img.shields.io/node/v/tsscmp.svg
[node-version-url]: https://nodejs.org/en/download
[downloads-image]: https://img.shields.io/npm/dm/tsscmp.svg
[downloads-url]: https://npmjs.org/package/tsscmp
[david-image]: http://img.shields.io/david/suryagh/tsscmp.svg
[david-url]: https://david-dm.org/suryagh/tsscmp
[license-image]: http://img.shields.io/npm/l/tsscmp.svg
[license-url]: LICENSE


Prevents timing attacks using Brad Hill's [Double HMAC pattern](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/) to perform __safe string comparison__. The approach is similar to the node's native implementation of timing safe buffer comparison that will be available on [v6+](https://github.com/nodejs/node/issues/3043).

Double HMAC avoids the timing atacks by blinding the timing channel using *random time per attempt* comparison against iterative brute force attacks.

## Install

```
npm install tsscmp
```

## Why?

To minimize vulnerability against [timing attacks](http://codahale.com/a-lesson-in-timing-attacks/) during string comparision.

## Examples

```js
var timingSafeCompare = require('tsscmp');

var sessionToken = '127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935 ';
var givenToken = '127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935 ';

if (timingSafeCompare(sessionToken, givenToken)) {
  console.log('good token');
} else {
  console.log('bad token');
}

```
