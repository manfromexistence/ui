"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _cls = _interopRequireDefault(require("../utils/cls"));

var _stylize = _interopRequireDefault(require("../utils/stylize"));

var _clean = _interopRequireDefault(require("../utils/clean"));

var _shorten = _interopRequireDefault(require("../utils/shorten"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _Area = _interopRequireDefault(require("./Area"));

var _COMMON = require("../utils/COMMON");

var _Alert = _interopRequireDefault(require("./Alert"));

var _hasSelection = _interopRequireDefault(require("../utils/hasSelection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var classes = (0, _stylize["default"])('Declaration', {
  root: {
    padding: '2px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  property: {
    color: 'rgb(0, 116, 232)',
    // Firefox
    cursor: 'text',
    borderBottom: '1px dashed transparent',
    '&:hover': {
      borderBottomColor: 'currentColor'
    }
  },
  value: {
    color: 'rgb(221, 0, 169)',
    // Firefox
    cursor: 'text',
    borderBottom: '1px dashed transparent',
    '&:hover': {
      borderBottomColor: 'currentColor'
    }
  },
  isEmpty: {
    padding: '0 6px',
    background: '#eee',
    '&:hover': {
      background: '#ddd'
    }
  },
  after: {
    marginTop: 6
  },
  isInvalid: {
    textDecoration: 'line-through',
    textDecorationColor: '#939395'
  }
});
var MAX_CHARS_VALUE = 32; // how many characters to display in the value. Protects against giant base64.

var MAX_CHARS_TITLE = 512; // how many characters to display in the tooltip. Protects against giant base64.
// =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================

var Declaration = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Declaration, _React$PureComponent);

  var _super = _createSuper(Declaration);

  function Declaration() {
    var _this;

    _classCallCheck(this, Declaration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isEditingProperty: false,
      isEditingValue: false,
      isEditingAfter: false
    });

    _defineProperty(_assertThisInitialized(_this), "renderArea", function (payloadProperty, defaultValue) {
      var _this$props = _this.props,
          id = _this$props.id,
          onEditChange = _this$props.onEditChange;
      return /*#__PURE__*/_react["default"].createElement(_Area["default"], {
        defaultValue: defaultValue.trim(),
        id: id,
        payloadProperty: payloadProperty,
        onChange: onEditChange,
        onBlur: _this.onAreaBlur
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDeclarationClick", function (event) {
      if ((0, _hasSelection["default"])()) return;
      event.stopPropagation();

      _this.setState({
        isEditingAfter: true
      });

      _this.props.onEditBegin();
    });

    _defineProperty(_assertThisInitialized(_this), "onPropertyClick", function (event) {
      if ((0, _hasSelection["default"])()) return;
      event.stopPropagation();

      _this.setState({
        isEditingProperty: true
      });

      _this.props.onEditBegin();
    });

    _defineProperty(_assertThisInitialized(_this), "onValueClick", function (event) {
      if ((0, _hasSelection["default"])()) return;
      event.stopPropagation();

      _this.setState({
        isEditingValue: true
      });

      _this.props.onEditBegin();
    });

    _defineProperty(_assertThisInitialized(_this), "onAreaBlur", function (id, payload) {
      _this.setState({
        isEditingProperty: false,
        isEditingValue: false,
        isEditingAfter: false
      });

      _this.props.onEditEnd(id, payload);
    });

    return _this;
  }

  _createClass(Declaration, [{
    key: "render",
    value:
    /**
     *
     */
    function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          property = _this$props2.property,
          value = _this$props2.value,
          hasColon = _this$props2.hasColon,
          onTick = _this$props2.onTick,
          isValid = _this$props2.isValid;
      var _this$state = this.state,
          isEditingProperty = _this$state.isEditingProperty,
          isEditingValue = _this$state.isEditingValue,
          isEditingAfter = _this$state.isEditingAfter;

      if (!hasColon && !property.trim()) {
        return null;
      }

      var cleanProperty = (0, _clean["default"])(property);
      var cleanValue = (0, _clean["default"])(value);
      var shortValue = cleanValue;
      var shortTitle = '';

      if (cleanValue.length > MAX_CHARS_VALUE) {
        shortValue = (0, _shorten["default"])(cleanValue, MAX_CHARS_VALUE);
        shortTitle = (0, _shorten["default"])(cleanValue, MAX_CHARS_TITLE);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cls["default"])(classes.root, !isValid && classes.isInvalid),
        onClick: this.onDeclarationClick
      }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        id: id,
        tick: 1,
        onTick: onTick
      }), isEditingProperty ? this.renderArea('property', property) : /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _cls["default"])(classes.property, !cleanProperty && classes.isEmpty),
        onClick: this.onPropertyClick
      }, cleanProperty), ': ', isEditingValue ? this.renderArea('value', value) : /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _cls["default"])(classes.value, !cleanValue && classes.isEmpty),
        onClick: this.onValueClick,
        title: shortTitle
      }, shortValue), ';', !isValid && /*#__PURE__*/_react["default"].createElement(_Alert["default"], null), isEditingAfter && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.after
      }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        tick: 1
      }), this.renderArea(_COMMON.AFTER, '')));
    }
    /**
     *
     */

  }]);

  return Declaration;
}(_react["default"].PureComponent); // =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================


var _default = Declaration;
exports["default"] = _default;