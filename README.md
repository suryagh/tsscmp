# Timing safe string compare using double HMAC
[![Node.js Version][node-version-image]][node-version-url]
[![npm][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][appveyor-image]][appveyor-url]
[![Dependency Status][david-image]][david-url]
[![github-license][github-license-image]][license-url]
[travis-image]: https://img.shields.io/travis/suryagh/tsscmp/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/suryagh/tsscmp
[appveyor-image]: https://img.shields.io/appveyor/ci/suryagh/tsscmp/master.svg?style=flat-square&label=windows
[appveyor-url]: https://ci.appveyor.com/project/suryagh/tsscmp
[npm-image]: https://img.shields.io/npm/v/tsscmp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tsscmp
[node-version-image]: https://img.shields.io/node/v/tsscmp.svg?style=flat-square
[node-version-url]: https://nodejs.org/en/download
[downloads-image]: https://img.shields.io/npm/dm/tsscmp.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/tsscmp
[david-image]: http://img.shields.io/david/suryagh/tsscmp.svg?style=flat-square
[david-url]: https://david-dm.org/suryagh/tsscmp
[npm-license-image]: http://img.shields.io/npm/l/tsscmp.svg?style=flat-square
[github-license-image]: https://img.shields.io/github/license/suryagh/tsscmp.svg?style=flat-square
[license-url]: LICENSE
Prevents [timing attacks](http://codahale.com/a-lesson-in-timing-attacks/) using Brad Hill's
[Double HMAC pattern](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/)
to perform secure string comparison. Double HMAC avoids the timing atacks by blinding the
timing channel using random time per attempt comparison against iterative brute force attacks.


## Install

```
npm install tsscmp
```
## Why
To compare secret values like **authentication tokens**, **passwords** or
**capability urls** so that timing information is not
leaked to the attacker.

## Example

```js
var timingSafeCompare = require('tsscmp');

var sessionToken = '127e6fbfe24a750e72930c';
var givenToken = '127e6fbfe24a750e72930c';

if (timingSafeCompare(sessionToken, givenToken)) {
  console.log('good token');
} else {
  console.log('bad token');
}
```
## Credits to
[@jsha](https://github.com/jsha)</br>
[@bnoordhuis](https://github.com/bnoordhuis)</br>
[@suryagh](https://github.com/suryagh)

## License
 [MIT](LICENSE)
 