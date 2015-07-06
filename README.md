<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

> [power-assert](https://github.com/power-assert-js/power-assert) plugin for [Fly][fly].
>
[![][fly-badge]][fly] ![][mit-badge]


## Usage
### Install

```
npm install --save-dev fly-espower
```

### Example

```javascript
exports.espower = function* () {
  yield this
    .source("test/**/*_test.js")
    .espower({/* options */})
    .target("espowered/")
}
exports.test = function* () {
  yield this
    .source("espowered/**/*_test.js")
    .mocha({ reporter: "spec" })
}
```

To learn about what options are available, check out the [espower documentation](https://github.com/power-assert-js/espower#options)

# License

[MIT](http://opensource.org/licenses/MIT) © [Takuto Wada][author]


[author]: https://github.com/twada

[fly]: https://www.github.com/flyjs/fly

[fly-badge]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
