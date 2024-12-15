"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _COMMON = require("./COMMON.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Fences:
var BRACES = 'braces';
var BRACKETS = 'brackets';
var PARENTHESIS = 'parenthesis'; // The following at-rules are special because they only accept DECLARATIONS as kids (just like a RULE).
// Normally, we should have had a type for each of the 18 at-rules. However, to simplify things, we chose to convert
// the following 3 at-rules from ATRULE to RULE:

var SPECIAL_ATRULES = ['@page', '@font-face', '@viewport']; // Constants used for the base64 replacements.

var BASE64 = ';base64,';
var BASE64_TEMP = BASE64 + '0'; // Global variables (to avoid passing them back and forth):

var info; // state information. Mostly flags that track delimiters.

var model; // the current model

var ancestors; // the list of parents of the current model

var declarations; // the list of all declarations, to help base64 replacements

/**
 *
 */

var parse = function parse(blob) {
  if (!blob || typeof blob !== 'string') {
    return [];
  } // Initialize global variables:


  info = {};
  resetInfo();
  ancestors = [];
  declarations = []; // The whole stylesheet simulates the ruleset block of a dummy ATRULE:

  var root = model = {
    type: _COMMON.ATRULE,
    hasBraceBegin: true,
    // the stylesheet started without any `{` because this is a simulated ATRULE
    kids: [] // these kids will be the output of `parse()`

  }; // Local variables:

  var len = blob.length;
  var chunk = '';
  var hiddenBase64 = []; // The GIANT loop:

  for (var i = 0; i < len; i++) {
    var c = blob.charAt(i);

    switch (c) {
      case '{':
        // -------------------- B R A C E   B E G I N ----------------------------------------------------
        if (isTokenPrevented()) {
          addFence(BRACES);
          chunk += c;
        } else {
          switch (model.type) {
            case _COMMON.ATRULE:
              if (model.hasBraceBegin) {
                // we're inside the ATRULE's body
                addRule(); // model is now a RULE

                model.selector = chunk;
                model.hasBraceBegin = true;
                chunk = '';
              } else {
                // we're inside the ATRULE's selector
                model.selector = chunk;
                model.hasBraceBegin = true;
                chunk = '';
                attemptConversionToRule();
              }

              break;

            case _COMMON.RULE:
              if (model.hasBraceBegin) {
                // we're inside the RULE's body
                addDeclaration(); // although this is an invalid declaration, we still add it

                chunk += c;
                addFence(BRACES);
              } else {
                // we're inside the RULE's selector
                model.selector = chunk;
                model.hasBraceBegin = true;
                chunk = '';
              }

              break;

            case _COMMON.DECLARATION:
              addFence(BRACES);
              chunk += c;
              break;

            default:
              // COMMENT
              chunk += c;
          }
        }

        break;

      case '}':
        // -------------------- B R A C E   E N D --------------------------------------------------------
        if (isTokenPrevented()) {
          removeFence(BRACES);
          chunk += c;
        } else {
          switch (model.type) {
            case _COMMON.ATRULE:
              if (model === root) {
                // the root is special because it cannot be closed with a brace
                addRule(); // yes, although this is an ending, we're actually beginning a new RULE

                chunk += c; // the selector will contain this ending brace
              } else {
                // normal ATRULE
                if (model.hasBraceBegin) {
                  // root
                  if (chunk) {
                    addRule();
                    model.selector = chunk;
                    goBack();
                  }

                  model.hasBraceEnd = true;
                  goBack();
                  chunk = '';
                } else {
                  // we're still inside the atrule's selector
                  removeFence(BRACES);
                  chunk += c;
                }
              }

              break;

            case _COMMON.RULE:
              if (model.hasBraceBegin) {
                // inside the rule's block. About to get closed.
                if (chunk) {
                  addDeclaration();
                  model.property = chunk;
                  goBack();
                }

                model.hasBraceEnd = true;
                goBack();
                chunk = '';
              } else {
                // inside the rule's selector
                removeFence(BRACES);
                chunk += c;
              }

              break;

            case _COMMON.DECLARATION:
              if (model.hasColon) {
                model.value = chunk;
              } else {
                model.property = chunk;
              }

              goBack();
              model.hasBraceEnd = true;
              goBack();
              chunk = '';
              break;

            default:
              // DECLARATION, COMMENT
              chunk += c;
          }
        }

        break;

      case '[':
        // -------------------- B R A C K E T   B E G I N ------------------------------------------------
        chunk += c; // we're accepting this character no matter what

        handleNormalCharacter(); // maybe this character creates a new model

        addFence(BRACKETS);
        break;

      case ']':
        // -------------------- B R A C K E T   E N D ----------------------------------------------------
        chunk += c; // we're accepting this character no matter what

        handleNormalCharacter(); // maybe this character creates a new model

        removeFence(BRACKETS);
        break;

      case '(':
        // -------------------- P A R E N T H E S I S   B E G I N ----------------------------------------
        chunk += c; // we're accepting this character no matter what

        handleNormalCharacter(); // maybe this character creates a new model

        addFence(PARENTHESIS);
        break;

      case ')':
        // -------------------- P A R E N T H E S I S   E N D --------------------------------------------
        chunk += c; // we're accepting this character no matter what

        handleNormalCharacter(); // maybe this character creates a new model

        removeFence(PARENTHESIS);
        break;

      case "'":
        // -------------------- S I N G L E   Q U O T E S ------------------------------------------------
        chunk += c; // we're accepting this character no matter what

        if (!info.comment && !info.doubleQuotes) {
          // single quotes are allowed
          if (!info.singleQuotes) {
            // this is an opening
            handleNormalCharacter(); // maybe this character creates a new model

            info.singleQuotes = true; // must be after any potential new model because of `resetInfo`
          } else {
            // this is a closure
            info.singleQuotes = false;
          }
        }

        break;

      case '"':
        // -------------------- D O U B L E   Q U O T E S -------------------------------------------------
        chunk += c; // we're accepting this character no matter what

        if (!info.comment && !info.singleQuotes) {
          // double quotes are allowed
          if (!info.doubleQuotes) {
            // this is an opening
            handleNormalCharacter(); // maybe this character creates a new model

            info.doubleQuotes = true; // must be after any potential new model because of `resetInfo`
          } else {
            // this is a closure
            info.doubleQuotes = false;
          }
        }

        break;

      case '@':
        // -------------------- A T ----------------------------------------------------------------------
        if (isTokenPrevented()) {
          chunk += c;
        } else {
          switch (model.type) {
            case _COMMON.ATRULE:
              if (model.hasBraceBegin) {
                // inside the atrule's block
                addAtrule();
                chunk += c;
              } else {
                // inside the atrule's selector
                chunk += c;
              }

              break;

            case _COMMON.RULE:
              if (model.hasBraceBegin) {
                // inside the rule's block
                addDeclaration();
                chunk += c;
              } else {
                // inside the rule's selector
                chunk += c;
              }

              break;

            default:
              // DECLARATION, COMMENT
              chunk += c;
          }
        }

        break;

      case ';':
        // -------------------- S E M I C O L O N --------------------------------------------------------
        if (isTokenPrevented()) {
          if (blob.substr(i, 8) === BASE64) {
            var base64EndingIndex = blob.indexOf(')', i + 8) - 1;
            var base64EndingChar = blob.charAt(base64EndingIndex);

            if (base64EndingChar === '"' || base64EndingChar === "'") {
              base64EndingIndex--;
            }

            hiddenBase64.push(blob.substring(i, base64EndingIndex + 1));
            i += base64EndingIndex - i;
            chunk += BASE64_TEMP;
          } else {
            chunk += c;
          }
        } else {
          switch (model.type) {
            case _COMMON.ATRULE:
              if (model.hasBraceBegin) {
                addRule();
                chunk += c;
              } else {
                // we're still inside the atrule's selector
                model.selector = chunk;
                model.hasSemicolon = true; // the current ATRULE has ended

                goBack();
                chunk = '';
              }

              break;

            case _COMMON.RULE:
              if (model.hasBraceBegin) {
                addDeclaration();
                model.property = chunk;
                model.hasSemicolon = true; // the newly created DECLARATION has ended

                goBack(); // model is again a RULE

                chunk = '';
              } else {
                // we're still inside the rule's selector
                chunk += c;
              }

              break;

            case _COMMON.DECLARATION:
              if (model.hasColon) {
                model.value = chunk;
              } else {
                model.property = chunk;
              }

              model.hasSemicolon = true;
              goBack();
              chunk = '';
              break;

            default:
              // COMMENT
              chunk += c;
          }
        }

        break;

      case ':':
        // -------------------- C O L O N ----------------------------------------------------------------
        if (isTokenPrevented()) {
          chunk += c;
        } else {
          switch (model.type) {
            case _COMMON.ATRULE:
              if (model.hasBraceBegin) {
                addRule();
              }

              chunk += c;
              break;

            case _COMMON.RULE:
              if (model.hasBraceBegin) {
                addDeclaration();
                model.property = chunk;
                model.hasColon = true;
                chunk = '';
              } else {
                // we're still inside the rule's selector
                chunk += c;
              }

              break;

            case _COMMON.DECLARATION:
              if (model.hasColon) {
                chunk += c;
              } else {
                model.property = chunk;
                chunk = '';
                model.hasColon = true;
              }

              break;

            default:
              // COMMENT
              chunk += c;
          }
        }

        break;

      case '\\':
        // -------------------- B A C K S L A S H -------------------------------------------------------
        i++;
        chunk += c + blob.charAt(i);
        handleNormalCharacter();
        break;

      case ' ': // -------------------- W H I T E S P A C E ------------------------------------------------------

      case '\r':
      case '\n':
      case '\t':
        chunk += c;
        break;

      case '/':
        // -------------------- S L A S H ----------------------------------------------------------------
        if (info.singleQuotes || info.doubleQuotes) {
          // cannot comment inside quotes
          chunk += c;
          handleNormalCharacter();
        } else if (!info.comment && blob.charAt(i + 1) === '*') {
          // a comment starts
          i++; // jump over the next star character

          if (model.hasBraceBegin) {
            // we're inside ATRULE/RULE, so this is a block comment
            addComment();
            model.prefix = chunk;
            chunk = '';
          } else {
            // inline comment
            chunk += '/*';
          }

          info.comment = true;
        } else if (info.comment && blob.charAt(i - 1) === '*') {
          // a comment ends
          if (model.type === _COMMON.COMMENT) {
            // block comment is ending
            model.content = chunk.slice(0, -1); // remove the already added star

            model.hasSlashEnd = true;
            goBack();
            chunk = '';
          } else {
            // inline comment is ending
            chunk += c;
            info.comment = false;
          }
        } else {
          chunk += c;
          handleNormalCharacter();
        }

        break;

      default:
        // -------------------- N O R M A L   C H A R A C T E R -------------------------------------------
        chunk += c;
        handleNormalCharacter();
    }
  }

  if (chunk) {
    // Decide what to do with the current chunk:
    switch (model.type) {
      case _COMMON.ATRULE:
        if (model.hasBraceBegin) {
          addRule();
          model.selector = chunk;
        } else {
          model.selector = chunk;
        }

        break;

      case _COMMON.RULE:
        if (model.hasBraceBegin) {
          addDeclaration();
          model.property = chunk;
        } else {
          model.selector = chunk;
        }

        break;

      case _COMMON.DECLARATION:
        if (model.hasColon) {
          model.value = chunk;
        } else {
          model.property = chunk;
        }

        break;

      case _COMMON.COMMENT:
        model.content = chunk;
        break;

      default: // nothing

    }
  } // Restore base64


  if (hiddenBase64.length) {
    restoreBase64(root.kids, hiddenBase64);
  } // Release global variables


  info = null;
  model = null;
  ancestors = null;
  declarations = null;
  return root.kids;
};
/**
 *
 */


