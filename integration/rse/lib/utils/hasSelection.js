"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 *
 */
var hasSelection = function hasSelection() {
  return !window.getSelection().isCollapsed;
};

var _default = hasSelection;
exports["default"] = _default;