"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _cls = _interopRequireDefault(require("../utils/cls"));

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
var classes = (0, _stylize["default"])('Checkbox', {
  root: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: -2,
    marginRight: 4,
    width: 12,
    height: 12,
    border: 'solid 1px #333333',
    userSelect: 'none'
  },
  checked: {
    '&:after': {
      position: 'absolute',
      content: '""',
      left: 3,
      top: 0,
      width: 3,
      height: 7,
      border: 'solid 1px #000',
      borderTop: 'none',
      borderLeft: 'none',
      transform: 'rotate(45deg)'
    }
  },
  mixed: {
    // currently unused
    '&:after': {
      position: 'absolute',
      content: '""',
      left: 2,
      top: 2,
      width: 6,
      height: 6,
      background: '#333'
    }
  }
}); // =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================

var Checkbox = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Checkbox, _React$PureComponent);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          onTick = _this$props.onTick,
          id = _this$props.id,
          tick = _this$props.tick;
      onTick(id, [true, false, true][tick]); // 0 => true, 1 => false, 2 => true
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value:
    /**
     *
     */
    function render() {
      var tick = this.props.tick;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cls["default"])(classes.root, tick === 1 && classes.checked, tick === 2 && classes.mixed),
        onClick: this.onClick
      });
    }
    /**
     *
     */

  }]);

  return Checkbox;
}(_react["default"].PureComponent); // =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================


Checkbox.defaultProps = {
  tick: 0
};
var _default = Checkbox;
exports["default"] = _default;