"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parse = _interopRequireDefault(require("./parse.js"));

var _validate = _interopRequireDefault(require("./validate.js"));

var _identify = _interopRequireDefault(require("./identify.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *
 */
var analyze = function analyze(css) {
  var rules = (0, _parse["default"])(css);
  (0, _validate["default"])(rules);
  (0, _identify["default"])(rules);
  return rules;
};

var _default = analyze;
exports["default"] = _default;