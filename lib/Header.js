"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _this.onInputChange = function (event) {
      var str = event.target.value;

      _this.setState({
        str: str
      });

      var _this$props = _this.props,
          format = _this$props.format,
          hourOptions = _this$props.hourOptions,
          minuteOptions = _this$props.minuteOptions,
          secondOptions = _this$props.secondOptions,
          disabledHours = _this$props.disabledHours,
          disabledMinutes = _this$props.disabledMinutes,
          disabledSeconds = _this$props.disabledSeconds,
          onChange = _this$props.onChange;

      if (str) {
        var originalValue = _this.props.value;

        var value = _this.getProtoValue().clone();

        var parsed = (0, _moment["default"])(str, format, true);

        if (!parsed.isValid()) {
          _this.setState({
            invalid: true
          });

          return;
        }

        value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second()); // if time value not allowed, response warning.

        if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
          _this.setState({
            invalid: true
          });

          return;
        } // if time value is disabled, response warning.


        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes(value.hour());
        var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());

        if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
          _this.setState({
            invalid: true
          });

          return;
        }

        if (originalValue) {
          if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
            // keep other fields for rc-calendar
            var changedValue = originalValue.clone();
            changedValue.hour(value.hour());
            changedValue.minute(value.minute());
            changedValue.second(value.second());
            onChange(changedValue);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else {
        onChange(null);
      }

      _this.setState({
        invalid: false
      });
    };

    var _value = props.value,
        _format = props.format;
    _this.state = {
      str: _value && _value.format(_format) || '',
      invalid: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          format = nextProps.format;
      this.setState({
        str: value && value.format(format) || '',
        invalid: false
      });
    }
  }, {
    key: "getProtoValue",
    value: function getProtoValue() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          defaultOpenValue = _this$props2.defaultOpenValue;
      return value || defaultOpenValue;
    }
  }, {
    key: "getInput",
    value: function getInput() {
      var _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          placeholder = _this$props3.placeholder,
          inputReadOnly = _this$props3.inputReadOnly;
      var _this$state = this.state,
          invalid = _this$state.invalid,
          str = _this$state.str;
      var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : '';
      return _react["default"].createElement("input", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-input"), invalidClass),
        ref: function ref(_ref) {
          _this2.refInput = _ref;
        },
        onKeyDown: this.onKeyDown,
        value: str,
        placeholder: placeholder,
        onChange: this.onInputChange,
        readOnly: !!inputReadOnly,
        "aria-live": "polite",
        "aria-invalid": invalid
      });
    }
  }, {
    key: "render",
    value: function render() {
      var prefixCls = this.props.prefixCls;
      return _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-input-wrap")
      }, this.getInput());
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  format: _propTypes["default"].string,
  prefixCls: _propTypes["default"].string,
  disabledDate: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  value: _propTypes["default"].object,
  inputReadOnly: _propTypes["default"].bool,
  hourOptions: _propTypes["default"].array,
  minuteOptions: _propTypes["default"].array,
  secondOptions: _propTypes["default"].array,
  disabledHours: _propTypes["default"].func,
  disabledMinutes: _propTypes["default"].func,
  disabledSeconds: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  defaultOpenValue: _propTypes["default"].object,
  onKeyDown: _propTypes["default"].func
};
Header.defaultProps = {
  inputReadOnly: false
};
var _default = Header;
exports["default"] = _default;