"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
A tiny alternative to `classnames`, `clsx` and `obj-str`.
*/
var cls = function cls() {
  var o = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var k = _args[_i];
    k && o.push(k);
  }

  return o.join(' ') || null;
};

var _default = cls;
exports["default"] = _default;