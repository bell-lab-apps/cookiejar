Cookiejar
---

[Installation](#installation) | [API](#api) | [Browser Compatibility](#browser-compatibility) | [License](#license)

> A tiny (< 1kb) helper library that makes working with cookies a bit easier.

## Installation

**ES Modules**

Jar also supports modern browsers and module bundlers (like Rollup, Webpack, Snowpack, and so on) using the ES modules import syntax. Use the `.es` version.

**CommonJS**

If you use NodeJS, you can import jar using the `require()` method with the `.cjs` version.

**AMD**

If you use RequireJS, SystemJS, and other AMD formats, you can import jar with the `.amd` version.

**Direct Download**

You can download the files directly from GitHub.

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

```html
<script src="path/to/cookiejar.min.js"></script>
```

## API

### `set()`

Create a cookie. Pass in the cookie name and value as arguments.

```js
// Create a cookie named `sandwich` with a value of `turkey`
cookiejar.set('sandwich', 'turkey');
```

As an optional third argument, provide an object of options to use for the cookie. The default values are shown below.

```js
let options = {
	path: '/',         // path to set the cookie at
	domain: hostname,  // domain for the cookie
	'max-age': null,   // maximum amount of time to keep the cookie, in seconds
	expires: null,     // date on which to expire the cookie (GMT format)
	secure: false,     // the cookie can only be transmitted over HTTPS
	'same-site': 'lax' // lax|strict|none
};
```

For example, this cookie is set for the root path ('/'), and expires in one week (60 seconds x 60 minutes x 24 hours x 7 days)

```js
cookiejar.set('drink', 'soda', {
	'max-age': 60 * 60 * 24 * 7
});
```

### `get()`

Get the value of a cookie. Pass in the cookie name as an argument.

```js
// Get the `sandwich` cookie
cookiejar.get('sandwich');
```

### `remove()`

Delete a cookie.  Pass in the cookie name as an argument.

```js
// Delete the `sandwich` cookie
cookiejar.remove('sandwich');
```

If you passed in an option for `path` other than the default `/`, you must also provide that as a second argument.

```js
// Delete the `drink` cookie at the /order path
cookiejar.remove('drink', '/order');
```


## Browser Compatibility

Cookiejar works in all modern browsers, and IE 6 and above.

## License

The code is available under the [MIT License](LICENSE.md).
