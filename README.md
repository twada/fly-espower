# fly-espower

> [Fly][fly] plugin for [power-assert](https://github.com/power-assert-js/power-assert)

## Usage
To learn about what options are available, check out the [espower documentation](https://github.com/power-assert-js/espower#options)

### Install

```
npm install --save-dev fly-espower
```

### Example

```js
exports.espower = function* () {
  yield this
    .source("test/**/*_test.js")
    .espower()
    .target("espowered/")
}
exports.test = function* () {
  yield this
    .source("espowered/**/*_test.js")
    .mocha({ reporter: "spec" })
}


```

# License

Licensed under the [MIT](http://twada.mit-license.org/) license.
