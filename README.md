# Timing safe string compare using double HMAC

[![Node.js Version](https://img.shields.io/node/v/tsscmp.svg?style=flat-square)][download]
[![npm](https://img.shields.io/npm/v/tsscmp.svg?style=flat-square)][tsscmp]
[![NPM Downloads](https://img.shields.io/npm/dm/tsscmp.svg?style=flat-square)][tsscmp]
[![Build Status](https://img.shields.io/travis/suryagh/tsscmp/master.svg?style=flat-square)][travis]
[![Build Status](https://img.shields.io/appveyor/ci/suryagh/tsscmp/master.svg?style=flat-square&label=windows)][appveyor]
[![Dependency Status](http://img.shields.io/david/suryagh/tsscmp.svg?style=flat-square)][david]
[![npm-license](http://img.shields.io/npm/l/tsscmp.svg?style=flat-square)][LICENSE]


Prevents [timing attacks](http://codahale.com/a-lesson-in-timing-attacks/) using Brad Hill's
[Double HMAC pattern](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/)
to perform secure string comparison. Double HMAC avoids the timing atacks by blinding the
timing channel using random time per attempt comparison against iterative brute force attacks.


## Install

```
npm install tsscmp
```
## Why
Timing attacks enable an attacker to extract secrets maintained in a security system by observing the time it takes the system to respond to various queries. Use tsscmp to compare secret values like **authentication tokens**, **passwords** or
**capability urls** so that timing information is not
leaked to the attacker.

## Example

```js
import timingSafeCompare from 'tsscmp';

const sessionToken = '127e6fbfe24a750e72930c';
const givenToken = '127e6fbfe24a750e72930c';

if (timingSafeCompare(sessionToken, givenToken)) {
  console.log('good token');
} else {
  console.log('bad token');
}
```
##License:
[MIT](LICENSE)
[download]: https://nodejs.org/en/download
[tsscmp]: https://npmjs.org/package/tsscmp
[travis]: https://travis-ci.org/suryagh/tsscmp
[appveyor]: https://ci.appveyor.com/project/suryagh/tsscmp
[david]: https://david-dm.org/suryagh/tsscmp
[LICENSE]: LICENSE