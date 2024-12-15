"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _COMMON = require("./COMMON.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var MAX_CHARS = 32; // how many characters to use as identifier. Protects against giant base64.

/**
 *
 */

var identify = function identify(list) {
  var usedIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _iterator = _createForOfIteratorHelper(list),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var id = void 0;

      switch (item.type) {
        case _COMMON.ATRULE:
        case _COMMON.RULE:
          id = item.selector.trim() + (item.hasBraceBegin ? '{' : '') + (item.hasSemicolon ? ';' : '');
          break;

        case _COMMON.DECLARATION:
          id = item.property.trim() + (item.hasColon ? ':' : '') + item.value.substr(0, MAX_CHARS) + (item.hasSemicolon ? ';' : '');
          break;

        case _COMMON.COMMENT:
          id = '/*' + item.content.substr(0, MAX_CHARS) + '*/';
          break;

        default: // nothing

      }

      if (id in usedIds) {
        usedIds[id]++;
        item.id = id + usedIds[id];
      } else {
        usedIds[id] = 1;
        item.id = id;
      }

      if (item.kids && item.kids.length) {
        identify(item.kids, usedIds);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var _default = identify;
exports["default"] = _default;