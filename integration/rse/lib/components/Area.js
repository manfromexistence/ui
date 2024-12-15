"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _stylize = _interopRequireDefault(require("../utils/stylize"));

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
var classes = (0, _stylize["default"])('Area', {
  root: {
    fontFamily: 'Consolas, Liberation Mono, Menlo, monospace',
    // synced with StyleEditor's fontFamily
    fontSize: '12px',
    // synced with StyleEditor's fontSize
    resize: 'none',
    verticalAlign: 'middle',
    overflow: 'hidden',
    padding: 2,
    border: 'none',
    outline: 'solid 1px #ccc',
    outlineOffset: '-1px',
    minWidth: 4,
    textDecoration: 'none',
    // to combat `isInvalid` from upstream
    pointerEvents: 'auto !important' // to combat the general lock imposed by StyleEditor

  }
}); // =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================

var Area = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Area, _React$PureComponent);

  var _super = _createSuper(Area);

  function Area() {
    var _this;

    _classCallCheck(this, Area);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "ref", /*#__PURE__*/_react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "autoSize", function () {
      var textarea = _this.ref.current;
      textarea.style.whiteSpace = 'noWrap';
      textarea.style.width = '0';
      textarea.style.height = '0';
      var w = textarea.scrollWidth;
      var previousElement = textarea.previousElementSibling;
      var offset = 0;

      if (previousElement) {
        offset = previousElement.offsetLeft + previousElement.offsetWidth;
      }

      if (offset + w > textarea.parentNode.offsetWidth) {
        textarea.style.whiteSpace = 'normal';
        textarea.style.display = 'block';
        textarea.style.width = '100%';
      } else {
        textarea.style.display = 'inline-block';
        textarea.style.width = textarea.scrollWidth + 2 + 'px';
      }

      textarea.style.height = textarea.scrollHeight + 'px';
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      event.stopPropagation(); // prevent upstream handlers that would cause a blur
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      event.stopPropagation(); // we're handling the change manually and this event collides with us upstream

      _this.autoSize();

      var _this$props = _this.props,
          onChange = _this$props.onChange,
          id = _this$props.id,
          payloadProperty = _this$props.payloadProperty;
      onChange(id, _defineProperty({}, payloadProperty, event.currentTarget.value));
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      var _this$props2 = _this.props,
          onBlur = _this$props2.onBlur,
          id = _this$props2.id,
          payloadProperty = _this$props2.payloadProperty;
      onBlur(id, _defineProperty({}, payloadProperty, event.currentTarget.value));
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // console.log(event.key);
      switch (event.key) {
        case 'Enter':
          if (event.shiftKey) {
            return; // allow Shift+Enter
          }

          _this.onBlur(event);

          cancelEvent(event);
          return;

        case 'Escape':
          event.currentTarget.value = _this.props.defaultValue;

          _this.onChange(event);

          _this.onBlur(event);

          cancelEvent(event);
          break;

        default:
          break;
        // allow any other characters
      }
    });

    return _this;
  }

  _createClass(Area, [{
    key: "render",
    value:
    /**
     *
     */
    function render() {
      var defaultValue = this.props.defaultValue;
      return /*#__PURE__*/_react["default"].createElement("textarea", {
        className: classes.root,
        defaultValue: defaultValue,
        onClick: this.onClick,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        ref: this.ref
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var textarea = this.ref.current;
      textarea.focus();
      textarea.select();
      this.autoSize();
    }
    /**
     *
     */

  }]);

  return Area;
}(_react["default"].PureComponent); // =====================================================================================================================
//  H E L P E R S
// =====================================================================================================================

/**
 *
 */


var cancelEvent = function cancelEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}; // =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================


var _default = Area;
exports["default"] = _default;