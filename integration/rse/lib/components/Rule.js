"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _COMMON = require("../utils/COMMON");

var _cls = _interopRequireDefault(require("../utils/cls"));

var _Comment = _interopRequireDefault(require("./Comment"));

var _Declaration = _interopRequireDefault(require("./Declaration"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _stylize = _interopRequireDefault(require("../utils/stylize"));

var _clean = _interopRequireDefault(require("../utils/clean"));

var _Area = _interopRequireDefault(require("./Area"));

var _Alert = _interopRequireDefault(require("./Alert"));

var _hasSelection = _interopRequireDefault(require("../utils/hasSelection"));

var _typeToComponent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
var classes = (0, _stylize["default"])('Rule', {
  root: {// background: 'lime',
  },
  header: {
    padding: '2px 0'
  },
  selector: {
    color: 'black',
    cursor: 'text',
    borderBottom: '1px dashed transparent',
    '&:hover': {
      borderBottomColor: 'currentColor'
    }
  },
  block: {
    marginLeft: 16,
    whiteSpace: 'nowrap'
  },
  blockIsTop: {
    marginLeft: 4
  },
  footer: {
    marginBottom: 4
  },
  isEmpty: {
    padding: '0 6px',
    background: '#eee',
    '&:hover': {
      background: '#ddd'
    }
  },
  isInvalid: {
    textDecoration: 'line-through',
    textDecorationColor: '#939395'
  }
}); // =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================

var Rule = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Rule, _React$PureComponent);

  var _super = _createSuper(Rule);

  function Rule() {
    var _this;

    _classCallCheck(this, Rule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isEditingSelector: false,
      isEditingBefore: false,
      isEditingAfterBegin: false,
      isEditingAfter: false
    });

    _defineProperty(_assertThisInitialized(_this), "renderArea", function (payloadProperty) {
      var _this$props = _this.props,
          id = _this$props.id,
          onEditChange = _this$props.onEditChange;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        tick: 1
      }), /*#__PURE__*/_react["default"].createElement(_Area["default"], {
        defaultValue: '',
        id: id,
        payloadProperty: payloadProperty,
        onChange: onEditChange,
        onBlur: _this.onAreaBlur
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectorClick", function (event) {
      if ((0, _hasSelection["default"])()) return;
      event.stopPropagation();

      _this.setState({
        isEditingSelector: true
      });

      _this.props.onEditBegin();
    });

    _defineProperty(_assertThisInitialized(_this), "onBraceClick", function (event) {
      if ((0, _hasSelection["default"])()) return;
      event.stopPropagation();

      _this.setState({
        isEditingBefore: true
      });

      _this.props.onEditBegin();
    });

    _defineProperty(_assertThisInitialized(_this), "onHeaderClick", function (event) {
      if ((0, _hasSelection["default"])()) return;
      event.stopPropagation();

      if (_this.props.hasBraceBegin) {
        _this.setState({
          isEditingAfterBegin: true
        });
      } else {
        _this.setState({
          isEditingAfter: true
        });
      }

      _this.props.onEditBegin();
    });

    _defineProperty(_assertThisInitialized(_this), "onFooterClick", function (event) {
      if ((0, _hasSelection["default"])()) return;
      event.stopPropagation();

      _this.setState({
        isEditingAfter: true
      });

      _this.props.onEditBegin();
    });

    _defineProperty(_assertThisInitialized(_this), "onAreaBlur", function (id, payload) {
      _this.setState({
        isEditingSelector: false,
        isEditingBefore: false,
        isEditingAfterBegin: false,
        isEditingAfter: false
      });

      _this.props.onEditEnd(id, payload);
    });

    return _this;
  }

  _createClass(Rule, [{
    key: "render",
    value:
    /**
     *
     */
    function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          selector = _this$props2.selector,
          hasBraceBegin = _this$props2.hasBraceBegin,
          hasBraceEnd = _this$props2.hasBraceEnd,
          hasSemicolon = _this$props2.hasSemicolon,
          kids = _this$props2.kids,
          isTop = _this$props2.isTop,
          onEditBegin = _this$props2.onEditBegin,
          onEditChange = _this$props2.onEditChange,
          onEditEnd = _this$props2.onEditEnd,
          onTick = _this$props2.onTick,
          isValid = _this$props2.isValid;
      var _this$state = this.state,
          isEditingSelector = _this$state.isEditingSelector,
          isEditingBefore = _this$state.isEditingBefore,
          isEditingAfterBegin = _this$state.isEditingAfterBegin,
          isEditingAfter = _this$state.isEditingAfter;

      if (!kids.length && !selector.trim() && !hasBraceBegin && !hasBraceEnd && !hasSemicolon) {
        return null;
      }

      var cleanSelector = (0, _clean["default"])(selector);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, isEditingBefore && this.renderArea(_COMMON.BEFORE), !isTop && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.header,
        onClick: this.onHeaderClick
      }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        id: id,
        tick: 1,
        onTick: onTick
      }), isEditingSelector ? /*#__PURE__*/_react["default"].createElement(_Area["default"], {
        defaultValue: selector.trim(),
        id: id,
        payloadProperty: 'selector',
        onChange: onEditChange,
        onBlur: this.onAreaBlur
      }) : /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _cls["default"])(classes.selector, !cleanSelector && classes.isEmpty, !isValid && classes.isInvalid),
        onClick: this.onSelectorClick
      }, cleanSelector), !isValid && /*#__PURE__*/_react["default"].createElement(_Alert["default"], null), !hasSemicolon && /*#__PURE__*/_react["default"].createElement("span", {
        onClick: this.onBraceClick
      }, ' {')), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cls["default"])(classes.block, isTop && classes.blockIsTop)
      }, isEditingAfterBegin && this.renderArea(_COMMON.AFTER_BEGIN), kids.map(function (item) {
        var Component = typeToComponent[item.type];
        return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, item, {
          key: item.id,
          onEditBegin: onEditBegin,
          onEditChange: onEditChange,
          onEditEnd: onEditEnd,
          onTick: onTick
        }));
      })), !isTop && !hasSemicolon && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.footer,
        onClick: this.onFooterClick
      }, '}'), isEditingAfter && this.renderArea(_COMMON.AFTER));
    }
    /**
     *
     */

  }]);

  return Rule;
}(_react["default"].PureComponent); // =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================


var typeToComponent = (_typeToComponent = {}, _defineProperty(_typeToComponent, _COMMON.ATRULE, Rule), _defineProperty(_typeToComponent, _COMMON.RULE, Rule), _defineProperty(_typeToComponent, _COMMON.DECLARATION, _Declaration["default"]), _defineProperty(_typeToComponent, _COMMON.COMMENT, _Comment["default"]), _typeToComponent);
var _default = Rule;
exports["default"] = _default;