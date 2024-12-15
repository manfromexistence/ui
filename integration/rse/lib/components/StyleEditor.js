"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Rule = _interopRequireDefault(require("./Rule"));

var _Area = _interopRequireDefault(require("./Area"));

var _COMMON = require("../utils/COMMON");

var _stylize = _interopRequireWildcard(require("../utils/stylize"));

var _analyze = _interopRequireDefault(require("../utils/analyze"));

var _modify2 = _interopRequireDefault(require("../utils/modify"));

var _stringify = _interopRequireDefault(require("../utils/stringify"));

var _prettify = _interopRequireDefault(require("../utils/prettify"));

var _ignore = _interopRequireDefault(require("../utils/ignore"));

var _unignore = _interopRequireDefault(require("../utils/unignore"));

var _cls = _interopRequireDefault(require("../utils/cls"));

var _hasSelection = _interopRequireDefault(require("../utils/hasSelection"));

var _excluded = ["value", "className", "readOnly"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// =====================================================================================================================
//  D E C L A R A T I O N S
// =====================================================================================================================
var classes = (0, _stylize["default"])('StyleEditor', {
  root: {
    fontFamily: 'Consolas, Liberation Mono, Menlo, monospace',
    // GitHub
    fontSize: '12px',
    // Chrome
    textAlign: 'left',
    overflow: 'auto',
    color: 'black',
    position: 'relative',
    cursor: 'default',
    boxSizing: 'border-box',
    border: 'solid 1px silver',
    padding: 4,
    '& *': {
      boxSizing: 'border-box'
    }
  },
  isEmpty: {
    minHeight: 20,
    cursor: 'text',
    background: '#eee',
    '&:hover': {
      background: '#ddd'
    }
  },
  isLocked: {
    '& *': {
      pointerEvents: 'none'
    }
  }
});
var hasControlledWarning = false; // =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================

var StyleEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(StyleEditor, _React$Component);

  var _super = _createSuper(StyleEditor);

  // Private variables:
  // a simulation of `memoize-one`
  // a simulation of `memoize-one`

  /**
   *
   */
  function StyleEditor(props) {
    var _this;

    _classCallCheck(this, StyleEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "currentRules", []);

    _defineProperty(_assertThisInitialized(_this), "memoRules", _this.currentRules);

    _defineProperty(_assertThisInitialized(_this), "memoCSS", '');

    _defineProperty(_assertThisInitialized(_this), "isControlled", false);

    _defineProperty(_assertThisInitialized(_this), "computeRules", function (css) {
      if (_this.memoCSS === css) {
        return _this.memoRules;
      }

      var rules = (0, _analyze["default"])(css);
      _this.memoCSS = css;
      _this.memoRules = rules;
      return rules;
    });

    _defineProperty(_assertThisInitialized(_this), "onEditBegin", function () {
      _this.setState({
        isEditing: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onEditChange", function (id, payload) {
      var onChange = _this.props.onChange;

      if (onChange) {
        var freshBlob = computeBlobFromPayload(_this.currentRules, id, payload);

        _this.announceOnChange(freshBlob);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "announceOnChange", function (rulesOrBlob) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          outputFormats = _this$props.outputFormats;

      if (onChange) {
        var rules = typeof rulesOrBlob === 'string' ? null : rulesOrBlob; // null means lazy initialization

        var formats = outputFormats.replace(/\s/g, '').split(',');
        var output = [];

        var _iterator = _createForOfIteratorHelper(formats),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var format = _step.value;

            switch (format) {
              case 'preserved':
                if (rules) {
                  output.push((0, _stringify["default"])(rulesOrBlob));
                } else {
                  output.push(rulesOrBlob);
                }

                break;

              case 'machine':
                if (!rules) {
                  rules = _this.computeRules(rulesOrBlob);
                }

                output.push(JSON.parse(JSON.stringify(rules))); // TODO: use something faster

                break;

              case 'pretty':
              default:
                if (!rules) {
                  rules = _this.computeRules(rulesOrBlob);
                }

                output.push((0, _prettify["default"])(rules));
                break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        onChange(output.length > 1 ? output : output[0] || '');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEditEnd", function (id, payload) {
      if (_this.isControlled) {
        _this.setState({
          isEditing: false
        }); // there's no need to do anything else. Our parent already has the payload from the onChange event

      } else {
        // uncontrolled
        _this.setState({
          isEditing: false,
          internalValue: computeBlobFromPayload(_this.currentRules, id, payload)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTick", function (id, desiredTick) {
      var freshBlob = desiredTick ? (0, _unignore["default"])(_this.currentRules, id) : (0, _ignore["default"])(_this.currentRules, id);

      _this.announceOnChange(freshBlob);

      if (!_this.isControlled) {
        _this.setState({
          internalValue: freshBlob
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCopy", function (event) {
      if ((0, _hasSelection["default"])()) return;
      var blob = (0, _prettify["default"])(_this.currentRules);
      event.nativeEvent.clipboardData.setData('text/plain', blob);
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      if ((0, _hasSelection["default"])()) return;

      _this.setState({
        isEditing: true,
        hasArea: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAreaChange", function (id, payload) {
      var onChange = _this.props.onChange;

      if (onChange) {
        _this.announceOnChange(payload.selector);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAreaBlur", function (id, payload) {
      if (_this.isControlled) {
        _this.setState({
          isEditing: false,
          hasArea: false
        }); // there's no need to do anything else. Our parent already has the payload from the onChange event

      } else {
        // uncontrolled
        _this.setState({
          isEditing: false,
          hasArea: false,
          internalValue: payload.selector
        });
      }
    });

    (0, _stylize.prepareStyling)();
    _this.state = {
      isEditing: false,
      hasArea: false,
      internalValue: props.defaultValue
    };
    return _this;
  }
  /**
   *
   */


  _createClass(StyleEditor, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          className = _this$props2.className,
          readOnly = _this$props2.readOnly,
          other = _objectWithoutProperties(_this$props2, _excluded);

      var _this$state = this.state,
          isEditing = _this$state.isEditing,
          hasArea = _this$state.hasArea,
          internalValue = _this$state.internalValue;
      delete other.outputFormats; // not used in render

      this.isControlled = checkIsControlled(this.props);
      var usedValue = this.isControlled ? value : internalValue;
      this.currentRules = typeof usedValue === 'string' ? this.computeRules(usedValue) : usedValue;
      var isEmpty = !this.currentRules.length;
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        onCopy: this.onCopy,
        onClick: isEmpty ? this.onClick : null
      }, other, {
        className: (0, _cls["default"])(classes.root, isEmpty && !hasArea && classes.isEmpty, (isEditing || readOnly) && classes.isLocked, className)
      }), !isEmpty && /*#__PURE__*/_react["default"].createElement(_Rule["default"], {
        selector: 'root',
        kids: this.currentRules,
        isTop: true,
        onEditBegin: this.onEditBegin,
        onEditChange: this.onEditChange,
        onEditEnd: this.onEditEnd,
        onTick: this.onTick
      }), hasArea && /*#__PURE__*/_react["default"].createElement(_Area["default"], {
        id: null,
        defaultValue: '',
        payloadProperty: 'selector',
        onChange: this.onAreaChange,
        onBlur: this.onAreaBlur
      }));
    }
    /**
     *
     */
    // componentDidMount() {
    //     this.announceOnChange(this.currentRules);
    // }

    /**
     * Under no circumstances do we allow updates while an edit is on-going.
     * Alas, because of this small restriction, we had to quit using PureComponent and had to duplicate its
     * functionality by manually checking if values have actually changed.
     */

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      if (this.state.isEditing) {
        return nextState.isEditing === false; // allow updates only in order to exit editing mode
      }

      for (var key in nextProps) {
        if (this.props[key] !== nextProps[key]) {
          if (key !== 'defaultValue') {
            // we're ignoring changes to defaultValue
            return true;
          }
        }
      }

      for (var _key in nextState) {
        if (this.state[_key] !== nextState[_key]) {
          return true;
        }
      }

      return false;
    }
    /**
     *
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _stylize.releaseStyling)();
    }
    /**
     *
     */

  }]);

  return StyleEditor;
}(_react["default"].Component); // =====================================================================================================================
//  H E L P E R S
// =====================================================================================================================

/**
 *
 */


var checkIsControlled = function checkIsControlled(props) {
  if (props.value !== undefined) {
    if (!props.onChange && !props.readOnly && !hasControlledWarning) {
      hasControlledWarning = true;

      if (window.console && window.console.warn) {
        console.warn('You provided a `value` prop to StyleEditor without an `onChange` handler. ' + 'This will render a read-only field. If the StyleEditor should be mutable, use `defaultValue`. ' + 'Otherwise, set either `onChange` or `readOnly`.');
      }
    }

    return true;
  } else {
    return false;
  }
};
/**
 *
 */


var computeBlobFromPayload = function computeBlobFromPayload(rules, id, payload) {
  // Without deep-cloning, writing inside #foo{} produces: #foo{c;} #foo{co;c;} #foo{col;co;c;} etc.
  // TODO: find a better way
  var rulesDeepClone = JSON.parse(JSON.stringify(rules));

  var _modify = (0, _modify2["default"])(rulesDeepClone, id, payload),
      freshRules = _modify.freshRules,
      freshNode = _modify.freshNode,
      parentNode = _modify.parentNode;

  if (payload[_COMMON.AFTER_BEGIN]) {
    // can only be dispatched by AT/RULE
    var node = createTemporaryDeclaration(payload[_COMMON.AFTER_BEGIN]);
    freshNode.kids.unshift(node);
  } else if (payload[_COMMON.BEFORE]) {
    // can only be dispatched by AT/RULE and can only create AT/RULE
    var _node = createTemporaryRule(payload[_COMMON.BEFORE]);

    var siblings = parentNode.kids;
    var index = siblings.findIndex(function (item) {
      return item.id === id;
    });
    siblings.splice(index, 0, _node);
  } else if (payload[_COMMON.AFTER]) {
    // can be dispatched by any type of node
    var text = payload[_COMMON.AFTER];

    var _node2;

    switch (freshNode.type // freshNode is in fact the anchor node, NOT the node we're about to create
    ) {
      case _COMMON.ATRULE:
        if (freshNode.hasBraceBegin && !freshNode.hasBraceEnd) {
          text = '}' + text;
        } else if (!freshNode.hasSemicolon) {
          text = ';' + text;
        }

        _node2 = createTemporaryRule(text);
        break;

      case _COMMON.RULE:
        if (!freshNode.hasBraceEnd) {
          text = '}' + text;
        }

        _node2 = createTemporaryRule(text);
        break;

      case _COMMON.DECLARATION:
        if (!freshNode.hasSemicolon) {
          text = ';' + text;
        }

        _node2 = createTemporaryDeclaration(text);
        break;

      case _COMMON.COMMENT:
        if (!freshNode.hasSlashEnd) {
          text = '*/' + text;
        }

        if (parentNode.type === _COMMON.ATRULE) {
          _node2 = createTemporaryRule(text);
        } else {
          _node2 = createTemporaryDeclaration(text);
        }

        break;

      default: // nothing

    }

    var _siblings = parentNode.kids;

    var _index = _siblings.findIndex(function (item) {
      return item.id === id;
    });

    _siblings.splice(_index + 1, 0, _node2);
  } else if (payload.value) {
    freshNode.hasColon = true;
  }

  return (0, _stringify["default"])(freshRules);
};
/**
 *
 */


var createTemporaryDeclaration = function createTemporaryDeclaration(text) {
  if (!text.match(/;\s*$/)) {
    // doesn't end with semicolon
    text += ';'; // close it
  }

  return {
    type: _COMMON.DECLARATION,
    property: text,
    value: ''
  };
};
/**
 *
 */


var createTemporaryRule = function createTemporaryRule(text) {
  if (text.match(/^\s*@/)) {
    // ATRULE
    if (!text.match(/[{};]/)) {
      // doesn't contain braces or semicolons
      text += ';'; // close it. We assume this is not a nested ATRULE
    }
  } else {
    // RULE
    if (!text.match(/[{}]/)) {
      // doesn't contain braces
      text += '{}'; // close it
    }
  }

  return {
    type: _COMMON.RULE,
    selector: text
  };
}; // =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================


StyleEditor.defaultProps = {
  outputFormats: 'pretty',
  onChange: null,
  defaultValue: '',
  value: undefined,
  readOnly: false
};
var _default = StyleEditor;
exports["default"] = _default;