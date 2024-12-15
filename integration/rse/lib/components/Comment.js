"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _stylize = _interopRequireDefault(require("../utils/stylize"));

var _clean = _interopRequireDefault(require("../utils/clean"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _Area = _interopRequireDefault(require("./Area"));

var _COMMON = require("../utils/COMMON");

var _shorten = _interopRequireDefault(require("../utils/shorten"));

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
var classes = (0, _stylize["default"])('Comment', {
  root: {
    color: 'silver',
    padding: '2px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  content: {
    cursor: 'text',
    borderBottom: '1px dashed transparent',
    '&:hover': {
      borderBottomColor: 'currentColor'
    }
  },
  after: {
    marginTop: 4
  }
});
var MAX_CHARS_VALUE = 32; // how many characters to display in the value. Protects against giant base64.

var MAX_CHARS_TITLE = 512; // how many characters to display in the tooltip. Protects against giant base64.
// =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================

var Comment = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Comment, _React$PureComponent);

  var _super = _createSuper(Comment);

  function Comment() {
    var _this;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isEditingContent: false,
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

    _defineProperty(_assertThisInitialized(_this), "onContentClick", function (event) {
      if ((0, _hasSelection["default"])()) return;
      event.stopPropagation();

      _this.setState({
        isEditingContent: true
      });

      _this.props.onEditBegin();
    });

    _defineProperty(_assertThisInitialized(_this), "onCommentClick", function (event) {
      if ((0, _hasSelection["default"])()) return;
      event.stopPropagation();

      _this.setState({
        isEditingAfter: true
      });

      _this.props.onEditBegin();
    });

    _defineProperty(_assertThisInitialized(_this), "onAreaBlur", function (id, payload) {
      _this.setState({
        isEditingContent: false,
        isEditingAfter: false
      });

      _this.props.onEditEnd(id, payload);
    });

    return _this;
  }

  _createClass(Comment, [{
    key: "render",
    value:
    /**
     *
     */
    function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          content = _this$props2.content,
          onTick = _this$props2.onTick;
      var _this$state = this.state,
          isEditingContent = _this$state.isEditingContent,
          isEditingAfter = _this$state.isEditingAfter;
      var cleanContent = (0, _clean["default"])(content);
      var shortContent = cleanContent;
      var shortTitle = '';

      if (cleanContent.length > MAX_CHARS_VALUE) {
        shortContent = (0, _shorten["default"])(cleanContent, MAX_CHARS_VALUE);
        shortTitle = (0, _shorten["default"])(cleanContent, MAX_CHARS_TITLE);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root,
        onClick: this.onCommentClick
      }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        id: id,
        tick: 0,
        onTick: onTick
      }), isEditingContent ? this.renderArea('content', content) : /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.content,
        title: shortTitle,
        onClick: this.onContentClick
      }, '/*' + shortContent + '*/'), isEditingAfter && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.after
      }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        tick: 1
      }), this.renderArea(_COMMON.AFTER, '')));
    }
    /**
     *
     */

  }]);

  return Comment;
}(_react["default"].PureComponent); // =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================


var _default = Comment;
exports["default"] = _default;