var add = function add(freshModel) {
  model.kids.push(freshModel);
  ancestors.push(model);
  resetInfo();
  model = freshModel;
};
/**
 *
 */


var addAtrule = function addAtrule() {
  add({
    type: _COMMON.ATRULE,
    selector: '',
    hasSemicolon: false,
    hasBraceBegin: false,
    hasBraceEnd: false,
    kids: []
  });
};
/**
 *
 */


var addRule = function addRule() {
  add({
    type: _COMMON.RULE,
    selector: '',
    hasBraceBegin: false,
    hasBraceEnd: false,
    kids: []
  });
};
/**
 *
 */


var addDeclaration = function addDeclaration() {
  var declaration = {
    type: _COMMON.DECLARATION,
    property: '',
    hasColon: false,
    value: '',
    hasSemicolon: false
  };
  declarations.push(declaration);
  add(declaration);
};
/**
 *
 */


var addComment = function addComment() {
  add({
    type: _COMMON.COMMENT,
    prefix: '',
    hasSlashEnd: false,
    content: ''
  });
};
/**
 *
 */


var goBack = function goBack() {
  model = ancestors.pop(); // go back 1 level

  resetInfo();
};
/**
 *
 */


var attemptConversionToRule = function attemptConversionToRule() {
  var _iterator = _createForOfIteratorHelper(SPECIAL_ATRULES),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var specialAtrule = _step.value;
      var trimmed = model.selector.trimLeft();

      if (trimmed.indexOf(specialAtrule) === 0) {
        model.type = _COMMON.RULE;
        delete model.hasSemicolon;
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


var resetInfo = function resetInfo() {
  info.singleQuotes = false;
  info.doubleQuotes = false;
  info.comment = false;
  info.fences = [];
};
/**
 *
 */


var isTokenPrevented = function isTokenPrevented() {
  return Boolean(info.fences.length) || info.singleQuotes || info.doubleQuotes || info.comment;
};
/**
 *
 */


var addFence = function addFence(fenceType) {
  if (!(info.singleQuotes || info.doubleQuotes || info.comment)) {
    info.fences.push(fenceType);
  }
};
/**
 *
 */


var removeFence = function removeFence(fenceType) {
  if (info.fences[info.fences.length - 1] === fenceType) {
    info.fences.pop();
  }
};
/**
 *
 */


var handleNormalCharacter = function handleNormalCharacter() {
  if (model.hasBraceBegin) {
    if (model.type === _COMMON.RULE) {
      addDeclaration();
    } else if (model.type === _COMMON.ATRULE) {
      addRule();
    }
  }
};
/**
 *
 */


var restoreBase64 = function restoreBase64(list, hiddenBase64) {
  var _iterator2 = _createForOfIteratorHelper(list),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;

      switch (item.type) {
        case _COMMON.ATRULE:
        case _COMMON.RULE:
          if (item.kids && item.kids.length && hiddenBase64.length) {
            restoreBase64(item.kids, hiddenBase64);
          }

          break;

        case _COMMON.DECLARATION:
          item.value = item.value.replace(BASE64_TEMP, function () {
            return hiddenBase64.shift();
          });
          break;

        case _COMMON.COMMENT:
          item.content = item.content.replace(BASE64_TEMP, function () {
            return hiddenBase64.shift();
          });
          break;

        default: // nothing

      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

var _default = parse;
exports["default"] = _default;