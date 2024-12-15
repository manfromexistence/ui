"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modify2 = _interopRequireDefault(require("./modify.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

var _COMMON = require("./COMMON.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 */
var ignore = function ignore(oldRules, id) {
  var _modify = (0, _modify2["default"])(oldRules, id, {}),
      freshRules = _modify.freshRules,
      freshNode = _modify.freshNode; // blank change to get the `freshNode`


  var content = stringifyAndHandleComments([freshNode]);

  for (var key in freshNode) {
    delete freshNode[key];
  }

  Object.assign(freshNode, {
    type: _COMMON.COMMENT,
    prefix: '',
    hasSlashEnd: true,
    content: content
  });
  return (0, _stringify["default"])(freshRules);
};
/**
 *
 */


var stringifyAndHandleComments = function stringifyAndHandleComments(kids) {
  return flatten(kids).join('');
};
/**
 *
 */


var flatten = function flatten(kids) {
  var accumulator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _iterator = _createForOfIteratorHelper(kids),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      switch (item.type) {
        case _COMMON.ATRULE:
        case _COMMON.RULE:
          accumulator.push(handleInlineComments(item.selector) + (item.hasBraceBegin ? '{' : ''));

          if (item.kids && item.kids.length) {
            flatten(item.kids, accumulator);
          }

          accumulator.push((item.hasBraceEnd ? '}' : '') + (item.hasSemicolon ? ';' : ''));
          break;

        case _COMMON.DECLARATION:
          accumulator.push(handleInlineComments(item.property) + (item.hasColon ? ':' : '') + handleInlineComments(item.value) + (item.hasSemicolon ? ';' : ''));
          break;

        case _COMMON.COMMENT:
          accumulator.push(item.prefix + _COMMON.SLASH_SUBSTITUTE + '*' + item.content + (item.hasSlashEnd ? '*' + _COMMON.SLASH_SUBSTITUTE : ''));
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
/**
 *
 */


var handleInlineComments = function handleInlineComments(blob) {
  return blob.split('/*').join(_COMMON.SLASH_SUBSTITUTE + '*').split('*/').join('*' + _COMMON.SLASH_SUBSTITUTE);
};

var _default = ignore;
exports["default"] = _default;