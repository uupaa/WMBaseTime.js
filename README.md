# WMBaseTime.js [![Build Status](https://travis-ci.org/uupaa/WMBaseTime.js.png)](http://travis-ci.org/uupaa/WMBaseTime.js)

[![npm](https://nodei.co/npm/uupaa.wmbasetime.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.wmbasetime.js/)

Timer API wrapper.

## Document

- [WMBaseTime.js wiki](https://github.com/uupaa/WMBaseTime.js/wiki/WMBaseTime)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

## How to use

### Browser

```js
<script src="lib/WMBaseTime.js"></script>
<script>
WMBaseTime.set(1000);

console.log(Date.now(), WMBaseTime.now() ); // 1000

setTimeout(function() {
    console.log(Date.now(), WMBaseTime.now() ); // 1000 + delay time
}, 1000);
</script>
```

### WebWorkers

```js
importScripts("lib/WMBaseTime.js");

...
```

### Node.js

```js
var WMBaseTime = require("lib/WMBaseTime.js");

...
```
