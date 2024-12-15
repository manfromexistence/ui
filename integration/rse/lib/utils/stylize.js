"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.releaseStyling = exports.prepareStyling = exports["default"] = void 0;

/*
A quick-and-dirty simulation of JSS.
*/
var PREFIX = 'rse';
var SEPARATOR = '-';

var dashConverter = function dashConverter(match) {
  return '-' + match.toLowerCase();
};

var registry = {};
var cssCollection = [];
var style = document.createElement('style');
var count = 0;
/**
 *
 */

var stylize = function stylize(name, classes) {
  var output = {};
  var css = collect(name, classes, output);
  var index = registry[name];

  if (index === undefined) {
    registry[name] = cssCollection.push(css) - 1;
  } else {
    cssCollection[index] = css;
  }

  return output;
};
/**
 *
 */


var collect = function collect(name, classes) {
  var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var css = '';

  for (var selector in classes) {
    var block = classes[selector];
    var className = PREFIX + SEPARATOR + name + SEPARATOR + selector;
    css += '.' + className + '{\r\n';
    var nested = {};

    for (var property in block) {
      var value = block[property];

      if (property.indexOf('&') >= 0) {
        // this is in fact a nested selector, not a declaration
        var resolved = property.replace(/&/g, selector);
        nested[resolved] = value;
        continue;
      }

      var cssProperty = property.replace(/([A-Z])/g, dashConverter);
      var cssValue = value + (typeof value === 'number' ? 'px' : '');
      css += ' ' + cssProperty + ':' + cssValue + ';\r\n';
    }

    css += '}\r\n';

    if (Object.keys(nested).length) {
      css += collect(name, nested);
    }

    accumulator[selector] = className;
  }

  return css;
};
/**
 *
 */


var prepareStyling = function prepareStyling() {
  count++;

  if (count === 1) {
    // TODO: study impact on hot loading
    style.innerHTML = cssCollection.join('');
    document.head.appendChild(style);
  }
};
/**
 *
 */


exports.prepareStyling = prepareStyling;

var releaseStyling = function releaseStyling() {
  count--;

  if (count === 0) {
    document.head.removeChild(style);
    style.innerHTML = '';
  }
};

exports.releaseStyling = releaseStyling;
var _default = stylize;
exports["default"] = _default;