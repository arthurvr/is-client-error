# is-client-error [![Build Status](https://travis-ci.org/arthurvr/is-client-error.svg?branch=master)](https://travis-ci.org/arthurvr/is-client-error)

> Check if a number is a HTTP [Client Error](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_Error) code


## Install

```
$ npm install --save is-client-error
```


## Usage

```js
const isClientError = require('is-client-error');

isClientError(404);
//=> true

isClientError(303);
//=> false
```


## Related

- [is-redirect](https://github.com/sindresorhus/is-redirect)
- [is-server-error](https://github.com/arthurvr/is-server-error)
- [is-success](https://github.com/arthurvr/is-success)


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
