"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _COMMON = require("./COMMON");

var _clean = _interopRequireDefault(require("./clean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 */
var prettify = function prettify(kids) {
  return flatten(kids).join('');
};
/**
 *
 */


var flatten = function flatten(kids) {
  var accumulator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var indent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var _iterator = _createForOfIteratorHelper(kids),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      switch (item.type) {
        case _COMMON.ATRULE:
        case _COMMON.RULE:
          var type = item.type,
              _kids = item.kids,
              selector = item.selector,
              hasBraceBegin = item.hasBraceBegin,
              hasBraceEnd = item.hasBraceEnd,
              hasSemicolon = item.hasSemicolon;

          if (!_kids.length && !selector.trim() && !hasBraceBegin && !hasBraceEnd && !hasSemicolon) {
            continue;
          }

          accumulator.push(indent + (0, _clean["default"])(selector) + ' {\r\n');

          if (_kids && _kids.length) {
            flatten(_kids, accumulator, indent + '    ');
          }

          if (type === _COMMON.ATRULE && !hasBraceBegin) {
            accumulator.push(';\r\n');
          } else {
            accumulator.push(indent + '}\r\n');
          }

          break;

        case _COMMON.DECLARATION:
          if (!item.hasColon && !item.property.trim()) {
            continue;
          }

          accumulator.push(indent + (0, _clean["default"])(item.property) + ': ' + (0, _clean["default"])(item.value) + ';\r\n');
          break;

        case _COMMON.COMMENT:
          accumulator.push(indent + '/*' + item.content + '*/\r\n');
          break;

        default: // nothing

      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return accumulator;
};

var _default = prettify;
exports["default"] = _default;