"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _COMMON = require("./COMMON.js");

var _modify2 = _interopRequireDefault(require("./modify.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 */
var unignore = function unignore(rules, id) {
  var _modify = (0, _modify2["default"])(rules, id, {}),
      freshRules = _modify.freshRules,
      freshNode = _modify.freshNode; // blank change to get the `freshNode`


  if (freshNode.type === _COMMON.COMMENT) {
    unignoreComment(freshNode);
  } else {
    unignoreKids(freshNode.kids);
  }

  return (0, _stringify["default"])(freshRules);
};
/**
 *
 */


var unignoreComment = function unignoreComment(node) {
  var prefix = node.prefix; // backup

  var content = node.content.split(_COMMON.SLASH_SUBSTITUTE + '*').join('/*').split('*' + _COMMON.SLASH_SUBSTITUTE).join('*/');

  for (var key in node) {
    delete node[key];
  }

  Object.assign(node, {
    type: _COMMON.RULE,
    // could also be ATRULE or DECLARATION, because it's just temporary
    selector: prefix + content
  });
};
/**
 *
 */


var unignoreKids = function unignoreKids(kids) {
  var _iterator = _createForOfIteratorHelper(kids),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (item.type === _COMMON.COMMENT) {
        unignoreComment(item);
      } else {
        if (item.kids && item.kids.length) {
          unignoreKids(item.kids);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var _default = unignore;
exports["default"] = _default;