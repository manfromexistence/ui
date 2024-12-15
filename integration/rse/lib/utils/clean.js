"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var clean = function clean(blob) {
  return blob.trim().replace(/\s+/g, ' ');
};

var _default = clean;
exports["default"] = _default;