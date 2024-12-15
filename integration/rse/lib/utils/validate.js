"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyPlayground = exports["default"] = void 0;

var _COMMON = require("./COMMON");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sheet;
var BASE64_TEMP = ';base64,0';
var base64Pattern = /;base64,[a-zA-Z/0-9+=]*/g;
/**
 *
 */

var validate = function validate(list) {
  sheet = sheet || createPlayground(); // lazy initialization

  validateRules(list, '', '', '');
  return list;
};
/**
 *
 */


var validateRules = function validateRules(list, parentPrefix, parentSuffix, parentFingerprint) {
  var _iterator = _createForOfIteratorHelper(list),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rule = _step.value;

      if (rule.type === _COMMON.COMMENT) {
        continue;
      }

      var adaptedSelector = rule.selector.split('&').join('#x'); // act as if `&` is valid

      var rulePrefix = parentPrefix + adaptedSelector + (rule.hasBraceBegin ? '{' : '');
      var ruleSuffix = (rule.hasBraceEnd ? '}' : '') + (rule.hasSemicolon ? ';' : '') + parentSuffix;
      var fingerprint = inAndOut(rulePrefix + ruleSuffix);

      if (fingerprint !== parentFingerprint) {
        // the browser accepted our rule
        rule.isValid = true;

        if (rule.kids.length) {
          if (rule.type === _COMMON.ATRULE) {
            validateRules(rule.kids, rulePrefix, ruleSuffix, fingerprint);
          } else {
            // RULE
            validateDeclarations(rule.kids, rulePrefix, ruleSuffix, fingerprint);
          }
        }
      } else {
        rule.isValid = false;

        if (rule.kids.length) {
          invalidateChildren(rule.kids);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
/**
 *
 */


var validateDeclarations = function validateDeclarations(list, parentPrefix, parentSuffix, parentFingerprint) {
  var fingerprint = parentFingerprint;
  var block = '';

  for (var i = list.length - 1; i >= 0; i--) {
    // we traverse backwards to detect overruled declarations
    var declaration = list[i];

    if (declaration.type === _COMMON.COMMENT) {
      continue;
    }

    block = (declaration.hasSemicolon ? ';' : '') + block;
    var safeDeclarationValue = declaration.value.replace(base64Pattern, BASE64_TEMP);
    block = declaration.property + (declaration.hasColon ? ':' : '') + safeDeclarationValue + block;
    var freshFingerprint = inAndOut(parentPrefix + block + parentSuffix);

    if (fingerprint !== freshFingerprint) {
      // the browser accepted our declaration
      declaration.isValid = true;
      fingerprint = freshFingerprint;
    } else {
      declaration.isValid = false;
    }
  }
};
/**
 *
 */


var invalidateChildren = function invalidateChildren(list) {
  var _iterator2 = _createForOfIteratorHelper(list),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;

      if (item.type === _COMMON.COMMENT) {
        continue;
      }

      item.isValid = false;
      var kids = item.kids;

      if (kids && kids.length) {
        invalidateChildren(kids);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
/**
 *
 */


var inAndOut = function inAndOut(blob) {
  var index;

  try {
    index = sheet.insertRule(blob);
  } catch (e) {// console.log(e);
  }

  if (index >= 0) {
    var fingerprint = sheet.cssRules[index].cssText;
    sheet.deleteRule(index);
    return fingerprint;
  }

  return '';
};
/**
 *
 * Note: DocumentFragment doesn't work because it doesn't compute styles.
 */


var createPlayground = function createPlayground() {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.head.appendChild(iframe);
  var iframeDocument = iframe.contentWindow.document;
  var style = iframeDocument.createElement('style');
  iframeDocument.head.appendChild(style); // Important: Since Chrome 80 (or so), we need to remove the iframe AFTER we added the style.

  document.head.removeChild(iframe);
  return style.sheet;
};
/**
 *
 */


var destroyPlayground = function destroyPlayground() {
  sheet = null;
};

exports.destroyPlayground = destroyPlayground;
var _default = validate;
exports["default"] = _default;